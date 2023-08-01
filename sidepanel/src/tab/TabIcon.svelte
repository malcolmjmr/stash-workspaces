<script>
    import { fade } from "svelte/transition";

    import webIcon from "../icons/web.png";
    import { createEventDispatcher } from "svelte";
    import { colorMap } from "../utilities/colors";
    import { getFavIconUrl } from "../utilities/chrome";
    import { onMount } from "svelte";

    export let tab;
    export let group;
    export let isClickable = true;
    export let isActive;


    let dispatch = createEventDispatcher();

    let isInFocus;

    let loaded;
    let favIconUrl;
    onMount(() => {
        init();
    });

    const init = async () => {
        favIconUrl = await getFavIconUrl(tab.url);
        loaded = true;
    };

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

        dispatch("tabIconClicked", tab);
    };

    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("tabId", tab.id);
    };

    const onDrop = (e) => {
        console.log("dropped on tabicon");
        console.log(tab);
        //dispatch('')
    };
</script>

{#if loaded}
<div
    class="tab-icon{isInFocus ? ' focus' : ''}{tab.active ? ' active' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:mouseup={onClick}
    on:dragstart={onDragStart}
    draggable="true"
>
    <img
        src={validIcon ? tab.favIconUrl : webIcon}
        style={!validIcon ? "filter: invert(1);" : ""}
        alt={tab.title}
        draggable="false"
    />

    {#if group}
        <div
            class="group-indicator"
            style="background-color: {colorMap[group.color]}"
        />
    {/if}
</div>
{/if}

<style>
    .tab-icon {
        position: relative;
        padding: 5px;
        height: 20px;
        width: 20px;
        user-select: none;
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
        user-select: none;
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
