<script>
  import { onMount } from "svelte";
  import Window from "../sidepanel/src/windows/Window.svelte";
  import { get, getActiveTab } from "../sidepanel/src/utilities/chrome";


  let groups = {};
  let tabs = [];
  let windowData = {};

  onMount(() => {
    load();
  });

  let loaded;
  const load = async () => {
    const activeTabId = (await get('lastActiveTabIds'))[1];
    const activeTab = await chrome.tabs.get(activeTabId);

    tabs = await chrome.tabs.query({ windowId: activeTab.windowId });
    windowData = await chrome.windows.get(activeTab.windowId);
    for (const tab of tabs) {
        if (tab.groupId == -1 || groups[tab.groupId]) continue;
        groups[tab.groupId] = await chrome.tabGroups.get(tab.groupId);
    }
    loaded = true;
  };

    
</script>

<div class="window-manager">
    {#if loaded}
    <Window {groups} {tabs} {windowData}/>
    {/if}
</div>

<style>
    .window-manager {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>