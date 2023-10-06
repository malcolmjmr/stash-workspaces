<script>

    import { createEventDispatcher, onDestroy, onMount } from "svelte";

    import Header from "./header/Header.svelte";
    import Footer from "./ActiveWindowFooter.svelte";
    import Tab from "../tab/Tab.svelte";
    import { slide } from "svelte/transition";
    import GroupLabel from "../group/GroupLabel.svelte";
    import SearchResults from "../search/SearchResults.svelte";
    import { horizontalSlide } from "../utilities/transitions";
  import { setDoc } from "firebase/firestore";
  import { createId, getContextData, getTabInfo, saveContextData } from "../utilities/chrome";

    let dispatch = createEventDispatcher();

    export let user;
    export let db;
    export let tabs;
    export let groups;
    export let workspaces;
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

        checkIndexes();
        getTabGroupStarts();
    }

    let groupStarts = {};
    let groupEnds = {};
    const getTabGroupStarts = () => {
        groupStarts = {};
        groupEnds = {};
        tabs.sort((a, b) => a.index - b.index);
        for (const tab of tabs) {
            if (tab.groupId > -1) {
                if (groupStarts[tab.groupId] == null) {
                    groupStarts[tab.groupId] = tab.index;
                }
                groupEnds[tab.groupId] = tab.index;
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

        lastSelectionUpdate = Date.now();
        lastUpdate = Date.now();
        lastGroupUpdate = Date.now();
    };

    const checkIndexes = () => {
        // Check for tabs that have been duplicated and get tab group start and end index values

        tabs.sort((a, b) => a.index - b.index);
        let indexes = [];
        let duplicateIndexes = [];
        groupStarts = {};
        groupEnds = {};

        for (const tab of tabs) {
            if (!indexes.includes(tab.index)) {
                indexes.push(tab.index);
            } else {
                duplicateIndexes.push(tab.index);
                dispatch('foundDuplicates');
            }
            if (tab.groupId > -1 && groupStarts[tab.groupId] == null) {
                groupStarts[tab.groupId] = tab.index;
            } else if (tab.groupId > -1) {
                groupEnds[tab.groupId] = tab.index;
            }
        }
    }; 

    const onSaveIconClicked = async ({detail}) => {

        const tab = detail;
        const group = groups[tab.groupId];
        const index = workspaces.findIndex((w) => w.id == group.workspaceId);
        if (index > -1) {
            const now = Date.now();
            const workspace = workspaces[index];
            if (user) {
                let resource = tab.resource;
                if (user.settings?.saveLocally) {
                    const workspaceData = await getContextData(workspace.id);
                    if (!workspaceData.resources) workspaceData.resources = {};
                    resource = workspaceData.resources[tab.url];
                    if (resource) {
                        resource.deleted = now;
                    } else {
                        resource = {
                            ...getTabInfo(tab),
                            id: createId(), 
                        }
                    }
                    resource.updated = now;
                    saveContextData(workspace, workspaceData);
                }

                if (user.settings?.saveToCloud) {
                    if (resource) {
                        resource.deleted = true;
                    } else {
                        resource = {
                            ...getTabInfo(tab),
                            id: createId(), 
                        }
                    }
                    resource.updated = now;
                }

                if (user.settings?.saveToBookmarks) {
                    if (tab.bookmark) {

                    } else {

                    }
                }

                // update tab 
                
            } else {
                
            }
        } 
    }
    
    
</script>

{#if loaded}
    {#key lastUpdate}
        <div class="padding"></div>
        {#each tabs as tab (tab.id + '' + tab.index + '' + tab.updated)}
            {#if tab.groupId > -1 && groupStarts[tab.groupId] == tab.index && groups[tab.groupId]}
                <GroupLabel
                    group={groups[tab.groupId]}
                    {lastGroupUpdate}
                    {lastSelectionUpdate}
                    {lastUpdate}
                    {lastUpdatedTab}
                    {user}
                    {db}
                    isCollapsed={collapsedGroups.includes(tab.groupId)}
                    tabs={tabs.filter((t) => t.groupId == tab.groupId)}
                    on:groupSaved
                    on:showWorkspaceView
                />
            {/if}
            {#if !groups[tab.groupId]?.collapsed}
                <Tab
                    {db}
                    {tab}
                    {user}
                    group={groups[tab.groupId]}
                    {selectedTabs}
                    {lastUpdatedTab}
                    {lastSelectionUpdate}
                    {dragoverItem}
                    {workspaces}
                    isStartingTab={tab.groupId > -1 && groupStarts[tab.groupId] == tab.index}
                    isEndingTab={tab.groupId > -1 && groupEnds[tab.groupId] == tab.index}
                    on:updateSelection
                    on:saveIconClicked={onSaveIconClicked}
                />
            {/if}
        {/each}
    {/key}
    
{/if}

<style>
    .padding {
        height: 5px;
    }
</style>
