<script>
  import { onMount } from "svelte";



    onMount(() => {
        addListeners();
    });


    const addListeners = () => {
        document.addEventListener('keydown', onKeyDown);
    };

    const onKeyDown = (e) => {
        if (document.activeElement) return;

        if (e.key == 'T') {

        } else if (e.key == 'I') {

        } else if (e.key == 'C') {

        } else if (e.key == 'G') {
            
        }
    };

    
</script>