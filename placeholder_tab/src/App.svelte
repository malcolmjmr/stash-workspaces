<script>
  import { onMount } from "svelte";


    let tab;

    onMount(() => {
        getTabInfo();
        
    });

    const getTabInfo = async () => {
        tab = await chrome.runtime.sendMessage({
            command: 'getTabInfo'
        });

        setTitle();
        setFavIcon();
    };

    const setTitle = () => {

    };

    const setFavIcon = () => {

    };

</script>

<main>

    <div class="container">

    </div>
    
</main>