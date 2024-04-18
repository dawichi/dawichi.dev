function getMonthsWorking(month: number, year: number): string {
    const date = new Date()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()

    const totalMonths = currentMonth - month + (currentYear - year) * 12

    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    if (!years) return `${months} months`
    if (!months) return `${years} years`
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`
}

export interface TimelineDTO {
    title: string
    time: string
    position: string
    url: string
    months?: string
    type: string
}

export const experience: Array<TimelineDTO> = [
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
        months: '11 months',
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
    {
        title: 'as waiter, storekeeper...',
        time: '2017 - 2019',
        position: 'Summer non-tech jobs',
        url: '',
        type: '',
    },
]

export const studies: Array<TimelineDTO> = [
    {
        title: 'Universitat Oberta de Catalunya',
        time: 'Sep 21 - Jun 22',
        position: 'Software Engineering',
        url: 'bizaway.com',
        type: 'Degree (dropped out)',
    },
    {
        title: 'IES Armando Cotarelo Valledor',
        time: '2017 - 2020',
        position: 'Computer Systems Administration',
        url: 'bizaway.com',
        type: 'Technician',
    },
    {
        title: 'IES Castro Alobre',
        time: '2015 - 2017',
        position: 'European baccalaureate',
        url: 'bizaway.com',
        type: '',
    },
]
