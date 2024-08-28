<script>
    import { createEventDispatcher, onMount } from "svelte";

    import closeIcon from "../icons/close.png";
    import expandIcon from "../icons/expand.png";
  import { getActiveTab, getTabFavIconUrl } from "../utilities/chrome";

    export let resource;


    let dispatch = createEventDispatcher();

    let loaded;
    
    onMount(() => {
        load();
        
    });

    export let videoId = null;
    export let url = null;

    const load = async () => {
        const uri = new URL(resource.url);
        videoId = uri.searchParams.get('v');
        if (videoId) {
            url = `https://www.youtube.com/embed/${videoId}`;
        } else {
            url = resource.url;
        }
        loaded = true;
    };

    const openInTab = async (e) => {
        const activeTab = await getActiveTab();
        const tab = await chrome.tabs.create({
            url: resource.url,
            index: activeTab.index + 1,
            openerTabId: activeTab.id,
        });

        if (activeTab.groupId > -1) {
            await chrome.tabs.group({ groupId: activeTab.groupId, tabIds: tab.id});
        }
        dispatch('exit');
    };

    const closePlayer = (e) => {
        dispatch('exit');
    };
</script>

{#if loaded}
<div class="miniplayer">
    <div class="header">
        <div class="title">
            <img src={getTabFavIconUrl(resource)} alt="">
            <span>{resource.title}</span>
        </div>

        <img class="button" src={expandIcon} alt="Open In Tab" on:mousedown={openInTab}/>
        <img class="button" src={closeIcon} alt="Close" on:mousedown={closePlayer}/>
    </div>
    <iframe 
        title=""
        src={url}>
    </iframe>
</div>
{/if}

<style>
    .miniplayer {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 300px;
        width: 100%;
        background-color: black;
        display: flex;
        flex-direction: column;
    }

    .header {
        height: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .header .title {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .header .title {
        flex-grow: 1;
        display: flex;
        padding: 0px  5px;

    }

    .header .title span {
        margin-left: 5px;
    }


    .header .button {
        height: 20px;
        width: 20px;
        margin-left: 8px;
        opacity: 0.6;
        filter: invert(1);
    }

    .header .button:hover {
        opacity: 1;
        cursor: pointer;
    }

    iframe {
        flex-grow: 1;
        padding: 0px;
        margin: 0px;
        border: 0px;
        box-shadow: none;

    }
</style>