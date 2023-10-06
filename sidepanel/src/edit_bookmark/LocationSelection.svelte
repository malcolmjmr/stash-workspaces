<script>
    import { createEventDispatcher } from "svelte";
    import SearchBox from "../components/SearchBox.svelte";
    import ActiveWindow from "../window/ActiveWindow.svelte";
  import WorkspaceListItem from "../components/WorkspaceListItem.svelte";

    export let workspaces;
    let dispatch = createEventDispatcher();

    const onLocationSelected = (params) => {
        dispatch('locationSelected', params);
    };

    let searchText = '';

    $: {
        searchText;
        updateSearchResults();
    }

    let results = [];
    const updateSearchResults = () => {
        const text = searchText.toLowerCase();
        results =  workspaces.filter((w) => {
            return w.title.toLowerCase().includes(text);
        });
    };

    const onWorkspaceClicked = (workspace) => {

    };

</script>

<div class="location-selection">
    <SearchBox bind:searchText/>
    <div class="results">
        {#each results as result}
            <WorkspaceListItem 
                workspace={result}
                onClick={onWorkspaceClicked} 
            />
        {/each}
    </div>

</div>

<style>
    .location-selection {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>