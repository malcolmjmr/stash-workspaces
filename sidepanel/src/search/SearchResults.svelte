<script>
  import { createEventDispatcher } from "svelte";
    import Tab from "../tab/Tab.svelte";
    export let searchText;
    export let searchResults;
    export let selectedTabs = [];
    export let lastSelectionUpdate = null;
    export let hasBookmarkPermission;
    //export let userSettings?

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
    {#if searchResults.length > 0}
        {#each searchResults as tab (tab)}
            <Tab
                {tab}
                {selectedTabs}
                {lastSelectionUpdate}
                on:updateSelection
            />
        {/each}
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
