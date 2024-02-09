<script>
    import { createEventDispatcher, onMount } from "svelte";
    import GroupColors from "./GroupColors.svelte";
    import Suggestion from "./Suggestion.svelte";
    import { fade } from "svelte/transition";
    import { colorMap } from "../utilities/colors";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import ModalContainer from "../components/ModalContainer.svelte";
    import WorkspaceFolder from "../components/WorkspaceIcon.svelte";
    import createFolderIcon from "../icons/new-folder.png";
  import { Views } from "../view";
  import { userData } from "../stores";
  import Bookmark from "../components/Bookmark.svelte";
  import FolderListItem from "../components/FolderListItem.svelte";
  import { createContext, getExtensionFolder, hiddenFolderTitles, openWorkspace, requestBookmarkPermssion, saveContext, tryToGetTabGroup } from "../utilities/chrome";
  import MenuDivider from "../components/MenuDivider.svelte";


    export let selectedTabs = [];
    export let workspace = null;
    export let groups;
    export let workspaces;
    export let view;
    export let placeholder = 'Search or create space...';
    export let tabs = [];
    


    let group = {
        title: '',
        color: 'grey',
    };

    let searchText = '';
    $: {
        searchText;
        updateSearchResults();
    }

    let hasBookmarkPermission;

    onMount(() => {

        try {
            getFolders();
            hasBookmarkPermission = true;
        } catch (e) {
            hasBookmarkPermission = false;
        }
       
        getUngroupedTabs();
    });

    let suggestions = [];
    let folders = [];
    let recentFolders = [];
    let visibleFolders = [];
    let visibleSpaces = [];
   
    const getFolders = async () => {

        const extensionFolder = await getExtensionFolder();
        let workspaceFolderIds = workspaces.map((s) => s.folderId);
        let workspaceFolderTitles = workspaces.map((s) => s.title);
        folders = (await chrome.bookmarks.search({ url: null }))
            .filter((folder) => {
                return (!folder.url 
                    && !workspaceFolderIds.includes(folder.id)
                    && !workspaceFolderTitles.includes(folder.title)
                    && !hiddenFolderTitles.includes(folder.title)
                    && extensionFolder.id != folder.id
                    && !workspaceFolderIds.includes(folder.parentId)
                );
            });


        workspaces = workspaces.filter((w) => w?.id != workspace?.id);
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        updateSearchResults();
        // if (workspaces.length < 5) {
        //     visibleFolders = folders.slice(0, 10);
        // }
    };

    let ungroupedTabs = [];
    let hasGroupedTabs;
    const getUngroupedTabs = () => {
        for (const tab of tabs) {
            if (!hasGroupedTabs && tab.groupId > -1) {
                hasGroupedTabs = true;
            }
            if (tab.groupId == -1) {
                ungroupedTabs.push(tab);
            }
        }
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
            if (workspace) {
                if ($userData) {

                } else {
                    await createNewFolder();
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

    const createNewFolder = async () => {
        const folder = await chrome.bookmarks.create({
            title: searchText,
            parentId: workspace.folderId
        });
        dispatch('locationSelected', { folder });
    }

    let showFolders;
    let showSpaces = true;

    const updateSearchResults = () => {
        const text = searchText.toLowerCase();
        visibleFolders = folders.filter((f) => {
            return f.title?.toLowerCase().includes(text);
        });
        visibleFolders.sort(sortFolders);
        const openWorkspaceIds = Object.values(groups).map((g) => g.workspaceId);
        visibleSpaces = workspaces.filter((s) => {
            return (
                !s.deleted 
                && (!s.groupId || !openWorkspaceIds.includes(s.id)) 
                && s.title?.toLowerCase().includes(text)
            ); 
        });
        visibleSpaces.sort(sortSpaces);

        showFolders = visibleFolders.length > 0;
        //showSpaces = visibleSpaces.length > 0

    };

    const sortFolders = (a, b) => {
        return b.dateGroupModified - a.dateGroupModified;
    };

    const sortSpaces = (a, b) => {
        return b.updated - a.updated;
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
        dispatch('exit');
    };

    const setColor = (color) => {
        group.color = color;
    };


    const onCreateSpace = () => {
        if (workspace) {
            // create folder 
            createNewFolder();
        } else { 
            
        }
        
    }
    //style={'background-color: ' + colorMap[group.color]}


    const openFolderAsWorkspace = () => {

    };

    const onFolderClicked = async (folder) => {
        if (workspace) {
            dispatch('locationSelected', { folder });
        } else {
            // create workspace from folder 
            const newWorkspace = await createContext({ 
                title: folder.title,
                folderId: folder.id,
                created: folder.dateAdded,
                importedFolder: true,
                updated: Date.now(), 
                color: 'grey',
            });

            await openWorkspace(newWorkspace, { openInNewWindow: false });
        }
        exitModal();
    };

    const onWorkspaceClicked = async (selectedWorkspace) => {
        if (workspace) {
            dispatch('locationSelected', { workspace: selectedWorkspace });
        } else {
            // open workspace
            const openGroup = await tryToGetTabGroup(selectedWorkspace.groupId);
            if (openGroup) {
                // todo: navigate to last active tab
                let tabs = await chrome.tabs.query({groupId: openGroup.id});
                tabs.sort((a, b) => a.index - b.index);
                const firstTab = tabs[0];
                await chrome.tabs.update(firstTab.id, { active: true });
                await chrome.windows.update(firstTab.windowId, { focused: true });
                view = Views.tabs;
            } else {
                await openWorkspace(selectedWorkspace, { openInNewWindow: false });
            }
        }

        exitModal();
    };

    const createNewGroup = async () => {
        /*
            
        */

        let tabIds = ungroupedTabs.map((t) => t.id);
        await chrome.tabs.update(tabIds[0], {active:true});
        const group = await chrome.tabs.group({tabIds});

        // const newWorkspace = await createContext({ 
        //     title: folder.title,
        //     folderId: folder.id,
        //     created: folder.dateAdded,
        //     updated: Date.now(), 
        //     color: 'grey',
        // });

        // openWorkspace(newWorkspace, { openInNewWindow: false });

        exitModal();

    };

    const getBookmarkPermission = async () => {
        const granted = await requestBookmarkPermssion();
        if (granted) {
            getFolders();
        }
    };
</script>


    <div class="main-container" >
        <div class="search-container">
            <div class="search" >
                <input
                    type="text"
                    class="search-input"
                    bind:value={searchText}
                    on:blur={onTitleInputBlur}
                    on:keydown={onKeyDown}
                    placeholder={
                        visibleSpaces.length > 0 || showFolders || !hasBookmarkPermission 
                        ? placeholder
                        : 'Create new tab group...'
                    }
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
        </div>


        
    
        <!--
            <div class="divider"></div>
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
            


            {#if visibleSpaces.length > 0 || showFolders || !hasBookmarkPermission || (searchText.length == 0 && ungroupedTabs.length > 0)}
            <MenuDivider/>
            <div class="results">
                {#if searchText.length == 0 && ungroupedTabs.length > 0}
                
                    <div class="create-space" on:mousedown={createNewGroup}> 
                        <img src={createFolderIcon} alt="Create Space"/>
                        <span>Group {ungroupedTabs.length} loose tab{ungroupedTabs.length > 1 ? 's' : '' }</span>
                    </div>
                {/if}

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
                                    onClick={() => onWorkspaceClicked(workspace)}
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
                                    onClick={() => onFolderClicked(folder)}
                                />
                            {/each}
                        </div>
                    </div>
                {/if}

                {#if hasBookmarkPermission  == false}
                    <div class="bookmark-permission" on:mousedown={getBookmarkPermission}>
                        Add bookmark permission to open existing bookmark folders as spaces
                    </div>
                {/if}
                
            </div>
            {/if}


        
    </div>

<style>

    .main-container {
        width: cacl(100% - 20px);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 500px;
    }

    .search-container {
        padding: 5px;
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
        padding: 0px 10px 10px 10px;
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
        padding: 5px 8px;
        min-height: 25px;
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        margin-top: 10px;
    }

    .create-space img {
        filter: invert(1);
        height: 20px;
        width: 20px;
        margin-right: 5px;
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

    .divider {
        margin-top: 10px;
        height: 1px;
        background-color: #777777;
    }


    .bookmark-permission {
        padding: 5px;
        font-size: 16px;
        opacity: 0.6;
        letter-spacing: 1px;
        text-align: center;
    }

    .bookmark-permission:hover {
        cursor: pointer;
        opacity: 1;
    }

</style>