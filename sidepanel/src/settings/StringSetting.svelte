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
  
  <div class="string-setting">
    <span>{label}</span>
    <input type="text" {value} on:input={handleChange} on:blur={onBlur}/>
  </div>
  
  <style>
    .string-setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    input[type="text"] {
      width: 150px;
      font-size: 1rem;
      text-align: right;
      border: none;
      outline: none;
      background-color: #f2f2f7;
      padding: 5px 10px;
      border-radius: 5px;
    }
  </style>