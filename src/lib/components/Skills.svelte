<script lang="ts">
    import { styles } from '$lib/config/styles'

    type SectionDefinition = {
        title: string
        icon: string
        skills: Array<{
            name: string
            percent: number
        }>
    }

    const sections: Array<SectionDefinition> = [
        {
            title: 'Basics',
            icon: 'bar-chart-fill',
            skills: [
                {
                    name: 'JavaScript, TypeScript',
                    percent: 98,
                },
                {
                    name: 'Git, GitHub',
                    percent: 90,
                },
                {
                    name: 'Atlassian Suite workflow',
                    percent: 85,
                },
            ],
        },
        {
            title: 'Styling',
            icon: 'brush-fill',
            skills: [
                {
                    name: 'SASS, LESS',
                    percent: 95,
                },
                {
                    name: 'PostCSS, Tailwind',
                    percent: 95,
                },
                {
                    name: 'Bootstrap, W3CSS',
                    percent: 90,
                },
            ],
        },
        {
            title: 'Front',
            icon: 'easel2-fill',
            skills: [
                {
                    name: 'React, React Native, NextJS',
                    percent: 95,
                },
                {
                    name: 'Svelte, SvelteKit',
                    percent: 85,
                },
                {
                    name: 'Vue, NuxtJS',
                    percent: 60,
                },
            ],
        },
        {
            title: 'Back',
            icon: 'hdd-rack-fill',
            skills: [
                {
                    name: 'Node, Express, Nest',
                    percent: 95,
                },
                {
                    name: 'MySQL, MongoDB, Redis',
                    percent: 85,
                },
                {
                    name: 'Docker, CI/CD',
                    percent: 80,
                },
                {
                    name: 'Python (Flask, Django)',
                    percent: 65,
                },
            ],
        },
    ]
</script>

<div>
    <div class="skew-y-6 bg-teal-500 p-10 text-center text-2xl text-white shadow shadow-teal-300 dark:bg-teal-800 dark:shadow-teal-500">
        <h3>
            Web development <br /> <i class="bi bi-code-slash" />
        </h3>
    </div>

    <div class="container mx-auto mt-20 px-5">
        <h2 class="my-5 text-2xl">
            <i class="bi bi-kanban" /> What I do
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {#each sections as section}
                <div class={'rounded p-5 ' + styles.card}>
                    <h3 class="text-xl">
                        <i class={'bi bi-' + section.icon} />&nbsp;{section.title}
                    </h3>
                    <hr />
                    <br />
                    {#each section.skills as skill}
                        <div>
                            <span>{skill.name}</span>
                            <div class="h-2 rounded bg-zinc-200 dark:bg-zinc-700">
                                <div class="h-2 rounded bg-teal-500" style="width: {skill.percent}%" />
                            </div>
                            <br />
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>
