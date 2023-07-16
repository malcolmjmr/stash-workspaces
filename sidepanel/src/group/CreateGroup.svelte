<script>
  import { onMount } from "svelte";
    import GroupColors from "./GroupColors.svelte";
  import { each } from "svelte/internal";
  import Suggestion from "./Suggestion.svelte";

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

    };

    const resetSuggestions = () => {
        suggestions = [...workspaces, ...recentFolders];
    };

    const onTitleInputBlur = () => {

    };

    const onInput = (e) => {
        if (e.key == 'Enter') {
            
        } else {
            updateSuggestions();
        }
    };

    const updateSuggestions = () => {
         let tempSuggestions = [];
         const text = group.title.toLowerCase();
         for (const item of [...workspaces, ...recentFolders]) {
            const title = item.title.toLowerCase();
            if (title.includes(text)) tempSuggestions.push(item);
         }
    };


</script>

<div class="new-group">
    <div class="header">
        <div class="title">
            <input
                type="text"
                class="title-input"
                bind:value={group.title}
                on:blur={onTitleInputBlur}
                on:keydown={onInput}
                autofocus="true"
            />
            <div class="suggestion">
                {#each suggestions as folder}
                    <Suggestion {folder} />
                {/each}
            </div>
        </div>
    </div>

    <GroupColors {group} />
    <div class="suggestions">


    </div>
</div>

<style>

</style>