<script>
  import { onMount } from "svelte";
  import { getDocs, collection, where, } from "firebase/firestore";


    export let workspace;
    export let user;
    export let userRef;
    export let db;
    export let fbApp;
    export let resources;
    export let tags; 
    export let resourcesLoaded;
    export let workspaceData;


    onMount(() => {
        load();
    });

    const load = async () => {
        // await loadResources();
        // await loadFavoriteResources();
        // resourcesLoaded = Date.now();
    };

    const loadResources = async () => {
        if (user && resources.length == 0) {

            // load favorites
            const path = StorePaths.userResources(user.id);
            const q = query(
                collection(db, path),
                where("contexts", "array-contains", workspace.id)
            );
            if (resources.length == 0)
            resources = (await getDocs(q)).docs.map((d) => d.data());
            for (const doc of (await getDocs(q)).docs) {
                resources[doc.id] = doc.data();
            }

            //loadTags();
        }
    };

    const loadFavoriteResources = async () => {
        // load favorites
        if (user && resources.length == 0) {
            const path = StorePaths.userResources(user.id);
            const q = query(
                collection(db, path),
                where("highlights", '!=', null)
            );
            if (resources.length == 0)
            resources = (await getDocs(q)).docs.map((d) => d.data());
        }
    };


    

    const loadTags = () => {

        /*
            stems
                - terms
        */


        tags = [];

        let tagMap = {};
        for (const resource of resources) {
            let lastViewed = resource.updated ?? resource.created ?? resource.lastVisited ?? 0;
            for (let tagName of resource.tags ?? []) {
                if (tagName == workspace.title) continue;

                /*
                    todo: check and update tag map
                */
                let tag = {
                    name: tagName,
                    lastViewed,
                    //isSelected: selectedTags
                }

                if (tag.lastViewed < lastViewed) {
                    tag.lastViewed = lastViewed;
                }

                tag.valueCount += 1;

            }
        }

        // todo: tagMap => tags;
    };


</script>