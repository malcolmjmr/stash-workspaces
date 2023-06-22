// chrome.runtime.onInstalled.addListener((details) => onInstalled(details));
// chrome.runtime.onUpdateAvailable.addListener((details) => onUpdateAvailable(details));
// chrome.runtime.onMessageExternal.addListener(onMessageFromApp);

// // Action button
// chrome.action.onClicked.addListener((tab) => onActionButtonClicked(tab)); // [ ]

// // Alarm
// chrome.alarms.onAlarm.addListener(onAlarm);

// // Window
// chrome.windows.onCreated.addListener((window) => setTimeout(() => onWindowCreated(window), 300));
// chrome.windows.onRemoved.addListener((windowId) => onWindowClosed(windowId));
// chrome.windows.onFocusChanged.addListener((windowId) => onWindowFocusChanged(windowId));
// chrome.windows.onBoundsChanged.addListener((window) => onWindowUpdated(window));

// // Tabs
// chrome.tabs.onCreated.addListener((tab) => onTabCreated(tab));
// //chrome.tabs.onActivated.addListener((activeInfo) => onTabActivated(activeInfo.tabId))
// chrome.tabs.onMoved.addListener((tabId, moveInfo) => onTabMoved(tabId));
// chrome.tabs.onDetached.addListener((tabId, detachInfo) => onTabMoved(tabId));
// chrome.tabs.onUpdated.addListener((tabId, changeInfo) => onTabUpdated(tabId, changeInfo));
// chrome.tabs.onHighlighted.addListener((highlightInfo) => onTabsHighlighted(highlightInfo.tabIds));
// chrome.tabs.onRemoved.addListener((tabId, removeInfo) => onTabClosed(tabId)); // 1500 delay

// // Tab groups
// chrome.tabGroups.onCreated.addListener((group) => onTabGroupCreated(group));
// chrome.tabGroups.onUpdated.addListener((group) => onTabGroupUpdated(group));
// chrome.tabGroups.onRemoved.addListener((group) => onTabGroupClosed(group)); // 1000 delay

// // Bookmarks
// chrome.bookmarks.onCreated.addListener((id, bookmark) => onBookmarkCreated(id, bookmark));
// chrome.bookmarks.onChanged.addListener((id, changeInfo) => onBookmarkChanged(id, changeInfo));
// chrome.bookmarks.onMoved.addListener((id, moveInfo) => setTimeout(() => { onBookmarkMoved(id, moveInfo); }, 200));
// chrome.bookmarks.onRemoved.addListener((id, removeInfo) => onBookmarkRemoved(id, removeInfo));

// // Commands
// chrome.commands.onCommand.addListener((command, tab) => onCommand(command, tab));

// // Context Menu
// chrome.contextMenus.onClicked.addListener((info, tab) => onContextMenuClicked(info, tab));

// // Omnibox
// chrome.omnibox.onInputEntered.addListener((text, disposition) => onOmniboxInputEntered(text, disposition));
// chrome.omnibox.onInputChanged.addListener((text, suggest) => onOmniboxInputChanged(text, suggest));
// chrome.omnibox.onInputCancelled.addListener(() => onInputCancelled());
// chrome.omnibox.onDeleteSuggestion.addListener((text) => onOmbniboxSuggestionDeleted(text));
// chrome.omnibox.onInputStarted.addListener(() => onOmniboxInputStarted());

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
