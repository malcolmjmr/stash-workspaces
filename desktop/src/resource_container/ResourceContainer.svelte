<script>
  import { createEventDispatcher } from "svelte";
    import Border from "./Border.svelte";
    import ResizeCorner from "./ResizeCorner.svelte";
  import SelectionMenu from "./SelectionMenu.svelte";


    /*

        resizable corners

        edge 

    */

    let dispatch = createEventDispatcher();

    export let resource; 



    let isInFocus;

    let isDragging;
    let height = 300; 
    let width = 300;
    let top = 20;
    let left = 20;

    const onDragStart = () => {
        if (!isDragging) {
            isDragging = true;
        }
    };

    const onDragging = () => {
        
    };

    const onDragEnd = () => {
        if (isDragging) {
            isDragging = false;
        }
    };


    const onMouseDown = () => {
        
    };

    const onMouseUp = () => {

    };

    const onBorderDragStart = (side) => {
        dispatch('startDrag');
    };

    let showSelectionMenu;

    /*
        select text on
            webview
            note
            chat

        select action
            search
            copy
            create highlight
            create note
            label/tag
    */
    

</script>

<div 
    class="resource-container"
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
    style="height: {height}; width: {width}; top: {top}; left: {left};"
>
    <div class="border"
        style="{isDragging ? 'cursor: grabbing;' : ''}"
        on:mousedown={onBorderDragStart}
    >
        {#each ['top left', 'top right','bottom left','bottom right'] as cornerInfo} 
            <ResizeCorner sides={cornerInfo.split(' ')} /> 
        {/each}
    </div>

    <slot name="resourceView"/>

    {#if showSelectionMenu}
        <SelectionMenu
            on:actionClicked
        />
    {/if}

</div>

<style>
    .resource-container {
        position: relative;
    }

    .border {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .border:hover {
        cursor: grab;
    }

</style>