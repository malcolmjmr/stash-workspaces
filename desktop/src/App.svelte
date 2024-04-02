<script>
    import { onMount } from "svelte";
    import { getActiveTab, getContextData, getContextFromGroupId } from "../../sidepanel/src/utilities/chrome";
    import { getWorkspaceData } from "../../sidepanel/src/workspace/workspaceData";
    import CreateMenu from "./create_menu/CreateMenu.svelte";
    import Launcher from "./launcher/Launcher.svelte";
    import Finder from "./finder/Finder.svelte";
    import Note from "./note/Note.svelte";
    import ResourceContainer from "./resource_container/ResourceContainer.svelte";
    import Tab from "../../sidepanel/src/tab/Tab.svelte";
    import Chat from "./chat/Chat.svelte";
    import { createResource } from "../../sidepanel/src/utilities/firebase";
    import Window from "./window/Window.svelte";


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

        const hasPermission = await checkPermissions();
        if (hasPermission) {
            reloadData();
        } else {
            // tell user that it won't work without the permission
        }

        
    };

    const checkPermissions = async () => {
        let permissionGranted = await chrome.permissions.contains({
            permissions: ["webRequest","webRequestBlocking"],

        });

        if (!permissionGranted) {
            permissionGranted = await chrome.permissions.request({
                permissions: ["webRequest","webRequestBlocking"],
                origins: ['*://*/*']
            });
        }
        return permissionGranted;
    };  


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

    

    chrome.runtime.onMessage.addListener((msg, sender, response) => {
        if (msg.command == 'resourceMovedToDesktop' && msg.workspace.id == workspace.id) {
            reloadData();
        }
    });


    let longPressTimeout;
    let mouseDownStart;
    const onMouseDown = (e) => {
        // start long press timer 
        longPressTimeout = setTimeout(() => {
            createLastResource();
        }, 1500);

        mouseDownStart = { x: e.pageX, y: e.pageY }
    };

    const onMouseMove = (e) => {
        if (longPressTimeout) {
            const movedBeyondThreshold = Math.abs(e.pageX - mouseDownStart.x) > 5 && Math.abs(e.pageY - mouseDownStart.y) > 5;
            if (movedBeyondThreshold) {
                longPressTimeout = clearTimeout(longPressTimeout);
            }
        }
    };

    const onMouseUp = (e) => {

        if (longPressTimeout) {
            longPressTimeout = clearTimeout(longPressTimeout);

            showCreateMenu = true;
        } else {
        
            createDefaultResource();
        }
        
    };

    let showLauncher;
    let showCreateMenu;

    const createDefaultResource = () => {
        lastResource = {
            ...createResource(),
            type: 'note',
        }
    };


    let lastResource;
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





</script>

<div 
    class="desktop" 
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
>   
    {#each workspaceData?.desktop?.resources ?? [] as resource (resource)}
        <Window {resource} on:actionClicked={onActionClicked}/>
    {/each}

    {#if showCreateMenu}
        <CreateMenu on:createResource={onCreateResource}/>
    {/if}
    
    {#if showLauncher}
        <Launcher />
    {/if}


</div>
  
<style>

    .desktop {
        height: 100%;
        width: 100%;
        background-color: black;
    }

</style>
  
