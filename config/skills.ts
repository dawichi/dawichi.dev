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
                name: 'Jira, Trello, Slack',
                percent: 95,
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
                name: 'Bootstrap, W3CSS',
                percent: 95,
            },
            {
                name: 'PostCSS, Tailwind',
                percent: 90,
            },
        ],
    },
    {
        title: 'Front',
        icon: 'easel2-fill',
        skills: [
            {
                name: 'React, React Native',
                percent: 95,
            },
            {
                name: 'NEXTjs, Gatsby, GraphQL',
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
                name: 'Node (Express)',
                percent: 95,
            },
            {
                name: 'Python (Flask, Django)',
                percent: 75,
            },
            {
                name: 'MongoDB, Mongoose',
                percent: 65,
            },
            {
                name: 'Linux services, Docker',
                percent: 50,
            },
        ],
    },
]
