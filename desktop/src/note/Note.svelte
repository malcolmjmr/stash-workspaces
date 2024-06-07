<script>
  import { createEventDispatcher, onMount } from "svelte";
  import NoteActions from "./NoteActions.svelte";
  import { text } from "svelte/internal";

    export let resource;

    let dispatch = createEventDispatcher();

    /* 

    */
    let needToSave;
    let loaded;
    onMount(() => {
        if (!resource.note) resource.note = { text: '' };
        loaded = true;
    })

    let selectedText = '';
    let history = [];
    let historyIndex;

    const onMouseUp = (e) => {
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        } else if (selectedText) {
            selectedText = null;
        }
    };

    let isInFocus;
    const onMouseEnter = (e) => {
        isInFocus = true;
        console.log(resource.width);
    };


    const onMouseLeave = (e) => {
        isInFocus = false;
        if (needToSave) {
            dispatch('saveResource', {resource});
            needToSave = false;
        }
    };

    let cursorPosition = 0;
    const onTextChanged = (e) => {
        if (!needToSave) needToSave = true;
        cursorPosition = textareaElement.selectionStart;
        resource.note.text = e.target.value.trim();
    };

    const onActionClicked = ({ detail }) => {
        
    };

    const onUpdateSelectedText = ({ detail }) => {

        console.log('generated text');
        console.log(detail);

        if (!historyIndex) historyIndex = 0;
        else historyIndex += 1;
        history.push(resource.note.text.toString());
        
        let textToInsert;

        selectedText = '';

        if (detail.selectedText && detail.selectedText != '') {
            if (detail.action.replace) {
                textToInsert = detail.generatedText;
            } else {
                textToInsert = detail.selectedText + detail.generatedText;
            }
            resource.note.text.replace(detail.selectedText, textToInsert);
        } else {
            if (detail.action.replace) {
                textToInsert = detail.generatedText;
            } else if (detail.generatedText.includes(resource.note.text)) {
                textToInsert = detail.generatedText;
            } else {
                textToInsert = resource.note.text + detail.generatedText;
            }

            resource.note.text = textToInsert;
        }

        

       
    };

    let commandKeyPressed;
    
    const onKeyDown = (e) => {
        if (e.key == "Meta") {
            commandKeyPressed = true;
        } else if (e.key == "z" && commandKeyPressed) {
            resource.note.text = history[historyIndex];
            if (historyIndex > 0) {
                historyIndex -= 1;
            }
            
        }
        
    };

    const onKeyUp = (e) => {
        if (commandKeyPressed && e.key == "Meta") {
            commandKeyPressed = false;
        }
    };

    let displayedText = '';
    $: {

        if (!selectedText || selectedText == '') {
            let spacing = '';
            const lineSpacingLength = (resource.width / 10);
            for (let i = 0; i < lineSpacingLength; i++) spacing += ' ';
            for (let i = 0; i < 3; i++) spacing += '\n' + spacing;
            displayedText = resource.note.text + spacing;
            
            textareaElement?.setSelectionRange(cursorPosition, cursorPosition);
        }
        
    };

    let textareaElement;
    
</script>

{#if loaded}
<div 
    class="note" 
    id={resource.id} 
    on:mouseenter={onMouseEnter} 
    on:mouseleave={onMouseLeave} 
    on:keydown={onKeyDown}
    on:keyup={onKeyUp}
>
    <textarea bind:this={textareaElement} value={displayedText} on:mouseup={onMouseUp} on:keydown={onTextChanged}/> 
    {#if selectedText != ''}
        <NoteActions
            {selectedText}
            noteText={displayedText}
            {resource}
            on:actionClicked={onActionClicked}
            on:updateSelectedText={onUpdateSelectedText}

        />
    {/if}
</div>
{/if}

<style>
    .note { 
        height: 100%;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        background-color: #222222;
    }

    textarea {
        padding: 8px;
        height: calc(100% - 16px);
        width: calc(100% - 16px);
        color: white;
        border: none;
        background-color: #222222;
        resize: none;
        outline: none;
        border-radius: 0px 0px 8px 8px;
        overflow: scroll;
        line-height: 175%;
        letter-spacing: 1.5px;
    }



</style>