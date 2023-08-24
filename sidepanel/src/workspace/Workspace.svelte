<script>

    /*

        Todo: 
        - 
    */
    import { createEventDispatcher, onMount } from "svelte";
    import moreIcon from "../icons/more-vert.png";
    import backArrowIcon from "../icons/back.png"
    import searchIcon from "../icons/search.png";
    import closeIcon from "../icons/close.png";
    import openIcon from "../icons/open-in-new-window.png";
    import { colorMap } from "../utilities/colors";
    import { StorePaths } from "../utilities/storepaths";
    import { getContext, get} from "../utilities/chrome";


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
    import OpenTabs from "./OpenTabs.svelte";
    import Bookmarks from "./Bookmarks.svelte";
    import Queue from "./Queue.svelte";

    

    let dispatch = createEventDispatcher();

    export let tabs = null;
    export let group = null;
    export let lastUpdate = null;
    export let activeTab = null;
    export let lastSelectionUpdate = null;
    export let lastUpdatedTab;
    export let user;
    export let db;
    

    export let workspace = null;

    let folder = [];

    let selectedTabs = []
    let bookmarks = [];
    let queue = [];

    let loaded;
    onMount(() => {
        init();
    });

    let tabsExpanded = true;
    let bookmarksExpanded = false;
    let queueExpanded = false;

    let showSearch;

    

    let isOpen;
    const init = async () => {
        
        if (!group) return;
        if (workspace) {
            await loadResources();
        } else if (group?.workspaceId) {
            await loadWorkspace();
        } else {

            // should check openGroups and add the workspace if it doesn't exist
            workspace = {
                title: group.title,
                color: group.color
            };
            isOpen = true;
        }

        updateTabData();
        loaded = true;
    }

    $: {
        if (group?.workspaceId) {
            init();
        }
    }

    const loadWorkspace = async () => {
        workspace = await getContext(group.workspaceId);
        await loadResources();
        isOpen = true;
    }

    let resources = [];
    const loadResources = async () => {



        if (user) {
            console.log('fetching resources from the cloud');
            const path = StorePaths.userResources(user.id);
            const q = query(
                collection(db, path),
                where("contexts", "array-contains", workspace.id)
            );
            resources = (await getDocs(q)).docs.map((d) => d.data());
            
            bookmarks = resources.filter((b) => b.url && !b.title.startsWith('* ') && !b.isQueued);
            queue = resources.filter((b) => b.url && (b.title.startsWith('* ') || b.isQueued));

        } else {


            
        }
        if (!tabs) tabs = workspace.tabs;
    };

    const updateTabData = () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].saved = resources.find((r) => r.url == tabs[i].url);
        }
    }


    let showMore;
    const onMoreClicked = () => {
        showMore = true;
    };

    const onCloseClicked = () => {
        dispatch('close');
        //chrome.tabGroups.remove(group.id);
    };

    const onOpenClicked = () => {
        dispatch('open');
    }

    const updateTitle = () => {
        dispatch('workspaceUpdated', workspace);
        //chrome.tabGroups.update(group.id, {title: group.title});
    };

    const onBackButtonClicked = () => {
        dispatch('goBack');
    };

    let relatedWorkspaces = [];

    const onBookmarkClicked = async ({detail}) => {
        const bookmark = detail;
        const tab = await chrome.tabs.create({url: bookmark.url});
        await chrome.tabs.group({tabIds: tab.id, groupId: group.id});
    };

    /*
        Todo
        - Pull in bookmark folder if one exists
        - Let user save tab
        - Let user stash tab
        - Let user select multiple tabs
            - Update header actions when multiple tabs selected (create or save to sub folder, pin)

    */

    const onToggleTabSaved = async ({detail}) => {
        const tab = detail;
        let folder = await tryToGetBookmarkFolder(workspace.folderId);
        if (tab.saved) {
            if (folder) {

            }
            if (user?.cloudSync) {
                
            }
        } else {
            if (!folder) {
                //workspace.folder = 
            } 

            await chrome.tabs
            if (user?.cloudStorage) {

            }
        }
    };

    
</script>

{#if loaded}
    <div class="workspace">
        <div class="header" style='color: {colorMap[workspace.color]}' >
            <div class="main">
                <img src={backArrowIcon} class="action icon" alt="back" on:mousedown={onBackButtonClicked}>
                <div class="title">{workspace?.title} </div>

                <div class="actions">
                    <img src={searchIcon} class="action icon" alt="" on:mousedown={() => showSearch = true}/>
                    <img src={moreIcon} class="action icon" alt="" on:mousedown={onMoreClicked} />
                </div>
            </div>
        </div>
        <OpenTabs 
            {workspace} 
            {tabs} 
            {lastUpdatedTab} 
            {group} 
            bind:expanded={tabsExpanded} 
            bind:selectedTabs 
            on:saveSelectedTabs
            on:saveSelectedTabsToFolder 
            on:stashSelectedTabs 
            on:toggleTabSaved={onToggleTabSaved}
        />

        <Bookmarks {workspace} {bookmarks} bind:expanded={bookmarksExpanded}/>

        <Queue {workspace} {queue} bind:expanded={queueExpanded}/>
    </div>
    
{/if}

<style>
    .workspace {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        background-color: #333333;
        z-index: 999999;
    }

    .header {
        display: flex;
        flex-direction: column;
        width: calc(100% - 10px);
        color: black;
        font-size: 30px;
        padding: 5px;
        border-bottom: 1px solid #555555;
        white-space: nowrap;
        text-overflow: ellipsis;
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

    .action.icon {
        filter: invert(1);
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
    }



</style>


