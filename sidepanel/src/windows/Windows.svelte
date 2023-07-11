<script>
    import { onMount } from "svelte";
    import AppContainer from "../components/AppContainer.svelte";
    import Header from "./Header.svelte";
    import Window from "./Window.svelte";
    import SearchResults from "../search/SearchResults.svelte";
    import Footer from "./WindowsFooter.svelte";
    import SelectionHeader from "../header/SelectionHeader.svelte";

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
    export let view;

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
    const onDrop = (e) => {};

    const onDragOver = () => {};
</script>

<div class="windows" on:drop={onDrop} on:dragover={onDragOver}>
    {#each windows as windowData (windowData)}
        <Window
            bind:view
            {windowData}
            {groups}
            tabs={tabs.filter((t) => t.windowId == windowData.id)}
            {lastUpdatedWindow}
            {lastUpdatedTab}
            on:tabMoved
        />
    {/each}
</div>

{#if workspaces.length > 0}
    <div class="workspaces" />
{/if}

<style>
    .windows {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
    }

    .container {
        flex-grow: 1;
    }
</style>
