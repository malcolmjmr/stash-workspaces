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
    import { onMount } from "svelte";
    import WorkspaceFolder from "../components/WorkspaceFolder.svelte";
  import { openWorkspace } from "../utilities/chrome";
  import ModalContainer from "../components/ModalContainer.svelte";
  import WorkspaceMenu from "../workspaces/WorkspaceMenu.svelte";
    import WorkspacePreview from "./WorkspacePreview.svelte";


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
        saved: 'Saved',
        temporary: 'Temporary',
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
        
        let data = await getWorkspaceData({db, user, workspace});
        resources = data.resources.filter((r) => !r.title.startsWith('* ') && !r.isQueued);
        queue = data.resources.filter((r) => r.title.startsWith('* ') || r.isQueued);
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
        loaded = true;
    };

    let visibleItems = [];

    const updateVisibleItems = (sectionName) => {
        console.log(sectionName);
        visibleSection = sectionName;
        if (sectionName == SectionNames.folders) {
            visibleItems = folders;
        } else if (sectionName == SectionNames.temporary) {
            visibleItems = resources.filter((r) => r.title.startsWith('* ') || r.isQueued);
        } else if (sectionName == SectionNames.saved) {
            visibleItems = resources.filter((r) => !r.title.startsWith('* ') && !r.isQueued);
        } else if (sectionName == SectionNames.tabs) {
            visibleItems = workspace.tabs;
        }
    };


    let openedSubWorkspace
    const openSubWorkspace = (workspace) => {
        openedSubWorkspace = workspace;
    };




    

</script>

{#if showMenu}
    <ModalContainer on:exit={() => showMenu = false}>
        <WorkspaceMenu bind:workspace {isOpen}/>
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

        <img class="icon-button" src={openIcon} alt="Open in New Window" 
            on:mousedown={() => openWorkspace(workspace, {openInNewWindow: true})}
        />
        <img class="icon-button" src={moreIcon} alt="Workspace Menu"
            on:mousedown={() => showMenu = true} 
        />
    </div>

    {#if sections.length > 1 ||  sections[0].name != SectionNames.tabs}
        <div class="section-options">
            <div class="container">
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
            {#each visibleItems as item (item.id)}
                {#if visibleSection != SectionNames.folders}
                    <Tab tab={item} isOpen={false}/>
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
        padding: 10px 10px 0px 10px;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header .title {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 5px;
    }

    .header .title span {
        margin-left: 5px;
    }

    .icon-button {
        height: 20px;
        width: 20px;
        margin-left: 5px;
        filter: invert(1);
    }

    .icon-button:hover {
        cursor: pointer;
    }
    
    .section-options {
        margin: 5px 0px;
    }

    .section-options .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
    }


    .section-option {
        font-size: 14px;
        font-weight: 400;
        padding: 5px 8px;
        border-radius: 8px;
        background-color: #333333;
        margin-right: 8px;
    }


    .section-option:hover {
        cursor: pointer;
    }

    .section-option.selected {
        background-color: #555555;
    }

    .section-items {
        margin-top: 10px;
        overflow: hidden;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .section-items .container {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #333333;
        overflow: scroll;
    }
</style>