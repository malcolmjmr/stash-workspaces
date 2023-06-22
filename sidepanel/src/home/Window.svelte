<script>
    import GroupLabel from "../tab/GroupLabel.svelte";

    import closeIcon from "../icons/close.png";
    import webIcon from "../icons/web.png";

    import { onMount } from "svelte";
    import TabIcon from "../tab/TabIcon.svelte";
    import { fade } from "svelte/transition";

    export let windowData;
    let groups;
    let activeTab;
    let activeGroup;

    let tabSubset;
    let loaded;

    onMount(() => {
        resetActiveTab();
        getTabPreview();
        getGroups();
        loaded = true;
    });

    const getGroups = () => {
        groups = {};
        for (const group of windowData.groups) {
            groups[group.id] = group;
        }
    };

    const resetActiveTab = () => {
        activeTab = windowData.tabs.find((t) => t.active);
        activeGroup = windowData.groups.find((g) => g?.id == activeTab.groupId);
    };
    const getTabPreview = () => {
        tabSubset = windowData.tabs
            .filter(
                (t) =>
                    t.index != activeTab.index &&
                    t.favIconUrl &&
                    t.favIconUrl != ""
            )
            .slice(0, 5);
    };

    /*
       Active tab 
       icons of three adjacent tabs if any and tab count 
    */

    let showMore;
    let showAllTabs;

    let activeTabInFocus;
    let closeWindowInFocus;

    const onCloseClicked = () => {};

    const onOtherTabsClicked = () => {
        showAllTabs = true;
    };

    const onMouseEnter = () => {
        activeTabInFocus = true;
    };

    const onMouseLeave = () => {
        activeTabInFocus = false;
        //showAllTabs = false;
        resetActiveTab();
    };

    const onShowTabDetails = ({ detail }) => {
        activeTab = detail;
        activeGroup = windowData.groups.find((g) => g?.id == activeTab.groupId);
    };

    const closeWindow = () => {
        chrome.windows.remove(windowData.id);
    };
</script>

{#if loaded}
    <div
        class="window"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}
    >
        <div class="top-container">
            <div class="active-tab">
                <div class="tab-details">
                    {#if closeWindowInFocus}
                        <div class="close-window-instructions">
                            <span on:mousedown={closeWindow}>Close Window</span>
                        </div>
                    {:else}
                        <img
                            src={activeTab.favIconUrl &&
                            activeTab.favIconUrl != ""
                                ? activeTab.favIconUrl
                                : webIcon}
                            alt={activeTab.url}
                        />
                        <span>{activeTab.title}</span>
                    {/if}
                    {#if activeTabInFocus}
                        <div class="actions">
                            <!-- <img class="action" src={moreIcon} alt="more"/> -->
                            <img
                                class="action"
                                src={closeIcon}
                                alt="close"
                                on:mouseenter={() =>
                                    (closeWindowInFocus = true)}
                                on:mouseleave={() =>
                                    (closeWindowInFocus = false)}
                            />
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        {#if activeGroup && !closeWindowInFocus}
            <div class="active-group-container">
                <div
                    in:fade
                    class="active-group"
                    style="background-color: {activeGroup.color}"
                >
                    <div class="title">
                        {activeGroup.title}
                    </div>
                </div>
                <div class="spacer" />
            </div>
        {:else}
            <div class="divider" />
        {/if}

        <div class="details">
            <div class="other-tabs" on:mousedown={onOtherTabsClicked}>
                {#if windowData.tabs.length > 1}
                    <div class="tab-icons">
                        {#each showAllTabs ? windowData.tabs : tabSubset as tab}
                            <TabIcon
                                {tab}
                                group={groups[tab.groupId]}
                                isClickable={showAllTabs}
                                on:showTabDetails={onShowTabDetails}
                            />
                        {/each}
                    </div>
                    {#if !showAllTabs}
                        <div class="count">
                            +{windowData.tabs.length - 1} Tab{#if windowData.tabs.length - 1 > 1}s{/if}
                        </div>
                    {/if}
                {/if}
            </div>
        </div>

        {#if showMore}
            <div class="menu">
                <div class="action">Open New Tab</div>
                <div class="action">Close Window</div>
                <div class="action">Save Window?</div>
            </div>
        {/if}
    </div>
{/if}

<style>
    .window {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        border-radius: 5px;
        background-color: #444444;
        color: white;
        width: calc(100% - 20px);
        padding: 5px;
        user-select: none;
        margin: 10px 5px;
    }

    .window.focused {
        background-color: #666666;
    }

    .top-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        max-height: 30px;
    }

    .active-tab {
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 100%;
        min-height: 30px;
    }

    .active-tab .tab-details {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .active-tab .tab-details img {
        height: 20px;
        width: 20px;
        margin: 5px;
    }

    .active-tab .tab-details span {
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }

    .active-tab .tab-details span:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .active-group-container {
        width: 100%;
        flex-direction: row;
    }

    .active-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        border-radius: 5px;
        margin: 2px;
    }
    .active-group .title {
        color: black;
        opacity: 0.8;
        margin: 2px 5px;
        font-size: 12px;
    }

    .divider {
        height: 1px;
        background-color: #555555;
        width: calc(100% - 6px);
        margin: 11px 0px;
    }

    .details {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        min-height: 30px;
    }

    .close-window-instructions {
        opacity: 0.8;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 100%;
        margin-left: 5px;
    }

    .other-tabs {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
    }

    .other-tabs:hover {
        cursor: pointer;
    }

    .other-tabs .count {
        opacity: 0.8;
    }

    .tab-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .tab-icons img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }

    .spacer {
        flex-grow: 1;
    }

    .actions {
        margin-left: 3px;
    }

    img.action {
        height: 20px;
        width: 20px;
        filter: invert(1);
    }

    img.action:hover {
        cursor: pointer;
    }

    .spacer {
        flex-grow: 1;
    }
</style>
