<script>
    import { createEventDispatcher } from "svelte";
    import SearchBox from "../components/SearchBox.svelte";
    import ActiveWindow from "../window/ActiveWindow.svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import { allWorkspaces, settings, userData } from "../stores";

    import backIcon from "../icons/back.png";
    import toolbarIcon from "../icons/toolbar.png";
    import { tryToGetBookmark } from "../utilities/chrome";
  import BookmarkTree from "../workspace/BookmarkTree.svelte";
  import { colorMap } from "../utilities/colors";
  import Workspace from "../workspace/Workspace.svelte";

    export let workspace = null;
    export let addPadding = true;

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
            return !w.deleted && w.title?.toLowerCase().includes(text) && w.id != workspace?.id
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

    const onBookmarkBarSelected = async () => {
        const folder = await tryToGetBookmark('1');
        dispatch('locationSelected', { folder });
    };

</script>

<div class="location-selection{addPadding ? ' padding' : ''}">
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

        {#if searchText.length == 0}
        <div class="bookmarkbar list-item" on:mousedown={onBookmarkBarSelected}>
            <img src={toolbarIcon} alt=""/>
            <span>Bookmark Bar</span>
        </div>
        {/if}
        
        {#if false}
            <div class="create">
                <img src={createFolderIcon} alt="create"/>
                <span>
                    Create "{searchText}"
                </span>
            </div>
        {/if}
        {#if workspace}
        <div class="workspace-folders section">
            <div class="heading" style="color: {colorMap[workspace.color ?? 'grey']}">
                {workspace.title}
            </div>
            <div class="list">
                <BookmarkTree
                    {workspace}
                    onlyShowFolders={true}
                    on:locationSelected
                />
            </div>
            
        </div>
            
        {/if}
        {#if visibleWorkspaces.length > 0}
        <div class="spaces section">
            <div class="heading">
                {#if workspace}Other{/if} Spaces
            </div>
            <div class="list">
                {#each visibleWorkspaces as workspace}
                    <WorkspaceListItem 
                        {workspace}
                        onClick={onWorkspaceClicked} 
                        showQuickActions={false}
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

    .location-selection.padding {
        padding: 0px 8px;
        width: calc(100% - 16px);
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
        overflow: hidden;
    }

    .bookmarkbar.list-item {
        padding: 5px;
        border-radius: 8px;
        min-height: 20px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #333333;
        opacity: 0.6;
    }

    .bookmarkbar.list-item img {
        margin-right: 5px;
        width: 15px;
        height: 15px;
        filter: invert(1);
        
    }

    .bookmarkbar:hover {
        cursor: pointer;
        opacity: 1;
    }

    

</style>