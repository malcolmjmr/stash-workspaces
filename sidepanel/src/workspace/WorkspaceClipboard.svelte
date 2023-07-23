<script>
    //export let workspace;

    let clippingCount = 0;

    /*
        Instructions
        - Click the star icon next to a tab
    

    */
</script>

<div class="clipboard">

    {#if clippingCount > 0} 
        <div class="bookmarks-container">
            
        </div>
    {:else}
        <div class="empty-container">
            <div class="title">Clipboard</div>

        </div>
    {/if}
</div>

<style>
    .clipboard {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    

    .empty-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    .empty-container .title {
        font-size: 20px;
    }


</style>