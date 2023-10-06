<script>
  import { slide } from "svelte/transition";
  import { horizontalSlide } from "../utilities/transitions";

    export let resource;
    export let isOpen;
    export let workspace = null;

    let searchText = '';

</script>

<div class="move-resource" in:horizontalSlide out:horizontalSlide>
    <div class="search" >
        <input
            type="text"
            class="search-input"
            bind:value={searchText}
            on:blur={onTitleInputBlur}
            on:keydown={onInput}
            placeholder="Search or create..."
            autofocus="true"
        />
        <!--
        {#if autoCompleteSuggestion}
            <div class="auto-complete">
                {autoCompleteSuggestion.title}
            </div>
        {/if}
        -->
    </div>

    <div class="section">
        <div class="heading">
            
        </div>
        <div class="container">

        </div>
    </div>
</div>