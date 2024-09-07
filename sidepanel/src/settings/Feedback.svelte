<script>
    import MenuItem from "../components/MenuItem.svelte";
    import SectionContainer from "../components/SectionContainer.svelte";
    import bugIcon from "../icons/bug.png";
    import featureIcon from "../icons/new-feature.png";
    import { createAdjacentTab } from "../utilities/chrome";

</script>

<SectionContainer title="Feedback" canCollapse={false}>
    <div class="container" slot="main">
        <MenuItem
            icon={featureIcon}
            title="Request Feature"
            onClick={() => createAdjacentTab({url: "https://docs.google.com/forms/d/e/1FAIpQLSdLZCqil9YIDLXFSZoQGdpque4-tzLjL1cpoHCIR54ZJuu97A/viewform?usp=sf_link"})}
        />
        <MenuItem
            icon={bugIcon}
            title="Report Bug"
            onClick={() => createAdjacentTab({url: "https://docs.google.com/forms/d/e/1FAIpQLSd1mztaIj3bvp0HvqMIbw1G0d_OXmbLYVRMqD8bsv-07WNt3g/viewform?usp=sf_link"})}
        />
    </div>
</SectionContainer>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
</style>