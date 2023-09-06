interface Project {
    title: string
    image: string
    url: string
    desc: string
    tech: string[]
}

export const projects: Project[] = [
    {
        title: 'Hexastats',
        image: 'https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png',
        url: 'hexastats',
        desc: 'League of Legends stats app',
        tech: ['NestJS', 'TypeScript', 'SvelteKit', 'Tailwindcss'],
    },
    {
        title: 'dawichi.dev',
        image: '/assets/img/showcase/screenshot_light.png',
        url: 'dawichi.dev',
        desc: 'This website! Explore its code on GitHub',
        tech: ['SvelteKit', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'Hexakill',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase2.png',
        url: 'hexakill',
        desc: 'RPG web game, handling animations',
        tech: ['NextJS', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'Hexakill CLI',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill-cli/main/showcase.png',
        url: 'hexakill-cli',
        desc: 'The terminal version of hexakill',
        tech: ['TypeScript'],
    },
    {
        title: 'Gif Search',
        image: 'https://raw.githubusercontent.com/Dawichi/gif-search/main/public/showcase.png',
        url: 'gif-search',
        desc: 'GIF search app, using the Giphy API',
        tech: ['NextJS', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'Map Markers',
        image: 'https://raw.githubusercontent.com/Dawichi/map-markers/main/showcase.jpg',
        url: 'map-markers',
        desc: 'Mobile app to store markers in a map',
        tech: ['React Native'],
    },
]
