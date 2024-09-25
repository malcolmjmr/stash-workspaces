<script>
  import { onMount } from "svelte";
  import Auth from "../../sidepanel/src/Auth.svelte";
  import { createResource } from "../../sidepanel/src/utilities/firebase";
  import { doc, getDoc } from "firebase/firestore";
  import { StorePaths } from "../../sidepanel/src/utilities/storepaths";
  import { get } from "../../sidepanel/src/utilities/chrome";


    let tab;

    let user;
    let db;
    let userRef;
    let fbApp;
    let authLoaded;

    let iframe;
    

    onMount(() => {
        load();
        
    });

    let resource;
    let resourceType;

    let loaded;
    const load = async () => {

        const uri = new URL(window.location.href);
        const type = uri.searchParams.get('type');
        const resourceId= uri.searchParams.get('id');
        if (resourceId) {
            await getResourceById(resourceId);
        } else if (type) {
            await createInstanceOfResourceType(type);
        } else {
            await getTabInfo();
        }

        loaded = true;
    }

    const getTabInfo = async () => {
        tab = await chrome.runtime.sendMessage({
            command: 'getTabInfo'
        });

        setTitle();
        setFavIcon();
    };

    const setTitle = () => {

    };

    const setFavIcon = () => {

    };

    const onIframeCreated = async (e) => {
        setTimeout(async () => {
            await addIframeListeners();
        }, 500);
    };


    async function injectContentIntoIframe() {
        if (!iframe) {
            console.error('Could not find iframe');
            return;
        }

        // Get the iframe's document
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;



        // Create a base HTML structurelet 
        let html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>${resourceType.css}</style>
                    <meta http-equiv="content_security_policy": "script-src 'self' 'sha256-B+Qe/KNUDtGDd/m1g5ycAq1DgpLs9ubKmYTlOHBogC8='; object-src 'self'">
                </head>
                <body>${resourceType.html}</body>
            </html>
        `;

        // Write the content to the iframe
        iframeDoc.open();
        iframeDoc.write(html);
        iframeDoc.close();

        let script = document.createElement('script');
        script.nonce = 'random123';
        script.innerHTML = resourceType.js;

        iframeDoc.body.appendChild(script);


        // Need to load data
    };

    const addIframeListeners = async () => {
        window.addEventListener('message', (event) => {
            // Check origin for security
            const extensionUrl = chrome.runtime.getURL('');
            
            if (!extensionUrl.includes(event.origin)) return;
            
            console.log('Message received from iframe:', event.data);
        });
    }; 

    const getResourceById = async (resourceId) => {
        const ref = doc(db, StorePaths.userResource(user.id, resourceId));
        resource = (await getDoc(ref)).data() ?? {};
    };

    const createInstanceOfResourceType = async (type) => {
        const resourceTypes = (await get('resourceTypes')) ?? {};
        resourceType = resourceTypes[type];
        if (!resourceType) {
            console.log('could not find resource type:');
            console.log(type);
            return;
        }

        resource = createResource({
            icon: resourceType.icon,
            type: resourceType.type,
        });
        injectContentIntoIframe();  
    };


</script>

<Auth
    bind:user
    bind:db
    bind:userRef
    bind:fbApp
    bind:authLoaded
/>
<main>

    

    <iframe class="content" nonce="random123" bind:this={iframe} on:load={onIframeCreated} title={resource?.title ?? ''}/>
    
</main>
<style>
    main {
        height: 100%;
        width: 100%;
    }

    iframe {
        height: 100%;
        width: 100%
    }

    :global(html, body, #app) {
        margin: 0px;
        background-color: black;
        width: 100%;
        height: 100%;
        position: relative;
        font-family: system-ui, sans-serif;
        font-weight: 300;
        overflow: hidden;
        letter-spacing: 1px;
    }
</style>