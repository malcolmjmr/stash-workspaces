<script>
    import { createEventDispatcher, onMount } from "svelte";
    import collapseIcon from "../icons/collapse.png";
    import moreIcon from "../icons/more-vert.png";
    import closeIcon from "../icons/close.png";
    import WorkspaceTabs from "./WorkspaceTabs.svelte";
  import WorkspaceBookmarks from "./WorkspaceBookmarks.svelte";
  import WorkspaceReadingList from "./WorkspaceReadingList.svelte";
  import WorkspaceClipboard from "./WorkspaceClipboard.svelte";
    

    let dispatch = createEventDispatcher();

    export let tabs;
    export let group;
    export let lastUpdate;
    export let activeTab;
    export let selectedTabs;
    export let lastSelectionUpdate;

    let folder;
    let space;
    
    const Views = {
        tabs: 'tabs',
        bookmarks: 'bookmarks',
        readingList: 'readingList',
        clipboard: 'clipboard',
    };

    let view = Views.tabs;

    let loaded;
    onMount(() => {
        
    });

    const onCollapsedClicked = () => {
        dispatch('showWindowView');
    }

    let showMore;
    const onMoreClicked = () => {
        showMore = true;
    };

    const onCloseClicked = () => {
        chrome.tabGroups.remove(group.id);
    };
    
</script>

{#if loaded}
    <div class="workspace">
        <div class="header">
            <div class="title">
                {folder.title}
            </div>

            <div class="actions">
                <img src={collapseIcon} alt="" on:mousedown={onCollapsedClicked}/>
                <img src={moreIcon} alt="" on:mousedown={onMoreClicked} />
                <img src={closeIcon} alt="" on:mousedown={onCloseClicked}/>
            </div>

        </div>
        <div class="container">
            {#if view == Views.tabs}
                <WorkspaceTabs {tabs} {group} {lastUpdate} {lastSelectionUpdate} bind:selectedTabs />
            {:else if view == Views.bookmarks}
                <WorkspaceBookmarks />
            {:else if view == Views.readingList}
                <WorkspaceReadingList />
            {:else if view == Views.clipboard}
                <WorkspaceClipboard />
            {/if}
        </div>

        <div class="footer">
            <div class="page-selector" on:mousedown={() => view = Views.tabs}>
                <span>Tabs</span>
            </div>
            <div class="page-selector" on:mousedown={() => view = Views.bookmarks}>
                Favorites
            </div>
            <div class="page-selector" on:mousedown={() => view = Views.readingList}>
                Reading List
            </div>
            <div class="page-selector" on:mousedown={() => view = Views.clipboard}>
                Clipboard
            </div>
        </div>
    </div>

{/if}

<style>
    .workspace {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        width: 100%;
        overflow-y: scroll;
    }

    .footer {
        display: flex;
        height: 40px;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
</style>


