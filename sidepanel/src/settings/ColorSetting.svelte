<!-- ColorSetting.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
  
    export let label;
    export let value;
  
    const dispatch = createEventDispatcher();
  
    function handleChange(event) {
      dispatch('change', event.target.value);
    }

    const onBlur = (e) => {
        dispatch('blur', e.target.value);
    };
  </script>
  
  <div class="color-setting">
    <span>{label}</span>
    <input type="color" {value} on:input={handleChange} on:blur={onBlur} />
    
  </div>
  
  <style>
    .color-setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .color-picker-wrapper {
      display: flex;
      align-items: center;
    }
  
    input[type="color"] {
        height: 20px;
      width: 40px;
      border: none;
      -webkit-appearance: none;
      overflow: hidden;
      cursor: pointer;
      padding: 0px;
      border-radius: 10px;
    }
  
    .color-value {
      margin-left: 10px;
      font-size: 0.9rem;
      color: #8e8e93;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
        border: none;
    }

    /* For Firefox */
    input[type="color"]::-moz-color-swatch {
        border: none;
    }
  </style>