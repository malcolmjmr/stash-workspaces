<script>
    import { createEventDispatcher } from "svelte";
    
    export let section;

    let dispatch = createEventDispatcher();

    let longPressTimeout;
    let clickCount = 0;
    const onMouseDown = () => {
        // 
        if (clickCount == 0)  {
            longPressTimeout = setTimeout(() => {
                onLongPress();
            }, 1500);
        } else if (clickCount == 1) {
            clickCount += 1;
        } else {
            clickCount = 0;
        }
        
    };

    const onMouseUp = () => {
        if (longPressTimeout) {
            longPressTimeout = clearTimeout(longPressTimeout); 
            
        } else if (clickCount == 2) {
            dispatch('explain', section.text);
        }
    };

    const onLongPress = () => {
        dispatch('search', section.text);
    };
</script>

<div 
    class="section" 
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
>
    <div class="text"> 
        {section.text}
    </div>
</div>