<script>
    import { slide } from "svelte/transition";
    import bugIcon from "../icons/bug.png";
    import featureIcon from "../icons/new-feature.png";
    import { Views } from "../view";
    import syncConnectedIcon from "../icons/sync.png";
    import syncDisabledIcon from "../icons/sync-disabled.png";

    export let showMenu;
    export let user;
    export let view;

    /*
        Bug
        Feature
        Extension Page
        Shortcuts? 
        Settings
    */

    const menuItems = [
        {
            iconUrl:
                "https://www.google.com/images/icons/product/chrome_web_store-32.png",
            title: "Webstore Page",
            url: "https://chrome.google.com/webstore/detail/window-manager/npaccibollphhdfghmmlbmpljhdiaehh",
        },
        {
            icon: featureIcon,
            title: "Request Feature",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdLZCqil9YIDLXFSZoQGdpque4-tzLjL1cpoHCIR54ZJuu97A/viewform?usp=sf_link",
        },
        {
            icon: bugIcon,
            title: "Report Bug",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSd1mztaIj3bvp0HvqMIbw1G0d_OXmbLYVRMqD8bsv-07WNt3g/viewform?usp=sf_link",
        },
    ];

    const onMenuItemClicked = (menuItem) => {
        if (menuItem.url) {
            chrome.tabs.create({ url: menuItem.url });
        } else if (menuItem.onClick) {
            menuItem.onClick();
        }
    };
</script>

<div class="menu" in:slide out:slide on:mouseleave={() => (showMenu = false)}>
    {#each menuItems as menuItem}
        <div class="menu-item" on:mousedown={() => onMenuItemClicked(menuItem)}>
            <img
                class={menuItem.icon ? "icon" : ""}
                src={menuItem.icon ?? menuItem.iconUrl}
                alt=""
            />
            <span>{menuItem.title}</span>
        </div>
    {/each}
        <!--
        <div class="menu-item" on:mousedown={() => view = Views.signin }>
            <img
                class="icon"
                src={user ? syncConnectedIcon : syncDisabledIcon }
                alt=""
            />
            <span>{user ? 'Synced' : ' Sync Disabled'}</span>


        </div>

        -->
        
</div>

<style>
    .menu {
        display: flex;
        flex-direction: column;
    }

    .menu-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        opacity: 0.7;
        border-top: 1px solid #444444;
    }

    .menu-item > img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }

    .menu-item > .icon {
        filter: invert(1);
    }

    .menu-item:hover {
        cursor: pointer;
        opacity: 1;
    }
</style>
