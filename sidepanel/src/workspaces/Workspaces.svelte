<script>

    
    import { onMount } from "svelte";
    import WorkspaceListItem from "./WorkspaceListItem.svelte";
    import FolderListItem from "./FolderListItem.svelte";
    import WorkspacesFooter from "./WorkspacesFooter.svelte";

    import publicIcon from "../icons/public.png";
  import Tab from "../tab/Tab.svelte";

    export let searchText;
    export let workspaces;
    export let activeTab;

    /*
        recent folders

    */

    let loaded;

    onMount(() => {
        //getFolders();
        workspaces?.sort((a,b) => b.updated - a.updated);
        workspaces = workspaces.filter((w) => (w.isIncognito ?? false) == activeTab.incognito);
        loaded = true;
    });

    let colorCounts = {};
    const getColors = () => {
        colorCounts = {};
        for (const workspace of workspaces) {
            const color = workspace.color ?? 'grey';
            if (!colorCounts[color]) colorCounts[color] = 0;
            colorCounts[color] += 1;
        }
    }

    export let groups;

    let recentFolders = [];
    let sharedSpaces = [];
    let publicSpaces = [];

    const savePublicData = () => {
        /*
            get stored contexts
            get all resources for research/reading contexts
            tag resource context

            save all research/reading contexts 
                add 
            save all resources related to those contexts
        */
    };


    const getFolders = async () => {
        let openGroupFolders;
        console.log(groups);
        let folders = (await chrome.bookmarks.search({ url: null }));
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        const now = Date.now();
        const aMonthAgo = now - (1000 * 60 * 60 * 24 * 7 * 4);
        
        //workspaces = folders.filter((f) => f.title.includes('[workspace'));
        recentFolders = folders.filter((f) => f.dateGroupModified > aMonthAgo && !f.title.includes('[workspace'));

    };

    

</script>

{#if loaded}
<div class="workspaces">
    <div class="container">
        {#each workspaces as workspace}
            <WorkspaceListItem {workspace}/>
        {/each}

        {#if recentFolders.length > 0}
            <div class="heading"><span>Recent Folders</span></div>
            {#each recentFolders as folder}
                <FolderListItem {folder}/>
            {/each}
        {/if}

    </div>
    <WorkspacesFooter {workspaces} {recentFolders}/>
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


</style>