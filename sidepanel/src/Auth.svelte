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

  
    import {onMount } from "svelte";
    
    
    let fbAuth;
    let fbUser;
    let firebaseConnected;
  
    let fbFunctions;
    let checkAccessCode;
    let claimAccessCode;
    let extensionAuth;

    
  
    onMount(async() => {
      init();
    });
  
    const init = async () => {
        console.log('loading auth');
        await initializeFirebase();
        authLoaded = true;
    
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
      const userSignedOut = fbUser && !newUser;
      fbUser = newUser;
      console.log(fbUser);
  
      if (userSignedOut) {
        // user signed out
        // update extension auth so that user is not automatically logged in
      } else {
  
  
        if (!navigator.onLine) {
          console.log("offline");
          loaded = true;
        } else if (fbUser) await loadUser();
        //else if (extensionAuth.password)
        //else if (needToSignIn) await signInWithExtensionCredentials();
        // only create account when user confirms that they are a new user
        //else if (!extensionAuth) await createNewFirebaseUser();
        else {
          console.log('user not logged in');
        }
        //else if (hasChrome && !isMobile)
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
  
      loaded = true;
    };



  </script>