export function generateWindowDiff(currentWindowTabs, updatedWindowTabs) {
    const diff = {
        tabsToCreate: [],
        tabsToRemove: [],
        tabsToMove: [],
        tabsToUpdate: []
    };

    // Check for tabs to remove
    currentWindowTabs.forEach(currentTab => {
        if (!updatedWindowTabs.some(updatedTab => updatedTab.id === currentTab.id)) {
        diff.tabsToRemove.push(currentTab.id);
        }
    });

    // Check for tabs to create, move, or update
    updatedWindowTabs.forEach((updatedTab, index) => {

        if (updatedTab.contextId) {
            // don't do anything?
        } else {
            const currentTab = currentWindowTabs.find(tab => tab.id === updatedTab.id);
            
            if (!currentTab) {
                // New tab
                diff.tabsToCreate.push({ ...updatedTab, index });
            } else {
                // Existing tab
                if (currentTab.index !== index) {
                    diff.tabsToMove.push({ id: updatedTab.id, index });
                }
                if (currentTab.url !== updatedTab.url) {
                    diff.tabsToUpdate.push({ id: updatedTab.id, url: updatedTab.url });
                }
            }
        }
       
    });

    return diff;
}

export async function applyWindowChanges(diff, updatedWindow) {
    // Remove tabs
    for (const tabId of diff.tabsToRemove) {
        await chrome.tabs.remove(tabId);
    }

    // Create new tabs
    for (const newTab of diff.tabsToCreate) {
        await chrome.tabs.create({
            windowId: updatedWindow.id,
            url: newTab.url,
            index: newTab.index
        });
    }

    // Move tabs
    for (const moveInfo of diff.tabsToMove) {
        await chrome.tabs.move(moveInfo.id, { index: moveInfo.index });
    }

    // Update tab URLs
    for (const updateInfo of diff.tabsToUpdate) {
        await chrome.tabs.update(updateInfo.id, { url: updateInfo.url });
    }

    // Update window properties if needed
    await chrome.windows.update(updatedWindow.id, {
        state: updatedWindow.state,
        focused: updatedWindow.focused
        // Add other window properties as needed
    });
}