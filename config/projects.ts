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
        desc: 'Visualize your league of legends stats',
        tech: ['NextJS', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'dawichi.dev',
        image: 'https://raw.githubusercontent.com/Dawichi/dawichi.dev/master/public/assets/img/showcase/screenshot_dark.png',
        url: 'dawichi.dev',
        desc: 'This website! Explore its code on GitHub',
        tech: ['NextJS', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'Hexakill',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase2.png',
        url: 'hexakill',
        desc: 'Basic RPG game made with TypeScript',
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
        title: 'Cloud app',
        image: 'https://raw.githubusercontent.com/Dawichi/cloud-app/main/sample2.png',
        url: 'cloud-app',
        desc: 'React MERN cloud storage app',
        tech: ['JavaScript', 'Bootstrap', 'MongoDB', 'Docker'],
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