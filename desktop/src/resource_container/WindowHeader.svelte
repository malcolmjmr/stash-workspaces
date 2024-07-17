<script>
    import { createEventDispatcher, onMount } from "svelte";
    import WindowActions from "./WindowActions.svelte";


    export let resource;

    let dispatch = createEventDispatcher();

    let isSaved = resource.tags || resource.contexts;

    export let isInFocus;

    const onMouseDown = () => {
        if (resource.isMinimized) {
            resource.isMinimized = false;
            dispatch('saveResource', { resource });
        }
    };

    onMount(() => {
        loadTitle();
    });

    let displayedTitle = '';
    const loadTitle = () => {
        if (resource.title && resource.title != '') displayedTitle = resource.title;
        else if (resource.note) {
            try {
                if (typeof resource.note.text == 'object') {
                    resource.note.text = '';
                }
                displayedTitle = resource?.note?.text?.split('\n')[0] ?? '';
            } catch (e) {
        
            }
            
        }
        else if (resource.chat) displayedTitle = 'Untitled Chat';
        
    };

     


</script>

<div 
    class="header{resource.isMinimized ? ' minimized' : ''}"
>
    <div class="title">
        <input 
            type="text"
            bind:value={displayedTitle}  
            on:blur={() => dispatch('saveResource', {resource}) }
        />
    </div>
    {#if isInFocus && !resource.isMinimized}
        <WindowActions {resource} on:saveResource on:removeResource/>
    {/if}
</div>

<style>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 30px;
        height: 30px;
        background-color: #444;
        color: white;
        width: calc(100% - 20px);
        margin: 0px 5px;
        padding: 0px 5px;
        border-radius: 8px 8px 0px 0px;
    }

    .header.minimized {
        border-radius: 8px;
        max-width: 300px;
        height: auto;
    }

    .header.minimized:hover {
        cursor: pointer;
    }

    .title {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title input {
        width: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        color: white;
        overflow: scroll;
    }

    .end {
        width: 70px;
        padding: 0px 5px;
    }

    .more.end {
        display: flex;
        justify-content: end;
    }

    .more .border {
        border-radius: 100%;
        padding: 2px;

    }

    .more .border:hover {
        background-color: #333;
    }


    .more img {
        border-radius: 100%;
        padding: 1px;
    }


    img.button {
        filter: invert(1);
        height: 18px;
        width: 18px;
    }

    .button:hover {
        cursor: pointer;
    }

</style>