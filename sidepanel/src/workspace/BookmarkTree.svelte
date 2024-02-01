<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Bookmark from "../components/Bookmark.svelte";
    import { get, saveContext, tryToGetBookmark, tryToGetBookmarkTree, tryToGetTabGroup } from "../utilities/chrome";
  import { allWorkspaces } from "../stores";

    export let searchText = '';
    export let workspace;
    export let lastBookmarkUpdate = null;
    export let bookmarkTree = null;

    let dispatch = createEventDispatcher();

    /*


    */

    let loaded;
    onMount(() => {
        load();
    });

    $: {
        lastBookmarkUpdate;
        load(true);
    }

    $: {
        searchText;
        updateSearchResults();
    }

    let searchResults = [];

    const updateSearchResults = () => {
        searchResults = [];
        if (searchText.length > 0) {
            const text = searchText.toLowerCase();
            for (const node of bookmarkTree) {
                searchBookmarks(node, text);
            }
        }

        bookmarkCount = searchResults.length;
        dispatch('bookmarkCount', bookmarkCount);
        
    };

    const searchBookmarks = (node, text) => {
        if (node.children) {
            for (const child of node.children) {
                searchBookmarks(child, text)
            }
        } else {
            const matchesTitle = node.title?.toLowerCase().includes(text);
            const matchesUrl = node.url?.includes(text);
            if (matchesTitle || matchesUrl) {
                searchResults.push(node);
            }
        }

    }

    let folder;
    const load = async (forceReload = false) => {
        console.log('reloading boomkark tree');
        if (bookmarkTree && !forceReload) {
            loaded = true;
            return;
        }
        console.log('cool');

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

        console.log('loading bookmark treed');
        if (folder) {
            console.log('found bookmark folder');
            bookmarkTree = await tryToGetBookmarkTree(folder.id);
            if (bookmarkTree.length == 1) {
                console.log('found bookmarks');
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

    


    const onBookmarkMoved = ({ detail }) => {
        load(true);
    };

    const onBookmarkClicked = async ({ detail }) => {
        const bookmark = detail;

        
        let group = await tryToGetTabGroup(workspace.groupId);

        if (!group) {
            const matchingGroups = await chrome.tabGroups.query({ title: workspace.title });
            if (matchingGroups.length == 1) {
                group = matchingGroups[0];
                workspace.groupId = group.id;
                await saveContext(workspace);
                dispatch('dataUpdated', { workspace });
            }
           
        } 
        
        if (group) {

            
            let tab;
            const newTabs = await chrome.tabs.query({ groupId: group.id, url: 'chrome://newtab/' });
            if (newTabs.length > 0) {
                tab = newTabs[0];
                await chrome.tabs.update({ url: bookmark.url });
            } else {
                tab = await chrome.tabs.create({ url: bookmark.url });
            }
            chrome.tabs.group({tabIds: tab.id, groupId: group.id});
        } else {
            await chrome.tabs.create({ url: bookmark.url });
        }
    };
</script>

{#if loaded && bookmarkTree?.length > 0}
    <div class="bookmark-tree">
        {#each (searchText.length > 0 ? searchResults : bookmarkTree) as bookmark (bookmark.id)}
            <Bookmark 
                {bookmark} 
                on:bookmarkClicked={onBookmarkClicked} 
                on:bookmarkMoved={onBookmarkMoved}
                on:dataUpdated
                on:bookmarkDeleted
            /> 
        {/each}
    </div>
{/if}

<style>
    .bookmark-tree {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

</style>