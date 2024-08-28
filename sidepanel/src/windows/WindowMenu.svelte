<script>
  import { createEventDispatcher } from "svelte";
  import MenuItem from "../components/MenuItem.svelte";

    let dispatch = createEventDispatcher();

    export let window;
    export let isOpen;
 
</script>

<div class="menu">
    {#if isOpen}
    <MenuItem 
        title="Stash"
    />
    {/if}
    <MenuItem 
        title="Save as..."
    />
    {#if isOpen}
    <MenuItem 
        title="Close"
    />
    {:else} 
    <MenuItem 
        title="Delete"
    />
    {/if}
</div>

<style>
    .menu {
        display: flex;
        flex-direction: column;
    }
</style>