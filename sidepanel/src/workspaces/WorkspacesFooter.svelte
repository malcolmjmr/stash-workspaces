<script>

    import createFolderIcon from "../icons/new-folder.png";
    import publicIcon from "../icons/public.png";

    export let workspaces;
    export let recentFolders;

</script>

<div class="footer">
    <div class="action">
        <img src={publicIcon} alt="Explore"/>
    </div>

        {#if workspaces.length > 0 || recentFolders.length > 0}
            <div class="counts">
                {#if workspaces.length > 0}
                    <div class="count">{workspaces.length}</div>
                    <span>Workspace{workspaces.length > 1 ? 's' : ''}</span>
                {:else}
                    <div class="count">{recentFolders.length}</div>
                    <span>Recent Folder{recentFolders.length > 1 ? 's' : ''}</span>
                {/if}
            </div>
        {/if}


    <div class="action">
        <img src={createFolderIcon} alt=""/>
    </div>
</div>

<style>
    .footer {
        height: 30px;
        border-top: 1px solid #555555;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        width: calc(100% - 10px);
        justify-content: space-between;
    }

    .counts {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div.count {
        margin-right: 5px;
    }

    .action > img {
        height: 20px;
        width: 20px;
        filter: invert(1);
    }
</style>