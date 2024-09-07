<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Bookmark from "../components/Bookmark.svelte";
    import inboxIcon from "../icons/inbox.png";
    import inboxIconFilled from "../icons/inbox-filled.png";
    import { getWorkspaceQueueFolder, tryToGetBookmark, tryToGetBookmarkTree, tryToGetTabGroup } from "../utilities/chrome";
    import { get } from "svelte/store";
    import BookmarkTree from "./BookmarkTree.svelte";

    export let searchText = '';
    export let workspace;
    export let lastBookmarkUpdate = null;
    let bookmarkTree;

    let dispatch = createEventDispatcher();

    let bookmarkCount = 0;

    let queue = [];

    $: {
        lastBookmarkUpdate;
        refreshQueue();
    };

    onMount(() => {
        refreshQueue();
    });

    let showQueue = false;

    const refreshQueue = async () => {
        const queueFolder = await getWorkspaceQueueFolder(workspace);

        console.log('refreshing queue');
        console.log(queueFolder);
            
        if (queueFolder) {
            queue = await chrome.bookmarks.getChildren(queueFolder.id);
            if (queue.length == 0) {
                try {
                    chrome.bookmarks.removeTree(queueFolder.id);
                } catch (e) {

                }
                
                showQueue = false;
            }
        } else {
            queue = [];
        }
    };

    const onTempBookmarkClicked = async (bookmark) => {

        await chrome.bookmarks.remove(bookmark.id);
        const tab = await chrome.tabs.create({
            url: bookmark.url
        });

        await chrome.tabs.group({ tabIds: tab.id, groupId: workspace.groupId });
        
        refreshQueue();
    };

    const onTabDraggedToBottom = async (e) => {
        e.preventDefault();
    
        let tabId = e.dataTransfer.getData("tabId");
        if (tabId) {
            tabId = parseInt(tabId);
            const tab = await chrome.tabs.get(tabId);
            dispatch('tabMovedToBookmarks', {tab});

        }
        

    };

    const onDragOverBottom = (e) => {
        e.preventDefault();
    };

</script>


<div class="bookmarks">
    {#if queue.length > 0}
    <div class="heading">
        <span>Reading List</span>
    </div>
    {/if}
    <div class="container">
        {#each queue as bookmark}
            <Bookmark 
                {bookmark}
                isTemporary={true}
                on:bookmarkClicked={() => onTempBookmarkClicked(bookmark)}
            />
        {/each}
    </div>
    
    
    {#if bookmarkCount > 0}
    <div class="heading">
        <span>Bookmarks</span>
        
    </div>
    {/if}
    <div class="container">

        <BookmarkTree 
            {searchText} 
            {workspace} 
            {lastBookmarkUpdate} 
            bind:bookmarkCount
            on:bookmarkCount
            on:dataUpdated
            on:bookmarkDeleted
            on:locationSelected
            on:tabMovedToBookmarks
        />
    </div>
   
    <div class="bottom-drop-zone" on:drop={onTabDraggedToBottom} on:dragover={onDragOverBottom}></div>
</div>


<style>
    .bookmarks {
        margin: 5px 8px 50px 8px;
        display: flex;
        flex-direction: column;
        overflow: hidden; 
    }

    .heading {
        font-size: 16px;
        font-weight: 400;
        margin: 0px 0px 8px 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .container {
        border-radius: 8px;
        background-color: #333333;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .queue.button {
        height: 16px;
        width: 16px;
        opacity: 0.7;
        margin-left: 10px;
        filter: invert(1);
    }

    .queue.button.selected {
        opacity: 1;
    }

    .queue.button:hover {
        cursor: pointer;
    }

    .bottom-drop-zone {
        height: 400px;
        width: 100%;
    }

</style>