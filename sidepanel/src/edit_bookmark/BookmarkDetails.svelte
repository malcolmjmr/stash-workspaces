<script>
    import { createEventDispatcher, onMount } from "svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import LocationSelection from "./LocationSelection.svelte";

    import addIcon from "../icons/add.png";
    import linkIcon from "../icons/link.png";
    import removeIcon from "../icons/remove.png";
    import folderIcon from "../icons/folder-filled.svg";
    import trashIcon from "../icons/delete.png";
    import { getTabFavIconUrl, tryToGetBookmark } from "../utilities/chrome";
    import { allWorkspaces, userData } from "../stores";
    import { deleteDoc, doc, setDoc } from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";
    import { createResource } from "../utilities/firebase";
    import ModalContainer from "../components/ModalContainer.svelte";
    import DeleteDialogue from "./DeleteDialogue.svelte";


    export let db = null;
    export let user = null;
    export let tab;
    export let resource;
    export let isNativeBookmark = false;

    /*
        Todo: determine type of account
    */

    // used if user cancels actions 
    let locationsAdded = [];
    let locationsRemoved = [];
    let isFolder;

    
    let dispatch = createEventDispatcher();

    let loaded;
    let canSave;

    onMount(() => {
        load();
    });

    let title;
    let url;
    let favIconUrl; 
    let locations = [];
    const load = async () => {

        title = (tab ?? resource).title;
        url = (tab ?? resource).url;
        favIconUrl = getTabFavIconUrl({url});
        if (tab) {
            if (tab.resource) {
                locations = tab.resource.contexts
                    .map((id) => $allWorkspaces.find((w) => w.id == id))
                    .filter((w) => w != null);
            } else if (tab.bookmarks) {
                for (const bookmark of tab.bookmarks) {
                    await addParentFolder(bookmark);
                }
                
            }
        } else if (resource) {
            if (isNativeBookmark) {

                if (resource.url) {
                    const searchResults = await chrome.bookmarks.search({url: resource.url});
                    for (const bookmark of searchResults) {
                        await addParentFolder(bookmark);
                    }
                } else { // is folder
                    isFolder = true;
                    await addParentFolder(resource);
                }
                
            } else {
                locations = resource.contexts
                    .map((id) => $allWorkspaces.find((w) => w.id == id))
                    .filter((w) => w != null);
            }
        }
        
        loaded = true;
    };

    const addParentFolder = async (bookmark) => {
        const folder = await tryToGetBookmark(bookmark.parentId);
        if (folder) {
            locations.push(folder);
        }
    }

    let showLocationSelection;

    const saveBookmark = async () => {


        /* 

            check if saving to local or remote storage
            check if tab or 
        */


        if (resource) {
            let titleChanged;
            let urlChanged;
            if (resource.title != title) {
                resource.title = title;
                titleChanged = true;
            }
            if (resource.url != url) {
                resource.url = url;
                urlChanged = true;
            }
           
            if (isNativeBookmark) {
                if (titleChanged || urlChanged) {
                    await chrome.bookmarks.update(resource.id, {title, url});
                }
            } else {

                if (user) {
                    console.log('saving to firebase');
                    const ref = doc(db, StorePaths.userResource(user.id, resource.id));
                    setDoc(ref, resource, { merge: true });
                }  
            }
             
        }

        if (tab) {
            tab.resource = resource;
        }


        for (const bookmarkToRemove of bookmarksToRemove) {
            await chrome.bookmarks.remove(bookmarkToRemove.id);
            const index = tab?.bookmarks.findIndex((b) => b.id == bookmarkToRemove.id);
            if (index > -1) {
                tab.bookmarks.splice(index, 1);
            }
        }
    
        

        dispatch('dataUpdated', {tab, resource});
        dispatch('exit');
    };

    const deleteBookmark = async ({ detail }) => {
        console.log('is native bookmark: ' + isNativeBookmark);
        console.log(resource);
        if (tab?.resource || (!isNativeBookmark && resource)) {
            if (!resource) resource = tab.resource;
            let ref = doc(db, StorePaths.userResource(user.id, resource.id)) ;
            deleteDoc(ref);
            resource.deleted = true;
            if (tab) tab.resource = null;
            dispatch('dataUpdated', { tab, resource })
        } else if (isNativeBookmark && resource) {
            console.log('deleting bookmark');
            await chrome.bookmarks.remove(resource.id);
            resource.deleted = true;
            if (tab?.bookmarks) {
                
            }
            dispatch('dataUpdated', { resource } );
            dispatch('bookmarkDeleted');
            
        }
        
        if (tab?.bookmarks) {
            for (const bookmark of tab.bookmarks) {
                await chrome.bookmarks.remove(bookmark.id);
            }

            tab.bookmarks = null;

            dispatch('dataUpdated',{tab});
            dispatch('bookmarkDeleted');

        }
        
        dispatch('exit');
    };

    const addLocation = async ({detail}) => {
        showLocationSelection = false;
        const location = detail;
        if (!canSave) canSave = true;

        let parentFolderId;
        if (location.folder) {
            parentFolderId = location.folder.id;
            if (tab && !tab.bookmarks) {
                tab.bookmarks = []
            }
            console.log('adding folder');
            console.log(location.folder);
            locations.push(location.folder);
            locationsAdded.push(location.folder);

        } else if (location.workspace) {
            if (userData) { // if (settings.cloudStorage)
                resource = tab?.resource ?? resource ?? createResource(tab);
                if (!resource.contexts) resource.contexts = [];
                const index = resource.contexts.findIndex((id) => location.workspace.id == id);
                if (index == -1) {
                    resource.contexts.push(location.workspace.id);
                }
               
            } else {
                parentFolderId = location.workspace.folderId;

            }

            locations.push(location.workspace);
            locationsAdded.push(location.workspace);
        }

        if (tab && parentFolderId) {
            const bookmark = await chrome.bookmarks.create({ 
                url: tab.url, 
                title: tab.title,
                parentId: parentFolderId,
            });
            if (!tab.bookmarks) tab.bookmarks = [];
            tab.bookmarks.push(bookmark);
        }

        //dispatch('dataUpdated', {tab});
    };

    let bookmarksToRemove = [];
    const removeLocation = async (location) => {

        const locationIndex = locations.findIndex((l) => l.id == location.id);
        console.log('removing location ');
        console.log(location);
        console.log('location index: ' + locationIndex);
        if (locationIndex > -1) {
            canSave = true;
            locations = locations.filter((l) => l.id != location.id);
        }

        if (tab && tab.resource) {
            const index = tab.resource.contexts.findIndex((id) => id == location.id);
            if (index > -1) {
                tab.resource.contexts.splice(index, 1);
                resource = tab.resource;
            }
        }

        if (tab?.bookmarks) {
            const index = tab.bookmarks.findIndex((b) => b.parentId == location.id);
            if (index > -1) {
                bookmarksToRemove.push({...tab.bookmarks[index]});
            }
        }

        if (!tab && resource) {
            if (resource.parentId) bookmarksToRemove.push(resource);
            else {
                const index = resource.contexts.findIndex((id) => id == location.id);
                if (index > -1) {
                    resource.contexts.splice(index, 1);
                }
            }
            
        }
        
        // if (location.parentId) {
        //     resource
        // } else {
            
        // }
    };

    let showDeleteDialog;

    const onTitleChanged = () => {
        if (!canSave) canSave = true;
    }

</script>

{#if showDeleteDialog}
    <ModalContainer on:exit={() => showDeleteDialog = false}>
        <DeleteDialogue {isFolder}
            bookmark={tab?.bookmark}
            on:no={() => showDeleteDialog = false} 
            on:yes={deleteBookmark}
        />
    </ModalContainer>
{/if}

<div class="bookmark-details" >
    
    {#if loaded}
    {#if showLocationSelection}
        <LocationSelection 
            on:back={() => showLocationSelection = false}
            on:locationSelected={addLocation}
        />
    {:else}
        <div class="header">
            <div class="icon button end" on:mousedown={() => dispatch('exit')}>
                Cancel
            </div>
            <div class="title">
                Edit Bookmark
            </div>
            <div 
                class="icon button end{canSave ? '': ' disabled'} save"
                on:mousedown={saveBookmark}
            >
                {#if canSave} Save {/if}
            </div>
        </div>
        <div class="resource-details">
            <div class="resource-title">
                {#if favIconUrl}
                    <img src={favIconUrl} alt="" />
                {:else}
                    <img src={folderIcon} alt=""/> 
                {/if}
                <div class="container">
                    <input
                        bind:value={title}
                        on:change={onTitleChanged}
                    /> 
                </div>
            </div>
            {#if url}
            <div class="divider"/>

            <div class="resource-url">
                <img src={linkIcon} alt="" />
                <span class="url">
                    {url}
                </span>
            </div>
            {/if}
        </div>
        <div class="location">
            {#if locations.length > 0}
                <div class="heading">
                    <div class="label">
                        {#if (tab?.resource ?? resource)?.contexts}
                            Workspace
                        {:else if tab?.bookmarks ?? resource?.parentId}
                            Folders
                        {/if}
                    </div>
                    <div class="add">
                        <img src={addIcon} alt="add" on:mousedown={() => showLocationSelection = true}>
                    </div>
                </div>
                
                <div class="location-list">
                    {#each locations as workspace (workspace.id)}
                        <div class="list-item">
                            <WorkspaceListItem {workspace} onClick={() => null}/>
                            <div class="remove" on:mousedown={() => removeLocation(workspace)}>
                                <img src={removeIcon} alt="remove">
                            </div>
                        </div>
                    {/each}
                </div>
            {:else}
                <div class="add-location" on:mousedown={() => showLocationSelection = true}>
                    <img src={addIcon} alt="add"/>
                    <span>Add Location</span>
                </div>
            {/if}
        </div>
        <div class="spacer"/>
        <div class="delete button" on:mousedown={() => showDeleteDialog = true}>
            <img src={trashIcon} alt='Delete'/>
        </div>
    {/if}
    {/if}

</div>

<style>
    .bookmark-details {
        display: flex;
        flex-direction: column;
        background-color: #111111;
        border-radius: 8px;
        padding: 0px 8px;
        max-height: 300px;
        min-height: 300px;
        overflow: hidden;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0px;
    }

    .header .title {
        font-size: 16px;
        font-weight: 400;
    }

    .header .end {
        width: 70px;
    }

    .header .save {
        text-align: right;
    }

    .header .icon.button {
        color: #ffbf00;
    }

    .header .icon.button.disabled {
        color: #666666;
    }

    .icon.button:hover {
        cursor: pointer;
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
        margin-left: 5px;
    }

    input::placeholder {
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    .resource-details {
        display: flex;
        flex-direction: column;
        padding: 5px;
        border-radius: 8px;
        background-color: #333333;

    }

    .resource-title {
        font-size: 16px;
        font-weight: 800;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px 0px;
    }

    .resource-title img {
        height: 20px;
        width: 20px;
    }

    .resource-title .container {
        overflow: scroll;
        border-radius: 8px;
        width: 100%;
    }

    .divider {
        background-color: #555555;
        height: 2px;
        width: 100%;
        margin: 5px 0px;
    }

    .resource-url {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
    }

    .resource-url img {
        filter: invert(1);
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }

    .resource-url span {
        white-space: nowrap;
        max-lines: 1;
        overflow-y: scroll;
    }

    .location {
        margin: 15px 0px;
        display: flex;
        flex-direction: column;
    }

    .location .heading {
        font-size: 14px;
        font-weight: 400;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px 0px 5px 5px;
    }

    .location .heading .add {
        border-radius: 5px;
        background-color: #333333;
        margin-left: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .location .heading .add img {
        height: 17px;
        width: 17px;
        filter: invert(1);
    }

    .location .heading .add img:hover {
        cursor: pointer;
    }

    .location-list {
        background-color: #333333;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
    }

    .add-location {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        border-radius: 8px;
        background-color: #333333;
        font-size: 14px;
        font-weight: 400;
    }

    .add-location:hover {
        cursor: pointer;
    }

    .add-location img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        margin-right: 5px;
    }

    .location-list .list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }

    .location-list .list-item .remove {
        margin-right: 10px;
        border-radius: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        right: 40px;
    }

    .location-list .list-item .remove:hover {
        background-color: #555555;
        cursor: pointer;
    }

    .location-list .list-item img {
        filter: invert(1);
        height: 15px;
        width: 15px;
    }

    .spacer {
        flex-grow: 1;
    }

    .delete.button {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        
        margin-bottom: 15px;
    }

    .delete.button img:hover {
        cursor: pointer;
        opacity: 1;
    }

    .delete.button img {
        height: 20px;
        width: 20px;
        filter: invert(1);
        margin-right: 8px;
        opacity: 0.4;
    }

</style>


