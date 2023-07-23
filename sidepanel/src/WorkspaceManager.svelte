<script>

    import { getContexts } from "./utilities/chrome";
    import {
      doc,
      getDocs,
      setDoc,
      collection,
    } from "firebase/firestore";

    import { StorePaths } from "./utilities/storepaths.js";

    
    export let user;
    export let workspaces;


    $: {
        user?.id;
        getUserContexts();
    };


    const getUserContexts = async () => {

        console.log('loading user contexts');

        const localContexts = await getContexts();
        if (user) {
            if (!user.lastSync) user.lastSync = 0;
            const config = await get('config');
            if (config.lastSync) config.lastSync = 0;
            const contextsToUpload = localContexts.filter((c) => c.updated > user.lastSync || c.created > user.lastSync);
            for (const context of contextsToUpload) {
                const ref = doc(db, StorePaths.userContext(user.id));
                await setDoc(ref, context, {merge: true});
            }
            user.lastSync = Date.now();
            await setDoc(userRef, user);

            const contextsSnapshot = await getDocs(
                collection(db, StorePaths.userContexts(user.id))
            );
            workspaces = contextsSnapshot.docs.map((doc) => doc.data());
        } else {
            workspaces = localContexts;
        }
    };
</script>