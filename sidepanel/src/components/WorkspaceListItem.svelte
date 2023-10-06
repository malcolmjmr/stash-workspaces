<script>
    export let workspace;
    export let canExpand = false;
    export let isOpen = false;
    export let user = null;
    export let db = null;
    export let onClick = null;
    export let showUpdateTime = null;

    
    import arrowRightIcon from "../icons/arrow-right.svg";
    import arrowDownIcon from "../icons/arrow-down.svg";
    import autoDeleteIcon from "../icons/delete.png"
    import { onMount } from "svelte";
    import { colorMap } from "../utilities/colors";
    import WorkspaceListItem from "./WorkspaceListItem.svelte";
    import openIcon from "../icons/open-in-new-window.png";
    import closeIcon from "../icons/close.png";
    import ModalContainer from "./ModalContainer.svelte";
    import WorkspacePreview from "../workspace/WorkspacePreview.svelte";
    import { getTimeSinceString } from "../workspaces/helpers";
  import WorkspaceFolder from "./WorkspaceFolder.svelte";
    
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



    const openWorkspace = async ({openInNewWindow}) => {
        await set({
            workspaceToOpen: {
                workspace,
                time: Date.now(),
            }
        });

        let openedTabs = [];
        let window;
        let newTab; 
        if (openInNewWindow) {
            window = await chrome.windows.create({incognito: workspace.isIncognito ?? false, focused:true});
            newTab = (await chrome.tabs.query({windowId: window.id}))[0];
        }
        
        if (workspace.tabs.length == 0)  {
            workspace.tabs.push({
                url: ''
            });
        }

        for (const tab of workspace.tabs) {
            openedTabs.push(await chrome.tabs.create({url: tab.url, windowId: window?.id}));
        }
        const groupId = await chrome.tabs.group({
            tabIds: openedTabs.map((t) => t.id),
            createProperties: {
                windowId: window?.id
            },
        });
        await chrome.tabGroups.update(groupId, {
            title: workspace.title, 
            color: workspace.color 
        });

        if (newTab) {
            await chrome.tabs.remove(newTab.id);
        }
        

    };


    const onOpenClicked = async () => {

        if (!isOpen) {
            openWorkspace({openInNewWindow: true});
        } else if ((workspace.groupId ?? 0) > 0) {
            navigateToWorkspace();
        }
  

    };

    const navigateToWorkspace = async () => {
        const tabs = await chrome.tabs.query({groupId: workspace.groupId});
        if (tabs.length > 0) {
            chrome.windows.update(tabs[0].windowId, { focused: true });
            // Todo: navigate to last active tab (check if current active tab in window is in group) 
            chrome.tabs.update(tabs[0].id, { active: true });
            
            
        }
    }

    const onTitleClicked = () => {
        if (onClick) {
            onClick(workspace);
        } else {
            if (isOpen) {
                navigateToWorkspace();
            } else {
                showPreview = true;
            }
        }
    }

    const onCloseClicked = async () => {
        await closeTabGroup(workspace.groupId);
    }

    
</script>


{#if showPreview}
    <ModalContainer on:exit={() => showPreview = false}>
        <WorkspacePreview {db} {workspace} {user} />
    </ModalContainer>
{/if}

<div class="workspace-list-item" 
    on:mouseenter={() => isInFocus = true}
    on:mouseleave={() => isInFocus = false}
>
    <div class="main-container">
        
        <div class="title" on:mousedown={onTitleClicked}>
            <WorkspaceFolder color={workspace.color} />
            <span>{workspace.title ?? 'Untitled'}</span>
        </div>
        <div class="spacer"></div>
        {#if isInFocus && !onClick && !workspace.deleted}
            {#if !isOpen}
                <img 
                    class="open-in-new-window icon" 
                    alt="Open in New Window" 
                    src={openIcon} 
                    on:mousedown={onOpenClicked}
                />
            {:else}
                <img 
                    class="close icon" 
                    alt="Close" 
                    src={closeIcon} 
                    on:mousedown={onCloseClicked}
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
        padding: 5px 10px;
        width: calc(100% - 20px);
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
        margin-left: 5px;
        max-lines: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .spacer {
        flex-grow: 1;
    }


    .title:hover {
        cursor: pointer;
        font-weight: 400;
    }

    .deletion-time {
        display: flex;
        flex-direction: row;
        align-items: center;
        white-space: nowrap;
    }

</style>
