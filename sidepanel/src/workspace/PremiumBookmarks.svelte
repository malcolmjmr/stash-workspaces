<script>
    import { onMount } from "svelte";
  import ResourceListItem from "./ResourceListItem.svelte";
  import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
  import DomainIcon from "../components/DomainIcon.svelte";
  import ModalContainer from "../components/ModalContainer.svelte";
  import WorkspacePreview from "./WorkspacePreview.svelte";

    export let user;
    export let db;
    export let workspace;
    export let searchText;
    export let workspaces;
    export let resources;

    

    let hasFavorites;

    const Views = {
        favorites: 'Favorites',
        recent: 'Recent',
        folders: 'Folders',
        domains: 'Domains',
    };

    let view = Views.recent;

    onMount(() => {
        // set view 
        loadData();
    }); 


    const loadData = () => { 
        let domainCounts = {};

        for (const resource of resources) {
            
            const url = tryToGetUri(resource.url);
            if (!url) continue;

            if (!domainCounts[url.hostname]) {
                domainCounts[url.hostname] = 0;
            }
            domainCounts[url.hostname] += 1;
            if (hasFavorites) continue;
            if ((resource.rating && resource.rating > 0) || resource.isFavorite) {
                hasFavorites = true;
            }
        }

       let tempDomains = Object.entries(domainCounts)
            .map(([url, count]) => {
                return {
                    url,
                    count,
                };
            })
            .filter((d) => d.count > 1);
        tempDomains.sort((a, b) => b.count - a.count);
        domains = tempDomains;
        resources.sort((a, b) => b.updated - a.updated);
        updateVisibleItems();

    };

    const tryToGetUri = (url) => {

        try {
            return new URL(url);
        } catch (e) {
            return null
        }
        
    }

    $: {
        resources;
        loadData();
    };


    let domains = [];
    let domainInFocus;
    let selectedDomain;

    let visibleItems = [];
    $: {
        view;
        searchText;
        updateVisibleItems();
    };

    const updateVisibleItems = () => {
        const text = searchText.toLowerCase();
        if (view == Views.folders) {
            visibleItems = workspaces.filter((w) => w.title?.includes(text));
        } else {
            visibleItems = resources.filter((r) => {
                const domainMatches = !selectedDomain || r.url?.includes(selectedDomain);
                const titleMatches = r.title?.toLowerCase().includes(text);
                return domainMatches && titleMatches;
            });
            visibleItems.sort((a, b) => (b.updated ?? b.created ?? 0) - (a.updated ?? a.created ?? 0));
        }
    };

    const onDomainSelected = ({detail}) => {
        selectedDomain = detail.name;
        domainInFocus = detail.name;
    };

    const onResourceOpened = ({detail}) => {
        const resource = detail; 
        const index = resources.findIndex((r) => r.url == resource.url);
        if (index > -1) {
            resources[index] = resource;
            updateVisibleItems();
        }
    };

    let previewWorkspace;


</script>

{#if previewWorkspace}
    <ModalContainer on:exit={() => previewWorkspace = null}>
        <WorkspacePreview workspace={previewWorkspace} />
    </ModalContainer>
{/if}

<div class="bookmarks">
    <div class="header">
        {#if hasFavorites}
        <div class="heading{view == Views.favorites ? ' selected' : ''}" on:mousedown={() => view = Views.favorites}>
            <span>
                Favorites
            </span>
        </div>
        {/if}
        <div class="heading{view == Views.recent ? ' selected' : ''}" on:mousedown={() => view = Views.recent}>
            <span>
                Recent
            </span>
        </div>
        {#if workspaces.length > 0}
        <div class="heading{view == Views.folders ? ' selected' : ''}" on:mousedown={() => view = Views.folders}>
            <span>
                Folders
            </span>
        </div>
        {/if}
        {#if domains.length > 0}
        <div class="heading{view == Views.domains ? ' selected' : ''}" on:mousedown={() => view = Views.domains}>
            <span>
                Domains
            </span>
        </div>
        {/if}
    </div>

    <div class="container">
        {#if view == Views.domains}
            <div class="domain-title">
                {domainInFocus ?? 'Select Domain'}
            </div>
            <div class="domains">
                {#each domains as domain}
                    <div class="domain-container">
                        <DomainIcon {domain} on:domainSelected={onDomainSelected}/>
                    </div>
                {/each}
            </div>
        {:else}
            {#each visibleItems as item (item.id)}
                {#if view == Views.folders}
                    <WorkspaceListItem workspace={item} onClick={() => null}/>
                {:else}
                    <ResourceListItem 
                        {user} 
                        {db}
                        resource={item} 
                        {workspace}   
                        on:resourceOpened={onResourceOpened}
                    />
                {/if}
            {/each}
        {/if}
    </div>
</div>


<style>

    .bookmarks {
        
    }

    .header {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        align-items: center;
    }

    .header .heading {
        font-size: 14px;
        opacity: 0.6;
        background-color: transparent;
        border-radius: 8px;
        height: 25px;
        padding: 0px 8px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .header .heading:hover {
        opacity: 1;
        cursor: pointer;
    } 

    .header .heading.selected {
        background-color: #333333;
        opacity: 1;
        font-weight: 400;
    }

    .bookmarks .container {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #333333;
        margin: 10px;
    }

    .domain-title {
        font-size: 14px;
        font-weight: 400;
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 5px;
        border-bottom: 1px solid #111111;
    }

    .domains {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }

    .domain-container {
        padding: 10px;
    }
</style>