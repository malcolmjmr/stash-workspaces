<script>

    /*

        Todo: 
        - 
    */
    import { createEventDispatcher, onMount } from "svelte";
    import moreIcon from "../icons/more-horiz.png";
    import backArrowIcon from "../icons/back.png"
    import searchIcon from "../icons/search.png";
    import arrowDownIcon from "../icons/arrow-down.png";
    import arrowRightIcon from "../icons/arrow-right.png";
    import closeAllIcon from "../icons/close-all.png";
    import closeIcon from "../icons/close.png";
    import openIcon from "../icons/open-in-new-window.png";
    import fullscreenIcon from "../icons/open-in-full.png";
    import favoriteIcon from "../icons/star-filled.png";
    import queueIcon from "../icons/inbox.png";
    import highlightIcon from "../icons/highlighter.png";
    import imageIcon from "../icons/image.png";
    import { colorMap } from "../utilities/colors";
    import { StorePaths } from "../utilities/storepaths";
    import { getContext, get, tryToGetBookmark, openWorkspace} from "../utilities/chrome";


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
  import ModalContainer from "../components/ModalContainer.svelte";
  import WorkspacePreview from "./WorkspacePreview.svelte";
  import BackButton from "../components/BackButton.svelte";
  import SectionContainer from "./SectionContainer.svelte";
  import Tab from "../tab/Tab.svelte";
  import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
  import SearchBox from "../components/SearchBox.svelte";
  import WorkspaceFooter from "./WorkspaceFooter.svelte";
  import WorkspaceListItem from "../components/WorkspaceListItem.svelte";

    

    let dispatch = createEventDispatcher();

    export let tabs = null;
    export let group = null;
    export let lastUpdate = null;
    export let activeTab = null;
    export let lastSelectionUpdate = null;
    export let lastUpdatedTab = null;
    export let user = null;
    export let db = null;
    export let isOpen = false;
    export let groups;
    export let workspaces;
    export let allResources = null;

    export let workspace = null;

    let folders = [];

    let selectedTabs = []
    let favorites = [];
    let bookmarks = [];
    let queue = [];
    let hasHighlights;
    let hasQueue;
    let hasFavorites;
    let hasImages;

    let searchText = '';

    let loaded;
    onMount(() => {
        init();
    });

    let tabsCollapsed = false;
    let foldersCollapsed = false;
    let queueExpanded = false;

    let showSearch;

    let showPreview;

    
    const init = async () => {
        
        if (!group) isOpen = false;
        if (workspace) {
            await loadResources();
        } else if (group?.workspaceId) {
            await loadWorkspace();
        } else if (group) {

            // should check openGroups and add the workspace if it doesn't exist
            workspace = {
                title: group.title,
                color: group.color
            };
            isOpen = true;
        }

        updateTabData();
        checkScreenState();
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
        await loadFolders();
        isOpen = true;
    }

    let resources = [];
    const loadResources = async () => {

        if (allResources) {
            resources = Object.values(allResources).filter((r) => r.contexts.includes(workspace.id));
        } else if (user) {
            const path = StorePaths.userResources(user.id);
            const q = query(
                collection(db, path),
                where("contexts", "array-contains", workspace.id)
            );
            resources = (await getDocs(q)).docs.map((d) => d.data());
            for (const resource of resources) {
                if (!resource.url) continue;
                if (!hasQueue && (resource.title.startsWith('* ') || resource.isQueued)) hasQueue = true;
                if (!hasFavorites && resource.isFavorite) hasFavorites = true;
                if (!hasHighlights && resource.highlights && resource.highlights.length > 0) hasHighlights = true;
                if (!hasImages && resource.images && resource.images.length > 0) hasImages = true;
            }

        } else {

  
        }

        updateVisibleResources();
        if (!tabs) tabs = workspace.tabs;
    };

    const loadFolders = async () => {
        if (user) {
            // Need to change data model
            const path = StorePaths.userContexts(user.id);
            const q = query(
                collection(db, path),
                where("contexts", "array-contains", workspace.id)
            );
            folders = (await getDocs(q)).docs.map((d) => d.data());
            folders.sort((a, b) => (b.updated ?? 0) - (a.updated ?? 0));
        } else {
            let folder = await tryToGetBookmark(workspace.folderId);
            if (!folder) {
                // try to get folder by name
            }


        }
    }

    const updateTabData = () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].saved = resources.find((r) => r.url == tabs[i].url);
        }
    }


    let showMenu;
    const onMoreClicked = () => {
        showMenu = true;
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
        let folder = await tryToGetBookmark(workspace.folderId);
        if (tab.saved) {
            if (folder) {

            }
            if (user?.cloudSync) {
                
            }
        } else {
            if (!folder) {
                //workspace.folder = 
            } 

            //await chrome.tabs
            if (user?.cloudStorage) {

            }
        }
    };

    let previewWorkspace;

    const ResourceViews = {
        favorites: 'Favorites',
        images: 'Images',
        highlights: 'Highlights',
        queue: 'Queue',
    };

    let resourceView;

    const updateResourceView = (view) => {
        if (resourceView == view) {
            resourceView = null;
        } else {
            resourceView = view;
        }
        updateVisibleResources();
    }

    let visibleResources = [];

    const updateVisibleResources = () => {
        const text = searchText.toLowerCase();
        let tempResults = [];
        for (const resource of resources) {
            
            if (!resourceView) {
                tempResults.push(resource);
            } else if (resourceView == ResourceViews.favorites) {
                if (resource.isFavorite) {
                    tempResults.push(resource);
                }
            } else if (resourceView == ResourceViews.queue) {
                if (resource.isQueued || resource.title?.startsWith('* ')) {
                    tempResults.push(resource)
                }
            } else if (resourceView == ResourceViews.highlights) {
                if (resource.highlights && resource.highlights.length > 0) {
                    tempResults.push(resource);
                }
            } else if (resourceView == ResourceViews.images) {
                if (resource.images && resource.images.length > 0) {
                    tempResults.push(resource);
                }
            }
        }

        tempResults.sort((a, b) => (b.updated ?? 0) - (a.updated ?? 0));
        visibleResources = tempResults;
    };

    let window;
    let windowIsFullscreen;
    const checkScreenState = () => {
        // get current window
        // see if window is in fullscreen mode
    };


    const openInFullScreen = () => {
        //
    };

    const openWorkspaceMenu = () => {

        
        showMenu = true;
        console.log('opening menu');
        console.log(showMenu)
    }


    
</script>

{#if previewWorkspace}
    <ModalContainer on:exit={() => previewWorkspace = null}>
        <WorkspacePreview workspace={previewWorkspace} />
    </ModalContainer>

{/if}

{#if showMenu}
    <ModalContainer on:exit={() => showMenu = false}>
        <WorkspaceMenu bind:workspace isOpen={true} {group}/> 
    </ModalContainer>
{/if}

{#if loaded}
    <div class="workspace">
        <div class="header" >
            <div class="top">
                <BackButton onClick={onBackButtonClicked}/>
                <div class="actions">
                    <div class="more-button" on:mousedown={openWorkspaceMenu}>
                        <img 
                            src={moreIcon} 
                            class="action icon menu" 
                            alt="" 
                            
                        />
                    </div>

                    {#if !windowIsFullscreen}
                        <img 
                            src={fullscreenIcon} 
                            class="action icon" 
                            alt='Fullscreen' 
                            on:mousedown={openInFullScreen}
                        />
                    {/if}
                    
                   
                </div>
            </div>

            <div class="title" style='color: {colorMap[workspace.color]}'>{workspace?.title} </div>
            <div class="search-container">
                <SearchBox bind:searchText/>
            </div>
        </div>

        <div class="main-container">
            {#if folders.length > 0}
            <div class="folders section">
                <div class="heading">
                    <div class="title">Folders</div>
                    <div class="spacer"></div>
                    <img class="collapse icon" 
                        alt=""
                        src={foldersCollapsed ? arrowRightIcon : arrowDownIcon}
                        on:mousedown={() => foldersCollapsed = !foldersCollapsed}
                    />
                </div>
                {#if !foldersCollapsed}
                    <div class="items">
                        <div class="container">
                            {#each folders as workspace}
                                <WorkspaceListItem 
                                    {workspace} 
                                    onClick={() => previewWorkspace = workspace}
                                />
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>
            {/if}
            {#if tabs.length > 0}
            <div class="tabs section">
                <div class="heading">
                    <div class="title">Tabs</div>
                    <div class="actions">
                        <div class="actions">
                            <img class="action icon" src={closeAllIcon} alt=""/>
                        </div>
                    </div>
                    <div class="spacer"></div>
                    <img class="collapse icon" 
                        alt=""
                        src={tabsCollapsed ? arrowRightIcon : arrowDownIcon}
                        on:mousedown={() => tabsCollapsed = !tabsCollapsed}
                    />
                </div>
                {#if !tabsCollapsed}
                    <div class="items">
                        <div class="container">
                            {#each tabs as tab (tab.id)}
                                <Tab {tab} {isOpen}/>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>
            {/if}
            {#if resources.length > 0}
            <div class="resources section">
                <div class="heading">
                    <div class="title">Resources</div>
                    <div class="actions">
                        {#if hasFavorites}
                            <img 
                                src={favoriteIcon} 
                                class="action icon{resourceView == ResourceViews.favorites ? ' selected' : ''}" 
                                alt=""
                                on:mousedown={() => updateResourceView(ResourceViews.favorites)}
                            />
                        {/if}
                        {#if hasQueue}
                            <img 
                                src={queueIcon} 
                                class="action icon{resourceView == ResourceViews.queue ? ' selected' : ''}" 
                                alt="Queue" 
                                on:mousedown={() => updateResourceView(ResourceViews.queue)}
                            />
                        {/if}
                        {#if hasHighlights}
                            <img 
                                src={highlightIcon} 
                                class="action icon{resourceView == ResourceViews.highlights ? ' selected' : ''}" 
                                alt="Highlights"
                                on:mousedown={() => updateResourceView(ResourceViews.highlights)}
                            />
                        {/if}
                        {#if hasImages}
                            <img 
                                src={imageIcon} 
                                class="aciton icon{resourceView == ResourceViews.images ? ' selected' : ''}" 
                                alt="Images"
                                on:mousedown={() => updateResourceView(ResourceViews.images)}
                            />
                        {/if}
                    </div>
                </div>
                <div class="items">
                    <div class="container">
                        {#each visibleResources as resource (resource.id)}
                            <Tab tab={resource} isOpen={false} />
                        {/each}
                    </div>
                </div>
            </div>
            {/if}
        </div>

        <WorkspaceFooter 
            {workspaces} 
            {groups} 
            resourceCount={resources.length} 
            tabCount={tabs.length} 
            folderCount={folders.length}
        />
        
    </div>
    
{/if}

<style>
    .workspace {
        position: fixed;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        background-color: black;
        overflow-y: scroll;
    }

    .header {
        display: flex;
        flex-direction: column;
        width: calc(100% - 20px);
        padding: 5px 10px;
    }


    .header .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .header .title {
        font-size: 350%;
        font-weight: bold;
        color: black;
        white-space: nowrap;
        text-overflow: ellipsis;
        
    }

    .header img.action {
        height: 15px;
        width: 15px;
        padding: 5px;
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


    .more-button {
        border-radius: 100%;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 15px;
        width: 15px;
        margin-right: 5px;
    }

    .more-button img {
        height: 100%;
        width: 100%;
    }

    .main-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .section .heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px 15px;
    }

    .spacer {
        flex-grow: 1;
    }

    .section {
        margin-bottom: 15px;
    }

    .section .heading .title {
        font-size: 16px;
        font-weight: 400;
    }

    .icon {
        filter: invert(1);
        height: 16px;
        width: 16px;
    }

    .section .heading .collapse.icon {
        
    }

    .section .items {
        overflow-y: scroll;
        padding: 8px;
    }

    .section .items .container {
        background-color: #222222;
        border-radius: 8px;
        overflow: hidden;
    }

    .section .heading .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 5px;
    }

    .resources.section .action.icon {
        opacity: 0.5;
    }

    .resources.section .action.icon:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    .resources.section .action.icon.selected {
        opacity: 1;
    }

    .search-container {
        margin: 10px 0px;
    }

</style>


