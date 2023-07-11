<script>
    import SearchHeader from "../../search/SearchHeader.svelte";
    import SelectionHeader from "../../header/SelectionHeader.svelte";
    import { createEventDispatcher } from "svelte";

    import backIcon from "../../icons/back.png";
    import moreIcon from "../../icons/more-horiz.png";
    import searchIcon from "../../icons/search.png";

    export let showSearch;
    export let searchText;
    export let folder;
    export let tabs;
    export let selectedTabs;
    export let searchResults;
    export let lastSelectionUpdate;
    export let windowCount;

    let dispatch = createEventDispatcher();

    /*
        Things the user might want to do 
        - search
        - save
        - perform action on multiple tabs
            - move to new window
            - create group
        - 
    */
</script>

<div class="header">
    {#key lastSelectionUpdate}
        {#if selectedTabs.length > 0}
            <SelectionHeader bind:selectedTabs />
        {:else if showSearch}
            <SearchHeader bind:searchText bind:showSearch />
        {:else}
            <div class="container">
                <div
                    class="go-home button"
                    on:mouseup={() => dispatch("goHome")}
                >
                    <img src={backIcon} alt="Windows" />
                    <div class="title">Windows ({windowCount})</div>
                </div>
                <div class="spacer" />
                <img
                    class="search button"
                    alt="Search"
                    src={searchIcon}
                    on:mousedown={() => (showSearch = true)}
                />

                <!--
                <div
                    class="more-button"
                    on:mouseup={() => dispatch("showWindowMenu")}
                >
                    <img src={moreIcon} alt="More" />
                </div>
                -->
            </div>
        {/if}
    {/key}
</div>

<style>
    .header {
        background-color: #222222;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: calc(100% - 16px);
        padding: 0px 8px;
    }

    .go-home.button {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .spacer {
        flex-grow: 1;
    }

    .more-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border-radius: 100%;
        border: 2px solid;
        opacity: 0.7;
        margin: 0px 8px;
        height: 16px;
        width: 16px;
    }

    .more-button:hover {
        opacity: 1;
    }

    img {
        filter: invert(1);
        height: 20px;
        width: 20px;
    }

    .button:hover {
        cursor: pointer;
    }
</style>
