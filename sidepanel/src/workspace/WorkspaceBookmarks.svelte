<script>
  import Bookmark from "../components/Bookmark.svelte";
import { getTabFavIconUrl } from "../utilities/chrome";



    export let bookmarks = [];

    let bookmarkCount = 0;

    /*
        Instructions
        - Click the star icon next to a tab
    

    */

</script>

<div class="container">

    {#if bookmarks.length > 0} 
        <div class="bookmarks-container">
            {#each bookmarks as bookmark}
                <Bookmark {bookmark} on:bookmarkClicked/>
            {/each}
        </div>
    {:else}
        <div class="empty-container">
            <div class="title">Bookmarks</div>
            <!--
                <div class="instructions-container">
                    <div class="instruction">
                        Hover over a tab and click the star icon to save it to your bookmarks
                    </div>
                </div>
            -->
        </div>
    {/if}
</div>

<style>
    .container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    .bookmarks-container {
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

    .instruction {
        width: 150px;
        text-align: center;
    }
</style>