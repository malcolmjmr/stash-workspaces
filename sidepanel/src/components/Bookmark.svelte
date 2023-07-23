<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { getFavIconUrl } from "../utilities/chrome";
    export let bookmark;

    let loaded;

    onMount(() => {
        load();
    });

    let favIconUrl;
    const load = async () => {
        favIconUrl = await getFavIconUrl(bookmark.url);
        loaded = true;
    }

    let dispatch = createEventDispatcher();
    const onClicked = () => {
        dispatch('bookmarkClicked', bookmark);
    };
</script>

{#if loaded}
<div class="bookmark" on:mousedown={onClicked}>
    <img src={favIconUrl} alt=""/>
    <div class="title">{bookmark.title.replace('* ', '')}</div>
</div>
{/if}

<style>
    .bookmark {
        padding: 5px;
        margin: 5px 0px;
        width: calc(100% - 10px);
        min-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img {
        height: 20px;
        width: 20px;
        margin-right: 8px;
    }

    .title {
        flex-grow: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;

    }

    .bookmark:hover {
        cursor:pointer;
    }
</style>