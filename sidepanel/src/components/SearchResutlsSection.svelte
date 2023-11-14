<script>
    export let title;
    export let count;

</script>

{#if count > 0}
<div class="section"> 
    <div class="header">
        <div class="title">{title}</div>
        <div class="count">
            Found {count}
        </div>
    </div>
    
    <div class="container">
        <slot/>
    </div>
</div>
{/if}


<style>
    .section .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 8px 5px;
    }

    .section .header .title {
        font-size: 14px;
        font-weight: 400;
    }

    .section .container {
        background-color: #333333;
        border-radius: 8px;
        overflow: hidden;
    }
</style>