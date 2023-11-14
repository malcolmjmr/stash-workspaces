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

{#if bookmarkCount.length > 0}
<div class="bookmarks">
    <div class="heading">
        Bookmarks
    </div>
    <BookmarkTree 
        {searchText} 
        {workspace} 
        {lastBookmarkUpdate} 
        bind:bookmarkCount
        on:bookmarkCount
        on:dataUpdated
    />
</div>
{/if}

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

</style>