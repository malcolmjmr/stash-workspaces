<script>
    import { createEventDispatcher, onMount } from "svelte";
    import CircleDivider from "../components/CircleDivider.svelte";
    import FooterContainer from "../components/FooterContainer.svelte";
    import SelectionFooter from "../components/SelectionActions.svelte";

    let dispatch = createEventDispatcher();

    export let tabs;
    export let selectedTabs;
    export let lastSelectionUpdate;
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
</script>

{#key lastSelectionUpdate}
    <FooterContainer>
        <div class="main-container">
            {#if selectedTabs.length > 0}
                <SelectionFooter {selectedTabs} {lastSelectionUpdate} />
            {:else}
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
            {/if}
        </div>
    </FooterContainer>
{/key}

<style>
    .main-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: calc(100% - 20px);
        padding: 0px 10px;
        height: 100%;
        z-index: 100;
        color: white;
    }

    .counts {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        font-size: 14px;
    }

    .counts .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
