<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { getTabFavIconUrl, tryToGetBookmark } from "../utilities/chrome";
    export let bookmark;

    import Bookmark from "./Bookmark.svelte";
    import folderIcon from "../icons/folder-filled.png";
    import openFolderIcon from "../icons/folder-open-filled.png";
    import moreIcon from "../icons/more-vert.png";
  import ModalContainer from "./ModalContainer.svelte";
  import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";
  import Tab from "../tab/Tab.svelte";
    export let isOpen = false;
    export let isListItem = false;


    let isFolder = !bookmark.url;
    const onclick = (e) => {
        if (!isFolder) return;
        isOpen = !isOpen;
    };

    let isInFocus;

    let loaded;

    onMount(() => {
        load();
    });

    let favIconUrl;
    const load = async () => {
        favIconUrl = getTabFavIconUrl(bookmark);
        loaded = true;
    };

    let dispatch = createEventDispatcher();
    const onClicked = () => {

        dispatch('bookmarkClicked', bookmark);
    };

    let isDragged;
    const onDragStart = (e) => {
        isDragged = true;
       if (isOpen) isOpen = false;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("bookmarkId", bookmark.id);
    };

    const onDragEnd = (e) => {
        isDragged = false;
    };


    const onDrop = async (e) => {

        if (isDraggedOver) isDraggedOver = false;
        const bookmarkId = e.dataTransfer.getData("bookmarkId");
        const tabId = e.dataTransfer.getData("tabId");
        let draggedBookmark = await tryToGetBookmark(bookmarkId);
        let draggedTab = tabId ? await chrome.tabs.get(parseInt(tabId)) : null;
        if (!draggedBookmark && !draggedTab) {
            console.log('no dragged bookmark data');
            return;
        }

        if (draggedBookmark?.id == bookmark.id) return;
        
        let parentId;
        let index = 0;

        if (isFolder) {
            if (draggedBookmark.url) {
                if (draggedBookmark.parentId == bookmark.id) {
                    parentId = bookmark.parentId;
                } else {
                    parentId = bookmark.id
                }
            } else {
                if (isOpen && draggedBookmark.parentId != bookmark.id) {
                    parentId = bookmark.id;
                } else {
                    index = bookmark.index;
                    parentId = bookmark.parentId;
                }
            }
        } else { // is folder
            index = bookmark.index;
            parentId = bookmark.parentId;
        }

        if (draggedTab) {   

            const searchResults = await chrome.bookmarks.search({url: draggedTab.url });
            for (const result of searchResults) {
                if (result.parentId == bookmark.parentId) {
                    draggedBookmark = result;
                    break;
                }
            }
            if (!draggedBookmark) {
                const newBookmark = await chrome.bookmarks.create({
                    parentId,
                    index,
                    title: draggedTab.title,
                    url: draggedTab.url
                });

                dispatch('dataUpdated', {tab: draggedTab})
            } 
        }

        if (draggedBookmark && draggedBookmark.id != parentId) {
            await chrome.bookmarks.move(draggedBookmark.id, {
                index,
                parentId,
            }); 
        }

        dispatch('bookmarkMoved', {bookmark});
    };

    let isDraggedOver;
    let hoverTimeout;
    const onDragOver = (e) => {
        
        e.preventDefault();
        if (!isDraggedOver) {

            isDraggedOver = true;
            // set timer to open folder 
            if (isFolder && !isOpen) {
                hoverTimeout = setTimeout(() => {
                    isOpen = true;
                }, 1000);
            }
        }
        
        
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        if (isDraggedOver) {
            isDraggedOver = false;
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }
        }
    };

    const onBookmarkClicked = () => {
       

        if (isFolder) {
            if (!isOpen) isOpen = true;
        } else {
            setTimeout(() => {
                if (isDragged) return;
                dispatch('bookmarkClicked', bookmark);
            }, 500);
            
        }
    };

    const openFolder = () => {
        if (isDragged) return;
    };

    let showBookmarkDetails;
    const openBookmarkDetails = () => {
        if (isDragged) return;
        showBookmarkDetails = true;
    }
</script>

{#if showBookmarkDetails}
    <ModalContainer on:exit={() => showBookmarkDetails = false}>
        <BookmarkDetails
            resource={bookmark} 
            isNativeBookmark={true} 
            on:exit={() => showBookmarkDetails = false}
            on:dataUpdated
            on:bookmarkDeleted
        />
    </ModalContainer>
{/if}

{#if loaded}
    <div
        class="bookmark"
    >
        <div 
            class="head{isDraggedOver ? ' dragged-over' : ''}{isInFocus ? ' focused' : ''}{isListItem ? ' list-item' : ''}"
            on:dragover={onDragOver}
            on:dragstart={onDragStart}
            on:dragend={onDragEnd}
            on:dragleave={onDragLeave}
            on:drop={onDrop}
            draggable="true"
            on:mouseenter={() => (isInFocus = true)}
            on:mouseleave={() => (isInFocus = false)}
            
        >
            <img
                on:mousedown={onclick}
                src={isFolder ? (isOpen ? openFolderIcon : folderIcon) : favIconUrl}
                class="icon{isFolder ? ' folder' : ''}"
                alt=""
            />
            <div class="title" on:mousedown={onBookmarkClicked}>
                {bookmark.title}
            </div>
            <div class="spacer" on:mousedown={onBookmarkClicked}>

            </div>
            


            {#if isInFocus}
                {#if false}
                    <img src={openFolderIcon} class="open button" on:mousedown={openFolder} alt="Open Folder"/>
                {/if}
                <img src={moreIcon} class="more button" on:mousedown={openBookmarkDetails} alt="Menu"/>
            {/if}

            

        </div>

        {#if isOpen}
            <div class="children">
                {#each bookmark.children ?? [] as child (child.id)}
                    <Bookmark bookmark={child} on:bookmarkClicked on:bookmarkMoved/>
                {/each}
            </div>
        {/if}
    </div>
{/if}

<style>
    .bookmark {
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-lines: 1;
        overflow: hidden;
    }

    .head {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        border-radius: 8px 0px 0px 8px;
        height: 25px;
    }

    .list-item {
        border-radius: 0px;
    }

    .focused {
        background-color: #444444;
    }

    .dragged-over {
        background-color: #555555;
        opacity: 0.5;
    }
    .icon {
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }

    .folder:hover {
        cursor: pointer;
    }

    .icon.folder {
        height: 22px;
        width: 22px;
        filter: invert(1);
    }

    .children {
        margin-left: 20px;
        overflow-y: scroll;
        flex-grow: 1;
    }

    .title:hover {
        cursor: pointer;
    }

    .spacer {
        flex-grow: 1;
        height: 100%;
    }

    img.button {
        height: 20px;
        width: 20px;
        filter: invert(1);
        opacity: 0.7;
        padding: 0px 2px;
    }

    img.button:hover {
        cursor: pointer;
        opacity: 1;
    }
</style>

