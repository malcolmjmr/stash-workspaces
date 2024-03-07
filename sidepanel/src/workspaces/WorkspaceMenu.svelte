<script>
    import { slide } from "svelte/transition";
    import GroupColors from "../group/GroupColors.svelte";
    import { closeTabGroup, get, getContext, getOpenGroups, openWorkspace, saveContext, tryToGetBookmark, tryToGetTabGroup, tryToGetWorkspaceFolder } from "../utilities/chrome";
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
    import moveFolderIcon from "../icons/move-to-folder.png";
  import MenuDivider from "../components/MenuDivider.svelte";
  import ModalContainer from "../components/ModalContainer.svelte";
  import LocationSelection from "../edit_bookmark/LocationSelection.svelte";


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


        loaded = true;
    }

    const onColorSelected = async ({detail}) => {
        const color = detail;

        group  = await tryToGetTabGroup(workspace.groupId);
        if (group) {
            chrome.tabGroups.update(group.id, { color });
        }
        if (workspace) {
            workspace.color = color;
            await saveContext(workspace);
            dispatch('dataUpdated', {workspace});
        }
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
        workspace.archived = null;
        await saveContext(workspace);
        dispatch('dataUpdated', { workspace, notify: true });
        dispatch('exit');
    };

    const archiveWorkspace = async () => {
        workspace.archived = Date.now();
        await saveContext(workspace);
        dispatch('dataUpdated', {workspace, notify: true });
        dispatch('exit');
    };

    const moveWorkspaceToNewWindow = async () => {
        
        const window = await chrome.windows.create({ focused: true });
        const newTab = (await chrome.tabs.query({windowId: window.id}))[0];
        await chrome.tabGroups.move(workspace.groupId, {
            windowId: window.id,
            index: -1
        });
        await chrome.tabs.remove(newTab.id);
    };


    /*
        parent folders?

    */

    const onTitleInputChanged = async (e) => {
        await saveContext(workspace);

        let group = await tryToGetTabGroup(workspace.groupId);

        if (group) {
            chrome.tabGroups.update(group.id, { title: workspace.title });
        }

        if (workspace.folderId) {

            chrome.bookmarks.update(workspace.folderId, {
                title: workspace.title,
            });
        }
    
        dispatch('dataUpdated', {workspace, notify: true});
    }

    const toggleFavorite = () => {

    };

    const showMoveMenu = () => {

    };

    let showLocationSelection;
    const onLocationSelected = ({ detail }) => {
        
        const folderId = detail.workspace?.folderId ?? detail.folder?.id;

        if (!folderId) return;

        chrome.bookmarks.move(workspace.folderId, {
            parentId: folderId,
            index: 0,
        });


        showLocationSelection = false;
    };

    const openWorkspaceInCurrentWindow = async () => {
        workspace = await openWorkspace(workspace, {openInNewWindow: false});
        dispatch('workspaceOpened', workspace);
        dispatch('exit');
    };

    const openWorkspaceInNewWindow = async () => {
        workspace = await openWorkspace(workspace, {openInNewWindow: true});

        dispatch('workspaceOpened', workspace);
        dispatch('exit');
    };

    const openDesktop = async () => {
        const desktopUrl = await chrome.extension.getURL('desktop');
        const existingTab = await chrome.tabs.query({ groupId: workspace.groupId })
            .find((t) => t.url == desktopUrl);

        if (existingTab) {
            chrome.tabs.update(existingTab.id, { active: true });
        } else {
            
        }
    };

</script>

{#if showLocationSelection}
<ModalContainer on:exit={() => showLocationSelection = false}>
    <LocationSelection 
        on:back={() => showLocationSelection = false}
        on:locationSelected={onLocationSelected}
    />
</ModalContainer>
{/if}

{#if loaded}
<div
    class="workspace-menu"
>
    <div class="container">
        <div class="title">
            <input 
                id="workspace-title"
                type="text"
                style="color: {colorMap[workspace?.color ?? 'grey']}"
                bind:value={workspace.title}
                on:input={onTitleInputChanged}
                placeholder="Enter group name"
                autofocus="true"
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
            onClick={openWorkspaceInCurrentWindow} 
        />
        <MenuItem
            title='Open in New Window'
            icon={openInNewWindowIcon}
            onClick={openWorkspaceInNewWindow}
        />
    {/if}

       <!-- <div class="action" on:mousedown={showMoveMenu}>Move Folder</div> --> 

    <MenuDivider/>

    <MenuItem
        title='Move Folder'
        onClick={() => showLocationSelection = true}
        icon={moveFolderIcon}
    />
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
            {#if workspace.archived}
                <MenuItem 
                    title='Restore'
                    icon={restoreIcon}
                    onClick={restoreWorkspace} 
                />
            {:else}
                <MenuItem 
                    title='Archive'
                    icon={archiveIcon}
                    onClick={archiveWorkspace}
                />
            {/if}
        
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