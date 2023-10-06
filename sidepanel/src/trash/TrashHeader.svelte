<script>
  import { createEventDispatcher } from "svelte";
  import backIcon from "../icons/back.png";
  import trashIcon from "../icons/delete.png";

    let dispatch = createEventDispatcher();

    const goBack = () => {
        dispatch('goBack');
    };

    const emptyTrash = () => {
        dispatch('emptyTrash');
    }

</script>

<div class="header">
    <div class="top">
        <div class="back action end" on:mousedown={goBack}>
            <img src={backIcon} alt="Back"/> 
            <span>Back</span>
        </div>
        <div class="title">
            <img src={trashIcon} alt=""/>
            <span>Trash</span>
        </div>
        <div class="empty action end" on:mousedown={emptyTrash}> 
            Empty
        </div>
    </div>
    <div class="bottom">
        Item's in trash are removed after 30 days
    </div>
</div>

<style>
     .header {
        display: flex;
        flex-direction: column;
    }

    .header .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        
    }

    .header .top .end {
        width: 80px;
    }

    .title {
        font-size: 20px;
        font-weight: 500;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title img {
        height: 20px;
        width: 20px;
        margin-right: 3px;
        filter: invert(1)
    }

    .header .bottom {
       
        font-size: 12px;
        font-weight: 300;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 8px 15px 0px 10px;
        opacity: 0.6;

    }

    .action:hover {
        cursor: pointer;
    }

    .back.action {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .back img {
        height: 14px;
        width: 14px;
        filter: invert(1);
    }

    .empty {
        display: flex;
        flex-direction: row;
        justify-content: end;
        color: red;
    
    }
</style>