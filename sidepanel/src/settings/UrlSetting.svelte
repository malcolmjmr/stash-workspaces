<!-- URLSetting.svelte -->
<script>

    import openLinkIcon from "../icons/open-in-new-window.png";
  import { createAdjacentTab } from "../utilities/chrome";
    export let label;
    export let url;
  
    function handleClick() {
      if (typeof window !== 'undefined') {
          createAdjacentTab({ url });
      }
    }
  </script>
  
  <div class="link" on:mousedown={handleClick} >
    <span class="label">{label}</span>
    <img class="icon" src={openLinkIcon} alt="Open Link"/>
  </div>
  
  <style>
    .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .link:hover {
        cursor: pointer;
    }
  
    .label {

    }
  
    img.icon {
        height: 20px;
        width: 20px;
        filter: invert(1);
    }
  </style>