<script>
    import { createEventDispatcher, onMount } from "svelte";
    import FooterContainer from "../components/FooterContainer.svelte";
    import CircleDivider from "../components/CircleDivider.svelte";
    import newWindowIcon from "../icons/new-window.png";
    import SelectionActions from "../components/SelectionActions.svelte";

    let dispatch = createEventDispatcher();

    export let windows;
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
        tabCount = windows.reduce((a, w) => a + w.tabs.length, 0);
    };

    $: {
        windows;
        getCounts();
    }
</script>

<FooterContainer>
    {#if loaded}
        {#key lastSelectionUpdate}
            {#if selectedTabs.length > 0}
                <SelectionActions {lastSelectionUpdate} {selectedTabs} />
            {:else}
                <div class="home-footer">
                    <div class="counts">
                        <div class="count">
                            {windowCount} Window{#if windowCount > 0}s{/if}
                        </div>
                        <CircleDivider />
                        <div class="count">
                            {tabCount} Tab{#if tabCount > 0}s{/if}
                        </div>
                    </div>
                </div>
            {/if}
        {/key}
    {/if}
</FooterContainer>

<style>
    .home-footer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        z-index: 2;
        justify-content: center;
    }
    .counts {
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.8;
        font-size: 14px;
    }
</style>
