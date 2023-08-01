<script>
    import { onMount } from "svelte";
    import { get, getPermissions } from "./utilities/chrome.js";
    import { Views } from "./view.js";

    let settings;
    export let tabs = [];
    export let groups = [];
    export let windows = [];
    export let activeTab;



    export let lastRefresh;
    export let lastUpdate;
    export let lastUpdatedTab;
    export let lastUpdatedWindow;
    export let lastUpdatedGroup;

    export let currentWindowId;
    export let view; 

    onMount(() => {
        init();
    });

    $: {
        lastRefresh;
        loadTabsGroupsAndWindows();
    }


    export let windowsLoaded;
    const init = async () => {
        await getActiveTab();
        await getPermissions();
        await loadTabsGroupsAndWindows();
        addListeners();
        //setView();
        //initializeFirebase();
        windowsLoaded = true;
    };

    export let hasBookmarkPermission;


    const setView = async () => {

        const allTabsInGroup = !tabs.find((t) => activeTab.groupId == -1 || t.windowId == activeTab.windowId && t.groupId != activeTab.groupId);
        if (allTabsInGroup) {
            view = Views.workspace;
        } else {
            view = Views.tabs;
        }
    };

    const loadTabsGroupsAndWindows = async () => {
        tabs = await chrome.tabs.query({});
        // if (hasBookmarkPermission) {
        //     for (let i = 0; i < tabs.length; i++) {
        //         tabs[i].bookmarks = await getTabsBookmarks(tabs[i]);
        //     }
        // }
        windows = await chrome.windows.getAll();
        const groupsArray = await chrome.tabGroups.query({});

        const openGroups = await get('openGroups');
        console.log('open groups');
        console.log(openGroups);
        let tempGroups = {};
        for (let group of groupsArray) {
            if (!tempGroups[group.id]) {
     
                group.workspaceId = openGroups[group.id];
                
                tempGroups[group.id] = group;
            }
        }
        groups = tempGroups;
        let tempWindows = [];
        for (let window of windows) {
            window = updateWindowData(window);
            tempWindows.push(window);
        }
    };

    const updateWindowData = (window) => {
        window.groups = {};
        window.tabs = [];
        for (const tab of tabs) {
            if (tab.windowId != window.id) continue;
            window.tabs.push(tab);
            if (tab.groupId > -1 && !window.groups[tab.groupId]) {
                window.groups[tab.groupId] = groups[tab.groupId];
            }
        }

        return window;
    };

    const getActiveTab = async () => {
        activeTab = (
            await chrome.tabs.query({
                active: true,
                windowId: await chrome.windows.WINDOW_ID_CURRENT,
            })
        )[0];

        if (!currentWindowId) currentWindowId = activeTab.windowId;
    };

    const addListeners = () => {
        chrome.tabs.onActivated.addListener(onTabActivated);
        chrome.tabs.onCreated.addListener(onTabCreated);
        chrome.tabs.onUpdated.addListener(onTabUpdated);
        chrome.tabs.onMoved.addListener(onTabMoved);
        chrome.tabs.onRemoved.addListener(onTabRemoved);
        chrome.tabGroups.onCreated.addListener(onTabGroupCreated);
        chrome.tabGroups.onUpdated.addListener(onTabGroupUpdated);
        chrome.tabGroups.onRemoved.addListener(onTabGroupRemoved);
        chrome.windows.onCreated.addListener(onWindowCreated);
        chrome.windows.onRemoved.addListener(onWindowRemoved);
        if (hasBookmarkPermission) {
            chrome.bookmarks.onCreated.addListener(onBookmarkCreated);
            chrome.bookmarks.onRemoved.addListener(onBookmarkRemoved);
        }
    };

    const onTabActivated = async ({ tabId, windowId }) => {
        const oldActiveTabIndex = tabs.findIndex(
            (t) => t.windowId == windowId && t.active
        );
        const newActiveTabIndex = tabs.findIndex((t) => t.id == tabId);
        if (newActiveTabIndex > -1) {
            if (oldActiveTabIndex > -1) {
                tabs[oldActiveTabIndex].active = false;
                lastUpdatedTab = tabs[oldActiveTabIndex];
            }
            tabs[newActiveTabIndex].active = true;
            activeTab = tabs[newActiveTabIndex];
            lastUpdatedTab = tabs[newActiveTabIndex];
        }
        if (view == Views.windows && windowId == currentWindowId) {
            // Need to account for when active tab is set after tabs are moved
            view = Views.tabs;
        }
    };

    const onTabCreated = async (tab) => {
        //tab.bookmarks = await getTabsBookmarks(tab);
        tab.updated = Date.now();
        tabs = [...tabs, tab];
        updateTabsWithinWindow(tab.windowId, tab.id);
    };

    const onTabUpdated = (tabId, updated) => {
        let tabIndex = tabs.findIndex((t) => t.id == tabId);
        if (tabIndex > -1) {
            let tab = { ...tabs[tabIndex], ...updated };
            tab.updated = Date.now();
            tabs[tabIndex] = tab;
            tabs = tabs;
            lastUpdatedTab = tab;
            //lastUpdatedWindow = tab.windowId;
            
        }
    };

    // const checkForUpdateToTabWithinSpace = async (tab) => {
    //     if (tab.groupId == -1) return;
        
    //     const workspace = workspaces.find((w) => w.groupId == groupId);
    //     if (!workspace) return;

    //     const tabData = (await chrome.bookmarks.getChildren(workspace.folder.id)).filter((b) => b.title.includes(tab.id));
    //     const tabBookmark = tabData.length > 0 ?  tabData[0] : null;
    //     if (!tabBookmark) return;

    //     await chrome.bookmarks.update(tabBookmark.id, { 
    //         title: `${tab.title} [tab|${tab.id}]`, 
    //         url: tab.url
    //     });
    // }

    const onTabMoved = async (tabId, { windowId, toIndex, fromIndex }) => {
        const tabIndex = tabs.findIndex((t) => t.id == tabId);
        if (tabIndex == -1) {
            console.log("could not find tab");
            return;
        }
        let delay = 0;
        if (tabs[tabIndex].windowId != windowId) {
            tabs[tabIndex].windowId = windowId;
        }

        const window = windows.find((w) => w.id == windowId);
        if (!window) {
            windows = [...windows, await chrome.windows.get(windowId)];
        }
        updateTabsWithinWindow(windowId, tabId);
    };

    const onTabRemoved = (tabId) => {
        const index = tabs.findIndex((t) => t.id == tabId);
        if (index > -1) {
            const tab = { ...tabs[index] };
            tabs.splice(index, 1);
            if (tab) updateTabsWithinWindow(tab.windowId, tabId);
        }
    };

    const updateTabsWithinWindow = async (windowId, updatedTabId) => {
        let updatedTabs = await chrome.tabs.query({ windowId });

        for (const tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) {
                let storedTab = tabs[index];
                if (storedTab.id == updatedTabId) storedTab.updated = Date.now();
                tabs[index] = { ...storedTab, ...tab };
            } else {
                
                tabs.push(tab);
            }
        }
        tabs.sort((a, b) => a.index - b.index);
        tabs = tabs;
        lastUpdate = Date.now();
        //checkForDataRefresh();
        lastUpdatedWindow = windowId;
    };

    let lastPeriodicRefresh = Date.now();
    const checkForDataRefresh = () => {
        const now = Date.now()
        if (!lastPeriodicRefresh) { 
            lastPeriodicRefresh = now;
            return;
        }

        if (lastPeriodicRefresh - now > (1000 * 60 * 10)) {
            //check first if there are any duplicates
            loadTabsGroupsAndWindows();
            lastPeriodicRefresh = now;
        }
    
    }

    const updateTabsWithinGroup = async (groupId) => {
        let updatedTabs = await chrome.tabs.query({ groupId });
        for (const tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) tabs[index] = { ...tabs[index], ...tab };
            else {
                //tab.bookmarks = await getTabsBookmarks(tab);
                tabs.push(tab);
            }
        }
        tabs.sort((a, b) => a.index - b.index);
        tabs = tabs;
        lastUpdatedGroup = groupId;
        if (updatedTabs.length > 0 && updatedTabs[0].windowId) {
            lastUpdatedWindow = updatedTabs[0].windowId;
        }
        
    };

    const onWindowCreated = (window) => {
        windows = [...windows, window];
        setTimeout(() => {
            updateTabsWithinWindow(window.id);
        }, 500);
    };

    const onWindowRemoved = (windowId) => {
        const index = windows.findIndex((w) => w.id == windowId);
        if (index > -1) windows.splice(index, 1);
        windows = windows;
    };

    const onTabGroupCreated = async (group) => {

        group.new = true;
        //group.workspace = workspaces[group]
        groups[group.id] = group;
        updateTabsWithinGroup(group.windowId);
        lastUpdatedGroup = group.id;
        lastUpdate = Date.now();
    };

    const onTabGroupUpdated = (group) => {
        groups[group.id] = {...groups[group.id], ...group};
        delete groups[group.id].new;
        lastUpdatedGroup = group.id;
    };

    const onTabGroupRemoved = (groupId) => {
        delete groups[groupId];
        lastUpdatedGroup = groupId;
    };

    const onBookmarkCreated = async () => {};

    const onBookmarkRemoved = async () => {};

    const getTabsBookmarks = async (tab) => {
        let bookmarks;
        if (hasBookmarkPermission) {
            const bookmarkResults = await chrome.bookmarks.search({
                url: tab.url,
            });
            if (bookmarkResults.length == 1) {
                const isNotTabBookmark = !bookmarkResults[0].title.includes('tab|');
                if (isNotTabBookmark) {
                    bookmarks = bookmarkResults;
                }
            } else if (bookmarkResults.length > 1) {
                bookmarks = bookmarkResults;
            }
        }

        return bookmarks;
    };

    const onBookmarkAdded = () => {
        //lastUpdate = Date.now();
    };
</script>
