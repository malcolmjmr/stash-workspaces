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
    };


    function requestMicrophoneAccess() {
        navigator.permissions.query({ name: 'microphone' }).then(function(permissionStatus) {
            if (permissionStatus.state === 'granted') {
                startSpeechRecognition();
            } else if (permissionStatus.state === 'prompt') {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(startSpeechRecognition)
                    .catch((e) => console.log('error:', e));
            } else if (permissionStatus.state === 'denied') {
                alert('Microphone access is blocked. Please update your settings to allow microphone access for this extension.');
            }

            permissionStatus.onchange = function() {
                console.log('Microphone permission status has changed to: ', this.state);
                if (this.state === 'granted') {
                    startSpeechRecognition();
                }
            };
        });
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