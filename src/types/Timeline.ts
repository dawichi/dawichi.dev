export interface TimelineDTO {
    title: string
    time: string
    position: string
    url: string
    months?: string
    startMonth?: number
    startYear?: number
    type: string
}

export const experience: Array<TimelineDTO> = [
    {
        title: 'Giunti Psy',
        time: 'Jun 24 - now',
        position: 'Software Engineer',
        url: 'giuntipsy.com',
        startMonth: 5,
        startYear: 2024,
        type: '',
    },
    {
        title: 'BizAway',
        time: 'Nov 21 - Jun 24',
        position: 'Backend Engineer',
        url: 'bizaway.com',
        months: '2 years 8 months',
        type: '',
    },
    {
        title: 'DosEspacios',
        time: 'Dec 20 - Nov 21',
        position: 'Junior Frontend Developer',
        url: 'dosespacios.com',
        months: '1 year',
        type: '',
    },
    {
        title: 'Nubodata',
        time: 'Sep 20 - Dec 20',
        position: 'Sysadmin internship',
        url: 'nubodata.com',
        months: '4 months',
        type: '',
    },
    // {
    //     title: 'as waiter, storekeeper...',
    //     time: '2017 - 2019',
    //     position: 'Summer non-tech jobs',
    //     url: '',
    //     type: '',
    // },
]

export const studies: Array<TimelineDTO> = [
    {
        title: 'Universitat Oberta de Catalunya',
        time: 'Sep 21 - Jun 22',
        position: 'Software Engineering',
        url: '',
        type: 'Degree (dropped out)',
    },
    {
        title: 'IES Armando Cotarelo Valledor',
        time: '2017 - 2020',
        position: 'Computer Systems Administration',
        url: '',
        type: 'Technician',
    },
    {
        title: 'IES Castro Alobre',
        time: '2015 - 2017',
        position: 'European baccalaureate',
        url: '',
        type: '',
    },
]
