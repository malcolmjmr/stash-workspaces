<script>

    /*

        Todo: 
        - check that workspace has stored group ID 
    */
    import { createEventDispatcher, onMount } from "svelte";
    import moreIcon from "../icons/more-horiz.png";
    import arrowDownIcon from "../icons/arrow-down.png";
    import arrowRightIcon from "../icons/arrow-right.png";
    import closeAllIcon from "../icons/close-all.png";
    import fullscreenIcon from "../icons/open-in-full.png";
    import queueIcon from "../icons/move-to-inbox.png";
    import moveToFolderIcon from "../icons/move-to-folder.png";
    import selectIcon from "../icons/checked-box.png";
    import unselectIcon from "../icons/remove-selection.png";
    import { colorMap } from "../utilities/colors";
    import { StorePaths } from "../utilities/storepaths";
    import { getContext, get, tryToGetBookmark, openWorkspace, saveContext, getWorkspaceQueueFolder} from "../utilities/chrome";
    import { closeAllTabs } from "./helpers";


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
  import ResourceListItem from "./ResourceListItem.svelte";
  import BasicBookmarks from "./BasicBookmarks.svelte";
  import PremiumBookmarks from "./PremiumBookmarks.svelte";
  import SearchResults from "../search/SearchResults.svelte";
  import { fade } from "svelte/transition";
  import { allResources } from "../stores";
  import LocationSelection from "../edit_bookmark/LocationSelection.svelte";
  import NewFolderModal from "./NewFolderModal.svelte";
  import CircleDivider from "../components/CircleDivider.svelte";
  import Favorites from "../components/Favorites.svelte";

    

    let dispatch = createEventDispatcher();

    export let tabs = [];
    export let group = null;
    export let lastUpdate = null;
    export let activeTab = null;
    let lastSelectionUpdate = null;
    export let lastUpdatedTab = null;
    export let user = null;
    export let db = null;
    export let isOpen = false;
    export let groups;
    export let workspaces;
    let selectedTabs = [];
    //export let allResources = null;

    export let workspace = null;

    export let lastBookmarkUpdate;

    let folders = [];

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


    $: {
        lastUpdatedTab;
        lastUpdate;

        checkIndexes();
        //getTabGroupStarts();
    }

    $: {
        group;
        init();
    }

    const checkIndexes = () => {
        // Check for tabs that have been duplicated and get tab group start and end index values

        tabs.sort((a, b) => a.index - b.index);
        let indexes = [];
        let duplicateIndexes = [];

        for (const tab of tabs) {
            if (!indexes.includes(tab.index)) {
                indexes.push(tab.index);
            } else {
                duplicateIndexes.push(tab.index);
                dispatch('foundDuplicates');
            }
        }
    }; 

    
    const init = async () => {

        //tabs = tabs.filter((t) => t.groupId == group.id);
        if (group?.workspaceId) {
            await loadWorkspace();
        } else if (workspace) {
            await loadResources();
        } else if (group) {

            // should check openGroups and add the workspace if it doesn't exist

            workspace = {
                title: group?.title,
                color: group?.color
            };
            isOpen = true;
        }


        updateTabData();
        checkScreenState();
        checkWorkspaceColor();
        loaded = true;
    }

    const checkWorkspaceColor = () => {
        if (workspace?.color) return;

        workspace.color = group?.color ?? 'grey';
        saveContext(workspace);
        const index = workspaces.findIndex((w) => w.id == workspace.id);
        if (index > -1) {
            workspaces[index] = workspace;
        }
        //dispatch('dataUpdated', { workspace });
        
    };

    // $: {
    //     if (group?.workspaceId) {
    //         init();
    //     }
    // }


    const loadWorkspace = async () => {
        workspace = await getContext(group.workspaceId);
        await loadResources();
        await loadFolders();
        isOpen = true;
    }

    let resources = [];
    const loadResources = async () => {
        if (user) {
            resources = [];
            const path = StorePaths.userResources(user.id);
            const q = query(
                collection(db, path),
                where("contexts", "array-contains", workspace.id)
            );
            if (resources.length == 0)
            resources = (await getDocs(q)).docs.map((d) => d.data());
            otherCountString = `${resources.length} Resource${resources.length > 1 ? 's' :''}`;
        }

        updateVisibleTabs();
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


    let visibleTabs = [];
    $: {
        searchText;
        updateVisibleTabs();
    }

    $: {
        lastUpdatedTab;
        tabs;
        updateVisibleTabs();
    }

    const updateVisibleTabs = () => {
        const text = searchText.toLowerCase();
        visibleTabs = tabs.filter((t) => t.title?.toLowerCase().includes(text));
        // tabs.sort(sortTabs);
        // visibleTabs.sort(sortTabs);
    };
    
    const sortTabs = (a, b) => {
        return a.index - b.index;
    }

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
    };

    const onResourceOpened = ({detail}) => {
        const resource = detail;
        const index = resources.findIndex((r) => r.id == resource.id);
        if (index > -1) {
            resources[index] = resource;
            //updateVisibleResources();
        }
    };

    const onResourceSaved = ({detail}) => {
        const resource = detail;
        allResources[resource.url] = resource;
    };


    const onTabDataUpdated = ({detail}) => {
        const data = detail;
        if (data.resource) {
            let resources = $allResources;
            resources[data.resource.url] = data.resource;
            allResources.set(resources);
            updateVisibleTabs();
        }
        lastBookmarkUpdate = Date.now();
        dispatch('dataUpdated', data);
    };

    const onTabSelected = ({ detail }) => {
        const tab = detail;
        const index = selectedTabs.findIndex((t) => t.id == tab.id);

        if (index > -1) {
            selectedTabs.splice(index, 1);
        } else {
            selectedTabs.push(tab);
        }

        selectedTabs = selectedTabs;

        //lastSelectionUpdate = Date.now();
    };

    const onTabClicked = ({ detail }) => {
        const tab = detail;
        if (visibleTabs.length < tabs.length) {
            visibleTabs = tabs;
        }
    };

    let otherCountString;
    let bookmarkCount;
    const onReceiveBookmarkCount = ({ detail }) => {
        bookmarkCount = detail;
        
        otherCountString = bookmarkCount > 0 ? `${bookmarkCount} Bookmark${bookmarkCount > 1 ? 's' : ''}` : '';
    };

    const onLocationAdded = async ({ detail }) => {
        let location = detail;
        const folder = await tryToGetBookmark(workspace.folderId);
        if (folder) {
            const folderToMove = location.folder?.id ?? location.workspace.folderId;
            if (!folderToMove || folderToMove == folder.id) return;
            await chrome.bookmarks.move(folderToMove, {
                parentId: folder.id,
                index: 0,
            });

            lastBookmarkUpdate = Date.now();
        }
    };

    let showNewFolderModal;

    const onBookmarkFolderCreated = async () => {
        lastBookmarkUpdate = Date.now();
        showNewFolderModal = false;
    };

    let showMultiSelectionHeader;

    $: {
        showMultiSelectionHeader = selectedTabs.length > 0;
    };


    const selectAllTabs = () => {
        if (selectedTabs == tabs) {
            selectedTabs = [];
        } else {
            selectedTabs = tabs;
        }
    };

    const closeSelectedTabs = async () => {


        let tabsToClose = [];
        let pinnedTabs = [];
        for (const tab of selectedTabs.filter((t) => t.groupId == workspace.groupId)) {
            if (workspace.pinnedTabs?.find((t) => t.url == tab.url || t.id == tab.id)) {
                pinnedTabs.push(tab);
            } else {
                tabsToClose.push(tab);
            }
        }

        if (pinnedTabs.length == 0) {
            const newTab = await chrome.tabs.create({});
            await chrome.tabs.group({ tabIds: newTab.id, groupId: workspace.groupId });
        }
        
        await chrome.tabs.remove(tabsToClose.map((t) => t.id));
        selectedTabs = [];
    };

    const stashAllTabs = async () => {
        const queueFolder = await getWorkspaceQueueFolder(workspace, true);
        const tabsToRemove = await saveSelectedTabsToFolder(queueFolder);
        chrome.tabs.remove(tabsToRemove.map((t) => t.id));
        queue = await chrome.bookmarks.getChildren(queueFolder.id);
        if (queue.length > 0 && !sections.find((s) => s.name == SectionNames.toVisit)) {
            sections = [...sections, { name: SectionNames.toVisit}];
        }
        selectedTabs = [];
    };

    const saveSelectedTabsToFolder = async (folder) => {
        
        const children = await chrome.bookmarks.getChildren(folder.id);
        
        const tabsToSave = selectedTabs.filter((t) => t.groupId == workspace.groupId);
        for (const tab of tabsToSave) {
            const existingBookmark = children.find((t) => tab.url == t.url);
            if (existingBookmark) {
                await chrome.bookmarks.update(existingBookmark.id, {
                    index: 0,
                });
            } else {
                await chrome.bookmarks.create({
                    parentId: folder.id,
                    index: 0,
                    url: tab.url,
                    title: tab.title,
                });
            }

        }

        return tabsToSave;
    }

    let showSaveModal;
    const saveAllToFolder = () => {
        showSaveModal = true;
    };

    const onLocationSelected = async ({ detail }) => {
        const folder = detail.folder;
        const tabsToRemove = await saveSelectedTabsToFolder(folder);

        chrome.tabs.remove(tabsToRemove.map((t) => t.id));
        showSaveModal = false;
        selectedTabs = [];
        lastBookmarkUpdate = Date.now();
    };

</script>

{#if showNewFolderModal}
    <ModalContainer on:exit={() => showNewFolderModal = false}>
        <NewFolderModal {workspace} on:bookmarkFolderCreated={onBookmarkFolderCreated} />
    </ModalContainer>
{/if}

{#if showSaveModal}
    <ModalContainer on:exit={() => showSaveModal = false}>
        <LocationSelection
            {workspace} 
            on:back={() => showSaveModal = false} 
            on:locationSelected={onLocationSelected}
        />
    </ModalContainer>
{/if}

{#if previewWorkspace}
    <ModalContainer on:exit={() => previewWorkspace = null}>
        <WorkspacePreview workspace={previewWorkspace} {db} {user}/>

    </ModalContainer>

{/if}

{#if showMenu}
    <ModalContainer on:exit={() => showMenu = false}>
        <WorkspaceMenu bind:workspace isOpen={true} {group}/> 
    </ModalContainer>
{/if}

{#if loaded}
    <div class="workspace" in:fade>
        

        <div class="header" >
            <div class="top">
                <BackButton onClick={onBackButtonClicked}/>
                <div class="actions">
                    <div class="more button" on:mousedown={openWorkspaceMenu}>
                        <img 
                            src={moreIcon} 
                            class="action menu" 
                            alt="" 
                        />
                    </div>

                    {#if false}
                        <img 
                            src={fullscreenIcon} 
                            class="action icon" 
                            alt='Fullscreen' 
                            on:mousedown={openInFullScreen}
                        />
                    {/if}
                    
                   
                </div>
            </div>

            <div class="title" style='color: {colorMap[workspace?.color]}; font-size: {(workspace?.title ?? 'Untitled').length < 30 ? '350%' : '200%'};'>
                {workspace?.title && workspace.title != '' ? workspace.title : 'Untitled'} 
            </div>
            <div class="search-container">
                <SearchBox bind:searchText/>
            </div>
        </div>

        <div class="main-container">
            {#if false}
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
            </div>
            {/if}
            
            {#if (searchText.length > 0 ? visibleTabs : tabs).length > 0}
            <div class="tabs section">
                {#if showMultiSelectionHeader}
                <div class="selection heading">
                    <img 
                        class="icon-button" 
                        src={selectedTabs == tabs ? unselectIcon : selectIcon} 
                        on:mousedown={selectAllTabs} 
                        alt="Select All"
                    />
        
                    <CircleDivider />
                    <img 
                        class="icon-button action" 
                        src={closeAllIcon} 
                        on:mousedown={closeSelectedTabs} 
                        alt="Close All"
                    />
                    <img 
                        class="icon-button action"
                        src={queueIcon} 
                        on:mousedown={stashAllTabs} 
                        alt="Move to Queue"
                    />
                    <img 
                        class="icon-button action" 
                        src={moveToFolderIcon} 
                        on:mousedown={saveAllToFolder} 
                        alt="Move to Folder" 
        
                    />
                </div>
                {:else }
                <div class="heading">
                    <div class="title">Tabs</div>
                    <div class="actions">
                        <div class="actions">
                            <img class="action icon button" src={closeAllIcon} alt="" on:mousedown={() => closeAllTabs(workspace)}/>
                        </div>
                    </div>
                    <div class="spacer"></div>
                    <img class="collapse icon button" 
                        alt=""
                        src={tabsCollapsed ? arrowRightIcon : arrowDownIcon}
                        on:mousedown={() => tabsCollapsed = !tabsCollapsed}
                    />
                </div>
                {/if}
                {#if !tabsCollapsed}
                    <div class="items">
                       
                        <div class="container">
                            {#if false}
                                <Favorites {workspace} />
                            {/if}
                            {#key tabs.length}
                            {#each (searchText.length > 0 ? visibleTabs : tabs) as tab (tab)}
                                <Tab 
                                    {db}
                                    {user}
                                    {tab}
                                    {isOpen} 
                                    {workspace}
                                    {groups}
                                    bind:selectedTabs
                                    {lastSelectionUpdate}
                                    on:dataUpdated={onTabDataUpdated}
                                    canDrag={visibleTabs.length == tabs.length}
                                    on:updateSelection={onTabSelected}
                                    on:clicked={onTabClicked}
                                />
                            {/each}
                            {/key}
                        </div>
                    </div>
                {:else}
                    <div class="padding"></div>
                {/if}
            </div>
            {/if}

            {#if user} 
                <PremiumBookmarks 
                    {user} 
                    {db} 
                    {workspace} 
                    {searchText} 
                    {resources} 
                    workspaces={folders}
                    
                />
            {:else}
                {#if searchText.length > 0 && bookmarkCount == 0 && visibleTabs.length == 0}
                    <SearchResults
                        {searchText}
                    />
                {:else }

                    {#key workspace}
                        <BasicBookmarks 
                            {searchText} 
                            {workspace}
                            {lastBookmarkUpdate}
                            on:bookmarkDeleted
                            on:bookmarkCount={onReceiveBookmarkCount}
                            on:dataUpdated 
                        />
                    {/key}
                {/if}
            {/if}

        </div>

        <WorkspaceFooter 
            {workspaces} 
            {workspace}
            {groups} 
            {otherCountString}
            resourceCount={resources.length} 
            tabCount={(searchText.length > 0 ? visibleTabs : tabs).length} 
            folderCount={folders.length}
            on:locationSelected={onLocationAdded}
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
        margin-top: 10px;
        overflow: hidden;
    }

    .header .title {
        
        font-weight: bold;
        color: black;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
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


    .more.button {
        border-radius: 100%;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 5px;
    }

    .more.button img {
        height: 12px;
        width: 12px;
        padding: 2px;
    }

    .main-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
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

    .button:hover {
        cursor: pointer;
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


    .search-container {
        margin: 10px 0px;
    }

    .padding {
        height: 10px;
    }

    .selection.heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        margin-left: 12px;
    }

    .selection.heading .icon-button {
        margin: 3px;
    }

    .selection.heading .icon-button.action {
        margin-right: 15px;
        margin-left: 5px;
        opacity: 0.8;
    }

    .selection.heading .icon-button.action:hover {
        cursor: pointer;
        opacity: 1;
    }

    .icon-button {
        height: 16px;
        width: 16px;
        margin-left: 5px;
        filter: invert(1);
    }

    .icon-button:hover {
        cursor: pointer;
        opacity: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;;
    }

    .actions img {
        height: 16px;
        width: 16px;
        padding: 2px;
        opacity: 0.6;
        filter: invert(1);
    }

    .actions .more img {
        opacity: 1;
    }

    .actions img:hover {
        cursor: pointer;
        opacity: 1;
    }

</style>


