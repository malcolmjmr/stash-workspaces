<script>
    import { onMount } from "svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import TrashHeader from "./TrashHeader.svelte";
    
    export let db = null;
    export let user = null;
    export let workspaces;

    onMount(() => {
        load();
    });

    let deletedSpaces = [];

    const load = () => {
        deletedSpaces = workspaces.filter((w) => w.deleted);
        deletedSpaces.sort((a, b) => b.deleted - a.deleted);
    };

    const emptyTrash = () => {

    };


</script>

<div class="trash">
    <TrashHeader on:goBack on:emptyTrash={emptyTrash}/>
    <div class="items">
        {#each deletedSpaces as workspace} 
            <WorkspaceListItem {workspace} {user} {db} />
        {/each}
    </div>
   
</div>

<style>
    .trash {
        display: flex;
        flex-direction: column;
    }

    .items {
        display: flex;
        flex-direction: column;
        background-color: #222222;
        border-radius: 8px;
        margin: 15px;
    }



</style>