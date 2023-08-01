<script>

    import { getContexts, get,  getContext, set } from "./utilities/chrome";
    import {
      doc,
      getDocs,
      setDoc,
      collection,
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
    
    const updateWorkspaces = async () => {
        if (!lastUpdatedGroup) return;
        console.log('updating group');
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

        // const allData = (await chrome.storage.local.get(null));
        // const contextKeys = Object.entries(allData).filter(([k,v]) => k.startsWith('c-')).map(([k,v]) => k);
        // console.log('context keys');
        // console.log(contextKeys);
        // await set({contextKeys});


        let tempWorkspaces = [];
        const localContexts = await getContexts();
        if (user) {
            if (!user.lastSync) user.lastSync = 0;
            const config = await get('config');
            if (config.lastSync) config.lastSync = 0;
            const contextsToUpload = localContexts.filter((c) => c.updated > user.lastSync || c.created > user.lastSync);
            for (const context of contextsToUpload) {
                const ref = doc(db, StorePaths.userContext(user.id, context.id));
                await setDoc(ref, context, {merge: true});
            }
            user.lastSync = Date.now();
            await setDoc(userRef, user);

            const contextsSnapshot = await getDocs(
                collection(db, StorePaths.userContexts(user.id))
            );
            tempWorkspaces = contextsSnapshot.docs.map((doc) => doc.data());
        } else {
            tempWorkspaces = localContexts;
        }

    
        workspaces = tempWorkspaces.filter((w) => (w.isIncognito ?? false) == activeTab.incognito);

        

        workspacesLoaded = Date.now();

    };
</script>