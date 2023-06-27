<script>
    import { fade } from "svelte/transition";

    import webIcon from "../icons/web.png";
    import { createEventDispatcher } from "svelte";
    import { colorMap } from "../utilities/colors";

    export let tab;
    export let group;
    export let isClickable = true;
    export let isActive;

    let dispatch = createEventDispatcher();

    let isInFocus;

    const onMouseEnter = () => {
        if (!isClickable) return;
        isInFocus = true;
        dispatch("showTabDetails", tab);
    };

    const onMouseLeave = () => {
        if (!isClickable) return;
        isInFocus = false;
    };

    let validIcon = tab.favIconUrl && tab.favIconUrl != "";

    $: {
        validIcon = tab.favIconUrl && tab.favIconUrl != "";
    }
    const onClick = () => {
        chrome.tabs.update(tab.id, { active: true });
        chrome.windows.update(tab.windowId, { focused: true });
    };
</script>

<div
    class="tab-icon{isInFocus ? ' focus' : ''}{tab.active ? ' active' : ''}"
    in:fade
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:mousedown={onClick}
>
    <img
        src={validIcon ? tab.favIconUrl : webIcon}
        style={!validIcon ? "filter: invert(1);" : ""}
        alt={tab.title}
    />

    {#if group}
        <div
            class="group-indicator"
            style="background-color: {colorMap[group.color]}"
        />
    {/if}
</div>

<style>
    .tab-icon {
        position: relative;
        padding: 5px;
        height: 20px;
        width: 20px;
    }

    .tab-icon:hover,
    .tab-icon.active {
        background-color: #666666;
        border-radius: 5px;
    }

    .tab-icon.focus {
        cursor: pointer;
    }

    img {
        height: 20px;
        width: 20px;
    }

    .group-indicator {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        bottom: 5px;
        right: 3px;
    }
</style>
