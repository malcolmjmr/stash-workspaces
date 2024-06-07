<script>
  import { onMount } from "svelte";

    export let resource;

    /*

    */
    let url;
    onMount(() => {
        load();
    });

    let loaded;
    let isYoutubeVideo;
    const load = () => {
        url = resource.url;
        if (resource.url.includes('youtube.com/watch')) {
            const youtubeUrl = new URL(resource.url);
            const videoId = youtubeUrl.searchParams.get('v');
            if (videoId) {
                url = 'https://www.youtube.com/embed/'+videoId;
                isYoutubeVideo = true;
            }
            
        }
        loaded = true;
    }
</script>

<div class="container">
    {#if loaded}

        <iframe src={url} name="" height="100%" width="100%"/>

    {/if}
</div>

<style> 

    .container {
        height: 100%;
        width: 100%;
    }

    iframe {
        border: none;
        width: 100%;
        height: 100%;
    }
</style>

