<div class="footer">
    <slot />
    <div class="background" />
</div>

<style>
    .footer {
        position: absolute;
        bottom: 0px;
        height: 30px;
        min-height: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
    }

    .background {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background-color: #111111;
        opacity: 1;
        z-index: 1;
    }
</style>
