interface Project {
    title: string
    image: string
    description: string
    tags: string[]
    year?: number
    github?: string
    live?: string
}

export const projects: Project[] = [
    {
        title: 'Hexastats',
        image: 'https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png',
        description: 'League of Legends stats visualization platform. NestJS backend fetching data from the Riot Games API, served to a SvelteKit frontend.',
        tags: ['NestJS', 'TypeScript', 'SvelteKit', 'REST API'],
        year: 2023,
        github: 'https://github.com/dawichi/hexastats',
    },
    {
        title: 'Hexakill',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase2.png',
        description: 'Turn-based RPG browser game with multiple character classes and a pool of randomized enemies with varying stats across combat rounds.',
        tags: ['Next.js', 'TypeScript', 'Game Logic'],
        year: 2022,
        github: 'https://github.com/dawichi/hexakill',
        live: 'https://hexakill.vercel.app',
    },
    {
        title: 'Timeline Guess',
        image: 'https://raw.githubusercontent.com/Dawichi/timeline-guess/main/showcase.png',
        description: 'Browser game about sorting historical events into the correct chronological order. Fast and addictive.',
        tags: ['Astro', 'JavaScript'],
        year: 2023,
        github: 'https://github.com/dawichi/timeline-guess',
        live: 'https://timeline-guess.vercel.app',
    },
    {
        title: 'Hexakill CLI',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill-cli/main/showcase.png',
        description: 'Terminal version of Hexakill. Play the RPG game in your shell.',
        tags: ['TypeScript'],
        year: 2022,
        github: 'https://github.com/dawichi/hexakill-cli',
    },
]
