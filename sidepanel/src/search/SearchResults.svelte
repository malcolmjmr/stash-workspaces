<script>
  import { createEventDispatcher } from "svelte";
    import Tab from "../tab/Tab.svelte";
  import { allWorkspaces } from "../stores";
  import SectionContainer from "../workspace/SectionContainer.svelte";
  import SearchResutlsSection from "../components/SearchResutlsSection.svelte";
  import Bookmark from "../components/Bookmark.svelte";
  import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
  import FolderListItem from "../components/FolderListItem.svelte";
    export let searchText;

    let searchResults = [];
    export let selectedTabs = [];
    export let lastSelectionUpdate = null;
    export let hasBookmarkPermission;
    export let tabs;
    export let lastUpdate;
    //export let userSettings?

    /*
        Todo: 
        - make open tabs global variable
        - search open tabs, bookmarks, spaces, folders
    */

    $: {
        searchText;
        updateResults();
    }

    $: {
        lastUpdate;
        if (searchText != "") updateResults();
    }

    let visibleTabs = [];
    let visibleFolders = [];
    let visibleBookmarks = [];
    let visibleSpaces = [];

    const updateResults = async () => {
        const text = searchText.toLowerCase();
        visibleTabs = tabs.filter((t) =>
            (t.title + " " + t.url).toLowerCase().includes(text)
        );

        if (hasBookmarkPermission) {
            const searchResults = await chrome.bookmarks.search({query: text});
            let tempBookmarks = [];
            let tempFolders = [];
            for (const result of searchResults) {
                if (result.url && searchText.length > 2) tempBookmarks.push(result);
                else if (!result.url) tempFolders.push(result);
            }

            visibleBookmarks = tempBookmarks;
            visibleFolders = tempFolders;

        }

        visibleSpaces = $allWorkspaces.filter((w) => w.title?.toLowerCase().includes(text));
        
    };

    let dispatch = createEventDispatcher();
    const getPermissionToSearchBookmarks = async () => {
        const granted = await chrome.permissions.request({
            permissions: ['bookmarks']
        });

        if (granted) {
            dispatch('searchBookmarks');
        }
    }
</script>

<div class="search-results">
    {#if visibleTabs.length > 0 || visibleBookmarks.length > 0 || visibleFolders.length > 0 || visibleSpaces.length > 0}
        <div class="container">

        
        <SearchResutlsSection title="Tabs" count={visibleTabs.length}>
            {#each visibleTabs as tab (tab)}
                <Tab
                    {tab}
                    {selectedTabs}
                    {lastSelectionUpdate}
                    on:updateSelection
                />
            {/each}
        </SearchResutlsSection>
        <SearchResutlsSection title="Bookmarks" count={visibleBookmarks.length}>
            {#each visibleBookmarks as bookmark (bookmark.id)}
                <Bookmark {bookmark} />
            {/each}
        </SearchResutlsSection>
        <SearchResutlsSection title="Spaces" count={visibleSpaces.length}>
            {#each visibleSpaces as workspace (workspace.id)}
                <WorkspaceListItem
                    {workspace}
                    isOpen={false}
                    onClick={() => null}
                 
                />
            {/each}
        </SearchResutlsSection>
        <SearchResutlsSection title="Folders" count={visibleFolders.length}>
            {#each visibleFolders as folder (folder.id)}
                <WorkspaceListItem
                    workspace={{folderId: folder.id, title: folder.title}}
                    isOpen={false}
                    onClick={() => null}
                
                />
            {/each}
        </SearchResutlsSection>
        </div>
    {:else}
        <div class="no-results-container">
            <span>No results could be found for "{searchText}"</span>
            {#if !hasBookmarkPermission}
                <div class="bookmarks-permission" on:mousedown={getPermissionToSearchBookmarks}>
                    Search Bookmarks
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .search-results {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .search-results .container {
        margin: 0px 10px;
    }

    .no-results-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .no-results-container span {
        text-align: center;
    }

    .bookmarks-permission {
        color: rgb(136, 136, 236);
        opacity: 0.8;
        border-radius: 7px;
        padding: 5px;
        margin: 10px;
    }

    .bookmarks-permission:hover {
        opacity: 1;
        cursor: pointer;
    }

    

</style>
