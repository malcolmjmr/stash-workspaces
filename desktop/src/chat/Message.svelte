<script>
    export let message;

    let isInFocus;

    /*
        on click => copy?
        on long press => open search
        on double click => explain further 
        
    */

   let sections = message.content.map((c) => c.text).join('\n').split('\n');

</script>

<div class="message">

    {#if isInFocus}
    <div class="menu">

    </div>
    {/if}

    {#each sections as section}
        
    {/each}
</div>

<style>

</style>