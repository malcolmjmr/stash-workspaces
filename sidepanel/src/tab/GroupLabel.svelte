<script>
    import { createEventDispatcher } from "svelte";

    import collapseIcon from "../icons/collapse.png";
    import expandIcon from "../icons/expand.png";
    import moreIcon from "../icons/more-vert.png";
    import closeIcon from "../icons/close.png";
    import { slide } from "svelte/transition";

    export let group = { title: "Untitle Group" };
    export let isCollapsed = null;
    export let tabs = [];
    export let lastGroupUpdate = null;

    let dispatch = createEventDispatcher();
    let isInfocus;
    let showMore;

    const onMouseEnter = () => {
        isInfocus = true;
    };

    const onMouseLeave = () => {
        isInfocus = false;
        showMore = false;
    };

    const onTitleClicked = () => {
        dispatch("toggleCollapse", group);
    };

    const onCloseClicked = () => {};

    const toggleCollapse = () => {
        dispatch("toggleCollapse", group);
    };
</script>

<div
    class="group-label"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
>
    <div
        class="container"
        style="background-color: {group.color ?? 'lightgrey'};{showMore
            ? 'border-radius: 5px 5px 0px 0px;'
            : ''}"
    >
        <div class="title">
            {group.title}
            {#if isCollapsed} ({tabs.length}) {/if}
        </div>
        <div class="spacer" />

        {#if isInfocus}
            <div class="actions">
                <img
                    src={isCollapsed ? expandIcon : collapseIcon}
                    alt="Toggle Collapsed"
                    on:mousedown={toggleCollapse}
                />
                <img
                    src={moreIcon}
                    alt="More"
                    on:mousedown={() => (showMore = true)}
                />

                <img src={closeIcon} alt="close" on:mouseup={onCloseClicked} />
            </div>
        {/if}
    </div>
    {#if showMore}
        <div
            class="more-actions"
            style="border-color: #555555;"
            in:slide
            out:slide
        >
            <div class="action">Save Group</div>
            <div class="action">Close Group</div>
            <div class="action">Move Group to New Window</div>
        </div>
    {/if}
</div>

<style>
    .group-label {
        width: 100%;

        display: flex;
        flex-direction: column;

        justify-content: center;
        margin: 5px 0px;
        user-select: none;
    }

    .container {
        margin: 0px 5px;
        padding: 5px;
        min-height: 25px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title {
        color: black;
        font-weight: 400;
    }

    .title:hover {
        cursor: pointer;
    }

    .spacer {
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .actions img {
        height: 16px;
        width: 16px;
        padding: 2px;
        opacity: 0.6;
    }

    .actions img:hover {
        cursor: pointer;
        opacity: 1;
    }

    .more-actions {
        margin: 0px 5px;
        font-size: 14px;
        border-right: 2px solid;
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-radius: 0px 0px 5px 5px;
    }

    .action {
        padding: 5px;
    }

    .action:hover {
        cursor: pointer;
        background-color: #555555;
    }
</style>
