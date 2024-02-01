<script>
    /*

        Todo:
        - [ ] Show reload
        - [ ] Show back
        - More menu
            - [ ] edit and copy url
            - [ ] back
            - [ ] duplicate

    */

    import pinnedIcon from "../icons/pin-filled.png";
    import closeIcon from "../icons/close.png";
    import menuIcon from "../icons/more-vert.png";
    import emptyBoxIcon from "../icons/empty-box.png";
    import checkedBoxIcon from "../icons/checked-box.png";
    import webIcon from "../icons/web.png";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import TabMenu from "./TabMenu.svelte";
    import { colorMap } from "../utilities/colors";
    import { slide } from "svelte/transition";
    import { getTabFavIconUrl, getPermissions, saveTabAsBookmark, tryToGetBookmark, tryToSaveBookmark, saveContext, getContext, getActiveTab } from "../utilities/chrome";

    import soundIcon from "../icons/volume-up.png";
    import mutedIcon from "../icons/volume-off.png";
    import starIcon from "../icons/star.png";
    import starIconFilled from "../icons/star-filled.png";
  
    import ModalContainer from "../components/ModalContainer.svelte";
    import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";
    import { doc, setDoc } from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";
    import { createResource } from "../utilities/firebase";
    import { _lastUpdatedTab, allWorkspaces, openGroups, quickActions } from "../stores";
    import { getWorkspaceData } from "../workspace/workspaceData";
    import WorkspaceIcon from "../components/WorkspaceIcon.svelte";

    import { actions } from "./actions";
    import { get } from "../utilities/chrome";
  import { horizontalSlide } from "../utilities/transitions";
  import MoveModal from "./MoveModal.svelte";
  import TabUpdateModal from "./TabUpdateModal.svelte";


    export let db;
    export let user;
    export let tab;
    export let groups = {};
    export let group = null;
    export let workspace = null;
    export let workspaces = null;
    export let selectedTabs = [];
    export let lastSelectionUpdate = null;
    export let dragoverItem = null;
    export let isOpen = true;
    export let isStartingTab = false;
    export let isEndingTab = false;
    export let canDrag = true;
    export let canSelect = true;
    export let isListItem = false;


    let el;
    let isSelected;
    let isSaved;
    let isPinned;
    let isAudible;


    $: {
        lastSelectionUpdate;
        isSelected = selectedTabs.find((t) => t.id == tab.id) != null;
    }

    let updated;
    $: {

        // if ($_lastUpdatedTab && $_lastUpdatedTab.id == tab.id) {
        //     //tab = {...lastUpdatedTab};
        //     init();

        //     if (tab.id && tab.active) {
        //         scrollToTabIfActive();
        //     }
        // }

        if ((!tab.bookmarks && isSaved) || (tab.bookmarks && !isSaved)) {
            updateSavedState();
        }
    }

    let unsubscribeToTabUpdates; 

    $: {
        if (group != groups[tab.groupId]) {
            group = groups[tab.groupId];
        }
    } 

    let loaded;
    let favIconUrl;
    onMount(() => {

        unsubscribeToTabUpdates = _lastUpdatedTab.subscribe((t) => {
            if (t?.id == tab.id)  {
                init();

                if (tab.id && tab.active) {
                    scrollToTabIfActive();
                }
            }

            
        });

        init();
    });

    onDestroy(() => {
        unsubscribeToTabUpdates();
    });

    const updateSavedState = () => {
        isSaved = (tab.bookmarks != null && tab.bookmarks.length > 0) || (tab.resource != null);
        if (group?.workspaceId && !workspace) {
            workspace = $allWorkspaces.find((w) => w.id == group?.workspaceId);
        }
        
    };

    let isBookmark;
    const init = async () => {
        group = groups[tab.groupId];
        updateFavIconUrl();
        updateSavedState();
        isPinned = workspace?.pinnedTabs?.find((t) => t.id == tab.id || t.url == tab.url) ?? tab.pinned;
        isAudible = tab.audible;
        isBookmark = tab.parentId;
    
        loaded = true;
    };

    const updateFavIconUrl = () => {
        favIconUrl = getTabFavIconUrl(tab);
    }

    const scrollToTabIfActive = () => {
        if (tab.active && el) {

            const rect = el.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0) {
            // The element is in view
            } else {
                el.scrollIntoView({
                    behavior: "smooth",
                });
            }

        }
    };


    let dispatch = createEventDispatcher();

    let isInFocus;
    let favIconInFocus;

    const onPinTab = async () => {
        if (workspace) {
            if (!workspace.pinnedTabs) workspace.pinnedTabs = [];
            const index = workspace.pinnedTabs.findIndex((t) => t.id == tab.id || t.url == tab.url);
            if (index > -1) {
                workspace.pinnedTabs.splice(index, 1);
            } else {
                workspace.pinnedTabs.push({ id: tab.id, url: tab.url });
            }
            await saveContext(workspace);
            dispatch('dataUpdated', { workspace });
            isPinned = tab.pinned ?? workspace?.pinnedTabs.find((t) => t.id == tab.id || t.url == tab.url);
        } else {
            chrome.tabs.update(tab.id, { pinned: !tab.pinned });
        } 
    };

    const onMouseEnter = (e) => {
        isInFocus = true;
    };

    const onMouseLeave = () => {
        isInFocus = false;
        favIconInFocus = false;
    };

    const onMouseEnterFavIcon = (e) => {
        if (!canSelect) return;
        favIconInFocus = true;
    };

    const onMouseLeaveFavIcon = (e) => {
        favIconInFocus = false;
    };

    let showMore;
    const onMenuOpen = (e) => {
        showMore = !showMore;
    };

    const onCloseTab = () => {
        chrome.tabs.remove(tab.id);
    };

    const toggleMute = () => {

        chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted });
        //tab.mutedInfo.muted = !tab.mutedInfo.muted;
    };

    const onSelectionUpdated = () => {
        dispatch("updateSelection", tab);
    };

    let isDragged;
    const onDragStart = (e) => {
        isDragged = true;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("tabId", tab.id);
    };

    let isDraggedOver;
    let lastDragOver = Date.now();
    const onDragOver = (e) => {
        e.preventDefault();
        if (!isDraggedOver) isDraggedOver = true;
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        if (isDraggedOver) {
            isDraggedOver = false;
        }
    };

    const onDragEnd = (e) => {
        isDragged = false;
    };

    const onDrop = async (e) => {
        if (isDraggedOver) isDraggedOver = false;
        let tabId = e.dataTransfer.getData("tabId");
        const groupId = e.dataTransfer.getData("groupId");
        if (tabId) {
            tabId = parseInt(tabId);
            let draggedTabs = [];
            if (selectedTabs.find((t) => t.id == tabId)) {
                draggedTabs = [...selectedTabs];
                selectedTabs = [];
            } else {
                draggedTabs = [(await chrome.tabs.get(tabId))];
            }

            for (const draggedTab of draggedTabs) {
                if (draggedTab.groupId > -1 && (tab.groupId == -1)) {
                    await chrome.tabs.ungroup(draggedTab.id);
                }

                if (draggedTab.groupId == -1 && tab.groupId > -1) {
                    const tabs = await chrome.tabs.query({ groupId: tab.groupId });
                    if (tabs.length == 1) {
                        await chrome.tabs.group({ groupId: tab.groupId, tabIds: draggedTab.id });
                    }
                }
                await chrome.tabs.move(draggedTab.id, { index: tab.index });

            }
            
            


        } else if (groupId) {
            await chrome.tabGroups.move(parseInt(groupId), { index: tab.index });
        }
    };

    const onTitleClicked = async (e) => {
        dispatch('clicked', tab);
        if (isOpen) {
            if (isSelected) return;

            if (e.metaKey) {
                dispatch('updateSelection', tab);
            } else if (e.shiftKey && !tab.active) {
                dispatch('shiftClickTab', tab);
            }
            else if (isBookmark) {
                const activeTab = (await chrome.tabs.query({active:true, currentWindow: true}))[0];
                const newTab = await chrome.tabs.create({url: tab.url, index: activeTab.index + 1});
                if (activeTab.groupId > -1) {
                    await chrome.tabs.group(({tabIds: newTab.id, groupId: activeTab.groupId}));
                }
            } else {
                chrome.tabs.update(tab.id, { active: true });
                chrome.windows.update(tab.windowId, { focused: true });
            }
            
        } else {
            
            chrome.tabs.create({url: tab.url});
        }
    };

    const onTitleDoubleClicked = () => {
        showUpdateModal = true;
    };

    const reload = () => {
        chrome.tabs.reload(tab.id);
    };

    let showBookmarkDetails;

    const saveTab = async () => {

        const hasBookmarkPermission = await getPermissions();

        if (!hasBookmarkPermission) {
            const granted = await chrome.permissions.request({
                permissions: ['bookmarks']
            });

            if (!granted) return;
        }

        if (group && !workspace) {
            workspace = await getContext(groups[tab.groupId].workspaceId);
        }
        
        if (tab.bookmarks && tab.bookmarks.length > 0) {

            showMore = true;
            showBookmarkDetails = true;
            // else {
            //     const bookmark = tab.bookmarks[0];
            //     await chrome.bookmarks.remove(bookmark.id);
            //     delete tab.bookmarks;
            //     dispatch('updateData', {tab});
            // }
        } else if (tab.resource) {

            showMore = true;
            showBookmarkDetails = true;
        } else if (workspace) {
            
            if (user) {
                let resource = createResource(tab);
                resource.contexts = [workspace.id];
                resource.updated = Date.now();
                const ref = doc(db, StorePaths.userResource(user.id, resource.id));
                await setDoc(ref, resource, {merge: true});
                tab.resource = resource;
                isSaved = true;
                dispatch('dataUpdated', {resource});
            } else {
                let folder = await tryToGetBookmark(workspace.folderId);
                if (!folder) {
                    //const settings = await getSettings();

                    folder = await chrome.bookmarks.create({
                        title: workspace.title, 
                        index: 0,
                        //parentId: settings.defaultFolderLocation 
                    });

                    workspace.folderId = folder.id;
                    dispatch('dataUpdated', { workspace });

                    await saveContext(workspace);
                }

                const bookmark = await chrome.bookmarks.create({
                    title: tab.title,
                    url: tab.url,
                    parentId: folder.id
                });

                if (!tab.bookmarks) tab.bookmarks = [];
                tab.bookmarks.push(bookmark);

                dispatch('dataUpdated', {tab});
                dispatch('bookmarkCreated');

                
            }

        } else {
            showMore = true;
            showBookmarkDetails = true;
        }
    
        // if (tab.bookmarks) {
        //     if (tab.bookmarks.length > 1) {
        //         showBookmarkDetails = true;
        //     } else {
        //         delete tab.bookmarks;
        //         dispatch("tabBookmarkRemoved", tab);
        //     }
        // } else {
        //     let results = await tryToSaveBookmark(tab, group);

        //     if (results) {
        //         dispatch("tabBookmarkAdded", results);
        //     }
        // }
    };

    const onStarIconClicked = () => {
        showMore = true;
        showBookmarkDetails = true;
    };

    const exitModal = () => {
        showBookmarkDetails = false;
        showMore = false;
    };

    let showUpdateModal;


    const onActionButtonClicked = (e, action) => {
        
        if (action == actions.save) {
            saveTab(tab);
        } else if (action.id == actions.pin.id) {
            onPinTab();
        } else if (action.id == actions.reload.id && e.metaKey) {
            actions.duplicate.onClick(tab);
        } else if (action.id == actions.moveToSpace.id) {
            showMoveModal = true;
            showMore = true;
        } else {
            action.onClick(tab);
        }

    };

    const onDataUpdated = ({ detail }) => {

        
        if (detail.workspace) {
            if (detail.workspace.pinnedTabs && !isPinned) {

            }
        }
        dispatch('dataUpdated', detail);
    };

    let showMoveModal;
    
</script>

{#if showMore}
    <ModalContainer on:exit={exitModal}>
        {#if showBookmarkDetails}
            <BookmarkDetails 
                bind:tab 
                on:exit={exitModal} 
                {db} {user} 
                on:dataUpdated
                on:bookmarkDeleted 
            />
        {:else if showMoveModal}
            <MoveModal on:exit={exitModal} selectedTabs={[tab]} />
        {:else}
            <TabMenu 
                {db} 
                {user} 
                {tab}
                workspaceId={group?.workspaceId}
                {workspace} 
                {isOpen} 
                {workspaces} 
                on:pinTab={onPinTab}
                on:exit={exitModal}
                on:editBookmark={saveTab}
                on:dataUpdated={onDataUpdated}
            />
        {/if}
    </ModalContainer>
{/if}

{#if showUpdateModal}
    <ModalContainer on:exit={() => showUpdateModal = false} >
        <TabUpdateModal {tab} on:exit={() => showUpdateModal = false}/>
    </ModalContainer>
{/if}


{#if loaded}

<div
    bind:this={el}
    class="tab{isSelected ? ' selected' : ''}{isInFocus
        ? ' focused'
        : ''}{isDraggedOver ? ' dragged-over' : ''}{tab.active
        ? ' active'
        : ''}{group ? ' grouped' : ''}
        {isListItem ? ' list-item' : ''}
        {isStartingTab ? ' start-tab' : ''}
        {isEndingTab ? ' end-tab' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragstart={onDragStart}
    on:dragover={onDragOver}
    on:dragleave={onDragLeave}
    on:dragend={onDragEnd}
    on:drop={onDrop}
    draggable={showMore || !canDrag ? "false" : "true"}
>

    <div class="main-container">
        <div
            class="favicon-container"
            on:mouseleave={onMouseLeaveFavIcon}
            on:mouseenter={onMouseEnterFavIcon}
        >
            {#if isSelected}
                <img
                    class="icon"
                    src={checkedBoxIcon}
                    alt="Unselect"
                    on:mousedown={onSelectionUpdated}
                />
            {:else if favIconInFocus}
                <img
                    class="icon"
                    src={emptyBoxIcon}
                    alt="Select"
                    on:mousedown={onSelectionUpdated}
                />
            {:else if favIconUrl && favIconUrl != ''}
                <img class="favicon" src={favIconUrl} alt={tab.title ?? ''} />
            {/if}
            {#if group && !workspace}
                <div
                    class="group-indicator"
                    style="background-color: {colorMap[group.color]}"
                />
            {/if}
        </div>
        <div 
            class="title" 
            on:click={onTitleClicked}
            on:dblclick={onTitleDoubleClicked}
        >
            {tab.title}
        </div>
        <div class="spacer" on:click={onTitleClicked} on:dblclick={onTitleDoubleClicked}/>

        {#if !isSelected && !isDragged && isOpen}
            <div class="actions">

                {#if isPinned}
                    <img
                        src={pinnedIcon}
                        class="icon"
                        alt="Pinned"
                        on:mouseup={onPinTab}
                    />
                {/if}

                {#if isSaved}
                    <WorkspaceIcon
                        icon={starIconFilled}
                        color={null}
                        on:mousedown={onStarIconClicked}
                        size={16}
                    />
                {/if}

                
                {#if isInFocus && !isDragged}

                    <div class="quick-actions" in:horizontalSlide={{delay: 500, duration: 200}}>

                        {#each $quickActions as action}
                            {#if (action.id == actions.pin.id && isPinned)}
                            {:else if (action.id == actions.save.id && isSaved)}
                            
                            {:else if action}
                            <img
                                class="icon"
                                src={typeof action.icon == 'string' ? action.icon : action.icon(tab)}
                                alt={typeof action.title == 'string' ? action.title : action.title(tab)}
                                on:mousedown={(e) => onActionButtonClicked(e, action)}
                            />
                            {/if}
                        {/each}
                    </div>
                    <img
                        src={menuIcon}
                        class="icon"
                        alt="Menu"
                        on:mousedown={onMenuOpen}
                    />
                    <img
                        src={closeIcon}
                        class="icon"
                        alt="Close"
                        on:mouseup={onCloseTab}
                    />
                    
                {/if}

                {#if isAudible}
                    <img
                        src={tab.mutedInfo.muted ? mutedIcon : soundIcon}
                        class="icon"
                        alt="Sound"
                        on:mousedown={toggleMute}
                    />
                {/if}
            </div>
        {/if}
    </div>
</div>
{/if}

<style>
    .tab {
        padding: 2px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        font-weight: 300;
        color: white;
        user-select: none;
        margin: 2px 5px;
        border-radius: 8px;
    }

    .main-container {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .tab.grouped {
        background-color: #333333;
        margin: 0px;
        border-radius: 0px;
    }

    .list-item {
        margin: 0px;
        border-radius: 0px;
    }

    .list-item.grouped {
        background-color: #222222;
    }

    .tab.focused {
        background-color: #444444;
    }

    .tab.selected {
        background-color: #444444;
    }

    

    .tab.active {
        background-color: #666666;
    }

    .tab.dragged-over {
        opacity: 0.4;
        background-color: #555555;
    }

    .tab.end-tab {
        border-radius: 0px 0px 8px 8px;
        margin-bottom: 5px;
    }

    .favicon-container {
        position: relative;
        min-width: 20px;
        display: flex;
    }

    .favicon {
        height: 20px;
        width: 20px;
    }



    .group-indicator {
        position: absolute;
        height: 8px;
        width: 8px;
        bottom: -2px;
        right: -2px;
        border-radius: 100%;
    }

    .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-lines: 1;
        overflow: hidden;
        margin-left: 5px;
        width: 100%;
    }

    .title:hover {
        cursor: pointer;
    }

    .spacer {
        height: 100%;
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        height: 16px;
        width: 16px;
        padding: 2px 3px;
        filter: invert(1);
        opacity: 0.7;
    }

    .icon:hover {
        cursor: pointer;
        opacity: 1;
    }

    .drop-zone {
        height: 20px;
        background-color: #444444;
    }

    .quick-actions { 
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }
</style>
