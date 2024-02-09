<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getTabFavIconUrl } from "../utilities/chrome";

    export let domain;
    export let size = 20;

    let dispatch = createEventDispatcher();

    let favIconUrl;

    let loaded;
    onMount(() => {
        loadFavIcon();
    });

    const loadFavIcon = async () => {
        favIconUrl = domain.favIconUrl ??  getTabFavIconUrl({url: 'https://' + domain.url});
        loaded = true;
    };

    const onHover = () => {
        dispatch('domainSelected', domain);
    };


</script>


<div 
    class="domain-icon" 
    style="height: {size}px; width: {size}px;" 
    on:mouseenter={onHover}
    on:mousedown
>
    {#if loaded}
        <img src={favIconUrl} alt={domain.url} /> 
    {/if}
</div>

<style>

    .domain-icon {
        height: 20px;
        width: 20px;
        border-radius: 100%;
    }

    img {
        height: 100;
        width: 100%;
    }

</style>