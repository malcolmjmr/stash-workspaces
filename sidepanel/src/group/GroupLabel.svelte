<script>
    import { createEventDispatcher, onMount } from "svelte";

    import collapseIcon from "../icons/collapse.png";
    import expandIcon from "../icons/expand.png";
    import moreIcon from "../icons/more-vert.png";
    import closeIcon from "../icons/close.png";
    import fullScreenIcon from "../icons/expand-content.png";
    import { colorMap } from "../utilities/colors";
    import { slide } from "svelte/transition";
    
    import GroupColors from "./GroupColors.svelte";

    import starIcon from "../icons/star.png";
    import starFilledIcon from "../icons/star-filled.png";
    import Workspace from "../workspace/Workspace.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
    import WorkspaceIcon from "../components/WorkspaceIcon.svelte";
    import tabGroupIcon from "../icons/tab-group.png";




    export let activeTab;
    export let groups;
    export let groupId;
    export let group;
    export let tabs = [];

    let dispatch = createEventDispatcher();
    let isInfocus;
    let showMore;

    let el;

    onMount(() => {
        if (!group.title || group.title == '') {
            isEditingTitle = true;
            el?.scrollIntoView({
                behavior: "smooth",
            });
        }
        group = groups[groupId];

        
    });

    $: {
        if (group != groups[groupId]) {
            console.log('updating group data');
            group = groups[groupId];
            console.log(group);
        }
    }

    const onMouseEnter = () => {
        isInfocus = true;
    };

    const onMouseLeave = () => {
        isInfocus = false;
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

    let hasInputedText;
    const onTitleInputBlur = (e) => {
        if (hasInputedText) setTitle();
    };

    const setTitle = () => {
        chrome.tabGroups.update(group.id, { title: group.title });
        isEditingTitle = false;
    };

    const onInput = (e) => {
        if (e.key == "Enter") {
            setTitle();
        }
        if (!hasInputedText) hasInputedText = true;
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
            let ungroup;
            if (tab.groupId == group.id) {
                // if (tab.index > startIndex) {

                // } else (tab.index == startIndex) {
                     
                // }
                ungroup = true;
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
                    index = startIndex -1;
                }
            }
            
            await chrome.tabs.move(parseInt(tabId), { index: index });
            if (ungroup) {
                await chrome.tabs.ungroup(tab.id);
            }
        } else if (groupId) {
            chrome.tabGroups.move(parseInt(groupId), { index: startIndex });
        }
    };

    const onDragEnd = () => {
        isDragged = false;
    };

    let showWorkspace;
    const openWorkspace = async () => {
        //showWorkspace = true;
        if (activeTab.groupId != group.id) {
            const tabs = await chrome.tabs.query({ groupId: group.id });
            tabs.sort((a, b) => a.index - b.index);
            await chrome.tabs.update(tabs[0].id, { active: true });
        }
        dispatch('showWorkspaceView', group);
    };


</script>

{#if showMore}
    <ModalContainer on:exit={() => showMore = false}>
        <WorkspaceMenu {group} />
    </ModalContainer>
{/if}


<div
    class="group-label{isDraggedOver ? ' dragged-over' : ''}{group.collapsed ? ' collapsed': ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragleave={onDragLeave}
    on:dragstart={onDragStart}
    on:dragover={onDragOver}
    on:drop={onDrop}
    on:dragend={onDragEnd}
    draggable={isEditingTitle ? 'false' : 'true'}
    bind:this={el}
    style="color: {colorMap[group.color]};"
>
    <div
        class="container"
        
    >
        
        {#if isEditingTitle}
            <input
                type="text"
                class="title-input"
                style="color: {colorMap[group.color]};"
                placeholder="Enter Group Name"
                bind:value={group.title}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                autofocus="true"
            />
        {:else}
            <div class="title"on:mousedown={toggleCollapse} >
                <WorkspaceIcon color={group.color}/>
                <span class="text" >
                    {group?.title && group.title != '' ? group.title :  "Untitled"}
                </span>
                {#if false}
                    <div class="count">
                        ({tabs.length})
                    </div>
                {/if}
                
            </div>
        {/if}

        

        {#if isInfocus && !isDragged}
            <div class="actions">
                <img src={fullScreenIcon} alt="Fullscreen" on:mousedown={openWorkspace}/>

                <img
                    src={moreIcon}
                    alt="More"
                    on:mousedown={() => showMore = true}
                />

                <img src={closeIcon} alt="close" on:mouseup={onCloseClicked} />
            </div>
        {/if}
    </div>
</div>

<style>
    .group-label {
        width: calc(100% - 10px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;
        margin: 4px 5px 0px 5px;
        font-weight: 300;
        background-color: #333333;
        border-bottom: 2px solid #444444;
        border-radius: 8px 8px 0px 0px;
    }

    .group-label.collapsed {
        border-bottom: none;
        border-radius: 8px;
        margin-bottom: 2px;
        background-color: #111111;
    }

    .group-label.collapsed:hover {
        background-color: #333333;
    }

    .dragged-over {
        opacity: 0.5;
    }

    .container {
        padding: 2px 5px;
        min-height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        width: calc(100% - 10px);
    }

    .title {
        flex-grow: 1;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }

    .title .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 5px;
    }

    .title .count {
        margin: 0px 3px;
    }

    .title-input {
        text-decoration: none;
        box-shadow: none;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: transparent;
        flex-grow: 1;
        padding: 5px;
        font-size: 16px;
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
        filter: invert(1);
    }

    .actions img:hover {
        cursor: pointer;
        opacity: 1;
    }

    .more-actions {
        font-size: 14px;
        border-right: 2px solid;
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-radius: 0px 0px 5px 5px;
        width: calc(100% - 4px);
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
        
    }

    .count {
        font-size: 12px;
    }
</style>
