// Runtime
chrome.runtime.onInstalled.addListener((details) => onInstalled(details));
chrome.runtime.onUpdateAvailable.addListener((details) => onUpdateAvailable(details));

// Sidepanel
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

// Tabs
chrome.tabs.onCreated.addListener((tab) => onTabCreated(tab));
//chrome.tabs.onActivated.addListener((activeInfo) => onTabActivated(activeInfo.tabId))
chrome.tabs.onMoved.addListener((tabId, moveInfo) => onTabMoved(tabId, moveInfo));
chrome.tabs.onDetached.addListener((tabId, detachInfo) => onTabDetached(tabId, detachInfo));
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => onTabUpdated(tabId, changeInfo));
chrome.tabs.onHighlighted.addListener((highlightInfo) => onTabsHighlighted(highlightInfo.tabIds));
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => onTabClosed(tabId));

// Tab groups
chrome.tabGroups.onCreated.addListener((group) => onTabGroupCreated(group));
chrome.tabGroups.onUpdated.addListener((group) => onTabGroupUpdated(group));
chrome.tabGroups.onRemoved.addListener((group) => onTabGroupClosed(group)); // 1000 delay

// Commands
chrome.commands.onCommand.addListener((command, tab) => onCommand(command, tab));

async function onInstalled(details) {

    if (details.reason !== 'install') return;
    const uninstallPageURL = 'https://docs.google.com/forms/d/e/1FAIpQLSddZpwYkSxv1xZcIsuXxezx11jA6E3jivLddvsPcEaOi9RXfQ/viewform?usp=sf_link';
    await chrome.runtime.setUninstallURL(uninstallPageURL);
    await setInitialData();
    await importUsersTabGroups();
}

async function onUpdateAvailable(details) {
    await chrome.runtime.reload();
}

async function setInitialData() {
    const browser = 'chrome';
    const platformInfo = await chrome.runtime.getPlatformInfo();
    const date = new Date();
    const initialData = await getInitialData();
    await chrome.storage.local.set({
        openGroups: {},
        contextKeys: [],
        config: {
            browser,
            os: platformInfo.os,
            arch: platformInfo.arch,
            progress: { install: date.valueOf() },
            usage: {},
            initialData,
            settings: {

            }
        }
    });
}

async function getInitialData() {

    let data = {
        tabCount: (await chrome.tabs.query({})).length,
        tabGroupCount: (await chrome.tabGroups.query({})).length,
        windowCount: (await chrome.windows.getAll()).length,
    };

    let uses = {};
    if (data.recentFolderCount > 2) uses.bookmarks = true;
    if (data.windowCount > 2) uses.windows = true;

    if (data.tabGroupCount > 0) {
        if (data.tabCount / data.tabGroupCount > 7) {
            uses.tooManyTabs = true;
        }
    } else if (data.tabCount / data.windowCount > 7) {
        uses.tooManyTabs = true;
    }

    if (data.tabGroupCount > 0) uses.tabGroups = true;
    data.uses = uses;

    return data

}

async function importUsersTabGroups() {

    const config = await get('config');

    let openGroups = {};

    const groups = await chrome.tabGroups.query({});

    for (const group of groups) {

        let tabs = (await chrome.tabs.query({ groupId: group.id }));
        tabs.sort((a, b) => a.index - b.index);

        let context = await createContext({
            title: group.title,
            groupId: group.id,
            color: group.color,
            tabs: tabs.map(getTabInfo),
            isOpen: true,
            activeTabId: tabs[0].id,
            isCollapsed: group.collapsed,
            openCount: 1,
            importedGroup: true,
        });


        await saveContext(context);

        openGroups[context.groupId] = context.id;

    }

    set({ openGroups });


}

// Commands 

async function onCommand(command, tab) {

    if (command == '01newTab') createNewTab(tab);
    else if (command == '02groupTabs') groupHighlightedTabs();
    // else if (command == '03undoGroup') undoGroup(context, tab);
    // else if (command == '04closeGroup') closeTabGroup(context.groupId);
    // else if (command == '05shutdown') shutdown(tab);
    // else if (command == '06openTabs') openHighlightedTabs(context, tab);
    // else if (command == '07saveTab') saveHighlightedTabs(context, tab);
    // else if (command == '08stashTab') stashHighlightedTabs(context, tab);
}

async function createNewTab(activeTab) {
    const newTab = await chrome.tabs.create({ index: activeTab.index + 1});
    if (activeTab.groupId > -1) {
        await chrome.tabs.group({
            tabIds: newTab.id, 
            groupId: activeTab.groupId
        });
    }
}


async function getActiveTab() {
    return (await chrome.tabs.query({ active: true, windowId: await chrome.windows.WINDOW_ID_CURRENT }))[0];
}

async function groupHighlightedTabs() {
    const highlightedTabs = await chrome.tabs.query({highlighted: true, currentWindow: true});
    highlightedTabs.sort((a, b) => a.id - b.id)
    const groupId = await chrome.tabs.group({tabIds: highlightedTabs.map((t) => t.id)});
    await chrome.tabGroups.update(groupId, {
        title: highlightedTabs[0].title
    });
};

// Tabs

async function onTabCreated(tab) {
    // check if tab belongs to tab group
    if (tab.groupId > -1) {
        const context = await getContextFromGroupId(tab.groupId);
        if (!context) return;
        context.tabs.push(getTabInfo(tab));
    } else {
        // check if tab should be grouped
    }
}

async function onTabDetached(tabId, detachInfo) {
    // check if tab moved out of saved group
    const tab = await chrome.tabs.get(tabId);
    if (tab.groupId == -1) {
        const tabInPreviousIndex = (await chrome.tabs.query({ 
            index: detachInfo.oldPosition, 
            windowId: detachInfo.oldWindowId
        }))[0];
        const previousContext = await getContextFromGroupId(tabInPreviousIndex.groupId);
        if (previousContext) {
            updateContextTabs(previousContext);
        }
    }
}

async function onTabMoved(tabId, moveInfo) {
    // check if tab moved out of saved group
    // const tab = await tryToGetTab(tabId)
    // const context = await getContextFromTab(tab);

    // if (context) {
    //     const tabsInGroup = await chrome.tabs.query({ groupId: tab.groupId });
    //     tabsInGroup.sort((a, b) => a.index - b.index);
    //     context.tabs = tabsInGroup.map(getTabInfo);
    //     context.activeTabId = tabId;
    //     await saveContext(context);
    // }
}

async function onTabUpdated(tabId, updated) {
    // check if tab updated 
    if (updated.status == 'complete') onResourceLoaded(tabId);
    else if (updated.groupId) onTabsGroupUpdated(tabId, updated.groupId);
}

async function onTabsHighlighted(tabIds) {
    // 
    
}

async function onTabClosed(tabId) {
    // check if need to remove from open context
    setTimeout(() => removeTabData(tabId), 1000);
}

async function updateContextTabs(context) {
    const tabsInGroup = await chrome.tabs.query({ groupId: context.groupId });
    tabsInGroup.sort((a, b) => a.index - b.index);
    context.tabs = tabsInGroup.map(getTabInfo);
    context.activeTabId = tabsInGroup.find((t) => t.active);
    await saveContext(context);
}

async function onResourceLoaded(tabId) {

    let tab = await chrome.tabs.get(tabId);
    var context = await getContextFromTab(tab);

    updateTabInfoIfNeeded(context, tab);
}

async function onTabsGroupUpdated(tabId, groupId) {
    const context = await getContextFromGroupId(groupId);
    if (context) {
        updateContextTabs(context);
    } else {
        removeTabData(tabId);
    }

}
// Tab Groups

async function onTabGroupCreated(group) {
    let context = await getContextFromGroupId(group.id);
    if (!context) {
        context = await findExistingContextForGroup(group);
        if (!context) {
            context = await createContextFromGroup(group);
            await updateOpenContexts(context);
        }
    }
}

async function onTabGroupUpdated(group) {
    // Update context data 
    var context = await getContextFromGroupId(group.id);
    if (!context) return;
    //const [collapsed, expanded] = await groupCollapsedHandler(group, context);
    const edited = await groupTitleHandler(group, context) || await groupColorHandler(group, context);



    context = await getContext(context.id);

    console.log(context);

}

async function groupTitleHandler(group, context) {
    const titleHasChanged = group.title != '' && group.title != context.title;
    if (titleHasChanged) {
        context.title = group.title;
        if (context.hasDefaultTitle) delete context.hasDefaultTitle;
        // if (!context.isIncognito) {
        //     await updateBookmark(context.folderId, {
        //         title: context.title,
        //     });
        // }

        await saveContext(context);
    }
    return titleHasChanged;
}

async function groupColorHandler(group, context) {
    const colorHasChanged = group.color != context.color;
    if (colorHasChanged) {
        context.color = group.color;
        await saveContext(context);
    }
    return colorHasChanged;
}



async function onTabGroupClosed(group) {
    // Remove context and delete if it hasn't been made into a workspace
    let context = await getContextFromGroupId(group.id);
    if (!context) return;

    const contextTabIds = context.tabs.map((t) => t.id);

    const tabs = (await chrome.tabs.query({ windowId: group.windowId }))
        .filter((t) => contextTabIds.includes(t.id));

    const isUngrouping = tabs.length > 0;
    if (isUngrouping) {
        if (context.size) {
            context.deleted = Date.now();
            await saveContext(context);
        } else {
            await removeContext(context);
        }
    } else {
        const activeGroup = (await chrome.tabGroups.query({})).find((g) => g.id == context.groupId);
        if (!activeGroup) closeContext(context);
    }
}




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

async function createContextFromGroup(group) {
    return await createContext({
        title: group.title,
        groupId: group.id,
        color: group.color,
        tabs: (await chrome.tabs.query({groupId: group.id})).map(getTabInfo)
    });
}


async function createContext(properties = {}, save = true) {

    let context = {
        id: createId(),
        created: Date.now(),
        tabs: [],
        isCollapsed: false,
        //hasDefaultTitle: true,
        ...properties,
    };

    if (save) {
        var config = await get('config');

        if (!config.usage?.contextCount) {
            const contexts = await getContexts();
            config.usage.contextCount = contexts.length - 1;
        }

        config.usage.contextCount += 1;
        context.color = config?.settings?.defaultColor ?? getRandomColor();
        const contextKey = getContextKey(context.id);

        let contextKeys = (await get('contextKeys') ?? []);
        contextKeys.push(contextKey);

        await set({ config });
        await set({ contextKeys });
        await saveContext(context);
    }

    return context;
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

async function updateOpenContexts(context) {
    let openGroups = await get('openGroups');
    const existingContext = Object.entries(openGroups)
        .find(([key, v]) => v == context.id);
    if (existingContext) delete openGroups[existingContext[0]];
    openGroups[context.groupId] = context.id;
    await set({ openGroups: openGroups });
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

async function removeContext(context) {
    let config = await get('config');
    if (!config.usage.deletedContexts) {
        config.usage.deletedContexts = 0;
    }
    config.usage.deletedContexts += 1;

    await set({ config });
    await removeOpenContext(context);

    const contextKey = getContextKey(context.id);
    let contextKeys = await get('contextKeys');

    const index = contextKeys.indexOf(contextKey);
    if (index > -1) {
        contextKeys.splice(index, 1);
        await set({ contextKeys });
    }

    await chrome.storage.local.remove(contextKey);

    const collectionKey = getContextDataKey(context.id);
    await chrome.storage.local.remove(collectionKey);

}

async function removeOpenContext(context) {
    let openGroups = await get('openGroups');
    const existingContext = Object.entries(openGroups)
        .find(([key, v]) => v == context.id);
    if (existingContext) delete openGroups[existingContext[0]];
    await set({ openGroups: openGroups });
}

async function getContexts(filter) {
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

async function saveContextData(context, contextData) {

    if (!contextData) return;

    contextData.updated = Date.now();
    const record = {};
    record[getContextDataKey(context.id)] = contextData;
    await set(record);

    // context.openWindows = contextData.windows?.length
    // if (context.openWindows == 0) delete context.openWindows;
    await saveContext(context);
    //notifyCollectionInterface(context);
}

async function removeTabData(tabId) {
    const openContextIds = Object.values(await get('openGroups'));
    const contexts = Object.values(await chrome.storage.local.get(openContextIds.map((id) => getContextKey(id))));
    for (const context of contexts) {
        if (!context) continue;
        const tabIndex = context.tabs.findIndex((t) => t.id == tabId);
        if (tabIndex > -1) {
            let [tab] = context.tabs.splice(tabIndex, 1);
            // if (tab.bookmarkId) await removeBookmark(tab.bookmarkId);
            if (context.activeTabId == tabId) {
                delete context.activeTabId;
            }
            await saveContext(context);
        }
    }
}

async function updateTabInfoIfNeeded(context, tab, options) {

    if (context) {

        if (context.groupId == tab.groupId) {
            let tabIndex = context.tabs.findIndex((t) => tab.id == t.id);
            let tabData = tabIndex > -1 ? context.tabs[tabIndex] : null;

            const needToUpdateTabInfo = tabData && Object.keys(tabData)
                .some((key) => tabData[key] != tab[key]);

            if (tabData && !needToUpdateTabInfo) return;


            if (tabIndex > -1) {

                context.tabs[tabIndex] = { ...tabData, ...getTabInfo(tab) };
                tab = context.tabs[tabIndex];

            } else {

                const tabsInGroup = await chrome.tabs.query({ groupId: context.groupId });
                tabsInGroup.sort((a, b) => a.index - b.index);
                context.tabs = tabsInGroup.map(getTabInfo);
                tabIndex = context.tabs.findIndex((t) => tab.id == t.id);
                tab = context.tabs[tabIndex];
            }

            await saveContext(context);
        } 

    }
}



// Helpers

export const get = async (key) => {
    const data = (await chrome.storage.local.get([key])) ?? {};
    return data[key];
}

export const set = async (record) => {
    await chrome.storage.local.set(record);
}

function createId() {
    let string = '';
    for (let i = 0; i < 8; i++) string += S4();
    return string;
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function getRandomColor() {
    const colors = ["grey", "blue", "red", "yellow", "green", "pink", "purple", "cyan", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

const colorMap = {
    "grey": "#dadce0",
    "blue": "#8ab4f8",
    "red": "#f18b82",
    "yellow": "#fbd563",
    "green": "#81c995",
    "pink": "#f08aca",
    "purple": "#c58af9",
    "cyan": "#78d9ec",
    "orange": "#f5ac70",
}

function getTabInfo(tab) {

    let tabInfo = {
        id: tab.id,
        title: tab.title,
        url: tab.url && tab.url != '' ? tab.url : tab.pendingUrl,
        favIconUrl: tab.favIconUrl,
    };

    return tabInfo;
}







