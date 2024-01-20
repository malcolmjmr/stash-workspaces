<script>
    import { createEventDispatcher } from "svelte";
    import { colorMap } from "../utilities/colors";

    export let group = {};
    export let colors = [];

    let dispatch = createEventDispatcher();

    const setColor = (color) => {
        dispatch('colorSelected', color);
    };

</script>

<div class="colors">
    {#each Object.entries(colorMap) as [name, hex]}
        {#if colors.length == 0 || colors.includes(name)}
        <div class="color-container {group?.color == name ? ' selected' : ''}" style="border-color: {hex}">
            <div
                class="color circle"
                style="background-color: {hex}"
                on:mousedown={() => {
                    setColor(name);
                }}
            />
        </div>
        {/if}
    {/each}
</div>

<style>
    .colors {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px 3px 0px 3px;
        height: 25px;
        width: calc(100% - 6px);
    }

    .color-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        
    }

    .color {
        width: 16px;
        height: 16px;
        border-radius: 100%;
        margin: 1px;
    }

    .selected {
        width: 15px;
        height: 15px;
        border: 2px solid;
    }

    .selected .color {
        width: 10px;
        height: 10px;
    }

    .color:hover {
        cursor: pointer;
    }
</style>
