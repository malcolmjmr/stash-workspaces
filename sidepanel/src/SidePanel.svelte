<script>
    import { onDestroy, onMount } from "svelte";
    import SelectionHeader from "./header/SelectionHeader.svelte";

    import Home from "./windows/Windows.svelte";
    import Workspace from "./workspace/Workspace.svelte";
    import ActiveWindow from "./window/ActiveWindow.svelte";
    import { Views } from "./view";
    import Header from "./header/Header.svelte";
    import SearchPage from "./search/SearchPage.svelte";
    import AppContainer from "./components/AppContainer.svelte";
    import SelectionActions from "./components/SelectionActions.svelte";
    import WindowsFooter from "./windows/WindowsFooter.svelte";
    import ActiveWindowFooter from "./window/ActiveWindowFooter.svelte";
    import FooterContainer from "./components/FooterContainer.svelte";
    import SearchResults from "./search/SearchResults.svelte";
  import Workspaces from "./workspaces/Workspaces.svelte";

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

    let scrollingUp;
    let lastScrollPosition = 0;

    let header;
    let body;

    onMount(() => {
        addEventListeners();
    });

    onDestroy(() => {
        removeListeners();
    });

    let isScrolling;
    let scrollListener;
    const addEventListeners = () => {
        scrollListener = body.addEventListener("scroll", (e) => {
            if (!isScrolling) {
                isScrolling = true;
            }
            const scrollChange = lastScrollPosition - body.scrollTop;
            if (scrollingUp) {
                if (scrollChange < 0) {
                    scrollingUp = false;
                }
            } else {
                if (scrollChange > 0) {
                    scrollingUp = true;
                    console.log(scrollingUp);
                }
            }
            lastScrollPosition = body.scrollTop;
        });
    };

    const removeListeners = () => {
        body.removeEventListener("scroll", scrollListener);
    };

    const goToHomeView = () => {
        view = Views.windows;
        windows.sort((a, b) => {
            return (
                (b.id == currentWindowId ? 1 : 0) -
                (a.id == currentWindowId ? 1 : 0)
            );
        });
    };

    let selectedTabs = [];

    let lastSelectionUpdate;
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
    let showSearch;

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

<main>
    {#if true || scrollingUp || lastScrollPosition < 20 || selectedTabs.length > 0}
        <div class="container header">
            {#if selectedTabs.length > 0}
                {#key lastSelectionUpdate}
                    <SelectionHeader bind:selectedTabs />
                {/key}
            {:else}
                <Header
                    bind:view
                    {windows}
                    windowCount={windows?.length ?? 0}
                    tabCount={tabs?.filter((t) => t.windowId == currentWindowId)
                        ?.length ?? 0}
                    bind:searchText
                />
            {/if}
        </div>
    {/if}

    <div class="body" bind:this={body}>
        {#if searchText.length > 0}
            <SearchResults
                {searchText}
                {searchResults}
                on:updateSelection
                {lastSelectionUpdate}
                {selectedTabs}
            />
        {:else if view == Views.windows}
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
                bind:view
                on:updateSelection={onUpdateSelection}
                on:tabMoved
            
            />
        {:else if view == Views.tabs}
            <ActiveWindow
                tabs={tabs.filter((t) => t.windowId == currentWindowId)}
                {groups}
                {lastUpdate}
                {selectedTabs}
                {lastUpdatedTab}
                {lastSelectionUpdate}
                bind:searchText
                {searchResults}
                on:updateSelection={onUpdateSelection}
                on:tabBookmarkAdded
                on:foundDuplicates
            />
        {:else if view == Views.workspace}
            <Workspace 
                tabs={tabs.filter((t) => t.groupId == activeTab.groupId)} 
                {activeTab} 
                group={groups[activeTab.groupId]} 
                {lastUpdate} 
                {lastSelectionUpdate} 
                bind:selectedTabs
            />
        {:else if view == Views.saved}
            <Workspaces {groups}/>
        {/if}
    </div>
    
    {#if view != Views.saved && (true || scrollingUp || lastScrollPosition < 20 || selectedTabs.length > 0)}
        <div class="container footer">
            {#if selectedTabs.length > 0}
                <SelectionActions {lastSelectionUpdate} bind:selectedTabs />
            {:else if view == Views.windows}
                <WindowsFooter
                    {windows}
                    {tabs}
                    {lastSelectionUpdate}
                    {selectedTabs}
                    on:mergedWindows
                />
            {:else if view == Views.tabs}
                <ActiveWindowFooter
                    tabs={tabs.filter((t) => t.windowId == currentWindowId)}
                    {lastSelectionUpdate}
                    bind:selectedTabs
                />
            {/if}
        </div>
    {/if}
</main>

<style>
    main {
        position: relative;
        z-index: 99999;
        background-color: #333333;
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .container.header {
        width: 100%;
        z-index: 999;
        background-color: #333333;
        border-bottom: 1px solid #555555;
        
    }

    .body {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .body::-webkit-scrollbar {
        display: none;
    }

    .body .padding {
        min-height: 40px;
        width: 100%;
    }

    .container.footer {
        width: 100%;
        z-index: 999;
        background-color: #333333;
        padding: 5px 0px;
        border-top: 1px solid #555555;
    }
    .container {
        position: relative;
        color: white;
        display: flex;
        flex-direction: column;
    }
</style>
