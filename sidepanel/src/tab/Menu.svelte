<script>
    /*
        To add:
            - Move to top
            - Move to bottom
    */

    import { createEventDispatcher } from "svelte";
    import { actions } from "./actions";
    import MenuItem from "./MenuItem.svelte";
    import { slide } from "svelte/transition";
    import copyIcon from "../icons/copy.png";

    let dispatch = createEventDispatcher();

    export let user;
    export let tab;
    export let workspace;
   
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
        await chrome.tabGroups.move({ windowId: window.id });
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
</script>

<div class="context-menu" in:slide out:slide>
    <!--
    {#if tab.groupId > -1}
        <MenuItem title="Save Tab to Group" />
    {:else}
        <MenuItem title="Save Tab to Window" />
    {/if}
    -->
    <div class="url-field">
        <img src={copyIcon} style='opacity: {linkCopied ? '1' : '.8'}' alt="Copy Link" on:mousedown={copyLink} />
        <input
            type="text"
            bind:value={tab.url}
            on:keydown={onKeyDownInUrlField}
        />
    </div>
    <div class="divider" />

    <MenuItem title={tab.pinned ? 'Unpin Tab' : 'Pin Tab'} on:mouseup={pinTab} />
    <MenuItem title="Reload" on:mouseup={reloadTab} />
    <MenuItem title="Duplicate" on:mouseup={duplicateTab} />

    <div class="divider" />
    <MenuItem title="Move Tab to Pop Up Window" on:mouseup={moveTabToPopup} />
    <MenuItem title="Move Tab to New Window" on:mouseup={moveTabToNewWindow} />
    {#if tab.groupId > -1}
        <MenuItem
            title="Move Group to New Window"
            on:mousedown={moveGroupToNewWindow}
        />
    {/if}
    <div class="divider" />
    <MenuItem title="Close Tab" on:mousedown={closeTab} />
    {#if tab.groupId > -1}
        <MenuItem title="Close Group" on:mousedown={closeTabGroup} />
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
