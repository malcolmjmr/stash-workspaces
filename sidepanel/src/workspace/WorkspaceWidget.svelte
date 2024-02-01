<script>
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import Tab from "../tab/Tab.svelte";
    import Workspace from "./Workspace.svelte";
    import folderIcon from "../icons/folder-filled.png";
    import openIcon from "../icons/open-in-new-window.png";
    import moreIcon from "../icons/more-vert.png";
    import closeIcon from "../icons/close.png";
    import fullScreenIcon from "../icons/expand-content.png";

    //import tabsIcon from "../icons/tabG"
    
    export let db = null;
    export let user = null;

    export let groupId;
    export let groups;
    export let workspacesLoaded;
    export let selectedTabs = [];

    let workspace;

    

    import { getWorkspaceData } from "./workspaceData";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import WorkspaceIcon from "../components/WorkspaceIcon.svelte";
    import { getContext, openWorkspace, tryToGetBookmark, tryToGetBookmarkTree, tryToGetWorkspaceFolder } from "../utilities/chrome";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
    import WorkspacePreview from "./WorkspacePreview.svelte";
    import BasicBookmarks from "./BasicBookmarks.svelte";
    import BookmarkTree from "./BookmarkTree.svelte";
    import GroupLabel from "../group/GroupLabel.svelte";
    import { colorMap } from "../utilities/colors";
    import { _authLoaded, _groups, _openWorkspaces, _tabs, _workspacesLoaded } from "../stores";
    import { slide } from "svelte/transition";
    import NewFolderModal from "./NewFolderModal.svelte";
    import folderCreateIcon from "../icons/create-folder.png";

    let dispatch = createEventDispatcher();


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
            //console.log('updating group data');
            group = groups[groupId];
            //console.log(group);
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

    const setTitle = () => {
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
        if (!group.title || group.title == '') {
            isEditingTitle = true;
            el?.scrollIntoView({
                behavior: "smooth",
            });
        }
        const workspaceId = groups[groupId]?.workspaceId;
        if (workspaceId) {
            workspace = await getContext(workspaceId);
            

        } else {
            console.log('need to find workspace');
            workspace = {};
        }
        
    }

    let cachedData;
    const load = async (getCache = true) => {
        group = $_groups[groupId];
        loaded = true;
        await getWorkspace();

        if (getCache) {
            cachedData = $_openWorkspaces[workspace.id];
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
            visibleSection = cachedData.visibleSelection ?? SectionNames.tabs;
            
        } else {
            cachedData = {};
            sections = [];
            if(workspace.tabs && workspace.tabs.length > 0) {
                sections.push({
                    name: SectionNames.tabs,
                    //icon: tabsIcon, 
                });
                if (!visibleSection) visibleSection = SectionNames.tabs;
            }

            await refreshLocalBookmarks();

            if (bookmarkCount > 0) {
                sections.push({
                    name: SectionNames.bookmarks,
                });
            }
            sections = sections;
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
            if(workspace.tabs && workspace.tabs.length > 0) {
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
            allResources[data.resource.url] = data.resource;
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

        console.log('received bookmark count');
        console.log(oldBookamrkCount);
        console.log(bookmarkCount);
        updateSectionsFromBookmarkUpdate(oldBookamrkCount);
        
    };

    const checkBookmarkCounts = async ({ detail }) => {
        console.log('bookmark updated from tab');
        if (user) {

        } else {
            const oldBookamrkCount = bookmarkCount;
            await refreshLocalBookmarks();
            updateSectionsFromBookmarkUpdate(oldBookamrkCount);
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

    

</script>

{#if showNewFolderModal}
    <ModalContainer on:exit={() => showNewFolderModal = false}>
        <NewFolderModal {workspace} on:bookmarkFolderCreated={onBookmarkFolderCreated} />
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
                autofocus="true"
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
                <img src={closeIcon} alt="close" on:mouseup={onCloseClicked} />
            </div>
        {/if}

        
    </div>

    {#if !group.collapsed}
        <div class="divider"></div>
        {#if sections.length > 1}
            <div class="section-options">
                
                <div class="container">
                    <div class="padding"></div>
                    {#each sections as section (section.name)}
                        <div class="section-option{visibleSection == section.name ? ' selected': ''}" 
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
                            bind:selectedTabs
                            {workspace}
                            on:clicked={visibleSection != SectionNames.tabs ? onClosedResourceClicked(item) : null}
                            on:dataUpdated={onTabDataUpdated}
                            on:updateSelection
                            on:bookmarkDeleted={checkBookmarkCounts}
                            on:bookmarkCreated={checkBookmarkCounts}
                            on:shiftClickTab
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
                            bind:selectedTabs
                            {workspace}
                            on:dataUpdated={onTabDataUpdated}
                            on:updateSelection
                            on:bookmarkDeleted={checkBookmarkCounts}
                            on:bookmarkCreated={checkBookmarkCounts}
                            on:shiftClickTab
                            
                        />
                    {/each}
                    {:else if visibleSection == SectionNames.bookmarks}
                        <div class="bookmarks-container">
                            <div class="create-folder" on:mousedown={() => showNewFolderModal = true}>
                                <img src={folderCreateIcon} alt="Create Folder"/>
                                <span>Create folder</span>
                            </div>
                            {#key lastBookmarkUpdate}
                            <BookmarkTree 
                                {workspace} 
                                {lastBookmarkUpdate} 
                                {bookmarkCount}
                                on:bookmarkCount={onReceiveBookmarkCount}
                                on:dataUpdated
                                on:bookmarkDeleted={checkBookmarkCounts}
                            />
                            {/key}
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
        background-color: #333333;
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

    .icon-button {
        height: 20px;
        width: 20px;
        margin-left: 5px;
        filter: invert(1);
    }

    .icon-button:hover {
        cursor: pointer;
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
        padding: 8px 0px;
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
        font-weight: 400;
        padding: 3px 5px;
        border-radius: 8px;
        background-color: #444;
        margin-right: 8px;
        opacity: 0.7;
    }


    .section-option:hover {
        cursor: pointer;
    }

    .section-option.selected {
        background-color: #555555;
        opacity: 1;
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
        height: 25px;
        width: 25px;
        filter: invert(1);
        margin-right: 5px;
    }

</style>