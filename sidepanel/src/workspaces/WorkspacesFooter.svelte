<script>
  import { onMount } from "svelte";


    import createFolderIcon from "../icons/new-folder.png";
    import publicIcon from "../icons/public.png";
    import trashIcon from "../icons/delete.png";

    export let updated;
    export let showTrash;
    export let workspaces;
    export let recentFolders;


    let recentFoldersCount = 0;
    let workspaceCount = 0;

    let loaded;
    onMount(() => {
        getCounts();
        loaded = true;
    });

    const getCounts = () => {
        recentFoldersCount =  recentFolders?.length ?? 0;
        workspaceCount = workspaces?.filter((w) => showTrash ? w.deleted : !w.deleted).length ?? 0;
    }

    $: {
        updated;
        getCounts();
    }

</script>

{#if workspaceCount || recentFoldersCount}
<div class="footer">
    <div class="action spacer"/>  
    <div class="counts">
        {#if workspaceCount > 0}
            
            <div class="count">{workspaceCount}</div>
            <span>Saved Group{workspaceCount > 1 ? 's' : ''}</span>
        {:else}
            <div class="count">{recentFoldersCount}</div>
            <span>Recent Folder{recentFoldersCount > 1 ? 's' : ''}</span>
        {/if}
    </div>
    <div class="action">
 
            {#if !showTrash && workspaceCount > 0}
                <img src={trashIcon} alt="Trash" on:mousedown={() => showTrash = true}/>
            {/if}
        
        
    </div>
</div>
{/if}

<style>
    .footer {
        min-height: 30px;
        height: 30px;
        border-top: 1px solid #555555;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .counts {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        opacity: 0.8;
    }

    div.count {
        margin-right: 5px;
    }

    .action { 
        min-width: 30px;
    }

    .action > img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        opacity: .8;
    }

    .action > img:hover {
        opacity: 1;
    }
</style>