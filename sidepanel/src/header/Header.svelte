<script>
    import searchIcon from "../icons/search.png";
    import windowsIcon from "../icons/windows.png";
    import tabsIcon from "../icons/vertical-tabs.png";
    import bookmarksIcon from "../icons/bookmarks.png";
    //import workspaceIcon from "../icons/star.png";
    import moreIcon from "../icons/more-vert.png";
    import { Views } from "../view";
    import Menu from "./Menu.svelte";
    import SearchBox from "../components/SearchBox.svelte";

    export let user;
    export let view;
    export let windowCount;
    export let tabCount;
    export let showSearch;
    export let searchText;
    

    let showMenu;

    /*
        Request Feature
        Report Bug
        Talk to Dev? 
    */
</script>

<div class="header">
    <div class="container">
        <SearchBox bind:searchText placeholderText={view == Views.saved ? 'Search' : 'Search Tabs'}/>
            <div
                class="action{view == Views.windows ? ' selected' : ''}"
                on:mousedown={() => (view = Views.windows)}
            >
                <img src={windowsIcon} alt="Windows" />
            </div>
            <div
                class="action{view == Views.tabs ? ' selected' : ''}"
                on:mousedown={() => (view = Views.tabs)}
            >
                <img src={tabsIcon} alt="Tabs" />
            </div>
            <div
                class="action{view == Views.saved ? ' selected' : ''}"
                on:mousedown={() => (view = Views.saved)}
            >
                <img src={bookmarksIcon} alt="Saved" />
            </div>
        
        <div
            class="action more{showMenu ? ' selected' : ''}"
            on:mousedown={() => (showMenu = true)}
        >
            <img src={moreIcon} alt="More" />
        </div>
    </div>
    {#if showMenu}
        <Menu bind:showMenu bind:view {user}/>
    {/if}
</div>

<style>
    .header {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .container {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px 3px;
        opacity: 0.7;
    }

    .action.selected {
        opacity: 1;
    }

    .action:hover {
        opacity: 1;
        cursor: pointer;
    }

    .action > img {
        filter: invert(1);
        height: 20px;
        width: 20px;
    }

    .action.more {
        margin-left: -3px;
    }
</style>
