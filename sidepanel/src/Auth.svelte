<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import {
        getAuth,
        onAuthStateChanged,
        signInWithEmailAndPassword,
    } from "firebase/auth";
    import { apiConfig } from "./utilities/config.js";
    const initializeFirebase = async () => {
        try {
            fbApp = initializeApp(apiConfig.firebase);
            fbAuth = getAuth();
            db = getFirestore(fbApp);
            // connectFirestoreEmulator(db, "localhost", 8001);
            // connectFunctionsEmulator(fbFunctions, "localhost", 5001);
            // checkAccessCode = httpsCallable(fbFunctions, "checkAccessCode");
            // claimAccessCode = httpsCallable(fbFunctions, "claimAccessCode");
            onAuthStateChanged(fbAuth, fbAuthChange);
            firebaseConnected = true;
            // signOut(fbAuth);
            console.log("firebase connected");
        } catch (error) {
            console.log("could not connect to firebase");
            console.log(error);
            loaded = true;
        }
    };

    let userRef;
    let user;
    let firebaseConnected = false;

    let fbApp;
    let fbAuth;
    let fbUser;
    let db;

    const fbAuthChange = async (newUser) => {
        console.log("auth change");
        const userSignedOut = fbUser && !newUser;
        fbUser = newUser;
        console.log(fbUser);
    };
</script>
