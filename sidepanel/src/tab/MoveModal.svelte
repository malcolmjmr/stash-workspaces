<script>
    import { onMount } from "svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";

    export let groups;
    export let workspaces;
    export let selectedTabs;

    let loaded;
    onMount(() => {
        load();
    });

    let mainTab;
    const load = () => {
        mainTab = selectedTabs[0];
        loaded = true;
    };

    const onWorkspaceClicked = (workspace) => {
        
    };

</script>

{#if loaded}
    <div class="move-modal">
        <div class="heading">
            <div class="cancel button">
                Cancel
            </div>
            <div class="title">
                Move Tabs
            </div>
        </div>
        <div class="selected-items">
            <img src={mainTab.favIconUrl} alt=""/> 
            <div class="container">
                <div class="title">
                    {mainTab.title}
                </div>
                <div class="selection count">
                    {selectedTabs.length} tabs selected
                </div>
            </div>
        </div>
        <div class="move-options">
            <div class="list-item">
                Move to New Window
            </div>
            <div class="list-item">
                Move to New Space
            </div>
            {#each workspaces as workspace}
                <WorkspaceListItem {workspace} onClick={onWorkspaceClicked}/> 
            {/each}
        </div>
    </div>
{/if}