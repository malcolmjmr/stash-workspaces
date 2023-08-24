<script>

    import { 
        getContexts, 
        get,  
        getContext, 
        set, 
        saveContext,
        getContextData,
        saveContextData,
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


    export let db;
    export let user;
    export let userRef;

    export let activeTab;
    export let workspaces;
    export let authLoaded;
    export let groups;
    export let workspacesLoaded;
    export let lastUpdatedGroup;
    export let resources;

    let currentUser;

    onMount(() => {
        //getUserContexts();
    });

    $: {
        authLoaded;
        getUserContexts();
    };

    $: {
        lastUpdatedGroup;
        updateWorkspaces();
    }


    /*

        Need to fetch resources for groups within active window 
        
        Update the tabs that have those resources?

        Need to fetch 

        

    */
    
    const updateWorkspaces = async () => {
        if (!lastUpdatedGroup) return;
        
        const openGroups = await get('openGroups');
        const workspaceId = openGroups[lastUpdatedGroup];
        const index = workspaces.findIndex((w) => w.id == workspaceId);
        if (index > -1) {
            console.log('found workspace');
            const workspace = await getContext(workspaceId);
            workspaces[index] = workspace;
        } else {
            getUserContexts();
        }
    };

    const getUserContexts = async () => {

        let tempWorkspaces = [];
        if (user?.cloudSync) {
            tempWorkspaces = await getSyncedContexts();
        } else {
            tempWorkspaces = await getContexts();
        }


        workspaces = tempWorkspaces.filter((w) => (w.isIncognito ?? false) == activeTab.incognito);
        workspacesLoaded = Date.now();

    };

    const getSyncedContexts = async () => {

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

        updateOpenContexts(openContextsToUpdate, openWorkspaceIds);


        const serverContextsToUpdate = Object.values(contextsToUpdate)
                .filter((d) => !d.local)
                .map((d) => d.context);
        console.log('server contexts to update');
        console.log(serverContextsToUpdate);
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

    const updateOpenContexts = async (contextsToUpdate, openGroups) => {
        console.log('Open contexts to update');
        console.log(contextsToUpdate);

        // let contextToGroups = {};
        // for (const [groupId, contextId] of Object.entries(openGroups)) {
        //     contextToGroups[contextId] = groupId;
        // }

        // for (const context of contextsToUpdate) {
        //     const groupId = parseInt(contextToGroups[context.id]);
        //     const openTabs = await chrome.tabs.query({ groupId });

        //     let tabsToCreate = [];
        //     let tabs = {};


        //     for (const tab of openTabs) {
        //         tabs[tab.url] = tab;
        //     }


        //     for (const tab of context.tabs) {
        //         if (!tabs[tab.url]) {
        //             tabsToCreate.push(tab);
        //             delete tabs[tab.url];
        //         }
        //     }

        //     await chrome.tabs.remove(Object.values(tabs).map((t) => t.id));
        //     //let createdTabs = [];
        //     for (let tab of tabsToCreate) {
        //         tab = await chrome.tabs.create({ url: tab.url });
        //         await chrome.tabs.group({ tabIds: tab.id, groupId });
        //     }
            
        // }
    }

    const getLastUpdatedResourceForContext = async (context) => {
        let results = (await getDocs(
            query(collection(db, StorePaths.userResources(user.id)), 
                where('context', 'array-contains', context.id), 
                orderBy('updated', 'desc'),
                limit(1)
            )
        )).docs.map((doc) => doc.data());
        return results.length == 1 ? results[0] : null;
    }


</script>