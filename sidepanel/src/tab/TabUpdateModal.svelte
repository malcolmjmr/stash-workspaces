<script>
    import { createEventDispatcher, onMount } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import settingsIcon from "../icons/settings.png";
    import ModalContainer from "../components/ModalContainer.svelte";
    import { defaultDomains, getSearchUrlFromQuery, searchPlaceholder } from "./domains";
  import { getActiveTab, getHistory, getTabFavIconUrl, getTabInfo } from "../utilities/chrome";
  import Tab from "./Tab.svelte";

    export let tab = null;

    let inputElement;

    let dispatch = createEventDispatcher();

    let suggestions = [];
    let history;
    let domains  = [];

    let searchDomain;
    

    let inputText = '';

    let loaded;
    onMount(() => {
        load();
    });

    let isNewTab;
    const load = async () => {
        
        setTimeout(async () => {
            if (!tab) {
                tab = await getActiveTab();
            }

            loadDefaultDomains();
            isNewTab = getTabInfo(tab).url.includes('//newtab');
            
            await checkForSearchQuery();
            await getDomains();

            loadHistoryData();
            

            updateInputHeight();
            
            loaded = true;

            inputElement.focus();
        }, 200);
    };

    const checkForSearchQuery = async () => {

        // check domain
        if (isNewTab) return;

        const uri = new URL(tab.url);
        
        const domain = defaultDomains.find((d) => d.searchTemplate?.includes(uri.hostname));

        if (domain) {

            searchDomain = domain;

            const searchPrefix = domain.searchTemplate.split(searchPlaceholder)[0];
            const splitUrl = tab.url.split(searchPrefix);
            if (splitUrl.length == 2) {

                let encodedText = splitUrl[1].split('&')[0].split('#')[0];
                if (domain.url.includes('google.com') || domain.url.includes('youtube.com') || tab.url.includes('q=')) {
                    encodedText = encodedText.replaceAll('+', ' ');
                }
                inputText = decodeURIComponent(encodedText);
            }
        }

        if (inputText == '') {
            inputText = tab.url;
        }
        // check url against search template 


    };

    

    const getDomains = async () => {

        // if (isNewTab) {
        //     domains = await getOpenApps();
        // }

        // if (searchDomain || isNewTab) {

        //     for (const domain of defaultDomains) {
        //         if (domain.searchTemplate && !domains.find((d) => domain.url.includes(d.host))) {
        //             domains.push(domain);
        //         }
        //     }
        // }

        domains = defaultDomains.filter((d) => d.isDefault);

        
        
        // favorite domains from settings
        // favorite domains from history
        // favorite domains from bookmarks
        if (tab.groupId > -1) {
            // get workspace from tab 
            // workspace bookmarks 
            // get domains 
            // sort by last use? 
        }
        // default domains

        //domains = defaultDomains;
    };

    let visibleHistory = [];
    let hasHistoryPermission;
    const loadHistoryData = async () => {

        history = await getHistory();
        visibleHistory = history;

        // let domainCounts = {}
        // for (const item of results) {
        //     const url = new URL(item.url);
        //     const domain = url.host;
        //     if (!domainCounts[domain]) {
        //         let defaulDomainData = defaultDomainMap[domain] ?? {};
        //         domainCounts[domain] = {
        //             count: 0,
        //             host: url.host,
        //             url: url.host,
        //             ...defaulDomainData
        //         }
        //     }
        //     domainCounts[domain].count += 1;
        // }

        // let tempDomains = Object.entries(domainCounts).map(([hostname, domain]) => {
        //     return {
        //         ...domain,
        //     };
        // }).filter((d) => d.count > 10);

        // tempDomains.sort((a, b) => b.count > a.count);

        // console.log('got favorite domains');
        // console.log(tempDomains);

        // domains = [...domains, ...tempDomains]

    }

    const removeDuplicateHistoryItems = (historyItems) => {
        let titles = [];
        let result = [];
        for (const historyItem of historyItems) {
            if (titles.includes(historyItem.title)) continue;
            titles.push(historyItem.title);
            result.push(historyItem);
        }
        return result;
    };

    const requestHistoryPermssion = async () => {
        const granted = await chrome.permissions.request({
            permissions: ['history']
        })
        if (!granted) return;
        
        loadHistoryData();
    }

    let defaultDomainMap = {};

    const loadDefaultDomains = () => {
        defaultDomainMap = {};
        for (const domain of defaultDomains) {
            let url;
            try {
                url = new URL(t.url);
            } catch (e) {
                continue;
            }
            
            defaultDomainMap[url.host] = domain;
        }
    };

    const getOpenApps = async () => {

        const otherTabs = await chrome.tabs.query({groupId: tab.groupId});
        let domainCounts = {}
        for (const t of otherTabs) {

            let url;
            try {
                url = new URL(t.url);
            } catch (e) {
                continue;
            }
            
            const domain = url.host;
            if (!domainCounts[domain]) {
                let defaulDomainData = defaultDomainMap[domain] ?? {};
                domainCounts[domain] = {
                    count: 0,
                    favIconUrl: t.favIconUrl,
                    url: url.protocol + url.host,
                    ...defaulDomainData
                }
            }
            domainCounts[domain].count += 1;
        }

        let tempDomains = Object.entries(domainCounts).map(([hostname, domain]) => {
            return {
                ...domain,
            };
        }).filter((d) => d.count > 1);

        tempDomains.sort((a, b) => b.count > a.count);

        return tempDomains;

    };

    const onDomainClicked = async (e, domain) => {

        let url = domain.url;
        const inputIsNotUrl = inputText.length > 0 && !inputText.includes('.') && inputText.includes(' ');
        if (inputIsNotUrl || domain.canSearchUrl) {
            url = domain.searchTemplate?.replace(searchPlaceholder, encodeURIComponent(inputText));
        } else if (!inputIsNotUrl && !url.includes('http')) {
            url = 'https://' + url;
        }

        if (e.metaKey) {
            const activeTab = await getActiveTab();
            const tab = await chrome.tabs.create({ url, index:  activeTab.index + 1 });
            if (activeTab.groupId > -1) {
                chrome.tabs.group({ groupId: activeTab.groupId, tabIds: tab.id });
            }
            
        } else {
            chrome.tabs.update(tab.id, { url });
        }

        
        dispatch('exit');
        
    };

    const onKeyDownInUrlField = (e) => {
        
        if (e.key == "Enter" && !e.shiftKey) {

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

    let inputHeight = '15px';
    const updateInputHeight = () => {

        if (inputElement.scrollHeight != inputElement.clientHeight) {
            inputHeight = inputElement.scrollHeight + 'px';
        } 
        
    };

    const onHistoryItemClicked = (historyItem) => {
        chrome.tabs.update(tab.id, { url: historyItem.url });
        dispatch('exit');
    };

    $: {
        inputText;
        updateSearchResults();
    };

    const updateSearchResults = () => {

        const text = inputText.toLowerCase();

        visibleHistory = history?.filter((i) => {
            const title = i.title.toLowerCase();
            const url = i.url.toLowerCase();
            return title.includes(text) || url.includes(text);
        }) ?? [];
        console.log(visibleHistory);
    };

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
                placeholder="Enter search or URL"
                bind:this={inputElement}
                on:input={updateInputHeight}
                on:keypress={updateInputHeight}
                style="height: {inputHeight};"
            />
        </div>
        {#if domains.length > 0}
        <div class="divider"/>
        <div class="domains">
            {#each domains as domain}
                <div class="domain button">
                    <DomainIcon {domain} size={24} on:mousedown={(e) => onDomainClicked(e, domain)}/>
                </div>
            {/each}

            <!--
                <img 
                    class="settings button" 
                    src={settingsIcon} 
                    alt="Settings"
                    on:mousedown={() => null}
                />
            -->
            
            <div class="spacer"></div>
        </div>
        {/if}

        

        {#if true}
        <div class="divider"/>
        <div class="history">
            {#if !history}
            <div class="history-permission-request" on:mousedown={requestHistoryPermssion}>
                Add history permission to view history and recent web pages.
            </div>
            {:else if (visibleHistory?.length ?? 0) > 0}
            {#each visibleHistory as historyItem (historyItem.url)}
                <Tab 
                    tab={historyItem} 
                    isOpen={false} 
                    isSearchResult={true} 
                    isListItem={true} 
                    on:clicked={() => onHistoryItemClicked(historyItem)}
                    preventDefault={true}
                />
            {/each}
            {:else}
                <div class="no-results">
                    No matching history items
                </div>
            {/if}
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
        background-color: #111;
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
        resize: none;
        height: 18px;
        display: flex;
        overflow: scroll;
        max-height: 75px;

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
        max-height: 68px;
        overflow: scroll;
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

    .history-permission-request {
        padding: 10px;
        opacity: 0.7;
        color: white;
    }

    .history-permission-request:hover {
        cursor: pointer;
        opacity: 1;
    }

    .history {
        display: flex;
        flex-direction: column;
        height: 150px;
        overflow: scroll;
    }

    .history-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.8;
        padding: 3px 5px;
        border-radius: 8px;
        color: white;
        background-color: #333;
    }

    .history-item:hover {
        opacity: 1;
        cursor: pointer;
        background-color: #555;
    }

    .history-item img {
        height: 15px;
        width: 15px;
    }

    .history-item span {
        font-size: 14px;
    }


</style>