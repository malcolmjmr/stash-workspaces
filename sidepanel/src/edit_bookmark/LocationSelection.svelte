<script>
    import { createEventDispatcher } from "svelte";
    import SearchBox from "../components/SearchBox.svelte";
    import ActiveWindow from "../window/ActiveWindow.svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import { allWorkspaces, settings, userData } from "../stores";

    import backIcon from "../icons/back.png";

    
    let dispatch = createEventDispatcher();

    let searchText = '';

    $: {
        searchText;
        updateSearchResults();
    }

    let results = [];
    let visibleWorkspaces = [];
    let visibleFolders = [];
    const updateSearchResults = async () => {
        const text = searchText.toLowerCase();
        let workspaces = $allWorkspaces.filter((w) => {
            return w.title?.toLowerCase().includes(text);
        });

        workspaces.sort((a, b) => b.updated - a.updated);
        visibleWorkspaces = workspaces;

        const workspaceIds = $allWorkspaces.map((w) => w.id);

        let folders = (await chrome.bookmarks.search(text))
            .filter((b) => !b.url && !workspaceIds.includes(b.id));
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        visibleFolders = folders;

    };

    const onWorkspaceClicked = (workspace) => {
        dispatch('locationSelected', {workspace});
    };

    const onFolderClicked = (folder) => {
        dispatch('locationSelected', {folder});
    };

</script>

<div class="location-selection">
    <div class="header">
        <div class="back end" on:mousedown={() => dispatch('back')}>
            <img src={backIcon} alt="Back" />
            <span>Back</span>
        </div>
        <div class="title">
            Select Location
        </div>

        <div class="end">
        </div>
    </div>
    <div class="container">
        <div class="search-container">
            <SearchBox bind:searchText placeholderText="Search"/>
        </div>
        
        {#if false}
            <div class="create">
                <img src={createFolderIcon} alt="create"/>
                <span>
                    Create "{searchText}"
                </span>
            </div>
        {/if}
        {#if visibleWorkspaces.length > 0}
        <div class="spaces section">
            <div class="heading">
                Spaces
            </div>
            <div class="list">
                {#each visibleWorkspaces as workspace}
                    <WorkspaceListItem 
                        {workspace}
                        onClick={onWorkspaceClicked} 
                    />
                {/each}
            </div>
        </div>
        {/if}
        {#if visibleFolders.length > 0}
        <div class="folders section">
            <div class="heading">
                Folders
            </div>
            <div class="list">
                {#each visibleFolders as workspace}
                    <WorkspaceListItem 
                        {workspace}
                        onClick={onFolderClicked} 
                    />
                {/each}
            </div>  
        </div>
        {/if}
    </div>
    
</div>

<style>

    .location-selection {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .location-selection .container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: scroll;
    }


    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-height: 40px;
    }

    .header .back {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .header .back:hover {
        cursor: pointer;
    }

    .header .back img {
        filter: invert(1);
        height: 16px;
        width: 16px;
    }

    .header .end {
        width: 70px;
    }

    .header .title {
        font-size: 14px;
        font-weight: 400;
    }

    .search-container {
        height: 25px; 
    }

    .section {
        margin: 10px 0px;
    }

    .section .heading {
       margin: 0px 0px 5px 5px;
       font-size: 14px;
       font-weight: 400; 
    }

    .section .list {
        background-color: #333333;
        border-radius: 8px;
    }

    

</style>