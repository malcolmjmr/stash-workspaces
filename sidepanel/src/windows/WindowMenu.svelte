<script>
  import { createEventDispatcher } from "svelte";
  import MenuItem from "../components/MenuItem.svelte";

    import stashIcon from "../icons/download.png";
    import restoreIcon from "../icons/open-in-new-window.png";
    import uploadIcon from "../icons/upload.png";
    import folderCreateIcon from "../icons/create-folder.png";
    import closeIcon from "../icons/close.png";
    import deleteIcon from "../icons/delete.png";
    import MenuDivider from "../components/MenuDivider.svelte";


    let dispatch = createEventDispatcher();

    export let window;
    export let isOpen;

    const getTimeString = () => {
        let string = '';
        if (window.stashed) {
            string = (new Date(window.stashed)).toDateString();
        }
        return string;
    }
 
</script>

<div class="menu">
    <div class="header">
        {window.tabs.length} tab{window.tabs.length > 1 ? 's' : ''} 
        {#if window.stashed} 
            last opened {getTimeString()}
        {/if}
    </div>
    
    <div class="items">
        {#if isOpen}
        <MenuItem 
            icon={stashIcon}
            title="Save for later"
            onClick={() => dispatch('menuItemClicked', {action: 'stash'})}
        />
        {:else}
        <MenuItem 
            icon={uploadIcon}
            title="Open in current window"
            onClick={() => dispatch('menuItemClicked', {action: 'openInCurrentWindow'})}
        />
        <MenuItem 
            icon={restoreIcon}
            title="Open in new window"
            onClick={() => dispatch('menuItemClicked', {action: 'restore'})}
        />
        
        <MenuDivider/>
        {/if}
        <MenuItem 
            icon={folderCreateIcon}
            title="Save as workspace"
            onClick={() => dispatch('menuItemClicked', {action: 'save'})}
        />
        <MenuDivider/>
        {#if isOpen}
        <MenuItem 
            icon={closeIcon}
            title="Close"
            onClick={() => dispatch('menuItemClicked', {action: 'close'})}
        />
        {:else} 
        <MenuItem
            icon={deleteIcon}
            title="Delete"
            onClick={() => dispatch('menuItemClicked', {action: 'delete'})}
        />
        {/if}
    </div>
    
</div>

<style>
    .menu {
        display: flex;
        flex-direction: column;
    }

    .header {
        padding: 10px;
        font-size: 16px;
        border-bottom: 1px solid #333;
    }

    .items {
        display: flex;
        flex-direction: column;
        max-height: 500px;
    }
</style>