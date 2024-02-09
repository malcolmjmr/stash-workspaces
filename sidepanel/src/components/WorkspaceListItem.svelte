<script>
    export let workspace;
    export let canExpand = false;
    export let isOpen = false;
    export let user = null;
    export let db = null;
    export let onClick = null;
    export let showUpdateTime = null;
    export let showQuickActions = true;

    
    import menuIcon from "../icons/more-vert.png";
    import arrowRightIcon from "../icons/arrow-right.svg";
    import arrowDownIcon from "../icons/arrow-down.svg";
    import autoDeleteIcon from "../icons/delete.png"
    import { createEventDispatcher, onMount } from "svelte";
    import { colorMap } from "../utilities/colors";
    import WorkspaceListItem from "./WorkspaceListItem.svelte";
    import openIcon from "../icons/open-in-new-window.png";
    import closeIcon from "../icons/close.png";
    import ModalContainer from "./ModalContainer.svelte";
    import WorkspacePreview from "../workspace/WorkspacePreview.svelte";
    import { getTimeSinceString } from "../workspaces/helpers";
    import WorkspaceFolder from "./WorkspaceIcon.svelte";
  import { closeTabGroup, openWorkspace, saveContext, tryToGetTabGroup } from "../utilities/chrome";
  import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
    
    let dispatch = createEventDispatcher();
    
    let showPreview;
    let showSubFolders;
    let subFolders = [];
    

    let isInFocus;
 
    
    onMount(() => {
        load();
    });

    /*

        Todo: 
        - show arrow if item has subfolder/spaces
        - navigate to workspace
        - open workspace (modal?)
        - open workspace tab group

    */


    const load = async () => {
        if (canExpand) {
            let folder;
            try {
                folder = await chrome.bookmarks.get(workspace.folderId);
                subFolders = (await chrome.bookmarks.getChildren(workspace.folderId))
                    .filter((b) => !b.url);
            } catch (e) {
            
            }
        }
    }



    const onOpenClicked = async () => {
        

        if (!isOpen) {
            workspace = await openWorkspace(workspace, {openInNewWindow: false});
            dispatch('workspaceOpened', workspace);
        } else if ((workspace.groupId ?? 0) > 0) {
            navigateToWorkspace();
        }
  

    };

    const navigateToWorkspace = async (terminate) => {
        const tabs = await chrome.tabs.query({groupId: workspace.groupId});
        if (workspace.groupId && tabs.length > 0) {
            chrome.windows.update(tabs[0].windowId, { focused: true }); 
            chrome.tabs.update(tabs[0].id, { active: true });
        } else if (!terminate) {
            const matchingGroups = await chrome.tabGroups.query({ title: workspace.title });
            if (matchingGroups.length == 1) {
                workspace.groupId = matchingGroups[0].id;
                await saveContext(workspace);
                navigateToWorkspace(true);
            }
        }
    }


    const onTitleClicked = async () => {
        if (onClick) {
            onClick(workspace);
        } else {
            const group = await tryToGetTabGroup(workspace?.groupId);
            if (group) {
                navigateToWorkspace();
            } else {
                showPreview = true;
            }
        }
    }

    const onCloseClicked = async () => {
        await closeTabGroup(workspace.groupId);
    }

    let showMenu;

    $: {
        if (showMenu == false) {
            dispatch('closed');
        }
    }

    const exitModals = () => {
        showMenu = false;
        showPreview = false;
    }
    
</script>


{#if showPreview}
    <ModalContainer on:exit={() => showPreview = false}>
        <WorkspacePreview 
            {db} 
            {user}
            {workspace} 
            on:exit={() => showPreview = false} 
            on:dataUpdated 
            on:workspaceOpened
        />
    </ModalContainer>
{/if}

{#if showMenu} 
    <ModalContainer on:exit={() => showMenu = false }>
        <WorkspaceMenu 
            bind:workspace
            {isOpen} 
            on:exit={exitModals}
            on:permenantlyDeleteWorkspace
            on:dataUpdated
            on:workspaceOpened
        />
    </ModalContainer>
{/if}

<div class="workspace-list-item{isInFocus ? ' focused': ''}" 
    on:mouseenter={() => isInFocus = true}
    on:mouseleave={() => isInFocus = false}
>
    <div class="main-container">
        
        <div class="title" on:mousedown={onTitleClicked}>
            <WorkspaceFolder color={workspace.color} />
            <span>{workspace.title ?? 'Untitled'}</span>
        </div>
        <div class="spacer"></div>
        {#if isInFocus && !workspace.deleted}
            {#if isOpen}
                <img 
                    class="close icon" 
                    alt="Close" 
                    src={closeIcon} 
                    on:mousedown={onCloseClicked}
                />
            {:else if showQuickActions}
                <img src={menuIcon} alt="Menu" class="more button" on:mousedown={() => showMenu = true}/>
                <img 
                    class="open-in-new-window icon" 
                    alt="Open in New Window" 
                    src={openIcon} 
                    on:mousedown={onOpenClicked}
                />
                
            {/if}
        {/if}

        {#if showUpdateTime}
            <div class="time">
                {getTimeSinceString(workspace.updated)}
            </div>
        {/if }

        {#if workspace.deleted} 
            {#if isInFocus}
                <!--Restore or Delete or menu?-->
                <img src={menuIcon} alt="Menu" class="more button" on:mousedown={() => showMenu = true}/>
            {:else}
                <div class='deletion-time'>
                    <!-- <img src={autoDeleteIcon} alt=""/> -->
                    <span>{getTimeSinceString(workspace.deleted)}</span>
                </div>
            {/if}
        {/if}

        {#if false}
            <img 
                class="toggle-expand icon" 
                src={showSubFolders ? arrowDownIcon : arrowRightIcon} 
                alt='' 
                on:mousedown={() => !showSubFolders}
            />
        {/if}
    </div>
    {#if showSubFolders}
        <div class="sub-folder">
            {#each subFolders as subFolder}
                <WorkspaceListItem {user} {db} workspace={subFolder} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .workspace-list-item {
        display: flex;
        flex-direction: column;
        padding: 5px 8px;
        min-height: 20px;
        width: calc(100% - 16px);
    }

    .focused {
        background-color: #444444;
    }


    .main-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    .main-container .icon {
        height: 15px;
        width: 15px;
        filter: invert(1);
    }

    .main-container .icon:hover {
        cursor: pointer;
    }



    .title {
        display: flex;
        flex-direction: row;
        font-size: 14px;
        font-weight: 300;
        align-items: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
    }

    .title span {
        margin-left: 3px;
        max-lines: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .spacer {
        flex-grow: 1;
    }


    .title:hover {
        cursor: pointer;
    }

    .deletion-time {
        display: flex;
        flex-direction: row;
        align-items: center;
        white-space: nowrap;
    }

    .more.button {
        height: 18px;
        width: 18px;
        filter: invert(1);
        margin-right: 3px;
    }

    .button:hover {
        cursor: pointer;
    }

</style>
