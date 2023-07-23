<script>
    import { createEventDispatcher } from "svelte";

    export let selectedTabs;

    let dispatch = createEventDispatcher();

    const onCancelClicked = () => {
        selectedTabs = [];
    };

    $: {
        console.log(selectedTabs);
    }
</script>

<div class="selected">
    <div class="text">
        <div class="count">{selectedTabs.length}</div>
        Selected
    </div>
    <div class="cancel" on:mousedown={onCancelClicked}>Cancel</div>
</div>

<style>
    .selected {
        min-height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 5px;
        height: 40px;
        width: calc(100% - 10px);
    }

    .text {
        font-size: 20px;
        display: flex;
        flex-direction: row;
    }

    .count {
        margin-right: 5px;
    }

    .cancel {
        font-size: 12px;
        opacity: 0.5;
        margin-right: 10px;
    }

    .cancel:hover {
        cursor: pointer;
    }
</style>
