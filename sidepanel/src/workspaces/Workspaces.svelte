<script>

    /*
        Todo:
        - segement groups
            - open (collapsable)
            - favorites (collpasable)
            - all (sorted by recent)

        - footer 
            - create group (search bookmark folders)
    */

    
    import { onMount } from "svelte";
    import WorkspaceListItem from "./WorkspaceListItem.svelte";
    import FolderListItem from "./FolderListItem.svelte";
    import WorkspacesFooter from "./WorkspacesFooter.svelte";

    import expandArrowIcon from "../icons/arrow-right.png";
    import collapseArrowIcon from "../icons/arrow-down.png";
    import backArrowIcon from "../icons/back.png";
    import GroupColors from "../group/GroupColors.svelte";
    import { get, removeContext, saveContext } from "../utilities/chrome";
    import { deleteDoc, doc, setDoc, updateDoc} from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";
    import Workspace from "../workspace/Workspace.svelte";

    

    export let db;
    export let user;
    export let searchText;
    export let workspaces;
    export let workspacesLoaded;
    export let activeTab;
    export let groups;
    export let lastUpdatedGroup;

    let visibleWorkspaces = [];
    let suggestedWorkspaces = [];
    let selectedColor;

    let showWorkspaces = true;
    let showRecentFolders = true;

    let loaded;
    let updated;

    onMount(() => {

        init();
        
    });

    const init = () => {
        workspaces?.sort((a,b) => b.updated - a.updated);
        updateVisibleWorkspaces();
        loaded = true;
    };


    $: {
        lastUpdatedGroup;
        if (workspacesLoaded) workspaces?.sort((a,b) => b.updated - a.updated);
        searchText; 
        getOpenGroup();
        updateVisibleWorkspaces();
    };


    let openWorkspaces = [];
    const getOpenGroup = async () => {
        openWorkspaces = Object.values(await get('openGroups') ?? {});
    };

 
    let showTrash;


    const updateVisibleWorkspaces = () => {
        let text = searchText.toLowerCase();
        let tempWorkspaces = [];
        let tempColorCounts = {};
        for (const workspace of workspaces) {
            if (showTrash) {
                if (workspace.deleted) tempWorkspaces.push(workspace);
                continue;
            } else if (workspace.deleted) {
                continue;
            }
            const title = (workspace.title ?? '').toLowerCase();
            const titleMatches = title.includes(text);
            const colorMatches = !selectedColor || workspace.color == selectedColor;
            
            if (titleMatches && colorMatches) {
                tempWorkspaces.push(workspace);
                const color = workspace.color ?? 'grey';
                if (!tempColorCounts[color]) tempColorCounts[color] = 0;
                tempColorCounts[color] += 1;
            }
        };

        updated = Date.now();
        visibleWorkspaces = tempWorkspaces;
        colorCounts = tempColorCounts;

    };


    let colorCounts = {};
    let recentFolders = [];


    const getFolders = async () => {
        let openGroupFolders;
        let folders = (await chrome.bookmarks.search({ url: null }));
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        const now = Date.now();
        const aMonthAgo = now - (1000 * 60 * 60 * 24 * 7 * 4);
        //workspaces = folders.filter((f) => f.title.includes('[workspace'));
        recentFolders = folders.filter((f) => f.dateGroupModified > aMonthAgo);

    };

    $: {
        selectedColor;
        showTrash;
        updateVisibleWorkspaces();
    }

    const onColorSelected = ({detail}) => {
        const color = detail;
        if (selectedColor != color) {
            selectedColor = detail;
        } else {
            selectedColor = null;
        }
    };

    const onWorkspaceUpdated = async ({detail}) => {
        const workspace = detail;
        console.log('workspace updated');
        saveWorkspace(workspace);
    };

    let showDeleteModal;
    const onDeleteWorkspace = async ({detail}) => {
        const workspace = detail;
        await removeContext(workspace);
        if (user) {
            const ref = doc(db, StorePaths.userContext(user.id, workspace.id));
            await deleteDoc(ref);
        }
        const index = workspaces.findIndex((w) => w.id == workspace.id);
        if (index > -1) {
            workspaces.splice(index, 1);
        } 
        updateVisibleWorkspaces();
    };

    const saveWorkspace = async (workspace) => {


        await saveContext(workspace);
        if (user) {
            const ref = doc(db, StorePaths.userContext(user.id, workspace.id));
            await setDoc(ref, workspace, {merge: true});
        }
    };

    let expandedWorkspace;

    const onExpandWorkspace = ({detail}) => {
        expandedWorkspace = detail;
    };
    
    
</script>

{#if loaded}

    
    {#if expandedWorkspace}
        <div class="workspace-preview-container">
            <Workspace 
                workspace={expandedWorkspace}

                {user} 
                {db}  
                on:goBack={() => expandedWorkspace = null}
                
            />
        </div>
    {/if}
    <div class="workspaces">
        <div class="container">
            
            {#if workspaces.length > 0}
                <!--
                    <div class="heading">
                        {#if !showTrash}
                        <span>Sessions</span>
                        <img 
                            class="collapse-icon" 
                            src={showWorkspaces ? collapseArrowIcon : expandArrowIcon} 
                            alt="" 
                            on:mousedown={() => showWorkspaces = !showWorkspaces
                        }>
                        {/if}
                    </div>
                -->

                {#if showTrash}
                    <div class="heading">
                
                        <img src={backArrowIcon} alt="back" class="back-action" on:mousedown={() => showTrash = false}/>
                        <span>Trash</span>
                        
        
                    </div>
                {/if}

                {#if showWorkspaces || showTrash}

                    <!--
                        <div class="color-filter">
                            <GroupColors 
                                group={{color: selectedColor}} 
                                olors={Object.keys(colorCounts)} 
                                on:colorSelected={onColorSelected}
                            />
                        </div>
                    -->
                    
                    
                    {#each visibleWorkspaces as workspace (workspace)}
                        <WorkspaceListItem 
                            {workspace}
                            isOpen={openWorkspaces.includes(workspace.id)}
                            on:deleteWorkspace={onDeleteWorkspace} 
                            on:workspaceUpdated={onWorkspaceUpdated}
                            on:expandWorkspace={onExpandWorkspace}
                            />
                    {/each}
                {/if}
            {:else}
                    <div class="empty-state">
                        <div class="instructions">
                            Create a tab group to save your first session
                        </div>
                    </div>
            {/if}

            <!--
                {#if recentFolders.length > 0 && !showTrash}
                    <div class="heading">
                        <span>Recent Folders</span>
                        <img 
                            src={showRecentFolders ? collapseArrowIcon : expandArrowIcon} 
                            alt="" 
                            on:mousedown={() => showRecentFolders = !showRecentFolders}
                        >
                    </div>
                    {#if showRecentFolders}
                    {#each recentFolders as folder}
                        <FolderListItem {folder}/>
                    {/each}
                    {/if}
                {/if}
            -->
        </div>
        
        <WorkspacesFooter {workspaces} {recentFolders} {updated} bind:showTrash/>
    </div>

{/if}


<style>
    .workspaces {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .container {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        flex-grow: 1;
        overflow: scroll;
    }

    .public-spaces {
        width: calc(100% - 20px);
        margin: 5px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 2px solid #555555;
        border-radius: 5px;

    }

    .public-spaces img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        margin: right;
    }

    .color-filter {
        padding: 5px 10px;
        width: calc(100% - 20px);
    }

    .heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        font-size: 18px;
        width: calc(100% - 10px);
        border-bottom: 1px solid #555555;
        position: relative;
    }

    .heading img {
        filter: invert(1);
        height: 16px;
        width: 16px;
    }

    .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    .empty-state > .instructions {
        width: calc(100% - 20px);
        text-align: center;
    }

    img.back-action {
        height: 16px;
        width: 16px;
        filter: invert(1);
        opacity: .8;
        position: absolute;
        top: 2px;
        left: 5px;
    }

    img.back-action:hover {
        opacity: 1;
        cursor: pointer;
    }

    .workspace-preview-container {
        z-index: 999999;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>