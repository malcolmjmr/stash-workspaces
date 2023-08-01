<script>

    import { onMount } from "svelte";
    import { get, getContexts, getPermissions } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    import SidePanel from "./SidePanel.svelte";
    import Auth from "./Auth.svelte";
    import SignIn from "./signin/SignIn.svelte";
    import WorkspaceManager from "./WorkspaceManager.svelte";
    import WindowManager from "./WindowManager.svelte";

    let settings;
    let tabs = [];
    let groups = [];
    let windows = [];
    let workspaces = [];
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
    let view = Views.windows; 

    let authLoaded;
    let windowsLoaded;
    let workspacesLoaded;

    
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
        loaded = true;
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
/>

{#if authLoaded && windowsLoaded}
    <WorkspaceManager 
        {db} 
        {userRef} 
        {authLoaded} 
        {activeTab}
        {lastUpdatedGroup}
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
            bind:hasBookmarkPermission
            on:tabMoved={() => lastRefresh = Date.now()}
            on:mergedWindows={() => lastRefresh = Date.now()}
            on:foundDuplicates={() => lastRefresh = Date.now()}
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
        letter-spacing: 0.8px;
    }
</style>
