
<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { createId, get, set } from '../utilities/chrome.js';
    import { LLM } from '../utilities/llm.js';
    import submitIcon from "../icons/arrow-upwards.png";
  import Divider from '../components/Divider.svelte';
  import { _db, _settings, userData } from '../stores.js';
  import { promptWithTabContent, savePrompt, submitPrompt } from '../utilities/prompts.js'
  import { collection, doc, setDoc } from 'firebase/firestore';
  import { StorePaths } from '../utilities/storepaths.js';
  import { createResource } from '../utilities/firebase.js';

    

    let dispatch = createEventDispatcher();
  
    export let tab;
    export let workspace;

    let suggestedPrompts = [];
    let communityPrompts = [];
    let newPromptText = '';
  
    
    let content = '';
    let resource = tab.resource;

    let loaded;
    onMount(async () => {
      load();
    });

    let llm;

    const load = async () => {
        /*

            Make sure that user has scripting permission

            Get tab content

            Infer
            - Type
            - Properties
            - Summary
            - Suggested prompts

            onSuggestionClicked
            onSubmit
            onPromptResponse
         */

         getSuggestedPrompts();

         if (!resource) { 
            resource = createResource({
                url: tab.url,
                title: tab.title,
                favIconUrl: tab.favIconUrl,
                contexts: [workspace.id]
            });
         }


         await checkPermission();

         if (hasTabAccess) {
            llm = new LLM();
            resource.content = await getTabContent(tab);
            //await runInference();
         }

         loaded = true;

    };

    let hasTabAccess;

    const checkPermission = async () => {

        hasTabAccess = await chrome.permissions.contains({
            permissions: ["scripting"],
        });

        if (!hasTabAccess) {
            hasTabAccess = await chrome.permissions.request({
                permissions: ['scripting']
            });
        }
    
    };





    let isAnalyzingContent;



    const onSubmit = async ({prompt, save = false}) => {
        const text = await promptWithTabContent({ prompt: prompt, content: resource.content });
        if (!resource.articfacts) resource.articfacts = [];
        let artifact = {
            id: createId(),
            created: Date.now(),
            text,
        };
        resource.articfacts.push(artifact);

        // save resource
        if (save) {
            savePrompt({db: $_db,  text, resource}); 
        }
        tab.resource = resource;

        dispatch('artifactCreated', tab);
    };

    const saveResource = () => {
        resource.updated = Date.now();
        const ref = doc($_db, StorePaths.userResource(resource.id));
        setDoc(ref, resource, { merge: true });
    };

    const getSuggestedPrompts = async () => {
        if ($userData) {
            const promptQuery = collection($_db, StorePaths.userPrompts(user.id));
            // need shared prompts that match the active resource type 
            
            suggestedPrompts = (await getDocs(promptQuery)).docs.map((d) => d.data());
        } else {
            suggestedPrompts = Object.values((await get('prompts')) ?? {});
        }
        
    };

    
  </script>
  
  <div class="create-prompt">
    {#if suggestedPrompts.length > 0}
        <div class="suggestions">
            <h3>Suggested Prompts</h3>
            {#each suggestedPrompts as prompt}
                <div class="prompt" on:mousedown={() => submitPrompt({ prompt, content})}>{prompt.text}</div>
            {/each}
      </div>
      <Divider thickness={0.5}/>
    {/if}

    <div class="input-container">
        <textarea 
            bind:value={newPromptText} 
            placeholder="Enter your prompt here..."
            style="color: {$_settings?.appearance.primaryTextColor}"
        ></textarea>
        
        {#if newPromptText.length > 0}
        <div class="submit" on:mousedown={() => onSubmit({ prompt: newPromptText, save: true})}>
            <img src={submitIcon} alt="Submit"/>
        </div>
        {/if}
    </div>
    
  </div>
  
  <style>
    .create-prompt {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
    }

    .top-container {
        display: flex;
        height: 200px;
    }


    .input-container {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    
    textarea {
        width: 100%;
        flex-grow: 1;
        background-color: transparent;
        border: none;
        outline: none;
    }

    .submit {
       padding: 5px; 
    }

    .submit img {
        height: 24px;
        width: 24px;
        border-radius: 8px;
        filter: invert(1);
        background-color: orangered;
    }

    .submit img:hover {
        cursor: pointer;
    }


    .loading-message {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .suggestions {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

  </style>