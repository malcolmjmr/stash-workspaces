//import { LLM } from "../../../desktop/src/services/llm";
import { doc, setDoc } from "firebase/firestore";
import { createId, get, set } from "./chrome";
import { StorePaths } from "./storepaths";

export const savePrompt = async ({text, prompt = {}, resource, db}) => {
    if (!prompt.text) {
        prompt.text = text;
        prompt.id = createId();
    }
    prompt.lastUsed = Date.now();
    if (!prompt.useCount) prompt.useCount = 0;
    prompt.useCount += 1;

    // add resource types to prompt
    if (!prompt.types) prompt.types = [];
    for (const type of resource?.types ?? []) {
        if (!prompt.types.includes(type)) {
            prompt.types.push(type);
        }
    }

    let prompts = (await get('prompts')) ?? {};
    prompts[prompt.id] = prompt;
    await set({ prompts });

    if (db) {
        const ref = doc(db, StorePaths.userPrompts(user.id, prompt.id));
        setDoc(ref, prompt, { merge: true });
    }

}


export const promptWithTabContent = async ({ content, prompt, prompts }) => {

    const fullPromptString = `You are an AI assistant within a web browser. Please provide an ouput according to the following web page and user prompt.

    Webpage content:
    ${content}

    User prompt:
    ${prompt}

    Output:`;

    const llm = new LLM();
    const response = await llm.claudeChatCompletion({ prompt: fullPromptString, maxTokens: 4096 });
    const data = JSON.parse(response);
    return data;

}

export const submitPrompt = async ({content, prompt, promptText, save = false}) => {

    const fullPromptString = `You are an AI assistant within a web browser. Given the below prompt and and web page, output eithe

    // name prompt, prompt icon
    {
        
        "text": "string",
        "html": "string",
        "css": "string", 
        "js": "string",
    }

    Webpage content:
    ${content}

    User prompt:
    ${prompt?.text ?? promptText}

    Output (only output valid json, be sure to escape any quotation marks within string values): 
    `;

    if (save) {
        savePrompt({
            text: promptText,
            resource,
        });
    }

    const llm = new LLM();
    const response = await llm.claudeChatCompletion({ prompt: fullPromptString, maxTokens: 4096 });
    const data = JSON.parse(response);
    return data;

};


const runInference = async () => {

    isAnalyzingContent = true;
    let prompt = `Analyze the following webpage content. Determine the content types, identify key properties, and suggest 3 relevant prompts for interacting with this content. Output your analysis as a JSON object with the following structure:
    {
        "type": ["type1", "type2"],
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
    Suggested prompts should be generally applicable to the specific content type. Do not include any explanaitions.

    Webpage content to analyze:
    ${content}
    
    Output:`;

    const response = await llm.claudeChatCompletion({ prompt });
    const data = JSON.parse(response);
    suggestedPrompts = [...data.suggestedPrompts];
    delete data.suggestedPrompts;
    resource = {...resource, ...data}
    isAnalyzingContent = false;

};