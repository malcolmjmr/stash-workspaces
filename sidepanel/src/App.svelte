<script>

    import { onMount } from "svelte";
    import { get, getContexts, getPermissions, getSettings } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import SidePanel from "./SidePanel.svelte";
    import Auth from "./Auth.svelte";
    import SignIn from "./signin/SignIn.svelte";
    import WorkspaceManager from "./WorkspaceManager.svelte";
    import WindowManager from "./WindowManager.svelte";
    import { _authLoaded, allWorkspaces, lastWorkspaceUpdate, settings } from "./stores.js";
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
    let view = Views.tabs; 

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
        hasBookmarkPermission = await getPermissions();
        settings.set(await getSettings());
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
            print('updatng tab data');
            const tab = data.tab;
            updateTabsThatIncludeUrl(tab.url);

        }

        if (data.workspace) {
            console.log('updating workspaces');
            const index = workspaces.findIndex((w) => w.id = data.workspace.id); 
            console.log(data);
            console.log(index);
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
            // if (tab.id == matchingTab.id) {

            // }
        }

        //lastUpdate = Date.now();
        
    }

    let lastCreatedWorkspace;
    chrome.runtime.onMessage.addListener((msg, sender, response) => {
        if (msg.command == 'workspaceCreated') {
            console.log('workspace created');
            lastCreatedWorkspace = msg.workspace;
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
            on:dataUpdated={onDataUpdated}
        />
    {/if}

{/if}
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
        letter-spacing: 1px;
    }
</style>
