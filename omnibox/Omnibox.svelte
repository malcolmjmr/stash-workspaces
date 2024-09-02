<script>
  import TabUpdateModal from "../sidepanel/src/tab/TabUpdateModal.svelte";


</script>

<div class='omnibox'>
    <TabUpdateModal />
</div>

<style>

    .omnibox {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    :global(html, body, #app) {
        margin: 0px;
        background-color: #28282b;
        width: 100%;
        height: 100%;
        position: relative;
        font-family: system-ui, sans-serif;
        font-weight: 300;
        overflow: hidden;
        letter-spacing: 1px;
    }

</style>