<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Bookmark from "../components/Bookmark.svelte";
    import { get, getExtensionFolder, hiddenFolderTitles, queueFolderTitle, saveContext, tabFolderTitle, tryToGetBookmark, tryToGetBookmarkTree, tryToGetTabGroup } from "../utilities/chrome";
  import { allWorkspaces } from "../stores";

    export let searchText = '';
    export let workspace;
    export let lastBookmarkUpdate = null;
    export let bookmarkTree = null;
    export let onlyShowFolders = false;

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
                
                folder = await chrome.bookmarks.create({
                    title: workspace.title, 
                    parentId: (await getExtensionFolder()).id
                });
            } else if (searchResults.length == 1) {
                folder = searchResults[0];
            } else {
                console.log('found multiple matching folders');
                console.log(searchResults);
            }
        }

        if (folder) {

            const tree = await tryToGetBookmarkTree(folder.id);

                if (tree.length == 1) {
                    bookmarkTree = tree[0].children;
                    getBookmarkCount(bookmarkTree);
                }

            loaded = true;
        }
    };

    const getFolderTree = (tree) => {
        const isFolder = (node) => {
            return node && node.hasOwnProperty('children');
        };

        function filterTree(node) {
            if (isFolder(node)) {
                node.children = node.children.filter(child => isFolder(child));
                node.children.forEach(child => filterTree(child));
            }
        }   

        filterTree(tree);
        return tree;
    };

    export let bookmarkCount;
    const getBookmarkCount = (tree) => {
        bookmarkCount = 0;
        for (const node of tree) {
            incrementBookmarkCount(node);
        }
        dispatch('bookmarkCount', bookmarkCount);  
    }

    const incrementBookmarkCount = (node) => {
        if (!node.children) bookmarkCount += 1;
        for (const child of node.children ?? []) {
            if (!hiddenFolderTitles.includes(node.title)) {
                incrementBookmarkCount(child);
            }
            
        }
    };

    


    const onBookmarkMoved = ({ detail }) => {
        load(true);
    };

    const onBookmarkClicked = async ({ detail }) => {
        const bookmark = detail;

        if (onlyShowFolders) {
            dispatch('locationSelected', { folder: bookmark });
        } else {
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
        }
        
        
    };

    const onBookmarkDeleted = ({ detail }) => {
        load(true);
        dispatch('bookmarkDeleted', detail);
    };
</script>

{#if loaded && bookmarkTree?.length > 0}
    <div class="bookmark-tree">
        {#each (searchText.length > 0 ? searchResults : bookmarkTree) as bookmark (bookmark.id)}

            {#if !(!bookmark.url  && hiddenFolderTitles.includes(bookmark.title))}
                <Bookmark 
                    {workspace}
                    {bookmark}
                    {onlyShowFolders}
                    on:bookmarkClicked={onBookmarkClicked} 
                    on:bookmarkMoved={onBookmarkMoved}
                    on:dataUpdated
                    on:bookmarkDeleted={onBookmarkDeleted}
                /> 
            {/if}
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