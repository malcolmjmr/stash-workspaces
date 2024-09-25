<script>
    import { onMount } from "svelte";
    import { 
        get, 
        getPermissions, 
        getTabInfo, 
        set, 
        tryToGetBookmark, 
        tryToGetTab,
        findExistingContextForGroup,

        saveContext

     } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import { _activeTab, _groups, _lastRemovedTab, _lastStashedWindow, _lastUpdatedTab, _tabs, allResources, allWorkspaces, openGroups } from "./stores.js";
    import { openTabs } from "./stores.js";
  import { collection, onSnapshot } from "firebase/firestore";
  import { StorePaths } from "./utilities/storepaths.js";
  import { tryToOpenTabInPiP } from "./tab/helpers.js";


    let settings;
    export let authLoaded = false;
    export let user = null;
    export let db;
    export let userRef;
    export let tabs = [];
    export let recentTabs = [];
    export let groups = {};
    export let windows = [];
    export let otherWindows = [];
    export let activeTab;
    export let workspaces;

    export let lastRefresh;
    export let lastUpdate;
    export let lastRemoteUpdate;
    export let lastUpdatedTab;
    export let lastUpdatedWindow;
    export let lastUpdatedGroup;

    export let currentWindowId;
    export let view; 
    export let listenForUpdates = false;

    onMount(() => {
        init();
    });

    $: {
        lastRefresh;
        loadTabsGroupsAndWindows();
    };

    $: {

        if (authLoaded) {
            if (listenForUpdates) {
                addUpdateListener();
            } else {
                unsubscribeToWindowUpdates();
            }
        }
        
        
    }

    // $: {
    //     $allResources;
    //     updateTabsWithinGroup()
    // }


    export let windowsLoaded;
    const init = async () => {
        await getActiveTab();
        await getPermissions();
        await loadTabsGroupsAndWindows();
        if (user) {

        }
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
        let tempTabs = await chrome.tabs.query({});
        let tabMap = {};
        for (const tab of tabs) {
            tabMap[tab.id] = tab;
        }
        

        for (let i = 0; i < tempTabs.length; i++) {
            let updatedTab = tempTabs[i];
            let tab = tabMap[updatedTab.id];
            if (tab) {
                updatedTab = {...tab, ...updatedTab};
            }
            tempTabs[i] = await getTabsBookmarks(updatedTab);
        }

        windows = await chrome.windows.getAll();
        const groupsArray = await chrome.tabGroups.query({});

        let groupMap = await get('openGroups');
        
        let needToUpdateOpenGroups = false;
        let updatedWorkspaces;
        let tempGroups = {};
        for (let group of groupsArray) {
            if (!tempGroups[group.id]) {
                group.workspaceId = groupMap[group.id];
                if (!group.workspaceId) {
                    const workspace = await findExistingContextForGroup(group);
                    if (workspace) {
                        group.workspaceId = workspace.id;
                        groupMap[group.id] = workspace.id;
                        needToUpdateOpenGroups = true;
                        // if (workspace.groupId != group.id) {
                        //     console.log('updating workspace groupId');
                        //     console.log(groupMap);
                        //     workspace.groupId = group.id;
                        //     saveContext(workspace);
                        //     const index = workspaces.findIndex((w) => w.id == workspace.id);
                        //     if (index) {
                        //         workspaces[index] = workspace;
                        //         if (!updatedWorkspaces) {
                        //             updatedWorkspaces = true;
                        //         }
                        //     }
                            
                        // }
                    }
                    
                }
                tempGroups[group.id] = group;
            } 

            if (!$openGroups[group.id]) {
                // need to get or create context

                // console.log('couldnt find context for group' );
                // console.log(group);
            }
        }
        
        
        let tempWindows = [];
        for (let window of windows) {
            window = updateWindowData(window);
            tempWindows.push(window);
        }

        for (const groupId of Object.keys((groupMap))) {
            if (!groups[groupId]) {
                delete groupMap[groupId];
                if (!needToUpdateOpenGroups) {
                    needToUpdateOpenGroups = true;
                } 
            }
        }

        if (needToUpdateOpenGroups) {
            await set({ openGroups: groupMap });
            openGroups.set(groupMap); 
        }

        if (updatedWorkspaces) {
            workspaces = workspaces;
        }

        groups = tempGroups;
        tabs = tempTabs;
        _tabs.set(tabs);
        _groups.set(groups);

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
        // chrome.tabs.onAttached.addListener(onTabAttached);
        chrome.tabs.onDetached.addListener(onTabDetached);
        chrome.tabGroups.onCreated.addListener(onTabGroupCreated);
        chrome.tabGroups.onUpdated.addListener(onTabGroupUpdated);
        chrome.tabGroups.onRemoved.addListener(onTabGroupRemoved);
        chrome.windows.onCreated.addListener(onWindowCreated);
        chrome.windows.onRemoved.addListener(onWindowRemoved);
        if (hasBookmarkPermission) {
            chrome.bookmarks.onCreated.addListener(onBookmarkCreated);
            chrome.bookmarks.onRemoved.addListener(onBookmarkRemoved);
            chrome.bookmarks.onMoved.addListener(onBookmarkMoved);
        }
    };

    let unsubscribeToWindowUpdates;
    const addUpdateListener = () => {
        unsubscribeToWindowUpdates = onSnapshot(collection(db, StorePaths.userWindows(user.id)), (snapshot) => {
            /*
                find corresponding window 
                make update to it
                have those updates reflected in the UI

                existing window 
                non existing window


            */

            snapshot.docChanges().forEach((change) => {
                const window = change.doc.data();
                if (change.type === "added") {
                    addRemoteWindow(window);
                }
                if (change.type === "modified") {
                    updateWindow(window);
                }
                if (change.type === "removed") {
                    removeWindow(window);
                }
            });
            
        });
    };

    const addRemoteWindow = (window) => {
        otherWindows = [...otherWindows, window];
    };


    const updateWindow = (window) => {
        let index = windows.findIndex((w) => w.id == window.id);
        if (index > -1) {
            
        } else {
            index = otherWindows.findIndex((w) => w.id == window.id);
            if (index > -1) {
                otherWindows[index] = window;
                lastUpdatedWindow = Date.now();
            }
        }
    };

    const removeWindow = (window) => {

    };

    const onTabAttached = (tabId, attachInfo) => {
        let tabIndex = tabs.findIndex((t) => t.id == tabId);
        console.log('tab attached');

        if (tabIndex > -1) {
            console.log('found tab');
            let tab = tabs[tabIndex];
            console.log(tab);
            tab.discarded = false;
            tab.status = 'attached';
            tab.updated = Date.now();
            tabs[tabIndex] = tab;
            lastUpdatedTab = tab;
            _lastUpdatedTab.set(lastUpdatedTab);
            //lastUpdatedWindow = tab.windowId;
        }
    };

    const onTabDetached = (tabId, detachInfo) => {
        let tabIndex = tabs.findIndex((t) => t.id == tabId);
        console.log(' tab detached');
        console.log(tabIndex > -1 ? tabs[tabIndex] : null);
        // if (tabIndex > -1) {
        //     console.log('found tab');
        //     let tab = tabs[tabIndex];
        //     console.log(tab);
        //     tab.discarded = true;
        //     tab.status = 'unloaded';
        //     tab.updated = Date.now();
        //     tabs[tabIndex] = tab;
        //     lastUpdatedTab = tab;
        //     _lastUpdatedTab.set(lastUpdatedTab);
        //     //lastUpdatedWindow = tab.windowId;
        // }
    };

    const onTabActivated = async ({ tabId, windowId }) => {
        const oldActiveTabIndex = tabs.findIndex(
            (t) => t.windowId == windowId && t.active
        );
        const newActiveTabIndex = tabs.findIndex((t) => t.id == tabId);
        if (newActiveTabIndex > -1) {
            if (oldActiveTabIndex > -1) {
                let oldTab = tabs[oldActiveTabIndex];
                oldTab.active = false;
                if (oldTab.audible) oldTab = await tryToOpenTabInPiP(oldTab);

                tabs[oldActiveTabIndex] = oldTab;
                
                //lastUpdatedTab = tabs[oldActiveTabIndex];
                
            }
            tabs[newActiveTabIndex].active = true;
            activeTab = tabs[newActiveTabIndex];
            lastUpdatedTab = tabs[newActiveTabIndex];
            recentTabs = [activeTab, ...recentTabs.slice(0, 10)];
            _lastUpdatedTab.set(lastUpdatedTab);
            _tabs.set(tabs);
            _activeTab.set(activeTab);
            
        }
        if (view == Views.windows && windowId == currentWindowId) {
            // Need to account for when active tab is set after tabs are moved
            view = Views.tabs;
        }

        // add tab to recent tabs
        
    };

    const onTabCreated = async (tab) => {
        tab.openedInBackground = tab.active == false;
        tab = await getTabsBookmarks(tab);
        tab.updated = Date.now();
        tab.created = Date.now();
        lastUpdatedTab = tab;
        _lastUpdatedTab.set(lastUpdatedTab);
        //tabs = [...tabs, tab];
        updateTabsWithinWindow(tab.windowId, tab);
    };

    const onTabUpdated = async (tabId, updates, tab) => {

        const tabWasRemoved = (
            (typeof $_lastRemovedTab == 'object' && $_lastRemovedTab?.includes(tabId))
            || ($_lastRemovedTab == tabId)
        );

        if (tabWasRemoved) {
            return;
        }

        let tabIndex = tabs.findIndex((t) => t.id == tab.id);

        if (!tab){
            console.log('tab couldn\'t be found');
            console.log(tabId);
        } 

        if (tabIndex > -1) {

            let tempTab = { ...tabs[tabIndex], ...getTabInfo(tab, true) };
            tempTab.updated = Date.now();
            tempTab = await getTabsBookmarks(tab);
            tabs[tabIndex] = tempTab;
            tabs = tabs;
            lastUpdatedTab = tempTab;
            _lastUpdatedTab.set(lastUpdatedTab);
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
        let tab = await chrome.tabs.get(tabId);
        if (tabIndex == -1) {
            loadTabsGroupsAndWindows();
        }

        let delay = 0;
        if (tabs[tabIndex].windowId != tab.windowId) {
            tabs[tabIndex].windowId = tab.windowId;
        }

        const window = windows.find((w) => w.id == windowId);
        if (!window) {
            windows = [...windows, await chrome.windows.get(windowId)];
        }
        updateTabsWithinWindow(tab.windowId, tab);
    };

    let lastTabRemoved;
    let refreshDataTimeout;

    const onTabRemoved = (tabId) => {
        const now = Date.now();
        //tabs = tabs.filter((t) => t.id != tabId);
        if ($_lastStashedWindow && (now  - $_lastStashedWindow < 1000)) return;
       

        
        if (lastTabRemoved && (now - lastTabRemoved < 100)) {

            //console.log('clearing refresh timeout');
            if (refreshDataTimeout) clearTimeout(refreshDataTimeout);
            
        }
        refreshDataTimeout = setTimeout(loadTabsGroupsAndWindows, 100);
        lastTabRemoved = now;

        // const index = tabs.findIndex((t) => t.id == tabId);
        // if (index > -1) {
        //     const tab = { ...tabs[index] };
        //     console.log(tab);
        //     tabs.splice(index, 1);
        //     if (tab) updateTabsWithinWindow(tab.windowId, tabId);
        // }
    };

    const updateTabsWithinWindow = async (windowId, updatedTab) => {
        let updatedTabs = await chrome.tabs.query({ windowId });

        for (let tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) {
                let storedTab = tabs[index];
                if (storedTab.id == updatedTab?.id) {
                    storedTab.updated = Date.now();
                    _lastUpdatedTab.set(storedTab);
                }
                tabs[index] = { ...storedTab, ...tab };
            } else {
                if (tab.id == updatedTab?.id) {
                    tab = {...updatedTab.id, ...tab }
                }
                tabs.push(tab);
            }
        }
        tabs.sort((a, b) => a.index - b.index);
        tabs = tabs;
        _tabs.set(tabs);
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
        for (let tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) tabs[index] = { ...tabs[index], ...tab };
            // else {
            //     tab = await getTabsBookmarks(tab);
            //     tabs.push(tab);
            // }
        }
        tabs.sort((a, b) => a.index - b.index);
        tabs = tabs;
        lastUpdatedGroup = groups[groupId];
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
        lastUpdatedWindow = Date.now();
    };

    const onTabGroupCreated = async (group) => {

        groups[group.id] = group;
        
        group.created = true;
        lastUpdatedGroup = group;

        // updateTabsWithinGroup(group.windowId);
        // lastUpdate = Date.now();

        setTimeout(() => {
            loadTabsGroupsAndWindows();
        }, 200);

    };

    const onTabGroupUpdated = (group) => {
        groups[group.id] = {...groups[group.id], ...group};
        group = groups[group.id];

        if (!group.workspaceId) {
            console.log('no existing workspace');
            console.log(group);
        }
        lastUpdatedGroup = group;
    };

    const onTabGroupRemoved = (groupId) => {
        
        setTimeout(() => {
            const deletedGroup = {...groups[groupId], removed: true};
            delete groups[groupId];
            groups = {...groups};
            lastUpdatedGroup = deletedGroup;
        },200);
       
        // setTimeout(() => {
        //     loadTabsGroupsAndWindows();
        // }, 200);
        
    };

    const onBookmarkCreated = async (id, bookmark) => {
    
        
        //updateTabsWithBookmark({bookmark});
    };

    const onBookmarkMoved = async (id, moveInfo) => {
        const bookmark = await tryToGetBookmark(id);
        //updateTabsWithBookmark({bookmark});
    };

    const onBookmarkRemoved = async (id, removeInfo) => {
        //updateTabsWithBookmark({id, remove: true});
    };

    const updateTabsWithBookmark = async ({ id, bookmark, remove }) => {

        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            if (!remove && !bookmark?.url != tab.url) {
                continue;
            } 
            
            if (!tab.bookmarks) tabs[i].bookmarks = [];
            let index = tabs[i].bookmarks.findIndex((b) => {
                return bookmark ? b.id == bookmark.id : id == b.id;
            });

            if (!remove && index == -1) {

                tabs[i].bookmarks.push(bookmark);
            } else if (remove && index > -1) {
                tabs[i].bookmarks.splice(index, 1);
            }
            
        }
        lastUpdate = Date.now();
    }



    const getTabsBookmarks = async (tab) => {
        const url = getTabInfo(tab).url;
        if (user) {
            const savedResource = $allResources[url];
            if (savedResource) {
                tab.resource = savedResource;
            } else {
                tab.resource = null;
            }
        } 
        if (hasBookmarkPermission) {
            const bookmarkResults = await chrome.bookmarks.search({
                url: url,
            });

            // check that bookmark parent matches 
            if (bookmarkResults.length > 0) {
                tab.bookmarks = bookmarkResults;
            } else {
                tab.bookmarks = null;
            }
        }
        return tab;
    };

    const onBookmarkAdded = () => {
        //lastUpdate = Date.now();
    };
</script>
