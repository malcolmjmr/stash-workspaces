<script>
    export let backgroundColor = null;
    
</script>

<div class="header" style={backgroundColor ? 'background-color: ' + backgroundColor : ''}>
    <slot />
</div>

<style>
    .header {
        background-color: #111111;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
