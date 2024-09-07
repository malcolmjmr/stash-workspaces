<script>
    import { onMount } from "svelte";
    import AppContainer from "../components/AppContainer.svelte";
    import Header from "./Header.svelte";
    import Window from "./Window.svelte";
    import SearchResults from "../search/SearchResults.svelte";
    import Footer from "./WindowsFooter.svelte";
    import SelectionHeader from "../header/SelectionHeader.svelte";
  import { get } from "../utilities/chrome";
  import SectionHeader from "./SectionHeader.svelte";

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
        loadSessions();
        loadRemoteSessions();
   
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

    let sessions = [];
    const loadSessions = async () => {
        sessions = await get('sessions') ?? [];

        for (let i = 0; i < sessions.length; i++) {
            let session = sessions[i];
            let tabs = [];
            let contexts = [];
            for (const id in session.tabs) {
                let tabData = session.tabs[id];
                if (tabData.tabs) {
                    for (const tab of tabData.tabs) {
                        if (!contexts.includes(id)) contexts.push(id);
                        tab.contextId = id;
                        tabs.push(tab);
                    }
                } else {
                    tabs.push(tabData);
                }
            }
            tabs.sort((a, b) => a.index - b.index);
            sessions[i].tabs = tabs;
            sessions[i].contexts = contexts;
        }
    };

    let devices = [];
    const loadRemoteSessions = async () => {
        const chromeDevices = await chrome.sessions.getDevices();
        let tempDevices = [];
        for (const d of chromeDevices) {
            let device = {
                name: d.deviceName,
                windows: []
            };
            for (const session of d.sessions) {
                device.windows.push(session.window);
                console.log(session.window);
            }
            tempDevices.push(device);
        }

        devices = tempDevices;
    };

    $: {
        searchText;
        updateResults();
    }

    $: {
        lastUpdatedWindow;
        updateWindows();
        
    }

    let normalWindows = [];
    let popupWindows = [];
    let incognitoWindows = [];
    const updateWindows = () => {
        let tempNormalWindows = [];
        let tempPopupWindows = [];
        let tempIncognitoWindows = []
        windows.sort((a, b) => {
            return (
                (b.id == currentWindowId ? 1 : 0) -
                (a.id == currentWindowId ? 1 : 0)
            );
        });
        for (const window of windows) {
            if (window.incognito) {
                tempIncognitoWindows.push(window);
            } else if (window.type == 'popup') {
                tempPopupWindows.push(window);
            } else {
                tempNormalWindows.push(window);
            }
        }

        normalWindows = tempNormalWindows;
        popupWindows = tempPopupWindows;
        incognitoWindows = tempIncognitoWindows;
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
    
    const onDropOnBackground = async (e) => {
        if (isDraggedOver) isDraggedOver = false;
        const tabId = parseInt(e.dataTransfer.getData("tabId"));
        const newWindow = await chrome.windows.create({ focused: false});
        await chrome.tabs.move(tabId, {
            index: -1,
            windowId: newWindow.id,
        });
        // delete new tab 
        const newTab = (await chrome.tabs.query({windowId: newWindow.id})).filter((t) => t.id != tabId)[0];
        await chrome.tabs.remove(newTab.id);
        
    };

    const onDragOverBackground = async (e) => {
        e.preventDefault();
    };

    let showIncognitoWindows;
    let showStashedWindows;
    let showPopupWindows;

</script>


{#if loaded}
<div 
    class="windows"
    
>
    <div class="background" on:drop={onDropOnBackground} on:dragover={onDragOverBackground}></div>
    {#each normalWindows as windowData (windowData)}
        <Window
            bind:view
            {windowData}
            isCurrentWindow={windowData.id == currentWindowId}
            {groups}
            tabs={tabs.filter((t) => t.windowId == windowData.id)}
            {lastUpdatedWindow}
            {lastUpdatedTab}
            on:tabMoved
        />
    {/each}


    {#if popupWindows.length > 0}
    <SectionHeader title="Popups" bind:isOpen={showPopupWindows}/>
    {/if}
    {#if showPopupWindows}
    {#each popupWindows as windowData (windowData)}
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
    {/if}

    {#if incognitoWindows.length}
        <SectionHeader title="Incognito" bind:isOpen={showIncognitoWindows}/>
    {/if}
    

    {#if showIncognitoWindows}
    {#each incognitoWindows as windowData (windowData)}
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
    {/if}

    {#if devices.length > 0}
    
    {#each devices as device (device)}
        <SectionHeader title={device.name} bind:isOpen={device.show}/>
        {#if device.show}
        {#each device.windows as window}
            <Window
                bind:view
                windowData={window}
                {groups}
                tabs={window.tabs}
                {lastUpdatedWindow}
                {lastUpdatedTab}
                isOpen={false}
                on:tabMoved
            />
        {/each}
        {/if}
    {/each}
    {/if}
    

    {#if sessions.length > 0}
    <SectionHeader title="Saved for later" bind:isOpen={showStashedWindows}/>
    {#if showStashedWindows}
    
    {#each sessions as session (session)}
        <Window
            bind:view
            windowData={session}
            {groups}
            tabs={session.tabs}
            {lastUpdatedWindow}
            {lastUpdatedTab}
            isOpen={false}
            on:tabMoved
            on:dataUpdated
        />
    {/each}
    {/if}
    {/if}
    
    
</div>
{/if}

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

    .background {
        position: fixed;
        height: 100%;
        width: 100%;
    }

    .bottom-drop-zone {
        height: 400px;
        width: 100%;
    }
</style>
