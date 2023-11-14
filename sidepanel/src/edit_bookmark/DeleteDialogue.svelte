<script>
  import { createEventDispatcher } from "svelte";

    export let bookmark;

    let isFolder = !bookmark?.url;

    let dispatch = createEventDispatcher();


</script>

<div class="dialog">
    <div class="prompt">
        Are you sure you want to delete this {isFolder ? 'folder' : 'bookmark'}?
    </div>
    <div class="options">
        <div class="yes option" on:mousedown={() => dispatch('yes')}>
            Yes
        </div>
        <div class="no option" on:mousedown={() => dispatch('no')}>
            No
        </div>
    </div>
</div>

<style>
    .dialog {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 8px;
        background-color: #111111;
    }

    .prompt {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    .options {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 10px 0px;
    }

    .option {
        width: 50px;
        padding: 2px 5px;
        border-radius: 8px;
        background-color: #333333;
        opacity: 0.8;
        text-align: center;
        margin: 0px 10px;
    }

    .option:hover {
        opacity: 1;
        background-color: #555555;
    }

    .yes {
        color: red;
    }

    .no {
        color: yellow;
    }




</style>