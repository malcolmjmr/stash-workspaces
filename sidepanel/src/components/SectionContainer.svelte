<script>

    import arrowDownIcon from "../icons/arrow-down.png";
    import arrowRightIcon from "../icons/arrow-right.png";

    export let canCollapse = true;
    export let expanded = false;
    export let title;

    export let headingActions = [];

    let showHeadingActions;



    
</script>

<div 
    class="section-container{ expanded ? ' expanded': ''}"
    on:mouseenter={() => showHeadingActions = true } 
    on:mouseleave={() => showHeadingActions = false } 
>
    <div class="heading" >
        <div class="title">
            {title}
        </div>
        {#if showHeadingActions}
            {#each headingActions as action}
                <img class="action" src={action.icon} alt={action.title} on:mousedown={action.onClick}/>
            {/each}
        {/if}
        {#if canCollapse}
        <img class="arrow-icon" src={expanded ? arrowDownIcon : arrowRightIcon} alt="" on:mousedown={() => expanded = !expanded}> 
        {/if}
    </div>
    {#if expanded || !canCollapse}
        <div class="main-container">
            <slot name="main"/>
        </div>
    {/if}
</div>

<style>
    .section-container {
        display: flex;
        flex-direction: column;
        width: calc(100% - 20px);
        min-height: 30px;
        padding: 5px 10px;
        overflow: hidden;
    }

    .expanded {
        flex-grow: 1;
        flex-basis: 0;
    }

    .heading {
        min-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: calc(100% - 10px);
        padding: 5px;
        font-size: 18px;
        font-weight: 400;
    }

    img.arrow-icon {
        height: 16px;
        width: 16px;
        margin-right: 8px;
        filter: invert(1);

    }

    .title {
        flex-grow: 1;
    }

    .main-container {
        flex-grow: 1;
        width: 100% - 0px;
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        border-radius: 8px;
        background-color: #333;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .main-container::-webkit-scrollbar {
        display: none;
    }

    img.action {
        filter: invert(1);
        height: 16px;
        width: 16px;
        margin: 0px 5px;
        opacity: 0.8;
    }

    img.action:hover {
        cursor: pointer;
        opacity: 1;
    }



</style>