<script>
    export let title = null;
    

</script>

<div class="section">
    <div class="section-heading">
        {#if title}
        <div class="section-title">
            {title}
        </div>
        {/if}
        <Slot/>
    </div>
    
    <div class="section-items">
    </div>
</div>

<style>
    .section-items {
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: column;
    }

    .section-heading {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        margin: 0px 5px 5px 5px;

    }

    .section-title {
        font-size: 14px;
        font-weight: 400;
        
    }

    .divider {
        height: 0.5px;
       
        background-color: #555555;

    }
</style>