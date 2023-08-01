<script>

    import { initializeApp } from "firebase/app";
    import {
      getFirestore,
      doc,
      getDoc,
      getDocs,
      setDoc,
      collection,
    } from "firebase/firestore";
    import {
        getAuth,
        onAuthStateChanged,
        signInWithEmailAndPassword,
    } from "firebase/auth";

    import { StorePaths } from "./utilities/storepaths.js";
  
    import { config } from "./utilities/config.js";
  
    export let user;
    export let db;
    export let userRef;
    export let fbApp;
    export let authLoaded;
    export let view;

  
    import {createEventDispatcher, onMount } from "svelte";
    import { get } from "./utilities/chrome.js";
    import { Views } from "./view.js";
    
    
    let fbAuth;
    let fbUser;
    let firebaseConnected;
  
    let fbFunctions;
    let checkAccessCode;
    let claimAccessCode;
    let extensionAuth;

    let dispatch = createEventDispatcher();

    
  
    onMount(async() => {
      init();
    });
  
    const init = async () => {
        await initializeFirebase();
        authLoaded = Date.now();
    
    }
  
  
    const initializeFirebase = async () => {
      try {
        fbApp = initializeApp(config.firebase);
        fbAuth = getAuth();
        db = getFirestore(fbApp);
        onAuthStateChanged(fbAuth, fbAuthChange);
        firebaseConnected = true;
        
        // signOut(fbAuth);
        console.log("firebase connected");
      } catch (error) {
        console.log("could not connect to firebase");
        console.log(error);
      }
    };
  
  
    const fbAuthChange = async (newUser) => {
        console.log("auth change");
        fbUser = newUser;
        if (fbUser) await loadUser();
        else {
            console.log('checking stored auth');
            const auth = await get('auth');
            if (auth?.password) tryToSignInWithStoredCredentials(auth);
            else {
                console.log('user not logged in');
            }
        }
    };

    const tryToSignInWithStoredCredentials = (auth) => {
        try {
            signInWithEmailAndPassword(fbAuth, auth.email, auth.password);
        } catch (e)  {
            view = Views.signin;
        }
    };
  
    const loadUser = async () => {
      userRef = doc(db, "users", fbUser.uid);
  
      user = (await getDoc(userRef)).data() ?? {};
      
    
      if (!user?.created) {
        user.id = fbUser.uid;
        user.accessCode = accessCode ?? createUserId();
        user.created = Date.now();
        user.createdOnMobile = isMobile;
        user.userAgent = navigator.userAgent;
        user.hasChrome = hasChrome;
        user.language = navigator.language;
        await setDoc(userRef, user);
      }

      
      authLoaded = Date.now();
      
    };



  </script>