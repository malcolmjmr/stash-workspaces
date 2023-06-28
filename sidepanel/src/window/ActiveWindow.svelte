<script>
    import { onDestroy, onMount } from "svelte";

    import Header from "./header/Header.svelte";
    import Footer from "./Footer.svelte";
    import Tab from "../tab/Tab.svelte";
    import { slide } from "svelte/transition";
    import GroupLabel from "../tab/GroupLabel.svelte";
    import SearchResults from "../search/SearchResults.svelte";

    export let tabs;
    export let groups;
    export let activeTab;
    export let windows;
    export let lastUpdatedTab;
    export let lastUpdatedGroup;
    export let lastUpdatedWindow;
    export let lastUpdate;
    let scrollElement;

    let selectedTabs = [];
    let showSearchResults = false;
    export let searchResults = [];
    let folder;
    export let searchText;
    let showSearch;
    let showHeader = true;

    /*



    integrate with existing extension 
    - click the stash icon to open sidepanel 
    - 

    new extension 
    - 

    outside of group
    - let user easily group multiple tabs

    inside of group
    - show workspace view

    Views
    - Home (windows + saved workspaces)
    - Window (tabs + groups)
    - Workspace (tabs + bookmarks + notes + tasks)
    */

    let loaded;
    onMount(() => {
        tabs = tabs.filter((t) => t.windowId == activeTab?.windowId);
        addEventListeners();
        getTabGroupStarts();
        loaded = true;
    });

    onDestroy(() => {
        removeListeners();
    });

    $: {
        lastUpdatedTab;
        //lastUpdate = Date.now();
        getTabGroupStarts();
    }

    let lastScrollPosition = 0;
    let lastScrollTime = Date.now();
    let scrollingUp;
    let isScrolling;

    let scrollListener;
    const addEventListeners = () => {
        scrollListener = scrollElement.addEventListener("scroll", (e) => {
            if (!isScrolling) {
                isScrolling = true;
            }
            const scrollChange = lastScrollPosition - scrollElement.scrollTop;
            if (scrollingUp) {
                if (scrollChange < 0) {
                    scrollingUp = false;
                }
            } else {
                if (scrollChange > 0) {
                    scrollingUp = true;
                }
            }
            lastScrollPosition = scrollElement.scrollTop;
        });
    };

    const removeListeners = () => {
        scrollElement.removeEventListener("scroll", scrollListener);
    };

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

    let groupStarts = {};
    const getTabGroupStarts = () => {
        groupStarts = {};
        //tabs.sort((a, b) => a.windowId - b.windowId);
        for (const tab of tabs) {
            if (tab.groupId > -1 && groupStarts[tab.groupId] == null) {
                groupStarts[tab.groupId] = tab.index;
            }
        }
    };

    let lastGroupUpdate = Date.now();
    let collapsedGroups = [];
    const onCollapsedToggle = ({ detail }) => {
        const group = detail;
        const index = collapsedGroups.findIndex((id) => group.id == id);
        if (index > -1) {
            collapsedGroups.splice(index, 1);
        } else {
            collapsedGroups.push(group.id);
        }

        lastSelectionUpdate = Date.now();
        //lastUpdate = Date.now();
        lastGroupUpdate = Date.now();
    };
</script>

<main>
    {#if scrollingUp || lastScrollPosition < 20}
        <div class="header-container" in:slide out:slide>
            <Header
                bind:showSearch
                bind:searchText
                {folder}
                {tabs}
                bind:selectedTabs
                {searchResults}
                {lastSelectionUpdate}
                windowCount={windows.length}
                on:goHome
            />
        </div>
    {/if}
    <div class="body" bind:this={scrollElement}>
        <div class="container">
            {#if searchText.length > 0}
                <SearchResults
                    {searchText}
                    {searchResults}
                    {selectedTabs}
                    {lastSelectionUpdate}
                    on:updateSelection
                />
            {:else if loaded}
                {#key lastUpdatedTab}
                    {#each tabs as tab (tab)}
                        {#if lastSelectionUpdate && tab.groupId > -1 && groupStarts[tab.groupId] == tab.index}
                            <GroupLabel
                                group={groups[tab.groupId]}
                                {lastGroupUpdate}
                                isCollapsed={collapsedGroups.includes(
                                    tab.groupId
                                )}
                                tabs={tabs.filter(
                                    (t) => t.groupId == tab.groupId
                                )}
                                on:toggleCollapse={onCollapsedToggle}
                            />
                        {/if}
                        {#if lastSelectionUpdate && !collapsedGroups.includes(tab.groupId)}
                            <Tab
                                {tab}
                                group={groups[tab.groupId]}
                                {selectedTabs}
                                {lastSelectionUpdate}
                                on:updateSelection={onUpdateSelection}
                            />
                        {/if}
                    {/each}
                {/key}
            {/if}
        </div>
    </div>
    {#if selectedTabs.length || (!showSearch && (scrollingUp || lastScrollPosition < 20))}
        <div class="footer-container" in:slide out:slide>
            <Footer {tabs} bind:selectedTabs {lastSelectionUpdate} />
        </div>
    {/if}
</main>

<style>
    main {
        position: relative;
        z-index: 99999;
        background-color: #333333;
        height: 100%;
        width: 100%;

        color: white;
    }

    .header-container {
        position: absolute;
        top: 0px;
        width: 100%;
        z-index: 999;
    }

    .body {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .footer-container {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 40px;
    }

    .no-results-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .body .container {
        padding: 40px 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
