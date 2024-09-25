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
    export let lastRemoteUpdate;


    onMount(() => {
        console.log('device manager mounted');
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
        port = chrome.runtime.connect();

        port.onMessage.addListener((msg) => {
            if (msg.windowId != currentWindow.id) return;
            if (msg.command === "updatePrimaryToolbar") {
                addDeviceListeners();
            } else if (msg.command === "contextUpdated") {
                onContextUpdated(msg.context);
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

    let deviceId;
    const getDevice = async () => {

        const now =  Date.now();

        deviceId = await get('deviceId');

        if (!deviceId) {
            deviceId = createId();
            await set({ deviceId });
            
        } 

        const deviceRef = doc(db, StorePaths.userDevice(user.id, deviceId));
        device = await getDoc(deviceRef);

        if (!device) {   
            device = {
                id: deviceId,
                created: now,
            };
        } 

        device.connected = now;

        await setDoc(deviceRef, device, {merge: true});

    };

    

    const onDeviceUpdate = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const device = change.doc.data();
            console.log('device update');
            console.log(device);
            if (change.type === "added") onDeviceAdded(device);
            if (change.type === "removed") onDeviceRemoved(device);
        });
    };

    const onDeviceAdded = (device) => { 

        connectedDevices.push(device);
        if (connectedDevices.length == 1) {

        } else if (connectedDevices.length > 1) {
            listenForUpdates = true;
            addWindowListener();
            addWorkspaceListener();
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
            snapshot.docChanges().forEach((change) => {
                
                const window = change.doc.data();
                if (window.deviceId == deviceId) return;

                lastRemoteUpdate = {
                    time: Date.now(),
                    type: change.type,
                    window,
                    changedFields: getChangedFields(snapshot, change),
                };

                console.log('last remote update');
                console.log(lastRemoteUpdate);
            });
            

        });
    };

    let unsubscribeToWorkspaceUpdates;
    const addWorkspaceListener = () => {
        unsubscribeToWorkspaceUpdates = onSnapshot(collection(db, StorePaths.userContexts(user.id)), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const changedFields = getChangedFields(snapshot, change);
                const workspace = change.doc.data();
                if (workspace.deviceId == deviceId) return;
                lastRemoteUpdate = {
                    time: Date.now(),
                    type: change.type,
                    workspace,
                    changedFields
                };
                console.log('last remote update');
                console.log(lastRemoteUpdate);
            });
        });
    };

    const getChangedFields = (snapshot, change) => {
        let oldData = change.oldIndex != -1 
            ? snapshot.docs[change.oldIndex].data()
            : {};
        let newData = change.doc.data();
        let changedFields = {};
        let allKeys = {...oldData.keys, ...newData.keys};
        
        for (let key in allKeys) {
            if (!(key in oldData)) {
                changedFields[key] = newData[key]; // Added field
            } else if (!(key in newData)) {
                changedFields[key] = null; // Deleted field
            } else if (oldData[key] != newData[key]) {
                changedFields[key] = newData[key]; // Modified field
            }
        }
    }

    const addWindow = (window) => {
        // 
    };

    const updateWindow = (window) => { 
        lastRemoteUpdate = window;
        const openWindow = windows.find((w) => w.id == window.id);
        if (openWindow) {
            // get diff
            // update tabs 
        } else {
            // do nothing
        }
    };

    const removeWindow = (window) => {

    };


    const onContextUpdated = (context) => {
        const now = Date.now();
        const shouldUpdate = !lastRemoteUpdate || ((now - lastRemoteUpdate?.time) > 5000);
        if (shouldUpdate) {
            const ref = doc(db, StorePaths.userContext(user.id, context.id));
            context.deviceId = deviceId;
            setDoc(ref, context, { merge: true });
        }
    };




</script>