/* eslint-disable @next/next/no-img-element */
import { styles } from 'styles/styles.config'

const Timeline = () => {
    const getMonthsWorking = (month: number, year: number) => {
        const date = new Date()
        const currentMonth = date.getMonth() + 1
        const currentYear = date.getFullYear()
        return currentMonth - month + (currentYear - year) * 12 + 1
    }

    const timelines = [
        {
            title: 'Experience',
            list: [
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
            ],
        },
        {
            title: 'Studies',
            list: [
                {
                    title: 'Universitat Oberta de Catalunya',
                    time: 'Nov 21 - now',
                    position: 'Software Engineering',
                    url: 'bizaway.com',
                    months: 0,
                    type: 'Degree (unfinished)',
                },
                {
                    title: 'Vigo University',
                    time: 'Sep 21 - Nov 21',
                    position: 'Telecommunication Engineering',
                    url: 'bizaway.com',
                    months: 0,
                    type: 'Degree (unfinished)',
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
            ],
        },
    ]

    interface Timeline {
        title: string
        list: TimelineElement[]
    }

    interface TimelineElement {
        title: string
        time: string
        position: string
        url: string
        months: number
        type: string
    }

    const Timeline = ({ timelines }: { timelines: Timeline[] }) =>
        timelines.map((timeline: any, idx_t: number) => (
            <div key={idx_t}>
                <h3 className='text-xl text-center my-5'>{timeline.title}</h3>
                <div className='flex flex-col items-center'>
                    <ul className={'border-l-4 border-teal-500 rounded-r-lg p-4 md:translate-x-[6rem] ' + styles.card}>
                        {timeline.list.map((element: any, idx_e: number) => (
                            <li key={idx_e} className='p-4 border-b-2 relative last:border-0'>
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
        ))

    return (
        <div className='container mx-auto mt-40 p-5'>
            <h2 className='text-2xl text-center my-5'>
                <i className='bi bi-bezier2'></i> Timeline
            </h2>
            <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />
            <div className='grid lg:grid-cols-2 mt-5'>
                <div>
                    <img src='/assets/svg/workalone.svg' className='opacity-90 mx-auto m-5 w-3/4' alt='' />
                </div>
                <Timeline timelines={timelines} />
                <div>
                    <img src='/assets/svg/study.svg' className='opacity-90 mx-auto m-5 w-3/4' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Timeline
