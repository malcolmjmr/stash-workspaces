<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import BooleanSetting from './BooleanSetting.svelte';
    import NumericSetting from './NumericSetting.svelte';
    import StringSetting from './StringSetting.svelte';
    import ColorSetting from './ColorSetting.svelte';
  import UrlSetting from './UrlSetting.svelte';
  import SettingContainer from './SettingContainer.svelte';
  import { _settings } from '../stores';
  import { get, set } from '../utilities/chrome';
    import { defaultSettings } from "./defaults";
  import Divider from '../components/Divider.svelte';

    let settings;

    const dispatch = createEventDispatcher();

    let loaded = true;
    onMount(() => {
        load();
    });

    const load = async () => {
        let tempSettings = defaultSettings;
        let storedSettings = ((await get('settings')) ?? {});

        for (const section in storedSettings) {
            tempSettings[section] = {...(tempSettings[section]?? {}), ...storedSettings[section]}
        }

        settings = tempSettings;
        loaded = true;
    }

    function updateSetting(section, key, value, update = true) {
        settings[section][key] = value;
        _settings.set(settings);

        if (update) {
            console.log('updating settings');
            set({ settings });
        }
    }

    function transformCamelCase(str) {
        return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
    }

    function isUrl(string) {
    // Regular expression for standard URLs
    const urlPattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    // Array of valid browser-specific URL schemes
    const browserSchemes = [
        'chrome://',
        'edge://',
        'firefox://',
        'opera://',
        'vivaldi://',
        'browser://',
        'about:',
        'ms-settings:',
        'file://'
    ];

    // Check if it's a standard URL
    if (urlPattern.test(string)) {
        return true;
    }

    // Check if it's a browser-specific URL
    return browserSchemes.some(scheme => string.toLowerCase().startsWith(scheme));
    }
</script>

{#if loaded}
<div class="settings-page" style="background-color: {settings?.appearance?.primaryColor ?? '#222222'}; color: {settings?.appearance?.primaryTextColor ?? 'white'};">
    {#each Object.entries(settings ?? {}) as [section, sectionSettings]}
        <section>
        <h2>{section}</h2>
        <div class="section-background" >
        {#each Object.entries(sectionSettings ?? {}) as [key, value]}
            <SettingContainer>
            {#if typeof value === 'boolean'}
            <BooleanSetting
                label={transformCamelCase(key)}
                value={value}
                on:change={(e) => updateSetting(section, key, e.detail == 'true' ? true : false)}
            />
            {:else if typeof value === 'number'}
            <NumericSetting
                label={transformCamelCase(key)}
                value={value}
                on:change={(e) => updateSetting(section, key, e.detail, false)}
                on:blur={(e) => updateSetting(section, key, e.detail)}
            />

            {:else if typeof value === 'string' && value.startsWith('#')}
            <ColorSetting
                label={transformCamelCase(key)}
                value={value}
                on:change={(e) => updateSetting(section, key, e.detail, false)}
                on:blur={(e) => updateSetting(section, key, e.detail)}
            />
            {:else if typeof value === 'string' && isUrl(value)}
                <UrlSetting
                    label={transformCamelCase(key)}
                    url={value}
                />
            {:else}
            <StringSetting
                label={transformCamelCase(key)}
                value={value}
                on:change={(e) => updateSetting(section, key, e.detail, false)}
                on:blur={(e) => updateSetting(section, key, e.detail)}
            />
            {/if}
            
            </SettingContainer>
            <Divider invisible={true} thickness={0.5} />
        {/each}
        </div>
        </section>
    {/each}
</div>
{/if}

<style>
    .settings-page {
        padding: 0px 10px;
        max-height: 600px;
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .settings-page::-webkit-scrollbar {
        display: none;
    }
    

    section {
        
    }

    h2 {
        text-transform: capitalize;
        margin: 10px 5px 5px 5px;
    }

    .section-background {
        border-radius: 10px;
        overflow: hidden;
        
    }
</style>

<!-- <script>
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
  import ApiKeys from "./ApiKeys.svelte";

    let settings;

    onMount(() => {
        load();
    });

    let loaded;
    const load = async () => {

        settings = (await get('settings')) ?? {};
        
         console.log('loading settings');
         console.log(settings);


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
        <ApiKeys bind:settings />
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
</style> -->