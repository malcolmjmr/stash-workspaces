<script>

    import collapsedIcon from "../icons/arrow-right.png";
    import expandedIcon from "../icons/arrow-down.png";

    export let title = '';
    export let isOpen = false;

</script>

<div class="header">
    <div class="title">
        {title}
    </div>
    <img 
        class="collapse-toggle" 
        alt="" 
        src={isOpen ? expandedIcon : collapsedIcon}
        on:mousedown={() => isOpen = !isOpen}
    >
</div>

<style>
    .header {
        width: calc(100% - 20px);
        font-size: 16px;
        font-weight: 300;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .collapse-toggle {
        filter: invert(1);
        height: 20px;
        width: 20px;
    }

    .collapse-toggle:hover {
        cursor: pointer;
    }


</style>