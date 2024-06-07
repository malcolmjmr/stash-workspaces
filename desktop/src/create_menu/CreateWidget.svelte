<script>
    import { createEventDispatcher } from "svelte";


    import { options } from "./menu_options";
  import { defaultDomains, getSearchUrlFromQuery } from "../../../sidepanel/src/tab/domains";


    let dispatch = createEventDispatcher();

    export let lastResource;
    export let top;
    export let left;


    
    const onMenuItemClicked = (e, item) => {

        let resource = {
            top: e.pageY,
            left: e.pageX,
            height: lastResource.height,
            width: lastResource.width,
            type: item.type,
            chat: item.type == 'chat' ? createChat() : null,
            note: item.type == 'note' ? createNote() : null,
            url: item.type == 'web' ? createUrlFromSearchText() : null,
        };
        dispatch('createResource', resource);
    };

    const createUrlFromSearchText = () => {

        if (searchText.length > 100 || searchText.split('. ').length > 1) {
            const domain = defaultDomains.find((d) => d.url.includes('exa.ai'));
            return getSearchUrlFromQuery(searchText, domain)
        } else if (searchText.length > 0) {
            const domain = defaultDomains.find((d) => d.url.includes('google.com'));
            return getSearchUrlFromQuery(searchText, domain);
        } else {
            const domain = defaultDomains.find((d) => d.url.includes('google.com'));
            return domain.url;
        }
    };

    const createNote = () => {
        return {

        };
    };

    const createChat = () => {
        return {
            messages: [],
        };
    };

    let searchText = '';
    let searchResults = [];
    const updateSearchResults = () => {

    };

    const onSearchTextChanged = (e) => {
        updateSearchResults();
    };

    /*
        note
        web view
        finder
        chat
    */
</script>

<div 
    class="create-widget" 
    style="top: {top}px; left: {left}px;"
>

    <div class="search-box">
        <input type="text" bind:value={searchText} on:change={onSearchTextChanged} autofocus="true">
    </div>
    <div class="create-buttons">
        {#each options as item} 
            <div class="create-button" on:mousedown={(e) => onMenuItemClicked(e, item)}>
                <img src={item.icon} alt=''/>
            </div>
        {/each}
    </div>
    

    <div class="search-results">
        {#each searchResults as result} 
            <div class="result">

            </div>
        {/each}
    </div>

    
</div>

<style>
    .create-widget {
        position: absolute;
        display:  flex;
        flex-direction: column;
        z-index: 100;
        background-color: #222222;
        border-radius: 8px;
    }

    .search-box {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #333;
    }

    .search-box input {
        outline: none;
        border: none;
        background-color: transparent;
        color: white;
        height: 100%;
        width: 100%;
        font-size: 16px;
    }

    .create-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    }

    .create-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
    }

    .create-button:hover {
        cursor: pointer;
    }

    .create-button img {
        height: 30px;
        width: 30px;
        border-radius: 8px;
        background-color: #333;
        padding: 5px;
    }
    
    .create-button span {
        margin-top: 10px;
    }
</style>