<script>
    import { createEventDispatcher, onMount } from "svelte";
    import GroupedWorkspaceSections from "../components/GroupedWorkspaceSections.svelte";
    import { removeContext, removeContexts } from "../utilities/chrome";
    import { deleteDoc, doc } from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";
    import { allWorkspaces, lastWorkspaceUpdate } from "../stores";
    import backIcon from "../icons/back.png";
    
    import { Views } from "../view";
    
    export let db = null;
    export let user = null;
    export let workspaces;
    export let view;

    let dispatch = createEventDispatcher();

    onMount(() => {
        load();
    });

    let archivedSpaces = [];

    let loaded;
    const load = () => {
        archivedSpaces = $allWorkspaces.filter((w) => w.archived);
        archivedSpaces.sort((a, b) => b.archived - a.archived);
        if (archivedSpaces.length == 0) view = Views.home;
        loaded = true;
    };

    $: {
        $lastWorkspaceUpdate;
        load();
    }

    const goBack = () => {
        dispatch('goBack');
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
        if (archivedSpaces.length == 0) {
            view = Views.home;
        }
    };

    const onDataUpdated = ({ detail }) => {

        load();

        dispatch('dataUpdated', detail);
    };

</script>

{#if loaded}
<div class="archive">
    <div class="header">
        <div class="top">
            <div class="back action end" on:mousedown={goBack}>
                <img src={backIcon} alt="Back"/> 
                <span>Back</span>
            </div>
            <div class="title">
                <span>Archive</span>
            </div>
            <div class=" end"> 
      
            </div>
        </div>
    </div>
    <GroupedWorkspaceSections 
        workspaces={archivedSpaces} 
        sortBy='archived'
        on:permenantlyDeleteWorkspace={onPermenantlyDeleteWorksapce}
        on:dataUpdated={onDataUpdated}
    />
   
</div>
{/if}

<style>
    .archive {
        display: flex;
        flex-direction: column;
        margin: 0px 10px;
    }

    .header {
          display: flex;
          flex-direction: column;
      }
  
      .header .top {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0px 0px 0px;
          
      }
  
      .header .top .end {
          width: 80px;
      }
  
      .title {
          font-size: 20px;
          font-weight: 500;
          display: flex;
          flex-direction: row;
          align-items: center;
      }
  
  
      .action:hover {
          cursor: pointer;
      }
  
      .back.action {
          display: flex;
          flex-direction: row;
          align-items: center;
      }
  
      .back img {
          height: 14px;
          width: 14px;
          filter: invert(1);
      }

</style>
