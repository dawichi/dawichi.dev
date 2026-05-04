interface Project {
    title: string
    image: string
    url: string
    desc: string
    tech: string[]
    live?: string
}

export const projects: Project[] = [
    {
        title: 'Hexastats',
        image: 'https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png',
        url: 'hexastats',
        desc: 'League of Legends stats visualization platform. NestJS backend + SvelteKit frontend.',
        tech: ['NestJS', 'TypeScript', 'SvelteKit'],
    },
    {
        title: 'Hexakill',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase2.png',
        url: 'hexakill',
        desc: 'Turn-based RPG browser game with character classes and randomized enemies.',
        tech: ['Next.js', 'TypeScript'],
    },
    {
        title: 'Timeline Guess',
        image: 'https://raw.githubusercontent.com/Dawichi/timeline-guess/main/showcase.png',
        url: 'timeline-guess',
        desc: 'Browser game about sorting historical events in chronological order.',
        tech: ['Astro', 'JavaScript'],
    },
    {
        title: 'Blog',
        image: 'https://blog.dawichi.dev/images/showcase.png',
        url: 'blog',
        desc: 'Personal blog about software engineering. Built with Astro.',
        tech: ['Astro', 'TypeScript'],
        live: 'https://blog.dawichi.dev',
    },
    {
        title: 'Hexakill CLI',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill-cli/main/showcase.png',
        url: 'hexakill-cli',
        desc: 'Terminal version of Hexakill. Play the RPG game in your shell.',
        tech: ['TypeScript'],
    },
    {
        title: 'Gif Search',
        image: 'https://raw.githubusercontent.com/Dawichi/gif-search/main/public/showcase.png',
        url: 'gif-search',
        desc: 'GIF search app powered by the Giphy API.',
        tech: ['Next.js', 'TypeScript'],
    },
    {
        title: 'Map Markers',
        image: 'https://raw.githubusercontent.com/Dawichi/map-markers/main/showcase.jpg',
        url: 'map-markers',
        desc: 'Mobile app to drop and save custom markers on a map.',
        tech: ['React Native', 'TypeScript'],
    },
    {
        title: 'dawichi.dev',
        image: '/img/showcase/screenshot_dark.png',
        url: 'dawichi.dev',
        desc: 'This very website. Open source portfolio built with Astro and Tailwind CSS.',
        tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
    },
]
