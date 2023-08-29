<script lang="ts">
    import { onMount } from 'svelte'

    const svgPath = '/assets/svg/map.svg'

    let svgContent: string = ''

    onMount(async () => {
        const response = await fetch(svgPath)
        svgContent = await response.text()
    })
</script>

<div class="mx-auto mt-40 max-w-5xl p-5">
    <h2 class="my-5 text-center text-2xl">
        <i class="bi bi-geo-fill" /> Discovering the world
    </h2>
    <hr class="mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200" />

    <p class="my-5 text-center">
        I dream of traveling and knowing as many countries as possible. I would love to live in different countries throughout my life. Luckily, in tech
        industry we have the ability to work remotely from where we want thanks to bleisure. What an amazing oportunity!
    </p>

    {@html svgContent}
</div>
