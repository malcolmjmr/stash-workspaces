<script>

    
    import { onMount } from "svelte";
    import WorkspaceListItem from "./WorkspaceListItem.svelte";
    import FolderListItem from "./FolderListItem.svelte";
    import WorkspacesFooter from "./WorkspacesFooter.svelte";

    export let searchText;

    /*
        recent folders

    */

    onMount(() => {
        getFolders();
       
    });

    export let groups;

    let workspaces = [];
    let recentFolders = [];
   
    const getFolders = async () => {
        let openGroupFolders;
        console.log(groups);
        let folders = (await chrome.bookmarks.search({ url: null }));
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        const now = Date.now();
        const aMonthAgo = now - (1000 * 60 * 60 * 24 * 7 * 4);
        
        workspaces = folders.filter((f) => f.title.includes('[workspace'));
        recentFolders = folders.filter((f) => f.dateGroupModified > aMonthAgo && !f.title.includes('[workspace'));

    };

</script>


<div class="workspaces">
    <div class="container">
        {#each workspaces as folder}
            <WorkspaceListItem {folder}/>
        {/each}
        {#each recentFolders as folder}
            <FolderListItem {folder}/>
        {/each}
    </div>
    <WorkspacesFooter {workspaces} {recentFolders}/>
</div>


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



</style>