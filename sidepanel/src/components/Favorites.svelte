<script>
  import { onMount } from "svelte";
  import DomainIcon from "./DomainIcon.svelte";
  import { getActiveTab, get, getHistory } from "../utilities/chrome";

    export let workspace = null;

    let favorites = [];

    let loaded;
    onMount(() => {
        load();
    });

    const load = async () => {
       
        await getSavedFavorites();
        await getDomainsFromOpenTabs();
        await getDomainsFromHistory();
        await getDomainsFromBookmarks();
        
        
        loaded = true;
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
        favorites = [...favorites, ...getDomainsOrderedByCount(otherTabs)];
    };

    const getDomainsFromHistory = async () => {
        if (workspace) return;
        const history = await getHistory();
        favorites = [...favorites, ...getDomainsOrderedByCount(history, (d) => d.count > 10 && !favorites.find((f) => f.url == domain.url))];
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

</script>

{#if favorites.length > 0}
<div class="favorites">
    {#each favorites as favorite}
        <div class="favorite">
            <DomainIcon domain={favorite} on:mousedown={(e) => onDomainClicked(e, favorite)}/>
        </div>
        
    {/each}
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
</style>