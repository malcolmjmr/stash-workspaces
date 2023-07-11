<script>
    import { createEventDispatcher, onMount } from "svelte";

    /*
        group
        save
        close
        copy
        move
        
    */

    export let lastSelectionUpdate;
    export let selectedTabs;

    let dispatch = createEventDispatcher();
    let groupCount = 0;
    onMount(() => {
        getGroupCount();
    });

    $: {
        lastSelectionUpdate;
        getGroupCount();
    }

    const getGroupCount = () => {
        let groupIds = [];
        for (const tab of selectedTabs) {
            if (tab.groupId > -1 && !groupIds.includes(tab.groupId)) {
                groupIds.push(tab.groupId);
            }
        }
        groupCount = groupIds.length;
    };

    const groupTabs = async () => {
        const groupId = await chrome.tabs.group({
            tabIds: selectedTabs.map((t) => t.id),
        });
        await chrome.tabGroups.update(groupId, {
            title: selectedTabs[0].title,
        });
        selectedTabs = [];
    };

    const moveTabsToNewWindow = async () => {
        const firstTab = selectedTabs.shift();
        const window = await chrome.windows.create({
            tabId: firstTab.id,
            focused: true,
        });
        await chrome.tabs.move(
            selectedTabs.map((t) => t.id),
            { windowId: window.id, index: 0 }
        );
        selectedTabs = [];
    };

    const closeTabs = async () => {
        chrome.tabs.remove(selectedTabs.map((t) => t.id));
        selectedTabs = [];
    };
</script>

<div class="actions">
    {#if groupCount != 1}
        <div class="action" on:mousedown={groupTabs}>Group</div>
    {/if}

    <div class="action" on:mousedown={moveTabsToNewWindow}>
        Move to New Window
    </div>

    <div class="action" on:mousedown={closeTabs}>Close</div>
</div>

<style>
    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 6px);
        margin: 0px 3px;
        z-index: 3;
    }

    .action {
        opacity: 0.7;
        font-size: 14px;
    }

    .action:hover {
        cursor: pointer;
        opacity: 1;
    }
</style>
