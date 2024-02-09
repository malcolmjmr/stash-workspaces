export const closeAllTabs = async (workspace) => {
    const tabs = await chrome.tabs.query({ groupId: workspace.groupId });

    let tabsToClose = [];
    let pinnedTabs = [];
    for (const tab of tabs) {
        if (workspace.pinnedTabs?.find((t) => t.url == tab.url || t.id == tab.id)) {
            pinnedTabs.push(tab);
        } else {
            tabsToClose.push(tab);
        }
    }

    if (pinnedTabs.length == 0) {
        const newTab = await chrome.tabs.create({});
        await chrome.tabs.group({ tabIds: newTab.id, groupId: workspace.groupId });
    }
    
    await chrome.tabs.remove(tabsToClose.map((t) => t.id));
};