<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { getFavIconUrl } from "../utilities/chrome";
    export let bookmark;

    import Bookmark from "./Bookmark.svelte";
    import folderIcon from "../icons/folder-filled.png";
    import openFolderIcon from "../icons/folder-open-filled.png";
    export let isOpen = false;
    let isFolder = !bookmark.url;
    const onclick = (e) => {
        if (!isFolder) return;
        isOpen = !isOpen;
    };

    let isInFocus;

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
    <div
        class="bookmark"
        on:mouseenter={() => (isInFocus = true)}
        on:mouseleave={() => (isInFocus = false)}
    >
        <div class="head">
            <img
                on:mousedown={onclick}
                src={isFolder ? (isOpen ? openFolderIcon : folderIcon) : favIconUrl}
                class="icon{isFolder ? ' folder' : ''}"
                alt=""
            />
            <div class="title" >
                {bookmark.title}
            </div>
        </div>

        {#if isOpen}
            <div class="children">
                {#each bookmark.children ?? [] as child}
                    <Bookmark bookmark={child} />
                {/each}
            </div>
        {/if}
    </div>
{/if}

<style>
    .bookmark {
        display: flex;
        flex-direction: column;
        padding: 5px;
        font-size: 16px;
    }

    .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-lines: 1;
        overflow: hidden;
    }

    .title:hover {
        font-style: italic;
    }

    .head {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .icon {
        height: 24px;
        width: 24px;
        margin-right: 10px;
        border-radius: 7px;
    }

    .folder:hover {
        cursor: pointer;
    }

    .dark .icon.folder {
        filter: invert(1);
    }

    .children {
        margin-left: 20px;
        overflow-y: scroll;
        flex-grow: 1;
    }

    .title:hover {
        cursor: pointer;
    }
</style>

