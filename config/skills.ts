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
