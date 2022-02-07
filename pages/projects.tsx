import Image from 'next/image'
import { styles } from 'styles/styles.config'

interface project {
    title: string
    image: string
    url: string
    desc: string
    tech: string[]
}

const Projects = () => (
    <div className='container mx-auto my-20 p-5 animate__animated animate__fadeIn animate__faster'>
        <h2 className='text-2xl text-center my-5'>
            <i className='bi bi-github'></i> Open source projects
        </h2>
        <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5'>
            {projects_list.map((project: project, idx_p: number) => (
                <a
                    key={idx_p}
                    href={'https://github.com/Dawichi/' + project.url}
                    target='_blank'
                    className={'py-4 px-10 rounded-lg animate__animated animate__zoomIn animate__faster ' + styles.card}
                    rel='noreferrer'
                >
                    <h4 className='text-center text-xl mb-5'>
                        <i className='bi bi-folder'></i> {project.title}
                    </h4>
                    <div className='flex justify-center'>
                        {project.tech.map((tech: string, idx_t: number) => (
                            <span key={idx_t} className={'m-1 p-1 rounded text-white ' + tint(tech)}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='relative rounded overflow-hidden my-5 w-full h-56 sm:h-72 md:h-96 lg:h-56 mx-auto'>
                        <Image src={project.image} alt={project.title} layout='fill' />
                    </div>
                    <p>{project.desc}</p>
                    <br />
                </a>
            ))}
        </div>
    </div>
)

export default Projects

const tint = (tech: string) => {
    interface colorsKeyOf {
        JavaScript: string
        TypeScript: string
        NextJS: string
        Bootstrap: string
        Tailwindcss: string
        MongoDB: string
        Docker: string
        'React Native': string
    }

    const colors = {
        JavaScript: 'bg-yellow-500',
        TypeScript: 'bg-blue-500',
        NextJS: 'bg-black',
        Bootstrap: 'bg-purple-500',
        Tailwindcss: 'bg-fuchsia-500',
        MongoDB: 'bg-green-500',
        Docker: 'bg-sky-500',
        'React Native': 'bg-cyan-500',
    }
    return colors[tech as keyof colorsKeyOf]
}

const projects_list: project[] = [
    {
        title: 'dawichi.dev',
        image: 'https://raw.githubusercontent.com/Dawichi/dawichi.dev/master/public/assets/img/screenshot_dark.png',
        url: 'dawichi.dev',
        desc: 'This website! Explore its code on GitHub',
        tech: ['NextJS', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'Hexastats',
        image: 'https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png',
        url: 'hexastats',
        desc: 'Custom graphs of stats from an online game',
        tech: ['NextJS', 'TypeScript', 'Tailwindcss'],
    },
    {
        title: 'Cloud app',
        image: 'https://raw.githubusercontent.com/Dawichi/cloud-app/main/sample2.png',
        url: 'cloud-app',
        desc: 'React MERN cloud storage app',
        tech: ['JavaScript', 'Bootstrap', 'MongoDB', 'Docker'],
    },
    {
        title: 'Hexakill',
        image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase.png',
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
