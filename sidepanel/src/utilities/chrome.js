
export const getPermissions = async () => {
    return await chrome.permissions.contains({
        permissions: ["bookmarks"],
    });
};

export const get = async (key) => {
    const data = (await chrome.storage.local.get([key])) ?? {};
    return data[key];
}

export const set = async (record) => {
    await chrome.storage.local.set(record);
}

export const getOpenGroups = async () => {
    return await get('openGroups');
}

export const getFavIconUrl = async (u) => {
    const url = new URL(await chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", u);
    url.searchParams.set("size", "32");
    return url.toString();
};

export const requestBookmarkPermssion = async () => {
    const granted = await chrome.permissions.request({
        permissions: ['bookmarks']
    });

}

export const tryToSaveBookmark = async (tab, group) => {
    try {
        return await saveTabAsBookmark(tab, group);
    } catch (e) {
        await requestBookmarkPermssion();
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

export async function getContext(contextId) {
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


export async function getContextFromGroupId(groupId) {
    const contextId = await getContextIdFromGroupId(groupId);
    return contextId ? await getContext(contextId) : null;
}

async function getContextFromTab(tab) {
    if (tab.groupId > -1) return await getContextFromGroupId(tab.groupId);
    return null;
}

export async function closeTabGroup(groupId) {

    if (!groupId || groupId == -1) return;

    const tabs = await chrome.tabs.query({ groupId: groupId });
    const tabIds = tabs.map((t) => t.id);

    let context = await getContextFromGroupId(groupId);

    if (!context) return;

    await closeContext(context);
    setTimeout(() => {
        chrome.tabs.remove(tabIds);
    }, 200)



}

export const openWorkspace = async (workspace, {openInNewWindow}) => {
    await set({
        workspaceToOpen: {
            workspace,
            time: Date.now(),
        }
    });

    let openedTabs = [];
    let window;
    let newTab; 
    if (openInNewWindow) {
        window = await chrome.windows.create({incognito: workspace.isIncognito ?? false, focused:true});
        newTab = (await chrome.tabs.query({windowId: window.id}))[0];
    }
    
    if (workspace.tabs.length == 0)  {
        workspace.tabs.push({
            url: ''
        });
    }

    for (const tab of workspace.tabs) {
        openedTabs.push(await chrome.tabs.create({url: tab.url, windowId: window?.id}));
    }
    const groupId = await chrome.tabs.group({
        tabIds: openedTabs.map((t) => t.id),
        createProperties: {
            windowId: window?.id
        },
    });
    await chrome.tabGroups.update(groupId, {
        title: workspace.title, 
        color: workspace.color 
    });

    if (newTab) {
        await chrome.tabs.remove(newTab.id);
    }
    

};

export async function closeContext(context) {

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

export async function saveContext(context, saveUpdateTime = true) {

    if (saveUpdateTime) context.updated = Date.now();

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
    let contextKeys = await get('contextKeys') ?? [];
    // if (contextKeys.length == 0) return results;
    // const data = await chrome.storage.local.get(contextKeys);
    
    // for (const [key, val] of Object.entries(data)) {

    //     if (!filter || filter(val))
    //         results.push(val);

    // }

    let updateContextKeys = false;
    const data = await chrome.storage.local.get(null);
    for (const [key, val] of Object.entries(data)) {
        if (key.startsWith(contextKeyPrefix())) {
            if (!filter || filter(val))
                results.push(val);

            if (!contextKeys.includes(key)) {
                contextKeys.push(key);
                updateContextKeys = true;
            }
        }
    }

    if (updateContextKeys) {
        await set({ contextKeys });
    }
        
    return results;
}

export async function removeContext(context) {

    await removeOpenContext(context);

    const contextKey = getContextKey(context.id);
    let contextKeys = await get('contextKeys');

    const index = contextKeys.indexOf(contextKey);
    if (index > -1) {
        contextKeys.splice(index, 1);
        await set({ contextKeys });
    }

    await chrome.storage.local.remove(contextKey);

    // const bookmarkFolder = await tryToGetBookmark(context.folderId);
    // if (bookmarkFolder) {
    //     const extensionFolder = await getExtensionFolder();
    //     if (extensionFolder.id == bookmarkFolder.parentId) {
    //         await chrome.bookmarks.removeTree(context.folderId);
    //     }
    // }

    const collectionKey = getContextDataKey(context.id);
    await chrome.storage.local.remove(collectionKey);

}

export async function removeContexts(contexts) {
    const contextKeysToRemove = contexts.map((c) => getContextKey(c));
    const contextKeys = (await get('contextKeys') ?? []).filter((k) => !contextKeysToRemove.includes(k));
    
}

export async function getContextData(contextId) {
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

export async function saveContextData(context, contextData) {

    if (!contextData) return;

    contextData.updated = Date.now();
    const record = {};
    record[getContextDataKey(context.id)] = contextData;
    await set(record);

    // context.openWindows = contextData.windows?.length
    // if (context.openWindows == 0) delete context.openWindows;
    //await saveContext(context);
    //notifyCollectionInterface(context);
}

export async function tryToGetBookmark(bookmarkId) {
    if (!bookmarkId) return;

    let bookmark;
    try {
        bookmark = (await chrome.bookmarks.get(bookmarkId))[0];
    } catch (error) {

    }
    return bookmark;
}

export async function tryToGetBookmarkChildren(bookmarkId) {
    if (!bookmarkId) return [];

    let bookmarks = [];
    try {
        bookmarks = (await chrome.bookmarks.getChildren(bookmarkId));
    } catch (error) {

    }
    return bookmarks;
}

export async function tryToGetBookmarkTree(bookmarkId) {
    let tree;
    try {
        tree = (await chrome.bookmarks.getSubTree(bookmarkId));
    } catch (error) {

    }

    return tree;
}


export function createId() {
    let string = '';
    for (let i = 0; i < 8; i++) string += S4();
    return string;
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function getTabInfo(tab) {

    let tabInfo = {
        id: tab.id,
        title: tab.title,
        url: tab.url && tab.url != '' ? tab.url : tab.pendingUrl,
        favIconUrl: tab.favIconUrl,
    };

    return tabInfo;
}

export async function getFavoriteSpaces() {
    const data = (await chrome.storage.sync.get(['favoriteSpaces'])) ?? {};
    return data['favoriteSpaces'];
}