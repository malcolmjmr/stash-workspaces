<script>
    import { createEventDispatcher } from "svelte";
    import { actions } from "./actions";
    import MenuItem from "./MenuItem.svelte";
    import { slide } from "svelte/transition";

    let dispatch = createEventDispatcher();

    export let tab;

    const moveTabToNewWindow = async () => {
        //await chrome.windows.
    };
</script>

<div class="context-menu" in:slide out:slide>
    <div class="divider" />

    {#if tab.groupId > -1}
        <MenuItem title="Save Tab to Group" />
    {:else}
        <MenuItem title="Save Tab to Window" />
    {/if}
    <div class="divider" />
    <MenuItem title="Move Tab to New Window" on:mouseup={moveTabToNewWindow} />
    {#if tab.groupId > -1}
        <MenuItem title="Move Group to New Window" />
    {/if}

    {#if tab.groupId > -1}
        <div class="divider" />
        <MenuItem title="Close Tab" />
        <MenuItem title="Close Group" />
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
