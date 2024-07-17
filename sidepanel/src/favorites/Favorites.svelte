<script>
  import { onDestroy, onMount } from "svelte";
  import DomainIcon from "../components/DomainIcon.svelte";
  import { getActiveTab, get, getHistory } from "../utilities/chrome";
  import { _favorites } from "../stores";
  import settingsIcon from "../icons/more-horiz.png";
  import ModalContainer from "../components/ModalContainer.svelte";
  import FavoritesSettings from "./FavoritesSettings.svelte";

    export let workspace = null;

    let unsubscribeToTabUpdates;
    let favorites = [];

    let loaded;
    onMount(() => {
        load();
    });

    const load = async () => {

        unsubscribeToTabUpdates = _favorites.subscribe((value) => {
            favorites = value;
        });
       
        if ($_favorites.length == 0) {
            await refreshFavorites();
        } else {
            favorites = $_favorites;
        }

        loaded = true;
    };

    onDestroy(() => {
        unsubscribeToTabUpdates();
    });

    const refreshFavorites = async () => {
        await getSavedFavorites();
        // 
        _favorites.set(favorites);
    };

    const getSavedFavorites = async () => {
        if (workspace) {
            favorites = workspace.favorites ?? [];
        } else {
            favorites = (await get('favorites')) ?? [];
        }
    };

    const getDomainsFromOpenTabs = async () => {
        const tab = await getActiveTab();
        const otherTabs = await chrome.tabs.query({groupId: tab.groupId});
        favorites = [...favorites, ...getDomainsOrderedByCount(otherTabs, (d) => d.count > 10 && !favorites.find((f) => f.url == d.url))];
    };

    const getDomainsFromHistory = async () => {
        if (workspace) return;
        const history = await getHistory();
        favorites = [...favorites, ...getDomainsOrderedByCount(history, (d) => d.count > 10 && !favorites.find((f) => f.url == d.url))];
    };

    const getDomainsOrderedByCount = (resources, filter) => {
        let domainCounts = {}
        for (const t of resources) {
            if (t.url.includes('chrome:')) continue;
            let url;
            try {
                url = new URL(t.url);
            } catch (e) {
                continue;
            }
            
            const domain = url.host;
            if (!domainCounts[domain]) {
                domainCounts[domain] = {
                    count: 0,
                    favIconUrl: t.favIconUrl,
                    url: url.protocol + '//' + url.host,
                }
            }
            domainCounts[domain].count += 1;
        }

        let tempDomains = Object.entries(domainCounts).map(([hostname, domain]) => {
            return {
                ...domain,
            };
        }).filter(filter ?? ((d) => d.count > 1));

        tempDomains.sort((a, b) => b.count > a.count);
        return tempDomains;
    };

    const getDomainsFromBookmarks = async () => {
        if (!workspace) return;
    };

    const onDomainClicked = async (e, domain) => {
        const activeTab = await getActiveTab();
        let url = domain.url;

        const tab = await chrome.tabs.create({ url, index:  activeTab.index + 1 });
        if (activeTab.groupId > -1) {
            chrome.tabs.group({ groupId: activeTab.groupId, tabIds: tab.id });
        }


    };

    let isInFocus;

    const onMouseEnter = async () => {
        isInFocus = true;
    };

    const onMouseLeave = async () => {
        isInFocus = false;
    };

    let showSettings;


</script>

{#if showSettings}
    <ModalContainer on:exit={() => showSettings = false}>
        <FavoritesSettings on:dataUpdated/>
    </ModalContainer>
{/if}

{#if favorites.length > 0}
<div class="favorites" on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
    {#each favorites as favorite}
        <div class="favorite" on:mousedown={(e) => onDomainClicked(e, favorite)}>
            <DomainIcon domain={favorite} />
        </div>
        
    {/each}
    {#if isInFocus}
    <div class="settings button" on:mousedown={() => showSettings = true}>
        <img src={settingsIcon}  alt="Settings"/>
    </div>
    
    {/if}
</div>
{/if}

<style>
    .favorites {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px;
    }

    .favorite {
        padding: 5px;
    }

    .favorite:hover {
        cursor: pointer;
        background-color: #333;
        border-radius: 8px;
    }

    .settings.button {
        padding: 5px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .settings.button:hover {

        background-color: #333;
        border-radius: 8px;
    }
    
    .settings.button img {
        height: 18px;
        width: 18px;
        filter: invert(1);
    }
    .button:hover {
        cursor: pointer;
    }
</style>