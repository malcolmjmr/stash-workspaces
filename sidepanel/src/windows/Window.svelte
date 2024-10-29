<script>
    import GroupLabel from "../group/GroupLabel.svelte";

    import { colorMap } from "../utilities/colors";
    import closeIcon from "../icons/close.png";
    import webIcon from "../icons/web.png";
    import stashIcon from "../icons/download.png";
    import openIcon from "../icons/open-in-new-window.png";
    import menuIcon from "../icons/more-vert.png";
    import deleteIcon from "../icons/delete.png";
    import uploadIcon from "../icons/upload.png";

    import { createEventDispatcher, onMount } from "svelte";
    import TabIcon from "../tab/TabIcon.svelte";
    import { fade } from "svelte/transition";
    import { Views } from "../view";
  import { createAdjacentTab, createContext, get, getActiveTab, getContext, getPermissions, getTabFavIconUrl, openWorkspace, set, stashWindow, tryToGetWorkspaceFolder } from "../utilities/chrome";
  import ModalContainer from "../components/ModalContainer.svelte";
  import WindowMenu from "./WindowMenu.svelte";
    import SaveModal from "./SaveModal.svelte";
    import Workspaces from "../workspaces/Workspaces.svelte";
  import { _settings } from "../stores";
  import Divider from "../components/Divider.svelte";
  
    let dispatch = createEventDispatcher();
 

    export let windowData;
    export let tabs;
    export let groups;
    export let lastUpdatedWindow = null;
    export let lastUpdatedTab = null;
    export let view = null;
    export let isCurrentWindow = false;
    export let isOpen = true;


    let activeTab;
    let activeGroup;

    let tabSubset;
    let loaded;

    onMount(() => {
        loadContexts();
        resetActiveTab();
        //getTabPreview();
        loaded = true;
    });

    let contexts = {};
    const loadContexts = async () => {
        for (const id of windowData.contexts ?? []){
            contexts[id] = await getContext(id);
        };
    }

    let showFavIcon;
    const resetActiveTab = () => {
        activeTab = tabs.find((t) => t.active);
        if (!activeTab) {
            activeTab = tabs[0];
        }
        activeGroup = groups[activeTab.groupId];
        showFavIcon = activeTab.favIconUrl && activeTab.favIconUrl != "";
    };
    const getTabPreview = () => {
        tabSubset = tabs
            .filter(
                (t) =>
                    t?.index != activeTab?.index &&
                    t.favIconUrl &&
                    t.favIconUrl != ""
            )
            .slice(0, 5);
    };

    /*
       Active tab 
       icons of three adjacent tabs if any and tab count 
    */

    let showMenu;
    let showAllTabs = true;

    let activeTabInFocus;
    let closeWindowInFocus;

    const onCloseClicked = () => {};

    const onOtherTabsClicked = () => {
        showAllTabs = true;
    };

    const onMouseEnter = async () => {
        activeTabInFocus = true;
    };

    const onMouseLeave = () => {
        activeTabInFocus = false;
        //showAllTabs = false;
        resetActiveTab();
    };

    const onShowTabDetails = ({ detail }) => {
        activeTab = detail;
        activeGroup = activeTab.contextId ? contexts[activeTab.contextId] : groups[activeTab.groupId];
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

    const onTabIconClicked = async ({ detail }) => {
        const tab = detail;
        const activeTab = await getActiveTab();
        if (window.id == activeTab.windowId) {
            view = Views.tabs;
        } else if (!isOpen) {
            await createAdjacentTab({
                url: tab.url,
            });
            view = Views.tabs;
        }
        
    };

    let actionInstructions;

    const onStashWindow = (e) => {
        stashWindow({ windowId: windowData.id });
        lastUpdatedWindow = windowData;
    };

    const onOpenWindow = () => {
        restoreWindow(windowData);
    };

    const restoreWindow = async (openInCurrentWindow) => {
        let newWindow;
        let newTab;
        if (!openInCurrentWindow) {
            const currentWindow = await chrome.windows.get((await getActiveTab()).windowId);
            newWindow = await chrome.windows.create({ state: currentWindow.state, incognito: currentWindow.incognito, focused: true });
            newTab = (await chrome.tabs.query({ windowId: newWindow.id }))[0];
        }
        
        let openedContexts = [];
        for (const tab of windowData?.tabs ?? []) {
            if (tab.contextId) {
                if (!openedContexts.includes(tab.contextId)) {
                    openedContexts.push(tab.contextId);
                    await openWorkspace(contexts[tab.contextId], {
                         windowId: newWindow?.id, 
                         openInNewWindow: !openInCurrentWindow 
                    });
                }
                
            } else {
                await chrome.tabs.create({
                    active: tab.active,
                    url: tab.url,
                    windowId: newWindow?.id
                });
            }
        }
        if (newTab) {
            chrome.tabs.remove(newTab.id);
        }
        
        if (windowData.isClosed) {
            await deleteSession();
        }

    };

    const deleteSession = async () => {
        let sessions = await get('sessions') ?? [];

        const index = sessions.findIndex((s) => s.id == windowData.id);
        if (index > -1) {
            sessions.splice(index, 1);
            await set({ sessions });
        }

        lastUpdatedWindow = windowData;

        dispatch('deleted');


    };

    let showSaveModal;
    const onMenuItemClicked = ({ detail }) => {
        const action = detail.action;
        if (action == 'save') {
            showSaveModal = true;
        } else if (action == 'stash') {
            onStashWindow();
        } else if (action == 'close') {
            onCloseClicked();
        } else if (action == 'openInCurrentWindow') {
            restoreWindow(true);
        } else if (action == 'restore') {
            restoreWindow();
        } else if (action == 'delete') {
            deleteSession();
        }

        showMenu = false;
    };

    const onSave = ({ detail }) => {
        showSaveModal = false;
        dispatch('dataUpdated', { workspace: detail });
        view = Views.home;

    };
    

</script>

{#if showMenu}
<ModalContainer on:exit={() => showMenu = false}>
    <WindowMenu window={windowData} {isOpen} on:menuItemClicked={onMenuItemClicked}/>
</ModalContainer>
{/if}

{#if showSaveModal}
<ModalContainer on:exit={() => showSaveModal = false}> 
    <SaveModal {windowData} on:workspaceSave={onSave} />
</ModalContainer>
{/if}

{#if loaded && activeTab}
    <div
        class="window{windowData.incognito ? ' incognito' : ''}{isDraggedOver
            ? ' dragover'
            : ''}{isCurrentWindow
            ? ' current'
            : ''}"
        style="background-color: {$_settings?.appearance?.primaryColor ?? '#222222'}; color: {$_settings?.appearance?.primaryTextColor ?? 'white'};"
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
                    {#if actionInstructions}
                        <div class="action-instructions">
                            <span on:mousedown={closeWindow}>{actionInstructions}</span>
                        </div>
                    {:else}
                        <img
                            class="icon"
                            src={getTabFavIconUrl(activeTab)}
                            alt={activeTab.url}
                        />
                        <span on:mouseup={openActiveTab}>{activeTab.title}</span
                        >
                    {/if}
                    {#if activeTabInFocus}
                        <div class="actions">
                            <!-- <img class="action" src={moreIcon} alt="more"/> -->
                             {#if isOpen}
                            <img
                                class="action"
                                src={stashIcon}
                                on:mousedown={onStashWindow}
                                alt="Stash"
                                on:mouseenter={() =>
                                    (actionInstructions = 'Save for later' )}
                                on:mouseleave={() =>
                                    (actionInstructions = null)}
                            /> 
                            {/if}
                            {#if windowData.isRemote || windowData.isClosed }
                            <img
                                class="action"
                                src={uploadIcon}
                                on:mousedown={() => restoreWindow(true)}
                                alt="Stash"
                                on:mouseenter={() =>
                                    (actionInstructions = 'Open in current window' )}
                                on:mouseleave={() =>
                                    (actionInstructions = null)}
                            /> 
                            {/if}
                            
                            <img
                                class="action"
                                src={menuIcon}
                                on:mousedown={() => showMenu = true}
                                alt="menu"
                            
                            />

                            {#if isOpen}
                            <img
                                class="action"
                                src={closeIcon}
                                on:mousedown={closeWindow}
                                alt="close"
                                on:mouseenter={() =>
                                    (actionInstructions = 'Close window' )}
                                on:mouseleave={() =>
                                    (actionInstructions = null)}
                            />
                            {/if}

                            {#if !isOpen}
                            <img
                                class="action"
                                src={openIcon}
                                on:mousedown={() => restoreWindow()}
                                alt="Open"
                                on:mouseenter={() =>
                                    (actionInstructions = 'Restore window' )}
                                on:mouseleave={() =>
                                    (actionInstructions = null)}
                            />  
                            {/if}
                        </div>
                    {/if}
                </div>
            </div>
        </div>

        {#if windowData.type == 'normal'}
            {#if activeGroup && !closeWindowInFocus }
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
            {:else}
                <div class="divider-container">
                    <Divider/>
                </div>
            {/if}

            <div class="details">
                <div class="other-tabs">

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
                            <div class="spacer"></div>
                        </div>
                        
                </div>
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
        background-color: #333333;
        color: white;
        width: calc(100% - 24px);
        padding: 5px;
        user-select: none;
        margin: 7px;
        z-index: 1;
    }

    .current.window {
        background-color: #444;
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

    .active-tab .tab-details img.icon {
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
        height: 18px;
        margin: 2.5px;
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

    .divider-container {
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

    .action-instructions {
        opacity: 0.8;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 30px;
        margin-left: 8px;
        font-size: 24px;
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
        justify-content: space-between;
        
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
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }

    img.action {
        height: 18px;
        width: 18x;
        filter: invert(1);
    }

    img.action:hover {
        cursor: pointer;
    }

    .spacer {
        flex-grow: 1;
    }
</style>
