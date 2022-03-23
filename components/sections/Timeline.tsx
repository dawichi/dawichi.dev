/* eslint-disable @next/next/no-img-element */
import { experience, studies, TimelineType } from 'config'
import { styles } from 'styles/styles.config'

/**
 * Timeline structure for both 'studies' and 'experience' section
 */
const TimelineList = ({ timeline, title }: { timeline: TimelineType[]; title: string }) => (
    <div>
        <h3 className='my-5 text-center text-xl'>{title}</h3>
        <div className='flex flex-col items-center'>
            <ul className={'rounded-r-lg border-l-4 border-teal-500 p-4 md:translate-x-[6rem] ' + styles.card}>
                {timeline.map((element: any, idx_e: number) => (
                    <li key={idx_e} className='relative border-b-2 p-4 last:border-0'>
                        <span className='block md:absolute md:translate-x-[-12rem]'>{element.time}</span>
                        <span>{element.type}</span>
                        <h5>{element.position}</h5>
                        {element.months ? (
                            <p>
                                <a
                                    className='text-teal-500'
                                    href={'https://' + element.url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {element.title}
                                </a>{' '}
                                - {element.months} months
                            </p>
                        ) : (
                            <p>{element.title}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

const Timeline = () => (
    <div className='container mx-auto mt-40 p-5'>
        <h2 className='my-5 text-center text-2xl'>
            <i className='bi bi-bezier2'></i> Timeline
        </h2>
        <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />
        <div className='mt-5 grid lg:grid-cols-2'>
            <div>
                <img src='/assets/svg/workalone.svg' className='m-5 mx-auto w-3/4 opacity-90' alt='' />
            </div>
            <TimelineList timeline={experience} title='Experience' />
            <TimelineList timeline={studies} title='Studies' />
            <div>
                <img src='/assets/svg/study.svg' className='m-5 mx-auto w-3/4 opacity-90' alt='' />
            </div>
        </div>
    </div>
)

export default Timeline
