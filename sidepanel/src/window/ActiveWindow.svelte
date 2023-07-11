<script>
    /*
    Bug:
    - When tab removed from active window either in a group or above a group the group label is in the wrong spot 
*/
    import { onDestroy, onMount } from "svelte";

    import Header from "./header/Header.svelte";
    import Footer from "./ActiveWindowFooter.svelte";
    import Tab from "../tab/Tab.svelte";
    import { slide } from "svelte/transition";
    import GroupLabel from "../tab/GroupLabel.svelte";
    import SearchResults from "../search/SearchResults.svelte";
    import { horizontalSlide } from "../utilities/transitions";

    export let tabs;
    export let groups;
    export let lastUpdatedTab;
    export let lastUpdate;
    export let lastSelectionUpdate;
    export let searchResults = [];
    export let selectedTabs = [];
    export let searchText;

    let dragoverItem;

    let loaded;
    onMount(() => {
        getTabGroupStarts();
        loaded = true;
    });

    $: {
        lastUpdatedTab;
        lastUpdate;
        getTabGroupStarts();
    }

    let groupStarts = {};
    const getTabGroupStarts = () => {
        groupStarts = {};
        tabs.sort((a, b) => a.index - b.index);
        for (const tab of tabs) {
            if (tab.groupId > -1 && groupStarts[tab.groupId] == null) {
                groupStarts[tab.groupId] = tab.index;
            }
        }
    };

    let lastGroupUpdate = Date.now();
    let collapsedGroups = [];
    const onCollapsedToggle = ({ detail }) => {
        const group = detail;
        const index = collapsedGroups.findIndex((id) => group.id == id);
        if (index > -1) {
            collapsedGroups.splice(index, 1);
        } else {
            collapsedGroups.push(group.id);
        }

        console.log(collapsedGroups);
        lastSelectionUpdate = Date.now();
        lastUpdate = Date.now();
        lastGroupUpdate = Date.now();
    };
</script>

{#if loaded}
    {#key lastUpdate}
        {#each tabs as tab (tab)}
            {#if tab.groupId > -1 && groupStarts[tab.groupId] == tab.index && groups[tab.groupId]}
                <GroupLabel
                    group={groups[tab.groupId]}
                    {lastGroupUpdate}
                    isCollapsed={collapsedGroups.includes(tab.groupId)}
                    tabs={tabs.filter((t) => t.groupId == tab.groupId)}
                />
            {/if}
            {#if !groups[tab.groupId]?.collapsed}
                <Tab
                    {tab}
                    group={groups[tab.groupId]}
                    {selectedTabs}
                    {lastSelectionUpdate}
                    {dragoverItem}
                    on:updateSelection
                />
            {/if}
        {/each}
    {/key}
{/if}

<style>
</style>
