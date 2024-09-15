<script>
    import { onMount } from "svelte";
    import micIcon from "../sidepanel/src/icons/mic.png";

    export let startOnLoad = true;

    onMount(() => {
        load();
    })
    
    let recognition;

    const load = () => {
        if (startOnLoad) startSpeechRecognition();
    }

    const startSpeechRecognition = async () => {

        try {

            recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

            recognition.onerror = (event) => {
                console.log(`Error occurred in recognition: ${event.error}`);
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                window.parent.postMessage(transcript, '*');
            };
            recognition.start();

        } catch (e) {
            console.log('got error:');
            console.log(e);
        }
    };

    
</script>

<img 
    class="mic button" 
    alt="More" src={micIcon} 
    on:mousedown={startSpeechRecognition} 
>


<style>

    .mic.button {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        
    }

    .mic.button:hover {
        cursor: pointer;
    }

    :global(html, body, #app) {
        margin: 0px;
        background-color: transparent;
        width: 100%;
        height: 100%;
        position: relative;
        font-family: system-ui, sans-serif;
        font-weight: 300;

    }

</style>