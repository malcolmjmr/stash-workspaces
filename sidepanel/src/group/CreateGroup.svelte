<script>
    import { createEventDispatcher, onMount } from "svelte";
    import GroupColors from "./GroupColors.svelte";
    import Suggestion from "./Suggestion.svelte";
    import { fade } from "svelte/transition";
    import { colorMap } from "../utilities/colors";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";

    export let groups;
    export let workspaces;
    export let view;


    let group = {
        title: '',
        color: 'grey',
    };

    let searchText = '';

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

    const onInput = async (e) => {
        if (e.key == 'Enter') {
            const tab = await createNewTab();
            const groupId = await chrome.tabs.group({tabIds: tab.id});
            await chrome.tabGroups.update(groupId, {title: group.title});
            dispatch('exitModal');
        } else {
            updateSearchResults();
        }
        
        // search contexts and bookmark folders
       
    };

    let showFolders;
    let showSpaces;

    const updateSearchResults = () => {
        const text = searchText.toLowerCase();
        visibleFolders = folders.filter((f) => {
            return f.title?.toLowerCase().includes(text);
        });

        visibleSpaces = workspaces.filter((s) => {
            return s.title?.toLowerCase().includes(text);
        });

        showFolders = visibleFolders.length > 0;
        showSpaces = visibleSpaces.length > 0

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
    //style={'background-color: ' + colorMap[group.color]}
</script>


    <div class="main-container" >

        <div class="search" >
            <input
                type="text"
                class="search-input"
                bind:value={searchText}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                placeholder="Create a new a space"
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
                {#if showSpaces}
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
                                <WorkspaceListItem {workspace}/>
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
                            {#each visibleFolders as workspace}
                                <WorkspaceListItem {workspace}/>
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
        height: 400px;
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
        margin-top: 10px;
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