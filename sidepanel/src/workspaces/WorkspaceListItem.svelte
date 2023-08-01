<script>
    import { colorMap } from "../utilities/colors";

    import moreIcon from "../icons/more-vert.png";
    import expandIcon from "../icons/expand.png";
    import collapseIcon from "../icons/collapse.png";
    import openIcon from "../icons/open-in-new-window.png";
    import { get, getContext, removeContext, set } from "../utilities/chrome";
    import queueIcon from "../icons/inbox.png";
    import folderIcon from "../icons/folder-special.png";
    import GroupColors from "../group/GroupColors.svelte";
    import { slide } from "svelte/transition";
    import { createEventDispatcher, onMount } from "svelte";
    import { getTimeSinceString } from "./helpers";
    import Tab from "../tab/Tab.svelte";
    

    export let workspace;
    export let isOpen = false;

    let dispatch = createEventDispatcher();

    let loaded;
    let timeSinceLastUpdate;
    onMount(() => {
        timeSinceLastUpdate = getTimeSinceString(workspace.updated, true);
        loaded = true;
    });

    let isInFocus;

    let isExpanded = false;
    const toggleExpanded = () => {
        isExpanded = !isExpanded;
    };

    let showMenu = false;
    const onMoreClicked = () => {
        showMenu = !showMenu;
        console.log(workspace);
    };

    const onOpenClicked = async() => {
        //openWorkspace();
        dispatch('expandWorkspace', workspace);
    };

    const onColorSelected = ({detail}) => {
        workspace.color = detail;
        dispatch('workspaceUpdated', workspace);
    };

    let isEditingTitle;
    const onEditTitleClicked = () => {
        console.log('edit title');
        isEditingTitle = true;
    };

    let hasInputedText;
    const onTitleInputBlur = (e) => {
        if (hasInputedText) setTitle();
    };

    const setTitle = () => {
        dispatch('workspaceUpdated', workspace);
        isEditingTitle = false;
    };

    const onInput = (e) => {
        if (e.key == "Enter") {
            setTitle();
        }
        if (!hasInputedText) hasInputedText = true;
    };

    const openWorkspace = async ({openInNewWindow}) => {
        await set({
            workspaceToOpen: {
                workspace,
                time: Date.now(),
            }
        });

        let openedTabs = [];
        let window;
        let newTab; 
        if (openInNewWindow) {
            window = await chrome.windows.create({incognito: workspace.isIncognito ?? false, focused:true});
            newTab = (await chrome.tabs.query({windowId: window.id}))[0];
        }
        
        if (workspace.tabs.length == 0)  {
            workspace.tabs.push({
                url: ''
            });
        }

        for (const tab of workspace.tabs) {
            openedTabs.push(await chrome.tabs.create({url: tab.url, windowId: window?.id}));
        }
        const groupId = await chrome.tabs.group({
            tabIds: openedTabs.map((t) => t.id),
            createProperties: {
                windowId: window?.id
            },
        });
        await chrome.tabGroups.update(groupId, {
            title: workspace.title, 
            color: workspace.color 
        });

        if (newTab) {
            await chrome.tabs.remove(newTab.id);
        }
        

    };


    const openWorkspaceInNewWindow = async () => {

        if (!isOpen) {
            openWorkspace({openInNewWindow: true});
        } else if ((workspace.groupId ?? 0) > 0) {
            const tabs = await chrome.tabs.query({groupId: workspace.groupId});
            if (tabs.length > 0) {
                chrome.tabs.update(tabs[0].id, { active: true });
                chrome.windows.update(tabs[0].windowId, { focused: true });
            }
            
        }
        
    };

    const deleteWorkspace = async () => {
        dispatch('deleteWorkspace', workspace);
    };


</script>

{#if loaded}
<div 
    class="workspace" 
    on:mouseenter={() => isInFocus = true}
    on:mouseleave={() => isInFocus = false}

>
    <div 
        class="container" 
        style="background-color: {colorMap[workspace.color ?? 'grey']};{showMenu
            ? 'border-radius: 5px 5px 0px 0px;'
            : ''}">
        {#if isEditingTitle}
            <input
                type="text"
                class="title-input"
                placeholder="Enter {(workspace?.size ?? 0 > 0)? 'Workspace' : 'Group'}"
                bind:value={workspace.title}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                autofocus="true"
            />
        {:else}
            <div class="title">
                <span class="text">
                    {workspace?.title ?? "Untitled Group"}
                </span>
                <div class="count">
                    ({workspace.tabs.length})
                </div>
            </div>
        {/if}
        {#if isInFocus}
            <div class="actions">
                <img src={isExpanded ? collapseIcon : expandIcon} alt="Expand" on:mousedown={toggleExpanded}/>
                <img src={moreIcon} alt="More" on:mousedown={onMoreClicked}/>
                <img src={openIcon} alt="Expand" on:mousedown={openWorkspaceInNewWindow}/>
            </div>
        {:else}
            <div class="time">
                {timeSinceLastUpdate}
            </div>
        {/if}
    </div>
    {#if showMenu}
    <div
        class="more-actions"
        style="border-color: #555555;"
        in:slide
        out:slide
        on:mouseleave={() => { showMenu = false; }}
    >
        <div class="group-selection-container">
            <GroupColors group={workspace} on:colorSelected={onColorSelected}/>
        </div>
        <div class="action" on:mousedown={onEditTitleClicked}>
            Edit title
        </div>
        <div class="divider"/>
        <div class="action" on:mousedown={openWorkspace}>Open {(workspace?.size ?? 0 > 0)? 'Workspace' : 'Group'} in Current Window</div>
        <div class="action" on:mousedown={openWorkspaceInNewWindow}>Open {(workspace?.size ?? 0 > 0)? 'Workspace' : 'Group'} in New Window</div>
        <div class="divider"/>
        <div class="action" on:dblclick={deleteWorkspace}>Delete {(workspace?.size ?? 0 > 0)? 'Workspace' : 'Group'} <div class="spacer"></div><span>Double Click</span></div>
    </div>
    {/if}

    {#if isExpanded}
        <div class="tabs">
            {#each workspace.tabs as tab}
                <Tab {tab} isOpen={false}/>
            {/each}
        </div>

    {/if}
</div>
{/if}


<style>
    .workspace {
        border-radius: 5px;
        width: calc(100% - 10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        margin: 5px;
    }

    .container {
        padding: 3px;
        min-height: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        width: calc(100% - 6px);
    }

    .title {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }

    .title .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
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

    .counts {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .count {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .count img {
        height: 16px;
        width: 16px;
        margin-right: 5px;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .actions img {
        height: 16px;
        width: 16px;
        margin: 0px 3px;
    }

    .actions img:hover {
        cursor: pointer;
    }

    .more-actions {
        font-size: 14px;
        border-right: 2px solid;
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-radius: 0px 0px 5px 5px;
        color: white;
        width: calc(100% - 4px);
    }

    .action {
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .action span {
        font-size: 8px;
        opacity: .5;
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

    .tabs {
        display: flex;
        flex-direction: column;
        width: calc(100% + 10px);
    }

    .time {
        margin-left: 5px;
        white-space: nowrap;
    }

    .spacer {
        flex-grow: 1;
    }
</style>


