<script>
  import { createEventDispatcher, onMount } from "svelte";
  import WorkspaceListItem from "./WorkspaceListItem.svelte";

    export let user = null;
    export let db = null;
    export let workspaces;
    export let onShowMore = null;
    export let sortBy = 'updated';

    let dispatch = createEventDispatcher();

    let loaded;
    onMount(() => {
        getTimeSections();
        loaded = true;
    });

    $: {
        workspaces;
        getTimeSections();
    }

    let sections = [];

    const getTimeSections = () => {
        workspaces.sort((b, a) => a[sortBy] - b[sortBy]);
        let sectionMap = {};
        const now = Date.now();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for (let space of workspaces) {
            const date = new Date(space[sortBy] ?? space.created);
            const timeDelta = now - (space[sortBy] ?? space.created);
            const oneDay = 1000 * 60 * 60 * 24;
            
            if (timeDelta < oneDay && date.day == now.day) {
                if (sectionMap[TimeDeltaStrings.today] == null) {
                    sectionMap[TimeDeltaStrings.today] = new Section(TimeDeltaStrings.today, date);
                }
                sectionMap[TimeDeltaStrings.today].spaces.push(space);
            } else if (timeDelta < (2 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.yesterday] == null) {
                    sectionMap[TimeDeltaStrings.yesterday] = new Section(TimeDeltaStrings.yesterday, date);
                }
                sectionMap[TimeDeltaStrings.yesterday].spaces.push(space);
            } else if (timeDelta < (2 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.previous7Days] == null) {
                    sectionMap[TimeDeltaStrings.previous7Days] = new Section(TimeDeltaStrings.previous7Days, date);
                }
                sectionMap[TimeDeltaStrings.previous7Days].spaces.push(space);
            } else if (timeDelta < (7 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.previous7Days] == null) {
                    sectionMap[TimeDeltaStrings.previous7Days] = new Section(TimeDeltaStrings.previous7Days, date);
                }
                sectionMap[TimeDeltaStrings.previous7Days].spaces.push(space);
            } else if (timeDelta < (30 * oneDay)) {
                if (sectionMap[TimeDeltaStrings.previous30Days] == null) {
                    sectionMap[TimeDeltaStrings.previous30Days] = new Section(TimeDeltaStrings.previous30Days, date);
                }
                sectionMap[TimeDeltaStrings.previous30Days].spaces.push(space);
            } else if (timeDelta < (365 * oneDay)) {
                const monthString = months[date.getMonth()];
                if (sectionMap[monthString] == null) {
                    sectionMap[monthString] = new Section(monthString, date);
                }
                sectionMap[monthString].spaces.push(space);
            }
        }
        sections = Object.values(sectionMap);
        sections.sort((a, b) => b.firstDate - a.firstDate);
    
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

</script>
{#if loaded}
<div class="sections">
    {#each sections as section, i}
        <div class="section">
            <div class="heading">
                <div class="title">
                    {section.title}
                </div>
                {#if i == sections.length - 1 && onShowMore}
                <div class="show-more" on:mousedown={() => onShowMore?.call()}>
                    Show More
                </div>
                {/if}
            </div>
            <div class="list">
                {#each section.spaces as workspace, j (workspace.id)}
                    <WorkspaceListItem 
                        {user} 
                        {db} 
                        bind:workspace={section.spaces[j]} 
                        on:permenantlyDeleteWorkspace 
                        on:dataUpdated
                    
                    />
                    {#if j < section.spaces.length - 1}
                        <div class="divider"/>
                    {/if}
                {/each}
                
            </div>
            
        </div>
    {/each}
</div>
{/if}

<style>
    .sections {
        display: flex;
        flex-direction: column;
        margin: 5px 0px;
    }


    .section {
        display: flex;
        flex-direction: column;
        margin: 5px 0px;
    }

    .section .heading {
        
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section .heading .title {
        font-size: 16px;
        font-weight: 400;
    }

    .section .heading .show-more {
        font-size: 12px;
        font-weight: 300;
        opacity: 0.7;
    }

    .section .heading .show-more:hover {
        cursor: pointer;
        opacity: 1;
    }

    .section .list {
        border-radius: 8px;
        background-color: #333333;
        display: flex;
        flex-direction: column;
        overflow: hidden;

    }

    .divider {
        height: 0.5px;
        background-color: #555555;
    }

</style>