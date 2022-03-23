const getMonthsWorking = (month: number, year: number) => {
    const date = new Date()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    
    return currentMonth - month + (currentYear - year) * 12 + 1
}

export interface Timeline {
    title: string
    time: string
    position: string
    url: string
    months: number
    type: string
}

export const experience: Timeline[] = [
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
export const studies: Timeline[] = [
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