<script>
    import folderCreateIcon from "../icons/new-folder.png";

</script>

<div class="create-folder" on:mousedown>
    <img src={folderCreateIcon} alt="Create Folder"/>
    <span>Create folder</span>
</div>

<style>

    .create-folder {
        width: calc(100% - 8px);
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.7;
        padding: 5px 4px;
    }

    .create-folder:hover {
        cursor: pointer;
        opacity: 1;
    }

    .create-folder img {
        height: 22px;
        width: 22px;
        filter: invert(1);
        margin-right: 3px;
    }

</style>