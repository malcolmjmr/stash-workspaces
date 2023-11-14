<script>
    import { createEventDispatcher, onMount } from "svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import TrashHeader from "./TrashHeader.svelte";
    import GroupedWorkspaceSections from "../components/GroupedWorkspaceSections.svelte";
    import { removeContexts } from "../utilities/chrome";
    
    export let db = null;
    export let user = null;
    export let workspaces;

    let dispatch = createEventDispatcher();

    onMount(() => {
        load();
    });

    let deletedSpaces = [];

    let loaded;
    const load = () => {
        deletedSpaces = workspaces.filter((w) => w.deleted);
        deletedSpaces.sort((a, b) => a.deleted - b.deleted);
        loaded = true;
    };

    const emptyTrash = () => {
        removeContexts(deletedSpaces);
        dispatch('refreshSpaces');
    };


</script>

{#if loaded}
<div class="trash">
    <TrashHeader on:goBack on:emptyTrash={emptyTrash}/>
    <GroupedWorkspaceSections workspaces={deletedSpaces} />
   
</div>
{/if}

<style>
    .trash {
        display: flex;
        flex-direction: column;
        margin: 0px 10px;
    }

    .items {
        display: flex;
        flex-direction: column;
        background-color: #222222;
        border-radius: 8px;
        
    }



</style>