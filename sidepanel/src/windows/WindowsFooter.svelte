<script>
    import { createEventDispatcher, onMount } from "svelte";
    import FooterContainer from "../components/FooterContainer.svelte";
    import CircleDivider from "../components/CircleDivider.svelte";
    import newWindowIcon from "../icons/new-window.png";
    import mergeIcon from "../icons/merge.png";
    import splitIcon from "../icons/split.png";
    import SelectionActions from "../components/SelectionActions.svelte";
  import { getActiveTab } from "../utilities/chrome";

    let dispatch = createEventDispatcher();

    export let windows;
    export let tabs;
    export let groups;

    export let lastSelectionUpdate;
    export let selectedTabs;

    let windowCount = 0;
    let tabCount = 0;
    let groupCount = 0;

    let loaded;
    onMount(() => {
        getCounts();
        loaded = true;
    });

    const getCounts = () => {
        windowCount = windows.length;
        tabCount = tabs.length;
        groupCount = Object.keys(groups).length;
    };

    $: {
        groups;
        windows;
        getCounts();
    }

    const createNewWindow = () => {
        chrome.windows.create({ focused: true });
    };

    const splitTabGroups = async () => {
        let activeTab = await getActiveTab();
        const tabGroups = await chrome.tabGroups.query({});

        if (activeTab.groupId > -1) {
            const looseTabs = (await chrome.tabs.query({ windowId: activeTab.windowId, groupId: -1 }))
                .map((t) => t.id);
            const window = await chrome.windows.create({ focused: false });
            const newTab = (await chrome.tabs.query({windowId: window.id}))[0];
            await chrome.tabs.move(looseTabs, {
                windowId: window.id,
                index: -1
            });
            await chrome.tabs.remove(newTab.id);
        }


        for (const group of tabGroups) {
            const tabs = await chrome.tabs.query({ groupId: group.id});
            const isActiveWindow = tabs.find((t) => t.id == activeTab.id) != null;
            if (isActiveWindow) continue;
            const window = await chrome.windows.create({ focused: false });
            const newTab = (await chrome.tabs.query({windowId: window.id}))[0];
            await chrome.tabGroups.move(group.id, {
                windowId: window.id,
                index: -1
            });
            await chrome.tabs.remove(newTab.id);
            await new Promise((resolve) => setTimeout(resolve, 200));
        }

        if (activeTab.groupId > -1) {

        }


        dispatch("mergedWindows");
    
    };

    const mergeWindows = async () => {

    
        const activeTab = (
            await chrome.tabs.query({
                active: true,
                currentWindow: true,
            })
        )[0];

        const currentWindow = await chrome.windows.get(activeTab.windowId);

        let windowIds = (await chrome.windows.getAll())
            .filter((w) => currentWindow.incognito == w.incognito)
            .map((w) => w.id);
        

        const moveProperties = {
            windowId: activeTab.windowId,
            index: -1,
        };

        const tabGroups = await chrome.tabGroups.query({});
        for (const group of tabGroups) {
            if (!windowIds.includes(group.windowId)) return;
            try {
                await chrome.tabGroups.move(group.id, moveProperties);
                if (activeTab.groupId != group.id) {
                    await chrome.tabGroups.update(group.id, { collapsed: true });
                }
                await new Promise((resolve) => setTimeout(resolve, 200));
            } catch (e) {
                console.log(e);
            }
        }

        let tabs = await chrome.tabs.query({
            currentWindow: false,
            groupId: -1,
            
        });

        if (tabs.length > 0) {
            await chrome.tabs.move(
                tabs.filter((t) => t.incognito == currentWindow.incognito).map((t) => t.id),
                moveProperties
            );
        }
       
        dispatch("mergedWindows");
    };
</script>

{#if loaded}
    {#key lastSelectionUpdate}
        <div class="home-footer">
            {#if windowCount == 1 && groupCount > 0}
            <div class="action" on:mousedown={splitTabGroups}>
                <img src={splitIcon} alt="Split Groups" />
            </div>
            {:else if windowCount > 1}
            <div class="action" on:mousedown={mergeWindows}>
                <img src={mergeIcon} alt="Merge Windows" />
            </div>
            {:else}
            <div class="action spacer"></div>
            {/if}

            <div class="counts">
                <div class="count">
                    {windowCount} Window{#if windowCount > 0}s{/if}
                </div>
                <CircleDivider />
                <div class="count">
                    {tabCount} Tab{#if tabCount > 0}s{/if}
                </div>
            </div>
            
            <div class="action" on:mousedown={createNewWindow}>
                <img src={newWindowIcon} alt="Create Window" />
            </div>
        </div>
    {/key}
{/if}

<style>
    .home-footer {
        padding: 0px 5px;
        width: calc(100% - 10px);
        height: 100%;
        display: flex;
        flex-direction: row;
        z-index: 2;
        justify-content: space-between;
    }

    .counts {
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.8;
        font-size: 14px;
    }

    .action img {
        filter: invert(1);
        height: 24px;
        width: 24px;
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
