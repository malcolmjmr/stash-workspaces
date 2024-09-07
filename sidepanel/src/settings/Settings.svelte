<script>
    import { onMount } from "svelte";

    /*

        Account
        - login

        General
        - webstore page
        - bugs
        - feature
        - shortcuts  
        - panel position

        Permissions
        - Bookmarks
        - History
        - Active tab
        - Incognito

        Data
        - Export
        - Sync 

        Appearance 
        - Theme
        - Text size

        Automation (coming soon)
        - Name
        - Group tabs
        - Clear tabs 

    */

    import MenuItem from "../components/MenuItem.svelte";
    import Menu from "../header/Menu.svelte";
    import SectionContainer from "../components/SectionContainer.svelte";
    import Info from "./Info.svelte";
    import Feedback from "./Feedback.svelte";
    import { get } from "../utilities/chrome";

    let settings;

    onMount(() => {
        load();
    });

    let loaded;
    const load = async () => {

        settings = (await get('settings')) ?? {};
        
        


        loaded = true;
    };



</script>
{#if loaded}
<div class="settings">
    <div class="header">
        <div class="title">
            Settings
        </div>
    </div>
    <div class="sections">
        <Info/>
        <Feedback/>
    </div>
</div>
{/if}

<style>
    .settings {
        display: flex;
        flex-direction: column;
        
    }

    .header {
        border-bottom: 1px solid #333;
        font-size: 20px;
        font-weight: 400;
        padding: 10px; 
    }

    .sections {
        display: flex;
        flex-direction: column;
    }
</style>