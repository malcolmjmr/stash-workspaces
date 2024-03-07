<script>
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import Tab from "../tab/Tab.svelte";
    import Workspace from "./Workspace.svelte";
    import folderIcon from "../icons/folder-filled.png";
    import openIcon from "../icons/open-in-new-window.png";
    import moreIcon from "../icons/more-vert.png";
    import closeIcon from "../icons/close.png";
    import fullScreenIcon from "../icons/expand-content.png";

    import closeAllIcon from "../icons/close-all.png";
    import moveToFolderIcon from "../icons/move-to-folder.png";
    import folderCreateIcon from "../icons/new-folder.png";
    import queueIcon from "../icons/move-to-inbox.png";
    import selectIcon from "../icons/checked-box.png";
    import unselectIcon from "../icons/remove-selection.png";

    //import tabsIcon from "../icons/tabG"
    
    export let db = null;
    export let user = null;

    export let groupId;
    export let groups;
    export let workspacesLoaded;
    export let lastSelectionUpdate;
    export let selectedTabs = [];

    let workspace;

    

    import { getWorkspaceData } from "./workspaceData";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import WorkspaceIcon from "../components/WorkspaceIcon.svelte";
    import { findExistingContextForGroup, getContext, getContextFromGroupId, getWorkspaceQueueFolder, openWorkspace, tryToGetBookmark, tryToGetBookmarkTree, tryToGetWorkspaceFolder } from "../utilities/chrome";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
    import WorkspacePreview from "./WorkspacePreview.svelte";
    import BasicBookmarks from "./BasicBookmarks.svelte";
    import BookmarkTree from "./BookmarkTree.svelte";
    import GroupLabel from "../group/GroupLabel.svelte";
    import { colorMap } from "../utilities/colors";
    import { _authLoaded, _groups, _openWorkspaces, _tabs, _workspacesLoaded, allResources } from "../stores";
    import { slide } from "svelte/transition";
    import NewFolderModal from "./NewFolderModal.svelte";
    import LocationSelection from "../edit_bookmark/LocationSelection.svelte";
  import CircleDivider from "../components/CircleDivider.svelte";
  import Bookmark from "../components/Bookmark.svelte";
  import CreateFolderButton from "../components/CreateFolderButton.svelte";

    let dispatch = createEventDispatcher();

    let inputElement;


    /*
        sections
        - folders
        - tabs *
        - resources (saved)
            - pinned
            - highlights
            - readingList/toVisit
            - images
    */

    const SectionNames = {
        folders: 'Folders',
        tabs: 'Tabs',
        saved: 'Recent',
        toVisit: 'To Visit',
        bookmarks: 'Bookmarks',
    };

    let resources = [];
    let queue = [];
    let folders = [];

    let sections = [];
    let visibleSection = SectionNames.tabs;

    let showMenu;

    let loaded;
    onMount(() => {
        load();
    });

    let isInfocus;
    let showMore;

    let el;

    let group;


    $: {
        if (group != groups[groupId]) {
            group = groups[groupId];
        }
    }

    $: {
        if (user) {

            load(false);
        }
    }

    export let tabs = [];


    onDestroy(() => {

    });
    

    const onMouseEnter = () => {
        isInfocus = true;
    };

    const onMouseLeave = () => {
        isInfocus = false;
    };

    const onCloseClicked = () => {
        chrome.tabs.remove(tabs.map((t) => t.id));
    };

    const toggleCollapse = () => {
        dispatch("toggleCollapse", group);
        chrome.tabGroups.update(group.id, { collapsed: !group.collapsed });
    };

    const saveGroup = async () => {
        // const folder = await chrome.bookmarks.create({title: `${group.title} [space|${group.color}|${group.id}]`});
        // for (const tab of tabs) {
        //     await chrome.bookmarks.create({
        //         parentId: folder.id,
        //         title: `${tab.title} [tab|${tab.id}]`, 
        //         url: tab.url
        //     });
        // }

        // dispatch('groupSaved', {
        //     group,
        //     folder,
        // });
    };

    const moveGroup = async () => {
        const window = await chrome.windows.create({});
        await chrome.tabGroups.move(group.id, {
            windowId: window.id,
            index: 0,
        });

        showMore = false;
    };

    const closeGroup = () => {
        chrome.tabGroups.remove(group.id);
    };

    let isEditingTitle;

    const onEditTitleClicked = () => {
        isEditingTitle = true;
        //showMore = false;
    };

    let hasInputedText;
    const onTitleInputBlur = (e) => {
        if (hasInputedText) setTitle();
    };

    const setTitle = async () => {
        if (!workspace) {
            workspace = await getContextFromGroupId(group.id);
            workspace.title = group.title;
            dispatch('dataUpdated', { workspace });
        }
        chrome.tabGroups.update(group.id, { title: group.title });
        isEditingTitle = false;
    };

    const onInput = (e) => {
        if (e.key == "Enter") {
            setTitle();
        }
        if (!hasInputedText) hasInputedText = true;
    };

    const ungroupTabs = async () => {
        chrome.tabs.ungroup(
            (await chrome.tabs.query({ groupId: group.id })).map((t) => t.id)
        );
    };

    let isDragged;
    const onDragStart = (e) => {
        isDragged = true;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("groupId", group.id);
        chrome.tabGroups.update(group.id, { collapsed: true });
        group.collapsed = true;
    };

    let isDraggedOver;
    const onDragOver = (e) => {
        e.preventDefault();
        if (!isDraggedOver) isDraggedOver = true;
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        isDraggedOver = false;
    };

    const onDrop = async (e) => {
        if (isDraggedOver) isDraggedOver = false;
        let tabId = e.dataTransfer.getData("tabId");
        const groupId = e.dataTransfer.getData("groupId");
        const tabsInGroup = await chrome.tabs.query({ groupId: group.id });
        let startIndex = 100000;
        let endIndex = 0;
        for (const tab of tabsInGroup) {
            if (tab.index < startIndex) startIndex = tab.index;
            if (tab.index > endIndex) endIndex = tab.index;
        }

        if (tabId) {
            tabId = parseInt(tabId);
            const tab = await chrome.tabs.get(tabId);
            let index;
            let ungroup;
            if (tab.groupId == group.id) {
                // if (tab.index > startIndex) {

                // } else (tab.index == startIndex) {
                     
                // }
                ungroup = true;
                index = startIndex;
            } else if (tab.index > startIndex) {
                if (group.collapsed) {
                    index = startIndex;
                } else {
                    await chrome.tabs.group({tabIds: tab.id, groupId: group.id});
                    index = startIndex;

                }
            } else if (tab.index < endIndex) {
                if (group.collapsed) {
                    index = endIndex;
                } else {
                    await chrome.tabs.group({tabIds: tab.id, groupId: group.id});
                    index = startIndex -1;
                }
            }
            
            await chrome.tabs.move(parseInt(tabId), { index: index });
            if (ungroup) {
                await chrome.tabs.ungroup(tab.id);
            }
        } else if (groupId) {
            chrome.tabGroups.move(parseInt(groupId), { index: startIndex });
        }
    };

    const onDragEnd = () => {
        isDragged = false;
    };

    let showWorkspace;


    /*
        get workspace from group
        set visible items to tabs
    */

    const getWorkspace = async () => {
        group = groups[groupId];
        checkIfGroupTitleNeedsEditing();
        const workspaceId = groups[groupId]?.workspaceId;
        if (workspaceId) {
            workspace = await getContext(workspaceId);
        } else {

            setTimeout(async () => {
                workspace = await getContextFromGroupId(group.id);
                groups[groupId].workspaceId = workspace.id;
                _groups.set(groups);
                checkIfGroupTitleNeedsEditing();
            }, 1000);

            
        }
        
    }

    const checkIfGroupTitleNeedsEditing = () => {
        if (!group.title || group.title == '') {
            isEditingTitle = true;
            el?.scrollIntoView({
                behavior: "smooth",
            });
            inputElement?.focus();
        } else {
            isEditingTitle = false;
        }
    }

    let cachedData;
    const load = async (getCache = true) => {
        group = $_groups[groupId];
        loaded = true;
        await getWorkspace();

        if (getCache) {
            cachedData = $_openWorkspaces[workspace?.id];
            sections = cachedData?.sections ?? [];
        } else {
            cachedData = null;
            sections = [];
        }
        
        fetchData();

        
    };

    const fetchData = async () => {

        if (user) {
            await loadDataFromCloud();
        } else {
            await loadLocalData();
        }
        updateStoredData();

    };

    const updateStoredData = () => {
        let spacesData = $_openWorkspaces;
        spacesData[workspace.id] = cachedData;
        _openWorkspaces.set(spacesData);
    };

    let bookmarkTree;

    const loadLocalData = async () => {
        if (cachedData) {
            bookmarkCount = cachedData.bookmarkCount;
            bookmarkTree = cachedData.bookmarkTree;
            queue = cachedData.queue ?? [];
            visibleSection = cachedData.visibleSelection ?? SectionNames.tabs;
            
        } else {
            cachedData = {};
            sections = [];
            if(workspace.tabs && workspace.tabs?.length > 0) {
                sections.push({
                    name: SectionNames.tabs,
                    //icon: tabsIcon, 
                });
                if (!visibleSection) visibleSection = SectionNames.tabs;
            }

            try {
                await refreshLocalBookmarks();
            } catch (e) {

            }

            

            if (bookmarkCount > 0) {
                sections.push({
                    name: SectionNames.bookmarks,
                });
            }

            const queueFolder = await getWorkspaceQueueFolder(workspace);
            
            if (queueFolder) {
                queue = await chrome.bookmarks.getChildren(queueFolder.id);
                if (queue.length > 0) {
                    sections.push({
                        name: SectionNames.toVisit
                    });
                } 
            } else {
                queue = []
            }


            sections = sections;
            cachedData.queue = queue;
            cachedData.bookmarkCount = bookmarkCount;
            cachedData.bookmarkTree = bookmarkTree;
            cachedData.sections = sections;
           
        }

        updateVisibleItems(visibleSection);
        
    };

    const loadDataFromCloud = async () => {

        if (cachedData) {
            resources = cachedData.resources;
            queue = cachedData.queue;
            folders = cachedData.folders;
            visibleSection = cachedData.visibleSelection;
            
        } else {
            let data = await getWorkspaceData({db, user, workspace});
            cachedData = {};
            sections = [];
            resources = data.resources.filter((r) => !r.title?.startsWith('* ') && !r.isQueued);
            cachedData.resources = resources;
            queue = data.resources.filter((r) => r.title?.startsWith('* ') || r.isQueued);
            cachedData.queue = queue;
            folders = data.workspaces;
            cachedData.folders = folders;
            if(workspace.tabs && workspace.tabs?.length > 0) {
                sections.push({
                    name: SectionNames.tabs,
                    //icon: tabsIcon, 
                });
                if (!visibleSection) visibleSection = SectionNames.tabs;
            }

            if (folders.length > 0) {
                sections.push({
                    name: SectionNames.folders,
                });
                if (!visibleSection) visibleSection = SectionNames.folders;
            }

            if (resources.length > 0) {
                sections.push({
                    name: SectionNames.saved,
                    items: resources,
                });
                if (!visibleSection) visibleSection = SectionNames.saved;
            }

            if (queue.length > 0) {
                sections.push({
                    name: SectionNames.toVisit,
                    items: queue
                });
                if (!visibleSection) visibleSection = SectionNames.toVisit;
            }
            sections = sections;
            cachedData.sections = sections;
            
        }

        updateVisibleItems(visibleSection);
        
    }

    let visibleItems = null;

    const updateVisibleItems = (sectionName) => {
        visibleSection = sectionName;

        // save visbleSection
        if (sectionName == SectionNames.folders) {
            visibleItems = folders;
        } else if (sectionName == SectionNames.toVisit) {
            visibleItems = queue;
        } else if (sectionName == SectionNames.saved) {
            visibleItems = resources;
        } else if (sectionName == SectionNames.tabs) {
            visibleItems = tabs;
        }

        cachedData.visibleSection = visibleSection;
        updateStoredData(cachedData);
    };

    $: {
        if (visibleSection == SectionNames.tabs) {
            visibleItems = tabs;
        }
    }


    let openedSubWorkspace
    const openSubWorkspace = (workspace) => {
        openedSubWorkspace = workspace;
    };



    const onOpenWorkspaceClicked = () => {
        dispatch('exit');
        openWorkspace(workspace, {openInNewWindow: false})
    }


    const onClosedResourceClicked = (resource) => { 
        
    };

    let lastBookmarkUpdate;
    const onTabDataUpdated = ({detail}) => {
        const data = detail;
        if (data.resource) {
            let resources = $allResources;
            resources[data.resource.url] = data.resource;
            allResources.set(resources);
            updateVisibleTabs();
            // see if resource is 
        }
        lastBookmarkUpdate = Date.now();
        dispatch('dataUpdated', data);
    };

    let bookmarkCount;

    const onReceiveBookmarkCount = ({ detail }) => {

        const oldBookamrkCount = bookmarkCount;
        bookmarkCount = detail;

        updateSectionsFromBookmarkUpdate(oldBookamrkCount);
        
    };

    const checkBookmarkCounts = async ({ detail }) => {

        if (user) {

        } else {
            const oldBookamrkCount = bookmarkCount;
            
            try {
                await refreshLocalBookmarks();
                updateSectionsFromBookmarkUpdate(oldBookamrkCount);
            } catch (e) {
                
            }

            
        }
        
    };

    const updateSectionsFromBookmarkUpdate = (oldBookamrkCount) => {
        let needToUpdateCachedData;
        if (oldBookamrkCount > 0 && bookmarkCount == 0) {
            if (visibleSection == SectionNames.bookmarks) {
                const index = sections.findIndex((s) => s.name == SectionNames.bookmarks);
                if (index > -1)  {
                    sections.splice(index, 1);
                    updateVisibleItems(SectionNames.tabs);
                    needToUpdateCachedData = true;
                }
            }
        } else if (oldBookamrkCount == 0 && bookmarkCount > 0) {
            const index = sections.findIndex((s) => s.name == SectionNames.bookmarks);
            if (index == -1)  {
                sections.push({ name: SectionNames.bookmarks });
                needToUpdateCachedData = true;
            }
        }

        if (needToUpdateCachedData) {
            sections = sections;
            cachedData.sections = sections;
            updateStoredData();
        }
    };

    const refreshLocalBookmarks = async () => {
        const folder = await tryToGetWorkspaceFolder(workspace);
        let tempBookmarkCount = 0;
        if (folder) {
            bookmarkTree = (await tryToGetBookmarkTree(folder.id))[0].children;
            const incrementBookmarkCount = (node) => {
                tempBookmarkCount += 1;
                for (const child of node.children ?? []) {
                    incrementBookmarkCount(child);
                }
            };
            if (bookmarkTree) {
                for (const node of bookmarkTree) {
                    incrementBookmarkCount(node);
                }
            }
        }
        bookmarkCount = tempBookmarkCount;
    }

    const openFullScreenWorkspace = () => {
        dispatch('showWorkspaceView', workspace);
    };


    let showNewFolderModal;

    const onBookmarkFolderCreated = async () => {
        lastBookmarkUpdate = Date.now();
        showNewFolderModal = false;
    };

    let showMultiSelectionHeader;

    $: {
        showMultiSelectionHeader = selectedTabs.some((t) => t.groupId == workspace?.groupId);
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
    };

    const onBookmarkDeleted = async ({ detail }) => {
        const url = detail;
        if (!url) return;

        let tabToUpdate = tabs.find((t) => t.url == url);
        if (tabToUpdate) {
            dispatch('dataUpdated', tabToUpdated);
        }
    };

    const onTabStashed = async () => {
        const queueFolder = await getWorkspaceQueueFolder(workspace, true);
        queue = await chrome.bookmarks.getChildren(queueFolder.id);
        if (queue.length > 0 && !sections.find((s) => s.name == SectionNames.toVisit)) {
            sections = [...sections, { name: SectionNames.toVisit}];
        }
    };

    const onTemporaryBookmarkClicked = async ({ detail }) => {
        const bookmark = detail;

        chrome.bookmarks.remove(bookmark.id);
        queue = queue.filter((b) => b.id != bookmark.id);
        if (queue.length == 0) {
            chrome.bookmarks.remove((await getWorkspaceQueueFolder(workspace)).id);
            sections = sections.filter((s) => s.name != SectionNames.toVisit);
            visibleSection = SectionNames.tabs;
            cachedData.visibleSection = visibleSection;
        }
        cachedData.queue = queue;
        updateStoredData();
        const tab = await chrome.tabs.create({
            url: bookmark.url
        });

        chrome.tabs.group({ tabIds: tab.id, groupId: workspace.groupId });
        
    }

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

{#if showMenu}
    <ModalContainer on:exit={() => showMenu = false}>
        <WorkspaceMenu bind:workspace isOpen={true} on:dataUpdated on:exit={() => showMenu = false}/>
    </ModalContainer>
{/if}

{#if openedSubWorkspace}
    <ModalContainer on:exit={() => openedSubWorkspace = null}>
        <WorkspacePreview workspace={openedSubWorkspace} isOpen={false}/>
    </ModalContainer>
{/if}

{#if loaded}
<div 
    class="workspace{isDraggedOver ? ' dragged-over' : ''}{group.collapsed ? ' collapsed': ''}"

>

    {#if showMultiSelectionHeader}
    <div class="selection header">

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
    <div class="header"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}
        on:dragleave={onDragLeave}
        on:dragstart={onDragStart}
        on:dragover={onDragOver}
        on:drop={onDrop}
        on:dragend={onDragEnd}
        draggable={isEditingTitle ? 'false' : 'true'}
        bind:this={el}
        style="color: {colorMap[group.color]};"
    >
        {#if isEditingTitle}
            <input
                type="text"
                class="title-input"
                style="color: {colorMap[group.color]};"
                placeholder="Enter Group Name"
                bind:value={group.title}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                bind:this={inputElement}
            />
        {:else}
            <div class="title"on:mousedown={toggleCollapse} >
                <WorkspaceIcon color={group.color}/>
                <span class="text" >
                    {group?.title && group.title != '' ? group.title :  "Untitled"}
                </span>
                {#if false}
                    <div class="count">
                        ({tabs.length})
                    </div>
                {/if}
                
            </div>
        {/if}

        

        {#if isInfocus && !isDragged}
            <div class="actions">
                <img src={fullScreenIcon} alt="Fullscreen" on:mousedown={openFullScreenWorkspace}/>
                <img
                    src={moreIcon}
                    alt="More"
                    on:mousedown={() => showMenu = true}
                />
                <img src={closeIcon} alt="close" on:mousedown={onCloseClicked} />
            </div>
        {/if}

        
    </div>
    {/if}

    {#if !group.collapsed}
        <div class="divider"></div>
        {#if sections.length > 1}
            <div class="section-options">
                
                <div class="container">
                    <div class="padding"></div>
                    {#each sections as section (section.name)}
                        <div 
                            class="section-option{visibleSection == section.name ? ' selected': ''}"  
                            
                            on:mousedown={() => updateVisibleItems(section.name)}
                        >
                            {section.name}
                        </div>
                    {/each}
                </div>
                
            </div>
        {/if}

        

        <div class="section-items">
            <div class="container">
                {#if user} 
                {#each visibleItems ?? tabs as item (item)}
                    {#if visibleSection != SectionNames.folders}
                        <Tab 
                            {db}
                            {user}
                            tab={item} 
                            isOpen={visibleSection == SectionNames.tabs} 
                            isListItem={true}
                            {lastSelectionUpdate}
                            bind:selectedTabs
                            {workspace}
                            on:clicked={visibleSection != SectionNames.tabs ? onClosedResourceClicked(item) : null}
                            on:dataUpdated={onTabDataUpdated}
                            on:updateSelection
                            on:bookmarkDeleted={checkBookmarkCounts}
                            on:bookmarkCreated={checkBookmarkCounts}
                            on:shiftClickTab
                            on:tabStashed={onTabStashed}
                            on:refreshTabs
                        />
                    {:else}
                        <WorkspaceListItem 
                            {user}
                            {db}
                            workspace={item} 
                            isOpen={false} 
                            onClick={openSubWorkspace}
                        />
                    {/if}
                {/each}
                {:else}
                    {#if visibleSection == SectionNames.tabs}
                    {#each visibleItems ?? tabs as tab (tab)}
                        <Tab 
                            {db}
                            {user}
                            {tab} 
                            isOpen={true} 
                            isListItem={true} 
                            {lastSelectionUpdate}
                            bind:selectedTabs
                            {workspace}
                            on:dataUpdated={onTabDataUpdated}
                            on:updateSelection
                            on:bookmarkDeleted={onBookmarkDeleted}
                            on:bookmarkCreated={checkBookmarkCounts}
                            on:shiftClickTab
                            on:tabStashed={onTabStashed}
                            on:refreshTabs
                            
                        />
                    {/each}
                    {:else if visibleSection == SectionNames.bookmarks}
                        <div class="bookmarks-container">
                            <CreateFolderButton 
                                on:mousedown={() => showNewFolderModal = true}
                            />
                            {#key lastBookmarkUpdate}
                            <BookmarkTree 
                                {workspace} 
                                {lastBookmarkUpdate} 
                                {bookmarkCount}
                                on:bookmarkCount={onReceiveBookmarkCount}
                                on:dataUpdated
                                on:bookmarkDeleted={onBookmarkDeleted}
                            />
                            {/key}
                        </div>
                    {:else if visibleSection == SectionNames.toVisit}
                        <div class="bookmarks-container">
                            {#each queue as bookmark (bookmark.id)}
                                <Bookmark 
                                    {workspace} 
                                    {bookmark} 
                                    isListItem={true} 
                                    isTemporary={true}
                                    on:bookmarkClicked={onTemporaryBookmarkClicked}
                                />
                            {/each}
                        </div> 
                    {/if}
                {/if}
            </div>
        </div>
    {/if}
   


</div>

{/if}

<style>

    
    .workspace {
        display: flex;
        flex-direction: column;
        background-color: #333;
        border-radius: 8px;
        margin: 2px 5px;
    }

    .collapsed {
        border-bottom: none;
        border-radius: 8px;
        margin-bottom: 2px;
        background-color: #111111;
    }

    .collapsed:hover {
        background-color: #444444;
    }

    .dragged-over {
        opacity: 0.5;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px 5px 0px 5px;
    }

    .spacer {
        flex-grow: 1;
    }

    .header .title {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 5px;
        
    }

    .header .title span {
        margin-left: 5px;
        overflow: scroll;
    }

    .title-input {
        text-decoration: none;
        box-shadow: none;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: transparent;
        flex-grow: 1;
        padding: 5px;
        font-size: 16px;
    }

    .selection.header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        padding: 5px;
    }

    .selection.header .icon-button {
        margin: 3px;
    }

    .selection.header .icon-button.action {
        margin-right: 15px;
        margin-left: 5px;
        opacity: 0.8;
    }

    .selection.header .icon-button.action:hover {
        cursor: pointer;
        opacity: 1;
    }

    .icon-button {
        height: 18px;
        width: 18px;
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
        margin-bottom: 5px;
    }

    .actions img {
        height: 16px;
        width: 16px;
        padding: 2px;
        opacity: 0.6;
        filter: invert(1);
    }

    .actions img:hover {
        cursor: pointer;
        opacity: 1;
    }

    
    .section-options {
        padding: 6px 0px;
        border-bottom: 1px solid #444444;
    }

    .section-options .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
    }

    .section-options .padding {
        height: 100%;
        min-width: 5px;
    }


    .section-option {
        font-size: 14px;
        font-weight: 300;
        padding: 2px 5px;
        border-radius: 8px;
        background-color: #444;
        margin-right: 8px;
        opacity: 0.7;
    }


    .section-option:hover {
        cursor: pointer;
    }

    .section-option.selected {
        font-weight: 400;
        opacity: 1;
        background-color: #555555;
    }

    .section-items {
        overflow: hidden;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        border-radius: 0px 0px 8px 8px;
    }

    .section-items .container {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        flex-grow: 1;
    }

    .bookmarks-container {
       
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: #444444;
    }


    .create-folder {
        width: calc(100% - 8px);
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.7;
        padding: 5px 4px;
    }

    .create-folder:hover {
        cursor: pointer;
        opacity: 1;
    }

    .create-folder img {
        height: 22px;
        width: 22px;
        filter: invert(1);
        margin-right: 3px;
    }

</style>