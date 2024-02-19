<script>
    import { createEventDispatcher, onMount } from "svelte";
    import  { closeTabGroup, get, tryToGetTabGroup } from "../utilities/chrome";

    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import RecentTabs from "./RecentTabs.svelte";
    import { Views } from "../view";

    import trashIcon from "../icons/delete.png";
    import archiveIcon from "../icons/archive.png";
    import GroupedWorkspaceSections from "../components/GroupedWorkspaceSections.svelte";
  import { _groups, lastWorkspaceUpdate } from "../stores";

    export let db = null;
    export let user = null;
    export let view;
    export let currentWindowId;
    export let recentTabs;
    export let workspaces;
    export let lastUpdatedGroup;
    export let lastUpdatedTab; 
    export let groups;

    let openSpaces = [];
    let recentSpaces = [];
    let favoriteSpaces = [];
    let favoriteTags = [];
    let deletedSpaces = [];
    let archivedSpaces = [];

    let dispatch = createEventDispatcher();


    onMount(() => {
        
        refreshSpaces();

    });

    $: {
        $_groups;
        $lastWorkspaceUpdate;
        refreshSpaces();
    }

    let loaded;
    let closedSpaces = [];
    const now = Date.now();
    const refreshSpaces = async () => {
        if (workspaces.length == 0) return;
        openSpaces = Object.values($_groups).map((g) => workspaces.find((w) => g.workspaceId == w?.id)).filter((s) => s);
        closedSpaces = [...workspaces.filter((w) => !w?.deleted && !w?.archived && !openSpaces.find((openSpace) => w?.id == openSpace?.id))];
        closedSpaces.sort((a,b) => b.updated - a.updated);
        recentSpaces = closedSpaces.slice(0, 10);
        favoriteSpaces = ((await get('favoriteSpaces')) ?? []).map((favoriteSpaceId) => workspaces.find((s) => s?.id == favoriteSpaceId));
        deletedSpaces = workspaces.filter((w) => w?.deleted);
        archivedSpaces = workspaces.filter((w) => w?.archived);
        loaded = true;
    };

    const closeAllOpenSpaces = async () => {
        
        for (const space of openSpaces) {
            await closeTabGroup(space.groupId);
        }
    };

    $: {
        recentSpaces = closedSpaces.slice(0, 20);
    };

    const onOpenWorkspaceClicked = async (workspace) => {

        const group = await tryToGetTabGroup(workspace.groupId);

        if (group.windowId == currentWindowId) {
            view = Views.tabs;
        }

        navigateToWorkspace(workspace);

    };


    const navigateToWorkspace = async (workspace) => {
        const tabs = await chrome.tabs.query({groupId: workspace.groupId});
        if (workspace.groupId && tabs.length > 0) {
            chrome.windows.update(tabs[0].windowId, { focused: true }); 
            chrome.tabs.update(tabs[0].id, { active: true });
        } 
    };

    const onWorkspaceOpened = async ({ detail }) => {
        const workspace = detail;
        console.log('workspace opened');
        console.log(workspace);
        onOpenWorkspaceClicked(workspace);
    };


</script>
{#if loaded}
<div class="home">
    <div class="container">
        {#if false}
            <RecentTabs {recentTabs} groups={$_groups}/>
        {/if}
        {#if openSpaces.length > 0}
        <div class="open spaces section">
            <div class="section-heading">
                <div class="section-title">
                    Open
                </div>
                {#if openSpaces.length > 1}
                <div class="action button" on:mousedown={closeAllOpenSpaces}>
                    Close All
                </div>
                {/if}

            </div>
            
            <div class="section-items">
                {#each openSpaces as workspace, i (workspace.id)}
                    <WorkspaceListItem 
                        {db} 
                        {user} 
                        {workspace} 
                        isOpen={true} 
                        on:dataUpdated
                        onClick={() => onOpenWorkspaceClicked(workspace)}
                    />
                    {#if i < openSpaces.length - 1}
                        <div class="divider"/>
                    {/if}
                {/each}
            </div>
        </div>
        {/if}


        {#if favoriteSpaces.length > 0}
        <div class="favorite spaces section">
            <div class="section-title">
                Favorites
            </div>
            <div class="section-items">
                {#each favoriteSpaces as workspace, i (workspace.id)}
                    <WorkspaceListItem {db} {user} {workspace} on:dataUpdated/>
                    {#if i < favoriteSpaces.length - 1}
                        <div class="divider"/>
                    {/if}
                    
                {/each}
            </div>
        </div>
        {/if}

        <GroupedWorkspaceSections 
            workspaces={recentSpaces} 
            {user} 
            {db}
            onShowMore={ closedSpaces.length > recentSpaces.length ? () => view = Views.history : null }
            on:dataUpdated
            on:workspaceOpened={onWorkspaceOpened}
            
        />

        {#if archivedSpaces.length > 0 || deletedSpaces.length > 0}
            <div class="bottom-section">
                {#if archivedSpaces.length > 0}
                <div class="archive button" on:mousedown={() => view = Views.archive}>
                    <div class="title">
                        <img src={archiveIcon} alt="Archive"/>
                        <span>Archive</span>
                    </div>
                    <div class="count">
                        {archivedSpaces.length}
                    </div>
                </div>
                {/if}
                {#if deletedSpaces.length > 0}
                {#if archivedSpaces.length > 0}
                <div class="divider"></div>
                {/if}
                <div class="trash button" on:mousedown={() => view = Views.trash}>
                    <div class="title">
                        <img src={trashIcon} alt="Trash"/>
                        <span>Trash</span>
                    </div>
                    <div class="count">
                        {deletedSpaces.length}
                    </div>
                </div>
                {/if}
            </div>
        {/if}
    </div>
</div>
{/if}

<style>

    .container {
        margin: 10px;

    }
    
    .spaces.section {
       margin: 5px 0px;
    }

    .section-items {
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .section-heading {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        margin: 0px 5px 5px 5px;

    }

    .section-title {
        font-size: 16px;
        font-weight: 400;
        
    }

    .divider {
        height: 0.5px;
        background-color: #555555;
    }

    .bottom-section {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        margin-top: 20px;
        overflow: hidden;
    }

    .bottom-section .button {
        display: flex;
        flex-direction: row;
        background-color: #333333;
        padding: 8px;
        align-items: center;
        justify-content: space-between; 
    }

    .bottom-section .button .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: 300;
    }

    .bottom-section .button img {
        filter: invert(0.6);
        height: 20px;
        width: 20px;
        margin-right: 8px;
    }
    
    .bottom-section .button:hover {
        cursor: pointer;
    }
</style>