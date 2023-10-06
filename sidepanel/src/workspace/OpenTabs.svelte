<script>
    import SectionContainer from "./SectionContainer.svelte";
    import Tab from "../tab/Tab.svelte";

    import newTabIcon from "../icons/add-box.png";
    import saveAllIcon from "../icons/stars.png";
    import closeAllIcon from "../icons/close-all.png";
    import folderIcon from "../icons/folder.png";
    import stashIcon from "../icons/move-to-inbox.png";
    import { createEventDispatcher, onMount } from "svelte";

    let dispatch = createEventDispatcher();
    
    export let isOpen;
    export let group;
    export let workspace;
    export let tabs;
    export let lastUpdatedTab;
    export let selectedTabs = [];
    export let bookmarks;
    export let expanded = false;

    onMount(() => {
        updateHeadingActions();
    });

    let lastSelectionUpdate;
    const onSelectionUpdate = ({ detail }) => {
        const tab = detail;
        const index = selectedTabs.findIndex((t) => t.id == tab.id);
        if (index > -1) {
            selectedTabs.splice(index, 1);
        } else {
            selectedTabs.push(tab);
        }

        if (selectedTabs.length < 2) updateHeadingActions();
        lastSelectionUpdate = Date.now();
    };


    //export let selectedTabs = [];
    

    /* 
        heading options 
        - new tab
        - save all
        - close all 
    */

    let headingActions = [];
    let actions = [
        {
            icon: newTabIcon,
            title: 'New Tab',
            condition: () => selectedTabs.length == 0,
            onClick: async () => {

                const activeTab = (await chrome.tabs.query({active: true, currentWindow: true }))[0];
                const tab = await chrome.tabs.create({index: activeTab.index + 1});
                await chrome.tabs.group({tabIds: tab.id, groupId: activeTab.groupId});
            },
        },
        {
            icon: folderIcon,
            title: 'Add to Folder',
            condition: () => selectedTabs.length > 0,
            onClick: () => {
                dispatch('saveSelectedTabsToFolder');
            }
        },
        {
            icon: stashIcon,
            title: 'Stash All',
            onClick: () => {
                dispatch('stashSelectedTabs');
            }
        },
        {
            icon: saveAllIcon,
            title: 'Save All',
            onClick: () => {
                dispatch('saveSelectedTabs');
            }
        },
        {
            icon: closeAllIcon,
            title: 'Close All',
            onClick: async () => {
                const tabsToClose = selectedTabs.length > 0 ? selectedTabs : await chrome.tabs.query({groupId: workspace.groupId});
                const newTab = await chrome.tabs.create();
                await chrome.tabs.group({tabIds: newTab.id, groupId: workspace.groupId});
                await chrome.tabs.remove(tabsToClose.map((t) => t.id));
            }
        }
    ];

    const updateHeadingActions = () => {
        headingActions = actions.filter((a) => !a.condition || a.condition());
    };


</script>

<SectionContainer 
    title="Open Tabs" 
    {headingActions} 
    bind:expanded
>
    <div class="tabs" slot="main">
        {#each tabs as tab (tab)}
            <Tab 
                {tab} 
                {isOpen}
                {selectedTabs} 
                {lastUpdatedTab} 
                {lastSelectionUpdate} 
                on:updateSelection={onSelectionUpdate} 
                on:toggleTabSaved
            />
        {/each}
    </div>
</SectionContainer>


<style>

</style>