<script>
    import { createEventDispatcher, onMount } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import settingsIcon from "../icons/settings.png";
    import searchIcon from "../icons/search.png";
    import bookmarksIcon from "../icons/star-filled.png";
    import historyIcon from "../icons/refresh.png";
    import folderIcon from "../icons/folder.png";
    import moreIcon from "../icons/more-vert.png";
    import newWindowIcon from "../icons/new-window.png";
    import incognitoIcon from "../icons/visibility-off.png";
    import micIcon from "../icons/mic.png";
    

    import ModalContainer from "../components/ModalContainer.svelte";
    import { defaultDomains, getSearchUrlFromQuery, searchPlaceholder } from "./domains";
    import { getActiveTab, getHistory, getTabFavIconUrl, getTabInfo } from "../utilities/chrome";
    import Tab from "./Tab.svelte";
    import TabIcon from "./TabIcon.svelte";
    import WorkspacePreview from "../workspace/WorkspacePreview.svelte";
    import ObjectContainer from "../object/ObjectContainer.svelte";
    import BookmarkBar from "../components/BookmarkBar.svelte";
    import { userData } from "../stores";
    

        

    export let tab = null;

    let inputElement;

    let dispatch = createEventDispatcher();

    let suggestions = [];
    let history = [];


    let searchDomains  = [];
    let recentDomains = [];

    let searchDomain;
    

    export let inputText = '';

    let loaded;
    onMount(() => {
        load();
    });

    let isNewTab;
    let initialInputText;
    $: {
        inputElement;
        if (!loaded) load();
        if (!inputHeightSet) {
            updateInputHeight();
            setFocus();
        }
    }
    const load = async () => {

        
        initialInputText = inputText.trim();
       

        if (tab) isNewTab = getTabInfo(tab).url.includes('//newtab');

        

        


        await loadDefaultDomains();
        await loadBookmarks();
        await checkForSearchQuery();
        await getDomains();
        await loadHistoryData();
        await updateSearchResults();


        
        loaded = true;

        startSpeechRecognition();

        


    };

    const setFocus = () => {
        if (inputElement) {
            inputElement.focus();
            if (initialInputText == '' && window.getSelection && document.createRange) {
                inputElement.setSelectionRange(0, inputText.length);
            }
        }
    };

    let hasBookmarkPermission;
    let bookmarks = [];
    let bookmarkBar;
    let bookmarkBarChildren = [];
    const loadBookmarks = async () => {
        hasBookmarkPermission = await chrome.permissions.contains({
            permissions: ["bookmarks"],
        });

        if (hasBookmarkPermission) {
            bookmarkBarChildren = await chrome.bookmarks.getChildren('1');
        }

       

    };

    let searchQuery;
    const checkForSearchQuery = async () => {

        // check domain
        if (isNewTab || !tab) return;

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
                searchQuery = decodeURIComponent(encodedText);
                inputText = searchQuery.slice(0, inputText.length);
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

        searchDomains = defaultDomains.filter((d) => d.isDefault && d.searchTemplate);

        
        // favorite domains from settings
        // favorite domains from history
        // favorite domains from bookmarks
        if (tab && tab.groupId > -1) {
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

        hasHistoryPermission = await chrome.permissions.contains({
            permissions: ['history']
        });

        const permissions = await chrome.permissions.getAll();


        history = await getHistory({ maxResults: 100 });
        visibleHistory = history;


        let domainCounts = {};
        for (const item of history) {
            const url = new URL(item.url);
            const domain = url.host;
            if (!domainCounts[domain]) {
                let defaulDomainData = defaultDomainMap[domain] ?? {};
                domainCounts[domain] = {
                    count: 0,
                    host: url.host,
                    url: url.host,
                    ...defaulDomainData
                }
            }
            domainCounts[domain].count += 1;
        }


        let tempDomains = Object.entries(domainCounts).map(([hostname, domain]) => {
            return {
                ...domain,
            };
        });
        
        let filteredDomains = tempDomains.filter((d) => d.count > 1);
        if (filteredDomains.length == 0) {
            filteredDomains = tempDomains;
        }

        filteredDomains.sort((a, b) => b.count - a.count);
        recentDomains = filteredDomains;

    }

    const sections = {
        search: 'search',
        history: 'history',
        bookmarks: 'bookmarks',
        journeys: 'journeys'
    };

    let sectionData = [
        {
            title: 'Searches',
            key: sections.search,
            icon: searchIcon,
        },
        {
            title: 'History',
            key: sections.history,
            icon: historyIcon,
        },
        {
            title: 'Bookmarks',
            key: sections.bookmarks,
            icon: bookmarksIcon
        },
    ];

    


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

    const requestBookmarkPermssion = async () => {
        const granted = await chrome.permissions.request({
            permissions: ['bookmarks']
        });
        
        updateSearchResults();
    };

    const requestHistoryPermssion = async () => {
        const granted = await chrome.permissions.request({
            permissions: ['history']
        });

        if (!granted) return;
        
        loadHistoryData();
    };

    let defaultDomainMap = {};

    const loadDefaultDomains = async () => {
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

        if (inputIsNotUrl || domain.searchTemplate) {
            url = domain.searchTemplate?.replace(searchPlaceholder, encodeURIComponent(inputText));
        } else if (!inputIsNotUrl && !url.includes('http')) {
            url = 'https://' + url;
        } 

        if (e.metaKey || !tab) {
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

    let showResource = false;

    const onKeyDownInUrlField = async (e) => {

        if (e.key == "Enter" && !e.shiftKey) {
            submit();
        } else if (e.key == 'Backspace') {
            updateInputHeight();
        }

        if (recognition) recognition.abort();
    };

    const submit = () => {
        let url = '';
            inputText = inputText.trim();
            const isUrl = inputText.includes('.') && !inputText.includes(' ');

            if (isUrl) {
                const missingProtocol = !inputText.includes('http://') && !inputText.includes('https://');
                if (missingProtocol) url = 'https://' + inputText;
                else url = inputText;

            } else {

                //showResource = true; 
                
                if (searchDomain) {
                    url = searchDomain.searchTemplate.replace(searchPlaceholder, encodeURIComponent(inputText))
                } else {
                    url = 'https://www.google.com/search?q=' + encodeURIComponent(inputText);
                }
                    
                
            }
            
            const tabData = { url, active: true };
            loadTab(tabData);
            

            // todo check that url is loaded 
            dispatch('exit');
    };

    const loadTab = async (tabData) => {
        if (tab) {
            chrome.tabs.update(tab.id, tabData);
        } else {
            const activeTab = await getActiveTab();
            const tab = await chrome.tabs.create({...tabData, index: activeTab.index });
            if (activeTab.groupId > -1) {
                await chrome.tabs.group({tabIds: tab.id, groupId: activeTab.groupId});
            }
        }
    };

    let showSettings;

    let inputHeightSet;
    let inputHeight = '24px';
    const updateInputHeight = async (e) => {
        if (inputElement?.scrollHeight != inputElement?.clientHeight) {
            inputHeightSet = true;
            inputHeight = inputElement.scrollHeight + 'px';
        } 
        
    };

    const onLinkClicked = (historyItem) => {

        loadTab({ url: historyItem.url });

        dispatch('exit');
    };

    $: {

        if (inputText == '.') {
            inputText = '';
        } else {
            updateSearchResults();
            updateInputHeight();
        }
    };

    

    const updateSearchResults = async () => {
        

        const text = (searchQuery != null && inputText == searchQuery) || inputText == tab?.url ? '' : inputText.toLowerCase();

        if (visibleSection == sections.bookmarks) {
            if (bookmarks.length == 0 && text.length == 0) {
                bookmarks = (await chrome.bookmarks.search({})).filter((b) => b.url);
                bookmarks.sort((a, b) => b.dateAdded - a.dateAdded);
            }

            let tempBookmarks = [];
            if (text.length == 0) {
                tempBookmarks = bookmarks;
            } else {
                tempBookmarks = (await chrome.bookmarks.search({query: text}))
                    .filter((b) => b.url);
                //tempBookmarks.sort((a, b) => b.dateAdded - a.dateAdded);
            }
            
            visibleBookmarks = tempBookmarks;
            
        } else {

            let relevantHistory = history?.filter((i) => {
                const title = i.title.toLowerCase();
                const url = i.url.toLowerCase();
                return (title.includes(text) || url.includes(text));
            }) ?? [];

            visibleHistory = [];

            if (visibleSection == sections.search) {
                visibleHistory = relevantHistory.filter((h) => {
                    return searchDomains
                    .some((d) => {
                        const url = new URL(h.url)
                        let urlString = url.protocol + '://' + url.hostname + '/' + url.pathname;
                        if (d.queryParam) {
                            urlString += '?' + d.queryParam + '=';
                        }
                        return d.searchTemplate && h.url.includes(d.searchTemplate.split(searchPlaceholder)[0]);
                    });
                });

                // if (visibleHistory.length == 0 && relevantHistory.length > 0) {
                //     visibleSection = sections.history;
                // }
            } 

            if (visibleSection == sections.history) {
                visibleHistory = relevantHistory;
  
            }
            
        }

        
    };

    let visibleSection = sections.history;
    let visibleSearchHistory = [];
    let visibleBookmarks = [];

    

    const onSectionClicked = async (section) => {
        visibleSection = section.key;

        updateSearchResults();
    };


    let openedFolder; 
    const onBookmarkClicked = ({ detail }) => {
        let bookmark = detail;
        if (bookmark.url) {
            onLinkClicked(bookmark);
        } else {
            openedFolder = bookmark;
        }
        
    };


    const onSearchDomainSelected = ({ detail }) => {

    };

    const onCreateNewWindow = ({ detail }) => {
        chrome.windows.create({
            url: inputText.length > 0 
                ? 'https://www.google.com/search?q=' + encodeURIComponent(inputText)
                : null,
            focused: true,
        });

        dispatch('exit');
    };

    const onCreateIncognitoWindow = ({ detail }) => {
        chrome.windows.create({
            url: inputText.length > 0 
                ? 'https://www.google.com/search?q=' + encodeURIComponent(inputText)
                : null,
            focused: true,
            incognito: true,
        });

        dispatch('exit');
    };
    let isPopup = location.href.includes('omnibox');

    let recognition;

    const startSpeechRecognition = async () => {
        console.log('trying to start speech recognition');

        if (isPopup) {
            console.log('webkitSpeechRecognition' in window)
            try {

                recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

                recognition.onerror = (event) => {
                    console.log(`Error occurred in recognition: ${event.error}`);
                };

                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    inputText += transcript;
                    updateInputHeight();

                };
                recognition.start();

            } catch (e) {
                console.log('got error:');
                console.log(e);
            }

        }
       

    };

    

    

</script>

{#if openedFolder}
<ModalContainer on:exit={() => openedFolder = null}>
    <WorkspacePreview workspace={{folderId: openedFolder.id}}/>
</ModalContainer>
{:else if showResource}
<ModalContainer on:exit={() => showResource = null}>
    <ObjectContainer />
</ModalContainer>
{/if}
{#if isPopup}
<div class="container">
        <div class="url-field">
            <textarea
                bind:value={inputText}
                on:keydown={onKeyDownInUrlField}
                placeholder={$userData ? "Enter address, search or prompt" : "Enter address or search"}
                bind:this={inputElement}
                on:input={updateInputHeight}
                on:keypress={updateInputHeight}
                style="height: {inputHeight};"
            />
        </div>


        
        
        

        {#if true}
        <div class="divider"/>
        <div class="create-toolbar">
            <img class="new-window button" alt="More" src={newWindowIcon} on:mousedown={onCreateNewWindow}> 
            <img class="incognito button" alt="More" src={incognitoIcon} on:mousedown={onCreateIncognitoWindow}>
            <img class="mic button" alt="More" src={micIcon} on:mousedown={startSpeechRecognition}>
            
            {#each searchDomains as searchDomain}
                <div class="domain-padding">
                    <DomainIcon 
                        domain={searchDomain} 
                        size={20} 
                        on:mousedown={(e) => onDomainClicked(e, searchDomain)} 
                        on:domainSelected={onSearchDomainSelected}
                    />
                </div>
                
            {/each}
        </div>
        <div class="divider"/>
        <div class="results">

            {#if visibleSection == sections.bookmarks}
                
                {#if !hasBookmarkPermission}
                    <div class="permission-request" on:mousedown={requestBookmarkPermssion}>
                        Click to view bookmarks
                    </div>
                {:else if visibleBookmarks.length > 0}

                {#each visibleBookmarks as historyItem (historyItem.id)}
                    <Tab 
                        tab={historyItem} 
                        isOpen={false} 
                        isSearchResult={true} 
                        isListItem={true} 
                        on:clicked={() => onLinkClicked(historyItem)}
                        preventDefault={true}
                    />
                {/each}
                {:else}
                    <div class="no-results">
                        No matching bookmarks
                    </div>
                {/if}
                
            {:else if visibleSection == sections.history || visibleSection == sections.search}
                {#if !hasHistoryPermission}
                    <div class="permission-request" on:mousedown={requestHistoryPermssion}>
                        Click to view {visibleSection == sections.search ? 'search ' : ''}history
                    </div>
                {:else if (visibleHistory?.length ?? 0) > 0}

                {#each visibleHistory as historyItem (historyItem.id)}
                    <Tab 
                        tab={historyItem} 
                        isOpen={false} 
                        isSearchResult={true} 
                        isListItem={true} 
                        on:clicked={() => onLinkClicked(historyItem)}
                        preventDefault={true}
                    />
                {/each}
                {:else}
                    <div class="no-results">
                        No matching {visibleSection == sections.search ? 'searches' : 'history'}
                    </div>
                {/if}
            {/if}



        </div>
        {/if}

        <div class="divider"></div>
        <div class="sections">
            {#each sectionData as section}
                <div class="section{section.key == visibleSection ? ' selected' : ''}" on:mousedown={() => onSectionClicked(section)}>
                    <img src={section.icon} alt={section.title} />
                    <span>{section.title}</span>
                </div>
            {/each}
        </div>

        

        {#if suggestions.length > 0}
        <div class="divider"/>
        <div class="suggestions">

        </div>
        {/if}
    </div>

{:else}

<div class="container">
    <iframe title="" src={chrome.runtime.getURL('/omnibox/index.html')}/>

</div>
{/if}  

<style>
    .container {
        
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #222;
        height: 400px;
        color: white;
        border-radius: 15px;
    }

    .container iframe {
        height: 100%;
        width: 100%;
        border: none;
    }

    .url-field {
        padding: 8px 5px 5px 5px;
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
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .url-field textarea::-webkit-scrollbar {
        display: none;
    }

    .create-toolbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        overflow-x: scroll;
        background-color: #333;
        padding: 2px;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        min-height: 34px;
    }

    .create-toolbar img.button {
        padding: 5px;
        margin-right: 3px;
        height: 20px;
        width: 20px;
        filter: invert(1);
        
    }

    .create-toolbar img.more.button {
        filter: invert(0);
        background-color: yellow;
    }

    .button-divider {
        min-height: 3px;
        min-width: 3px;
        border-radius: 100%;
        background-color: white;
        margin: 5px 8px;

    }

    .domains {
        display: flex;
        flex-direction: row;
        padding: 5px 0px;
        max-height: 30px;
        height: 30px;
        min-height: 30px;
        overflow-x: scroll;
        background-color: #222;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }


    .divider {
        min-height: 1px;
        width: 100%;
        background-color: #444;
    }

    .domain-padding {
        padding: 5px 8px;
    }

    .domain.button {
        margin-right: 4px;
        margin-left: 1px;
        padding: 5px;
    }

    .button:hover {
        cursor: pointer;
    }

    .permission-request {
        opacity: 0.7;
        color: white;
        font-size: 22px;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .permission-request:hover {
        cursor: pointer;
        opacity: 1;
    }

    .results {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        flex-grow: 1;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .results::-webkit-scrollbar {
        display: none;
    }

    .no-results {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        opacity: .7;
        text-align: center;
        height: 100%;
        width: 100%;
    }

    .sections {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-height: 40px;
        border-top: 1px solid #333;
        background-color: #333;
        
    }

    .section {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-grow: 1;
        opacity: .8;
        height: 100%;
        font-size: 14px;
        font-weight: 400;
        border-bottom: 2px solid transparent;
        justify-content: center;

    }

    .section:hover {
        opacity: 1;
        cursor: pointer;
        
    }

    .section.selected {
        opacity: 1;
        border-top: 2px solid white;
    }

    .section img {
        filter: invert(1);
        height: 16px;
        width: 16px;
        margin-right: 5px;
    }


</style>