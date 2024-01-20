<script>
    import { createEventDispatcher, onMount } from "svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import TrashHeader from "./TrashHeader.svelte";
    import GroupedWorkspaceSections from "../components/GroupedWorkspaceSections.svelte";
    import { removeContext, removeContexts } from "../utilities/chrome";
  import { deleteDoc, doc } from "firebase/firestore";
  import { StorePaths } from "../utilities/storepaths";
  import Workspace from "../workspace/Workspace.svelte";
  import { allWorkspaces, lastWorkspaceUpdate } from "../stores";
  import { Views } from "../view";
    
    export let db = null;
    export let user = null;
    export let workspaces;
    export let view;

    let dispatch = createEventDispatcher();

    onMount(() => {
        load();
    });

    let deletedSpaces = [];

    let loaded;
    const load = () => {
        deletedSpaces = $allWorkspaces.filter((w) => w.deleted);
        deletedSpaces.sort((a, b) => b.deleted - a.deleted);
        if (deletedSpaces.length == 0) view = Views.home;
        loaded = true;
    };

    $: {
        $lastWorkspaceUpdate;
        load();
    }

    const emptyTrash = () => {
        removeContexts(deletedSpaces);
        workspaces = workspaces.filter((w) => !w.deleted);
        allWorkspaces.set(workspaces);
        if (user) {
            for (const space of deletedSpaces) {
                const ref = doc(db, StorePaths.userContext(user.id, space.id));
                deleteDoc(ref);
            }
        }
        dispatch('refreshSpaces');
        view = Views.home;
    };

    const onPermenantlyDeleteWorksapce = ({ detail }) => {
        const workspace = detail;
        workspaces = workspaces.filter((w) => w.id != workspace.id );
        removeContext(workspace);
        allWorkspaces.set(workspaces);
        if (user) {
            const ref = doc(db, StorePaths.userContext(user.id, workspace.id));
            deleteDoc(ref);
        }
        dispatch('refreshSpaces');
        load();
        if (deletedSpaces.length == 0) {
            view = Views.home;
        }
    };

</script>

{#if loaded}
<div class="trash">
    <TrashHeader on:goBack on:emptyTrash={emptyTrash}/>
    <GroupedWorkspaceSections 
        workspaces={deletedSpaces} 
        sortBy='deleted'
        on:permenantlyDeleteWorkspace={onPermenantlyDeleteWorksapce}
        on:dataUpdated
    />
   
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