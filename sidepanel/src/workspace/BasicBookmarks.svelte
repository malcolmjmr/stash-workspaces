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

</script>


<div class="bookmarks">
    {#if bookmarkCount > 0}
    <div class="heading">
        <span>Bookmarks</span>
        {#if queue.length > 0}
            <img 
                src={showQueue ? inboxIconFilled : inboxIcon} 
                alt="queue" 
                class='queue button{showQueue ? ' selected' : ''}'
                on:mousedown={() => showQueue = !showQueue}
            />
        {/if}
    </div>
    {/if}
    <div class="container">
        {#if showQueue}
            {#each queue as bookmark}
                <Bookmark 
                    {bookmark}
                    on:bookmarkClicked={() => onTempBookmarkClicked(bookmark)}
                />
            {/each}
        {:else}
        <BookmarkTree 
            {searchText} 
            {workspace} 
            {lastBookmarkUpdate} 
            bind:bookmarkCount
            on:bookmarkCount
            on:dataUpdated
            on:bookmarkDeleted
            on:locationSelected
        />
        {/if}
    </div>
</div>


<style>
    .bookmarks {
        margin: 12px 8px 50px 8px;
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

</style>