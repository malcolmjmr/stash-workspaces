<script>

  import { _settings } from "../stores";

</script>
<div class="setting-container" style="background-color: {$_settings?.appearance?.secondaryColor ?? '#333333'};">
    <slot />
</div>

<style>
    .setting-container {
        padding: 5px 8px ;
    }
</style>