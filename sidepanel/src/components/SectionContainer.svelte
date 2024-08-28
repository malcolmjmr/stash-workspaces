<script>

  import { each } from "svelte/internal";

  export let title = "";
  export let items = [];

</script>
<div class="section">
    <div class="header">
        <div class="title">
            {title}
        </div>
        <slot name="trailing">
        </slot>
    </div>
    <div class="body">
       <slot name="body">

       </slot>
    </div>
</div>

<style>
    .section {
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        font-weight: 400;
        font-size: 18px;
    }

    .body {
        background-color: #333;
    }
</style>