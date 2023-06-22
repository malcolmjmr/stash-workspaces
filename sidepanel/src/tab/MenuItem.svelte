<script>
    export let title;
</script>

<div class="menu-item" on:mouseup>
    <div class="title">{title}</div>
</div>

<style>
    .menu-item {
        height: 20px;
        font-size: 14px;

        padding: 3px;
        border-radius: 5px;
    }

    .menu-item:hover {
        cursor: pointer;
        background-color: #999999;
    }

    .title {
        margin: 0px 3px;
    }
</style>
