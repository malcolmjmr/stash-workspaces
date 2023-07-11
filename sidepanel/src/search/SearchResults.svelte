<script>
    import Tab from "../tab/Tab.svelte";
    export let searchText;
    export let searchResults;
    export let selectedTabs = [];
    export let lastSelectionUpdate = null;
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
</style>
