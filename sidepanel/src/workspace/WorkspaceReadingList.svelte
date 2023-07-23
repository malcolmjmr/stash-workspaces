<script>

    import Bookmark from "../components/Bookmark.svelte";
    export let queue = [];
    console.log(queue);
    console.log(queue.length);

    let queueCount = 0;

    /*
        Instructions
        - Click the star icon next to a tab
    

    */
</script>

<div class='container'>

    {#if queue.length > 0} 
        <div class="bookmarks-container">
            {#each queue as bookmark}
                <Bookmark {bookmark} on:bookmarkClicked/>
            {/each}
        </div>
    {:else}
        <div class="empty-container">
            <div class="title">Reading List</div>
        </div>
    {/if}
</div>

<style>
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .bookmarks-container {
        height: 100%;
        width: 100%;
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