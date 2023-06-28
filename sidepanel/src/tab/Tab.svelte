<script>
    export let tab;
    export let group = null;
    export let selectedTabs;
    export let lastSelectionUpdate;

    let isSelected;
    $: {
        lastSelectionUpdate;
        isSelected = selectedTabs.find((t) => t.id == tab.id) != null;
    }

    import pinnedIcon from "../icons/pin-filled.png";
    import closeIcon from "../icons/close.png";
    import menuIcon from "../icons/more-vert.png";
    import emptyBoxIcon from "../icons/empty-box.png";
    import checkedBoxIcon from "../icons/checked-box.png";
    import webIcon from "../icons/web.png";
    import { createEventDispatcher } from "svelte";
    import Menu from "./Menu.svelte";
    import { colorMap } from "../utilities/colors";
    import { slide } from "svelte/transition";

    let dispatch = createEventDispatcher();

    let isInFocus;
    let favIconInFocus;

    const onPinTab = () => {
        chrome.tabs.update(tab.id, { pinned: true });
    };

    const onMouseEnter = (e) => {
        isInFocus = true;
    };

    const onMouseLeave = () => {
        isInFocus = false;
        showMore = false;
        favIconInFocus = false;
    };

    const onMouseEnterFavIcon = (e) => {
        favIconInFocus = true;
    };

    const onMouseLeaveFavIcon = (e) => {
        favIconInFocus = false;
    };

    let showMore;
    const onMenuOpen = (e) => {
        showMore = true;
    };

    const onCloseTab = () => {
        chrome.tabs.remove(tab.id);
    };

    const onSelectionUpdated = () => {
        dispatch("updateSelection", tab);
    };

    let isDragged;
    const onDragStart = (e) => {
        isDragged = true;

        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("tabId", tab.id);
    };

    let isDraggedOver;
    let lastDragOver;
    const onDragOver = (e) => {
        e.preventDefault();
        const tabId = e.dataTransfer.getData("tabId");

        if (tab.id.toString() != tabId && !isDraggedOver) {
            isDraggedOver = true;
            lastDragOver = Date.now();
        }
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        if (isDraggedOver) {
            isDraggedOver = false;
        }
    };

    const onDrop = (e) => {
        if (isDraggedOver) isDraggedOver = false;
        const tabId = e.dataTransfer.getData("tabId");
        chrome.tabs.move(parseInt(tabId), { index: tab.index });
    };

    const onTitleClicked = () => {
        chrome.tabs.update(tab.id, { active: true });
        chrome.windows.update(tab.windowId, { focused: true });
    };

    const reload = () => {
        chrome.tabs.reload(tab.id);
    };
</script>

<div
    class="tab{isSelected ? ' selected' : ''}{isInFocus
        ? ' focused'
        : ''}{isDraggedOver ? ' dragged-over' : ''}{tab.active
        ? ' active'
        : ''}{group ? ' grouped' : ''} "
    style={isDraggedOver
        ? "border-bottom: 2px solid; padding-bottom: 3px;"
        : ""}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragstart={onDragStart}
    on:dragover={onDragOver}
    on:dragleave={onDragLeave}
    on:drop={onDrop}
    draggable="true"
>
    <div class="main-container">
        <div
            class="favicon-container"
            on:mouseleave={onMouseLeaveFavIcon}
            on:mouseenter={onMouseEnterFavIcon}
        >
            {#if isSelected}
                <img
                    class="icon"
                    src={checkedBoxIcon}
                    alt="Unselect"
                    on:mousedown={onSelectionUpdated}
                />
            {:else if favIconInFocus}
                <img
                    class="icon"
                    src={emptyBoxIcon}
                    alt="Select"
                    on:mousedown={onSelectionUpdated}
                />
            {:else if tab.favIconUrl && tab.favIconUrl != ""}
                <img class="favicon" src={tab.favIconUrl} alt={tab.title} />
            {:else}
                <img
                    class="favicon"
                    src={webIcon}
                    alt={tab.title}
                    style="filter: invert(1);"
                />
            {/if}
            {#if group}
                <div
                    class="group-indicator"
                    style="background-color: {colorMap[group.color]}"
                />
            {/if}
        </div>
        <div class="title" on:mousedown={onTitleClicked}>{tab.title}</div>
        <div class="spacer" on:mousedown={onTitleClicked} />

        {#if !isSelected && !isDragged}
            <div class="actions">
                {#if tab.pinned}
                    <img
                        src={pinnedIcon}
                        class="icon"
                        alt="Pinned"
                        on:mouseup={onPinTab}
                    />
                {/if}
                {#if isInFocus && !isDragged}
                    <img
                        src={menuIcon}
                        class="icon"
                        alt="Menu"
                        on:mousedown={onMenuOpen}
                    />
                    <img
                        src={closeIcon}
                        class="icon"
                        alt="Close"
                        on:mouseup={onCloseTab}
                    />
                {/if}
            </div>
        {/if}
    </div>

    {#if showMore}
        <Menu {tab} />
    {/if}
</div>

<style>
    .tab {
        padding: 5px 5px 5px 5px;
        width: calc(100% - 10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: white;
        user-select: none;
    }

    .main-container {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .tab.focused {
        background-color: #444444;
    }

    .tab.selected {
        background-color: #444444;
    }

    .tab.active {
        background-color: #666666;
    }

    .tab.dragged-over {
        border-bottom: 2px solid;
        padding-bottom: 3px;
    }

    .favicon-container {
        position: relative;
        min-width: 20px;

        display: flex;
    }

    .favicon {
        height: 20px;
        width: 20px;
    }

    .group-indicator {
        position: absolute;
        height: 8px;
        width: 8px;
        bottom: -2px;
        right: -2px;
        border-radius: 100%;
    }

    .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-lines: 1;
        overflow: hidden;
        margin-left: 8px;
    }

    .title:hover {
        cursor: pointer;
    }

    .spacer {
        height: 100%;
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        height: 16px;
        width: 16px;
        padding: 2px;
        filter: invert(1);
        opacity: 0.7;
    }

    .icon:hover {
        cursor: pointer;
        opacity: 1;
    }

    .drop-zone {
        height: 20px;
        background-color: #444444;
    }
</style>
