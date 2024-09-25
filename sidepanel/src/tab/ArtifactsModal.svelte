<script>
    import Artifact from "./Artifact.svelte";

    export let tab;

</script>

<div class="artifacts">
    {#each tab.resource?.artifacts ?? [] as artifact}
        <Artifact {artifact}  />
    {/each}
</div>

<style>
    .artifacts {
        max-height: 600px;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
</style>