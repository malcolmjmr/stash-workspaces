<script>

    import folderIcon from "../icons/folder-filled.png";
    import openFolderIcon from "../icons/open-in-new-window.png";
    export let folder;

    let isInFocus;


    const openFolder = () => {
        
    };



</script>

<div class="folder" on:mouseenter={() => isInFocus = true} on:mouseleave={() => isInFocus = false}>

    <img class="folder-icon" src={folderIcon} alt=""/> 

    <div class="title">
        {folder.title}
    </div>

    {#if isInFocus}
        <div class="actions">
            <div class="action" on:mousedown={openFolder} >
                <img src={openFolderIcon} alt="Open Folder"/>
            </div>
        </div>
    {:else}
        <div class="time-ago">

        </div>
    {/if}
</div>

<style>
    .folder {
        width: calc(100% - 10px);
        height: 30px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title {
        font-size: 16px;
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .action img {
        font-size: 16px;
        width: 16px;
        filter: invert(1);
    }

    img.folder-icon {
        font-size: 20px;
        width: 20px;
        filter: invert(1);
        margin-right: 5px;
    }

</style>