<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { Views } from "../view";
  import ModalContainer from "./ModalContainer.svelte";
  import MoveModal from "../tab/MoveModal.svelte";

    /*
        group
        save
        close
        copy
        move
        
    */

    export let groups;
    export let workspaces;
    export let lastSelectionUpdate;
    export let selectedTabs;
    export let view;

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
        // set title to search query if applicable 
        // await chrome.tabGroups.update(groupId, {
        //     title: selectedTabs[0].title,
        // });
        selectedTabs = [];
    };

    let showMoveModal;

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

    const saveTabs = async () => {
        dispatch('saveSelectedTabs');
    };

    const stashTabs = async () => {
        // get context
        // create bookmark folder if it doesn't exist
        // ask user for bookmark permission if they haven't provided it? 
        // if user 
        //closeTabs();
        dispatch('stashSelectedTabs');
    };

    const onTabsMoved = async () => {
        showMoveModal = false;
        selectedTabs = [];
    };
</script>


{#if showMoveModal}
    <ModalContainer on:exit={() => showMoveModal = false}>
        <MoveModal {selectedTabs} {workspaces} {groups} on:tabsMoved={onTabsMoved}/>
    </ModalContainer>
    
{/if}

<div class="actions">
    {#if groupCount != 1}
        <div class="action" on:mousedown={groupTabs}>Group</div>
    {/if}

    {#if view == Views.workspace}
        <div class="action" on:mousedown={saveTabs}>
            Save
        </div>
        <div class="action" on:mousedown={stashTabs}>
            Stash
        </div>
    {:else}
        <div class="action" on:mousedown={() => showMoveModal = true}>
            Move
        </div>
    {/if}
    

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
