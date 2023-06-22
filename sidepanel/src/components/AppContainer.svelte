<script>
    import { onDestroy, onMount } from "svelte";
    import { slide } from "svelte/transition";

    export let scrollingUp;
    export let lastScrollPosition;

    let header;
    let body;

    onMount(() => {
        console.log(header?.height);
        addEventListeners();
    });

    onDestroy(() => {
        removeListeners();
    });

    let isScrolling;
    let scrollListener;
    const addEventListeners = () => {
        scrollListener = body.addEventListener("scroll", (e) => {
            if (!isScrolling) {
                isScrolling = true;
            }
            const scrollChange = lastScrollPosition - body.scrollTop;
            if (scrollingUp) {
                if (scrollChange < 0) {
                    scrollingUp = false;
                }
            } else {
                if (scrollChange > 0) {
                    scrollingUp = true;
                }
            }
            lastScrollPosition = body.scrollTop;
        });
    };

    const removeListeners = () => {
        body.removeEventListener("scroll", scrollListener);
    };
</script>

<main>
    {#if scrollingUp || lastScrollPosition < 20}
        <div class="header" in:slide out:slide>
            <slot name="header" />
        </div>
    {/if}
    <div class="body" bind:this={body}>
        <slot name="body" />
    </div>
    {#if scrollingUp || lastScrollPosition < 20}
        <div class="footer" in:slide out:slide>
            <slot name="footer" />
        </div>
    {/if}
</main>

<style>
    main {
        position: relative;
        z-index: 99999;
        background-color: #333333;
        height: 100%;
        width: 100%;

        color: white;
    }

    .header {
        position: absolute;
        top: 0px;
        width: 100%;
        z-index: 999;
    }

    .body {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 100%;
    }

    .footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
    }
</style>
