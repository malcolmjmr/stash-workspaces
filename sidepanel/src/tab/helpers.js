import { LLM } from "../../../desktop/src/services/llm";

export const getResourceType = async (llm, resource) => {


    const prompt = `Analyze the following web page title and URL. Provide a hierarchical classification of the resource type, from most general to most specific. Stop when you can no longer confidently assign a more specific category. Format output as valid JSON: {"types": ["type", "subtype", "sub subtype", ...]}. Do no include explanations.

    Title: ${resource.title}
    URL: ${resource.url}

    Output:`;

    const response = await llm.claudeChatCompletion({ prompt });

    resource.types = JSON.parse(response).types;


    return resource;
};

export const getResourceProperties = async (llm, resource) => {
    if (!resource.types) resource.types = [];
    const prompt = `Below are the title, url, and contents of a web page. Extract from the web page content, item properties and values, such as a product's price, rating, etc. Please output in valid json: {"property name 1": "value", "property name 2": "value"}. Use numeric values when applicable.  Do not include explainations. 

    Title: ${resource.title}
    URL: ${resource.url}
    Content:
    ${resource.content}
    
    Output:`;


    const response = await llm.claudeChatCompletion({ prompt });
    resource.properties = JSON.parse(response);

    return resource;
};

export const getTabContent = async (tab) => {

    if (!(await hasScriptingPermission())) return;

    const results = await chrome.scripting.executeScript({ 
        target: { tabId: tab.id },
        func: () => {
            return document.body.innerText;
        }
    });
    const content = results[0].result;

    return content;
};

const hasScriptingPermission = async () => {
    let granted; 
    const permissions = await chrome.permissions.getAll();
    if (!permissions.permissions.includes('scripting')) {
        // If we don't have the permission, request it
        granted = await chrome.permissions.request({
            permissions: ['scripting']
        });
        
        if (!granted) {
        console.log('Scripting permission was denied');
        // Inform the user that the feature is unavailable without this permission
        
        }
    } else {
        granted = true;
    }

    return granted;
}

export async function tryToOpenTabInPiP(tab) {
    // First, check if we have the scripting permission
    if (!(await hasScriptingPermission())) return;

    // If we have the permission (either already or just granted), proceed with PiP
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
        const video = document.querySelector('video');
        if (video) {
            if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
            } else if (document.pictureInPictureEnabled) {
            video.requestPictureInPicture();
            }
        } else {
            console.log('No video element found on this page');
        }
        }
    });

    tab.isInPiP = true;
    return tab;

}
