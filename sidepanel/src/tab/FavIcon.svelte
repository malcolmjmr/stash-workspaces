<script>
    export let isSelected;
    export let tab;

    import emptyBoxIcon from "../icons/empty-box.png";
    import checkedBoxIcon from "../icons/checked-box.png";

    let favIconInFocus;
    const onMouseEnterFavIcon = () => {
        favIconInFocus = true;
    };

    const onMouseLeaveFavIcon = () => {
        favIconInFocus = false;
    };

    const onUnselected = () => {};

    const onSelected = () => {};
</script>

<div class="favicon-container">
    {#if isSelected}
        <img
            class="icon"
            src={checkedBoxIcon}
            alt="Unselect"
            on:mousedown={onUnselected}
        />
    {:else if favIconInFocus}
        <img
            class="icon"
            src={emptyBoxIcon}
            alt="Select"
            on:mousedown={onSelected}
        />
    {:else}
        <img
            class="favicon"
            on:mouseenter={onMouseEnterFavIcon}
            on:mouseleave={onMouseLeaveFavIcon}
            src={tab.favIconUrl}
            alt={tab.title}
        />
    {/if}
</div>

<style>
    .favicon-container {
        min-width: 20px;
        overflow: hidden;
        display: flex;
    }

    .favicon {
        height: 20px;
        width: 20px;
    }
</style>
