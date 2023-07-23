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

    let currentWindowId;
    let view; 

    let authLoaded;
    let windowsLoaded;

    
    const saveGroup = () => {

    }
    
    onMount(() => {
        console.log('hey');
    });




</script>

<Auth bind:user bind:userRef bind:db bind:fbApp bind:authLoaded/>
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
    />
<WorkspaceManager bind:user bind:workspaces/>
{#if authLoaded && windowsLoaded}
    
    {#if view == Views.signin}
        <SignIn {fbApp}/>
    {:else}
        <SidePanel
            bind:view
            {db}
            {user}
            {workspaces}
            {activeTab}
            {groups}
            {windows}
            {tabs}
            {lastUpdate}
            {lastUpdatedTab}
            {lastUpdatedGroup}
            {lastUpdatedWindow}
            {currentWindowId}
            on:tabMoved={() => lastRefresh = Date.now()}
            on:mergedWindows={() => lastRefresh = Date.now()}
            on:foundDuplicates={() => lastRefresh = Date.now()}
        />
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
