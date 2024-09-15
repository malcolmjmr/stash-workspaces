<script>
  import { onMount } from "svelte";
  import { _settings } from "../stores";


    export let size = 20;
    export let src;
    export let icon;

    onMount(() => {
        if (icon) colorize();
    });

    const colorize = async () => {
        
    };

</script>

<img 
    alt="Icon",
    src={icon ?? src} 
    style="background-color: {$_settings?.appearance?.primaryColor}; color: {$_settings?.appearance?.primaryTextColor ?? 'white'};">