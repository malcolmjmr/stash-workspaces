<script>
    import { onMount } from "svelte";
  import Bookmark from "../components/Bookmark.svelte";

    export let workspace;

    let bookmarkTree;

    onMount(() => {
        
    });

</script>

<div class="bookmarks">
    <div class="container">
        {#each bookmarkTree as bookmark}
            <Bookmark {bookmark} on:bookmarkClicked on:bookmarkMoved/> 
        {/each}
    </div>
</div>

<style>

</style>