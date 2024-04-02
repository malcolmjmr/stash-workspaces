<script>

    export let side; 


    let dispatch = createEventDispatcher();
    
    let isInFocus;

    let cursor;


    const onMouseDown = () => {
        dispatch('startResize', sides);
    };

    const onMouseUp = () => {
        dispatch('stopResize')
    };


</script>
