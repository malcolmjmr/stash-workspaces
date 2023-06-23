<script>
    import { createEventDispatcher } from "svelte";
    import { actions } from "./actions";
    import MenuItem from "./MenuItem.svelte";
    import { slide } from "svelte/transition";

    let dispatch = createEventDispatcher();

    export let tab;

    const moveTabToNewWindow = async () => {
        await chrome.windows.create({ tabId: tab.id, focused: true });
    };

    const moveTabToPopup = async () => {
        chrome.windows.create({ tabId: tab.id, type: "popup", focused: true });
        // chrome.windows.create({type: 'popup', url: tab.url});
        // chrome.tabs.remove(tab.id);
    };

    const closeTabGroup = () => {
        chrome.tabGroups.remove(tab.groupId);
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
        chrome.tabs.pin(tab.id);
    };
</script>

<div class="context-menu" in:slide out:slide>
    <div class="divider" />

    <!--
    {#if tab.groupId > -1}
        <MenuItem title="Save Tab to Group" />
    {:else}
        <MenuItem title="Save Tab to Window" />
    {/if}
    -->

    <MenuItem title="Reload" on:mouseup={reloadTab} />
    <MenuItem title="Pin" on:mouseup={pinTab} />

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
</style>
