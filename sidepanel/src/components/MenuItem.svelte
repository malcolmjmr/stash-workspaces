<script>
  import { createEventDispatcher, onMount } from "svelte";

  import toggleOffIcon from "../icons/toggle-off.png";
  import toggleOnIcon from "../icons/toggle-on.png";
  import { set, get } from "../utilities/chrome";
  import { quickActions } from "../stores";

    export let title = null;
    export let action;
    export let icon;
    export let onClick = null;
    export let onDoubleClick = null;
    export let context = null;
    export let tab = null;
    export let canToggle = false;

    let dispatch = createEventDispatcher();

    let loaded;
    onMount(() => {
        getQuickActions();
        if (!title && action?.title) {
            title = typeof action.title == 'string' ? action.title : action.title(tab);
        }
        if (!icon && action?.icon) {
            icon = typeof action.icon == 'string' ? action.icon : action.icon(tab);
        }

        if (!onClick && action?.onClick)  onClick = () => {
            const result = action.onClick(tab);

            if (result) {
                dispatch(result);
            }
        }
        loaded = true;
    });

    const getQuickActions = async () => {
        isQuickAction = $quickActions.find((a) => action?.id == a.id) != null;
    };

    const onMouseDown = () => {
        dispatch('click');
    };

    let isInFocus;
    let isQuickAction;

    const toggleQuickAction = async () => {
        isQuickAction = !isQuickAction;
        // save to context data
        const index = $quickActions.findIndex((a) => a.id == action.id);
        if (index > -1) {
            if (!isQuickAction) {
                quickActions.set($quickActions.filter((a) => a.id == action.id));
            }
        } else {
            if (isQuickAction) {
                quickActions.set([...$quickActions, action])
            }
        }

        set({ quickActions: $quickActions.map((a) => a.id) });
    }
</script>

{#if loaded}
<div class="menu-item"  on:mouseenter={() => isInFocus = true} on:mouseleave={() => isInFocus = false}>
    <div class="title" on:mousedown={onClick} on:dblclick={onDoubleClick}>
        {#if icon}
        <img src={icon} class="icon" alt={title}/>
        {/if}
        <span>{title}</span>
    </div>
    {#if onDoubleClick && isInFocus}
    <div class="info">
        double click
    </div>
    {/if}
    {#if tab && (isQuickAction || isInFocus) && canToggle}
        <img 
            class="quick-action-toggle"
            src={isQuickAction ? toggleOffIcon : toggleOnIcon } 
            alt="Toggle Quick Action" 
            on:mousedown={toggleQuickAction}
        />
    {/if}
</div>

{/if}

<style>
    .menu-item {
        height: 25px;
        font-size: 14px;
        padding: 5px 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .menu-item:hover {
        cursor: pointer;
        background-color: #444444;
    }
    
    .icon {
        margin-right: 5px;
    }

    

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-grow: 1;
    }

    .title img {
        height: 16px;
        width: 16px;
        filter: invert(1);
        margin-right: 5px;
    }

    .title span {
        margin: 0px 3px;
    }

    .info {
        font-size: 12px;
    }

    .quick-action-toggle {
        height: 18px;
        width: 18px;
        filter: invert(1);
        opacity: 0.8;
    }

    .quick-action-toggle:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>
