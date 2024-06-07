<script>
    import { createEventDispatcher } from "svelte";

    import tabIcon from "../../../sidepanel/src/icons/open-in-new-window.png";
    import closeIcon from "../../../sidepanel/src/icons/close.png";
    import minimizeIcon from "../../../sidepanel/src/icons/collapse.png";
    import moreIcon from "../../../sidepanel/src/icons/more-vert.png";
    import starFilledIcon from "../../../sidepanel/src/icons/star-filled.png";
    import starIcon from "../../../sidepanel/src/icons/star.png";
    import expandIcon from "../../../sidepanel/src/icons/expand.png";



    export let resource;

    let dispatch = createEventDispatcher();
    
    const actionItems = [
        {
            name: 'Save',
            id: 'save',
            icon: resource.isSaved ? starFilledIcon : starIcon,
            showDivider: true,
            onClick: async () => {
                dispatch('removeResource', {resource});
                const activeTab = await chrome.tabs.query({ currentWindow: true, active: true });
                const newTab = await chrome.tabs.create({ url: resource.url, active: true });
                await chrome.tabs.group({ groupId: activeTab.groupId, tabIds: newTab.id });
            }
        },
        {
            name: 'Minimize',
            id: 'minimize',
            icon: minimizeIcon,
            condition: () => !resource.isMinimized,
            onClick: () => {
                resource.isMinimized = true; 
                dispatch('saveResource', {resource, positionUpdate: true});
            }
        },
        {
            name: 'Expand',
            id: 'expand',
            icon: expandIcon,
            condition: () => resource.isMinimized,
            onClick: () => {
                resource.isMinimized = false; 
                dispatch('saveResource', {resource, positionUpdate: true});
            }
        },
        {
            name: 'Open as Tab',
            id: 'tab',
            icon: tabIcon,
            showDivider: true,
            onClick: async () => {
                
                const activeTab = (await chrome.tabs.query({ currentWindow: true, active: true }))[0];
                const newTab = await chrome.tabs.create({ url: resource.url, active: true });
                await chrome.tabs.group({ groupId: activeTab.groupId, tabIds: newTab.id });
                
                dispatch('removeResource', {resource});
            }
        },
        {
            name: 'More',
            id: 'more',
            icon: moreIcon,
            showDivider: true,
            onClick: () => {
                resource.isMinimized; 
                dispatch('saveResource', { resource, positionUpdate: true });
            }
        },
        {
            name: 'Close',
            id: 'close',
            icon: closeIcon,
            showDivider: true,
            onClick: async () => {
                dispatch('removeResource', {resource});
            }
        },
    
    ];

</script>

{#key resource.isMinimized}
<div class="actions">
    {#each actionItems as actionItem (actionItem.id)}
        {#if !actionItem.condition || actionItem.condition.call()}
        <div class="item" on:mousedown={() => actionItem.onClick()}>
            <img src={actionItem.icon} alt=""/>
        </div>
        {/if}
    {/each}
</div>
{/key}

<style>

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .item {
        height: 14px;
        width: 14px;
        border-radius: 100%;
        padding: 3px;
        margin-right: 1px;
    }

    .item img {
        height: 100%;
        width: 100%;
        filter: invert(1);
    }

    .item:hover {
        cursor: pointer;
    }

</style>