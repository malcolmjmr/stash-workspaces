<script>
    import { createEventDispatcher, onMount } from "svelte";
    import collapseIcon from "../icons/collapse.png";
    import moreIcon from "../icons/more-horiz.png";
    import shareIcon from "../icons/share.png";
    import backArrowIcon from "../icons/back.png"
    import tabsIcon from "../icons/tab-group.png";
    import bookmarkIcon from "../icons/folder.png";
    import queueIcon from "../icons/inbox.png";
    import clipboardIcon from "../icons/paste.png";
    import publicIcon from "../icons/public.png";
    import WorkspaceTabs from "./WorkspaceTabs.svelte";
    import WorkspaceBookmarks from "./WorkspaceBookmarks.svelte";
    import WorkspaceReadingList from "./WorkspaceReadingList.svelte";
    import WorkspaceClipboard from "./WorkspaceClipboard.svelte";
    import { colorMap } from "../utilities/colors";
    import { StorePaths } from "../utilities/storepaths";

    import {
      getFirestore,
      doc,
      getDoc,
      getDocs,
      setDoc,
      collection,
      where,
      query
    } from "firebase/firestore";
    import {
        getAuth,
        onAuthStateChanged,
        signInWithEmailAndPassword,
    } from "firebase/auth";

    

    let dispatch = createEventDispatcher();

    export let tabs;
    export let group;
    export let lastUpdate;
    export let activeTab;
    export let selectedTabs;
    export let lastSelectionUpdate;
    export let user;
    export let db;
    

    export let workspace;
    
    const Views = {
        tabs: 'tabs',
        bookmarks: 'bookmarks',
        readingList: 'readingList',
        clipboard: 'clipboard',
        related: 'related',
    };

    let view = Views.tabs;
    let bookmarks = [];
    let queue = [];

    let loaded;
    onMount(() => {
        init();
    });

    
    const init = async () => {
    
        if (workspace) {
            await loadResources();
        } else if (group?.workspace) {
            workspace = group.workspace;
        } else {
            workspace = {
                title: group.title,
            }
        }
        loaded = true;
    }

    let resources = [];
    const loadResources = async () => {
        const path = StorePaths.userResources(user.id);
        const q = query(
            collection(db, path),
            where("contexts", "array-contains", workspace.id)
        );
        resources = (await getDocs(q)).docs.map((d) => d.data());
        bookmarks = resources.filter((b) => b.url && !b.title.startsWith('* '));
        queue = resources.filter((b) => b.url && b.title.startsWith('* '));
    };

    let showMore;
    const onMoreClicked = () => {
        showMore = true;
    };

    const onCloseClicked = () => {
        chrome.tabGroups.remove(group.id);
    };

    const updateTitle = () => {
        chrome.tabGroups.update(group.id, {title: group.title});
    };

    const onBackButtonClicked = () => {
        dispatch('showWindowView');
    };

    let relatedWorkspaces = [];

    const onBookmarkClicked = async ({detail}) => {
        const bookmark = detail;
        const tab = await chrome.tabs.create({url: bookmark.url});
        await chrome.tabs.group({tabIds: tab.id, groupId: group.id});
    };
    
</script>

{#if loaded}
    <div class="workspace">
        {#if selectedTabs.length == 0}
        <div class="header" style='background-color: {colorMap[group.color]}' >
            <div class="main">
                <img src={backArrowIcon} class="action icon" alt="back" on:mousedown={onBackButtonClicked}>
                <div class="title">{group.title} </div>

                <div class="actions">
                    <img src={shareIcon} class="action icon" alt="" on:mousedown={onCloseClicked}/>
                    <img src={moreIcon} class="action icon" alt="" on:mousedown={onMoreClicked} />
                </div>
            </div>
            {#if showMore}

            {/if}
        </div>
        {/if}
        <div class="page-selection" style="border-color:{colorMap[group.color]}">
            <div class="page-selector{view == Views.tabs ? ' selected' : ''}" on:mousedown={() => view = Views.tabs}>
                <img src={tabsIcon} alt='Tabs'/>
                
            </div>
            <div class="page-selector{view == Views.bookmarks ? ' selected' : ''}" on:mousedown={() => view = Views.bookmarks}>
                <img src={bookmarkIcon} alt="Bookmarks"/>
                
            </div>
            <div class="page-selector{view == Views.readingList ? ' selected' : ''}" on:mousedown={() => view = Views.readingList}>
                <img src={queueIcon} alt="Queue" />
                
            </div>
            <div class="page-selector{view == Views.clipboard ? ' selected' : ''}" on:mousedown={() => view = Views.clipboard} >
                <img src={clipboardIcon} alt="Clipboard" />
            </div>
            {#if true}
                <div class="page-selector">
                    <img src={publicIcon} alt="Related Spaces" />
                    
                </div>
            {/if}
        </div>
        <div class="container">
            {#if view == Views.tabs}
                <WorkspaceTabs {tabs} {group} {lastUpdate} {lastSelectionUpdate} bind:selectedTabs on:updateSelection/>
            {:else if view == Views.bookmarks}
                <WorkspaceBookmarks {bookmarks} on:bookmarkClicked={onBookmarkClicked}/>
            {:else if view == Views.readingList}
                <WorkspaceReadingList {queue} on:bookmarkClicked={onBookmarkClicked}/>
            {:else if view == Views.clipboard}
                <WorkspaceClipboard />
            {/if}
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

    .header {
        display: flex;
        flex-direction: column;
        
        width: calc(100% - 20px);
        color: black;
        font-size: 30px;
        padding: 0px 5px;
        margin: 10px 5px 5px 5px;
       
        border-radius: 7px;
    }

    .header .main {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }



    .header .title {
        font-size: 20px;
        font-weight: bold;
        
    }

    .header img.action {
        height: 20px;
        width: 20px;
        padding: 5px;
        opacity: 0.5;
    }
    
    .header img.action:hover {
        cursor:pointer;
        opacity: 1;
    }


    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .page-selection {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: scroll;
        min-height: 35px;
        width: calc(100% - 10px);
        padding: 5px;
        justify-content: space-evenly;
    }

    .page-selector {
        display: flex;
        align-items: center;
        opacity: 0.5;
        flex-grow: 1;
        padding-bottom: 8px;
        justify-content: center;
    }

    .page-selector.selected {
        border-bottom: 1.5px solid white;
        opacity: 1;
    }

    .page-selector:hover {
        cursor: pointer;
        opacity: 1;
    }

    .page-selector img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        margin-right: 5px;
    }

    .container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        width: 100%;
        overflow-y: scroll;
    }



</style>


