<script>
    import SearchHeader from "./SearchHeader.svelte";
    import SearchResults from "./SearchResults.svelte";
    import SearchFooter from "./SearchFooter.svelte";
    import { slide } from "svelte/transition";
    import { horizontalSlide } from "../utilities/transitions";

    export let searchText;
    export let searchResults;
    export let showSearch;
</script>

<main transition:horizontalSlide={{ axis: "x", duration: 800 }}>
    <SearchHeader bind:searchText bind:showSearch />
    <SearchResults {searchText} {searchResults} />
    <SearchFooter {searchResults} />
</main>
