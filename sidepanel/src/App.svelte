<script>
    import { onMount } from "svelte";
    import { get } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import SidePanel from "./SidePanel.svelte";

    let settings;
    let tabs = [];
    let groups = [];
    let windows = [];
    let workspaces = [];
    let activeTab;
    let folder;

    let lastUpdatedTab;
    let lastUpdatedWindow;
    let lastUpdatedGroup;

    let currentWindowId;
    let view = Views.window;

    onMount(() => {
        init();
    });

    let loaded;
    const init = async () => {
        settings = (await get("settings")) ?? {};
        await loadTabsGroupsAndWindows();
        await getActiveTab();
        addListeners();
        loaded = true;
    };

    const loadTabsGroupsAndWindows = async () => {
        tabs = await chrome.tabs.query({});
        windows = await chrome.windows.getAll();
        const groupsArray = await chrome.tabGroups.query({});
        let tempGroups = {};
        for (const group of groupsArray) {
            if (!tempGroups[group.id]) {
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
        if (view == Views.home && windowId == currentWindowId) {
            console.log("updating view");
            view = Views.window;
        }
    };

    const onTabCreated = (tab) => {
        updateTabsWithinWindow(tab.windowId);
    };

    const onTabUpdated = (tabId, updated) => {
        const index = tabs.findIndex((t) => t.id == tabId);
        if (index > -1) {
            tabs[index] = { ...tabs[index], ...updated };
            lastUpdatedTab = tabs[index];
        }
    };

    const onTabMoved = (tabId) => {
        const tab = tabs.find((t) => t.id == tabId);
        if (tab) updateTabsWithinWindow(tab.windowId);
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
        const updatedTabs = await chrome.tabs.query({ windowId });
        for (const tab of updatedTabs) {
            const index = tabs.findIndex((t) => t.id == tab.id);
            if (index > -1) tabs[index] = tab;
            else tabs.push(tab);
        }
        tabs.sort((a, b) => a.index - b.index);
        lastUpdatedWindow = windowId;
    };

    const onWindowCreated = (window) => {
        setTimeout(() => {
            const updatedWindow = updateWindowData(window);
            windows.push(updatedWindow);
            lastUpdatedWindow = updatedWindow.id;
        }, 500);
    };

    const onWindowRemoved = (windowId) => {
        const index = windows.findIndex((w) => w.id == windowId);
        if (index > -1) windows.splice(index, 1);
        console.log(windows);
    };

    const onTabGroupCreated = (group) => {
        groups[group.id] = group;
        lastUpdatedGroup = group;
    };

    const onTabGroupUpdated = (group) => {
        groups[group.id] = group;
        lastUpdatedGroup = group;
    };

    const onTabGroupRemoved = (groupId) => {
        delete groups[groupId];
        // need to update entire window?
    };
</script>

{#if loaded}
    <SidePanel
        bind:view
        {activeTab}
        {groups}
        {windows}
        {tabs}
        {lastUpdatedTab}
        {lastUpdatedGroup}
        {lastUpdatedWindow}
        {currentWindowId}
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
