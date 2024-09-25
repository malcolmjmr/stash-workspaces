<script>
    export let sort;

    import upArrowIcon from "../icons/arrow-up.png";
    import downArrowIcon from "../icons/arrow-down.png";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

</script>


<div class="sort-arrows" on:mousedown={() => dispatch('click')}>
    <img
        class="up-arrow {sort.ascending ? ' selected-direction' : ''}"
        src={upArrowIcon}
        alt=""
    />
    <img
        class="down-arrow {sort.ascending ? '' : ' selected-direction'}"
        src={downArrowIcon}
        alt=""
    />
</div>


<style>


    .sort-arrows {
        position: relative;
        height: 38px;
        color: white;
    }

    .sort-arrows:hover {
        cursor: pointer;
    }

    .up-arrow {
        position: absolute;
        top: 0;
    }

    .down-arrow {
        position: absolute;
        bottom: 0;
    }

    img {
        filter: invert(0.5);
        height: 30px;
        width: 30px;
        padding: 0;
        margin: 0;
    }
    .selected-direction {
        filter: invert(1);
    }

</style>