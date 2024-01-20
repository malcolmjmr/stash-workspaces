<script>
    import { createEventDispatcher, onMount } from "svelte";
    import CircleDivider from "../components/CircleDivider.svelte";
    import FooterContainer from "../components/FooterContainer.svelte";
    import SelectionFooter from "../components/SelectionActions.svelte";

    import checkboxIcon from "../icons/empty-box.png";
    import newTabIcon from "../icons/add-box.png";
    import createGroupIcon from "../icons/create-folder.png";
    
    import CreateGroup from "../group/CreateGroup.svelte";
  import ModalContainer from "../components/ModalContainer.svelte";

    let dispatch = createEventDispatcher();

    export let view;
    export let tabs;
    export let selectedTabs;
    export let lastSelectionUpdate;
    export let groups;
    export let workspaces;

    onMount(() => {
        getGroupCount();
    });

    let groupCount = 0;

    const getGroupCount = () => {
        let groupIds = [];
        for (const tab of tabs) {
            if (tab.groupId > -1 && !groupIds.includes(tab.groupId)) {
                groupIds.push(tab.groupId);
            }
        }
        groupCount = groupIds.length;
    };

    const createNewTab = async () => {
        const activeTab = (
            await chrome.tabs.query({ active: true, currentWindow: true })
        )[0];
        
        let newTab;
        if (activeTab.groupId > -1) {
            const group = await chrome.tabGroups.get(activeTab.groupId); 
            console.log('creating new tab');
            console.log(group);
            if (!group.collapsed) {
                newTab = await chrome.tabs.create({ index: activeTab.index + 1 });
                await chrome.tabs.group({tabIds: newTab.id, groupId: activeTab.groupId });
            } else {
                newTab = await chrome.tabs.create({});
            }
        }

        if (!newTab) {
            newTab = await chrome.tabs.create({ index: activeTab.index + 1 });
        }


        
    };

    const selectAll = async () => {
        const activeTab = (
            await chrome.tabs.query({ active: true, currentWindow: true })
        )[0];
        selectedTabs = tabs.filter((t) => t.windowId == activeTab.windowId);
    };

    let showCreateGroupModal;


</script>

{#if showCreateGroupModal}
<ModalContainer on:exit={()=> showCreateGroupModal = false}>
    <CreateGroup {groups} {workspaces} {tabs} on:exit={() => showCreateGroupModal = false}/>
</ModalContainer>
{/if}
{#key lastSelectionUpdate}

    <div class="main-container">
        <div class="action" on:mousedown={() => showCreateGroupModal = true}>
            <img src={createGroupIcon} alt="Select All" />
        </div>
        <div class="counts">
            <div class="container">
                {#if groupCount > 0}
                    <div class="count">
                        {groupCount}
                        <span>
                            Group{groupCount > 1 ? "s" : ""}
                        </span>
                    </div>
                    <CircleDivider />
                {/if}
                <div class="count">
                    {tabs.length}
                    <span>
                        Tab{tabs.length > 1 ? "s" : ""}
                    </span>
                </div>
            </div>
        </div>
        <div class="action" on:mousedown={createNewTab}>
            <img src={newTabIcon} alt="Create new tab" />
        </div>
    </div>
{/key}

<style>
    .main-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 5px;
        width: calc(100% - 10px);
        height: 100%;
        z-index: 100;
        color: white;
        justify-content: space-between;
    }

    .counts {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        font-size: 14px;
        opacity: 0.8;
    }

    .counts .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .action img {
        filter: invert(1);
        height: 24px;
        width: 24px;
    }

    .action {
        opacity: 0.7;
        padding: 0px 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .action:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>
