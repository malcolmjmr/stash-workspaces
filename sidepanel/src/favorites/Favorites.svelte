<script>
  import { onDestroy, onMount } from "svelte";
  import DomainIcon from "../components/DomainIcon.svelte";
  import { getActiveTab, get, getHistory, set } from "../utilities/chrome";
  import { _favorites } from "../stores";
  import settingsIcon from "../icons/more-horiz.png";
  import ModalContainer from "../components/ModalContainer.svelte";
  import FavoritesSettings from "./FavoritesSettings.svelte";
  import { defaultFavorites } from "./defaults";
    import FavoriteThumbnail from "./FavoriteThumbnail.svelte";

    export let workspace = null;



    let loaded;
    onMount(() => {
        load();
    });

    const load = async () => {
        const favorites = workspace?.favorites ?? (await get('favorites')) ?? defaultFavorites;
        if (favorites.length != $_favorites.length) {
            _favorites.set(favorites);
        }
        loaded = true;
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

    const onDomainClicked = async ({ detail }) => {


        const { favorite, isAltClick } = detail;

        if (isAltClick) {

            let favorites = $_favorites;
            const index = favorites.findIndex((f) => f.url == favorite.url);
            if (index > -1) {
                favorites[index].isGlobal = !favorites[index].isGlobal;
            }
            
            // sort
            set({ favorites });

            
            _favorites.set(favorites);

        } else {
            const activeTab = await getActiveTab();
            let url = favorite.url;

            if (activeTab.groupId > -1) {
                const tabGroup = await chrome.tabGroups.get(activeTab.groupId);
                if (tabGroup.collapsed) {
                    await chrome.tabs.create({ url });
                } else {
                    const tab = await chrome.tabs.create({ url, index:  activeTab.index + 1 });
                    await chrome.tabs.group({ groupId: activeTab.groupId, tabIds: tab.id });
                }
            } else {
                const tab = await chrome.tabs.create({ url, index:  activeTab.index + 1 });
            }

            let favorites = $_favorites;
            const index = favorites.findIndex((f) => f.url == favorite.url);
            if (index > -1) {
                favorites[index].lastUsed = Date.now();
            }

            set({ favorites });
            _favorites.set(favorites);

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

{#if $_favorites.length > 0}
<div class="favorites" on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
    {#each workspace ? [...$_favorites.filter((f) => f.isGlobal), ...(workspace?.favorites ?? [])] : $_favorites as favorite}
        <FavoriteThumbnail {favorite} on:click={onDomainClicked}/>
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