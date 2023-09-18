<script lang="ts">
    import { projects } from '$lib/config/projects'
    import { styles } from '$lib/config/styles'

    const badgeColors: Record<string, string> = {
        JavaScript: 'bg-yellow-500',
        TypeScript: 'bg-blue-500',
        NextJS: 'bg-black',
        Bootstrap: 'bg-purple-500',
        Tailwindcss: 'bg-fuchsia-500',
        MongoDB: 'bg-green-500',
        Docker: 'bg-sky-500',
        'React Native': 'bg-cyan-500',
        NuxtJS: 'bg-teal-500',
        Redis: 'bg-red-500',
        NestJS: 'bg-red-600',
        SvelteKit: 'bg-orange-400',
        Astro: 'bg-gray-900',
    }
</script>

<div class="animate__animated animate__fadeIn animate__faster container mx-auto my-20 p-5">
    <h2 class="my-5 text-center text-2xl">
        <i class="bi bi-github" /> Open source projects
    </h2>
    <hr class="mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200" />
    <div class="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {#each projects as project}
            <a
                href={'https://github.com/Dawichi/' + project.url}
                target="_blank"
                class={'animate__animated animate__zoomIn animate__faster rounded-lg p-4 md:py-4 md:px-10 ' + styles.card}
                rel="noreferrer"
            >
                <h4 class="mb-5 text-center text-xl">
                    <i class="bi bi-folder" />
                    {project.title}
                </h4>
                <div class="flex flex-wrap justify-center">
                    {#each project.tech as tech}
                        <span class={'m-1 rounded py-1 px-2 text-white md:text-sm ' + badgeColors[tech]}>
                            {tech}
                        </span>
                    {/each}
                </div>
                <div class="relative my-5 mx-auto h-48 w-full overflow-hidden rounded sm:h-72 md:h-96 lg:h-56">
                    <img src={project.image} alt={project.title} />
                </div>
                <p>{project.desc}</p>
                <br />
            </a>
        {/each}
    </div>
</div>
