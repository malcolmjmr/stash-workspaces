<script>
    import { onMount } from "svelte";
    import { createId, getActiveTab, getContextData, getContextFromGroupId, saveContextData } from "../../sidepanel/src/utilities/chrome";
    import CreateMenu from "./create_menu/CreateWidget.svelte";
    import Launcher from "./launcher/Launcher.svelte";
    import Window from "./window/Window.svelte";
    import Auth from "../../sidepanel/src/Auth.svelte";
    import ResourceManager from "./ResourceManager.svelte";
    import { setDoc, doc } from "firebase/firestore";
    import { StorePaths } from "../../sidepanel/src/utilities/storepaths";
    import { slide } from "svelte/transition";


    let user;
    let db;
    let userRef;
    let fbApp;
    let authLoaded;
    let resourcesLoaded;

    let resources = {};
    let tags = [];


    onMount(() => {
        load();
    });

    let workspace;
    let workspaceData = {}; // desktop.resources and desktop.activities


    /*
        desktop has 
            resources
            activies
    */

    const load = async () => {
        // get web request permisison 
        document.title = 'Workspace';
        addListeners();
        
        const hasPermission = await checkPermissions();
        if (hasPermission) {

            reloadData();
        } else {
            // tell user that it won't work without the permission
        }

        
    };

    let showPermissionRequest;
    const checkPermissions = async () => {

        let permissionGranted = await chrome.permissions.contains({
            permissions: ["webRequest"],
        });

        if (!permissionGranted) {
            showPermissionRequest = true;
        }
        return permissionGranted;
    }; 
    
    const requestPermission = async () => {
        let permissionGranted = await chrome.permissions.request({
            permissions: ["webRequest",],
            origins: ["<all_urls>", "*://*/*"],
        });

        if (permissionGranted) {
            await reloadData();
            showPermissionRequest = false;
        }

    }


    const reloadData = async () => {
        const activeTab = await getActiveTab();
        workspace = await getContextFromGroupId(activeTab.groupId);
        if (workspace) {
            workspaceData = await getContextData(workspace.id);
            if (!workspaceData.desktop) {
                workspaceData.desktop = {
                    resources: [],
                    activities: [],
                }
            }
        }
    };

    

    const addListeners = () => {
        chrome.runtime.onMessage.addListener((msg, sender, response) => {
            if (msg.command == 'resourceMovedToDesktop' && msg.workspace.id == workspace.id) {
                reloadData();
            }
        });
    };

    


    let longPressTimeout;
    let mouseDownStart;
    // const onMouseDown = (e) => {
    //     // start long press timer 
    //     // longPressTimeout = setTimeout(() => {
    //     //     createLastResource();
    //     // }, 1500);

    //     mouseDownStart = { x: e.pageX, y: e.pageY }
    // };

    const onMouseMove = (e) => {
        if (longPressTimeout) {
            const movedBeyondThreshold = Math.abs(e.pageX - mouseDownStart.x) > 5 && Math.abs(e.pageY - mouseDownStart.y) > 5;
            if (movedBeyondThreshold) {
                longPressTimeout = clearTimeout(longPressTimeout);
            }
        }
    };

    // const onMouseUp = (e) => {

    //     if (longPressTimeout) {
    //         longPressTimeout = clearTimeout(longPressTimeout);

    //         showCreateMenu = true;
    //     } else {
        
    //         createDefaultResource();
    //     }
        
    // };

    let showLauncher;
    let showCreateMenu;

    const createDefaultResource = () => {
        lastResource = {
            ...createResource(),
            type: 'note',
        }
    };


    let lastResource = {
        type: 'note',
        note: {} 
    };
    const createLastResource = () => {
        lastResource = {
            ...lastResource,
            ...createResource(),
        };
        workspaceData.desktop.resources = [
            ...workspaceData.desktop.resources,
            lastResource,
        ];
    };

    
    const onCreateResource = ({ detail, resource }) => {
        
        showCreateMenu = false;

        const resourceData = resource ?? detail;

        lastResource = {
            ...createResource(),
            ...resourceData,
        };
        workspaceData.desktop.resources = [
            ...workspaceData.desktop.resources,
            lastResource,
        ];
    };

    const onActionClicked = ({ detail }) => {
        const text = window.getSelection().toString();
        const action = detail;

        if (action.id == 'createNote') {

        } else if (action.id == 'createHighlight') {
            // create highlight ??
            
        } else if (action.id == 'search') {
            // 
        } else if (action.id == 'copy') {
            // add to clipboard
        } else if (action.id == 'cut') {
            // add to clipboard
            // remove 
        }
    };


    const createResource = (data) => {
        const now = Date.now();
        return {
            id: createId(),
            created: now,
            updated: now,
            ...data
        }
    };


    const onDoubleClick = (e) => {
        //createLastResource();
        showCreateMenu = {top: e.pageY, left: e.pageX};
    };

    let selectedResource;
    const onResourceSelected = ({ detail }) => {
        selectedResource = detail;
    };

    const onSaveResource = async ({ detail }) => {
        // should i store resources as map instead of list? 
        let resource = detail.resource;
        resource.updated = Date.now();
        const index = workspaceData.desktop.resources.findIndex((r) => r.id == resource.id);
        if (index > -1) {
            workspaceData.desktop.resources[index] = resource;
        } else {
            workspaceData.desktop.resources.push(resource);
        }

        saveContextData(workspace, workspaceData);

        if (!detail.positionUpdate && user) {
            if (!resource.created) resource.created = Date.now();
            if (!resource.contexts) resource.contexts = [];
            if (!resource.contexts.includes(workspace.id)) resource.contexts.push(workspace.id);
            if (!resource.isOnDesktop) resource.isOnDesktop = true;
            const ref = doc(db, StorePaths.userResource(user.id, resource.id));
            await setDoc(ref, resource, {merge: true});
        }
    };

    const onRemoveResource = ({ detail }) => {
        let resource = detail.resource;
        const index = workspaceData.desktop.resources.findIndex((r) => r.id == resource.id);
        if (index > -1) {
            workspaceData.desktop.resources.splice(index, 1);
            workspaceData.desktop.resources = workspaceData.desktop.resources;
        }
        if (resource.isOnDesktop && user) {
            resource.isOnDesktop = false;

        }
        saveContextData(workspace, workspaceData);
    };

    let minimizedResources = [];
    let openResources = [];

    $: {

        minimizedResources = [];
        openResources = [];

        for (const resource of (workspaceData?.desktop?.resources ?? [])) {
            if (resource.isMinimized) minimizedResources.push(resource);
            else openResources.push(resource);
        }
    }


</script>

<Auth 
    bind:user
    bind:userRef
    bind:db
    bind:authLoaded
    bind:fbApp
/>

{#if authLoaded}
<ResourceManager 
    {workspace}
    {user}
    {userRef}
    {db}
    {fbApp}
    bind:tags
    bind:resources
    bind:workspaceData
    bind:resourcesLoaded
/>
{/if}

<div 
    class="desktop" 
>   

    {#if showPermissionRequest}
        <div class="permission-request" on:mousedown={requestPermission}>
            To use the desktop feature you will need to grant additional permissions for rendering web pages.  
        </div>
    {:else}
        {#if minimizedResources.length > 0}
        <div class="dock" in:slide out:slide>
            {#each minimizedResources as resource (resource)}
                <Window 
                    {workspace}
                    {resource} 
                    isSelected={selectedResource == resource}
                    on:actionClicked={onActionClicked} 
                    on:resourceSelected={onResourceSelected} 
                    on:saveResource={onSaveResource}
                    on:removeResource={onRemoveResource}
                />
            {/each}
        </div>
        {/if}
        <div class="background" on:dblclick={onDoubleClick}>
            
        </div>
        
        {#each openResources as resource (resource)}
            <Window 
                {workspace}
                {resource} 
                isSelected={selectedResource == resource}
                on:actionClicked={onActionClicked} 
                on:resourceSelected={onResourceSelected} 
                on:saveResource={onSaveResource}
                on:removeResource={onRemoveResource}
            />
        {/each}

        {#if showCreateMenu}
            <CreateMenu 
                top={showCreateMenu.top} 
                left={showCreateMenu.left} 
                bind:lastResource 
                on:createResource={onCreateResource}
            />
        {/if}
        
        {#if showLauncher}
            <Launcher />
        {/if}
    {/if}


</div>
  
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

    .desktop {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
    }

    .permission-request {
        height: 200px;
        width: 300px;
        font-size: 30px;
        text-align: center;
    }

    .permission-request:hover {
        cursor: pointer;
    }

    .background {
        height: 100%;
        width: 100%;
    }

    .dock {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        height: 70px;
        width: 100%;
        background-color: #222;
    }

    

</style>
  
