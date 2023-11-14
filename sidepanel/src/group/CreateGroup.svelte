<script>
    import { createEventDispatcher, onMount } from "svelte";
    import GroupColors from "./GroupColors.svelte";
    import Suggestion from "./Suggestion.svelte";
    import { fade } from "svelte/transition";
    import { colorMap } from "../utilities/colors";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceFolder from "../components/WorkspaceFolder.svelte";
    import createFolderIcon from "../icons/new-folder.png";
  import { Views } from "../view";
  import { userData } from "../stores";
  import Bookmark from "../components/Bookmark.svelte";
  import FolderListItem from "../components/FolderListItem.svelte";


    export let selectedTabs = [];
    export let workspace = null;
    export let groups;
    export let workspaces;
    export let view;
    


    let group = {
        title: '',
        color: 'grey',
    };

    let searchText = '';
    $: {
        searchText;
        updateSearchResults();
    }

    onMount(() => {
        getFolders();
    });

    let suggestions = [];
    let folders = [];
    let recentFolders = [];
    let visibleFolders = [];
    let visibleSpaces = [];
   
    const getFolders = async () => {
        let workspaceFolderIds = workspaces.map((s) => s.folderId);
        let workspaceFoldderTitles = workspaces.map((s) => s.title);
        folders = (await chrome.bookmarks.search({ url: null }))
            .filter((folder) => {
                return (!folder.url 
                    && !workspaceFolderIds.includes(folder.id)
                    && !workspaceFoldderTitles.includes(folder.title)
                );
            });
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        updateSearchResults();
        // if (workspaces.length < 5) {
        //     visibleFolders = folders.slice(0, 10);
        // }
    };



    const onTitleInputBlur = () => {

    };

    const createNewTab = async () => {
        const activeTab = (
            await chrome.tabs.query({ active: true, currentWindow: true })
        )[0];
        return await chrome.tabs.create({ index: activeTab.index + 1 });
    }

    const onKeyDown = async (e) => {
        if (e.key == 'Enter') {
            if (view == Views.workspace) {
                if ($userData) {

                } else {

                    const bookmark = await chrome.bookmarks.create({
                        title: searchText,
                        parentId: workspace.folderId
                    });
                    dispatch('locationCreated', bookmark);
                }
            } else if (view == Views.tabs) {
                let tabIds = selectedTabs.map((t) => t.id);
                if (tabIds.length == 0) tabIds[(await createNewTab()).id];
                const groupId = await chrome.tabs.group({tabIds: tabIds});
                await chrome.tabGroups.update(groupId, {title: searchText});
            }
            

            dispatch('exitModal');
        }
        // search contexts and bookmark folders
       
    };

    let showFolders;
    let showSpaces = true;

    const updateSearchResults = () => {
        const text = searchText.toLowerCase();
        visibleFolders = folders.filter((f) => {
            return f.title?.toLowerCase().includes(text);
        });

        visibleSpaces = workspaces.filter((s) => {
            return s.title?.toLowerCase().includes(text);
        });

        showFolders = visibleFolders.length > 0;
        //showSpaces = visibleSpaces.length > 0

    };

    // $: {
    //     group.title;
    //     updateSuggestions();
    // }

    // let autoCompleteSuggestion;
    // const updateSuggestions = () => {
    //      let tempSuggestions = [];
    //      autoCompleteSuggestion = null;
    //      const text = group.title.toLowerCase();
    //      for (const item of [...workspaces, ...recentFolders]) {
    //         const title = item.title.toLowerCase();
    //         // if (title.includes(text)) tempSuggestions.push(item);
    //         if (!autoCompleteSuggestion && title.startsWith(text)) {
    //             autoCompleteSuggestion = item;
    //         }
    //      }
    //      //suggestions = tempSuggestions;
         
    // };

    let dispatch = createEventDispatcher();
    const exitModal = () => {
        dispatch('exitModal');
    };

    const setColor = (color) => {
        group.color = color;
    };


    const onCreateSpace = () => {
        if (view == Views.workspace) {

        } else { 

        }
    }
    //style={'background-color: ' + colorMap[group.color]}


    const openFolderAsWorkspace = () => {

    };
</script>


    <div class="main-container" >

        <div class="search" >
            <input
                type="text"
                class="search-input"
                bind:value={searchText}
                on:blur={onTitleInputBlur}
                on:keydown={onKeyDown}
                placeholder='Search or create space'
                autofocus="true"
            />
            <!--
            {#if autoCompleteSuggestion}
                <div class="auto-complete">
                    {autoCompleteSuggestion.title}
                </div>
            {/if}
            -->
        </div>
    
        <!--
            <div class="colors">
                {#each Object.entries(colorMap) as [name, hex]}
                    <div class="color-container">
                        <div
                            class="color {group.color == name ? ' selected' : ''}"
                            style="background-color: {hex}; border-color: {hex}"
                            on:mousedown={() => setColor(name)}
                        />
                    </div>
                {/each}
            </div>

        -->
        
            <div class="results">
                {#if searchText.length > 1}
                <div class="create-space" on:mousedown={onCreateSpace}> 
                    <img src={createFolderIcon} alt="Create Space"/>
                    <span>Create {searchText.length > 0 ? '"'+searchText+'"' : ''}</span>
                </div>
                {/if}
                {#if visibleSpaces.length > 0}
                    <div class="spaces section"> 
                        <div class="header">
                            <div class="title">Spaces</div>
                            {#if searchText != ''}
                            <div class="count">
                                Found {visibleSpaces.length}
                            </div>
                            {/if}
                        </div>
                        
                        <div class="container">
                            {#each visibleSpaces as workspace}
                                <WorkspaceListItem 
                                    {workspace}

                                    onClick={() => dispatch('locationSelected', { workspace })}
                                />
                            {/each}
                        </div>
                    </div>
                {/if}
                {#if showFolders}
                    <div class="folders section"> 
                        <div class="header">
                            <div class="title">Folders</div>
                            {#if searchText != ''}
                            <div class="count">
                                Found {visibleFolders.length}
                            </div>
                            {/if}
                        </div>
                        <div class="container">
                            {#each visibleFolders as folder}
                                <WorkspaceListItem 
                                    workspace={{folderId: folder.id, title: folder.title}} 
                                    onClick={openFolderAsWorkspace}
                                />
                            {/each}
                        </div>
                    </div>
                {/if}
                
            </div>

        
    </div>

<style>

    .main-container {
        width: cacl(100% - 20px);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 300px;
        padding: 10px 10px 0px 10px;
    }

    .search {
        position: relative;
        min-height: 30px;
        padding: 0px 5px;
        background-color: black;
        border-radius: 5px;
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .search > input {
        position: absolute;
        width: calc(100% - 10px);
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        color: white;
        font-size: 16px;
    }

    .suggestions {
        margin-top: 10px;
        flex-grow: 1;
        overflow: scroll;
    }

    .results {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .section .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 8px 5px;
    }

    .section .header .title {
        font-size: 14px;
        font-weight: 400;
    }

    .section .container {
        background-color: #333333;
        border-radius: 8px;
        overflow: hidden;
    }

    .create-space {
        padding: 5px;
        height: 25px;
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .create-space img {
        filter: invert(1);
        height: 20px;
        width: 20px;
        padding: 0px 5px;
    }

    .create-space:hover {
        cursor: pointer;
    }
    .colors {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 5px;
    }

    .color-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 25px;
    }

    .color {
        width: 16px;
        height: 16px;
        border-radius: 100%;
        
    }

    .color.selected {
        width: 20px;
        height: 20px;
        border: 2px solid;
    }

    .color:hover {
        cursor: pointer;
        width: 20px;
        height: 20px;
    }




</style>