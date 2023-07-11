<script>
    import GroupLabel from "../tab/GroupLabel.svelte";

    import { colorMap } from "../utilities/colors";
    import closeIcon from "../icons/close.png";
    import webIcon from "../icons/web.png";

    import { createEventDispatcher, onMount } from "svelte";
    import TabIcon from "../tab/TabIcon.svelte";
    import { fade } from "svelte/transition";
    import { Views } from "../view";

    let dispatch = createEventDispatcher();

    export let windowData;
    export let tabs;
    export let groups;
    export let lastUpdatedWindow;
    export let lastUpdatedTab;
    export let view;

    let activeTab;
    let activeGroup;

    let tabSubset;
    let loaded;

    onMount(() => {
        resetActiveTab();
        getTabPreview();
        loaded = true;
    });

    let showFavIcon;
    const resetActiveTab = () => {
        activeTab = tabs.find((t) => t.active);
        if (!activeTab) return;
        activeGroup = groups[activeTab.groupId];
        showFavIcon = activeTab.favIconUrl && activeTab.favIconUrl != "";
    };
    const getTabPreview = () => {
        tabSubset = tabs
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
    let showAllTabs = true;

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
        activeGroup = groups[activeTab.groupId];
        showFavIcon = activeTab.favIconUrl && activeTab.favIconUrl != "";
    };

    const closeWindow = () => {
        if (tabs.length == 1) {
            chrome.tabs.remove(tabs[0].id);
        } else {
            chrome.windows.remove(windowData.id);
        }
    };

    const openActiveTab = () => {
        chrome.tabs.update(activeTab.id, { active: true });
        chrome.windows.update(activeTab.windowId, { focused: true });
    };

    let lastUpdate;
    $: {
        if (lastUpdatedWindow != null && lastUpdatedWindow == windowData.id) {
            resetActiveTab();
            lastUpdate = Date.now();
        }

        if (
            lastUpdatedTab != null &&
            lastUpdatedTab.windowId == windowData.id
        ) {
            resetActiveTab();
            lastUpdate = Date.now();
        }
    }

    let isDraggedOver;
    const onDragOver = (e) => {
        e.preventDefault();
        isDraggedOver = true;
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        if (isDraggedOver) {
            isDraggedOver = false;
        }
    };

    const onDrop = (e) => {
        e.preventDefault();
        if (isDraggedOver) isDraggedOver = false;
        const tabId = parseInt(e.dataTransfer.getData("tabId"));
        chrome.tabs.move(tabId, {
            index: -1,
            windowId: windowData.id,
        });
        dispatch("tabMoved", tabId);
    };

    const onDragActiveTab = (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("tabId", activeTab.id);
    };

    const onTabIconClicked = () => {
        view = Views.tabs;
    };
</script>

{#if loaded && activeTab}
    <div
        class="window{windowData.incognito ? ' incognito' : ''}{isDraggedOver
            ? ' dragover'
            : ''}"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}
        on:dragover={onDragOver}
        on:dragleave={onDragLeave}
        on:drop={onDrop}
    >
        <div class="top-container">
            <div
                class="active-tab"
                draggable="true"
                on:dragstart={onDragActiveTab}
            >
                <div class="tab-details">
                    {#if closeWindowInFocus}
                        <div class="close-window-instructions">
                            <span on:mousedown={closeWindow}>Close Window</span>
                        </div>
                    {:else}
                        <img
                            src={showFavIcon ? activeTab.favIconUrl : webIcon}
                            alt={activeTab.url}
                            style={showFavIcon ? "" : "filter: invert(1);"}
                        />
                        <span on:mouseup={openActiveTab}>{activeTab.title}</span
                        >
                    {/if}
                    {#if activeTabInFocus}
                        <div class="actions">
                            <!-- <img class="action" src={moreIcon} alt="more"/> -->
                            <img
                                class="action"
                                src={closeIcon}
                                on:mousedown={closeWindow}
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

        {#if tabs.length > 1}
            {#if activeGroup && !closeWindowInFocus}
                <div class="active-group-container">
                    <div
                        class="active-group"
                        style="background-color: {colorMap[activeGroup.color]}"
                    >
                        <div class="title">
                            {activeGroup.title ?? activeGroup.color}
                        </div>
                    </div>
                    <div class="spacer" />
                </div>
            {:else}
                <div class="divider" />
            {/if}

            <div class="details">
                <div class="other-tabs">
                    {#if tabs.length > 1}
                        <div class="tab-icons">
                            {#each showAllTabs ? tabs : tabSubset as tab}
                                <TabIcon
                                    {tab}
                                    group={groups[tab.groupId]}
                                    isClickable={showAllTabs}
                                    on:showTabDetails={onShowTabDetails}
                                    on:tabIconClicked={onTabIconClicked}
                                />
                            {/each}
                        </div>
                        {#if !showAllTabs}
                            <div class="count">
                                +{tabs.length - 1} Tab{#if tabs.length - 1 > 1}s{/if}
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

    .window.incognito {
        opacity: 0.5;
    }

    .window.dragover {
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
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-grow: 1;
        overflow: hidden;
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
        display: flex;
        flex-direction: row;
        align-items: center;
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
