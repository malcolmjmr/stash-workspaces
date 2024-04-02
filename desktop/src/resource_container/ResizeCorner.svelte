<script>
  import { createEventDispatcher } from "svelte";


    export let sides;

    let dispatch = createEventDispatcher();
    
    let isInFocus;

    let cursor;

    $: {
        if (isInFocus) {
            if (sides.includes('top') && sides.includes('left')) {
                cursor = 'nwse-resize';
            } else if (sides.includes('top') && sides.includes('right')) {
                cursor = 'nesw-resize';
            } else if (sides.includes('bottom') && sides.includes('left')) {
                cursor = 'nesw-resize';
            } else if (sides.includes('bottom') && sides.includes('right')) {
                cursor = 'nwse-resize';
            }
        } else {
            cursor = null;
        }
    }

    const onMouseDown = () => {
        dispatch('startResize', sides);
    };

    const onMouseUp = () => {
        dispatch('stopResize')
    };

    
</script>

<div
    class="corner" 
    on:mouseenter={() => isInFocus = true}
    on:mouseleave={() => isInFocus = false}
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
    style="{sides[0]}: 0px; {sides[1]}: 0px;{cursor ? ' cursor: ' + cursor : ''}">
</div>

<style>
    .corner {
        height: 5px;
        width: 5px;
        border: 1px solid black;
        position: absolute;
    }
</style>