<script>
    import { createEventDispatcher, onMount } from "svelte";
    import FooterContainer from "../components/FooterContainer.svelte";
    import CircleDivider from "../components/CircleDivider.svelte";
    import newWindowIcon from "../icons/new-window.png";
    import mergeIcon from "../icons/merge.png";
    import SelectionActions from "../components/SelectionActions.svelte";

    let dispatch = createEventDispatcher();

    export let windows;
    export let tabs;
    export let lastSelectionUpdate;
    export let selectedTabs;

    let windowCount = 0;
    let tabCount = 0;

    let loaded;
    onMount(() => {
        getCounts();
        loaded = true;
    });

    const getCounts = () => {
        windowCount = windows.length;
        tabCount = tabs.length;
    };

    $: {
        windows;
        getCounts();
    }

    const createNewWindow = () => {
        chrome.windows.create({ focused: true });
    };

    const mergeWindows = async () => {
        const activeTab = (
            await chrome.tabs.query({
                active: true,
                currentWindow: true,
            })
        )[0];
        const moveProperties = {
            windowId: activeTab.windowId,
            index: -1,
        };

        const tabGroups = await chrome.tabGroups.query({});
        for (const group of tabGroups) {
            try {
                await chrome.tabGroups.move(group.id, moveProperties);
                await new Promise((resolve) => setTimeout(resolve, 200));
            } catch (e) {
                console.log(e);
            }
        }

        const tabs = await chrome.tabs.query({
            currentWindow: false,
            groupId: -1,
        });
        await chrome.tabs.move(
            tabs.map((t) => t.id),
            moveProperties
        );
        dispatch("mergedWindows");
    };
</script>

{#if loaded}
    {#key lastSelectionUpdate}
        <div class="home-footer">
            <div class="action" on:mousedown={mergeWindows}>
                <img src={mergeIcon} alt="Merge Windows" />
            </div>
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
        width: 100%;
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
