
chrome.runtime.onInstalled.addListener((details) => onInstalled(details));
chrome.runtime.onUpdateAvailable.addListener((details) => onUpdateAvailable(details));

async function onInstalled(details) {

    if (details.reason !== 'install') return;
    const uninstallPageURL = 'https://docs.google.com/forms/d/e/1FAIpQLSddZpwYkSxv1xZcIsuXxezx11jA6E3jivLddvsPcEaOi9RXfQ/viewform?usp=sf_link';
    await chrome.runtime.setUninstallURL(uninstallPageURL);
}

async function onUpdateAvailable(details) {
    await chrome.runtime.reload();
}




