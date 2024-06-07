<script>
  import { createEventDispatcher, onMount } from "svelte";
    import Chat from "../chat/Chat.svelte";
    import Finder from "../finder/Finder.svelte";
    import Note from "../note/Note.svelte";
    import ResourceContainer from "../resource_container/ResourceContainer.svelte";
    import Webview from "../web/Webview.svelte";

    let dispatch = createEventDispatcher();

    export let workspace;
    export let resource;
    export let isSelected;

    onMount(() => {

    });

    const onMouseDown = (e) => {
        console.log('mouse down on window');
        if (!isSelected) {
            dispatch('resourceSelected', resource);
        }
    };

    


</script> 

<ResourceContainer 
    {resource}
    {isSelected} 
    on:actionClicked  
    on:saveResource 
    on:removeResource 
    on:resourceSelected
>
    <div 
        class="window"
        slot="resourceView"
        on:mousedown={onMouseDown}

    >
        {#if (resource.url && resource.url != null) }
            <Webview {resource} />
        {:else if (resource.note)} 
            <Note {resource} on:saveResource/>
        {:else if (resource.chat)}
            <Chat {resource}/>
        {:else}
            <Finder {workspace}/>
        {/if}
    </div>
</ResourceContainer>

<style>

    .window {
        position: relative;
        height: 100%;
        width: 100%;
    }

</style>

