<script>
    import { onMount } from "svelte";
    import  { closeTabGroup, get } from "../utilities/chrome";

    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import RecentTabs from "./RecentTabs.svelte";
    import { Views } from "../view";

    import trashIcon from "../icons/delete.png";

    export let db = null;
    export let user = null;
    export let view;
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

    

    onMount(() => {

        refreshSpaces();

    });

    $: {
        workspaces;
        lastUpdatedGroup;
        refreshSpaces();
    }

    let loaded;
    const refreshSpaces = async () => {
        if (workspaces.length == 0) return;
        openSpaces = Object.values(groups).map((g) => workspaces.find((w) => g.workspaceId == w.id)).filter((s) => s);
        
        let spaces = [...workspaces.filter((w) => !w.deleted && !openSpaces.find((openSpace) => w.id == openSpace.id))];

        spaces.sort((a,b) => b.updated - a.updated);
        recentSpaces = spaces.slice(0, 10);
        favoriteSpaces = ((await get('favoriteSpaces')) ?? []).map((favoriteSpaceId) => spaces.find((s) => s.id == favoriteSpaceId));
        deletedSpaces = workspaces.filter((w) => w.deleted);
        loaded = true;
    };

    const openTrash = async () => {
        view = Views.history;
    };

    const closeAllOpenSpaces = async () => {
        for (const space of openSpaces) {
            await closeTabGroup(space.groupId);
        }
    };


</script>
{#if loaded}
<div class="home">
    <div class="container">
        {#if false}
        <RecentTabs {recentTabs} {groups}/>
        {/if}
        {#if openSpaces.length > 0}
        <div class="open spaces section">
            <div class="section-heading">
                <div class="section-title">
                    Open
                </div>
                <div class="action button" on:mousedown={closeAllOpenSpaces}>
                    Close All
                </div>

            </div>
            
            <div class="section-items">
                {#each openSpaces as workspace, i}
                    <WorkspaceListItem {db} {user} {workspace} isOpen={true}/>
                    {#if i < openSpaces.length - 1}
                        <div class="divider"/>
                    {/if}
                {/each}
            </div>
        </div>
        {/if}
        {#if recentSpaces.length > 0}
        <div class="recent spaces section">
            <div class="section-heading">
                <div class="section-title">
                    Recent
                </div>
                <div class="action button" on:mousedown={() => view = Views.history}>
                    Show More
                </div>
            </div>
            
            <div class="section-items">
                {#each recentSpaces as workspace, i}
                    <WorkspaceListItem {db} {user} {workspace} isOpen={false}/>
                    {#if i < recentSpaces.length - 1}
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
                {#each favoriteSpaces as workspace, i}
                    <WorkspaceListItem {db} {user} {workspace} />
                        {#if i < favoriteSpaces.length - 1}
                        <div class="divider"/>
                    {/if}
                {/each}
            </div>
        </div>
        {/if}
    
        {#if deletedSpaces.length > 0}
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
</div>
{/if}

<style>

    .container {
        margin: 5px 10px;

    }
    
    .spaces.section {
       margin: 10px 0px;
    }

    .section-items {
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: column;
    }

    .section-heading {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        margin: 0px 5px 5px 5px;

    }

    .section-title {
        font-size: large;
        font-weight: 400;
        
    }

    .divider {
        height: 0.5px;
        background-color: #555555;
    }

    .trash {
        display: flex;
        flex-direction: row;
        border-radius: 8px;
        background-color: #333333;
        padding: 8px;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }

    .trash .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: 300;
    }

    .trash img {
        filter: invert(0.6);
        height: 20px;
        width: 20px;
        margin-right: 8px;
    }
    
    .button:hover {
        cursor: pointer;
    }
</style>