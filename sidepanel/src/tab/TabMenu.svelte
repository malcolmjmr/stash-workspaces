<script>
    /*
        To add:
            - Move to top
            - Move to bottom
    */

    import { createEventDispatcher, onMount } from "svelte";
    import { actions } from "./actions";
    import MenuItem from "./MenuItem.svelte";
    import { slide } from "svelte/transition";
    import copyIcon from "../icons/copy.png";

    import MoveResource from "./MoveResource.svelte";
    import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";

    let dispatch = createEventDispatcher();

    export let user;
    export let tab;
    export let workspace;
    export let workspaces;
    export let isOpen = true;

    const TabMenuView = {
        bookmark: 'bookmark',
        move: 'move',
    }

    let view = null;

    let isSaved;

    onMount(() => {
  
    });

    
    const moveTabToNewWindow = async () => {
        await chrome.windows.create({ tabId: tab.id, focused: true });
    };

    const moveTabToPopup = async () => {
        chrome.windows.create({ tabId: tab.id, type: "popup", focused: true });
        // chrome.windows.create({type: 'popup', url: tab.url});
        // chrome.tabs.remove(tab.id);
    };

    const closeTabGroup = async () => {
        chrome.tabs.remove(
            (await chrome.tabs.query({ groupId: tab.groupId })).map((t) => t.id)
        );
    };

    const closeTab = () => {
        chrome.tabs.remove(tab.id);
    };

    const moveGroupToNewWindow = async () => {
        const window = await chrome.windows.create();
        await chrome.tabGroups.move(tab.groupId, { windowId: window.id });
        // remove new tab
        const newTab = await chrome.tabs.query({
            windowId: window,
            url: "chrome://newtab/",
        });
        if (newTab) await chrome.tabs.remove(newTab.id);
    };

    const reloadTab = () => {
        chrome.tabs.reload(tab.id);
    };

    const pinTab = () => {
        if (tab.groupId == -1) {
            chrome.tabs.update(tab.id, { pinned: !tab.pinned });
        } else {
            dispatch('pinTab', tab);
        }
        
    };
    let linkCopied;
    const copyLink = () => {
        navigator.clipboard.writeText(tab.url);
        linkCopied = true;
    };

    const onKeyDownInUrlField = (e) => {
        if (e.key == "Enter") {
            chrome.tabs.update(tab.id, { url: "https://" + tab.url });
        }
    };

    const duplicateTab = () => {
        chrome.tabs.create({ url: tab.url, index: tab.index + 1 });
    };
    
    
    const openMoveModal = () => {
        view = TabMenuView.move;
    }

    const onEditTabBookmarkClicked = () => {
        dispatch('editBookmark', tab);
    }
</script>

<div class="context-menu">
    <!--
    {#if tab.groupId > -1}
        <MenuItem title="Save Tab to Group" />
    {:else}
        <MenuItem title="Save Tab to Window" />
    {/if}
    -->
    {#if view == null}
    <div class="url-field">
        <img src={copyIcon} style='opacity: {linkCopied ? '1' : '.8'}' alt="Copy Link" on:mousedown={copyLink} />
        <input
            type="text"
            bind:value={tab.url}
            on:keydown={onKeyDownInUrlField}
        />
    </div>
    <div class="divider" />
    {#if isOpen}
        <MenuItem title={tab.pinned ? 'Unpin' : 'Pin'} on:click={pinTab} />
        <MenuItem title="Reload" on:click={reloadTab} />
        <MenuItem title="Duplicate" on:click={duplicateTab} />
        <MenuItem 
            title={tab.bookmarks || tab.resource ? 'Edit Bookmark': 'Save'} 
            on:click={onEditTabBookmarkClicked} 
        />

        <div class="divider" />
        
        <MenuItem title="Move to Pop Up Window" on:click={moveTabToPopup} />
        <MenuItem title="Move to New Window" on:click={moveTabToNewWindow} />
        {#if tab.groupId > -1}
            <MenuItem
                title="Move Group to New Window"
                on:click={moveGroupToNewWindow}
            />
        {/if}
        <MenuItem title="Move to Space" on:click={openMoveModal} />
        <div class="divider" />
        <MenuItem title="Close" on:click={closeTab} />
        {#if tab.groupId > -1}
            <MenuItem title="Close Group" on:click={closeTabGroup} />
        {/if}
    {/if}
    {:else if view == TabMenuView.bookmark}
        <BookmarkDetails resource={tab} {workspace} {workspaces} isOpen={true} />
    {:else if view == TabMenuView.move} 
        <MoveResource resource={tab} {workspace} {workspaces} isOpen={true} />
    {/if}
</div>

<style>
    .context-menu {
        display: flex;
        flex-direction: column;
        width: 100%;

    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: #999999;
        margin: 5px 0px;
    }

    .url-field {
        width: calc(100% - 10px);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        margin: 5px 0px;
        background-color: #333333;
        border-radius: 5px;
    }

    .url-field input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 12px;
        color: white;
        background-color: transparent;
    }

    .url-field img {
        filter: invert(1);
        height: 16px;
        width: 16px;
        margin-right: 5px;
    }
</style>
