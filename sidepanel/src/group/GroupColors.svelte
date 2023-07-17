<script>
    import { colorMap } from "../utilities/colors";

    export let group;

    const setColor = (color) => {
        if (group.id) {
            chrome.tabGroups.update(group.id, { color });
        } else {
            group.color = color;
        }
        
    };
</script>

<div class="colors">
    {#each Object.entries(colorMap) as [name, hex]}
        <div class="color-container">
            <div
                class="color {group.color == name ? ' selected' : ''}"
                style="background-color: {hex}"
                on:mousedown={() => {
                    setColor(name);
                }}
            />
        </div>
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
    }

    .color-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 25px;
    }

    .color {
        width: 16px;
        height: 16px;
        border-radius: 100%;
    }

    .color.selected {
        width: 20px;
        height: 20px;
    }

    .color:hover {
        cursor: pointer;
        width: 20px;
        height: 20px;
    }
</style>
