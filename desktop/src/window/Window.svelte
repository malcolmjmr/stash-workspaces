<script>
    import Chat from "../chat/Chat.svelte";
    import Finder from "../finder/Finder.svelte";
    import Note from "../note/Note.svelte";
    import ResourceContainer from "../resource_container/ResourceContainer.svelte";
    import Webview from "../web/Webview.svelte";

    export let resource;



</script> 

<ResourceContainer {resource} on:actionClicked>
    <div 
        class="window"
    >
        {#if (resource.url && resource.url != null) }
            <Webview {resource} />
        {:else if (resource.note)} 
            <Note {resource}/>
        {:else if (resource.chat)}
            <Chat {resource}/>
        {:else}
            <Finder workspace={resource}/>
        {/if}
    </div>
</ResourceContainer>

<style>

    .window {
        position: absolute;
    }

</style>

