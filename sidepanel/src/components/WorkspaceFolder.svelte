<script>

    import folderIcon from "../icons/folder-filled.svg";
    export let color = 'grey';
    export let size = 22;

</script>

<img 
    class="folder-icon filter-{color ?? 'grey'}" 
    style='height: {size}px; width: {size}px' 
    src={folderIcon} alt=''
/>

<style>


    .filter-grey {
        filter: invert(99%) sepia(1%) saturate(3961%) hue-rotate(180deg) brightness(94%) contrast(85%);
    }

    .filter-blue {
        filter: invert(69%) sepia(24%) saturate(1923%) hue-rotate(189deg) brightness(104%) contrast(94%);
    }

    .filter-red {
        filter: invert(73%) sepia(26%) saturate(2500%) hue-rotate(308deg) brightness(103%) contrast(89%);
    }

    .filter-yellow {
        filter: invert(83%) sepia(43%) saturate(568%) hue-rotate(347deg) brightness(100%) contrast(97%);
    }

    .filter-green {
        filter: invert(86%) sepia(26%) saturate(534%) hue-rotate(76deg) brightness(83%) contrast(88%);
    }

    .filter-pink {
        filter: invert(88%) sepia(17%) saturate(5962%) hue-rotate(282deg) brightness(100%) contrast(89%);
    }

    .filter-purple {
        filter: invert(76%) sepia(57%) saturate(4247%) hue-rotate(217deg) brightness(99%) contrast(96%);
    }

    .filter-cyan {
        filter: invert(72%) sepia(78%) saturate(228%) hue-rotate(144deg) brightness(95%) contrast(94%);
    }

    .filter-orange {
        filter: invert(84%) sepia(19%) saturate(3322%) hue-rotate(314deg) brightness(111%) contrast(92%);
    }
</style>