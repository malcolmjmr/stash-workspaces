export function generateWindowDiff(currentWindowTabs, updatedWindowTabs) {
    const diff = {
        tabsToCreate: [],
        tabsToRemove: [],
        tabsToMove: [],
        tabsToUpdate: []
    };

    // Check for tabs to remove
    currentWindowTabs.forEach(currentTab => {
        if (typeof currentTab.id == 'string') {
            currentTab.id == parseInt(currentTab.id);
        }
        const foundTab = updatedWindowTabs.some((updatedTab) => {
            if (typeof updatedTab.id == 'string') {
                updatedTab.id = parseInt(updatedTab.id);
            } 
            return updatedTab.id == currentTab.id;
        });

        if (!foundTab) {
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
                const urlChanged = currentTab.url != updatedTab.url;
                const focusChanged = currentTab.active != updatedTab.active;
                if ( urlChanged || focusChanged) {
                    let updateInfo = { id: updatedTab.id };
                    if (urlChanged) updateInfo.url = updatedTab.url;
                    if (focusChanged) updateInfo.active = updatedTab.active;
                    diff.tabsToUpdate.push(updateInfo);
                }
            }
        }
       
    });

    return diff;
}

export async function applyWindowChanges(diff, updatedWindow) {
    
    // Create new tabs
    if (typeof updatedWindow.id == 'string') {
        updatedWindow.id = parseInt(updatedWindow.id);
    }
    for (const newTab of diff.tabsToCreate) {
        await chrome.tabs.create({
            windowId: updatedWindow.id,
            url: newTab.url,
            index: newTab.index
        });
    }

    // Remove tabs
    for (const tabId of diff.tabsToRemove) {
        await chrome.tabs.remove(tabId);
    }


    // Move tabs
    for (const moveInfo of diff.tabsToMove) {
        await chrome.tabs.move(moveInfo.id, { index: moveInfo.index });
    }

    // Update tab URLs
    for (const updateInfo of diff.tabsToUpdate) {
        let updates = {};
        if (updateInfo.url) updates.url = updateInfo.url;
        if (updateInfo.active) updates.active = updateInfo.active;
        await chrome.tabs.update(updateInfo.id, { ...updates });
    }

    // Update window properties if needed
    await chrome.windows.update(updatedWindow.id, {
        state: updatedWindow.state,
        focused: updatedWindow.focused
        // Add other window properties as needed
    });
}