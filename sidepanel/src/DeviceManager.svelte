<script>
  import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
  import { onDestroy, onMount } from "svelte";
  import { StorePaths } from "./utilities/storepaths";
  import { createId, get, set } from "./utilities/chrome";


    export let authLoaded;
    export let user;
    export let db;
    export let userRef; 
    export let windows = [];
    export let workspaces = [];
    export let currentWindow;
    export let listenForUpdates = false; 


    onMount(() => {
        connectToServiceWorker();
    });

    onDestroy(() => {
        unsubscribeToDeviceUpdates();
    });

    let device;
    // should store this in service worker
    let connectedDevices = [];
    let unsubscribeToDeviceUpdates;

    let port;
    const connectToServiceWorker = () => {
        port = chrome.runtime.connect({command: "toolbar"});

        port.onMessage.addListener((msg) => {
            if (msg.command === "updatePrimaryToolbar" && msg.windowId == currentWindow.id) {
                addDeviceListeners();
            }
        });

    };

    let deviceListenersAdded;
    let connectionConfirmInterval;
    const addDeviceListeners = async () => {
        if (!authLoaded) return;

        deviceListenersAdded = true;

        const query = query(collection(db, StorePaths.userDevices(user.id)));
        unsubscribeToDeviceUpdates = onSnapshot(query, onDeviceUpdate);
        getDevice();
        connectedDevices = (await getDocs(query))
            .map((doc) => doc.data())
            .filter((d) => d.connected);
        
        connectionConfirmInterval = setInterval(confirmConnection, 1000 * 60 * 15);

    };

    const getDevice = async () => {
        let deviceId = await get('deviceId');

        if (!deviceId) {
            deviceId = createId();
            await set({ deviceId });
            
        } 

        const deviceRef = doc(db, StorePaths.userDevice(user.id, deviceId));
        device = await getDoc(deviceRef);

        if (!device) {
            const now =  Date.now();
            device = {
                id: deviceId,
                connected: now,
                created: now,
            };
            await setDoc(deviceRef, device);
        }

    };

    

    const onDeviceUpdate = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const device = change.doc.data();
            if (change.type === "added") onDeviceAdded(device);
            if (change.type === "removed") onDeviceRemoved(device);
        });
    };

    const onDeviceAdded = (device) => { 

        connectedDevices.push(device);
        if (connectedDevices.length == 1) {

        } else if (connectedDevices.length > 1) {
            listenForUpdates = true;

            // addWindowListener();
            // addWorkspaceListener();
        }
        
    };

    const onDeviceRemoved = (device) => {
        connectedDevices = connectedDevices.filter((d) => d.id != device.id);
        if (connectedDevices.length == 1) {
            unsubscribeToWindowUpdates();
            unsubscribeToWorkspaceUpdates();
        }

    };

    const confirmConnection = () => {
        const deviceRef = doc(db, StorePaths.userDevice(user.id, device.id));
        device.connected = Date.now();
        setDoc(deviceRef, device, {merge: true});
    };

    
    let unsubscribeToWindowUpdates;
    const addWindowListener = () => {
        unsubscribeToWindowUpdates = onSnapshot(collection(db, StorePaths.userWindows(user.id)), (snapshot) => {
            /*
                find corresponding window 
                make update to it
                have those updates reflected in the UI

                existing window 
                non existing window


            */

            snapshot.docChanges().forEach((change) => {
                const window = change.doc.data();
                if (change.type === "added") {
                    addWindow(window);
                }
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.data());
                }
            });
            
        });
    };

    let unsubscribeToWorkspaceUpdates;
    const addWorkspaceListener = () => {
        unsubscribeToWorkspaceUpdates = onSnapshot(collection(db, StorePaths.userContexts(user.id)), (snapshot) => {

        });
    };


</script>