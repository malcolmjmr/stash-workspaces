<script>
  import { onDestroy, onMount } from "svelte";
  import TabUpdateModal from "./tab/TabUpdateModal.svelte";
  import ModalContainer from "./components/ModalContainer.svelte";
  import { getActiveTab } from "./utilities/chrome";


    export let selectedTabs;

    let showOmnibox;

    onMount(() => {
        addListeners();
    });

    onDestroy(() => {
        removeListeners();
    })


    const addListeners = () => {
        document.addEventListener('keydown', onKeyDown);
       
    };

    
    const removeListeners = () => {
        document.removeEventListener('keydown', onKeyDown);
    
    };  

    


    const onKeyDown = async (e) => {

        if (document.activeElement != document.body || showOmnibox) return;

        const isAlphanumeric = (str) => /^[a-z0-9]+$/i.test(str);

        if (e.keyCode == 190) {
            showOmnibox = true;
            //tabModalInputText = e.key;
        } else if (e.key == 'w' && e.metaKey) {
            chrome.tabs.remove(selectedTabs.map((t) => t.id));
            selectedTabs = [];
        } else if (e.key == 'b') {
            
        }

        // if (e.key == 't') {
        //     showNewTabModal = true;
        // } else if (e.key == 'i') {
        //     chrome.windows.create({ focused: true, incognito: true });
        // } else if (e.key == 'n' && !e.metaKey) {
        //     chrome.windows.create({ focused: true });
        // }

        
    };

    async function launchPiP(tabId) {
        // First, check if we have the scripting permission
        const permissions = await chrome.permissions.getAll();
        if (!permissions.permissions.includes('scripting')) {
            // If we don't have the permission, request it
            const granted = await chrome.permissions.request({
            permissions: ['scripting']
            });
            
            if (!granted) {
            console.log('Scripting permission was denied');
            // Inform the user that the feature is unavailable without this permission
            return;
            }
        }

        // If we have the permission (either already or just granted), proceed with PiP
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: () => {
            const video = document.querySelector('video');
            if (video) {
                if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
                } else if (document.pictureInPictureEnabled) {
                video.requestPictureInPicture();
                }
            } else {
                console.log('No video element found on this page');
            }
            }
        });
    }
    
</script>

{#if showOmnibox}
    <ModalContainer on:exit={() => showOmnibox = false}>
        <TabUpdateModal on:exit={() => showOmnibox = false} inputText=''/>
    </ModalContainer>
    
{/if}