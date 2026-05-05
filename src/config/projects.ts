interface Project {
    title: string
    image: string
    description: string
    tags: string[]
    github?: string
    live?: string
}

export const projects: Project[] = [
    {
        title: 'Hexastats',
        image: 'https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png',
        description: 'League of Legends stats visualization platform. NestJS backend fetching data from the Riot Games API, served to a SvelteKit frontend.',
        tags: ['NestJS', 'TypeScript', 'SvelteKit', 'REST API'],
        github: 'https://github.com/dawichi/hexastats',
    },
    {
        title: 'Hexakill',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase2.png',
        description: 'Turn-based RPG browser game with multiple character classes and a pool of randomized enemies with varying stats across combat rounds.',
        tags: ['Next.js', 'TypeScript', 'Game Logic'],
        github: 'https://github.com/dawichi/hexakill',
        live: 'https://hexakill.vercel.app',
    },
    {
        title: 'Timeline Guess',
        image: 'https://raw.githubusercontent.com/Dawichi/timeline-guess/main/showcase.png',
        description: 'Browser game about sorting historical events into the correct chronological order. Fast and addictive.',
        tags: ['Astro', 'JavaScript'],
        github: 'https://github.com/dawichi/timeline-guess',
        live: 'https://timeline-guess.vercel.app',
    },
    {
        title: 'Blog',
        image: 'https://blog.dawichi.dev/images/showcase.png',
        description: 'Personal blog about software engineering, tools, and things I find interesting. Built with Astro.',
        tags: ['Astro', 'TypeScript'],
        github: 'https://github.com/dawichi/blog',
        live: 'https://blog.dawichi.dev',
    },
    {
        title: 'Hexakill CLI',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill-cli/main/showcase.png',
        description: 'Terminal version of Hexakill. Play the RPG game in your shell.',
        tags: ['TypeScript'],
        github: 'https://github.com/dawichi/hexakill-cli',
    },
    {
        title: 'Gif Search',
        image: 'https://raw.githubusercontent.com/Dawichi/gif-search/main/public/showcase.png',
        description: 'GIF search app powered by the Giphy API.',
        tags: ['Next.js', 'TypeScript'],
        github: 'https://github.com/dawichi/gif-search',
    },
    {
        title: 'Map Markers',
        image: 'https://raw.githubusercontent.com/Dawichi/map-markers/main/showcase.jpg',
        description: 'Mobile app to drop and save custom markers on a map.',
        tags: ['React Native', 'TypeScript'],
        github: 'https://github.com/dawichi/map-markers',
    },
    {
        title: 'dawichi.dev',
        image: '/img/showcase/screenshot_dark.png',
        description: 'This very website. Open source portfolio built with Astro and Tailwind CSS.',
        tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/dawichi/dawichi.dev',
    },
]
