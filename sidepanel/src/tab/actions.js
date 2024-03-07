import pinIcon from "../icons/pin.png";
import unpinIcon from "../icons/pin-filled.png";
import linkIcon from "../icons/link.png";
import moveToInboxIcon from "../icons/move-to-inbox.png";
import moveToPopupIcon from "../icons/open-in-new-window.png";
import moveToWindowIcon from "../icons/move-to-window.png";
import moveToSpaceIcon from "../icons/move-to-folder.png";
import duplicateIcon from "../icons/tab-duplicate.png";
import starFilledIcon from "../icons/star-filled.png";
import starUnfilledIcon from "../icons/star.png";
import reloadIcon from "../icons/refresh.png";
import saveToFolderIcon from "../icons/folder-special.png";
import addDomainIcon from "../icons/domain-add.png";
import removeDomainIcon from "../icons/domain-remove.png";
import relatedIcon from "../icons/join-right.png";
import closeTabIcon from "../icons/tab-close.png";
import { createEventDispatcher } from "svelte";
import { defaultDomains, getSearchUrlFromQuery, searchPlaceholder } from "./domains";
import { getContextFromGroupId, getWorkspaceQueueFolder, saveTabToFolder } from "../utilities/chrome";
import { _favorites } from "../stores";


export const actions = {
    pin: {
        title: (tab) => tab.pinned ? 'Unpin' : 'Pin',
        id: 'pin',
        icon: (tab) => tab.pinned ? unpinIcon : pinIcon,
        onClick: (tab) =>  {

            if (tab.groupId > -1) {

            }
            chrome.tabs.update(tab.id, { pinned: !tab.pinned });
            return 'exit';
        }
    },
    reload: {
        title: 'Reload',
        id: 'reload',
        icon: reloadIcon,
        onClick: (tab) => {
            chrome.tabs.reload(tab.id);
            return 'exit';
        }
    },
    duplicate: {
        title: 'Duplicate',
        id: 'duplicate',
        icon: duplicateIcon,
        onClick: async (tab) => {
            const newTab = await chrome.tabs.create({ url: tab.url, index: tab.index + 1 });
            if (tab.groupId > -1) chrome.tabs.group({ tabIds: newTab.id, groupId: tab.groupId });
            return 'exit';
        }
    },
    copy: {
        title: 'Copy Link',
        id: 'copy',
        icon: linkIcon,
        onClick: (tab) => {
            // copy link to clipboard
            navigator.clipboard.writeText(tab.url);
            return 'linkCopied';
        }
    },
    close: {
        title: 'Close',
        id: 'close',
        icon: closeTabIcon,
        onClick: (tab) => {
            chrome.tabs.remove(tab.id);
            return 'exit';
        }
    },
    moveToPopup: {
        title: 'Move to Popup',
        id: 'moveToPopup',
        icon: moveToPopupIcon,
        onClick: (tab) => {
            // move to pop up
            chrome.windows.create({ tabId: tab.id, type: "popup", focused: true });
            return 'exit';

        }
    },
    moveToNewWindow: {
        title: 'Move to Window',
        id: 'moveToNewWindow',
        icon: moveToWindowIcon,
        onClick: (tab) => {
            chrome.windows.create({ tabId: tab.id, focused: true });
            return 'exit';
        }
    },
    moveToSpace: {
        title: (tab) =>  `Move to ${tab.groupId > -1 ? 'Another ' : ''}Space`,
        id: 'moveToSpace',
        icon: moveToSpaceIcon,
        onClick: (tab) => {
            return ''
        }
    },
    saveForLater: {
        title: 'Save for later',
        id: 'saveForLater',
        icon: moveToInboxIcon,
        onClick: async (tab, workspace, dispatch) => {

            const queueFolder = await getWorkspaceQueueFolder(workspace, true);
            await saveTabToFolder(tab, queueFolder.id);
            dispatch('tabStashed');

            // setTimeout(async () => {
                const tabs = await chrome.tabs.query({ groupId: workspace.groupId });
                if (tabs.length == 1) {
                    const newTab = await chrome.tabs.create({ url: 'chrome://newtab/'});
                    await chrome.tabs.group({ tabIds: newTab.id, groupId: workspace.groupId });
                }
                chrome.tabs.remove(tab.id);
            // }, 300);


            //return 'tabStashed';
        }
    },
   saveToFolder: {
        title: 'Save to folder',
        id: 'saveToFolder',
        icon: saveToFolderIcon,
        onClick: (tab) => {
            return 'saveToFolder'
        }

    },
    favoriteDomain: {
        id: 'favoriteDomain',
        title: async (tab) => {
            let isFavoriteDomain = false;

            const url = new URL(tab.url);
            const domainUrl = url.protocol + '//' + url.host;

     
            if (tab.groupId > -1) {
                const workspace = await getContextFromGroupId(tab.groupId);
                
                if (workspace.favorites.includes(domainUrl)) {
                    isFavoriteDomain = true;
                } 
            } else {
                if ($_favorites.find((d) => d.url == domainUrl)) {
                    isFavoriteDomain = true;
                }
            }

            return isFavoriteDomain ? 'Remove from favorite domains' : 'Add to favorite domains';
        },
        icon: async (tab) => {
            let isFavoriteDomain = false;

            const url = new URL(tab.url);
            const domainUrl = url.protocol + '//' + url.host;

     
            if (tab.groupId > -1) {
                const workspace = await getContextFromGroupId(tab.groupId);
                
                if (workspace.favorites.includes(domainUrl)) {
                    isFavoriteDomain = true;
                } 
            } else {
                if ($_favorites.find((d) => d.url == domainUrl)) {
                    isFavoriteDomain = true;
                }
            }

            return isFavoriteDomain ? removeDomainIcon : addDomainIcon;
        },
        onClick: async (tab) => {
            //tab.isFavoriteDomain 
        }
    },
    save: {
        title: (tab) => {
            const isSaved = (tab.bookmarks != null && tab.bookmarks.length > 0) || (tab.resource != null);
            return isSaved ? 'Edit Bookmark' : 'Save';
        },
        id: 'save',
        icon: (tab) => {
            const isSaved = (tab.bookmarks != null && tab.bookmarks.length > 0) || (tab.resource != null);
            return isSaved ? starFilledIcon : starUnfilledIcon;
        },
        onClick: (tab) => {
            // I have no idea how to do this with firebase
            return ('editBookmark', tab);
        }
    },
    getRelated: {
        title: 'Find Related Content',
        id: 'getRelated',
        icon: relatedIcon,
        onClick: async (tab) => {

            let url = defaultDomains.find((d) => d.title == 'Exa')
                .searchTemplate?.replace(searchPlaceholder, encodeURIComponent(tab.url));

            const newTab = await chrome.tabs.create({ 
                url, 
                index: tab.index + 1,
            });

            if (tab.groupId > -1) {
                await chrome.tabs.group({ 
                    groupId: tab.groupId, 
                    tabIds: newTab.id
                });
            }

            return 'exit';
        }

    }
}