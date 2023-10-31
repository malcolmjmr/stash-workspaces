<script>
    import { createEventDispatcher, onMount } from "svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
  import SearchBox from "../components/SearchBox.svelte";
  import { get, getTabInfo, saveContext, tryToGetTabGroup } from "../utilities/chrome";
    import createWindowIcon from "../icons/new-window.png";
    import createFolderIcon from "../icons/new-folder.png";
  import { allWorkspaces } from "../stores";

    export let groups;
    export let selectedTabs;

    let dispatch = createEventDispatcher();

    let loaded;
    onMount(() => {
        load();
    });

    let mainTab;
    const load = () => {
        mainTab = selectedTabs[0];
        updateVisibleWorkspaces();
        loaded = true;
    };

    let searchText = '';
    let visibleSpaces = []

    const onWorkspaceClicked = async (workspace) => {
        const openGroup = await tryToGetTabGroup(workspace.groupId);
        if (openGroup) {
            await chrome.tabs.group({tabIds: selectedTabs.map((t) => t.id)});
        } else {
            workspace.tabs.push(selectedTabs.map(getTabInfo));
            await saveContext(workspace);
        }
    };

    const moveToNewSpace = async () => {
        await moveToNewWindow();
        const group = await chrome.tabs.group({ 
            tabIds: selectedTabs.map((t) => t.id) 
        });
    };

    const moveToNewWindow = async () => {
        const activeTab = selectedTabs.find((t) => t.active);
        const window = await chrome.windows.create({focused: true});
        const newTab = (await chrome.tabs.query({windowId: window.id}))[0];
        const tabIds = selectedTabs.map((t) => t.id);
        await chrome.tabs.move(tabIds, { windowId: window.id});
        await chrome.tabs.remove(newTab.id);
    };

    $: {
        searchText;
        updateVisibleWorkspaces();
    }

    const updateVisibleWorkspaces = () => {
        const text = searchText.toLowerCase();
        visibleSpaces = $allWorkspaces.filter((w) => !w.deleted && w.title?.includes(text));
        visibleSpaces.sort((a, b) => b.updated - a.updated);
    };

</script>

{#if loaded}
    <div class="move-modal">
        <div class="header">
            <div class="cancel button end" on:mousedown={() => dispatch('exit')}>
                Cancel
            </div>
            <div class="title">
                Move Tab{selectedTabs.length > 1 ? 's' : ''}
            </div>
            <div class="end">

            </div>
        </div>
        <div class="selected-items">
            <img src={mainTab.favIconUrl} alt=""/> 
            <div class="container">
                <div class="title">
                    {mainTab.title}
                </div>
                {#if selectedTabs.length > 1}
                <div class="selection count">
                    {selectedTabs.length} tabs selected
                </div>
                {/if}
            </div>
        </div>
        <div class="container">
            <div class="move-options">
                <div class="list">
                    {#if searchText.length == 0}
                        <div class="list-item" on:mousedown={moveToNewWindow}>
                            <img src={createWindowIcon} alt={moveToNewWindow} />
                            <span>New Window</span>
                        </div>
                    {/if}
                    <div class="list-item" on:mousedown={moveToNewSpace}>
                        <img src={createFolderIcon} alt="New Space" />
                        <span>New Space</span>
                    </div>
                </div>
                <div class="search-container">
                    <SearchBox bind:searchText/>
                </div>
                <div class="list">
                    {#each visibleSpaces as workspace}
                        <WorkspaceListItem {workspace} onClick={onWorkspaceClicked}/> 
                    {/each}
                </div>
            </div>
        </div>
        
    </div>
{/if}

<style>
    .move-modal {
        height: 300px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        overflow: hidden;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .header .title {
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    .header .end {
        width: 70px;

    }

    .header .cancel {
        color: #ffbf00;
    }

    .button:hover {
        cursor:pointer;
    }

    .move-modal .container {
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    .search-container {
        height: 25px;
        margin: 10px 0px;
    }

    .selected-items {
        display: flex;
        flex-direction: row;
        align-items: start;
        padding-bottom: 8px;
    }

    .selected-items img {
        height: 30px;
        width: 30px;
        margin-right: 8px;
    }

    .selected-items .container {
        display: flex;
        flex-direction: column;
    }

    .selected-items .title {
        font-size: 14px;
        font-weight: 400;
        max-lines: 2;
        text-overflow: ellipsis;
    }

    .selected-items .count {

    }

    .move-options {
        display: flex;
        flex-direction: column;
    }

    .move-options .list {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #333333;
        margin-bottom: 10px;
    }

    .list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 10px;
        font-weight: 400;
        height: 30px;
        color: #ffbf00;
    }

    .list-item img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        margin-right: 5px;
    }

    .list-item:hover {
        cursor: pointer;
    }




</style>