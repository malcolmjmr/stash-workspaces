<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Bookmark from "../components/Bookmark.svelte";
    import { tryToGetBookmark, tryToGetBookmarkTree, tryToGetTabGroup } from "../utilities/chrome";
    import { get } from "svelte/store";

    export let searchText = '';
    export let workspace;
    export let lastBookmarkUpdate = null;
    let bookmarkTree;

    let dispatch = createEventDispatcher();

    /*


    */

    let loaded;
    onMount(() => {
        load();
    });

    $: {
        lastBookmarkUpdate;
        load();
    }

    let folder;
    const load = async () => {

        const folderFromId = await tryToGetBookmark(workspace.folderId);
        if (folderFromId?.title == workspace.title) folder = folderFromId;
        if (!folder) {
            const searchResults = await chrome.bookmarks.search({title: workspace.title});
            if (searchResults.length == 0) {
                // create folder
                const config = await get('config');
                folder = await chrome.bookmarks.create({
                    title: workspace.title, 
                    parentId: config?.extensionFolder
                });
            } else if (searchResults.length == 1) {
                folder = searchResults[0];
            } else {
                console.log('found multiple matching folders');
                console.log(searchResults);
            }
        }

        if (folder) {
            bookmarkTree = await tryToGetBookmarkTree(folder.id);
            if (bookmarkTree.length == 1) {
                bookmarkTree = bookmarkTree[0].children;
                getBookmarkCount();
            }
            loaded = true;
        }
    };

    export let bookmarkCount;
    const getBookmarkCount = () => {
        bookmarkCount = 0;
        for (const node of bookmarkTree) {
            incrementBookmarkCount(node);
        }
        dispatch('bookmarkCount', bookmarkCount);  
    }

    const incrementBookmarkCount = (node) => {
        bookmarkCount += 1;
        for (const child of node.children ?? []) {
            incrementBookmarkCount(child);
        }
    };

    const searchTree = () => {
        let results = [];
        
        function searchNode(node) {
            if (node.children) {
                for (const child of node.children) {
                    searchNode(child);
                }
            } else {
                if (node.title.toLowerCase().includes(t)) {

                }
            }
        }
    };

    const onBookmarkMoved = ({ detail }) => {
        load();
    };

    const onBookmarkClicked = async ({ detail }) => {
        const bookmark = detail;
        const tab = await chrome.tabs.create({url: bookmark.url});
        const group = await tryToGetTabGroup(workspace.groupId);
        
        if (group) {
            console.log('grouping tab');
            chrome.tabs.group({tabIds: tab.id, groupId: group.id});
        } else {
            console.log('couldn\'t find group');
            // maybe create a tab group for the opened tab and 
            // keep previously opened tab configuration dormant?
        }
    };
</script>

{#if loaded && bookmarkTree?.length > 0}
    <div class="bookmark-tree">
        {#each bookmarkTree as bookmark (bookmark.id)}
            <Bookmark 
                {bookmark} 
                on:bookmarkClicked={onBookmarkClicked} 
                on:bookmarkMoved={onBookmarkMoved}
                on:dataUpdated
            /> 
        {/each}
    </div>
{/if}

<style>
    .bookmark-tree {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #333333;
        overflow: hidden;
    }

</style>