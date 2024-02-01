<script>
    import { createEventDispatcher } from "svelte";
import MenuItem from "../components/MenuItem.svelte";
    import folderIcon from "../icons/folder.png";
  import MenuDivider from "../components/MenuDivider.svelte";
    export let folder;
    export let workspace;

    export let title = null;
    export let action;
    export let icon;
    export let onClick = null;
    export let onDoubleClick = null;
    export let context = null;
    export let tab = null;
    export let canToggle = false;

    let dispatch = createEventDispatcher();


    const onDelete = () => {

        chrome.bookmarks.remove(folder.id);

        dispatch('bookmarkDeleted', folder);
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

</script>

<div class="bookmark-folder-menu">
    <div class="header">
        <img src={folderIcon} alt="Folder Icon">
        <input 
            type="text"
            bind:value={folder.title}
        />
    </div>
    <MenuItem 
        title="Open all bookmarks"
        on:click={openAllBookmarks}
    />
    <MenuDivider/>
    <MenuItem 
        title="Delete"
        on:click={onDelete}
    />
</div>

<style>

    .bookmark-folder-menu {
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