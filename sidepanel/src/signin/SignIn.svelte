<script>
    import {
        getAuth,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signInWithPopup,
        GoogleAuthProvider,
        signInWithCredential
    } from "firebase/auth";

    import googleIcon from "../icons/google.png";
    import { onMount } from "svelte";
  import { set } from "../utilities/chrome";

    export let fbApp;

    const provider = new GoogleAuthProvider();

    
    let auth;
    let loaded;
    onMount(() => {
        if (fbApp) {
            auth = getAuth(fbApp);
            loaded = true;
        }

    });

    $: {
        if (fbApp) {
            auth = getAuth(fbApp);
            loaded;
        }
    }


    let email;
    let password;

    let error;

    const onSigninButtonPressed = () => {
        if (!email || (!email.includes('@') && !email.includes('.'))) {
            error = 'Please enter a valid';
        } else if (!password) {
            error = 'Please provide a password';
        } else {
            try {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        
                        set({auth: email, password });
                    });
            } catch (e) {
                console.log(e);
                /*
                    t
                    createUserWithEmailAndPassword(auth, email, password);
                */
                
            }
            
        }
    };

    const onSigninWithGooglePressed = async () => {

        const token = await chrome.identity.getAuthToken();
        //signInWithCredential()
        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         // The signed-in user info.
        //         const user = result.user;
        //         // IdP data available using getAdditionalUserInfo(result)
        //         // ...
        //     }).catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         error = errorMessage;
        //         // The email of the user's account used.
        //         const email = error.customData.email;
        //         // The AuthCredential type that was used.
        //         const credential = GoogleAuthProvider.credentialFromError(error);
        //         // ...
        //     });
    };

</script>

<div class="signin-page">
    
    <div class="container">
        <div class="title">
            Sign in 
        </div>
        <div class="signin-with-email">
            <input type="email" bind:value={email} placeholder="Email">
            <input type="password" bind:value={password} placeholder="Password">
            <div class="signin button" on:mousedown={onSigninButtonPressed}>
                Sign in
            </div>
            {#if error}
                <div class="error">
                    {error}
                </div>
            {/if}
        </div>
        <!--

            <div class="divider">
                <div class="line"></div>
                <span> or </span>
                <div class="line"></div>
            </div>
            <div class="signin-with-google button" on:mousedown={onSigninWithGooglePressed}>
                <img src={googleIcon} alt="Google" />
                <span>Sign in with Google</span>
            </div>

        -->
        
    </div>
    
    
</div>

<style>
    .signin-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: 0px 20px;
        color: white;
    }

    .title {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;

    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;

    }

    .error {
        font-size: 18px;
        color: rgb(255, 0, 0);
        width: 100%;
        text-align: center;
    }

    .signin-with-email {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .signin-with-email input {
        border-radius: 5px;
        padding: 8px 15px;
        margin: 10px 0px;
        border: 1px solid #666666;
        background-color: transparent;
        text-decoration: none;
        box-shadow: none;
        outline: none;
        font-size: 18px;
        color: white;
    }

    .signin-with-email .signin.button {
        border-radius: 20px;
        padding: 8px 15px;
        background-color: #224ec7;
        color: white;
        margin: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 30px;

    }

    .divider {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0px;
        width: 100%;
    }

    .divider .line {
        flex-grow: 1;
        height: 2px;
        background-color: #888888;
    }

    .divider span {
        font-size: 10px;
        margin: 0px 10px;
    }

    .signin-with-google {
        border-radius: 20px;
        padding: 8px 15px;
        background-color: white;
        border-color: #666666;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: black;
        width: 200px;
        height: 30px;
        margin: 10px 0px;
        justify-content: center;
    }

    .signin-with-google img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
        
    }

    .button:hover {
        cursor: pointer;
    }

</style>