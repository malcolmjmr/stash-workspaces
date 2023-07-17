<script>
    import { onMount } from "svelte";
    import folderIcon from "../icons/folder.png";
    import { colorMap } from "../utilities/colors";

    export let folder;

    let isSpace

    let title;
    let color;

    let loaded;
    onMount(() => {
        isSpace = folder.title.includes('[space');

        if (isSpace) {
            const splice = folder.title.splice('[space|');
            title = splice[0];
            color = splice.splice('|')[0].splice(']')[0];
        } else {
            title = folder.title;
        }
        loaded = true;
    });

    
    const openSuggestion = () => {

    };

</script>

{#if loaded}
    <div 
        class="suggestion{isSpace ? ' space' : ''}" 
        style={isSpace ? 'background-color: ' + colorMap[color] + ';' : ''}
        on:mousedown={openSuggestion}
    >
        {#if !isSpace}
            <img src={folderIcon} alt=''/>
        {/if}
        <div class="title">
            {title}
        </div>        
    </div>
{/if}

<style>
    .suggestion {
        width: calc(100% - 10px);
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .space {
        border-radius: 5px;
        padding: 5px;
        width: calc(100% - 20px);
    }

    img {
        filter: invert(1);
        height: 18px;
        width: 18px;
        margin-right: 5px;
    }

</style>