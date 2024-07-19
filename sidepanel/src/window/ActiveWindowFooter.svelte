<script>
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import CircleDivider from "../components/CircleDivider.svelte";
    import FooterContainer from "../components/FooterContainer.svelte";
    import SelectionFooter from "../components/SelectionActions.svelte";

    import checkboxIcon from "../icons/empty-box.png";
    import newTabIcon from "../icons/add-box-filled.png";
    import createGroupIcon from "../icons/new-folder.png";
    
    import CreateGroup from "../group/CreateGroup.svelte";
  import ModalContainer from "../components/ModalContainer.svelte";
  import TabUpdateModal from "../tab/TabUpdateModal.svelte";
  import { Views } from "../view";

    let dispatch = createEventDispatcher();

    export let view;
    export let tabs;
    export let selectedTabs;
    export let lastSelectionUpdate;
    export let groups;
    export let workspaces;

    onMount(() => {
        getGroupCount();
        addListeners();
    });

    onDestroy(() => {
        removeListeners();
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
        showNewTabModal = true;
    };

    const selectAll = async () => {
        const activeTab = (
            await chrome.tabs.query({ active: true, currentWindow: true })
        )[0];
        selectedTabs = tabs.filter((t) => t.windowId == activeTab.windowId);
    };

    let showCreateGroupModal;

    let showNewTabModal;

    let keyListener;
    const addListeners = () => {
        keyListener = document.addEventListener('keydown', onKeyDown);
    };

    const removeListeners = () => {
        document.removeEventListener('keydown', onKeyDown)
    };  

    const onKeyDown = (e) => {

        if (document.activeElement != document.body) return;

        if (e.key == 't') {
            showNewTabModal = true;
        } else if (e.key == 'i') {
            chrome.windows.create({ focused: true, incognito: true });
        } else if (e.key == 'n') {
            chrome.windows.create({ focused: true });
        }
    };


</script>

{#if showCreateGroupModal}
<ModalContainer on:exit={()=> showCreateGroupModal = false}>
    <CreateGroup 
        {groups} 
        {workspaces} 
        {tabs} 
        placeholder="Search or create session..."
        on:exit={() => showCreateGroupModal = false} 
        on:locationSelected={() => view == Views.tabs}
        on:dataUpdated
    />
</ModalContainer>
{/if}

{#if showNewTabModal} 
<ModalContainer on:exit={() => showNewTabModal = false}>
    <TabUpdateModal on:exit={() => showNewTabModal = false}/>
</ModalContainer>
{/if}
{#key lastSelectionUpdate}

    <div class="main-container">
        <div class="action" style="filter:invert(1)" on:mousedown={() => showCreateGroupModal = true}>
            <img src={createGroupIcon} alt="Add Group" />
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
