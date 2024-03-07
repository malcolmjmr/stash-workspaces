<script>
    import { onMount } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import { defaultDomains } from "./domains";

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

        domains = defaultDomains;
        
    }

    const onDomainClicked = (domain) => {
        let url = domain.url;
        if (inputText.length > 0 && !inputText.includes('.') && inputText.includes(' ')) {
            // get search query url 
        } 
        
        chrome.tabs.update(tab.id, { url });
        
    }

    const onKeyDownInUrlField = (e) => {
        
        if (e.key == "Enter") {

            let url = tab.url;
            if (url.includes('.')) {
                const missingProtocol = !url.includes('http://') && !url.includes('https://');
                if (missingProtocol) url = 'https://' + url;
            } else {
                url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
            }
            chrome.tabs.update(tab.id, { url, active: true });
            dispatch('exit')
        }
    };

</script>

    <div class="container">
        <div class="url-field">
            <input
                type="text"
                bind:value={tab.url}
                on:keydown={onKeyDownInUrlField}
            />
        </div>
        <div class="divider"/>
        <div class="domains">
            {#each domains as domain}
                <div class="domain-container">
                    <DomainIcon {domain} size={24} on:mousedown={onDomainClicked}/>
                </div>
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


<style>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .url-field input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: white;
        background-color: transparent;
    }

    .url-field img {
        filter: invert(1);
        height: 16px;
        width: 16px;
        margin-right: 5px;
    }

    .domains {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: #444;
    }

    .domain-container {
        margin: 5px
    }
</style>