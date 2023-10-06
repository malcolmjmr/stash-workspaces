<script>
    import { loadBundle } from "firebase/firestore";
    import { onMount } from "svelte";

    import backArrowIcon from "../icons/back.png";
    import SearchBox from "../components/SearchBox.svelte";
    import WorkspaceListItem from "../components/WorkspaceListItem.svelte";
    import { Views } from "../view";

    export let db = null;
    export let user = null;
    export let view;
    export let workspaces;

    onMount(() => {
        load();
    });


    const load = () => {
        visibleWorkspaces = [...workspaces];
        
    };

    let sections = [];

    const getTimeSections = () => {
        workspaces.sort((b, a) => b.updated - a.updated);
        let sectionMap = {};
        const now = Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for (let space of workspaces) {
            const date = new Date(space.updated);
            const timeDelta = now - space.updated;
            const oneDay = 1000 * 60 * 60 * 24;
            if (timeDelta < oneDay && date.day == now.day) {
                if (sectionMap[TimeDeltaStrings.today] == null) {
                    sectionMap[TimeDeltaStrings.today] = new Section(TimeDeltaStrings.today, date);
                }
                sectionMap[TimeDeltaStrings.today].spaces.add(space);
            } else if (timeDelta < (2 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.previous7Days] == null) {
                    sectionMap[TimeDeltaStrings.previous7Days] = new Section(TimeDeltaStrings.previous7Days, date);
                }
                sectionMap[TimeDeltaStrings.previous7Days].spaces.add(space);
            } else if (timeDelta < (7 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.previous7Days] == null) {
                    sectionMap[TimeDeltaStrings.previous7Days] = new Section(TimeDeltaStrings.previous7Days, date);
                }
                sectionMap[TimeDeltaStrings.previous7Days].spaces.add(space);
            } else if (timeDelta < (30 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.previous30Days] == null) {
                    sectionMap[TimeDeltaStrings.previous30Days] = new Section(TimeDeltaStrings.previous30Days, date);
                }
                sectionMap[TimeDeltaStrings.previous30Days].spaces.add(space);
            } else if (timeDelta < (365 * oneDay)) {
                const monthString = months[date.getMonth()];
                if (sectionMap[monthString] == null) {
                    sectionMap[monthString] = new Section(monthString, date);
                }
                sectionMap[monthString].spaces.add(space);
            }
        }
        sections = sectionMap.values.toList();
        sections.sort((a, b) => b.firstDate.compareTo(a.firstDate));
        
    }

    const TimeDeltaStrings = {
        today: 'Today',
        yesterday: 'Yesterday',
        previous7Days: 'Previous 7 Days',
        previous30Days: 'Previous 30 Days',

    };

    class Section {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }

        spaces = [];
    }

    let searchText = '';

    $: {
        searchText;
        updateVisibleWorkspaces();
    }
    let visibleWorkspaces = [];

    const updateVisibleWorkspaces = () => {
        const text = searchText.toLowerCase();
        visibleWorkspaces = workspaces.filter((w) => w.title?.toLowerCase().includes(text));
        visibleWorkspaces.sort((a, b) => (b.updated ?? 0) - (a.updated ?? 0));
    };

</script>

<div class="history">
    <div class="container">
        <div class="header">
            <div class="back-button" on:mousedown={() => view = Views.home}>
                <img alt="" src={backArrowIcon}/>
                <span> Back </span>
            </div>
            <div class="title">
                History
            </div>
            <div class="spacer">

            </div>
        </div>

        

        <SearchBox bind:searchText />

        <div class="section">
            {#each visibleWorkspaces as workspace}
                <WorkspaceListItem {user} {db} {workspace} />
            {/each}
        </div>
    </div>
</div>

<style>
    .history {
        display: flex;
        flex-direction: column;
    }

    

    .container {
        padding: 0px 10px;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0px;
    }

    .header .title {
        font-size: 23px;
        font-weight: 500;
    }

    .header .spacer {
        width: 70px;
    }

    .back-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70px;
    }

    .back-button:hover {
        cursor: pointer;
    }

    .back-button img {
        height: 15px;
        width: 15px;
        filter: invert(1);
    }



    .section {
        margin-top: 15px;
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: column;

    }
</style>