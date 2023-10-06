
import { colorMap } from "../utilities/colors";
import { StorePaths } from "../utilities/storepaths";
import { getContext, get, tryToGetBookmark, tryToGetBookmarkChildren, tryToGetBookmarkTree} from "../utilities/chrome";


import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  where,
  query
} from "firebase/firestore";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";


/**
 * 
 * @param {Object} params
 * @param {Object} params.user - User data
 * @param {Object} params.workspace - User workspace
 * @param {Object} params.group - Open group associated with workspace
 * @returns {} Object containing an array of the workspace's folders/ and resources 
 */

export async function getWorkspaceData({db, user, workspace, group}) {
    let directory = [];
    let workspaces = [];
    let resources = [];
    if (user) {
        console.log('fetching resources from the cloud');
        const resourcesQuery = query(
            collection(db, StorePaths.userResources(user.id)),
            where("contexts", "array-contains", workspace.id)
        );
        resources = (await getDocs(resourcesQuery)).docs.map((d) => d.data());
        const workspacesQuery = query(
            collection(db, StorePaths.userContexts(user.id)),
            where("contexts", "array-contains", workspace.id)
        );
        workspaces = (await getDocs(workspacesQuery)).docs.map((d) => d.data());
        
    } else if (workspace.folderId) {

        /*
            three scenarios
            - user wants an arc style space 
            - user wants an apple notes style space
                - user wants resources from subfolders to be surfaced
        */

        let tree = await tryToGetBookmarkTree(workspace.folderId);
        if (tree) {
            directory = tree[0];
        }

        // for ()
        // resources.map((resource) => {
        //     // add folder
        //     // update queued items 

        //     if (resource.title.startsWith('* ')) {
        //         resource.title = resource.title.replace('* ', '');
        //     }

        //     if (resource.parentId != workspace.folderId) {
                
        //     }

        //     return resource;
        // });
        
        // bookmarks = resources.filter((b) => b.url && !b.title.startsWith('* ') && !b.isQueued);
        // queue = resources.filter((b) => b.url && (b.title.startsWith('* ') || b.isQueued));
 
    }
    return {workspaces, resources, directory};
}