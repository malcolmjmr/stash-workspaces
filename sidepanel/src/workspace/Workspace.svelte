<script>
    import { onMount } from "svelte";

    export let tabs;
    export let group;
    export let lastTabUpdate;
    export let activeTab;

    let folder;

    /*
        using the group id find its associated folder

    */

    onMount(() => {
        getFolder();
    });

    const getFolder = () => {};
</script>
