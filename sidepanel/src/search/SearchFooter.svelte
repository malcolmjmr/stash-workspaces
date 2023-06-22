<script>
    import FooterContainer from "../components/FooterContainer.svelte";

    export let searchResults;
</script>

<FooterContainer>
    <div class="result-count">
        {searchResults.length} Tab{#if searchResults.length > 1}s{/if}
    </div>
</FooterContainer>
