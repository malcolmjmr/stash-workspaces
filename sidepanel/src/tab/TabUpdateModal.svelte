<script>
    import { createEventDispatcher, onMount } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import settingsIcon from "../icons/settings.png";
    import ModalContainer from "../components/ModalContainer.svelte";
    import { defaultDomains, getSearchUrlFromQuery, searchPlaceholder } from "./domains";
  import { getActiveTab } from "../utilities/chrome";

    export let tab = null;

    let dispatch = createEventDispatcher();

    let suggestions = [];
    let history = [];
    let domains  = [];

    let searchDomain;
    

    let inputText = '';

    let loaded;
    onMount(() => {
        load();
    });

    const load = async () => {
        setTimeout(async () => {
            if (!tab) {
                tab = await getActiveTab();
            }
            
            getDomains();
            checkForSearchQuery();
            
            loaded = true;
        }, 200);
    };

    const checkForSearchQuery = () => {

        // check domain

        const uri = new URL(tab.url);
        
        const domain = domains.find((d) => d.searchTemplate?.includes(uri.hostname));

        if (domain) {

            searchDomain = domain;

            const searchPrefix = domain.searchTemplate.split(searchPlaceholder)[0];
            const splitUrl = tab.url.split(searchPrefix);
            if (splitUrl.length == 2) {

                let encodedText = splitUrl[1].split('&')[0].split('#')[0];
                if (domain.url.includes('google.com') || domain.url.includes('youtube.com')) {
                    encodedText = encodedText.replaceAll('+', ' ');
                }
                inputText = decodeURIComponent(encodedText);
            }
        }

        if (inputText == '' && tab.url != 'chrome://newtab/') {
            inputText = tab.url;
        }
        // check url against search template 


    };

    

    const getDomains = () => {
        // favorite domains from open tabs 
        // favorite domains from settings
        // favorite domains from history
        // favorite domains from bookmarks
        // default domains

        domains = defaultDomains;
        
    };

    const onDomainClicked = (domain) => {

        let url = domain.url;
        const inputIsNotUrl = inputText.length > 0 && !inputText.includes('.') && inputText.includes(' ');
        if (inputIsNotUrl || domain.canSearchUrl) {
            url = domain.searchTemplate?.replace(searchPlaceholder, encodeURIComponent(inputText));
        }

        chrome.tabs.update(tab.id, { url });
        dispatch('exit');
        
    };

    const onKeyDownInUrlField = (e) => {
        
        if (e.key == "Enter") {

            let url = inputText;
            if (url.includes('.')) {
                const missingProtocol = !url.includes('http://') && !url.includes('https://');
                if (missingProtocol) url = 'https://' + url;
            } else {
                if (searchDomain) {
                    url = searchDomain.searchTemplate.replace(searchPlaceholder, encodeURIComponent(url))
                } else {
                    url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
                }
                
            }
            chrome.tabs.update(tab.id, { url, active: true });
            dispatch('exit');
        }
    };

    let showSettings;



</script>

{#if showSettings}
<ModalContainer>
    
</ModalContainer>
{/if}
{#if tab}
    <div class="container">
        <div class="url-field">
            <textarea
                bind:value={inputText}
                on:keydown={onKeyDownInUrlField}
                placeholder="Enter search or URL..."
                autofocus="true"
            />
        </div>
        <div class="divider"/>
        <div class="domains">
            {#each domains as domain}
                <div class="domain button">
                    <DomainIcon {domain} size={24} on:click={() => onDomainClicked(domain)}/>
                </div>
            {/each}
            <img 
                class="settings button" 
                src={settingsIcon} 
                alt="Settings"
                on:mousedown={() => null}
            />
            <div class="spacer"></div>
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
{/if}

<style>
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #333;
    }

    .url-field {
        padding: 5px;
    }

    .url-field textarea {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        width: 100%;
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
        padding: 5px 0px;
    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: #444;
    }

    .domain.button {
        margin: 5px
    }

    .button:hover {
        cursor: pointer;
    }

    .spacer {
        flex-grow: 1;
    }

    .settings.button {
        height: 20px;
        width: 20px;
        filter: invert(1);
    }
</style>