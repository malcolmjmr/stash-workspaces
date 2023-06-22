<script>
    import { createEventDispatcher, onMount } from "svelte";

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
</script>

<div class="actions">
    {#if groupCount != 1}
        <div class="action" on:mouseup={() => dispatch("groupTabs")}>Group</div>
    {/if}

    <div class="action" on:mouseup={() => dispatch("moveTabs")}>
        Move to New Window
    </div>

    <div class="action" on:mouseup={() => dispatch("closeTabs")}>Close</div>
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
