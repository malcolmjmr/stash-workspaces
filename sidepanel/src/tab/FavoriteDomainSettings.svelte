<script>
    import { onMount } from "svelte";
    import { defaultDomains } from "./domains";


    let loaded;

    onMount(() => {
        load();
    });

    let domains = [];
    const load = async () => {
        const storedDomains = (await get('domains')) ?? [];
        domains = defaultDomains;
        loaded = true;
    };

</script>

<div class="domain-settings">
    <div class="domains">
        {#each domains as domain}
            <div class="domain list-item">
                <img class="icon" src={domain?.favIconUrl} alt=""/>
            </div>
        {/each}
    </div>
</div>

<style>

</style>