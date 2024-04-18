<script>
    import { experience, studies } from "$lib/types/Timeline"
    import TimelineBlock from "./TimelineBlock.svelte"
</script>

<div class='container mx-auto mt-40 p-5'>
    <h2 class='my-5 text-center text-2xl'>
        <i class='bi bi-bezier2'></i> Timeline
    </h2>
    <hr class='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />
    <div class='mt-5 grid lg:grid-cols-2'>
        <div>
            <img src='/assets/svg/workalone.svg' class='m-5 mx-auto w-3/4 opacity-90' alt='' />
        </div>
        <TimelineBlock timeline={experience} title='Experience' />
        <TimelineBlock timeline={studies} title='Studies' />
        <div>
            <img src='/assets/svg/study.svg' class='m-5 mx-auto w-3/4 opacity-90' alt='' />
        </div>
    </div>
</div>
