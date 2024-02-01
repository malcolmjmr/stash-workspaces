<script>
    import { onDestroy, onMount } from "svelte";
    import SelectionHeader from "./header/SelectionHeader.svelte";

    import Windows from "./windows/Windows.svelte";
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
    import SignIn from "./signin/SignIn.svelte";
    import Home from "./home/Home.svelte";
  import HomeFooter from "./home/HomeFooter.svelte";
  import History from "./history/History.svelte";
  import Trash from "./trash/Trash.svelte";
  import { allWorkspaces } from "./stores";
  import ModalContainer from "./components/ModalContainer.svelte";
  import TabUpdateModal from "./tab/TabUpdateModal.svelte";
  import { getActiveTab } from "./utilities/chrome";


    export let user;
    export let db;
    export let view;
    export let tabs;
    export let recentTabs;
    export let groups;
    export let workspaces;
    export let workspacesLoaded;
    export let windows;
    export let activeTab;
    export let currentWindowId;
    export let lastUpdate;
    export let lastUpdatedTab;
    export let lastUpdatedGroup;
    export let lastUpdatedWindow;
    export let lastWorkspaceUpdate;
    export let hasBookmarkPermission;
    export let resources;


    /*


        Todo: 
        - when active tab changed switch to workspace or tab view as appropriate 

    */

    let activeWorkspace;
    let activeGroup;
    // $: {
    //     workspacesLoaded;
    //     const neeedToSetActiveGroup = (
    //         currentWindowId == activeTab.windowId
    //         && (activeTab.groupId != activeGroup?.id 
    //             || (!activeGroup && activeTab.groupId != -1)
    //         )
    //     );
    //     if (neeedToSetActiveGroup) {
    //        setActiveGroup();
    //     }
    // }

    let previewWorkspace;
    let previousView = view;

    $: {
        if (searchText.length > 0) {
            if (view != Views.search) {
                previousView = view;
                view = Views.search;
            } 
        } else if (view == Views.search && previousView) {
            view = previousView;
        }
    }

    let selectedGroup;
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

    const setActiveGroup = () => {
        activeGroup = groups[activeTab.groupId];
        updateViewBasedOnActiveTab();
    };
     
    const updateViewBasedOnActiveTab = () => {
        if (activeTab.groupId > -1) {
            if (view != Views.workspace) {
                view = Views.workspace;
            }
            
        } else {
            if (view != Views.tabs) {
                view = Views.tabs;
            }
        }
    }

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


    const showWorkspaceView = async ({detail}) => {
        activeWorkspace = detail;

        // if (activeTab.groupId != selectedGroup.id) {
        //     const newActiveTab = (await chrome.tabs.query({groupId: selectedGroup.id}))[0];
        //     await chrome.tabs.update(newActiveTab.id, {active: true});
        // }
        view = Views.workspace;
    }

    let showFooter;
    $: {
        showFooter = (selectedTabs.length > 0  
            || (!(fullScreenViews.includes(view)) 
            && (true || scrollingUp || lastScrollPosition < 20))
        );
    };

    const onWorkspaceClosed = ({detail}) => {

    };

    const onSearchBookmarks = () => {
        hasBookmarkPermission = true;
        updateResults();
    }




    const fullScreenViews = [Views.workspace, Views.trash, Views.history];

    let newTab;

    const onNewTabCreated = ({ detail }) => {
        newTab = detail;
    };

    const onShiftClickTab = async ({ detail }) => {

        console.log('shfit click tab');
        const tab = detail;

        const activTab = await getActiveTab();


        if (tab.index < activeTab.index) {
            selectedTabs = tabs.filter((t) => t.index >= tab.index && t.index <= activTab.index );
        } else {
            selectedTabs = tabs.filter((t) => t.index <= tab.index && t.index >= activTab.index );
        }
    };

</script>

{#if newTab}
    <ModalContainer on:exit={() => newTab = null}>
        <TabUpdateModal 
            tab={newTab} 
            on:exit={() => newTab = null}
        />
    </ModalContainer>
{/if}

<main>
    {#if true || scrollingUp || lastScrollPosition < 20 || selectedTabs.length > 0}
        <div class="container header">
            {#if selectedTabs.length > 0}
                {#key lastSelectionUpdate}
                    <SelectionHeader bind:selectedTabs tabs={tabs?.filter((t) => t.windowId == currentWindowId)}/>
                {/key}
            {:else if !fullScreenViews.includes(view)}
                <Header
                    {user}
                    bind:view
                    {windows}
                    {workspaces}
                    windowCount={windows?.length ?? 0}
                    tabCount={tabs?.filter((t) => t.windowId == currentWindowId)
                        ?.length ?? 0}
                    bind:searchText
                />
            {/if}
        </div>
    {/if}

    <div class="body" bind:this={body}>
        {#if view == Views.search}
            <SearchResults
                bind:view
                {tabs}
                {searchText}
                {lastUpdate}
                on:updateSelection
                {lastSelectionUpdate}
                {selectedTabs}
                {hasBookmarkPermission}
                {currentWindowId}
            />
        {:else if view == Views.home}
            <Home 
                {db}
                {user}
                bind:view
                {workspaces}
                {recentTabs}
                {groups}
                {lastUpdatedGroup}
                {lastUpdatedTab}
                {currentWindowId}
                on:dataUpdated
                
            />
        {:else if view == Views.history}
            <History
                {db}
                {user}
                bind:view
                {workspaces}
            />
        {:else if view == Views.windows}
            <Windows
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
                {activeTab}
                tabs={tabs.filter((t) => t.windowId == currentWindowId)}
                {user}
                {db}
                {groups}
                bind:selectedTabs
                {lastUpdate}
                {workspaces}
                bind:searchText
                {searchResults}
                on:updateSelection={onUpdateSelection}
                on:tabBookmarkAdded
                on:foundDuplicates
                on:groupSaved
                on:showWorkspaceView={showWorkspaceView}
                on:dataUpdated
                on:shiftClickTab={onShiftClickTab}
            />
        {:else if view == Views.saved}
            <Workspaces 
                {user} 
                {db} 
                {groups} 
                {activeTab}
                {lastUpdatedGroup}
                bind:workspaces 
                {workspacesLoaded} 
                {searchText}

            />
        {:else if view == Views.workspace}
            <Workspace
                tabs={tabs.filter((t) => t.groupId == activeWorkspace.groupId)}
                workspace={activeWorkspace}
                {groups}
                bind:workspaces
                {db}
                {user}
                {lastUpdate} 
                {lastUpdatedTab}
                {lastSelectionUpdate}
                bind:allResources={resources}
                on:goBack={() => view = Views.tabs}
                on:dataUpdated
                on:foundDuplicates
            />
        {:else if view == Views.trash}
            <Trash
                {db}
                {user}
                bind:view
                on:goBack={() => view = Views.home}
                bind:workspaces
                on:refreshSpaces
                on:dataUpdated
            />
        {/if}
    </div>
    
    {#if showFooter}
        <div class="container footer">
            {#if selectedTabs.length > 0}
                <SelectionActions 
                    {view} 
                    {lastSelectionUpdate}
                    bind:selectedTabs 
                    {workspaces} 
                    {groups}
                />
            {:else if view == Views.windows}
                <WindowsFooter
                    {windows}
                    {tabs}
                    {groups}
                    {lastSelectionUpdate}
                    {selectedTabs}
                    on:mergedWindows
                />
            {:else if view == Views.tabs}
                <ActiveWindowFooter
                    bind:view
                    tabs={tabs.filter((t) => t.windowId == currentWindowId)}
                    {lastSelectionUpdate}
                    bind:selectedTabs
                    {groups}
                    {workspaces}
                    on:newTabCreated={onNewTabCreated}
                />
            {:else if view == Views.home}
                <HomeFooter
                    bind:view
                    tabs={tabs.filter((t) => t.windowId == currentWindowId)}
                    {lastSelectionUpdate}
                    bind:selectedTabs
                    {groups}
                    {workspaces}
                />
            {/if}
        </div>
    {/if}
</main>

<style>
    main {
        position: relative;
        background-color: #111111;
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .container.header {
        width: 100%;
        z-index: 999;
        background-color: #111111;
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
        background-color: #111111;
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
