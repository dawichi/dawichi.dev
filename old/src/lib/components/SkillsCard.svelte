<script lang="ts">
    import { styles } from '$lib/config/styles'

    export let title: string
    export let titleIcon: string
    export let paragraphs: Array<string>
    export let technologies: Array<string> = []
</script>

<aside class="rounded p-5 {styles.card} border-l-4 border-teal-500">
    <h3 class="text-xl pb-4">
        <i class='bi {titleIcon}' />&nbsp; {title}
    </h3>

    {#each paragraphs as paragraph}
        <p class="pb-4">{paragraph}</p>
    {/each}

    <p class="flex gap-2">
        {#each technologies as tech}
            <i class="text-2xl devicon-{tech}-plain"></i>
        {/each}
    </p>
</aside>