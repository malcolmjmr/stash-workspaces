<script>
  import { onDestroy, onMount } from "svelte";
  import TabUpdateModal from "./tab/TabUpdateModal.svelte";
  import ModalContainer from "./components/ModalContainer.svelte";
  import { getActiveTab } from "./utilities/chrome";
  import { _lastRemovedTab } from "./stores";


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
            const tabIds = selectedTabs.map((t) => t.id);
            _lastRemovedTab.set(tabIds);
            chrome.tabs.remove(tabIds);
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

 
    
</script>

{#if showOmnibox}
    <ModalContainer on:exit={() => showOmnibox = false}>
        <TabUpdateModal on:exit={() => showOmnibox = false} inputText=''/>
    </ModalContainer>
    
{/if}