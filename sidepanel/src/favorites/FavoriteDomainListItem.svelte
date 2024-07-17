<script>
  import { createEventDispatcher, onMount } from "svelte";
  import removeIcon from "../icons/minimize.png";

    export let domain;

    let dispatch = createEventDispatcher();
    let isInFocus;

    onMount(() => {
        load();
    });

    let title = '';

    const load = () => {
        title = (new URL(domain.url)).hostname;

    };



    const onRemoveFavorite = () => {
        dispatch('remove', domain);
    };

</script>

<div class="favorite-list-item" on:mouseenter={() => isInFocus = true} on:mouseleave={() => isInFocus = false}>
    <img class="icon" src={domain?.favIconUrl} alt=""/>
    <div class="title">
        {title}
    </div>

    <div class="spacer">

    </div>

    {#if isInFocus}
        <img src={removeIcon} class="remove button" alt="Remove Favorite" on:mousedown={onRemoveFavorite}/>

    {/if}

</div>

<style>
    .favorite-list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 10px;
    }

    .favorite-list-item:hover {
        background-color: #222;
    }

    img {
        height: 18px;
        width: 18px;
    }

    img.icon {
        margin-right: 10px;
    }

    img.remove.button {
        
        filter: invert(1);
    }

    img.remove.button:hover {
        cursor: pointer;
    }

    .title {
        font-size: 14px;
    }

    .spacer {
        flex-grow: 1;
    }


</style>