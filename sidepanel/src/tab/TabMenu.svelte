<script>
    /*
        To add:
            - Move to top
            - Move to bottom
    */

    import { createEventDispatcher, onMount } from "svelte";
    import { actions } from "./actions";
    import MenuItem from "../components/MenuItem.svelte";
    import { slide } from "svelte/transition";
    import copyIcon from "../icons/copy.png";

    import MoveResource from "./MoveResource.svelte";
    import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import MoveModal from "./MoveModal.svelte";
    import Menu from "../header/Menu.svelte";
    import { getTabFavIconUrl, getWorkspaceQueueFolder, saveContext, saveTabToFolder } from "../utilities/chrome";

    import pinIcon from "../icons/pin.png";
    import unpinIcon from "../icons/pin-filled.png";
    import moveToInboxIcon from "../icons/move-to-inbox.png";
    import moveToPopupIcon from "../icons/open-in-new-window.png";
    import moveToWindowIcon from "../icons/move-to-window.png";
    import moveToSpaceIcon from "../icons/move-to-folder.png";
    import duplicateIcon from "../icons/tab-duplicate.png";
    import starFilledIcon from "../icons/star-filled.png";
    import starUnfilledIcon from "../icons/star.png";
    import reloadIcon from "../icons/refresh.png";
    import addDomainIcon from "../icons/domain-add.png";
    import removeDomainIcon from "../icons/domain-remove.png";
    import closeTabIcon from "../icons/tab-close.png";
  import MenuDivider from "../components/MenuDivider.svelte";


    let dispatch = createEventDispatcher();

    export let db;
    export let user;
    export let tab;
    export let workspace;
    export let workspaces;
    export let isOpen = true;

    const TabMenuView = {
        bookmark: 'bookmark',
        move: 'move',
    }

    let view = null;

    let isSaved;
    let isPinned;
    onMount(() => {
        isSaved = tab.bookmarks || tab.resource;
        isPinned = tab.pinned || tab.isPinned;
    });

    
    const moveTabToNewWindow = async () => {
        await chrome.windows.create({ tabId: tab.id, focused: true });
        dispatch('exit');
    };

    const moveTabToPopup = async () => {
        chrome.windows.create({ tabId: tab.id, type: "popup", focused: true });
        // chrome.windows.create({type: 'popup', url: tab.url});
        // chrome.tabs.remove(tab.id);
        dispatch('exit');
    };

    const closeTabGroup = async () => {
        chrome.tabs.remove(
            (await chrome.tabs.query({ groupId: tab.groupId })).map((t) => t.id)
        );
    };

    const closeTab = () => {
        chrome.tabs.remove(tab.id);
        dispatch('exit');
        
    };

    const moveGroupToNewWindow = async () => {
        const window = await chrome.windows.create();
        await chrome.tabGroups.move(tab.groupId, { windowId: window.id });
        // remove new tab
        const newTab = await chrome.tabs.query({
            windowId: window,
            url: "chrome://newtab/",
        });
        if (newTab) await chrome.tabs.remove(newTab.id);
        dispatch('exit');
    };

    const reloadTab = () => {
        chrome.tabs.reload(tab.id);
        dispatch('exit');
    };

    const pinTab = () => {
        if (tab.groupId == -1) {
            chrome.tabs.update(tab.id, { pinned: !tab.pinned });
        } else {
            dispatch('pinTab', tab);
        }

        dispatch('exit');
        
    };
    let linkCopied;
    const copyLink = () => {
        navigator.clipboard.writeText(tab.url);
        linkCopied = true;
    };

    const onKeyDownInUrlField = (e) => {
        
        if (e.key == "Enter") {

            let url = tab.url;
            if (url.includes('.')) {
                const missingProtocol = !url.includes('http://') && !url.includes('https://');
                if (missingProtocol) url = 'https://' + url;
            } else {
                url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
            }
            chrome.tabs.update(tab.id, { url, active: true });
            dispatch('exit')
        }
    };

    const duplicateTab = () => {
        chrome.tabs.create({ url: tab.url, index: tab.index + 1 });
        dispatch('exit');
    };
    
    
    const openMoveModal = () => {
        view = TabMenuView.move;
    };

    const onEditTabBookmarkClicked = () => {
        dispatch('editBookmark', tab);
    };

    const saveForLater = async () => {
        if (user) {

        } else {
            const queueFolder = await getWorkspaceQueueFolder(workspace, true);
            await saveTabToFolder(tab, queueFolder.id);
            dispatch('tabStashed');
            setTimeout(async () => {
                const tabs = await chrome.tabs.query({ groupId: workspace.groupId });
                if (tabs.length == 1) {
                    const newTab = await chrome.tabs.create({ url: 'chrome://newtab/'});
                    await chrome.tabs.group({ tabIds: newTab.id, groupId: workspace.groupId });
                }
                chrome.tabs.remove(tab.id);
            }, 300);
            
        }
        
    };

    const addToFavoriteDomains = () => {
        if (!workspace.domains) workspace.domains = [];
        const domain = (new URL(tab.url)).hostname;
        
        const index = workspace.domains.findIndex((d) => d == domain);
        if (index == -1) {
            workspace.domains.push(domain);
            saveContext(workspace);
            dispatch('dataUpdated', { workspace });
        }
    };


    
</script>

<div class="context-menu">
    <!--
    {#if tab.groupId > -1}
        <MenuItem title="Save Tab to Group" />
    {:else}
        <MenuItem title="Save Tab to Window" />
    {/if}
    -->
    {#if view == null}
    <div class="top">
        <div class="title">
            <img class="favicon" src={getTabFavIconUrl(tab)} alt={tab.title} />
            <span>
                {tab.title}
            </span>
        </div>
        <div class="url-field">
            <img 
                class="button"
                src={copyIcon} 
                style='opacity: {linkCopied ? '1' : '.8'}' 
                alt="Copy Link" 
                on:mousedown={copyLink} 
            />
            <input
                type="text"
                bind:value={tab.url}
                on:keydown={onKeyDownInUrlField}
            />
        </div>
    </div>
   
    <MenuDivider />
    {#if isOpen}
        <MenuItem 
            title={isPinned ? 'Unpin' : 'Pin'}
            action={actions.pin}
            onClick={pinTab} 
            icon={isPinned ? pinIcon : unpinIcon } 
            {tab}
            canToggle={true}
        />
        <MenuItem 
            action={actions.reload}
            onClick={reloadTab} 
            icon={reloadIcon}
            {tab}
            canToggle={true}
        />
        <MenuItem 
            action={actions.duplicate}
            onClick={duplicateTab} 
            icon={duplicateIcon} 
            {tab}
            canToggle={true}
        />
        
        <MenuDivider />

        <MenuItem 
            title={isSaved ? 'Edit Bookmark': 'Save'} 
            action={actions.save}
            onClick={onEditTabBookmarkClicked} 
            icon={isSaved ? starFilledIcon : starUnfilledIcon}
            {tab}
            canToggle={true}
        />

        {#if workspace}
            <MenuItem 
                action={actions.saveForLater}
                onClick={saveForLater}
                icon={moveToInboxIcon}
                {tab}
                canToggle={true}
            />
        {/if}

        {#if user}


        <MenuItem 
            title='Add to favorite domains',
            action={actions.favoriteDomain}
            onClick={addToFavoriteDomains}
            icon={addDomainIcon}
            {tab}
            canToggle={true}
        />
        {/if}

        <MenuDivider />

        <MenuItem 
            action={actions.getRelated}
            {tab}
            canToggle={true}
            on:click={ () =>  dispatch('exit')}
        />


        <MenuDivider />
        
        <MenuItem 
            action={actions.moveToPopup}
            onClick={moveTabToPopup} 
            icon={moveToPopupIcon}
            {tab}
            canToggle={true}
            />
        <MenuItem 
            action={actions.moveToNewWindow}
            onClick={moveTabToNewWindow} 
            icon={moveToWindowIcon}
            {tab}
            canToggle={true}
        />
        {#if false}
            <MenuItem
                title="Move Group to New Window"
                onClick={moveGroupToNewWindow}
            />
        {/if}
        <MenuItem 
            title="Move to {tab.groupId > -1 ? 'Another ' : '' }Space",
            action={actions.moveToSpace} 
            onClick={openMoveModal} 
            icon={moveToSpaceIcon}
            {tab}
            canToggle={true}
        />
        
        <MenuDivider />

        <MenuItem 
            action={actions.close}
            onClick={closeTab} 
            icon={closeTabIcon}
            {tab}
            
        />
        {#if false}
            <MenuItem title="Close Group" onClick={closeTabGroup} />
        {/if}
    {/if}
    {:else if view == TabMenuView.bookmark}
        <BookmarkDetails {db} bind:tab {workspace} {workspaces} isOpen={true} on:dataUpdated on:exit={() => view = null}/>
    {:else if view == TabMenuView.move} 
        <ModalContainer on:exit={() => view = null}>
            <MoveModal selectedTabs={[tab]} on:exit={() => view = null} on:fullExit={() => dispatch('exit')}/>
        </ModalContainer>
    {/if}
</div>

<style>
    .context-menu {
        display: flex;
        flex-direction: column;
        width: 100%
    }

    .top {
        display: flex;
        flex-direction: column;

        padding: 10px;
    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: #444;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5px;
    }

    .title img {
        margin-right: 5px;
        height: 20px;
        width: 20px;
    }

    .url-field {
        width: calc(100% - 10px);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        margin: 5px 0px 10px 0px;
        background-color: #333333;
        border-radius: 5px;
    }

    .url-field input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 12px;
        color: white;
        background-color: transparent;
    }

    .url-field img {
        filter: invert(1);
        height: 16px;
        width: 16px;
        margin-right: 5px;
    }
    
    .button:hover {
        cursor: pointer;
    }
</style>
