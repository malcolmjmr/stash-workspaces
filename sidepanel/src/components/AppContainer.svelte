<script>
    import { onDestroy, onMount } from "svelte";
    import { slide } from "svelte/transition";

    export let scrollingUp;
    export let lastScrollPosition = 0;

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
        scrollListener = body?.addEventListener("scroll", (e) => {
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
                    console.log(scrollingUp);
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
        <div class="padding" />
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
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .header {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
    }

    .body {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .body::-webkit-scrollbar {
        display: none;
    }

    .body .padding {
        min-height: 40px;
        width: 100%;
    }

    .footer {
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: 999;
        background-color: #111111;
        padding: 5px 0px;
    }
</style>
