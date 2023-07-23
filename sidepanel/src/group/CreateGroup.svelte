<script>
    import { createEventDispatcher, onMount } from "svelte";
    import GroupColors from "./GroupColors.svelte";
    import Suggestion from "./Suggestion.svelte";
    import { fade } from "svelte/transition";
  import { colorMap } from "../utilities/colors";

    let group = {
        title: '',
        color: 'grey',
    };

    onMount(() => {
        getFolders();
    });

    let suggestions = [];

    let workspaces = [];
    let recentFolders = [];
   
    const getFolders = async () => {
        let folders = (await chrome.bookmarks.search({ url: null }));
        folders.sort((a, b) => b.dateGroupModified - a.dateGroupModified);
        const now = Date.now();
        const aMonthAgo = now - (1000 * 60 * 60 * 24 * 7 * 4);
        
        workspaces = folders.filter((f) => f.title.includes('[space'));
        recentFolders = folders.filter((f) => f.dateGroupModified > aMonthAgo && !f.title.includes('[space'));
        resetSuggestions();
        //console.log(suggestions);

    };

    const resetSuggestions = () => {
        suggestions = [...workspaces, ...recentFolders];
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
        } 
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

</script>

<div class="modal" in:fade>
    <div class="background" on:mousedown={exitModal}></div>
    <div class="container" style={'background-color: ' + colorMap[group.color]}>

        <div class="title" >
            <input
                type="text"
                class="title-input"
                bind:value={group.title}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                placeholder="Add Group"
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
    
        <div class="colors">
            {#each Object.entries(colorMap) as [name, hex]}
                <div class="color-container">
                    <div
                        class="color {group.color == name ? ' selected' : ''}"
                        style="background-color: {hex}"
                        on:mousedown={() => setColor(name)}
                    />
                </div>
            {/each}
        </div>
        <!--
        <div class="suggestions">
            {#each suggestions as folder (folder.id)}
                <Suggestion {folder} />
            {/each}
        </div>

        -->
        
    </div>
    
</div>

<style>
    .modal {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .background {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.4;
    }

    .container {
        width: 80%;
        background-color: #444444;
        border-radius: 5px;
        border: 1px solid #666666;
        z-index: 1;
        overflow: hidden;
    }

    .title {
        position: relative;
        height: 30px;
        padding: 0px 5px;
        background-color: #999999;
        border-radius: 5px;
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title > input {
        position: absolute;
        width: calc(100% - 10px);
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        color: black;
        font-size: 16px;
    }

    .title > .auto-complete {
        position: absolute;
        width: calc(100% - 10px);
        font-size: 16px;
        opacity: 0.5;
        color: black;
    }

    .suggestions {
        margin-top: 10px;
        flex-grow: 1;
        overflow: scroll;
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
        border: 2px solid white;
    }

    .color:hover {
        cursor: pointer;
        width: 20px;
        height: 20px;
    }




</style>