import Image from 'next/image'
import { styles } from 'styles/styles.config'
import { projects } from 'config'

const tint = (tech: string) => {
    const colors: Map<string, string> = new Map([
        ['JavaScript', 'bg-yellow-500'],
        ['TypeScript', 'bg-blue-500'],
        ['NextJS', 'bg-black'],
        ['Bootstrap', 'bg-purple-500'],
        ['Tailwindcss', 'bg-fuchsia-500'],
        ['MongoDB', 'bg-green-500'],
        ['Docker', 'bg-sky-500'],
        ['React Native', 'bg-cyan-500'],
    ])

    return colors.get(tech)
}


const Projects = () => (
    <div className='animate__animated animate__fadeIn animate__faster container mx-auto my-20 p-5'>
        <h2 className='my-5 text-center text-2xl'>
            <i className='bi bi-github'></i> Open source projects
        </h2>
        <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />
        <div className='mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3'>
            {projects.map((project, idx_p: number) => (
                <a
                    key={idx_p}
                    href={'https://github.com/Dawichi/' + project.url}
                    target='_blank'
                    className={'animate__animated animate__zoomIn animate__faster rounded-lg py-4 px-10 ' + styles.card}
                    rel='noreferrer'
                >
                    <h4 className='mb-5 text-center text-xl'>
                        <i className='bi bi-folder'></i> {project.title}
                    </h4>
                    <div className='flex flex-wrap justify-center'>
                        {project.tech.map((tech: string, idx_t: number) => (
                            <span key={idx_t} className={'m-1 rounded p-1 text-white ' + tint(tech)}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='relative my-5 mx-auto h-48 w-full overflow-hidden rounded sm:h-72 md:h-96 lg:h-56'>
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
