<script>
    import SectionContainer from "./SectionContainer.svelte";
    import Bookmark from "../components/Bookmark.svelte";

    export let queue;
    export let expanded;

    /*
        actions
        - open all 
        - open random 
        - sort?
    */
</script>

<SectionContainer title='Queue' bind:expanded>
    <div class="queue" slot="main">
        {#each queue as bookmark}
            <Bookmark {bookmark} />
        {/each}
    </div>
</SectionContainer>

