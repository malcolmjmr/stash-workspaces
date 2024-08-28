<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getTabFavIconUrl } from "../utilities/chrome";
  import folderIcon from "../icons/folder.png";


    export let bookmarks = null;

    let dispatch = createEventDispatcher();

    onMount(() => {
        load();

    });


    let hasBookmarkPermission;
    let loaded;
    const load = async () => {
        if (!bookmarks) {
            hasBookmarkPermission = await chrome.permissions.contains({
                permissions: ["bookmarks"],
            });

            bookmarks = await chrome.bookmarks.getChildren('1');
        }

        loaded = true;
    };

</script>


{#if loaded && bookmarks.length > 0}
    <div class="bookmark-bar">
        {#each bookmarks as bookmark}
            <div class='bookmark'  on:mousedown={() => dispatch('bookmarkdClicked', bookmark)}>
                {#if bookmark.url}
                <img src={getTabFavIconUrl(bookmark)}  alt=""/>
                {:else}
                <img src={folderIcon} alt=""/>
                {/if}
                {#if bookmark.title != ''}
                <div class="title">{bookmark.title}</div>
                {/if}
            </div>
        {/each}
    </div>
{/if}

<style>
    .bookmark-bar {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        min-height: 40px;
        height: 40px;
        background-color: #222;
    }

    

    .bookmark-bar::-webkit-scrollbar {
        display: none;
    }

    .bookmark-bar .bookmark {
        max-width: 150px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        justify-content: center;
        margin: 0px 5px;
    }

    .bookmark-bar .bookmark:hover {
        
        cursor: pointer;
    }

    .bookmark-bar .bookmark img {
        height: 22px;
        width: 22px;
    }

    .bookmark-bar .bookmark .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-left: 5px;
    }

</style>