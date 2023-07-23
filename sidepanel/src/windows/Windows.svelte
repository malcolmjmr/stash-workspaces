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



    

    let isDraggedOver;
    const onDragOver = () => {
        isDraggedOver = true;
    };

    const onDragLeave = () => { 
        isDraggedOver = false;
    };
    
    const onDrop = async (e) => {
        console.log('item dropped');
        if (isDraggedOver) isDraggedOver = false;
        const tabId = parseInt(e.dataTransfer.getData("tabId"));
        console.log(tabId);
        const newWindow = await chrome.windows.create();
        await chrome.tabs.move(tabId, {
            index: -1,
            windowId: newWindow.id,
        });
        // delete new tab 
        const newTab = (await chrome.tabs.query({windowId: newWindow.id})).filter((t) => t.id != tabId)[0];
        await chrome.tabs.remove(newTab.id);
        
    };

</script>

<div class="windows" >

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

<style>
    .windows {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
        position: relative;

    }
    
    .dragged-over {
        background-color: #666666;
    }

    .container {
        flex-grow: 1;
    }
</style>
