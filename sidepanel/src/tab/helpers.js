
import { createAdjacentTab, get, set } from "../utilities/chrome";

export const getResourceType = async (llm, resource) => {


    const prompt = `Analyze the following web page. Provide a hierarchical classification of the resource type, from most general to most specific. Stop when you can no longer confidently assign a more specific category. Format output as valid JSON: {"types": ["type", "subtype", "sub subtype", ...]}. Do no include explanations.

    Title: ${resource.title}
    URL: ${resource.url}

    Output:`;

    const response = await llm.claudeChatCompletion({ prompt });

    resource.types = JSON.parse(response).types;


    return resource;
};

export const getResourceProperties = async (llm, resource) => {
    if (!resource.types) resource.types = [];
    const prompt = `xtract any data that the user might find useful such as a product's price, ratings, categories, top reviews,  etc. Please output in valid json: {"property name 1": "value", "property name 2": "value"}. Use numeric values when applicable.  Do not include explainations. 

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

            function findLargestPlayingVideo() {
                const videos = Array.from(document.getElementsByTagName('video'));
                let largestVideo = null;
                let largestArea = 0;
              
                videos.forEach(video => {
                  if (!video.paused && !video.ended) {
                    const area = video.videoWidth * video.videoHeight;
                    if (area > largestArea) {
                      largestArea = area;
                      largestVideo = video;
                    }
                  }
                });
              
                if (largestVideo) {
                  return {
                    src: largestVideo.src,
                    width: largestVideo.videoWidth,
                    height: largestVideo.videoHeight,
                    currentTime: largestVideo.currentTime,
                    duration: largestVideo.duration
                  };
                } else {
                  return null;
                }
              }

            const video = findLargestPlayingVideo();
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

export const getTabDetails = async (llm, tab) => {
    const prompt = `You are an AI assistant within a web browser. Given the following tab's title, url and text content provide a description of the content, classify the resource as a product, article, video, etc., and provide a list of relevant tags.
    Format your response in valid JSON using the following structure:
    {
        "description": "description of tabs content",
        "type": "resource type, such as article, product, serp, etc.",
        "tags": ["tag 1", "tag 2", ...],
        "keywords": ["keyword 1", "keyword 2", ...],
        "rating": "any rating if data if provided. if absent omit this field",
        "price": "any price data if provided. if absent omit this field",
        "location": "any location data if provided. if absent omit this field",
    }

    Tab Title: ${tab.title}
    Tab URL: ${tab.url}
    Tab Content: 
    ${tab.content}

    Output (only valid JSON. do not include explanations):`;


    const response = await llm.claudeChatCompletion({ prompt, maxTokens: 4000 });


    const data = JSON.parse(response);
    tab = {...tab, ...data};
    return tab;
};



export const generateResourceType = async (llm, inputText) => {
    const prompt = `You are an AI assistant within a web browser. The user has inputed the following in the omnibox: "${inputText}".
    Generate a title, an appropriate emoji icon, and a brief description for this resource type. Then, develop a JSON schema that defines the resource's structure, including all relevant fields and their data types.
    Next, design an HTML interface that allows users to view and edit all the data points defined in the schema. Style this interface with CSS to ensure a clean, user-friendly appearance. The interface should be intuitive and responsive, suitable for both desktop and mobile use.
    Finally, implement JavaScript functionality that handles user interactions and data management. Include a function that communicates all changes in the resource's data to the parent window using the postMessage API. Ensure that the JavaScript code updates the interface in real-time as users modify the data.
    Provide the output in the following structure:
    {
        "title": "",
        "icon": "",
        "description": "",
        "schema": {},
        "html": "",
        "css": "",
        "js": ""
    }

    Output (Only output valid JSON. Do not include explanaitions.):`;

    console.log('creating resource');

    const response = await llm.claudeChatCompletion({ prompt, maxTokens: 4000 });


    let resource;
    try {
        resource = JSON.parse(response);
        resource.key = resource.title.replaceAll(' ', '-').toLowerCase();

        console.log('generated the following resource');
        console.log(resource);

        let resourceTypes = (await get('resoruceTypes')) ?? {};
        resourceTypes[resource.key] = resource;
        await set({ resourceTypes });
    } catch (e) {
        console.log('error:');
        console.log(e);
    }

    return resource;

}



export const openResourceType = async (resource) => {
    const tab = await createAdjacentTab({
        url: chrome.runtime.getURL('/resource/index.html') + '?type=' + resource.key,
    });
}
