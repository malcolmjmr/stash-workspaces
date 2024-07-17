<script>
    import { onMount } from "svelte";

    let iframeSource = '';

    let loaded;

    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Fullscreen Borderless Lined Note</title>
            <style>
                body, html {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    font-family: Arial, sans-serif;
                }
                .note {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: #fffae6;
                }
                .note-header {
                    background-color: #ffcc00;
                    color: #333;
                    padding: 10px;
                    font-weight: bold;
                    text-align: center;
                }
                .note-content {
                    flex-grow: 1;
                    position: relative;
                    overflow: hidden;
                }
                .lined-paper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding: 0;
                    margin: 0;
                    font-size: 16px;
                    line-height: 24px;
                    background-image:
                        linear-gradient(#fffae6 23px, #6699cc 24px);
                    background-size: 100% 24px;
                    background-attachment: local;
                    padding-left: 40px;
                    box-sizing: border-box;
                }
                .lined-paper::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    top: 0;
                    left: 30px;
                    bottom: 0;
                    border-left: 1px solid #db4034;
                }
            </style>
        </head>
        <body>
            <div class="note">
                <div class="note-header">My Note</div>
                <div class="note-content">
                    <textarea class="lined-paper" placeholder="Write your note here..."></textarea>
                </div>
            </div>
        </body>
        </html>
    `;

    onMount(() => {
        
        load();
    });

    const load = () => {
        
        const encodedHTML = encodeURIComponent(html);
        
        // Create the data URI
        const dataURI = `data:text/html;charset=utf-8,${encodedHTML}`;
        iframeSource = dataURI;

        loaded = true;
    };
</script>

<div class="container">
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe src={iframeSource} /> 
</div>

<style>
    .container {
        height: 400px;
    
        display: flex;

    }

    iframe {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
</style>

