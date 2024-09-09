<script>
  import { onMount } from "svelte";
  import SectionContainer from "../components/SectionContainer.svelte";
  import { userData } from "../stores";
  import { set } from "../utilities/chrome";

    export let settings;

    let apiKeys = settings.apiKeys ?? {};

    onMount(() => {
        
    });

    const save = () => {

        console.log('saving');
        settings.apiKeys = apiKeys;
        console.log(settings);
        set({ settings });
    };

    /**
     gemini = AIzaSyA_wttHtCgkTmcJlBbo0yyYcSW24JwwMOY
     */

    
</script>
{#if $userData}
<SectionContainer title='API Keys'>
    <div class="container" slot="main">
        <select bind:value={apiKeys.default} on:change={save}>
            <option value="openAI">Open AI</option>
            <option value="anthropic">Anthropic</option>
            <option value="gemini">Gemini</option>
        </select>
        <input type="password" placeholder="Open AI" bind:value={apiKeys.openAI} on:blur={save}>
        <input type="password" placeholder="Anthropic" bind:value={apiKeys.anthropic} on:blur={save}>
        <input type="password" placeholder="Gemini" bind:value={apiKeys.gemini} on:blur={save} >
    </div>
   
</SectionContainer>
{/if}
<style>
    .container {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        color: white;
    }

    select {
        background-color: #333;
        height: 30px;
        color:white;
        outline: none;
        border: none;
    }

    input {
        background-color: #333;
        height: 30px;
        outline: none;
        border: none;
        color:white;
    }

</style>