<script>
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import Tab from "../tab/Tab.svelte";
    import Workspace from "./Workspace.svelte";
    import folderIcon from "../icons/folder-filled.png";
    import openIcon from "../icons/open-in-new-window.png";
    import moreIcon from "../icons/more-vert.png";

    //import tabsIcon from "../icons/tabG"
    
    export let db = null;
    export let user = null;
    export let workspace;
    export let isOpen = false;

    

    import { getWorkspaceData } from "./workspaceData";
    import { createEventDispatcher, onMount } from "svelte";
    import WorkspaceFolder from "../components/WorkspaceIcon.svelte";
  import { openWorkspace, tryToGetBookmark, tryToGetBookmarkTree, tryToGetWorkspaceFolder } from "../utilities/chrome";
  import ModalContainer from "../components/ModalContainer.svelte";
  import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
    import WorkspacePreview from "./WorkspacePreview.svelte";
    import BasicBookmarks from "./BasicBookmarks.svelte";
    import BookmarkTree from "./BookmarkTree.svelte";

  let dispatch = createEventDispatcher();


    /*
        sections
        - folders
        - tabs *
        - resources (saved)
            - pinned
            - highlights
            - readingList/temporary
            - images
    */

    const SectionNames = {
        folders: 'Folders',
        tabs: 'Tabs',
        saved: 'Recent',
        temporary: 'To Visit',
        bookmarks: 'Bookmarks',
    };

    let resources = [];
    let queue = [];
    let folders = [];

    let sections = [];
    let visibleSection;

    let showMenu;

    let loaded;
    onMount(() => {
        load();
    });

    const load = async () => {
        
        if (user) {
            await loadDataFromCloud();
        } else {
            await loadLocalData();
        }
        
        loaded = true;
    };

    let bookmarkTree;
    let bookmarkCount;
    const loadLocalData = async () => {

        if(workspace.tabs && workspace.tabs.length > 0) {
            sections.push({
                name: SectionNames.tabs,
                //icon: tabsIcon, 
            });
            if (!visibleSection) visibleSection = SectionNames.tabs;
        }

        const folder = await tryToGetWorkspaceFolder(workspace);
        if (folder) {
            bookmarkTree = (await tryToGetBookmarkTree(folder.id))[0].children;
            bookmarkCount = 0;
            const incrementBookmarkCount = (node) => {
                bookmarkCount += 1;
                for (const child of node.children ?? []) {
                    incrementBookmarkCount(child);
                }
            };
            if (bookmarkTree) {
                for (const node of bookmarkTree) {
                    incrementBookmarkCount(node);
                }
                if (bookmarkCount > 0) {
                    sections.push({
                        name: SectionNames.bookmarks,
                    });
                }
            }
            
        }

        updateVisibleItems(visibleSection);
    };

    const loadDataFromCloud = async () => {
        let data = await getWorkspaceData({db, user, workspace});
        resources = data.resources.filter((r) => !r.title?.startsWith('* ') && !r.isQueued);
        queue = data.resources.filter((r) => r.title?.startsWith('* ') || r.isQueued);
        folders = data.workspaces;
        if(workspace.tabs && workspace.tabs.length > 0) {
            sections.push({
                name: SectionNames.tabs,
                //icon: tabsIcon, 
            });
            if (!visibleSection) visibleSection = SectionNames.tabs;
        }

        if (folders.length > 0) {
            sections.push({
                name: SectionNames.folders,
            });
            if (!visibleSection) visibleSection = SectionNames.folders;
        }

        if (resources.length > 0) {
            sections.push({
                name: SectionNames.saved,
            });
            if (!visibleSection) visibleSection = SectionNames.saved;
        }

        if (queue.length > 0) {
            sections.push({
                name: SectionNames.temporary,
            });
            if (!visibleSection) visibleSection = SectionNames.temporary;
        }
        updateVisibleItems(visibleSection);
    }

    let visibleItems = [];

    const updateVisibleItems = (sectionName) => {
        visibleSection = sectionName;
        if (sectionName == SectionNames.folders) {
            visibleItems = folders;
        } else if (sectionName == SectionNames.temporary) {
            visibleItems = resources;
        } else if (sectionName == SectionNames.saved) {
            visibleItems = queue;
        } else if (sectionName == SectionNames.tabs) {
            visibleItems = workspace.tabs;
        }
    };


    let openedSubWorkspace
    const openSubWorkspace = (workspace) => {
        openedSubWorkspace = workspace;
    };



    const onOpenWorkspaceClicked = () => {
        dispatch('exit');
        openWorkspace(workspace, {openInNewWindow: false})
    }



    

</script>

{#if showMenu}
    <ModalContainer on:exit={() => showMenu = false}>
        <WorkspaceMenu bind:workspace {isOpen} on:dataUpdated on:exit={() => showMenu = false}/>
    </ModalContainer>
{/if}

{#if openedSubWorkspace}
    <ModalContainer on:exit={() => openedSubWorkspace = null}>
        <WorkspacePreview workspace={openedSubWorkspace} isOpen={false}/>
    </ModalContainer>
{/if}

{#if loaded}
<div class="workspace-preview">
    <div class="header">
        <div class="title">
            <WorkspaceFolder size={28} color={workspace.color} />
            <span>{workspace.title}</span>
        </div>
        <div class="spacer"></div>

        <img class="icon-button" src={openIcon} alt="Open in New Window" 
            on:mousedown={onOpenWorkspaceClicked}
        />
        <img class="icon-button" src={moreIcon} alt="Workspace Menu"
            on:mousedown={() => showMenu = true} 
        />
    </div>

    {#if sections.length > 1 ||  sections[0]?.name != SectionNames.tabs}
        <div class="section-options">
            
            <div class="container">
                <div class="padding"></div>
                {#each sections as section (section.name)}
                    <div class="section-option{visibleSection == section.name ? ' selected': ''}" 
                        on:mousedown={() => updateVisibleItems(section.name)}
                    >
                        {section.name}
                    </div>
                {/each}
            </div>
            
        </div>
    {/if}

    
    <div class="section-items">
        <div class="container">
            {#if user} 
            {#each visibleItems as item (item.id)}
                {#if visibleSection != SectionNames.folders}
                    <Tab tab={item} isOpen={false} isListItem={true}/>
                {:else}
                    <WorkspaceListItem 
                        {user}
                        {db}
                        workspace={item} 
                        isOpen={false} 
                        onClick={openSubWorkspace}
                    />
                {/if}
            {/each}
            {:else}
                {#if visibleSection == SectionNames.tabs}
                {#each visibleItems as tab (tab.id)}
                    <Tab {tab} isOpen={false} isListItem={true}/>
                {/each}
                {:else if visibleSection == SectionNames.bookmarks}
                    <div class="bookmarks-container">
                        <BookmarkTree {workspace} {bookmarkTree}/>
                    </div>
                    
                {/if}
            {/if}
        </div>
    </div>
   


</div>

{/if}

<style>

    
    .workspace-preview {
        display: flex;
        flex-direction: column;
        height: 400px;
        overflow: hidden;
        
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px 5px 0px 5px;
        border-bottom: 1px solid #444444;
    }

    .spacer {
        flex-grow: 1;
    }

    .header .title {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 5px;
    }

    .header .title span {
        margin-left: 5px;
        overflow: scroll;
    }

    .icon-button {
        height: 20px;
        width: 20px;
        margin: 0px 0px 5px 5px;
        filter: invert(1);
    }

    .icon-button:hover {
        cursor: pointer;
    }
    
    .section-options {
        padding: 8px 0px;
        border-bottom: 1px solid #444444;
    }

    .section-options .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
    }

    .section-options .padding {
        height: 100%;
        min-width: 5px;
    }


    .section-option {
        font-size: 14px;
        font-weight: 400;
        padding: 3px 5px;
        border-radius: 8px;
        background-color: #333333;
        margin-right: 8px;
        opacity: 0.7;
    }


    .section-option:hover {
        cursor: pointer;
    }

    .section-option.selected {
        background-color: #555555;
        opacity: 1;
    }

    .section-items {
        overflow: hidden;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .section-items .container {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        flex-grow: 1;
    }

    .bookmarks-container {
       margin-left: 1px;
    }

</style>