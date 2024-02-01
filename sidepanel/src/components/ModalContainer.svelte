<script>
    import { fade, slide } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    const exitModal = () => {
        dispatch('exit');
    };

</script>

<div class="modal" in:fade>
    <div class="background" on:mousedown={exitModal}></div>
    <div class="main-container">
        <slot></slot>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }

    .background {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.4;
        z-index: 10001;
    }

    .main-container {
        z-index: 10002;
        border-radius: 8px;
        background-color: #222222;
        width: calc(100% - 40px);
        max-height: calc(100% - 40px);
        margin: 20px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 2px solid #333333;
    }

</style>