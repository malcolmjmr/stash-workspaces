<script>

    import { onMount } from "svelte";
    import { get, getContexts, getPermissions, getSettings } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import SidePanel from "./SidePanel.svelte";
    import Auth from "./Auth.svelte";
    import SignIn from "./signin/SignIn.svelte";
    import WorkspaceManager from "./WorkspaceManager.svelte";
    import WindowManager from "./WindowManager.svelte";
    import { settings } from "./stores.js";

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
    let view = Views.home; 

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
            const tabIndex = tabs.findIndex((t) => t.url == resource.url);
            if (tabIndex > -1) {
                tabs[tabIndex].resource = resource;
            }

        }

        if (data.tab) {
            const tab = data.tab;
            const tabIndex = tabs.findIndex((t) => t.id == tab.id);
            if (tabIndex > -1) {
                tabs[tabIndex] = tab;
            }
        }

        if (data.workspace) {
           
        }
    };

</script>
{#if loaded}
<Auth 
    bind:user
    bind:userRef 
    bind:db 
    bind:fbApp 
    bind:authLoaded 
    bind:view
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
        {authLoaded} 
        {activeTab}
        {lastUpdatedGroup}
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
        font-weight: 200;
    }
</style>
