<script>
    import { onDestroy, onMount } from "svelte";

    import Home from "./home/Home.svelte";
    import Workspace from "./workspace/Workspace.svelte";
    import ActiveWindow from "./window/ActiveWindow.svelte";
    import { Views } from "./view";

    export let view;
    export let tabs;
    export let groups;
    export let windows;
    export let activeTab;
    export let currentWindowId;
    export let lastUpdate;
    export let lastUpdatedTab;
    export let lastUpdatedGroup;
    export let lastUpdatedWindow;

    let group;
    let window;

    onMount(() => {});

    const goToHomeView = () => {
        view = Views.home;
    };

    let selectedTabs = [];

    let lastSelectionUpdate = Date.now();
    const onUpdateSelection = ({ detail }) => {
        const tab = detail;
        const index = selectedTabs.findIndex((t) => t.id == tab.id);

        if (index > -1) {
            selectedTabs.splice(index, 1);
        } else {
            selectedTabs.push(tab);
        }

        lastSelectionUpdate = Date.now();
    };

    const onClearSelection = () => {
        selectedTabs = [];
        lastSelectionUpdate = Date.now();
    };

    let searchText = "";
    let searchResults = [];

    $: {
        lastUpdate;
        if (searchText != "") updateResults();
    }

    const updateResults = () => {
        const text = searchText.toLowerCase();
        searchResults = tabs.filter((t) =>
            (t.title + " " + t.url).toLowerCase().includes(text)
        );
    };
</script>

<div class="container">
    {#if view == Views.home}
        <Home
            {tabs}
            {groups}
            {activeTab}
            {lastUpdate}
            {lastSelectionUpdate}
            {lastUpdatedTab}
            {lastUpdatedGroup}
            {lastUpdatedWindow}
            {windows}
            {currentWindowId}
            bind:selectedTabs
            on:updateSelection={onUpdateSelection}
        />
    {:else if view == Views.window}
        <ActiveWindow
            tabs={tabs.filter((t) => t.windowId == activeTab.windowId)}
            {activeTab}
            {groups}
            {lastUpdate}
            {lastSelectionUpdate}
            {selectedTabs}
            {lastUpdatedTab}
            {lastUpdatedGroup}
            {lastUpdatedWindow}
            {windows}
            bind:searchText
            {searchResults}
            on:goHome={goToHomeView}
            on:updateSelection={onUpdateSelection}
        />
    {:else if view == Views.workspace}
        <Workspace {tabs} {activeTab} {group} {lastTabUpdate} />
    {/if}
</div>

<style>
    .container {
        position: relative;
        z-index: 99999;
        background-color: #333333;
        height: 100%;
        width: 100%;
        color: white;
    }
</style>
