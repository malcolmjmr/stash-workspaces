<script>
    import searchIcon from "../icons/search.png";
    import clearIcon from "../icons/close.png";

    export let searchText = "";
    export let backgroundColor = null;
    export let placeholderText = 'Search';

    const onClearTextClicked = () => {
        searchText = "";
    };
</script>

<div
    class="search-box"
    style={backgroundColor ? "background-color: " + backgroundColor : ""}
>
    <img src={searchIcon} alt="Search" />
    <input type="text" bind:value={searchText} placeholder={placeholderText} />
    {#if searchText.length > 0}
        <img
            class="clear button"
            alt="Clear"
            src={clearIcon}
            on:mousedown={onClearTextClicked}
        />
    {/if}
</div>

<style>
    .search-box {
        padding: 2px;
        background-color: #333333;
        border-radius: 8px;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        opacity: 0.7;
        margin-left: 2px;
    }

    input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 1px;
        color: white;
    }

    input::placeholder {
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    .button:hover {
        cursor: pointer;
    }

    .clear.button {
        height: 16px;
        width: 16px;
    }
</style>
