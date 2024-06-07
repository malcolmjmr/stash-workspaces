<script>
  import { createEventDispatcher } from 'svelte';


    import { actions } from './selection_actions.js';

    let dispatch = createEventDispatcher();


    const onActionClicked = (action) => {
      dispatch('actionClicked', action);
    };
</script>

<div class="selection-menu">
    {#each actions as action}
    <div class="menu-item" on:mousedown={() => onActionClicked(action)}>
        <img src={action.icon} alt='' />
        <span>{action.title}</span>
    </div>
    {/each}
</div>

<style>
    .selection-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .menu-item {
        display: flex;
        padding: 5px;
        border-radius: 8px;
        background-color: #333;
    }

    .menu-item:hover {
        background-color: #444;
    }
</style>