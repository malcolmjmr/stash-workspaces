

export const get = async (key) => {
    const data = (await chrome.storage.local.get([key])) ?? {};
    return data[key];
}

export const set = async (record) => {
    await chrome.storage.local.set(record);
}

export const getFavIconUrl = async (u) => {
    const url = new URL(await chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", u);
    url.searchParams.set("size", "32");
    return url.toString();
};

export const tryToSaveBookmark = async (tab, group) => {
    try {
        return await saveTabAsBookmark(tab, group);
    } catch (e) {
        const granted = await chrome.permissions.request({
            permissions: ['bookmarks']
        });

        if (granted) {
            return await saveTabAsBookmark(tab, group);
        }

    }

    return { tab, group };
};

export const saveTabAsBookmark = async (tab, group) => {

    if (!group.folder) {
        group.folder = await chrome.bookmarks.create({ title: group.title });
    }

    const bookmark = await chrome.bookmarks.create({
        title: tab.title,
        url: tab.url,
        parentId: group.folder.id
    });

    if (!tab.bookmarks) tab.bookmarks = [];
    tab.bookmarks.push(bookmark);

    return { tab, group };
};


// Contexts

async function getContext(contextId) {
    if (!contextId) return null;
    else
        return await get(getContextKey(contextId));
}

async function findExistingContextForGroup(group) {
    if (group.title == '') return null;
    return (await getContexts()).find((c) => c.title == group.title);
}

async function getContextIdFromGroupId(groupId) {
    const openGroups = await get('openGroups') ?? {};
    return openGroups[groupId];
}


async function getContextFromGroupId(groupId) {
    const contextId = await getContextIdFromGroupId(groupId);
    return contextId ? await getContext(contextId) : null;
}

async function getContextFromTab(tab) {
    if (tab.groupId > -1) return await getContextFromGroupId(tab.groupId);
    return null;
}

async function closeContext(context) {

    if (!context) return;

    context.closed = Date.now();
    context.activeTabIndex = context.tabs.findIndex((t) => context.activeTabId == t.id);
    delete context.isOpen;
    delete context.isActive;
    delete context.activeTabId;
    delete context.isCollapsed;
    delete context.groupId;
    await saveContext(context);

    await removeOpenContext(context);

}

async function saveContext(context) {

    context.updated = Date.now();

    let record = {};
    record[getContextKey(context.id)] = context;
    await chrome.storage.local.set(record);
    return context;
}

async function removeOpenContext(context) {
    let openGroups = await get('openGroups');
    const existingContext = Object.entries(openGroups)
        .find(([key, v]) => v == context.id);
    if (existingContext) delete openGroups[existingContext[0]];
    await set({ openGroups: openGroups });
}

export async function getContexts(filter) {
    let results = [];
    const contextKeys = await get('contextKeys') ?? [];
    if (contextKeys.length == 0) return results;
    const data = await chrome.storage.local.get(contextKeys);
    
    for (const [key, val] of Object.entries(data)) {

        if (!filter || filter(val))
            results.push(val);

    }
    return results;
}

export async function removeContexts(contexts) {
    const contextKeysToRemove = contexts.map((c) => getContextKey(c));
    const contextKeys = (await get('contextKeys') ?? []).filter((k) => !contextKeysToRemove.includes(k));
    
}

async function getContextData(contextId) {
    return (await get(getContextDataKey(contextId))) ?? {};
}

function getContextKey(contextId) {
    return contextKeyPrefix() + contextId;
}

function contextKeyPrefix() {
    return 'c-';
}

function getContextDataKey(contextId) {
    return 'cr-' + contextId;
}