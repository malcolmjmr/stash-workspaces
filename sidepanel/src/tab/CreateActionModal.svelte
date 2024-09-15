
<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { createId, get, set } from '../utilities/chrome.js';
    import { LLM } from '../../../desktop/src/services/llm.js';

    let dispatch = createEventDispatcher();
  
    export let tab;
    export let workspace;

    let suggestedPrompts = [];
    let communityPrompts = [];
    let newPromptText = '';
  
    
    let content = '';
    let resource = tab.resource ?? {};

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

         await checkPermission();

         if (hasTabAccess) {
            await getTabContent();
            llm = new LLM();
            await runInference();
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

   
    const getTabContent = async () => {
        content = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                return document.body.innerText;
            }
        });
        resource.text = content;
    };



    let isAnalyzingContent;
    const runInference = async () => {
        isAnalyzingContent = true;
        let prompt = `Analyze the following webpage content. Determine the content types, identify key properties, and suggest 3 relevant prompts for interacting with this content. Output your analysis as a JSON object with the following structure:
        {
            "type": ["type1", "type2",
            "properties": {
                "key1": "value1",
                "key2": "value2",
                ...
            },
            "suggestedPrompts": [
                {
                    "symbol": "emoji",
                    "text": "string",
                    "description": "string",
                },
                ...
            ]
        }

        Content types could include but are not limited to: article, product page, social media post, video, forum discussion, documentation, etc.
        Properties should include relevant information specific to the content type, such as author, publication date, product details, video duration, number of comments, etc.
        Suggested prompts should be relevant to the content and help users interact with or extract value from the page.

        Webpage content to analyze:
        ${content}`;

        const response = await llm.claudeChatCompletion({ prompt });
        const data = JSON.parse(response);
        suggestedPrompts = [...data.suggestedPrompts];
        delete data.suggestedPrompts;
        resource = {...resource, ...data}
        isAnalyzingContent = false;

    };

    const onPromptClicked = async (prompt) => {
        await savePrompt(prompt);
        await submitPrompt(prompt.text);
        
    };

    const savePrompt = async (prompt) => {
        prompt.lastUsed = Date.now();
        if (!prompt.useCount) prompt.useCount = 0;
        prompt.useCount += 1;

        // add resource types to prompt
        if (!prompt.types) prompt.types = [];
        for (const type of resource.types ?? []) {
            if (!prompt.types.includes(type)) {
                prompt.types.push(type);
            }
        }

        let promptIsSaved;
        let prompts = (await get('prompts')) ?? {};
        if (prompts[prompt?.id]) {
            promptIsSaved = true;
        } else if (!prompt.id) {
            prompt.id = createId();
        }

        if (!promptIsSaved) {
            prompts[prompt.id] = prompt;
            await set({ prompts });
        }
    }

    const submitPrompt = async (promptText) => {
        const prompt = `You are an AI assistant embedded in a browser extension. You've been given a prompt related to the current webpage. Analyze the given prompt and the context of the current webpage. Then, generate either static or dynamic response that best addresses the prompt. Static responses include a text string, while dynamic responses include html, css, and js. Your response should be structured as a JSON object with the following format:

        {
            "type": "string", // Can be "static" or "dynamic"
            "text": "string", // Plain text response, if applicable
            "html": "string", // HTML content, if applicable
            "css": "string", // CSS content, if applicable
            "js": "string", // JavaScript content, if applicable
            "explanation": 'string' // A brief explanation of your response
        }

        Current webpage context:
        ${content}

        User prompt:
        ${promptText}

        Remember to tailor your response to the specific prompt and webpage context. Be creative and helpful in your response, but also ensure it's relevant and appropriate for the given context.`;

        const response = await llm.claudeChatCompletion({ prompt });
        const data = JSON.parse(response);
        if (!resource.articfacts) resource.articfacts = [];
        data.id = createId();
        data.created = Date.now();
        resource.articfacts.push(data);
        tab.resource = resource;

        dispatch('artifactCreated');


    };

    let inputText = '';
    const onSubmit = () => {
        submitPrompt(inputText);
    };
  
    async function handleCreatePrompt() {
      await createNewPrompt(newPromptText);
      // Close the prompt creator or show success message
    }
  
    function useExistingPrompt(prompt) {
      newPromptText = prompt.text;
    }

    const getSuggestedPrompts = (resourceType) => {

    };

    const createArtifact = (data) => {

    }
  </script>
  
  <div class="container">
    
    {#if isAnalyzingContent}
        <div class="loading-message">
            Analyzing content...
        </div>

    {:else}

        <div class="suggestions">
            <h3>Suggested Prompts</h3>
            {#each suggestedPrompts as prompt}
                <button on:click={() => useExistingPrompt(prompt)}>{prompt.text}</button>
            {/each}
      </div>
    {/if}
    
    
    


    <textarea bind:value={newPromptText} placeholder="Enter your prompt here..."></textarea>
    <button on:click={handleCreatePrompt}>Create Prompt</button>
  </div>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    textarea {
      width: 100%;
      height: 100px;
    }
    
    .suggestions, .community-prompts {
      margin-top: 1em;
    }
  </style>