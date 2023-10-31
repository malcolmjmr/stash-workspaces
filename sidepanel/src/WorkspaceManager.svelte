<script>

    import { 
        getContexts, 
        get,  
        getContext, 
        set, 
        saveContext,
        getContextData,
        saveContextData,
        getOpenGroups,
    } from "./utilities/chrome";

    import {
      doc,
      getDocs,
      setDoc,
      collection,
      query,
      where,
      orderBy,
      limit,
    } from "firebase/firestore";

    import { StorePaths } from "./utilities/storepaths.js";
    import { onMount } from "svelte";
    import { getWorkspaceData } from "./workspace/workspaceData";
    import { allWorkspaces } from "./stores";


    export let db;
    export let user;
    export let userRef;

    export let tabs;
    export let activeTab;
    export let workspaces;
    export let authLoaded;
    export let groups;
    export let workspacesLoaded;
    export let lastUpdatedGroup;
    export let resources;
    //export let resourcesLoaded;

    let currentUser;

    onMount(() => {
        //getUserContexts();
    });

    $: {
        authLoaded;
        getUserWorkspaces();
    };

    $: {
        lastUpdatedGroup;
        updateWorkspaces();
    }


    /*

        Need to fetch resources for groups within active window 
        
        Update the tabs that have those resources?



    */
    
    const updateWorkspaces = async () => {
        if (!lastUpdatedGroup) return;
        
        const openGroups = await get('openGroups');
        const workspaceId = openGroups[lastUpdatedGroup];
        const index = workspaces.findIndex((w) => w.id == workspaceId);
        if (index > -1) {
            console.log('updating workspace');
            const workspace = await getContext(workspaceId);
            console.log(workspace);
            workspaces[index] = workspace;
            allWorkspaces.set(workspaces);
        } else {
            getUserWorkspaces();
        }
    };

    const getUserWorkspaces = async () => {

        let tempWorkspaces = [];
        if (user?.cloudSync) {
            tempWorkspaces = await getSyncedWorkspaces();
        } else {
            tempWorkspaces = await getContexts();
        }

        getResourcesForOpenWorkspaces();

        const currentWindow = await chrome.windows.get(await chrome.windows.WINDOW_ID_CURRENT);
        workspaces = tempWorkspaces.filter((w) => (w.isIncognito ?? false) == currentWindow.incognito);
        allWorkspaces.set(workspaces);
        
        //workspacesLoaded = Date.now();

    };

    const getResourcesForOpenWorkspaces = async () => {
        const openGroups = await getOpenGroups();
        for (const workspaceId of Object.values(openGroups)) {
            for (const resource of await getWorkspaceResources(workspaceId)) {
                resources[resource.url] = resource;
            }
        }
        
        for (let i = 0; i < tabs.length; i++) {
            const resource = resources[tabs[i].url];
            if (resource) {
                tabs[i].resource = resource;
            }
        }
    } 

    const getSyncedWorkspaces = async () => {

        //let config = await get('config');
        
        //if (!config.lastSync) lastSync = 0;

        const now = Date.now();
        const aMonthAgo = now - (1000 * 60 * 60 * 24 * 30);

        let contextsToUpdate = {};
        let contexts = {};

        const localContexts = await getContexts();
        for (const context of localContexts) {
            contextsToUpdate[context.id] = { context };
            contexts[context.id] = context;
        }  

        const serverContexts = (await getDocs(
            collection(db, StorePaths.userContexts(user.id))
        )).docs.map((doc) => doc.data());

        //contexts = serverContexts;

        for (const context of serverContexts) {

            const localContextExists = contextsToUpdate[context.id];
            if (localContextExists) {
                const localContext = contextsToUpdate[context.id].context;
                const localUpdateTime = localContext.updated ?? localContext.created;
                if (localUpdateTime < context.updated) {
                    // update local data 
                    contextsToUpdate[context.id].context = context;
                    contextsToUpdate[context.id].local = true;
                    contexts[context.id] = context;
                } else if (localUpdateTime > context.updated) {
                    // update server data
                    contexts[context.id] = localContext;
                } else {
                    // no update required
                    delete contextsToUpdate[context.id];
                    contexts[context.id] = context;
                }
            } else if (context.updated > aMonthAgo) {
                // add context to local storage 
                contextsToUpdate[context.id] = {
                    context,
                    local: true,
                }
                contexts[context.id] = context;
            } else {
                contexts[context.id] = context;
            }
        }

        const localContextsToUpdate = Object.values(contextsToUpdate)
            .filter((d) => d.local)
            .map((d) => d.context)
        updateLocalContexts(localContextsToUpdate);

        const openGroups = await get('openGroups');
        const openWorkspaceIds = Object.values(openGroups);
        const openContextsToUpdate = localContextsToUpdate.filter((c) => openWorkspaceIds.includes(c.id));

        updateOpenWorkspaces(openContextsToUpdate, openGroups);


        const serverContextsToUpdate = Object.values(contextsToUpdate)
            .filter((d) => !d.local)
            .map((d) => d.context);
        updateServerContexts(serverContextsToUpdate);

        return Object.values(contexts);

    };


    const updateLocalContexts = async (contextsToUpdate) => {
        // for each con
        for (let context of contextsToUpdate) {
            await saveContext(context, false);
        }
    };

    const updateServerContexts = async (contextsToUpdate) => {
        for (let context of contextsToUpdate) {
            await setDoc(doc(db, StorePaths.userContext(user.id, context.id)), context, { merge: true });
        }
    };

    const updateOpenWorkspaces = async (contextsToUpdate, openGroups) => {

        let contextToGroups = {};

        for (const [groupId, contextId] of Object.entries(openGroups)) {
            contextToGroups[contextId] = groupId;
        }

        for (const context of contextsToUpdate) {


            const groupId = parseInt(contextToGroups[context.id]);
            const openTabs = await chrome.tabs.query({ groupId });

            // const contextResources = (await getDocs(
            //     query(collection(db, StorePaths.userResources(user.id)), 
            //         where('context', 'array-contains', context.id), 
            //         orderBy('updated', 'desc'),
            //         limit(1)
            //     )
            // )).docs.map((doc) => doc.data());

            // resources = [...resources, ...contextResources];

            let tabsToCreate = [];
            let tabs = {};


            for (const tab of openTabs) {
                tabs[tab.url] = tab;
            }


            for (const tab of context.tabs) {
                if (!tabs[tab.url]) {
                    tabsToCreate.push(tab);
                } else {
                    delete tabs[tab.url];
                }
            }
            
            //let createdTabs = [];
            for (let tab of tabsToCreate) {
                tab = await chrome.tabs.create({ url: tab.url });
                await chrome.tabs.group({ tabIds: tab.id, groupId });
            }

            await chrome.tabs.remove(Object.values(tabs).map((t) => t.id));
        }
    }

    const getWorkspaceResources = async (workspaceId) => {
        return user 
            ? (await getDocs(
                query(collection(db, StorePaths.userResources(user.id)), 
                    where('contexts', 'array-contains', workspaceId), 
                    //where('updated', '>', context.resourcesUpdated),
                    //orderBy('updated', 'desc'),
                )
            )).docs.map((doc) => doc.data()) 
            : [];
    }


</script>