interface Section {
    title: string
    icon: string
    skills: {
        name: string
        percent: number
    }[]
}

export const skills_sections: Section[] = [
    {
        title: 'Basics',
        icon: 'bar-chart-fill',
        skills: [
            {
                name: 'HTML, CSS',
                percent: 95,
            },
            {
                name: 'JavaScript, TypeScript',
                percent: 95,
            },
            {
                name: 'Git, GitHub',
                percent: 90,
            },
            {
                name: 'BitBucket, Confluence, Jira',
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
            {
                name: 'Material, Mantine',
                percent: 70,
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
                percent: 70,
            },
            {
                name: 'Vue, NuxtJS',
                percent: 60,
            },
            {
                name: 'Vite, Solid',
                percent: 40,
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
                name: 'Python (Flask, Django)',
                percent: 75,
            },
            {
                name: 'MySQL, MongoDB, Redis',
                percent: 65,
            },
            {
                name: 'Docker, CI/CD',
                percent: 50,
            },
        ],
    },
]
