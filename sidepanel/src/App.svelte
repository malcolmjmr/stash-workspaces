<script>

    import { onMount } from "svelte";
    import { get, getContexts, getPermissions, getSettings, set } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import SidePanel from "./SidePanel.svelte";
    import Auth from "./Auth.svelte";
    import SignIn from "./signin/SignIn.svelte";
    import WorkspaceManager from "./WorkspaceManager.svelte";
    import WindowManager from "./WindowManager.svelte";
    import { _authLoaded, _favorites, _lastUpdatedTab, allWorkspaces, lastWorkspaceUpdate, _settings } from "./stores.js";
    import { getTabInfo } from "./utilities/chrome.js";
    import { getTabsBookmarks } from "./utilities/helpers.js";

    let tabs = [];
    let groups = {};
    let windows = [];
    let workspaces = [];
    let resources = {};
    let recentTabs = [];
    let activeTab;

    let folder;

    let user;
    let userRef;
    let db;
    let fbApp;


    let lastRefresh;
    let lastUpdate;
    let lastUpdatedTab;
    let lastUpdatedWindow;
    let lastUpdatedGroup;
    let lastWorkspaceCreated;

    let currentWindowId;
    let view; 

    let authLoaded;
    let windowsLoaded;
    let workspacesLoaded;
    let resourcesLoaded;

    
    const saveGroup = () => {

    }
    
    onMount(() => {
        init();
        
        
        
    });

    const setUser = ({ detail }) => {
        user = detail;
    };

    let loaded;
    let hasBookmarkPermission;
    const init = async () => {
        
        console.log('loading app');
        hasBookmarkPermission = await getPermissions();
        const settings = await get('settings');
        console.log('got settings');
        console.log(settings);
        _settings.set(settings);
        loaded = true;
    };



    const onDataUpdated = async ({detail}) => {
        const data = detail;
        if (data.resource) {
            const resource = data.resource;
            resources[resource.url] = resource.url;
            updateTabsThatIncludeUrl(resource.url);
        }

        if (data.tab) {
            const tab = data.tab;
            updateTabsThatIncludeUrl(tab.url);

        }

        if (data.workspace) {
            const index = workspaces.findIndex((w) => w.id == data.workspace.id); 
            if (index > -1) {
                workspaces[index] = data.workspace;
                workspaces = [...workspaces];
            } else {
                workspaces = [...workspaces, data.workspace]; 
            }
            if (data.notify) {
                allWorkspaces.set(workspaces);
                lastWorkspaceUpdate.set(Date.now());
            } 
        }

        if (data.favorites) {
            _favorites.set(data.favorites);
        }

        
    };

    const updateTabsThatIncludeUrl = async (url) => {
        const matchingTabs = tabs.filter((t) => t.url == url);
        for (let matchingTab of matchingTabs) {
            const index = tabs.findIndex((t) => t.id == matchingTab.id);
            matchingTab = { ...tabs[index], ...getTabInfo(await chrome.tabs.get(matchingTab.id), true) };
            matchingTab.updated = Date.now();
            matchingTab = await getTabsBookmarks(matchingTab);
            tabs[index] = matchingTab;
            lastUpdatedTab = matchingTab;
            _lastUpdatedTab.set(lastUpdatedTab);
            // if (tab.id == matchingTab.id) {

            // }
        }

        //lastUpdate = Date.now();
        
    }

    let lastCreatedWorkspace;
    chrome.runtime.onMessage.addListener((msg, sender, response) => {
        if (msg.command == 'workspaceCreated') {
            lastCreatedWorkspace = msg.workspace;
        } else if (msg.command == 'workspaceRemoved') {
            workspaces = workspaces.filter((w) => w.id != msg.workspace.id);
            allWorkspaces.set(workspaces);
        }
    });

    /*



    */


</script>
{#if loaded}
<Auth 
    bind:user
    bind:userRef 
    bind:db 
    bind:fbApp 
    bind:view
    bind:authLoaded
/>

<WindowManager 
    {db}
    {user}
    bind:lastRefresh
    bind:windowsLoaded
    bind:activeTab
    bind:groups
    bind:windows
    bind:tabs
    bind:lastUpdate
    bind:lastUpdatedTab
    bind:lastUpdatedGroup
    bind:lastUpdatedWindow
    bind:currentWindowId
    bind:view
    bind:hasBookmarkPermission
    bind:resources
    bind:recentTabs
/>

{#if authLoaded && windowsLoaded}
    <WorkspaceManager 
        {db} 
        {userRef} 
        {activeTab}
        {lastUpdatedGroup}
        {lastCreatedWorkspace}
        {authLoaded}
        bind:tabs
        bind:resources
        bind:user 
        bind:workspaces 
        bind:groups 
        bind:workspacesLoaded
    />
    {#if view == Views.signin}
        <SignIn {fbApp}/>
    {:else}
        <SidePanel
            bind:view
            {db}
            {user}
            {workspacesLoaded}
            bind:workspaces
            {activeTab}
            {groups}
            {windows}
            {tabs}
            {lastUpdate}
            {lastUpdatedTab}
            {lastUpdatedGroup}
            {lastUpdatedWindow}
            {currentWindowId}
            {recentTabs}
            bind:resources
            bind:hasBookmarkPermission
            on:tabMoved={() => lastRefresh = Date.now()}
            on:mergedWindows={() => lastRefresh = Date.now()}
            on:foundDuplicates={() => lastRefresh = Date.now()}
            on:refreshTabs={() => lastRefresh = Date.now()}
            on:dataUpdated={onDataUpdated}
        />
    {/if}

{/if}
{/if}

<style>
    :global(html, body, #app) {
        margin: 0px;
        background-color: black;
        width: 100%;
        height: 100%;
        position: relative;
        font-family: system-ui, sans-serif;
        font-weight: 300;
        overflow: hidden;
        letter-spacing: 1px;
    }
</style>
