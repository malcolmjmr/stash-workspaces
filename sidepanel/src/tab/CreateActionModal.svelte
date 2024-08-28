<script>
  import { createEventDispatcher } from "svelte";


    export let tab;
    export let workspace;


    let dispatch = createEventDispatcher();

    let input;


    const onKeyDown = (e) => {
        if (e.key == 'Enter') {

        }
    };

    const submitAction = () => {
        // 
    };

</script>



<div class="create-action-modal">
    <textarea 
        bind:value={input} 
        placeholder="Describe action..."
        on:keydown={onKeyDown}
    />
    <div class="submit button"></div>
</div>

<style>

    .create-action-modal {
        min-height: 75; 
        padding: 5px;
        border-radius: 8px;
        border: 1px solid #222;
    }

    .submit {
        
    }



</style>