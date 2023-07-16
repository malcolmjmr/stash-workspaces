<script>
    import { onMount } from "svelte";
    import folderIcon from "../icons/folder.png";
  import { colorMap } from "../utilities/colors";

    export let folder;

    let isSpace = folder.title.includes('[space');

    let title = {};
    let color;

    let loaded;
    onMount(() => {

    });

    


</script>
{#if loaded}
    <div 
        class="suggestion{isSpace ? ' space' : ''}" 
        style={isSpace ? 'background-color: ' + colorMap[color] + ';' : ''}
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
        width: 100%;
        height: 50px;
    }

    
</style>