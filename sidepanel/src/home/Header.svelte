<script>
    import HeaderContainer from "../components/HeaderContainer.svelte";
    import SearchBox from "../components/SearchBox.svelte";

    import newWindowIcon from "../icons/new-window.png";
    import SelectionHeader from "../window/header/SelectionHeader.svelte";

    export let searchText;
    export let selectedTabs;
    export let lastSelectionUpdate;
</script>

<HeaderContainer>
    {#key lastSelectionUpdate}
        {#if selectedTabs.length > 0}
            <SelectionHeader bind:selectedTabs />
        {:else}
            <SearchBox bind:searchText />
            <img
                class="icon-button"
                src={newWindowIcon}
                alt="Create New Window"
            />
        {/if}
    {/key}
</HeaderContainer>

<style>
    .icon-button {
        filter: invert(1);
        height: 20px;
        width: 20px;
        opacity: 0.7;
        padding: 5px;
    }

    .icon-button:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>
