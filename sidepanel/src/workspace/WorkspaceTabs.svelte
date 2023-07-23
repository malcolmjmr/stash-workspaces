<script>
    import Tab from "../tab/Tab.svelte";
    import newTabIcon from "../icons/add-box.png";
    


    export let tabs;
    export let group;
    export let selectedTabs = [];
    export let lastSelectionUpdate;

    const createNewTab = async () => {
        const activeTab = (
            await chrome.tabs.query({ active: true, currentWindow: true })
        )[0];
        return await chrome.tabs.create({ index: activeTab.index + 1 });
    };

</script>

<div class="tabs">
    <div class="container">
        {#each tabs as tab}
            <Tab {tab} {selectedTabs} {lastSelectionUpdate} on:updateSelection/>
        {/each}
    </div>
    
    {#if selectedTabs.length == 0}
        <div class="footer">
            <div class="action spacer" >
            </div>
            <div class="counts">
                <div class="container">
                    <div class="count">
                        {tabs.length}
                        <span>
                            Tab{tabs.length > 1 ? "s" : ""}
                        </span>
                    </div>
                </div>
            </div>
            <div class="action" on:mousedown={createNewTab}>
                <img src={newTabIcon} alt="Create new tab" />
            </div>
            
        </div>
    {/if}
</div>

<style>
    .tabs {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    .container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 30px;
        z-index: 100;
        color: white;
        justify-content: space-between;
        border-top: 1px solid #555555;
    }

    .counts {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;
    }

    .counts .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .action img {
        filter: invert(1);
        height: 20px;
        width: 20px;
    }

    .action {
        opacity: 0.7;
        padding: 0px 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .action:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>