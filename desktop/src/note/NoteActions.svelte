<script>
  import { createEventDispatcher } from "svelte";
 

    import { LLM } from "../services/llm";

    import { actions } from "./actions";

    export let noteText; 
    export let selectedText;

    let dispatch = createEventDispatcher();

    const onActionClicked = async (e, action) => {
        const selection = selectedText.trim();
        const tokenCountFromSelection = selectedText.length - selectedText.trimEnd().length;

        if (action.onClick) {
            action.onClick?.call(selection)
        } else if (action.prompt) {
            /*
                I want to take into consideration the larger note, the selected text,
            */
            let prompt = `
                I'm writing the following note:
                "${noteText.trim()}"
                ${selection && selection != ''
                ? 'I have selected the following text for you to attend to: \n"' + selection +'"'
                : ''
                }
                ${action.prompt}
            `;

            waitingForResponse = true;
            const generatedText = await (new LLM()).mistralChatCompletion({
                prompt,
                maxTokens: tokenCountFromSelection > 0 ? tokenCountFromSelection : action.maxTokens ?? 300,
            });

            dispatch('updateSelectedText', {action, generatedText, selectedText: selection, prompt });
            waitingForResponse = false;
        }
        
    };


    let selectedAction;
    let waitingForResponse;

</script>


<div class="container">

    {#if waitingForResponse}
    <div class="waiting-message">
        Processing...
    </div>
    {:else if selectedAction}
    <div class="selected-action">
        <div class="name">{selectedAction?.name}</div>
        <div class="description">{selectedAction?.description}</div>
    </div>
    {/if}
    <div class="actions">
        {#each actions as action}
            <div 
                class="action" 
                on:mousedown={(e) => onActionClicked(e, action)} 
                on:mouseenter={() => selectedAction = action}
                on:mouseleave={() => selectedAction = null}
            >
                <div class="symbol">
                    {action.emoji}
                </div>
            </div>
        {/each}
    </div>
</div>


<style>

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .action-name {
        
    }
    .actions {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        align-items: center;
        background-color: #222;
        border-top: 1px solid #555555;
        border-radius: 0px 0px 8px 8px;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none; 
    }

    .actions::-webkit-scrollbar {
        display: none;
    }

    .action {
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 8px;
        margin: 5px 15px;
        border-radius: 8px;
    }

    

    .action .symbol {
        font-size: large;
    }

    .action:hover {
        cursor: pointer;
        background-color: #333;
    }

    .selected-action {
        display: flex;
        flex-direction: column;
        color: white;
        border-top: 1px sold #555555;
        padding: 5px;
        margin-bottom: 5px;
    }

    .selected-action .name {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .selected-action .description {
        font-size: 12px;
    }

    .waiting-message {
        width: 100%;
        height: 30px;
        font-size: 20px;
    }
</style>