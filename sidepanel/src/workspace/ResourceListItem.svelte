<script>
    /*

        attributes
        - domain
        - date opened or modified
        - tags
        - highlights
    */

    import menuIcon from "../icons/more-vert.png";
    import emptyBoxIcon from "../icons/empty-box.png";
    import checkedBoxIcon from "../icons/checked-box.png";
    import { createEventDispatcher, onMount } from "svelte";

    import { getFavIconUrl } from "../utilities/chrome";
  
    import ModalContainer from "../components/ModalContainer.svelte";
    import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";
    import { setDoc, doc } from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";


    export let db;
    export let user;
    export let resource;
    export let group = null;
    export let workspace = null;
    export let workspaces = null;
    export let selectedResources = [];
    export let lastSelectionUpdate = null;
    export let dragoverItem = null;


    let el;
    let isSelected;
    $: {
        lastSelectionUpdate;
        isSelected = selectedResources.find((t) => t.id == resource.id) != null;
    }



    let loaded;
    let favIconUrl;
    onMount(() => {
        init();
    });

    let isBookmark;
    const init = async () => {
        updateFavIconUrl();
        isBookmark = resource.parentId;
        loaded = true;
    };

    const updateFavIconUrl = async () => {
        favIconUrl = resource.favIconUrl && !resource.favIconUrl.includes('chrome:') ? resource.favIconUrl : await getFavIconUrl();
    }


    let dispatch = createEventDispatcher();

    let isInFocus;
    let favIconInFocus;

    const pin = () => {
        
    };

    const onMouseEnter = (e) => {
        isInFocus = true;
    };

    const onMouseLeave = () => {
        isInFocus = false;
        favIconInFocus = false;
    };

    const onMouseEnterFavIcon = (e) => {
        favIconInFocus = true;
    };

    const onMouseLeaveFavIcon = (e) => {
        favIconInFocus = false;
    };

    let showMore;
    const onMenuOpen = (e) => {
        showMore = !showMore;
    };

    const onSelectionUpdated = () => {
        dispatch("updateSelection", resource);
    };

    let isDragged;
    const onDragStart = (e) => {
        isDragged = true;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("resourceId", resource.id);
    };

    let isDraggedOver;
    let lastDragOver = Date.now();
    const onDragOver = (e) => {
        e.preventDefault();
        if (!isDraggedOver) isDraggedOver = true;
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        if (isDraggedOver) {
            isDraggedOver = false;
        }
    };

    const onDragEnd = (e) => {
        isDragged = false;
    };

    const onDrop = async (e) => {
        if (isDraggedOver) isDraggedOver = false;
    };

    const onTitleClicked = async () => {
        const tab = await chrome.tabs.create({url: resource.url});
        console.log('opening rsource');
        console.log(tab);
        
        if (group) {
            console.log('grouping tab');
            chrome.tabs.group({tabIds: tab.id, groupId: group.id});
        } else {
            console.log('couldn\'t find group');
            // maybe create a tab group for the opened tab and 
            // keep previously opened tab configuration dormant?
        }

        if (user && db) {
            const now = Date.now();
            resource.updated = now;
            resource.lastVisited = now;
            const ref = doc(db, StorePaths.userResource(user.id, resource.id));
            setDoc(ref, resource, { merge: true });
            dispatch('resourceOpened', resource);
        }
    };

    let showBookmarkMenu;

</script>

{#if showMore}
    <ModalContainer on:exit={() => showMore = false}>
        <BookmarkDetails {db} {workspace} {workspaces} {resource} isNativeBookmark={!user}/>
    </ModalContainer>
{/if}
{#if loaded}

<div
    bind:this={el}
    class="resource{
        isSelected ? ' selected' : ''}{
        isInFocus ? ' focused' : ''}{
        isDraggedOver ? ' dragged-over' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragstart={onDragStart}
    on:dragover={onDragOver}
    on:dragleave={onDragLeave}
    on:dragend={onDragEnd}
    on:drop={onDrop}
    draggable={showMore ? "false" : "true"}
>
    <div class="main-container">
        <div
            class="favicon-container"
            on:mouseleave={onMouseLeaveFavIcon}
            on:mouseenter={onMouseEnterFavIcon}
        >
            {#if isSelected}
                <img
                    class="icon"
                    src={checkedBoxIcon}
                    alt="Unselect"
                    on:mousedown={onSelectionUpdated}
                />
            {:else if /*favIconInFocus*/ false}
                <img
                    class="icon"
                    src={emptyBoxIcon}
                    alt="Select"
                    on:mousedown={onSelectionUpdated}
                />
            {:else}
                <img class="favicon" src={favIconUrl} alt={resource.title} />
            {/if}
        </div>
        <div class="title" on:mousedown={onTitleClicked}>{resource.title}</div>
        <div class="spacer" on:mousedown={onTitleClicked} />
        {#if !isSelected && !isDragged}
            <div class="actions">
                {#if isInFocus && !isDragged}
                    <img
                        src={menuIcon}
                        class="icon"
                        alt="Menu"
                        on:mousedown={onMenuOpen}
                    />
                    <!--
                        <img
                            src={openIcon}
                            class="icon"
                            alt="Open"
                            on:mouseup={onCloseTab}
                        />
                    -->
                    
                {/if}
            </div>
        {/if}
    </div>

    
</div>
{/if}

<style>
    .resource {
        padding: 2px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        font-weight: 300;
        color: white;
        user-select: none;
    }

    .main-container {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }


    .resource.focused {
        background-color: #444444;
    }

    .resource.selected {
        background-color: #444444;
    }

    

    .resource.active {
        background-color: #666666;
    }

    .resource.dragged-over {
        opacity: 0.4;
        background-color: #555555;
    }

    .resource.end-resource {
        border-radius: 0px 0px 8px 8px;
        margin-bottom: 10px;
    }

    .favicon-container {
        position: relative;
        min-width: 20px;
        display: flex;
    }

    .favicon {
        height: 20px;
        width: 20px;
    }



    .group-indicator {
        position: absolute;
        height: 8px;
        width: 8px;
        bottom: -2px;
        right: -2px;
        border-radius: 100%;
    }

    .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-lines: 1;
        overflow: hidden;
        margin-left: 8px;
        width: 100%;
    }

    .title:hover {
        cursor: pointer;
    }

    .spacer {
        height: 100%;
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        height: 16px;
        width: 16px;
        padding: 2px;
        filter: invert(1);
        opacity: 0.7;
    }

    .icon:hover {
        cursor: pointer;
        opacity: 1;
    }

    .drop-zone {
        height: 20px;
        background-color: #444444;
    }
</style>
