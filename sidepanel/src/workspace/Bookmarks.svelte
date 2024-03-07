<script>

    import { createEventDispatcher, onMount } from "svelte";
    import SectionContainer from "./SectionContainer.svelte";
    import Bookmark from "../components/Bookmark.svelte";

    import newFolderIcon from "../icons/new-folder.png";
    import collapseIcon from "../icons/collapse.png";
    import expandIcon from "../icons/expand.png";


    export let user;
    export let workspace;
    export let expanded;
    export let bookmarks;

    let dispatch = createEventDispatcher();

    let folder; 

    let loaded;
    onMount(() => {

    });

    /*
        actions 
        - new folder
        - collapse/expand folders
    */

    const headingActions = [
        {
            icon: newFolderIcon,
            title: 'New Folder',
            onClick: () => {
                
            }
        },
        {
            icon: collapseIcon,
            title: 'Collapse All',
            onClick: () => {

            }
        }
    ];

    const createNewFolder = () => {

    };

    const collapseAll = () => {
        
    };


</script>

<SectionContainer title="Bookmarks" bind:expanded>
    <div class="bookmarks" slot="main">
        {#each bookmarks as bookmark}
            <Bookmark {bookmark}/>
        {/each}
    </div>
</SectionContainer>