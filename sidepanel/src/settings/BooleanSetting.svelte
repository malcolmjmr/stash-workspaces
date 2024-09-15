<script>
    import { createEventDispatcher } from 'svelte';
  
    export let label;
    export let value;
  
    const dispatch = createEventDispatcher();
  
    function handleChange(event) {
      dispatch('change', event.target.checked);
    }
</script>

<div class="boolean-setting">
    <span>{label}</span>
    <button class="toggle" class:active={value} on:click={handleChange}>
      <div class="toggle-slider"></div>
    </button>
</div>
  
<style>
    .boolean-setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .toggle {
      position: relative;
      width: 40px;
      height: 20px;
      border-radius: 15.5px;
      background-color: #e9e9ea;
      transition: background-color 0.2s;
      border: none;
      outline: none;
      cursor: pointer;
    }
  
    .toggle.active {
      background-color: #34c759;
    }
  
    .toggle-slider {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06);
      transition: transform 0.2s;
    }
  
    .toggle.active .toggle-slider {
      transform: translateX(20px);
    }
  </style>