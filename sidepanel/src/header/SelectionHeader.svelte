<script>
    import { createEventDispatcher } from "svelte";
    import selectIcon from "../icons/checked-box.png";
    import unselectIcon from "../icons/remove-selection.png";

    export let tabs;
    export let selectedTabs;

    let dispatch = createEventDispatcher();

    const onCancelClicked = () => {
        selectedTabs = [];
    };

    let selectAll;

    const toggleSelectAll = () => {
        if (selectedTabs.length != tabs.length) {
            selectedTabs = tabs.filter((t) => t.groupId == -1);
            selectAll = true;
        } else {
            selectedTabs = [];
            selectAll = false;
        }
    }
</script>

<div class="selected">
    <div class="select-all end">
        <img 
            alt="Select All" 
            src={selectedTabs.length != tabs.length ? selectIcon : unselectIcon}
            on:mousedown={toggleSelectAll}
        />
    </div>

    <div class="text">
        <div class="count">{selectedTabs.length}</div>
        Tab{selectedTabs.length > 1 ? 's' : ''} Selected
    </div>
    <div class="cancel end" on:mousedown={onCancelClicked}>Cancel</div>
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
        font-size: 16px;
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
        text-align: end;
    }

    .cancel:hover {
        cursor: pointer;
    }

    .select-all {
        margin-left: 5px;
    }

    .select-all img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        
    }

    .select-all img:hover {
        cursor: pointer;
    }

    .end {
        width: 50px;
    }
</style>
