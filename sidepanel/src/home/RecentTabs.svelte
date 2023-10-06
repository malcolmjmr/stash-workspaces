<script>
  import { onMount } from "svelte";

    export let recentTabs;
    export let groups;

    import webIcon from "../icons/web.png"; // need to replace with favicon api (look at tab component);
    import TabIcon from "../tab/TabIcon.svelte";
    import { colorMap } from "../utilities/colors";

    let closeWindowInFocus;

    let activeTab;
    let activeGroup;
    let showFavIcon;

    const onShowTabDetails = ({ detail }) => {
        activeTab = detail;
        activeGroup = groups[activeTab.groupId];
    };

    const onTabIconClicked = () => {
        // navigate to tab;
    };

    onMount(() => {
        console.log('building recent tabs');
        console.log(recentTabs);
    });


</script>

{#if recentTabs.length > 0}
    <div class="recent-tabs">
        <div class="top-container">
            {#if activeTab}
            <div class="active-tab">
                <div class="tab-details">
                    <img
                        src={activeTab.favIconUrl ?? webIcon}
                        alt={activeTab.url}
                        style={activeTab.favIconUrl ? "" : "filter: invert(1);"}
                    />
                    <span>{activeTab.title}</span
                    >
                </div>
            </div>
            {/if}
            {#if activeGroup }
            <div class="active-group-container">
                <div
                    class="active-group"
                    style="background-color: {colorMap[activeGroup.color]}"
                >
                    <div class="title">
                        {activeGroup.title.length > 0 ? activeGroup.title : activeGroup.color}
                    </div>
                </div>
                <div class="spacer" />
            </div>
            {/if}
        </div>
        <div class="bottom-container">
            
            <div class="tab-icons">
                {#each recentTabs as tab, i}
                    <div class="tab-padding">
                            <TabIcon
                            {tab}
                            group={groups[tab.groupId]}
                            isActive={i == 0}
                            isClickable={true}
                            on:showTabDetails={onShowTabDetails}
                            on:tabIconClicked={onTabIconClicked}
                            
                        />
                    </div>
                    
                {/each}
            </div>
        </div>
    </div>    
{/if}

<style>

    .recent-tabs {
        height: 70px;
        display: flex;
        flex-direction: column;
    }
    .bottom-container {
        height: 30px;
        border-radius: 8px;
        background-color: #222222;
    }

    .tab-icons {
        display: flex;
        flex-direction: row;
        padding: 5px;
        overflow-x: scroll;
    }

    .active-group {
        border-radius: 8px;
        height: 20px;
        color: black;
        font-size: 14px;
        text-overflow: ellipsis;
    }

    .active-tab .tab-details {
        display: flex;
        flex-direction: row;
    }

    .tab-details img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }

    .tab-details span {
        font-size: 16px;
        text-overflow: ellipsis;
        max-lines: 1;
    }

    .tab-padding {
        padding: 0px 5px;
    }
</style>