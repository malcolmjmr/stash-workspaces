<script>
    import { createEventDispatcher } from "svelte";
    import MenuDivider from "../components/MenuDivider.svelte";
import GroupColors from "../group/GroupColors.svelte";
    import { colorMap } from "../utilities/colors";
    import { createContext, getContext, getPermissions, tryToGetWorkspaceFolder } from "../utilities/chrome";

    export let windowData;

    let dispatch = createEventDispatcher();

    let workspace = {title: '', color: 'grey'};

    const onSubmit = () => {
        // dispatch('submit', workspace)
        saveWorkspace();
    };

    const onColorSelected = ({ detail }) => {
        workspace.color = detail;
    };

    const saveWorkspace = async () => {
        
        workspace.tabs = [];
        let contexts = [];
        for (const tab of windowData.tabs) {
            if (tab.contextId) {
                if (!contexts.includes(tab.contextId)) {
                    contexts.push(tab.contextId)
                }
            } else {
                workspace.tabs.push(tab);
            }
        }

        if (contexts.length > 0) {
            const hasBookmarkPermission = await getPermissions();

            if (!hasBookmarkPermission) {
                const granted = await chrome.permissions.request({
                    permissions: ['bookmarks']
                });

                if (!granted) return;
            }
            
            const workspaceFolder = await tryToGetWorkspaceFolder(workspace, true);
            for (const contextId of contexts) {
                const context = await getContext(contextId);
                const folder = await tryToGetWorkspaceFolder(context, true);
                await chrome.bookmarks.move(folder.id, {
                    index: 0,
                    parentId: workspaceFolder.id
                });
            }
        }   

        await createContext(workspace);

        dispatch('workspaceSaved', workspace);

    }

</script>

<div class="save modal">
    <div class="container">
        <div class="title">
            <input 
                id="workspace-title"
                type="text"
                style="color: {colorMap[workspace?.color ?? 'grey']}"
                bind:value={workspace.title}
                placeholder="Enter name"
                autofocus="true"
            />
        </div>
       
        <div class="color-selection-container">
            <GroupColors group={workspace} on:colorSelected={onColorSelected}/>
        </div>
        
    </div>
    <MenuDivider/>
    <div 
        class="submit {workspace.title.length > 0 ? 'enabled' : 'disabled'}" 
        on:mousedown={onSubmit}
    >
        Save 
    </div>
</div>


<style>
    .save.modal {
        display: flex;
        flex-direction: column;
    }

    .title {
        padding: 5px;
        border-radius: 8px;
        background-color: black;
    }

    input {
        text-decoration: none;
        box-shadow: none;
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 1px;
        color: white;
    }

    input::placeholder {
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: white;
        font-weight: 100;
        font-size: 16px;
        opacity: 0.5;
        letter-spacing: 1px;
    }

    .container {
        margin: 10px;
    }

    .submit {
        opacity: 0.7;
        height: 30px;
    }

    .submit.enabled {
        opacity: 1;
    }

    .submit.enabled:hover {
        cursor: pointer;
    }

    .submit.disabled:hover {
        cursor:not-allowed;
    }
</style>
