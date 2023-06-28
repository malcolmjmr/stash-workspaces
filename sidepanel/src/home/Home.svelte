<script>
    import { onMount } from "svelte";
    import AppContainer from "../components/AppContainer.svelte";
    import Header from "./Header.svelte";
    import Window from "./Window.svelte";
    import SearchResults from "../search/SearchResults.svelte";
    import Footer from "./Footer.svelte";
    import SelectionHeader from "../window/header/SelectionHeader.svelte";

    export let tabs;
    export let activeTab;
    export let currentWindowId;
    export let windows;
    export let groups;
    export let lastUpdate;
    export let lastSelectionUpdate;
    export let lastUpdatedTab;
    export let lastUpdatedGroup;
    export let lastUpdatedWindow;

    export let selectedTabs;

    let searchText = "";
    let searchResults;

    let scrollingUp;
    let lastScrollPosition = 0;

    let loaded;
    onMount(() => {
        loadWindows();
        loadWorkspaces();
        loaded = true;
    });

    const loadWindows = () => {
        // current window first
        windows.sort((a, b) => {
            return (
                (b.id == currentWindowId ? 1 : 0) -
                (a.id == currentWindowId ? 1 : 0)
            );
        });
    };

    $: {
        searchText;
        updateResults();
    }

    $: {
        lastUpdatedWindow;
        windows = windows;
        windows.sort((a, b) => {
            return (
                (b.id == currentWindowId ? 1 : 0) -
                (a.id == currentWindowId ? 1 : 0)
            );
        });
    }

    const updateResults = () => {
        const text = searchText.toLowerCase();
        searchResults = tabs.filter((t) =>
            (t.title + t.url).toLowerCase().includes(text)
        );
    };

    let workspaces = [];
    const loadWorkspaces = () => {};
</script>

<AppContainer {scrollingUp} {lastScrollPosition}>
    <Header
        bind:searchText
        slot="header"
        bind:selectedTabs
        {lastSelectionUpdate}
    />

    <div class="container" slot="body">
        {#if searchText.length > 0}
            <SearchResults
                {searchText}
                {searchResults}
                on:updateSelection
                {lastSelectionUpdate}
                {selectedTabs}
            />
        {:else}
            <div class="windows">
                {#each windows as windowData (windowData)}
                    <Window
                        {windowData}
                        {groups}
                        tabs={tabs.filter((t) => t.windowId == windowData.id)}
                        {lastUpdatedWindow}
                        {lastUpdatedTab}
                        on:tabMoved
                    />
                {/each}
            </div>
        {/if}

        {#if workspaces.length > 0}
            <div class="workspaces" />
        {/if}
    </div>

    <Footer
        {windows}
        {tabs}
        slot="footer"
        {lastSelectionUpdate}
        {selectedTabs}
    />
</AppContainer>

<style>
    .windows {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
    }

    .container {
        height: calc(100% - 40px);
        padding-top: 40px;
        overflow-y: scroll;
    }
</style>
