<script>
    import { createEventDispatcher, onMount } from "svelte";
    import DomainIcon from "../components/DomainIcon.svelte";
    import settingsIcon from "../icons/settings.png";
    import searchIcon from "../icons/search.png";
    import bookmarksIcon from "../icons/star-filled.png";
    import historyIcon from "../icons/refresh.png";
    import folderIcon from "../icons/folder.png";

    import ModalContainer from "../components/ModalContainer.svelte";
    import { defaultDomains, getSearchUrlFromQuery, searchPlaceholder } from "./domains";
  import { getActiveTab, getHistory, getTabFavIconUrl, getTabInfo } from "../utilities/chrome";
  import Tab from "./Tab.svelte";
  import TabIcon from "./TabIcon.svelte";
  import WorkspacePreview from "../workspace/WorkspacePreview.svelte";
    

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
            // if (!tab) {
            //     tab = await getActiveTab();
            // }
            if (tab) isNewTab = getTabInfo(tab).url.includes('//newtab');

            await loadDefaultDomains();
            
            await loadBookmarks();
            
            await checkForSearchQuery();
            await getDomains();

            await loadHistoryData();
            
            

            await updateInputHeight();

            await updateSearchResults();
            
            loaded = true;

            if (inputElement) {
                inputElement.focus();
                if (window.getSelection && document.createRange) {
                    inputElement.setSelectionRange(0, inputText.length);
                }
            }
            
        }, 200);
    };

    let hasBookmarkPermission;
    let bookmarks = [];
    let bookmarkBar;
    let bookmarkBarChildren = [];
    const loadBookmarks = async () => {
        hasBookmarkPermission = await chrome.permissions.contains({
            permissions: ["bookmarks"],
        });

        bookmarkBarChildren = await chrome.bookmarks.getChildren('1');

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

        domains = defaultDomains.filter((d) => d.isDefault);

        
        
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
        })
        if (!granted) return;
        
        updateSearchResults();
    };

    const requestHistoryPermssion = async () => {
        const granted = await chrome.permissions.request({
            permissions: ['history']
        })
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
        console.log('domain clicked');
        console.log(domain);
        console.log(inputIsNotUrl);
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

    const onKeyDownInUrlField = async (e) => {

        if (e.key == "Enter" && !e.shiftKey) {

            let url = '';
            if (visibleHistory.length == 1) {
                url = visibleHistory[0].url;
            } else {
                const isUrl = inputText.includes('.') && !inputText.includes(' ');
                if (isUrl) {
                    const missingProtocol = !inputText.includes('http://') && !inputText.includes('https://');
                    if (missingProtocol) url = 'https://' + inputText;
                } else {
                    if (searchDomain) {
                        url = searchDomain.searchTemplate.replace(searchPlaceholder, encodeURIComponent(inputText))
                    } else {
                        url = 'https://www.google.com/search?q=' + encodeURIComponent(inputText);
                    }
                    
                }
            }

            const tabData = { url, active: true };
            loadTab(tabData);
            

            // todo check that url is loaded 
            dispatch('exit');
        } else if (e.key == 'Backspace') {
            updateInputHeight();
        }
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

    let inputHeight = '15px';
    const updateInputHeight = (e) => {
        if (inputElement?.scrollHeight != inputElement?.clientHeight) {
            inputHeight = inputElement.scrollHeight + 'px';
        } 
        
    };

    const onLinkClicked = (historyItem) => {

        loadTab({ url: historyItem.url });

        dispatch('exit');
    };

    $: {
        inputText;
        updateSearchResults();
    };

    
    const updateSearchResults = async () => {

        const text = (searchQuery != null && inputText == searchQuery) || inputText == tab?.url ? '' : inputText.toLowerCase();

        if (visibleSection == sections.bookmarks) {
                let tempBookmarks = (await chrome.bookmarks.search(text != '' ? {query: text} : {}))
                    .filter((b) => b.url);

                try {
                    tempBookmarks.sort((a, b) => b.dateAdded - a.dateAdded);

                } catch (e) {
                    console.log('error sorting bookmarks');
                    console.log(e);
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
                    return domains
                    .some((d) => d.searchTemplate && h.url.includes(d.searchTemplate.split(searchPlaceholder)[0]));
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

    let visibleSection = sections.search;
    let visibleSearchHistory = [];
    let visibleBookmarks = [];

    const onSectionClicked = async (section) => {
        visibleSection = section.key;
        updateSearchResults();
    };


    let openedFolder; 
    const onBookmarkClicked = (bookmark) => {
        if (bookmark.url) {
            onLinkClicked(bookmark);
        } else {
            openedFolder = bookmark;
        }
    };

</script>

{#if openedFolder}
<ModalContainer on:exit={() => openedFolder = null}>
    <WorkspacePreview workspace={{folderId: openedFolder.id}}/>
</ModalContainer>
{/if}
    <div class="container">
        <div class="url-field">
            <textarea
                bind:value={inputText}
                on:keydown={onKeyDownInUrlField}
                placeholder="Enter search or website"
                bind:this={inputElement}
                on:input={updateInputHeight}
                on:keypress={updateInputHeight}
                style="height: {inputHeight};"
            />
        </div>


        <div class="divider"/>
        <div class="sections">
            {#each sectionData as section}
                <div class="section{section.key == visibleSection ? ' selected' : ''}" on:mousedown={() => onSectionClicked(section)}>
                    <img src={section.icon} alt={section.title} />
                    <span>{section.title}</span>
                </div>
            {/each}
        </div>
        

        {#if true}
        <div class="divider"/>
        <div class="results">
            {#if domains.length > 0 && visibleSection == sections.search}
            
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

            </div>
            {/if}

            {#if visibleSection == sections.bookmarks}
                {#if bookmarkBarChildren.length > 0}
                    <div class="bookmark-bar">
                        {#each bookmarkBarChildren as bookmark}
                            <div class='bookmark'  on:mousedown={() => onBookmarkClicked(bookmark)}>
                                {#if bookmark.url}
                                <img src={getTabFavIconUrl(bookmark)}  alt=""/>
                                {:else}
                                <img src={folderIcon} alt=""/>
                                {/if}
                                {#if bookmark.title != ''}
                                <div class="title">{bookmark.title}</div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                {/if}
                {#if !hasBookmarkPermission}
                    <div class="permission-request" on:mousedown={requestBookmarkPermssion}>
                        Click to add bookmarks permission.
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
                        No matching bookmarks.
                    </div>
                {/if}
            {:else if visibleSection == sections.history || visibleSection == sections.search}
                {#if !history}
                    <div class="permission-request" on:mousedown={requestHistoryPermssion}>
                        Click to add history permission.
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
                        No matching {visibleSection == sections.search ? 'searches' : 'history'}.
                    </div>
                {/if}
            {/if}
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
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #111;
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
        max-height: 30px;
        height: 30px;
        min-height: 30px;
        overflow-x: scroll;
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

    .permission-request {
        padding: 10px;
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
        height: 200px;
        overflow: scroll;
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
        height: 40px;
        border-top: 1px solid #333;
        
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
        border-bottom: 2px solid white;
    }

    .section img {
        filter: invert(1);
        height: 16px;
        width: 16px;
        margin-right: 5px;
    }

    .bookmark-bar {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        min-height: 50px;
    }

    .bookmark-bar::-webkit-scrollbar {
        display: none;
    }

    .bookmark-bar .bookmark {
        max-width: 150px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        justify-content: center;
        margin: 10px 5px;
    }

    .bookmark-bar .bookmark:hover {
        background-color: #333;
        cursor: pointer;
    }

    .bookmark-bar .bookmark img {
        height: 20px;
        width: 20px;
    }

    .bookmark-bar .bookmark .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-left: 5px;
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