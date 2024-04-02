<script>
    export let resource;

    /*
        messages

        input
            text area
            suggestions
    */

   let threads = [];
</script>

<div class="chat">

    <div class="messages">
        {#each resource.chat.messages as message}

        {/each}
    </div>

</div>

<style>

</style>