<script>
    import { loadBundle } from "firebase/firestore";
    import { onMount } from "svelte";

    import backArrowIcon from "../icons/back.png";
    import SearchBox from "../components/SearchBox.svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import { Views } from "../view";
    import GroupedWorkspaceSections from "../components/GroupedWorkspaceSections.svelte";

    export let db = null;
    export let user = null;
    export let view;
    export let workspaces;

    onMount(() => {
        load();
    });


    let loaded;
    const load = () => {
        workspaces = workspaces.filter((w) => !w.deleted);
        visibleWorkspaces = [...workspaces];
        //updateVisibleWorkspaces();
        loaded = true;
    };

    

    let searchText = '';

    $: {
        searchText;
        updateVisibleWorkspaces();
    }
    let visibleWorkspaces = [];

    const updateVisibleWorkspaces = () => {
        const text = searchText.toLowerCase();
        visibleWorkspaces = workspaces.filter((w) => w.title?.toLowerCase().includes(text));
        visibleWorkspaces.sort((a, b) => (b.updated ?? 0) - (a.updated ?? 0));
    };

</script>

{#if loaded}
<div class="history">
    <div class="container">
        <div class="header">
            <div class="back-button" on:mousedown={() => view = Views.home}>
                <img alt="" src={backArrowIcon}/>
                <span> Back </span>
            </div>
            <div class="title">
                History
            </div>
            <div class="spacer">

            </div>
        </div>

        <SearchBox bind:searchText />
        <GroupedWorkspaceSections workspaces={visibleWorkspaces} {user} {db}/>

    </div>
</div>
{/if}

<style>
    .history {
        display: flex;
        flex-direction: column;
    }

    .container {
        padding: 0px 10px;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0px;
    }

    .header .title {
        font-size: 23px;
        font-weight: 500;
    }

    .header .spacer {
        width: 70px;
    }

    .back-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70px;
    }

    .back-button:hover {
        cursor: pointer;
    }

    .back-button img {
        height: 15px;
        width: 15px;
        filter: invert(1);
    }

</style>