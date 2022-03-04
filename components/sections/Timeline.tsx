/* eslint-disable @next/next/no-img-element */
import { styles } from 'styles/styles.config'

const Timeline = () => {
    const getMonthsWorking = (month: number, year: number) => {
        const date = new Date()
        const currentMonth = date.getMonth() + 1
        const currentYear = date.getFullYear()
        return currentMonth - month + (currentYear - year) * 12 + 1
    }

    const experience_timeline = [
        {
            title: 'BizAway',
            time: 'Nov 21 - now',
            position: 'Backend Engineer',
            url: 'bizaway.com',
            months: getMonthsWorking(11, 2021),
            type: '',
        },
        {
            title: 'DosEspacios',
            time: 'Dec 20 - Nov 21',
            position: 'Junior Frontend Developer',
            url: 'dosespacios.com',
            months: 11,
            type: '',
        },
        {
            title: 'Nubodata',
            time: 'Sep 20 - Dec 20',
            position: 'Sysadmin internship',
            url: 'nubodata.com',
            months: 4,
            type: '',
        },
        {
            title: 'as waiter, storekeeper...',
            time: '2017 - 2019',
            position: 'Summer non-tech jobs',
            url: 'nubodata.com',
            months: 0,
            type: '',
        },
    ]

    const studies_timeline = [
        {
            title: 'Universitat Oberta de Catalunya',
            time: 'Nov 21 - now',
            position: 'Software Engineering',
            url: 'bizaway.com',
            months: 0,
            type: 'Degree (on progress)',
        },
        {
            title: 'Vigo University',
            time: 'Sep 21 - Nov 21',
            position: 'Telecommunication Engineering',
            url: 'bizaway.com',
            months: 0,
            type: 'Degree (dropped out)',
        },
        {
            title: 'IES Armando Cotarelo Valledor',
            time: '2017 - 2020',
            position: 'Computer Systems Administration',
            url: 'bizaway.com',
            months: 0,
            type: 'Technician',
        },
        {
            title: 'IES Castro Alobre',
            time: '2015 - 2017',
            position: 'European baccalaureate',
            url: 'bizaway.com',
            months: 0,
            type: '',
        },
    ]

    interface Timeline {
        title: string
        time: string
        position: string
        url: string
        months: number
        type: string
    }

    const TimelineList = ({ timeline, title }: { timeline: Timeline[]; title: string }) => (
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

    return (
        <div className='container mx-auto mt-40 p-5'>
            <h2 className='my-5 text-center text-2xl'>
                <i className='bi bi-bezier2'></i> Timeline
            </h2>
            <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />
            <div className='mt-5 grid lg:grid-cols-2'>
                <div>
                    <img src='/assets/svg/workalone.svg' className='m-5 mx-auto w-3/4 opacity-90' alt='' />
                </div>
                <TimelineList timeline={experience_timeline} title='Experience' />
                <TimelineList timeline={studies_timeline} title='Studies' />
                <div>
                    <img src='/assets/svg/study.svg' className='m-5 mx-auto w-3/4 opacity-90' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Timeline
