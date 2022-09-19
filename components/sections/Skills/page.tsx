import { styles } from 'styles/styles.config'
import { sections } from './data'

const Skills = (): JSX.Element => (
    <div>
        <div
            className={
                'skew-y-6 bg-teal-500 bg-teal-500 p-10 text-center text-2xl text-white shadow-lg shadow shadow-teal-300 dark:bg-teal-800 dark:shadow-teal-500'
            }
        >
            <h3>
                Web development <br /> <i className='bi bi-code-slash'></i>
            </h3>
        </div>

        <div className='container mx-auto mt-20 px-5'>
            <h2 className='my-5 text-2xl'>
                <i className='bi bi-kanban'></i> What I do
            </h2>
            <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                {sections.map((section, idx) => (
                    <div key={idx} className={'rounded p-5 ' + styles.card}>
                        <h3 className='text-xl'>
                            <i className={'bi bi-' + section.icon}></i>&nbsp;{section.title}
                        </h3>
                        <hr />
                        <br />
                        {section.skills.map((skill, idx_skill) => (
                            <div key={idx_skill}>
                                <span>{skill.name}</span>
                                <div className='h-2 rounded bg-zinc-200 dark:bg-zinc-700'>
                                    <div
                                        className='h-2 rounded bg-teal-500'
                                        style={{ width: `${skill.percent}%` }}
                                    ></div>
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Skills
