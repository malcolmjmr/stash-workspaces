<script>
    import SearchBox from "../components/SearchBox.svelte";

    export let searchText;
    export let showSearch = false; // Should remove this variable

    const onCancelClicked = () => {
        showSearch = false;
    };
</script>

<div class="search-container">
    <SearchBox bind:searchText />
    <div class="cancel button" on:mousedown={onCancelClicked}>Cancel</div>
</div>

<style>
    .search-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .cancel.button {
        font-size: 12px;
        opacity: 0.5;
        width: 50px;
        color: #ffbf00;
    }

    .cancel:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>
