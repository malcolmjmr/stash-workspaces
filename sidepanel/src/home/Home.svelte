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
    //export let windows;
    export let groups;
    export let lastTabUpdate;
    export let lastSelectionUpdate;

    export let selectedTabs;

    let searchText = "";
    let searchResults;

    let scrollingUp;
    let lastScrollPosition = 0;

    onMount(() => {
        loadWindows();
        loadWorkspaces();
    });

    let windows = [];
    const loadWindows = () => {
        // current window first
        let tempWindows = {};

        for (const tab of tabs) {
            let window = tempWindows[tab.windowId] ?? {
                tabs: [],
                groups: {},
            };
            if (tab.groupId > -1 && !window.groups[tab.groupId]) {
                window.groups[tab.groupId] = groups[tab.groupId];
            }
            window.tabs.push(tab);
            tempWindows[tab.windowId] = window;
        }

        windows = Object.entries(tempWindows).map(([id, data]) => {
            return {
                id,
                tabs: data.tabs,
                groups: Object.values(data.groups),
            };
        });

        windows.sort((a, b) => {
            return (
                (b.id == activeTab.windowId ? 1 : 0) -
                (a.id == activeTab.windowId ? 1 : 0)
            );
        });
    };

    $: {
        searchText;
        updateResults();
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
    <div class="body" slot="body">
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
                {#each windows as windowData}
                    <Window {windowData} />
                {/each}
            </div>
        {/if}

        {#if workspaces.length > 0}
            <div class="workspaces" />
        {/if}
    </div>
    {#if !searchText || searchText == ""}
        <Footer {windows} slot="footer" {lastSelectionUpdate} {selectedTabs} />
    {/if}
</AppContainer>

<style>
    .windows {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 40px 0px;
    }

    .body {
        height: 100%;
        overflow-y: scroll;
    }
</style>
