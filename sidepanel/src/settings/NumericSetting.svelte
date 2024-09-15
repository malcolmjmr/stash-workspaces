<script>
    import { createEventDispatcher } from 'svelte';
  
    export let label;
    export let value;
  
    const dispatch = createEventDispatcher();
  
    const onChange = (e) => {
      dispatch('change', parseFloat(e.target.value));
    }

    const onBlur = (e) => {
        dispatch('blur', parseFloat(e.target.value));
    }

</script>
  
<div class="numeric-setting">
    <span>{label}</span>
    <input type="number" {value} on:change={onChange} on:blur={onBlur}/>
</div>
  
<style>
    .numeric-setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    input[type="number"] {
      width: 60px;
      font-size: 1rem;
      text-align: right;
      background-color: transparent;
      color: white;
      border: none;
      outline: none;
    }
</style>