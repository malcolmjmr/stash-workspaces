<script>
    import { createEventDispatcher, onMount } from "svelte";
    import newTabIcon from "../icons/add-box.png";
    import createGroupIcon from "../icons/create-folder.png";
    
    import CreateGroup from "../group/CreateGroup.svelte";
  import ModalContainer from "../components/ModalContainer.svelte";


    export let view;
    export let tabs;
    export let selectedTabs;
    export let lastSelectionUpdate;
    export let workspaces;
    export let groups;

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
        const newTab = await chrome.tabs.create({ index: activeTab.index + 1 });

        if (activeTab.groupId > -1) {
            await chrome.tabs.group({tabIds: newTab.id, groupId: activeTab.groupId });
        }
        
        return  
    };


    let showCreateGroupModal;
    const createNewGroup = async () => {
        // if in home view create space?
        const windowTabs = await chrome.tabs.query({currentWindow: true});
        const windowHasGroup = windowTabs.filter((t) => t.groupId > -1).length > 0;
        
        if (windowHasGroup) {
            showCreateGroupModal = true;
        } else {
            let tabIds = windowTabs.map((t) => t.id);
            await chrome.tabs.update(tabIds[0], {active:true});
            const group = await chrome.tabs.group({tabIds});
        }
    };

</script>

{#if showCreateGroupModal}
<ModalContainer on:exit={()=> showCreateGroupModal = false}>
    <CreateGroup {workspaces} {groups}/>
</ModalContainer>
{/if}
{#key lastSelectionUpdate}

    <div class="main-container">
        <div class="action" on:mousedown={createNewGroup}>
            <img src={createGroupIcon} alt="Create New Group" />
        </div>
        
        <div class="action" on:mousedown={createNewTab}>
            <img src={newTabIcon} alt="Create New Tab" />
        </div>
    </div>
{/key}

<style>
    .main-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 100;
        color: white;
        justify-content: space-between;
    }

    .action img {
        filter: invert(1);
        height: 22px;
        width: 22px;
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