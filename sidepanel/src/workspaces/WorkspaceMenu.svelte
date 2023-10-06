<script>
    import { slide } from "svelte/transition";
    import GroupColors from "../group/GroupColors.svelte";
    import { get, getContext, getOpenGroups, openWorkspace, saveContext } from "../utilities/chrome";
    import { createEventDispatcher, onMount } from "svelte";
  import { colorMap } from "../utilities/colors";

    export let group = null;
    export let workspace = null;
    export let isOpen = false; 

    let dispatch = createEventDispatcher();

    /* 

        
    */

    let loaded;
    onMount(() => { 
        load();
    });

    const load = async () => {

        if (group?.workspaceId && !workspace) {
            workspace = await getContext(group.workspaceId);
            if (!isOpen) isOpen = true;
        } else {
            console.log(group);
        }

        loaded = true;
    }

    const onColorSelected = ({detail}) => {
        const color = detail;
        if (group) {
            chrome.tabGroups.update(group.id, { color });
        }
        if (workspace) {
            workspace.color = color;
            saveContext(workspace);
        }
        

    };



    const openWorkspaceInNewWindow = () => {
        openWorkspace(workspace, {openInNewWindow: true});
    };

    const closeWorkspace = () => {
        
    };

    const deleteWorkspace = () => {
        workspace.deleted = Date.now();
        saveContext(workspace);
        if (group) {
            // close group
        }

        dispatch('workspaceUpdated', workspace);
    };

    const restoreWorkspace = () => {
        workspace.deleted = null;
        saveContext(workspace);
        dispatch('exit');
    };

    const moveWorkspaceToNewWindow = () => {

    };


    /*
        parent folders?

    */

    const onTitleInputChanged = (e) => {
        saveContext(workspace);
        if (group) {
            chrome.tabGroups.update(group.id, { title: workspace.title });
        }
    }

    const toggleFavorite = () => {

    };

    const showMoveMenu = () => {

    };

</script>


{#if loaded}
<div
    class="workspace-menu"
    in:slide
    out:slide
>


    <div class="title">
        <input 
            id="workspace-title"
            type="text"
            style="color: {colorMap[workspace.color ?? 'grey']}"
            bind:value={workspace.title}
            on:keydown={onTitleInputChanged}
        />
    </div>
   
    <div class="group-selection-container">
        <GroupColors group={workspace} on:colorSelected={onColorSelected}/>
    </div>

    <div class="action" on:mousedown={toggleFavorite}> {workspace.favorite ? 'Remove from Favorites' : 'Add to Favorites'}</div>
    {#if !isOpen}
        <div class="action" on:mousedown={() => openWorkspace(workspace)}>Open in Current Window</div>
        <div class="action" on:mousedown={openWorkspaceInNewWindow}>Open in New Window</div>
    {/if}
        <div class="action" on:mousedown={showMoveMenu}>Add to Space</div>
    {#if isOpen}
        <div class="action" on:mousedown={moveWorkspaceToNewWindow}>Move to New Window</div>
        <div class="action" on:mousedown={closeWorkspace}>Close</div>
    {/if}
    

    {#if !isOpen}
        {#if !workspace?.deleted}
            <div class="action delete" on:dblclick={deleteWorkspace}>Delete<span>(Double Click)</span></div>
        {:else}
            <div class="action" on:mousedown={restoreWorkspace}>Restore</div>
        {/if}
    {/if}
    
</div>
{/if}


<style>
    .workspace-menu {
        width: calc(100% - 20px);
        padding: 10px;
    }

    .title {
        padding: 5px;
        border-radius: 8px;
        background-color: black;
    }

    input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 1px;
        color: white;
    }

    input::placeholder {
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    .action {
        margin: 5px 0px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        font-size: 14px;
        font-weight: 300;
        border-radius: 8px;
    }

    .action.delete {
        color: red;
    }

    .action.delete span {
        font-size: 10px;
        
    }

    .action:hover {
        cursor: pointer;
        background-color: #555555;
    }

    .icon {
        height: 16px;
        width: 16px;
    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: #999999;
        
    }
</style>