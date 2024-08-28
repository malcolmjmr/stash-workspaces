<script>
    import { createEventDispatcher, onMount } from "svelte";
    import newTabIcon from "../icons/add-box-filled.png";
    import createGroupIcon from "../icons/new-folder.png";
    import CircleDivider from "../components/CircleDivider.svelte";
    
    import CreateGroup from "../group/CreateGroup.svelte";
  import ModalContainer from "../components/ModalContainer.svelte";
  import { numberWithCommas } from "../utilities/helpers";
  import { Views } from "../view";


    export let view;
    export let tabs;
    export let selectedTabs;
    export let lastSelectionUpdate;
    export let workspaces;
    export let groups;

    onMount(() => {
        getGroupCount();
        getSessionCount();
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

    let tabCount = 0;
    let sessionCount = 0;
    const getSessionCount = () => {
        sessionCount = workspaces.length;
        let tempTabCount = 0;
        for (const space of workspaces) {
            tempTabCount += (space.tabs?.length ?? 0);
        }
        tabCount = tempTabCount;
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

    const onSessionOpened = () => {
        setTimeout(() => { 
            view == Views.tabs;
        }, 1500)
        
    };

</script>

{#if showCreateGroupModal}
<ModalContainer on:exit={() => showCreateGroupModal = false}>
    <CreateGroup 
        {workspaces} 
        {groups} 
        {view} 
        on:exit={() => showCreateGroupModal = false} 
        placeholder={'Search or create session'} 
        on:dataUpdated
        on:locationSelected={onSessionOpened}
        />
</ModalContainer>
{/if}
{#key lastSelectionUpdate}

    <div class="main-container">
        <div class="action" style="filter:invert(1);" on:mousedown={() => showCreateGroupModal = true}>
            <img src={createGroupIcon} alt="Create New Group" />
        </div>
        <div class="counts">
            <div class="container">
                {#if sessionCount > 0}
                    <div class="count">
                        {sessionCount}
                        <span>
                            Session{sessionCount > 1 ? "s" : ""}
                        </span>
                    </div>
                    <CircleDivider />
                {/if}
                {#if tabCount > 0}
                <div class="count">
                    {numberWithCommas(tabCount)}
                    <span>
                        Tab{tabCount > 1 ? "s" : ""}
                    </span>
                </div>
                {/if}
            </div>
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
        padding: 0px 5px;
        width: calc(100% - 10px);
        height: 25px;
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