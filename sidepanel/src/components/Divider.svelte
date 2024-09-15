<script>

  import { _settings } from "../stores";

  export let thickness = 1;
  export let invisible = false;

</script>
<div class="divider" style="background-color: {invisible ? 'transparent' : $_settings?.appearance?.borderColor ?? '#444'}; min-height: {thickness}px; max-height: {thickness}px;">

</div>

<style>
    .divider {
        width: 100%;
    }
</style>