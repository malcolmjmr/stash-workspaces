<script>
  import { createEventDispatcher } from "svelte";


    import { options } from "./menu_options";


    let dispatch = createEventDispatcher();

    export let lastResource;


    
    const onMenuItemClicked = (e, item) => {

        let resource = {
            top: e.pageY,
            left: e.pageX,
            height: lastResource.height,
            width: lastResource.width,
            type: item.type,
        };
        dispatch('createResource', resource);
    };

    /*
        note
        web view
        finder
        chat
    */
</script>

<div class="create-menu">
    {#each options as item} 
        <div class="menu-item" on:mousedown={(e) => onMenuItemClicked(e, item)}>
            <img src={item.icon} alt=''/>
            <span>{item.title}</span>
        </div>
    {/each}
</div>

<style>
    .create-menu {
        display:  flex;
        flex-direction: row;
        align-items: center;
    }

    .menu-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu-item img {
        height: 30px;
        width: 30px;
        border-radius: 8px;
        background-color: #333;
    }
    
    .menu-item span {
        margin-top: 10px;
    }
</style>