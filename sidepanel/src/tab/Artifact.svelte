<script>

    export let artifact;

    
    let iframe;
    const onIframeCreated = (e) => {
        injectContentIntoIframe();
        addIframeListeners();
    };


    function injectContentIntoIframe() {
        if (!iframe) {
            console.error('Could not find iframe');
            return;
        }

        // Get the iframe's document
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;


        // Create a base HTML structurelet 
        let html = `
            <!DOCTYPE html>
            <html>
                <head><style>${artifact.css}</style></head>
                <body>${artifact.html}<script>${artifact.js}<script></body>
            </html>
        `;

        // Write the content to the iframe
        iframeDoc.open();
        iframeDoc.write(html);
        iframeDoc.close();
    };

    const addIframeListeners = () => {

    }; 
    


</script>

<div class="artifact">
    {#if artifact.text && artifact.text.length > 0}
    <div class="text content">
        {artifact.text}
    </div>
    {:else if artifact.html && artifact.html.length > 0}
        <iframe class="content" bind:this={iframe} on:load={onIframeCreated} title=""/>
    {/if}
</div>

<style>
    .artifact {
        padding: 8px;
    }

    .text.content {
        font-size: 14px;
    }

    .content {
        height: 100%;
        width: 100%;
    }
</style>