<script>
    import { slide } from "svelte/transition";
    import GroupColors from "../group/GroupColors.svelte";
    import { closeTabGroup, get, getContext, getOpenGroups, openWorkspace, saveContext, tryToGetBookmark } from "../utilities/chrome";
    import { createEventDispatcher, onMount } from "svelte";
    import { colorMap } from "../utilities/colors";
    import MenuItem from "../components/MenuItem.svelte";
    import openIcon from "../icons/open-in-new-window.png";
    import openInNewWindowIcon from "../icons/move-group.png";
    import deleteIcon from "../icons/delete.png";
    import deleteForeverIcon from "../icons/delete-forever.png";
    import closeIcon from "../icons/close.png";
    import restoreIcon from "../icons/restore.png";
    import archiveIcon from "../icons/archive.png";


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

    let folder;

    const load = async () => {

        /*

            Todo: check that 
        */

        if (group?.workspaceId) {
            if (!workspace) {
                workspace = await getContext(group.workspaceId);
                if (!isOpen) isOpen = true;
            }
            
        } else if (group) {
            const workspaceId = (await getOpenGroups())[group.id];
            if (workspaceId) {
                workspace = await getContext(workspaceId);
            }
        }

        const tempFolder = await tryToGetBookmark(workspace?.folderId);

        if (tempFolder && tempFolder.title == workspace?.title) {
            folder = tempFolder;
        }

        loaded = true;
    }

    const onColorSelected = async ({detail}) => {
        const color = detail;
        if (group) {
            chrome.tabGroups.update(group.id, { color });
        }
        if (workspace) {
            workspace.color = color;
            await saveContext(workspace);
            dispatch('dataUpdated', {workspace});
        }
    };

    const openWorkspaceInNewWindow = () => {
        dispatch('exit');
        openWorkspace(workspace, {openInNewWindow: true});
    };

    const closeWorkspace = () => {
        
        closeTabGroup(workspace.groupId);
    };

    const deleteWorkspace = async () => {
        workspace.deleted = Date.now();
        await saveContext(workspace);
        if (group) {
            // close group
        }

        dispatch('dataUpdated', {workspace, notify: true });
        dispatch('exit');

    };

    const restoreWorkspace = async () => {
        workspace.deleted = null;
        await saveContext(workspace);
        dispatch('dataUpdated', {workspace, notify: true });
        dispatch('exit');
    };

    const archiveWorkspace = async () => {
        workspace.archived = Date.now();
        await saveContext(workspace);
        dispatch('dataUpdated', {workspace, notify: true });
        dispatch('exit');
    };

    const moveWorkspaceToNewWindow = () => {

    };


    /*
        parent folders?

    */

    const onTitleInputChanged = async (e) => {
        await saveContext(workspace);
        if (group) {
            chrome.tabGroups.update(group.id, { title: workspace.title });
        }

        if (folder) {
            chrome.bookmarks.update(folder.id, {
                title: workspace.title,
            });
        }
        dispatch('dataUpdated', {workspace, notify: false});
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

    <div class="container">
        <div class="title">
            <input 
                id="workspace-title"
                type="text"
                style="color: {colorMap[workspace?.color ?? 'grey']}"
                bind:value={workspace.title}
                on:input={onTitleInputChanged}
            />
        </div>
       
        <div class="group-selection-container">
            <GroupColors group={workspace} on:colorSelected={onColorSelected}/>
        </div>
    </div>
    

    <div class="divider">

    </div>

    <!-- <div class="action" on:mousedown={toggleFavorite}> {workspace.favorite ? 'Remove from Favorites' : 'Add to Favorites'}</div> -->
    {#if !isOpen}
        <MenuItem 
            title='Open'
            icon={openIcon}
            onClick={() => openWorkspace(workspace, {openInNewWindow: false})} 
        />
        <MenuItem
            title='Open in New Window'
            icon={openInNewWindowIcon}
            onClick={() => openWorkspace(workspace, {openInNewWindow: true})}
        />
    {/if}

       <!-- <div class="action" on:mousedown={showMoveMenu}>Add to Space</div> --> 
    {#if isOpen}
        <MenuItem 
            title='Move to New Window'
            onClick={moveWorkspaceToNewWindow}
            icon={openInNewWindowIcon}
        />
        <MenuItem 
            title='Close'
            onClick={closeWorkspace} 
            icon={closeIcon}
        />
    {/if}
    

    
    {#if !isOpen}
        <div class="divider"/>
        {#if !workspace?.deleted}

            <MenuItem 
                title='Archive'
                icon={archiveIcon}
                onClick={archiveWorkspace}
            />
        
            <MenuItem 
                title='Delete'
                icon={deleteIcon}
                onClick={deleteWorkspace}
            />

            
        {:else}
            <MenuItem 
                title='Restore'
                icon={restoreIcon}
                onClick={restoreWorkspace} 
            />
            <MenuItem 
                title='Delete Forever'
                icon={deleteForeverIcon}
                onDoubleClick={() => dispatch('permenantlyDeleteWorkspace', workspace)}
            />
        {/if}
    {/if}
    
</div>
{/if}


<style>
    .workspace-menu {

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

    .container {
        margin: 10px;
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
        background-color: #444444;
    }
</style>