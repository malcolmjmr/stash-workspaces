<script>
  import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, startAfter, Timestamp, updateDoc, where } from "firebase/firestore";
  import { onDestroy, onMount } from "svelte";
  import { StorePaths } from "./utilities/storepaths";
  import { createId, get, set } from "./utilities/chrome";
  import { _deviceId } from "./stores";


    export let authLoaded;
    export let user;
    export let db;
    export let userRef; 
    export let windows = [];
    export let workspaces = [];
    export let currentWindow;
    export let listeningForRemoteUpdates = false; 
    export let lastRemoteUpdate;



    onMount(() => {
        load();
    });

    onDestroy(() => {
        unsubscribeToDeviceUpdates();
    });


    const load = async () => {
        await getDeviceId();
        await connectToServiceWorker();

    };

    const getDeviceId = async () => {
        const deviceId = await get('deviceId');
        _deviceId.set(deviceId);
    }

    let device;
    // should store this in service worker
    let connectedDevices = [];
    let unsubscribeToDeviceUpdates;

    let port;
    const connectToServiceWorker = async () => {
        
        console.log('connecting to service worker');
        
        port = chrome.runtime.connect();

        port.onMessage.addListener((msg) => {

            if (msg.command == "setAsPrimaryToolbar") {
                addDeviceListeners();
            } else if (msg.command === "contextUpdated") {
                onContextUpdated(msg.context);
            }
        });
    };

    let deviceListenersAdded;
    let checkConnectionInterval;
    const addDeviceListeners = async () => {

        console.log('adding device listener');

        deviceListenersAdded = true;

        const startListeningTimestamp = Timestamp.now();
        const deviceQuery = query(
            collection(db, StorePaths.userDevices(user.id)),
            where('connected', '>', Date.now()),
            //startAfter(startListeningTimestamp)
        );
        unsubscribeToDeviceUpdates = onSnapshot(deviceQuery, onDeviceUpdate);
        
        await initiateConnection();

    };

    let deviceId;
    const initiateConnection = async () => {



        const now =  Date.now();


        if (!$_deviceId) {
            const id = createId();
            await set({ deviceId: id });
            _deviceId.set(id);
        } 

        const deviceRef = doc(db, StorePaths.userDevice(user.id, $_deviceId));
        device = (await getDoc(deviceRef)).data();

        if (!device) {   
            device = {
                id: $_deviceId,
                created: now,
            };
        } 

        device.connected = now;

        console.log('initiating connection');
        await setDoc(deviceRef, device, {merge: true});

    };

    const updateConnection = () => {
        console.log('update connection');
        const deviceRef = doc(db, StorePaths.userDevice(user.id, deviceId));
        device.connected = Date.now();
        setDoc(deviceRef, device, {merge: true});
    };

    

    const onDeviceUpdate = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const updatedDevice = change.doc.data();
            console.log('got device update');
            if (device.id == updatedDevice.id) return;
            if (change.type === "added" || change.type == "modified") updateDevices(updatedDevice);
            //if (change.type === "removed") onDeviceRemoved(updatedDevice);
        });
    };

    const updateDevices = (device) => { 

        // are there multiple connected devices?
        // are we listening to window updates?

        console.log('updating devices');
        const index = connectedDevices.findIndex((d) => d.id == device.id);
        if (index > -1) {
            connectedDevices[index] = device;
        } else {
            connectedDevices.push(device);
            updateConnection();
        }

        if (connectedDevices.length > 0 && !unsubscribeToWindowUpdates) {
            console.log('adding window listeners');
            addWindowListener();
            addWorkspaceListener();
            listeningForRemoteUpdates = true;
        }
        
    };

    const onDeviceRemoved = (device) => {
        connectedDevices = connectedDevices.filter((d) => d.id != device.id);
        if (connectedDevices.length == 1) {
            unsubscribeToWindowUpdates();
            unsubscribeToWindowUpdates = null;
            unsubscribeToWorkspaceUpdates();
            unsubscribeToWorkspaceUpdates = null;
        }

    };

    const checkConnection = () => {

        // check connected devices 
        // if other devices not connect  
        const deviceRef = doc(db, StorePaths.userDevice(user.id, device.id));
        device.connected = Date.now();
        setDoc(deviceRef, device, {merge: true});
    };

    
    let unsubscribeToWindowUpdates;
    const addWindowListener = () => {
        const windowQuery = query(
            collection(db, StorePaths.userWindows(user.id)),
            where('updated', '>', Date.now()),
        );

        unsubscribeToWindowUpdates = onSnapshot(windowQuery, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                
                const window = change.doc.data();

                console.log('window update from firestore');
                console.log(window);
                console.log($_deviceId);
                if (window.deviceId == $_deviceId) return;

                lastRemoteUpdate = {
                    time: Date.now(),
                    type: change.type,
                    window,
                    changedFields: getChangedFields(snapshot, change),
                };

                console.log('last remote window update');
                console.log(lastRemoteUpdate);
            });
            

        });
    };

    let unsubscribeToWorkspaceUpdates;
    const addWorkspaceListener = () => {
        const startListeningTimestamp = Timestamp.now();
        const workspaceQuery = query(
            collection(db, StorePaths.userContexts(user.id)),
            where('updated', '>', Date.now())
        );
        unsubscribeToWorkspaceUpdates = onSnapshot(workspaceQuery, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const changedFields = getChangedFields(snapshot, change);
                const workspace = change.doc.data();
                console.log('workspace update');
                if (workspace.deviceId == deviceId) return;
                lastRemoteUpdate = {
                    time: Date.now(),
                    type: change.type,
                    workspace,
                    changedFields
                };
                console.log('last remote workspace update');
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




    const onContextUpdated = (context) => {
        const now = Date.now();
        const shouldUpdate = true; //!lastRemoteUpdate || ((now - lastRemoteUpdate?.time) > 5000);
        if (shouldUpdate) {
            const ref = doc(db, StorePaths.userContext(user.id, context.id));
            context.deviceId = deviceId;
            setDoc(ref, context, { merge: true });
        }
    };


    let desktopConnection;
    const loadPeerNetwork = () => {
        desktopConnection =  new RTCPeerConnection();

        desktopConnection.ondatachannel = (event) => {
            const dataChannel = event.channel;

            dataChannel.onopen = () => {
                // Send the current tabs to the mobile device
                chrome.tabs.query({}, (tabs) => {
                    const tabData = tabs.map(tab => ({
                        url: tab.url,
                        title: tab.title
                    }));
                    dataChannel.send(JSON.stringify(tabData));
                });
            };
        };

        desktopConnection.onicecandidate = (event) => {
            if (event.candidate) {
                sendSignalingMessage({
                type: 'ice-candidate',
                candidate: event.candidate
                });
            }
        };
    }
     

    // Function to handle incoming signaling messages
    function handleSignalingMessage(message) {
        if (message.type === 'offer') {
            desktopConnection.setRemoteDescription(new RTCSessionDescription(message))
            .then(() => desktopConnection.createAnswer())
            .then(answer => desktopConnection.setLocalDescription(answer))
            .then(() => {
                // Send the answer back to the mobile device
                sendSignalingMessage({
                type: 'answer',
                sdp: desktopConnection.localDescription
                });
            });
        } else if (message.type === 'ice-candidate') {
            desktopConnection.addIceCandidate(new RTCIceCandidate(message.candidate));
        }

    }

    // Shared signaling function (implement this according to your chosen method)
    function sendSignalingMessage(message) {
    // This could be via QR code, local network discovery, or any other method
    // For this example, we'll just log it
    console.log('Signaling message:', message);
    // In a real implementation, you'd send this message to the other device
    }
    




</script>