import { getPermissions, getTabInfo } from "./chrome";

export async function getTabsBookmarks(tab, allResources) {
    const url = getTabInfo(tab).url;
    // if (user) {
    //     const savedResource = allResources[url];
    //     if (savedResource) {
    //         tab.resource = savedResource;
    //     } else {
    //         tab.resource = null;
    //     }
    // } 
    const hasBookmarkPermission = await getPermissions();

    if (hasBookmarkPermission) {
        const bookmarkResults = await chrome.bookmarks.search({
            url: url,
        });
        console.log('getting tabs bookmarks');
        console.log(bookmarkResults);

        // check that bookmark parent matches 
        if (bookmarkResults.length > 0) {
            tab.bookmarks = bookmarkResults;
        } else {
            tab.bookmarks = null;
        }
    }
    return tab;
};
