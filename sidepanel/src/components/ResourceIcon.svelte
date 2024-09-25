<script>
  import { createEventDispatcher } from "svelte";


    let dispatch = createEventDispatcher();

    export let fontSize = 20;

    export let resource;

    

</script>

<div class="resource-icon" style="font-size: {fontSize};" on:mousedown={() => dispatch('click', resource)}>
    {resource.icon}
</div>

<style>
    .resource-icon {
        min-height: 24px;
        min-width: 24px;
        padding: 1px;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    .resource-icon:hover {
        cursor: pointer;
        background-color: #777;
    }
</style>