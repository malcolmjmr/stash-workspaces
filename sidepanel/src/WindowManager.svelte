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

        saveContext,

        getContextFromGroupId


     } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import { _activeTab, _deviceId, _groups, _lastRemovedTab, _lastStashedWindow, _lastUpdatedTab, _tabs, allResources, allWorkspaces, openGroups } from "./stores.js";
    import { openTabs } from "./stores.js";
  import { collection, onSnapshot, setDoc, deleteDoc, doc, updateDoc, query, where, getDocs, } from "firebase/firestore";
  import { StorePaths } from "./utilities/storepaths.js";
  import { tryToOpenTabInPiP } from "./tab/helpers.js";
  import { applyWindowChanges, generateWindowDiff } from "./windows/helpers.js";
  import ActiveWindow from "./window/ActiveWindow.svelte";


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
    export let listeningForRemoteUpdates = false;

    onMount(() => {
        init();
    });

    $: {
        lastRefresh;
        loadTabsGroupsAndWindows();
    };


    $: {
        
        if (listeningForRemoteUpdates && lastUpdatedWindow) {
            pushWindowUpdate();
        } else if (lastUpdatedTab) {
            pushActiveTabUpdate();
        }
    }



    export let windowsLoaded;
    const init = async () => {
        await getActiveTab();
        await getPermissions();
        await loadTabsGroupsAndWindows();
        //await checkRemoteWindows();
        if (user) {

        }
        addListeners();
        //setView();
        //initializeFirebase();
        windowsLoaded = true;
    };

    export let hasBookmarkPermission;

    $: {
        user; 
        checkRemoteWindows();
    }

    const checkRemoteWindows = async () => {
        if (!user) return;
        
        const deviceId = await get('deviceId');
        const windowQuery = query(
            collection(db, StorePaths.userWindows(user.id)),
            where('deviceId', '==', deviceId),
        );

        const remoteWindows = (await getDocs(windowQuery)).docs.map((doc) => doc.data());
        for (const window of remoteWindows) {
            if (window.deleted) {
                try {
                    // should check if this is the only window open. if so remove all tabs instead of the window
                    chrome.windows.remove(window.id);
                } catch (e) {

                }
            } else {
                const existingWindow = windows.find((w) => w.id == window.id);
                if (!existingWindow) {
                    const ref = doc(db, StorePaths.userWindow(user.id, window.id));
                    deleteDoc(ref);
                    console.log('removing remote window');
                }
            }
        }
    }


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

    $: {
        if (lastRemoteUpdate?.window) {
            onRemoteWindowUpdate();
        };
    }

    let unsubscribeToWindowUpdates;
    const onRemoteWindowUpdate = () => {
        if (lastRemoteUpdate.removed || lastRemoteUpdate.window.deleted) {
            removeWindow(lastRemoteUpdate.window);
        } else {
            updateWindow(lastRemoteUpdate.window);
        }
    };

    const dbWindowToExtensionWindow = (window) => {
        window.tabs = Object.values(window.tabs);
        return window;
    };

    const addRemoteWindow = (window) => {
        window.isRemote = true;
        otherWindows = [...otherWindows, window];
    };


    const updateWindow = async (window) => {
        let index = windows.findIndex((w) => w.id == window.id);
        if (index > -1) {
            const currentWindow = await chrome.windows.get(parseInt(window.id), { populate: true });
            const diff = generateWindowDiff(currentWindow.tabs, Object.values(window.tabs));

            console.log('got window diff');
            console.log(diff);
            await applyWindowChanges(diff, window);
        } else {
            index = otherWindows.findIndex((w) => w.id == window.id);
            if (index > -1) {
                otherWindows[index] = window;
                lastRemoteUpdate = Date.now();
            } else {
                addRemoteWindow(window);
            }
        }
    };



    const removeWindow = async (window) => {

        console.log('removing window');
        console.log(window);
        if (typeof window.id == 'string') window.id = parseInt(window.id);
        let openWindow;
        try {
            openWindow = await chrome.windows.get(window.id);
        } catch(e) {

        }

        if (openWindow) {
            await chrome.windows.remove(window.id);
        } else {
            otherWindows = otherWindows.filter((w) => w.id != window);
        }
        
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
                oldTab = {...oldTab, ...(await chrome.tabs.get(oldTab.id))}
                if (oldTab.audible) {
                    oldTab = await tryToOpenTabInPiP(oldTab);

                }
                tabs[oldActiveTabIndex] = oldTab;
                
                //lastUpdatedTab = tabs[oldActiveTabIndex];
                
            }
            let tab = tabs[newActiveTabIndex];
            tab = {...tab, ...(await chrome.tabs.get(tab.id))};
            tabs[newActiveTabIndex] = tab;
            activeTab = tab;
            console.log('tab activated');
            lastUpdatedTab = tab;
            //recentTabs = [activeTab, ...recentTabs.slice(0, 10)];
            _lastUpdatedTab.set(lastUpdatedTab);
            _tabs.set(tabs);
            _activeTab.set(activeTab);
            
        }
        if (view == Views.windows && windowId == currentWindowId) {
            // Need to account for when active tab is set after tabs are moved
            view = Views.tabs;
        }
        
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
            console.log('updating tab');
            console.log(tempTab);
            console.log(updates);
            lastUpdatedTab = tempTab;
            _lastUpdatedTab.set(lastUpdatedTab);
            //lastUpdatedWindow = tab.windowId;
        }
    };


    const onTabMoved = async (tabId, { windowId, toIndex, fromIndex }) => {
        const tabIndex = tabs.findIndex((t) => t.id == tabId);
        let tab = await chrome.tabs.get(tabId);
        if (tabIndex == -1) {
            loadTabsGroupsAndWindows();
        } else {
            if (tabs[tabIndex].windowId != tab.windowId) {
                tabs[tabIndex].windowId = tab.windowId;
            }

            const window = windows.find((w) => w.id == windowId);
            if (!window) {
                windows = [...windows, await chrome.windows.get(windowId)];
            }
            updateTabsWithinWindow(tab.windowId, tab);
        }
        
    };

    let lastTabRemoved;
    let refreshDataTimeout;

    const onTabRemoved = (tabId, { windowId }) => {
        const now = Date.now();
        //tabs = tabs.filter((t) => t.id != tabId);
        if ($_lastStashedWindow && (now  - $_lastStashedWindow < 1000)) return;
       

        
        if (lastTabRemoved && (now - lastTabRemoved < 100)) {

            //console.log('clearing refresh timeout');
            if (refreshDataTimeout) clearTimeout(refreshDataTimeout);
            
        }
        refreshDataTimeout = setTimeout(async () => {
            const index = tabs.findIndex((t) => t.id == tabId);
            if (index > -1) {
            
                const tab = { ...tabs[index] };
                console.log('removing tab');
                console.log(tab);
                tabs.splice(index, 1);
                pushTabUpdate({...tab, remove: true});
                if (tab) updateTabsWithinWindow(tab.windowId, tab);
            }
        }, 100);
        lastTabRemoved = now;



        //pushTabUpdate({id: tabId, windowId, remove: true})

        

        // 
        // 
    };

    const updateTabsWithinWindow = async (windowId, updatedTab) => {
        let updatedTabs = await chrome.tabs.query({ windowId });

        for (let tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) {
                let storedTab = tabs[index];
                if (storedTab.id == updatedTab?.id) {
                    storedTab.updated = Date.now();
                    //_lastUpdatedTab.set(storedTab);
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
        lastUpdatedWindow = { 
            id: windowId,
            tabs: updatedTabs,
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
        lastUpdatedWindow = { id: windowId, removed: true };
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

    const pushTabUpdate = async (tab) => {

        let window = windows.find((w) => w.id == tab.windowId);
        if (!window) {
            console.log('could not find tab window');
            return;
        }

        if (tab.groupId > -1) {
    
            return;
        }

        const ref = doc(db, StorePaths.userWindow(user.id, window.id));

        let data = {
            deviceId: $_deviceId,
            tabs: await chrome.tabs.query({ windowId: window.id }),
            updated: Date.now(),
            lastUpdate: {
                tabId: tab.id
            }
        };

        setDoc(ref, data, {merge: true});

    };

    const pushActiveTabUpdate = async () => {
        pushTabUpdate(lastUpdatedTab);
    };

    const pushWindowUpdate = async () => {

        const ref = doc(db, StorePaths.userWindow(user.id, lastUpdatedWindow.id));

        console.log('pushing window update');
        console.log(lastUpdatedWindow);
        
        if (lastUpdatedWindow.removed) {
            deleteDoc(ref);
        } else {

            let window = {
                ...lastUpdatedWindow,
                tabs: await getWindowTabData(lastUpdatedWindow),
                deviceId: await get('deviceId'), 
                updated: Date.now(),
            };

            window.id = window.id.toString();
            console.log('window to sync');
            console.log(window);
            // should try to optomize by just sending updates 
            setDoc(ref, window);

        }
    }

    const getWindowTabData = async (window) => {
        let tabData = []
        let groupIds = [];
        for (const tab of window.tabs) {
            if (tab.groupId == -1 || !tab.groupId) {
                tabData.push(tab);
            } else if (!groupIds.includes(tab.groupId)) {
                groupIds.push(tab.groupId);
                const context = await getContextFromGroupId(tab.groupId);
                tabData.push({ contextId: context.id, index: tab.index});
            }
        }
        return tabData;
    }
</script>
