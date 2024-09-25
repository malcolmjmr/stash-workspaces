<script>
    import Divider from "../components/Divider.svelte";
    import filterIcon from "../icons/filter.png";
    import clearIcon from "../icons/clear-all.png";
    import copyIcon from "../icons/copy.png";
    import sleepIcon from "../icons/sleep.png";
    import SortToggle from "../components/SortToggle.svelte";
    import { getActiveTab } from "../utilities/chrome";

    
    export let sort = null; 

    let showSortOptions;

    let fieldOptions = [
        {
            title: 'Index',
            field: 'index',
        },
        {
            title: 'Created',
            field: 'id',
        },
        {
            title: 'Accessed',
            field: 'lastAccessed',
        }
    ];

    const onFieldSelected = (e) => {
        sort.field = fieldOptions.find((f) => f.field == e.target.value);

    };

    const onDirectionToggled = () => {
        if (sort.ascending) {
            sort.ascending = false;
        } else {
            sort.ascending = true;
        }
    };

    let hoverDetails;

    const getTabs = async () => {
        const activeTab = await getActiveTab();
        const tabs = await chrome.tabs.query({ windowId: activeTab.windowId });
        return tabs
    };

    const copyLinks = async () => {
        const tabs = await getTabs();

    };

    const putTabsToSleep = async () => {
        const tabs = await getTabs();
        for (const tab of tabs) {
            chrome.tabs.discard(tab.id);
        }

    };

    const clearTabs = async () => {
        const tabs = await getTabs();
        const newTab = await chrome.tabs.create({});
        chrome.tabs.remove(tabs.map((t) => t.id));
    };


</script>
<div class="window-toolbar">
    <div class="sort">
        <img src={filterIcon} class="icon button" alt="Filter Tabs" on:mousedown={() => showSortOptions = true}/>
        {#if !hoverDetails && (sort || showSortOptions)}
        <div class="details">
            <select name="choice" on:change={onFieldSelected}>
                {#each fieldOptions as option}
                    <option value={option.field}>{option.title}</option>
                {/each}
              </select>
            
            <SortToggle {sort} on:click={onDirectionToggled} />
        </div>
        {/if}
    </div>
    
    {#if hoverDetails}
        <div class='hover-details'>
            {hoverDetails}
        </div>
    {:else}
        <Divider />
    {/if}
    
    <div class="actions" on:mouseleave={() => hoverDetails = null}>
        <img 
            src={copyIcon} 
            class="icon button" 
            alt="Copy links"
            on:mouseenter={() => hoverDetails = 'Copy tab URLs'}
            on:mousedown={copyLinks}
        >
        <img 
            src={sleepIcon} 
            class="icon button" 
            alt="Sleep"
            on:mouseenter={() => hoverDetails = 'Put tabs to sleep'}
            on:mousedown={putTabsToSleep}
        >
        <img 
            src={clearIcon} 
            class="icon button" 
            style="height: 24px; width: 24px"
            alt="Clear"
            on:mouseenter={() => hoverDetails = 'Clear open tabs'}
            on:mousedown={clearTabs}
        >
    </div>
    
</div>

<style>

    .window-toolbar {
        height: 30px;
        width: calc(100% - 20px);
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .sort {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .sort .details {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img.icon.button {
        filter: invert(1);
        height: 20px;
        width: 20px;
        padding-left: 5px;
    }

    img.icon.button:hover {
        cursor: pointer;
    }

    .details select {
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
    }


    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
</style>

