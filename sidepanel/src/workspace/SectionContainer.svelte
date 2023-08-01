<script>

    import arrowDownIcon from "../icons/arrow-down.png";
    import arrowRightIcon from "../icons/arrow-right.png";

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
    <div class="heading" on:mousedown={() => expanded = !expanded}>
        <img class="arrow-icon" src={expanded ? arrowDownIcon : arrowRightIcon} alt=""> 
        <div class="title">
            {title}
        </div>
        {#if showHeadingActions}
            {#each headingActions as action}
                <img class="action" src={action.icon} alt={action.title} on:mousedown={action.onClick}/>
            {/each}
        {/if}
    </div>
    {#if expanded}
        <div class="main-container">
            <slot name="main"/>
        </div>
    {/if}
</div>

<style>
    .section-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 30px;
        border-bottom: 1px solid #555555;
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
        border-bottom: 1px solid #555555;
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
        width: 100%;
        overflow: scroll;
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