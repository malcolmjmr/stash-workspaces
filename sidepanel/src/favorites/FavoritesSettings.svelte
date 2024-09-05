<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { defaultDomains } from "../tab/domains";
    import { get, set } from "../utilities/chrome";
    import FavoriteDomainListItem from "./FavoriteDomainListItem.svelte";

    import favoriteDomainIcon from "../icons/favorite-domain.png";


    let dispatch = createEventDispatcher();

    let loaded;

    onMount(() => {
        load();
    });

    let favorites = [];
    const load = async () => {
        favorites = (await get('favorites')) ?? [];
        loaded = true;
    };

    const onRemoveDomain = async ({ detail }) => {
        const domain = detail;

        favorites = favorites.filter((d) => d.url != domain.url);

        await set({favorites: favorites });

        dispatch('dataUpdated', { favorites });

    };

</script>

<div class="domain-settings">
    <div class="title">
        
        <span>Favorites</span>
    </div>
    <div class="domains">
        {#each favorites as domain}
            <FavoriteDomainListItem {domain}  on:remove={onRemoveDomain}/>
        {/each}
    </div>
</div>

<style>

    .domain-settings {
        max-height: 500px;
        border-radius: 8px;
        user-select: none;
        display: flex;
        flex-direction: column;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size:  18px;
        font-weight: 500;
        padding: 10px;
        border-bottom: 1px solid #333;
    }

    .domains {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .domains::-webkit-scrollbar {
        display: none;
    }



</style>