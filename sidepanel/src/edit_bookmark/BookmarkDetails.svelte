<script>
  import { createEventDispatcher, onMount } from "svelte";
  import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
  import LocationSelection from "./LocationSelection.svelte";

  import addIcon from "../icons/add.png";

    export let workspaces;
    export let workspace;
    export let resource;
    export let isNativeBookmark = true;
    
    let dispatch = createEventDispatcher();

    let loaded;
    let canSave;

    onMount(() => {
        load();
    });

    let locations = [];
    const load = () => {
        if (isNativeBookmark) {
            
        }
    };

    let showLocationSelection;

    const saveBookmark = () => {
        dispatch('saveBookmark', resource);
    }

</script>

<div class="bookmark-details" >
    <div class="header">
        <div class="icon button">
            Cancel
        </div>
        <div class="title">
            Edit Bookmark
        </div>
        <div 
            class="icon button{canSave ? '': ' disabled'}"
            on:mousedown={saveBookmark}
        >
            Save
        </div>
    </div>
    {#if showLocationSelection}
        <LocationSelection {workspaces}/>
    {:else}
        <div class="resource-title">
            <img src={resource.favIconUrl} alt="" />
            <div class="container">
                <input
                    bind:value={resource.title}
                /> 
            </div>
        </div>
        <div class="resource-url">
            {resource.url}
        </div>
        <div class="locations">
            <div class="label">
                Folders
            </div>
            <div class="location-list">
                {#each locations as location}
                    <WorkspaceListItem workspace={location} isOpen={false}/>
                {/each}
                <div class="add" on:mousedown={() => showLocationSelection = true}>
                    <img src={addIcon} alt="add"/>
                    <span>Add Location</span>
                </div>
            </div>
        </div>
    {/if}

</div>

<style>
    .bookmark-details {
        display: flex;
        flex-direction: column;

    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 10px 5px;
    }

    .header .title {
        font-size: 16px;
    }

    .header .icon.button {
        color: #ffbf00;
    }

    .header .icon.button.disabled {
        color: #666666;
    }

    input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 1px;
        color: white;
    }

    input::placeholder {
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    .resource-title {
        font-size: 16px;
        font-weight: 800;
    }

    .resource-title img {
        height: 20px;
        width: 20px;
    }

    .resource-title .container {
        background-color: black;
        padding: 5px;
        overflow: scroll;
        border-radius: 8px;
    }

    .locations

    .location-list {
        background-color: #333333;
        display: flex;
        flex-direction: column;
        padding: 5px 8px;
        border-radius: 8px;
    }
</style>


