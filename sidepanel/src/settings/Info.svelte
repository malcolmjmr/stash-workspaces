<script>
    import { onMount } from "svelte";
    import MenuItem from "../components/MenuItem.svelte";
    import { createAdjacentTab } from "../utilities/chrome";
    import SectionContainer from "../components/SectionContainer.svelte";

    
    onMount(() => {
        load();
    });

    let manifest;
    let loaded;
    const load = async () => {
        manifest = await chrome.runtime.getManifest();
        loaded = true;
    };



    const openUrl = async (url) => {
        await createAdjacentTab({ url });
    };

</script>

{#if loaded}
<SectionContainer title="Info" canCollapse={false}>
    <div class="container" slot="main">
        <div class="details">
            <div class="name">
                {manifest.name}
            </div>
            <div class="version">
               Version: {manifest.version}
            </div>
        </div>
        
        <MenuItem 
            title="Webstore Page"
            icon="https://www.google.com/images/icons/product/chrome_web_store-32.png",
            onClick={() => openUrl("https://chrome.google.com/webstore/detail/window-manager/npaccibollphhdfghmmlbmpljhdiaehh")}
        />
    </div>
</SectionContainer>
{/if}

<style>
    .container {
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .container .details div {
        padding: 2px 5px;
    }

    .details {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .name {
        font-weight: 400;
    }

    .version {
        opacity: .9;
    }
</style>