<script>
    import { colorMap } from "../utilities/colors";

    import moreIcon from "../icons/more-vert.png";
    import expandIcon from "../icons/open-in-full.png";
    import openIcon from "../icons/open-in-new-window.png";

    export let workspace;

    let isInFocus;

    const onExpandClicked = () => {

    };

    const onMoreClicked = () => {
        
    };

    const onOpenClicked = async() => {
        let openedTabs = [];
        //const window = await chrome.windows.create({incognito: workspace.isIncognito});
        for (const tab of workspace.tabs) {
            openedTabs.push(await chrome.tabs.create({url: tab.url}));
        }

        const groupId = await chrome.tabs.group({tabIds: openedTabs.map((t) => t.id)});
        await chrome.tabGroups.update(groupId, {title: workspace.title});
    };

</script>


<div 
    class="workspace" 
    style="background-color: {colorMap[workspace.color ?? 'grey']}"
    on:mouseenter={() => isInFocus = true}
    on:mouseleave={() => isInFocus = false}

>
    <div class="title" on:mousedown={() => console.log(workspace)}>{workspace.title}</div>

    <div class="counts">
        {#if workspace.size}

        {/if}
        {#if workspace.queuSize}

        {/if}
    </div>
    {#if isInFocus}
        <div class="actions">
            <img src={moreIcon} alt="More" on:mousedown={onMoreClicked}/>
            <img src={openIcon} alt="Open" on:mousedown={onOpenClicked}/>
        </div>
    {/if}
</div>


<style>
    .workspace {
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        width: calc(100% - 20px);
        min-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: black;
    }

    .title {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .actions img {
        height: 16px;
        width: 16px;
        margin: 0px 3px;
    }

    .actions img:hover {
        cursor: pointer;
    }
</style>


