<script lang="ts">
    import { styles } from '$lib/config/styles'
    import type { TimelineDTO } from '$lib/types/Timeline'

    export let timeline: Array<TimelineDTO>
    export let title: string
</script>

<div>
    <h3 class="my-5 text-center text-xl">{title}</h3>
    <div class="flex flex-col items-center">
        <ul class="rounded-r-lg border-l-4 border-teal-500 p-4 md:translate-x-[6rem] {styles.card}">
            {#each timeline as item}
                <li class="relative border-b-2 p-4 last:border-0">
                    <span class="block md:absolute md:translate-x-[-12rem]">{item.time}</span>
                    <span>{item.type}</span>
                    <h5>{item.position}</h5>
                    {#if item.months}
                        <p>
                            <a class="text-teal-500" href="https://{item.url}" target="_blank" rel="noreferrer">
                                {item.title}
                            </a>
                            {item.months}
                        </p>
                    {:else}
                        <p>{item.title}</p>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</div>
