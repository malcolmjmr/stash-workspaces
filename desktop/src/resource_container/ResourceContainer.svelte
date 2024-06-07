<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Border from "./Border.svelte";
    import ResizeCorner from "./ResizeCorner.svelte";
    import SelectionMenu from "./SelectionMenu.svelte";
  import ResourceMenu from "./WindowActions.svelte";
  import WindowHeader from "./WindowHeader.svelte";


    /*

        resizable corners

        edge 

    */

    let dispatch = createEventDispatcher();

    export let resource; 
    export let isSelected = false;


    let element;

    let isInFocus;

    let isDragging;


    let longPressTimeout;
    let mouseDownStartX;
    let mouseDownStartY;

    let showWindowHeader;
    
    

    let loaded;
    onMount(() => {
        load();
    });

    const load = () => {
        if (!resource.height) resource.height = 600;
        if (!resource.width) resource.width = 400;
        if (!resource.top) resource.top = 20;
        if (!resource.left) resource.left = 20;
        loaded = true;
    };



    let mouseDownData = {};
    
    const onMouseDown = (e) => {

        if (resource.isMinimized) {
            resource.isMinimized = false;
            dispatch('saveResource', { resource });
        } else {
            mouseDownData = {
                height: e.pageY - resource.height,
                width: e.pageX - resource.width,
                top: e.pageY - resource.top,
                left: e.pageX - resource.left,
            };

            
            isDragging = true;
            if (!mouseListenerIsActive) {
                activateMouseListener();
            }
        }

        dispatch('resourceSelected', resource);


    };

    const onMouseUp = () => {
        console.log('mouse up');
        if (mouseListenerIsActive) {
            deactivateMouseListener();
            mouseDownData = {}
            dispatch('saveResource', {resource, positionUpdate: true});
        }

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

    let isResizing;
    let mouseListenerIsActive;
    let dragStarted;
    const mouseListener = (e) => {
        
        
        if (isResizing) {
            resource.height = e.pageY - mouseDownData.height;
            resource.width = e.pageX - mouseDownData.width;
            console.log('expanding resource');
        } else if (isDragging) {
            console.log('dragging resource');
            
            resource.top = e.pageY - mouseDownData.top;
            resource.left = e.pageX - mouseDownData.left;

            if (!dragStarted) { 
                dragStarted = true;
            }
        }
    };

    const onStartResize = () => {
        if (!mouseListenerIsActive) {
            isResizing = true;
            activateMouseListener();
        }
    };

    const activateMouseListener = () => {
        console.log('activating mouse listener');
        document.addEventListener('mousemove', mouseListener);
        document.addEventListener('mouseup', onMouseUp);
        mouseListenerIsActive = true;
    };

    const onStopResize = () => {
        isResizing = false;
        if (mouseListenerIsActive) {
            deactivateMouseListener();
        }   
    };

    const deactivateMouseListener = () => {
        console.log('deactivating mouse listener');
        document.removeEventListener('mousemove', mouseListener);
        isDragging = false;
        mouseListenerIsActive = false;
        dragStarted = false;
        isResizing = false;
    };

    let showBorder = true

    const onMouseEnter = () => {
        isInFocus = true;
    };

    const onMouseLeave = () => {
        isInFocus = false;
        // if (mouseListenerIsActive) {
        //     deactivateMouseListener();
        // }
    };

    const onResourceSelected = ({ detail }) => {

    };

    let containerStyle;
    $: {
        isSelected;
        resource;
        refreshContainerStyle();
    }

    const refreshContainerStyle = () => {
        containerStyle = resource.isMinimized 
            ? ``
            : `height: ${resource.height}px; width: ${resource.width}px; top: ${resource.top}px; left: ${resource.left}px; z-index: ${isSelected ? '10' : '3'}`;
    };

</script>


{#if loaded}
<div 
    class="resource-container{resource.isMinimized ? ' minimized' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    
    style={containerStyle}
    bind:this={element}
    
>

    <div class="border{isDragging ? ' dragging' : ''}"
        on:mousedown={onMouseDown}
    >
        {#if !resource.isMinimized}
        <ResizeCorner 
            sides={['bottom', 'right']} 
            on:startResize={onStartResize}
        />
        {/if}

    </div>

    <WindowHeader {resource} on:saveResource on:removeResource {isInFocus}/>

    {#if !resource.isMinimized}
        <div class="content">
            <slot name="resourceView"/>
        </div>
    {/if}
    

    {#if showSelectionMenu}
        <SelectionMenu
            on:actionClicked
        />
    {/if}

</div>
{/if}

<style>
    .resource-container {
        position: absolute;
        display: flex;
        flex-direction: column;  
    }

    .resource-container.minimized {
        position: relative;
        margin: 0px 8px;
    }

    .resource-container.minimized:hover {
        cursor: pointer;
    }


    .border {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 0;
        
    }

    .border.dragging {
        z-index: 1000;
        cursor: grabbing;
    }

    .border.dragging:hover {
        cursor: grabbing;
    }

    .border:hover {
        cursor: grab;
    }

    .minimized .border:hover  {
        cursor: pointer;
    }

    .content {
        
        height: calc(100% - 5px);
        width: calc(100% - 10px);
        margin: 0px 5px 5px 5px;
        z-index: 1;
        background-color: #666666;
    }


</style>