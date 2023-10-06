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

    export let groups;
    export let workspaces;
    export let tabCount;
    export let resourceCount;
    export let folderCount;

    onMount(() => {
        
    });

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
        showCreateGroupModal = true;
    };

</script>

{#if showCreateGroupModal}
<ModalContainer on:exit={()=> showCreateGroupModal = false}>
    <CreateGroup {groups} {workspaces}/>
</ModalContainer>
{/if}

    <div class="main-container">
        <div class="action" on:mousedown={createNewGroup}>
            <img src={createGroupIcon} alt="Select All" />
        </div>
        <div class="counts">
            <div class="container">
                {#if tabCount > 0}
                    <div class="count">
                        {tabCount}
                        <span>
                            Tab{tabCount > 1 ? "s" : ""}
                        </span>
                    </div>
                    <CircleDivider />
                {/if}
                <div class="count">
                    {resourceCount}
                    <span>
                        Resource{resourceCount > 1 ? "s" : ""}
                    </span>
                </div>
            </div>
        </div>
        <div class="action" on:mousedown={createNewTab}>
            <img src={newTabIcon} alt="Create new tab" />
        </div>
    </div>


<style>
    .main-container {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 30px;
        z-index: 100;
        color: white;
        justify-content: space-between;
        background-color: black;
        border-top: 1px solid #333333;
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
