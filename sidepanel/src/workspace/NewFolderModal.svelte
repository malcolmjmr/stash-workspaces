<script>
    import { createEventDispatcher } from "svelte";
    import folderIcon from "../icons/folder-filled.png";


    export let workspace;


    let dispatch = createEventDispatcher();

    let name = '';

    const onInput = async (e) => {
        if (e.key == "Enter") {
            await chrome.bookmarks.create({ 
                title: name,
                parentId: workspace.folderId,
                index: 0,
            });
            dispatch('bookmarkFolderCreated');
        }
    };
    
</script>

<div class="new-folder-modal">
    <img src={folderIcon} alt="" />
    <input 
        type="text" 
        bind:value={name} 
        placeholder="Enter folder name..."
        on:keydown={onInput}
    />
</div>


<style>
    .new-folder-modal {
        background-color: #222;
        display: flex;
        flex-direction: row;
        padding: 10px;
        overflow: scroll;
    }

    img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        filter: invert(1);
    }

    input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: 100;
        letter-spacing: 1px;
        color: white;
    }

    input::placeholder {
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }



</style>