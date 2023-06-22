

export const get = async (key) => {
    const data = (await chrome.storage.sync.get([key])) ?? {};
    return data[key];
}

export const set = async (record) => {
    await chrome.storage.sync.set(record);
}