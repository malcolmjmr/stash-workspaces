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
    import { createEventDispatcher, onMount } from "svelte";
    import TabMenu from "./TabMenu.svelte";
    import { colorMap } from "../utilities/colors";
    import { slide } from "svelte/transition";
    import { getFavIconUrl, saveTabAsBookmark, tryToGetBookmark, tryToSaveBookmark } from "../utilities/chrome";

    import soundIcon from "../icons/volume-up.png";
    import starIcon from "../icons/star.png";
    import starIconFilled from "../icons/star-filled.png";
  
    import ModalContainer from "../components/ModalContainer.svelte";
    import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";
    import { doc, setDoc } from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";
    import { createResource } from "../utilities/firebase";
  import { allWorkspaces } from "../stores";


    export let db;
    export let user;
    export let tab;
    export let group = null;
    export let workspace = null;
    export let workspaces = null;
    export let selectedTabs = [];
    export let lastSelectionUpdate = null;
    export let dragoverItem = null;
    export let isOpen = true;
    export let lastUpdatedTab;
    export let isStartingTab = false;
    export let isEndingTab = false;


    let el;
    let isSelected;
    let isSaved;

    $: {
        lastSelectionUpdate;
        isSelected = selectedTabs.find((t) => t.id == tab.id) != null;
    }

    $: {
        if (lastUpdatedTab && lastUpdatedTab.id == tab.id) {
            updateFavIconUrl();
            if (tab.id && tab.active) {
                scrollToTabIfActive();
            }
        }
    }

    let loaded;
    let favIconUrl;
    onMount(() => {
        init();
    });

    const updateSavedState = () => {
        isSaved = (tab.bookmarks != null) || (tab.resource != null);
        if (group?.workspaceId && !workspace) {
            workspace = $allWorkspaces.find((w) => w.id == group?.workspaceId);
        }
        
    };

    let isBookmark;
    const init = async () => {
        updateFavIconUrl();
        updateSavedState();
        isBookmark = tab.parentId;
        loaded = true;
    };

    const updateFavIconUrl = async () => {
        favIconUrl = tab.favIconUrl && !tab.favIconUrl.includes('chrome:') ? tab.favIconUrl : await getFavIconUrl();
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

    const onPinTab = () => {
        chrome.tabs.update(tab.id, { pinned: !tab.pinned });
    };

    const onMouseEnter = (e) => {
        isInFocus = true;
    };

    const onMouseLeave = () => {
        isInFocus = false;
        favIconInFocus = false;
    };

    const onMouseEnterFavIcon = (e) => {
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
            const draggedTab = await chrome.tabs.get(tabId);
            if (draggedTab.groupId > -1 && (tab.groupId == -1)) {
                await chrome.tabs.ungroup(draggedTab.id);
            }
            await chrome.tabs.move(draggedTab.id, { index: tab.index });
        } else if (groupId) {
            await chrome.tabGroups.move(parseInt(groupId), { index: tab.index });
        }
    };

    const onTitleClicked = async () => {
        if (isOpen) {
            if (isSelected) return;

            if (isBookmark) {
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

    const reload = () => {
        chrome.tabs.reload(tab.id);
    };

    let showBookmarkDetails;

    const saveTab = async () => {
        console.log('clicked star icon');
        if (tab.bookmarks) {
            console.log('tab has bookmark');
            if (tab.bookmarks.length > 1) {
                showMore = true;
                showBookmarkDetails = true;
            } else {
                const bookmark = tab.bookmarks[0];
                await chrome.bookmarks.remove(bookmark.id);
                delete tab.bookmarks;
                dispatch('updateData', {tab});
            }
        } else if (tab.resource) {

            showMore = true;
            showBookmarkDetails = true;
        } else if (workspace) {
            console.log('tab has workspace')
            if (user) {
                let resource = createResource(tab);
                resource.contexts = [workspace.id];
                // const ref = doc(db, StorePaths.userResource(user.id, resource.id));
                // setDoc(ref, resource);
                console.log('saving to cloud');
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
                }

                const bookmark = await chrome.bookmarks.create({
                    title: tab.title,
                    url: tab.url,
                    parentId: folder.id
                });

                if (!tab.bookmarks) tab.bookmars = [];
                tab.bookmarks.push(bookmark);

                dispatch('dataUpdated', {tab});

                
            }

        } else if (group) {
            // create workspace? 
            console.log('tab has group');
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
        showMore = false;
    }

    
</script>

{#if showMore}
    <ModalContainer on:exit={exitModal}>
        {#if showBookmarkDetails}
            <BookmarkDetails bind:tab on:exit={exitModal} {db} {user}/>
        {:else}
            <TabMenu {db} {user} {tab} {workspace} {isOpen} {workspaces} on:pinTab/>
        {/if}
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
        {isStartingTab ? ' start-tab' : ''}
        {isEndingTab ? ' end-tab' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragstart={onDragStart}
    on:dragover={onDragOver}
    on:dragleave={onDragLeave}
    on:dragend={onDragEnd}
    on:drop={onDrop}
    draggable={showMore ? "false" : "true"}
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
            {:else}
                <img class="favicon" src={favIconUrl} alt={tab.title} />
            {/if}
            {#if group}
                <div
                    class="group-indicator"
                    style="background-color: {colorMap[group.color]}"
                />
            {/if}
        </div>
        <div class="title" on:mousedown={onTitleClicked}>{tab.title}</div>
        <div class="spacer" on:mousedown={onTitleClicked} />

        {#if !isSelected && !isDragged && isOpen}
            <div class="actions">

                {#if tab.pinned}
                    <img
                        src={pinnedIcon}
                        class="icon"
                        alt="Pinned"
                        on:mouseup={onPinTab}
                    />
                {/if}


                {#if isSaved}
                    <img
                        class="icon"
                        src={starIconFilled}
                        alt="Save"
                        on:mousedown={onStarIconClicked}
                    />
                {:else if isInFocus}
                    <img
                        class="icon"
                        src={starIcon}
                        alt="Save"
                        on:mousedown={saveTab}
                    />
                {/if}


                
                {#if isInFocus && !isDragged}
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

                {#if tab.audible}
                    <img
                        src={soundIcon}
                        class="icon"
                        alt="Sound"
                        
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
        margin: 0px 5px;
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
        margin-bottom: 10px;
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
        margin-left: 8px;
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
        padding: 2px;
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
</style>
