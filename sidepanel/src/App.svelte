<script>
    /*
        Todo: 
        - Add More section to window view
            - [ ] Feedback
            - [ ] Settings? 
                - [ ] Only show window view

        - Vertical tab view footer
            - [ ] group all tabs (when no group exists)
            - [ ] create new tab

        Bugs:
        - [ ] Refreshing tabs when active tab selected
       


        App Tree
            EventWidget (chrome listeners)
            AuthWidget (firebase)
            ViewWidget ()
        
    */

    import { onMount } from "svelte";
    import { get } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import SidePanel from "./SidePanel.svelte";
    import { apiConfig } from "./utilities/config.js";

    let settings;
    let tabs = [];
    let groups = [];
    let windows = [];
    let workspaces = [];
    let activeTab;
    let folder;


    let lastRefresh;
    let lastUpdate;
    let lastUpdatedTab;
    let lastUpdatedWindow;
    let lastUpdatedGroup;

    let currentWindowId;
    let view = Views.tabs;

    onMount(() => {
        init();
    });


    let loaded;
    const init = async () => {
        settings = (await get("settings")) ?? {};

        await getActiveTab();
        await getPermissions();
        await loadTabsGroupsAndWindows();
        addListeners();
        //initializeFirebase();
        loaded = true;
    };

    let hasBookmarkPermission;
    const getPermissions = async () => {
        hasBookmarkPermission = await chrome.permissions.contains({
            permissions: ["bookmarks"],
        });
    };

    const loadTabsGroupsAndWindows = async () => {
        tabs = await chrome.tabs.query({});
        if (hasBookmarkPermission) {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].bookmarks = await getTabsBookmarks(tabs[i]);
            }
        }
        windows = await chrome.windows.getAll();
        const groupsArray = await chrome.tabGroups.query({});
        let tempGroups = {};
        for (let group of groupsArray) {
            if (!tempGroups[group.id]) {
                if (hasBookmarkPermission) {
                    group.folder = await getGroupsBookmarkFolder(group);
                }
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
            lastUpdatedTab = tabs[newActiveTabIndex];
        }
        if (view == Views.windows && windowId == currentWindowId) {
            // Need to account for when active tab is set after tabs are moved
            view = Views.tabs;
        }
    };

    const onTabCreated = async (tab) => {
        tab.bookmarks = await getTabsBookmarks(tab);
        tabs = [...tabs, tab];
        updateTabsWithinWindow(tab.windowId);
    };

    const onTabUpdated = (tabId, updated) => {
        let tabIndex = tabs.findIndex((t) => t.id == tabId);
        if (tabIndex > -1) {
            let tab = { ...tabs[tabIndex], ...updated };
            tabs[tabIndex] = tab;
            tabs = tabs;
            lastUpdatedTab = tab;
            //lastUpdatedWindow = tab.windowId;

            if (updated.status == 'completed') {
                checkForUpdateToTabWithinSpace(tab);
            }
            
        }
    };

    const checkForUpdateToTabWithinSpace = async (tab) => {
        if (tab.groupId == -1) return;
        
        const workspace = workspaces.find((w) => w.groupId == groupId);
        if (!workspace) return;

        const tabData = (await chrome.bookmarks.getChildren(workspace.folderId)).filter((b) => b.title.includes(tab.id));
        const tabBookmark = tabData.length > 0 ?  tabData[0] : null;
        if (!tabBookmark) return;

        await chrome.bookmarks.update(tabBookmark.id, { 
            title: `${tab.title} [tab|${tab.id}]`, 
            url: tab.url
        });
    }

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
        updateTabsWithinWindow(windowId);
    };

    const onTabRemoved = (tabId) => {
        const index = tabs.findIndex((t) => t.id == tabId);
        if (index > -1) {
            const tab = { ...tabs[index] };
            tabs.splice(index, 1);
            if (tab) updateTabsWithinWindow(tab.windowId);
        }
    };

    const updateTabsWithinWindow = async (windowId) => {
        let updatedTabs = await chrome.tabs.query({ windowId });

        for (const tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) tabs[index] = { ...tabs[index], ...tab };
            else {
                tab.bookmarks = await getTabsBookmarks(tab);
                tabs.push(tab);
            }
        }
        tabs.sort((a, b) => a.index - b.index);
        tabs = tabs;
        lastUpdate = Date.now();
        checkForDataRefresh();
        lastUpdatedWindow = windowId;
    };

    const checkForDataRefresh = () => {
        const now = Date.now()
        if (!lastRefresh) { 
            lastRefresh = now;
            return;
        }

        if (lastRefresh - now > (1000 * 60 * 10)) {
            //check first if there are any duplicates
            loadTabsGroupsAndWindows();
            lastRefresh = now;
        }
    
    }

    const updateTabsWithinGroup = async (groupId) => {
        let updatedTabs = await chrome.tabs.query({ groupId });
        for (const tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) tabs[index] = { ...tabs[index], ...tab };
            else {
                tab.bookmarks = await getTabsBookmarks(tab);
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
        group.workspace = workspaces[group]
        groups[group.id] = group;
        updateTabsWithinGroup(group.windowId);
        lastUpdatedGroup = group.id;
        lastUpdate = Date.now();
    };

    const onTabGroupUpdated = (group) => {
        groups[group.id] = group;
        lastUpdatedGroup = group.id;
    };

    const onTabGroupRemoved = (groupId) => {
        delete groups[groupId];
    };

    const onTabMovedBetweenWindows = async ({ detail }) => {
        const tabId = detail;
        loadTabsGroupsAndWindows();
    };

    const onBookmarkCreated = async () => {};

    const onBookmarkRemoved = async () => {};

    const getTabsBookmarks = async (tab) => {
        let bookmarks;
        if (hasBookmarkPermission) {
            const bookmarkResults = await chrome.bookmarks.search({
                url: tab.url,
            });
            if (bookmarkResults.length > 0) {
                bookmarks = bookmarkResults;
            }
        }

        return bookmarks;
    };


    
    const getGroupsBookmarkFolder = async (group) => {
        if (hasBookmarkPermission) return null;

        const bookmarkResults = await chrome.bookmarks.search({
            title: group.title,
        });
        if (bookmarkResults.length == 1) return bookmarkResults[0];
        else return null;

        
    };


    const onBookmarkAdded = () => {
        lastUpdate = Date.now();
    };
</script>

{#if loaded}
    <SidePanel
        bind:view
        {activeTab}
        {groups}
        {windows}
        {tabs}
        {lastUpdate}
        {lastUpdatedTab}
        {lastUpdatedGroup}
        {lastUpdatedWindow}
        {currentWindowId}
        on:tabMoved={onTabMovedBetweenWindows}
        on:tabBookmarkAdded={onBookmarkAdded}
        on:mergedWindows={loadTabsGroupsAndWindows}
        on:foundDuplicates={loadTabsGroupsAndWindows}
    />
{/if}

<style>
    :global(html, body, #app) {
        margin: 0px;
        background-color: #28282b;
        width: 100%;
        height: 100%;
        position: relative;
        font-family: system-ui, sans-serif;
        font-weight: 300;
        overflow: hidden;
        letter-spacing: 0.8px;
    }
</style>
