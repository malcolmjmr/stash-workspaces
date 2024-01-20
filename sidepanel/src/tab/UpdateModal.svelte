<script>
    import { onMount } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";

    export let tab;

    let suggestions = [];
    let history = [];
    let domains  = [];
    

    let inputText = '';

    onMount(() => {
        checkForSearchQuery();
        getDomains();
    });

    const checkForSearchQuery = () => {

        // check domain
        // check if domain has search template
        // check url against search template 

    };

    const getDomains = () => {
        // favorite domains from open tabs 
        // favorite domains from settings
        // favorite domains from history
        // favorite domains from bookmarks
        // default domains
        
    }

    const onDomainClicked = () => {
        let url = domain.url;
        if (inputText.length > 0 && !inputText.includes('.') && inputText.includes(' ')) {
            // get search query url 
        } 
        
        chrome.tabs.update(tab.id, { url });
        
    }

</script>

<ModalContainer on:exit>
    <div class="container">
        <div class="url-field">

        </div>
        <div class="divider"/>
        <div class="domains">
            {#each domains as domain}
                <DomainIcon {domain} on:click={onDomainClicked}/>
            {/each}

        </div>


        {#if history.length > 0}
        <div class="divider"/>
        <div class="history">

        </div>
        {/if}

        {#if suggestions.length > 0}
        <div class="divider"/>
        <div class="suggestions">

        </div>
        {/if}
    </div>
</ModalContainer>

<style>
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }


</style>