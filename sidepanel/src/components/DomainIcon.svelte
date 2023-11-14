<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getTabFavIconUrl } from "../utilities/chrome";

    export let domain;

    let dispatch = createEventDispatcher();

    let favIconUrl;

    let loaded;
    onMount(() => {
        loadFavIcon();
    });

    const loadFavIcon = async () => {
        favIconUrl = getTabFavIconUrl({url: 'https://' + domain.name});
        loaded = true;
    };

    const onHover = () => {
        dispatch('domainSelected', domain);
    };

</script>


<div class="domain-icon" on:mouseenter={onHover}>
    {#if loaded}
        <img src={favIconUrl} alt={domain.name} /> 
    {/if}
</div>

<style>

    .domain-icon {
        height: 20px;
        width: 20px;
        border-radius: 100%;
    }

</style>