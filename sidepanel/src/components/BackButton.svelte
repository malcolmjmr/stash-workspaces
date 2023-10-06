<script> 
    import backIcon from "../icons/back.png";

    export let text = 'Back';
    export let onClick;
</script>

<div class="back-button" on:mousedown={onClick}>
    <img src={backIcon} alt="Back"/> 
    <span>Back</span>
</div>

<style>

    .back-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70px;
    }

    .back-button:hover {
        cursor: pointer;
    }

    .back-button img {
        height: 15px;
        width: 15px;
        filter: invert(1);
    }

</style>

