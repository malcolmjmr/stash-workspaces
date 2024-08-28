<script>
    /*

        Todo:
        - [ ] Show reload
        - [ ] Show back
        - More menu
            - [ ] edit and copy url
            - [ ] back
            - [ ] duplicate

    */

    import pinnedIcon from "../icons/pin-filled.png";
    import closeIcon from "../icons/close.png";
    import closeAllIcon from "../icons/close-all.png";
    import menuIcon from "../icons/more-vert.png";
    import emptyBoxIcon from "../icons/empty-box.png";
    import checkedBoxIcon from "../icons/checked-box.png";
    import webIcon from "../icons/web.png";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import TabMenu from "./TabMenu.svelte";
    import { colorMap } from "../utilities/colors";
    import { slide } from "svelte/transition";
    import { getTabFavIconUrl, getPermissions, saveTabAsBookmark, tryToGetBookmark, tryToSaveBookmark, saveContext, getContext, getActiveTab, getExtensionFolder, tryToGetWorkspaceFolder, set } from "../utilities/chrome";

    import soundIcon from "../icons/volume-up.png";
    import mutedIcon from "../icons/volume-off.png";
    import starIcon from "../icons/star.png";
    import starIconFilled from "../icons/star-filled.png";
    import saveToFolderIcon from "../icons/folder-special.png";
  
    import ModalContainer from "../components/ModalContainer.svelte";
    import BookmarkDetails from "../edit_bookmark/BookmarkDetails.svelte";
    import { doc, setDoc } from "firebase/firestore";
    import { StorePaths } from "../utilities/storepaths";
    import { createResource } from "../utilities/firebase";
    import { _draggedOverTab, _draggedTab, _lastUpdatedTab, allWorkspaces, openGroups, quickActions } from "../stores";
    import { getWorkspaceData } from "../workspace/workspaceData";
    import WorkspaceIcon from "../components/WorkspaceIcon.svelte";

    import { actions } from "./actions";
    import { get } from "../utilities/chrome";
  import { horizontalSlide } from "../utilities/transitions";
  import MoveModal from "./MoveModal.svelte";
  import TabUpdateModal from "./TabUpdateModal.svelte";
  import LocationSelection from "../edit_bookmark/LocationSelection.svelte";
  import { children } from "svelte/internal";
  import { LLM } from "../../../desktop/src/services/llm";
  import CreateActionModal from "./CreateActionModal.svelte";
  import { expoOut } from "svelte/easing";


    export let db;
    export let user;
    export let tab;
    export let groups = {};
    export let group = null;
    export let workspace = null;
    export let workspaces = null;
    export let selectedTabs = [];
    export let lastSelectionUpdate = null;
    export let dragoverItem = null;
    export let isOpen = true;
    export let isStartingTab = false;
    export let isEndingTab = false;
    export let canDrag = true;
    export let canSelect = true;
    export let isListItem = false;
    export let isSearchResult = false;
    export let preventDefault = false;


    let el;
    let isSelected;
    let isSaved;
    let isPinned;
    let isAudible;


    $: {
        lastSelectionUpdate;
        isSelected = selectedTabs.find((t) => t.id == tab.id) != null;
    }

    let updated;
    $: {

        if ($_lastUpdatedTab && $_lastUpdatedTab.id == tab.id) {
            tab = {...$_lastUpdatedTab};
            init();

            // if (tab.id && tab.active) {
            //     scrollToTabIfActive();
            // }
        }

        if ((!tab.bookmarks && isSaved) || (tab.bookmarks && !isSaved)) {
            updateSavedState();
        }
    }

    let unsubscribeToTabUpdates; 

    $: {
        if (group != groups[tab.groupId]) {
            group = groups[tab.groupId];
        }
    } 

    let loaded;
    let favIconUrl;
    onMount(() => {

        // unsubscribeToTabUpdates = _lastUpdatedTab.subscribe((t) => {
        //     if (t?.id == tab.id)  {

        //         init();

        //         // if (tab.id && tab.active) {
        //         //     scrollToTabIfActive();
        //         // }
        //     }

        // });

        console.log('loading tab interface');
        console.log(tab);

        init();
    });

    onDestroy(() => {
        //unsubscribeToTabUpdates();
    });

    const updateSavedState = () => {
        isSaved = (tab.bookmarks != null && tab.bookmarks.length > 0) || (tab.resource != null);
        if (group?.workspaceId && !workspace) {
            workspace = $allWorkspaces.find((w) => w.id == group?.workspaceId);
        }
        
    };

    let showPlaceholderElement;

    let isAsleep;
    let isBookmark;
    const init = async () => {
        console.log('init');
        if (el) {
            resetDraggedElement();
        }
        if (showPlaceholderElement) showPlaceholderElement = false;
        
        group = groups[tab.groupId];
        updateFavIconUrl();
        updateSavedState();
        isPinned = workspace?.pinnedTabs?.find((t) => t.id == tab.id || t.url == tab.url) ?? tab.pinned;
        isAudible = tab.audible;
        isBookmark = tab.parentId;
        isAsleep = tab.status == 'unloaded';
        console.log(tab);


        // if (tab.status == 'unloaded') {
        //     const activeTab = await getActiveTab();
        //     if (activeTab.id == tab.id) tab.active = true;
        // }
    
        loaded = true;
    };

    const updateFavIconUrl = () => {
        favIconUrl = getTabFavIconUrl(tab);
    };

    const scrollToTabIfActive = () => {
        if (tab.active && el) {

            const rect = el.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0) {
            // The element is in view
            } else {
                el.scrollIntoView({
                    behavior: "smooth",
                });
            }

        }
    };


    let dispatch = createEventDispatcher();

    let isInFocus;
    let favIconInFocus;

    const onPinTab = async () => {
        if (workspace) {
            if (!workspace.pinnedTabs) workspace.pinnedTabs = [];
            const index = workspace.pinnedTabs.findIndex((t) => t.id == tab.id || t.url == tab.url);
            if (index > -1) {
                workspace.pinnedTabs.splice(index, 1);
            } else {
                workspace.pinnedTabs.push({ id: tab.id, url: tab.url });
            }
            await saveContext(workspace);
            dispatch('dataUpdated', { workspace });
            isPinned = workspace?.pinnedTabs.find((t) => t.id == tab.id || t.url == tab.url);
        } else {
            chrome.tabs.update(tab.id, { pinned: !tab.pinned });
        } 
    };

    let mouseListenersAdded;
    let mouseDownListenerAdded;
    const onMouseEnter = (e) => {
        if (!isOpen) {
            isInFocus = true;
            return;
        }
        if (!$_draggedTab) {
            document.addEventListener('mousedown', onMouseDown);
            mouseDownListenerAdded = true;
            isInFocus = true;
        } else if ($_draggedTab.id != tab.id) {
            console.log('is draggoved over');
            console.log(tab);

        } else {
            isInFocus = true;
        }
    };

    const onMouseLeave = () => {
        if (isDragged) return;
        isInFocus = false;
        favIconInFocus = false;
        if (isDraggedOver) {
            isDraggedOver = false;
            //el.style.transform = '';
        } else if (mouseListenersAdded || isDragged) {
            console.log('mouse leave');
            onMouseUp();
            removeMouseListeners();
        } else if (mouseDownListenerAdded) {
            document.removeEventListener('mousedown', onMouseDown);
            mouseDownListenerAdded = false;
        }
    };

    let mouseDownY;
    const onMouseDown = (e) => {
        mouseListenersAdded = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        mouseDownY = e.clientY;
        console.log('mouse down');
    };

    let lastDragEnd; 
    const onMouseUp = async (e) => {
            console.log('mouse up');
        if (isDragged || $_draggedTab || mouseListenersAdded) {
            isDragged = false;
            _draggedTab.set(null);
            lastDragEnd = Date.now();
            removeMouseListeners(); 

            await onTabMoveEnd();
            resetDraggedElement();
        }
       
    };

    const onTabMoveEnd = async () => {
        if (draggedOverTabs.length > 0) {
            for (const draggOverTab of draggedOverTabs) {
                const element = document.getElementById(draggOverTab.id);
                element.style.transform = '';
            }
            const lastDraggedOverTab = draggedOverTabs[draggedOverTabs.length -1];

            let draggedTabs = [];
            if (selectedTabs.find((t) => t.id == tab.id)) {
                draggedTabs = [...selectedTabs];
                selectedTabs = [];
            } else {
                draggedTabs = [tab];
            }

            for (const draggedTab of draggedTabs) {
                
                if (draggedTab.groupId == -1 && lastDraggedOverTab.groupId > -1) {
                    const tabs = await chrome.tabs.query({ groupId: lastDraggedOverTab.groupId });
                    if (tabs.length == 1) {
                        await chrome.tabs.group({ groupId: lastDraggedOverTab.groupId, tabIds: draggedTab.id });
                    }
                }
                await chrome.tabs.move(draggedTab.id, { index: lastDraggedOverTab.index });

                if (draggedTab.groupId > -1 && (lastDraggedOverTab.groupId == -1)) {
                    await chrome.tabs.ungroup(draggedTab.id);
                }

            }
            draggedOverTabs = [];
        }
    };



    const onMouseMove = (e) => {

        // if mouse is down and horizontal threshold reached 
        if (isDragged) {
            onDrag(e);
        } else if (!$_draggedTab) {
            const deltaX = e.clientY - mouseDownY;
            console.log('delta x: ' +  deltaX);
            if (Math.abs(deltaX) > 2) {
                onDragStart(e);
            }
        }
    };

    const removeMouseListeners = () => {
        console.log('removing mouse listeners');
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        mouseListenersAdded = false;
        mouseDownListenerAdded = false;
    };

    const onMouseEnterFavIcon = (e) => {
        if (!canSelect) return;
        favIconInFocus = true;
        
    };

    const onMouseLeaveFavIcon = (e) => {
        favIconInFocus = false;
        //if (isInFocus) isInFocus = false;
    };

    let showMore;
    const onMenuOpen = (e) => {
        showMore = !showMore;
    };

    const onCloseTab = () => {

        if (isOpen) {
            if (showMultiselectActions) {
                chrome.tabs.remove(selectedTabs.map((t) => t.id));
            } else {
                chrome.tabs.remove(tab.id);
            }
        } else {
            dispatch('removeTab', tab);
        }
       
        
    };

    const toggleMute = () => {

        chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted });
        //tab.mutedInfo.muted = !tab.mutedInfo.muted;
    };

    let selectionTimeout;
    const onSelectionUpdated = () => {
        //if (!isSelected && selectedTabs.length == 0) 

        selectionTimeout = setTimeout(onLongPressSelection, 1000);
        mouseDownOnSelection = Date.now();
        //dispatch("updateSelection", tab);
        
    };


    let startX;
    let startY;
    let positionX;
    let positionY;
    let isDragged;
    let isPopped;
    let draggedElement;
    let rect;
    const onDragStart = (e) => {
        isDragged = true;
        // e.dataTransfer.effectAllowed = "move";
        // e.dataTransfer.setData("tabId", tab.id);

        startX = e.clientX;
        startY = e.clientY;

        if (el) {
            console.log('on drag start');

            showPlaceholderElement = true;
            rect = el.getBoundingClientRect();
            positionY = rect.top;

            //el.style.position = 'fixed';
            el.style.zIndex = '10';
            el.style.position = 'absolute';
            el.style.width = `${rect.width-10}px`;
            
            //el.style.left = `${rect.left}px`;
            //el.style.width = `${el.offsetWidth}px`;
        }
        
        _draggedTab.set(tab);


    };


    let lastDeltaY;
    let draggedOverTabToIgnore;
    let draggedOverTabs = [];
    const onDrag = async (e) => {

        const HORIZONTAL_THRESHOLD = 50;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        if (Math.abs(deltaX) > HORIZONTAL_THRESHOLD) {
            isPopped = true;
        } else {
        // Restrict x-position, allow y-position to change
            //draggedElement.style.top = `${e.clientY - draggedElement.offsetHeight / 2}px`;
            lastDeltaY = positionY + deltaY;

            //el.style.transform = `translateY(${deltaY}px)`;

            el.style.top = `${lastDeltaY}px`;

            

        }

        const _overlapped = document.elementsFromPoint(e.pageX, e.pageY);

        const tabIds = _overlapped
            .filter((element) => element.className.includes('tab') && element.id != '' &&element.id != tab.id && element.id != draggedOverTabToIgnore)
            .map((el) => el.id);

        if (tabIds.length > 0) {

            const draggedOverTabId = tabIds[0];

            const tabElement = document.getElementById(draggedOverTabId);

            const index = draggedOverTabs.findIndex((t) => t.id == draggedOverTabId);
            if (index > -1) {
                tabElement.style.transform = '';
                draggedOverTabs.splice(index, 1);
            } else {
                const draggedOverTab = await chrome.tabs.get(parseInt(draggedOverTabId));
                const draggingDown = draggedOverTab.index - tab.index > 0;
                draggedOverTabs.push(draggedOverTab);
                tabElement.style.transform = `translateY(${draggingDown ? '-' :''}${el.offsetHeight}px)`;
                
                if (draggedOverTabs.length == 0) {
                    const draggedOverTab = await chrome.tabs.get(draggedOverTabId);
                }
            }
        }
    };

    let isDraggedOver;
    let lastDragOver = Date.now();
    let draggedOverTabUnsubscribe;
    const onDragOver = (e) => {
        e.preventDefault();
        if (!isDraggedOver && $_draggedTab?.id != tab.id) {
            isDraggedOver = true;
            // draggedOverTabUnsubscribe = _draggedOverTab.subscribe((t) => {
            //     if (t?.id != tab.id) {
            //         isDraggedOver = false;
            //     }
            //     draggedOverTabUnsubscribe();
            // });
            _draggedOverTab.set(tab);
            console.log('dragover: ' + tab.id);
            console.log($_draggedOverTab);
        }

    };

    const onDragLeave = (e) => {
        e.preventDefault();

        if ($_draggedOverTab?.id == tab.id && $_draggedTab?.id != tab.id && isDraggedOver) {
            isDraggedOver = false;
            console.log('dragleave: ' + tab.id);
            console.log($_draggedOverTab);
        }
    };

    const onDragEnd = async (e) => {
        isDragged = false;
        isPopped = false;
        //resetDraggedElement();
        _draggedTab.set(null);

        let draggedOutOfPanel = (
            e.clientX < 0 
            || e.clientX > window.innerWidth 
            || e.clientY < 0
            || e.clientY > window.innerHeight
        );

        if (draggedOutOfPanel) { // Create window with dragged tabs

            let draggedTabs = [];
            const tabIsSelected = selectedTabs.find((t) => t.id == tab.id);
            if (tabIsSelected) {
                draggedTabs = [...selectedTabs];
            } else {
                draggedTabs = [tab];
            }

            draggedTabs.sort((a, b) => b.index - a.index);

            const firstTab = draggedTabs.pop();
            const currentWindow = await chrome.windows.get(tab.windowId);
            const newWindow = await chrome.windows.create({
                tabId: firstTab.id,
                incognito: currentWindow.incognito,
                state: currentWindow.state,
                focused: true,
            });

            for (const draggedTab of draggedTabs) {
                await chrome.tabs.move(draggedTab.id, {
                    windowId: newWindow.id,
                    index: -1,
                });
            }
            

        }
        
    };

    const onDrop = async (e) => {
        if (isDraggedOver) isDraggedOver = false;
        let tabId = e.dataTransfer.getData("tabId");
        const groupId = e.dataTransfer.getData("groupId");

        if (tabId) {
            tabId = parseInt(tabId);
            let draggedTabs = [];
            if (selectedTabs.find((t) => t.id == tabId)) {
                draggedTabs = [...selectedTabs];
                selectedTabs = [];
            } else {
                draggedTabs = [(await chrome.tabs.get(tabId))];
            }

            for (const draggedTab of draggedTabs) {
                
                if (draggedTab.groupId == -1 && tab.groupId > -1) {
                    const tabs = await chrome.tabs.query({ groupId: tab.groupId });
                    if (tabs.length == 1) {
                        await chrome.tabs.group({ groupId: tab.groupId, tabIds: draggedTab.id });
                    }
                }
                await chrome.tabs.move(draggedTab.id, { index: tab.index });

                if (draggedTab.groupId > -1 && (tab.groupId == -1)) {
                    await chrome.tabs.ungroup(draggedTab.id);
                }

            }
        } else if (groupId) {
            await chrome.tabGroups.move(parseInt(groupId), { index: tab.index });
        }
    };

    const onTitleClicked = async (e) => {
        // check for three finger click
        
        if (isAsleep) {
            isAsleep = false;
        }
        if (lastDragEnd && (Date.now() - lastDragEnd) < 200) return;
        dispatch('clicked', tab);
        if (preventDefault) return;
        if (isOpen) {
            if (isSelected) return;

            if (tab.active) {
                if (!showUpdateModal) showUpdateModal = true;
            } else {
                if (e.metaKey) {
                    dispatch('updateSelection', tab);
                } else if (e.shiftKey && !tab.active) {
                    dispatch('shiftClickTab', tab);
                }
                else if (isBookmark) {
                    const activeTab = (await chrome.tabs.query({active:true, currentWindow: true}))[0];
                    const newTab = await chrome.tabs.create({url: tab.url, index: activeTab.index + 1});
                    if (activeTab.groupId > -1) {
                        await chrome.tabs.group(({tabIds: newTab.id, groupId: activeTab.groupId}));
                    }
                } else {

                    try {
                        await chrome.tabs.update(tab.id, { active: true });
                        await chrome.windows.update(tab.windowId, { focused: true });
                    } catch (e) {
                        console.log(e);
                        dispatch('refreshTabs');
                    }
                    
                }
            }

            
            
        } else {
            
            chrome.tabs.create({url: tab.url});
        }
    };

    const resetDraggedElement = () => {
        el.style.zIndex = '1';
        el.style.transform = '';
        el.style.position = 'relative';
        el.style.top = '';
        el.style.width = '';
    };

    const onTitleDoubleClicked = () => {
        showUpdateModal = true;
    };

    const reload = () => {
        chrome.tabs.reload(tab.id);
    };

    let showBookmarkDetails;

    const saveOptions = {
        save: 'save',
        saveToQueue: 'saveForQueue',
        saveToFolder: 'saveToFolder'
    }

    const saveTab = async (tab, saveOption = saveOptions.save, location) => {

        const hasBookmarkPermission = await getPermissions();

        if (!hasBookmarkPermission) {
            const granted = await chrome.permissions.request({
                permissions: ['bookmarks']
            });

            if (!granted) return;
        }

        if (group && !workspace) {
            workspace = await getContext(groups[tab.groupId].workspaceId);
        }
        
        if (tab.bookmarks && tab.bookmarks.length > 0) {

            showMore = true;
            showBookmarkDetails = true;
            // else {
            //     const bookmark = tab.bookmarks[0];
            //     await chrome.bookmarks.remove(bookmark.id);
            //     delete tab.bookmarks;
            //     dispatch('updateData', {tab});
            // }
        } else if (tab.resource) {

            showMore = true;
            showBookmarkDetails = true;
        } else if (workspace) {
            
            if (user) {
                let resource = createResource(tab);
                resource.contexts = [workspace.id];
                resource.updated = Date.now();
                if (saveOption == saveOptions.saveToQueue) {
                    resource.isQueued = true;
                }

                const ref = doc(db, StorePaths.userResource(user.id, resource.id));
                await setDoc(ref, resource, {merge: true});
                tab.resource = resource;
                isSaved = true;
                dispatch('dataUpdated', {resource});
            } else if (!workspace.isIncognito) {

                let folder = await tryToGetWorkspaceFolder(workspace, true);
                if (folder?.id != workspace.folderId) {
                    workspace.folderId = folder.id;
                    dispatch('dataUpdated', { workspace });

                    //await saveContext(workspace);
                }

                let bookmarkTitle = tab.title;
                let parentId = folder.id;

                if (saveOption == saveOptions.saveToQueue) {
                    let queue = await getWorkspaceQueueFolder(workspace);
                    parentId = queue.id;
                } else if (saveOption == saveOptions.saveToFolder && location) {
                    parentId = location;
                }

                const bookmark = await chrome.bookmarks.create({
                    title: bookmarkTitle,
                    url: tab.url,
                    parentId: parentId
                });

                if (!tab.bookmarks) tab.bookmarks = [];
                tab.bookmarks.push(bookmark);

                dispatch('dataUpdated', {tab});
                dispatch('bookmarkCreated');

                
            }

        } else {
            showMore = true;
            showBookmarkDetails = true;
        }
    
        // if (tab.bookmarks) {
        //     if (tab.bookmarks.length > 1) {
        //         showBookmarkDetails = true;
        //     } else {
        //         delete tab.bookmarks;
        //         dispatch("tabBookmarkRemoved", tab);
        //     }
        // } else {
        //     let results = await tryToSaveBookmark(tab, group);

        //     if (results) {
        //         dispatch("tabBookmarkAdded", results);
        //     }
        // }
    };

    const onStarIconClicked = () => {
        showMore = true;
        showBookmarkDetails = true;
    };

    const exitModal = () => {
        showBookmarkDetails = false;
        showMore = false;
    };

    let showUpdateModal;


    const onActionButtonClicked = async (e, action) => {

        if (showMultiselectActions) {
            if (action.id == actions.save.id) {
                for (const t of selectedTabs) {
                    saveTab(t);
                }
            } else if (action.id == actions.saveForLater.id) {
                for (const t of selectedTabs) {
                    saveTab(t, saveOptions.saveToQueue);
                }
            } else if (action.id == actions.saveToFolder.id) {
                // show save modal
                showSaveModal = true;
            } else {
                for (const t of selectedTabs) {
                    action.onClick(t);
                }
            }
        } else {
            if (action == actions.save) {
                saveTab(tab);
            } else if (action.id == actions.pin.id) {
                onPinTab();
            } else if (action.id == actions.reload.id && e.metaKey) {
                actions.duplicate.onClick(tab);
            } else if (action.id == actions.moveToSpace.id) {
                showMoveModal = true;
                showMore = true;
            } else {
                await action.onClick(tab, workspace, dispatch);

            }
        }
        

    };

    const onDataUpdated = ({ detail }) => {

        
        if (detail.workspace) {
            if (detail.workspace.pinnedTabs && !isPinned) {

            }
        }
        dispatch('dataUpdated', detail);
    };

    let showMoveModal;

    let showMultiselectActions;
    $: {

        // if (tab.groupId > -1 && isSelected && isInFocus) {
        //     console.log('selected tab in focus');
        //     console.log(showMultiselectActions);
        //     console.log(multiSelectActions);
        //     showMultiselectActions = true;
        // } else {
        //     console.log('lkdfald');
        //     showMultiselectActions = false;
        // }
        
    }
    let multiSelectActions = [
        actions.save,
        actions.saveForLater,
        actions.saveToFolder,
    ];



    /*
        multi select option 
        - save
        - save for later
        - save to folder
        - closee

    */

    let showSaveModal;

    const onLocaitonSelected = async ({ detail }) => {
        const folder = detail.folder;
        const children = await chrome.bookmarks.getChildren(folder.id);
        let urlMap = {};
        for (const child of children) {
            urlMap[child.url] = child;
        }

        for (const tab of selectedTabs) {
            if (urlMap[tab.url]) continue;

            chrome.bookmarks.create({
                title: tab.title,
                url: tab.url,
                parentId: folder.id
            });
        }
    };

    let mouseDownOnSelection;

    const onLongPressSelection = async () => {
        let tabs = [];
        if (selectedTabs.length == 1 && !isSelected) {
            tabs = (await chrome.tabs.query({ windowId: tab.windowId, }))
                .filter((t) => {
                    const selectBelow = tab.index > selectedTabs[0].index;

                    return selectBelow 
                        ? tab.index > t.index && t.index > selectedTabs[0].index
                        : tab.index < t.index && t.index < selectedTabs[0].index;
                        
                });
        } else {
            tabs = [tab];
        }
        dispatch("updateSelection", tabs);
    };

    const onMouseUpAfterSelection = async () => {
        if (selectionTimeout) { 
            clearTimeout(selectionTimeout);
            dispatch("updateSelection", tab);
        }

        //if (!isSelected || selectedTabs.length > 1) return;
        
        
        if (false) {
            const tabs = (await chrome.tabs.query({ windowId: tab.windowId }))
                .filter((t) => t.id != tab.id)
                .map((t) => {
                    return {
                        //openerId: t.openrTabId,
                        id: t.id,
                        title: t.title,
                        url: t.url,
                    }
                });
            
            let prompt = 'I have selected the following tab:\n' + JSON.stringify({title: tab.title, url: tab.url}) + '\n';
            prompt += 'Here are a list of tabs:\n' + JSON.stringify(tabs) + '\n';
            prompt += `First identify the subject of the tab, then select from the list of tabs only those that are most relevant to the selected tab, and give the selected group a short, two to three  word title. Output your response as JSON object that looks as follows:
            {
                "title": "group title",
                "tabs": [
                    {
                        "id": "tab id",
                        "title": "tab title",
                        "url": "tab url"
                    },
                    ...
                ]
            }

            Output:
            `;


            const response = await (new LLM()).openAiChatCompletion({
                prompt,
                maxTokens: 4000,
            });

            console.log('got response');
            console.log(response);
            let normResponse = response.trim();
            if (!normResponse.startsWith('{')) {
                const start = normResponse.indexOf('{');
                normResponse = normResponse.slice(start, normResponse.length -1);
            }
            if (!normResponse.endsWith('}')) {
                const end = normResponse.lastIndexOf('}');
                normResponse = normResponse.slice(0, end + 1);
            }
            console.log(normResponse);
            const suggestedGroup = JSON.parse(normResponse);
            await set({
                suggestedGroupTitle: {
                    title: suggestedGroup.title,
                    time: Date.now()
                }
            });

            dispatch('updateSelection', suggestedGroup.tabs);
        }
    };

    const onContextMenu = (e) => {
        e.preventDefault();
        showMore = true;
    };

    let showCreateActionModal;

    // draggable={showMore || !canDrag ? "false" : "true"}
    
</script>

{#if showSaveModal}
    <ModalContainer>
        <LocationSelection 
            on:back={() => showSaveModal  = false}
            on:locationSelected={onLocaitonSelected}
        />
    </ModalContainer>
{/if}


{#if showCreateActionModal}
    <ModalContainer on:exit={() => showCreateActionModal = false}>
        <CreateActionModal {tab} {workspace} />
    </ModalContainer>
{/if}


{#if showMore}
    <ModalContainer on:exit={exitModal}>
        {#if showBookmarkDetails}
            <BookmarkDetails 
                bind:tab 
                on:exit={exitModal} 
                {db} {user} 
                on:dataUpdated
                on:bookmarkDeleted 
            />
        {:else if showMoveModal}
            <MoveModal on:exit={exitModal} selectedTabs={[tab]} />
        {:else}
            <TabMenu 
                {db} 
                {user} 
                {tab}
                workspaceId={group?.workspaceId}
                {workspace} 
                {isOpen} 
                {workspaces} 
                on:pinTab={onPinTab}
                on:exit={exitModal}
                on:editBookmark={saveTab}
                on:dataUpdated={onDataUpdated}
                on:tabStashed
                on:moveToDesktop
                on:moveToMiniPlayer
            />
        {/if}
    </ModalContainer>
{/if}

{#if showUpdateModal}
    <ModalContainer on:exit={() => showUpdateModal = false} >
        <TabUpdateModal {tab} on:exit={() => showUpdateModal = false}/>
    </ModalContainer>
{/if}

{#if showPlaceholderElement}
<div class="tab placeholder">

</div>
{/if}

{#if loaded}

<div
    bind:this={el}
    id={tab.id}
    class="tab{isSelected ? ' selected' : ''}{isInFocus
        ? ' focused'
        : ''}{isDraggedOver ? ' dragged-over' : ''}{tab.active && !isSearchResult
        ? ' active'
        : ''}{group ? ' grouped' : ''}
        {isListItem ? ' list-item' : ''}
        {isStartingTab ? ' start-tab' : ''}
        {isEndingTab ? ' end-tab' : ''}
        {isAsleep ? ' unloaded' : ''}
        {isDragged ? ' dragged' : ''}"
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:dragover={onDragOver}
    on:dragleave={onDragLeave}
    on:dragend={onDragEnd}
    on:drop={onDrop}
    on:contextmenu={onContextMenu}
    on:auxclick={onCloseTab}
    draggable={isPopped ? "true" : "false"}
    
>

    <div class="main-container">
        <div
            class="favicon-container"
            on:mouseleave={onMouseLeaveFavIcon}
            on:mouseenter={onMouseEnterFavIcon}
        >
            {#if isSelected}
                <img
                    class="icon"
                    src={checkedBoxIcon}
                    alt="Unselect"
                    on:mousedown={onSelectionUpdated}
                    on:mouseup={onMouseUpAfterSelection}
                />
            {:else if favIconInFocus}
                <img
                    class="icon"
                    src={emptyBoxIcon}
                    alt="Select"
                    on:mousedown={onSelectionUpdated}
                    on:mouseup={onMouseUpAfterSelection}
                    
                />
            {:else if favIconUrl && favIconUrl != ''}
                <img class="favicon" src={favIconUrl} alt={tab.title ?? ''} />
            {/if}
            {#if (group || workspace) && isSearchResult}
                <div
                    class="group-indicator"
                    style="background-color: {colorMap[group?.color ?? workspace?.color ?? 'grey']}"
                />
            {/if}
            
        </div>
        <div 
            class="title" 
            on:click={onTitleClicked}
            
        >
            {tab.title}
        </div>
        <div class="spacer" on:click={onTitleClicked} on:dblclick={onTitleDoubleClicked}/>

        
            <div class="actions">
                {#if !isSelected && !isDragged && !isSearchResult}
                    {#if isInFocus && !isDragged}

                        {#if isOpen}
                        <div class="quick-actions" 
                            in:horizontalSlide={{
                                delay: showMultiselectActions ? 0 : 550, 
                                duration: showMultiselectActions ? 0 : 200
                            }}>
                                {#each showMultiselectActions ? multiSelectActions : $quickActions as action}      
                                    {#if (action.id == actions.pin.id && isPinned)}
                                    {:else if (action.id == actions.save.id && isSaved)}
                                    
                                    {:else if action}
                                    <img
                                        class="icon"
                                        src={typeof action.icon == 'string' ? action.icon : action.icon(tab)}
                                        alt={typeof action.title == 'string' ? action.title : action.title(tab)}
                                        on:mousedown={(e) => onActionButtonClicked(e, action)}
                                    />
                                    {/if}
                                {/each}
                        </div>
                    {/if}

                {/if}


                

                {#if isSaved}
                    <img
                        src={starIconFilled}
                        on:mousedown={onStarIconClicked}
                        class="icon"
                        alt=""
                    />
                {/if}

                {#if isAudible}
                    <img
                        src={tab.mutedInfo.muted ? mutedIcon : soundIcon}
                        class="icon"
                        alt="Sound"
                        on:mousedown={toggleMute}
                    />
                {/if}
                {#if isPinned}
                    <img
                        src={pinnedIcon}
                        class="icon"
                        alt="Pinned"
                        on:mousedown={onPinTab}
                    />
                {/if}
                
                    {#if !isSelected && !isDragged && !isSearchResult}
                        {#if isInFocus}
                            <img
                                src={menuIcon}
                                class="menu icon"
                                alt="Menu"
                                on:mousedown={onMenuOpen}
                            />
                            <img
                                src={closeIcon}
                                class="icon"
                                alt="Close"
                                on:mousedown={onCloseTab}
                            />
                        {/if}
                        

                        
                    {/if}
                {/if}

                
            </div>
        
    </div>
</div>
{/if}

<style>
    .tab {
        padding: 2px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        font-weight: 300;
        color: white;
        user-select: none;
        margin: 2px 5px;
        border-radius: 8px;
        position: relative;
        z-index: 1;
    }

    .tab.placeholder {
        height: 34px;
    }

    .tab:hover {
        cursor: pointer;
    }


    .main-container {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .tab.grouped {
        background-color: #333333;
        margin: 0px;
        border-radius: 0px;
    }

    .list-item {
        margin: 0px;
        border-radius: 0px;
    }

    .list-item.grouped {
        background-color: #222222;
    }

    .tab.focused {
        background-color: #444444;
    }

    .tab.selected {
        background-color: #444444;
    }

    
    .tab.active {
        background-color: #666666;
    }

    .tab.unloaded .title {
        opacity: 0.5;
    }

    .tab.dragged-over {
        opacity: 0.4;
        background-color: #555555;
    }

    .tab.dragged {
        cursor: grabbing;
    }


    .tab.end-tab {
        border-radius: 0px 0px 8px 8px;
        margin-bottom: 5px;
    }

    .favicon-container {
        min-width: 20px;
        display: flex;
    }

    .favicon {
        height: 20px;
        width: 20px;
    }



    .group-indicator {
        position: absolute;
        height: 8px;
        width: 8px;
        bottom: -2px;
        right: -2px;
        border-radius: 100%;
    }

    .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-lines: 1;
        overflow: hidden;
        margin-left: 5px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .title::-webkit-scrollbar {
        display: none;
    }

    .spacer {
        height: 100%;
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        height: 16px;
        width: 16px;
        padding: 2px 3px;
        filter: invert(1);
        opacity: 0.7;
    }

    .icon:hover {
        cursor: pointer;
        opacity: 1;
    }

    .menu.icon {
        margin-right: -5px;
        margin-left: -5px;
    }

    .drop-zone {
        height: 20px;
        background-color: #444444;
    }

    .quick-actions { 
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }

    .dragover-padding {
        height: 40px;
    }
</style>
