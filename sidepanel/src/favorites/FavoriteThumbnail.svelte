<script>
    import { createEventDispatcher } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import { _settings } from "../stores";


    let dispatch = createEventDispatcher();

    export let favorite;

    let isInFocus;

</script>

<div 
    class="favorite" 
    style="background-color: {isInFocus ? $_settings?.appearance?.hoverColor ?? '#444' : 'transparent'}"
    on:mousedown={(e) => dispatch('clicked', favorite)} 
    on:mouseenter={(e) => isInFocus = true}
    on:mouseleave={(e) => isInFocus = false}
>
    <DomainIcon domain={favorite} />
</div>

<style>
    .favorite {
        padding: 5px;
        border-radius: 8px;
    }

    .favorite:hover {
        cursor: pointer;
    }
</style>