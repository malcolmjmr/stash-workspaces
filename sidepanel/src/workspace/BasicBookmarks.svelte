<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Bookmark from "../components/Bookmark.svelte";
    import { tryToGetBookmark, tryToGetBookmarkTree, tryToGetTabGroup } from "../utilities/chrome";
    import { get } from "svelte/store";
  import BookmarkTree from "./BookmarkTree.svelte";

    export let searchText = '';
    export let workspace;
    export let lastBookmarkUpdate = null;
    let bookmarkTree;

    let dispatch = createEventDispatcher();

    /*


    */


    let bookmarkCount = 0;

</script>


<div class="bookmarks">
    {#if bookmarkCount > 0}
    <div class="heading">
        Bookmarks
    </div>
    {/if}
    <div class="container">
        <BookmarkTree 
            {searchText} 
            {workspace} 
            {lastBookmarkUpdate} 
            bind:bookmarkCount
            on:bookmarkCount
            on:dataUpdated
            on:bookmarkDeleted
            on:locationSelected
        />
    </div>
</div>


<style>
    .bookmarks {
        margin: 12px 8px 50px 8px;
        display: flex;
        flex-direction: column;
        overflow: hidden; 
    }

    .heading {
        font-size: 16px;
        font-weight: 400;
        margin: 0px 0px 8px 8px;
    }

    .container {
        border-radius: 8px;
        background-color: #333333;
        overflow: hidden;
    }

</style>