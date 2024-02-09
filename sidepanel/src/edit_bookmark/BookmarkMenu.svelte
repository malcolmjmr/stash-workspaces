<script>
    import { createEventDispatcher, onMount } from "svelte";
import MenuItem from "../components/MenuItem.svelte";
    import folderIcon from "../icons/folder.png";
  import MenuDivider from "../components/MenuDivider.svelte";
  import { getTabFavIconUrl } from "../utilities/chrome";
  import ModalContainer from "../components/ModalContainer.svelte";
  import BookmarkDetails from "./BookmarkDetails.svelte";
    export let bookmark;
    export let workspace;

    let dispatch = createEventDispatcher();

    let favIconUrl; 

    let loaded;
    onMount(() => {

        load();
        
    });

    const load = async () => {
        if (bookmark.url) {
            favIconUrl = await getTabFavIconUrl(bookmark);
        }
        loaded = true;
    };


    const onDelete = () => {

        chrome.bookmarks.remove(bookmark.id);

        dispatch('bookmarkDeleted', bookmark);
    };

    const openAllBookmarks = async () => {

        let tabs = [];

        const children = await chrome.bookmarks.getChildren(folder.id);
        for (const bookmark of children) {
            const tab = await chrome.tabs.create({url: bookmark.url}); 
            tabs.push(tab);
        }

        chrome.tabs.group({tabIds: tabs.map((t) = t.id), groupId: workspace.groupId});

        dispatch('bookmarksOpened', tabs);
        
    };

    let showBookmarkDetails;


</script>
 
{#if showBookmarkDetails}
    <ModalContainer on:exit={() => showBookmarkDetails = false}>
        <BookmarkDetails 
            resource={bookmark} 
            isNativeBookmark={true} 
            on:exit={() => showBookmarkDetails = false}
            on:bookmarkUpdated
            on:dataUpdated
        />
    </ModalContainer>
{/if}
{#if loaded}
<div class="bookmark-menu">
    <div class="header">

        <img src={favIconUrl} alt="Fav Icon">
        <input 
            type="text"
            bind:value={bookmark.title}
        />
    </div>

    <MenuItem 
        title="Edit"
        on:click={() => showBookmarkDetails = false}
    />
    <MenuDivider/>
    <MenuItem 
        title="Delete"
        on:click={onDelete}
    />
</div>
{/if}

<style>

    .bookmark-menu {
        padding: 10px;
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        flex-direction: row;
    }


    .header img {
        height: 20px;
        width: 20px;
    }

    .header input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 1px;
        color: white;
        margin-left: 5px;
    }


</style>