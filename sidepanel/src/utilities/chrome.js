

export const get = async (key) => {
    const data = (await chrome.storage.sync.get([key])) ?? {};
    return data[key];
}

export const set = async (record) => {
    await chrome.storage.sync.set(record);
}

export const getFavIconUrl = async (u) => {
    const url = new URL(await chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", u);
    url.searchParams.set("size", "32");
    return url.toString();
};

export const tryToSaveBookmark = async (tab, group) => {
    try {
        return await saveTabAsBookmark(tab, group);
    } catch (e) {
        const granted = await chrome.permissions.request({
            permissions: ['bookmarks']
        });

        if (granted) {
            return await saveTabAsBookmark(tab, group);
        }

    }

    return { tab, group };
};

export const saveTabAsBookmark = async (tab, group) => {

    if (!group.folder) {
        group.folder = await chrome.bookmarks.create({ title: group.title });
    }

    const bookmark = await chrome.bookmarks.create({
        title: tab.title,
        url: tab.url,
        parentId: group.folder.id
    });

    if (!tab.bookmarks) tab.bookmarks = [];
    tab.bookmarks.push(bookmark);

    return { tab, group };
};