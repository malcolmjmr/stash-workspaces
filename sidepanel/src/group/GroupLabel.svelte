<script>
    import { createEventDispatcher, onMount } from "svelte";

    import collapseIcon from "../icons/collapse.png";
    import expandIcon from "../icons/expand.png";
    import moreIcon from "../icons/more-vert.png";
    import closeIcon from "../icons/close.png";
    import { slide } from "svelte/transition";
    import { colorMap } from "../utilities/colors";
    import GroupColors from "./GroupColors.svelte";
    import fullScreenIcon from "../icons/open-in-full.png";
    import starIcon from "../icons/star.png";
    import starFilledIcon from "../icons/star-filled.png";


    export let group;
    export let isCollapsed = null;
    export let tabs = [];
    export let lastGroupUpdate = null;

    let dispatch = createEventDispatcher();
    let isInfocus;
    let showMore;

    let el;

    onMount(() => {
        if (group.new) {
            isEditingTitle = true;
            el?.scrollIntoView({
                behavior: "smooth",
            });
        }

        
    });

    const onMouseEnter = () => {
        isInfocus = true;
    };

    const onMouseLeave = () => {
        isInfocus = false;
        showMore = false;
    };

    const onCloseClicked = () => {
        chrome.tabs.remove(tabs.map((t) => t.id));
    };

    const toggleCollapse = () => {
        dispatch("toggleCollapse", group);
        chrome.tabGroups.update(group.id, { collapsed: !group.collapsed });
    };

    const saveGroup = async () => {

        // const folder = await chrome.bookmarks.create({title: `${group.title} [space|${group.color}|${group.id}]`});
        // for (const tab of tabs) {
        //     await chrome.bookmarks.create({
        //         parentId: folder.id,
        //         title: `${tab.title} [tab|${tab.id}]`, 
        //         url: tab.url
        //     });
        // }

        // dispatch('groupSaved', {
        //     group,
        //     folder,
        // });
    };

    const moveGroup = async () => {
        const window = await chrome.windows.create({});
        await chrome.tabGroups.move(group.id, {
            windowId: window.id,
            index: 0,
        });

        showMore = false;
    };

    const closeGroup = () => {
        chrome.tabGroups.remove(group.id);
    };

    let isEditingTitle;

    const onEditTitleClicked = () => {
        isEditingTitle = true;

        //showMore = false;
    };

    let newTitle = "";
    const onTitleInputBlur = (e) => {
        if (newTitle != "") {
            setTitle();
        }
        newTitle = "";
    };

    const setTitle = () => {
        chrome.tabGroups.update(group.id, { title: newTitle });
        isEditingTitle = false;
    };

    const onInput = (e) => {
        if (e.key == "Enter") {
            setTitle();
        }
    };

    const ungroupTabs = async () => {
        chrome.tabs.ungroup(
            (await chrome.tabs.query({ groupId: group.id })).map((t) => t.id)
        );
    };

    let isDragged;
    const onDragStart = (e) => {
        isDragged = true;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("groupId", group.id);
        chrome.tabGroups.update(group.id, { collapsed: true });
    };

    let isDraggedOver;
    const onDragOver = (e) => {
        e.preventDefault();
        if (!isDraggedOver) isDraggedOver = true;
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        isDraggedOver = false;
    };

    const onDrop = async (e) => {
        if (isDraggedOver) isDraggedOver = false;
        let tabId = e.dataTransfer.getData("tabId");
        const groupId = e.dataTransfer.getData("groupId");
        const tabsInGroup = await chrome.tabs.query({ groupId: group.id });
        let startIndex = 100000;
        let endIndex = 0;
        for (const tab of tabsInGroup) {
            if (tab.index < startIndex) startIndex = tab.index;
            if (tab.index > endIndex) endIndex = tab.index;
        }

        if (tabId) {
            tabId = parseInt(tabId);
            const tab = await chrome.tabs.get(tabId);
            let index;
            if (tab.groupId == group.id) {
                // if (tab.index > startIndex) {

                // } else (tab.index == startIndex) {
                     
                // }
                index = startIndex;
            } else if (tab.index > startIndex) {
                if (group.collapsed) {
                    index = startIndex;
                } else {
                    await chrome.tabs.group({tabIds: tab.id, groupId: group.id});
                    index = startIndex;

                }
            } else if (tab.index < endIndex) {
                if (group.collapsed) {
                    index = endIndex;
                } else {
                    await chrome.tabs.group({tabIds: tab.id, groupId: group.id});
                    index = startIndex;
                }
            }

            chrome.tabs.move(parseInt(tabId), { index: index });
        } else if (groupId) {
            chrome.tabGroups.move(parseInt(groupId), { index: startIndex });
        }
    };

    const onDragEnd = () => {
        isDragged = false;
    };

    const openWorkspace = () => {
        dispatch('openGroupInFullScreen', group);
    };

</script>

<div
    class="group-label{isDraggedOver ? ' dragged-over' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragleave={onDragLeave}
    on:dragstart={onDragStart}
    on:dragover={onDragOver}
    on:drop={onDrop}
    on:dragend={onDragEnd}
    draggable="true"
    bind:this={el}
>
    <div
        class="container"
        style="background-color: {colorMap[group.color]};{showMore
            ? 'border-radius: 5px 5px 0px 0px;'
            : ''}"
    >
        {#if isEditingTitle}
            <input
                type="text"
                class="title-input"
                placeholder="Name this group"
                bind:value={newTitle}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                autofocus="true"
            />
        {:else}
            <div class="title">
                <span class="text">
                    {group?.title ?? "Untitled Group"}
                </span>
                {#if group.collapsed}
                    <div class="count">
                        ({tabs.length})
                    </div>
                {/if}
                
            </div>
            {#if group.workspace}
                <img src={starFilledIcon} alt="Saved" class="icon"/>
            {/if}
        {/if}

        

        {#if isInfocus && !isDragged}
            <div class="actions">
                {#if group.workspace}
                    <img src={fullScreenIcon} alt="Fullscreen" on:mousedown={openWorkspace}/>
                {:else}
                    <img src={starIcon} alt="Saved" class="icon" on:mousedown={saveGroup}/>
                    <img
                        src={group.collapsed ? expandIcon : collapseIcon}
                        alt="Toggle Collapsed"
                        on:mousedown={toggleCollapse}
                    />
                {/if}
                
                <img
                    src={moreIcon}
                    alt="More"
                    on:mousedown={() => (showMore = true)}
                />

                <img src={closeIcon} alt="close" on:mouseup={onCloseClicked} />
            </div>
        {/if}
    </div>
    {#if showMore}
        <div
            class="more-actions"
            style="border-color: #555555;"
            in:slide
            out:slide
        >
            <GroupColors {group} />
            <div class="action" on:mousedown={onEditTitleClicked}>
                Edit title
            </div>
            <div class="divider"/>
            <div class="action" on:mousedown={moveGroup}>
                Move Group to New Window
            </div>
            <div class="action" on:mousedown={openWorkspace}>Open Workspace</div>
            <div class="divider"/>
            <div class="action" on:mousedown={saveGroup}>Save Group</div>
            <div class="divider"/>
            <div class="action" on:mousedown={ungroupTabs}>Ungroup Tabs</div>
            <div class="action" on:mousedown={closeGroup}>Close Group</div>
        </div>
    {/if}
</div>

<style>
    .group-label {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;
    }

    .dragged-over {
        opacity: 0.5;
    }

    .container {
        padding: 5px;
        min-height: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        margin: 6px;
        width: calc(100% - 22px);
    }

    .title {
        color: black;
        font-weight: 400;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }

    .title .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .title .count {
    }

    .title-input {
        text-decoration: none;
        box-shadow: none;
        border: black;
        border-radius: 5px;
        outline: none;
        background-color: #999999;
        color: black;
        flex-grow: 1;
        padding: 5px;
    }

    .title:hover {
        cursor: pointer;
    }

    .spacer {
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .actions img {
        height: 16px;
        width: 16px;
        padding: 2px;
        opacity: 0.6;
    }

    .actions img:hover {
        cursor: pointer;
        opacity: 1;
    }

    .more-actions {
        margin: 0px 5px;
        font-size: 14px;
        border-right: 2px solid;
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-radius: 0px 0px 5px 5px;
    }

    .action {
        padding: 5px;
    }

    .action:hover {
        cursor: pointer;
        background-color: #555555;
    }

    .icon {
        height: 16px;
        width: 16px;
    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: #999999;
        margin: 5px 0px;
    }
</style>
