<script>
  import Tab from "../tab/Tab.svelte";

    export let tabs;
    export let group;
    export let selectedTabs = [];
    export let lastSelectionUpdate;

    

</script>

<div class="tabs">
    {#each tabs as tab}
        <Tab {tab} {group} {selectedTabs} {lastSelectionUpdate}/>
    {/each}
</div>