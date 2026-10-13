// All values here are computed at build time. Rebuild the site to refresh them.

export const CAREER_START = new Date(2020, 8, 1)
export const CODING_START = new Date(2014, 0, 1)

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000

function yearsSince(start: Date, now = new Date()): number {
    return Math.floor((now.getTime() - start.getTime()) / MS_PER_YEAR)
}

export function yearsOfExperience(now = new Date()): number {
    return yearsSince(CAREER_START, now)
}

export function yearsCoding(now = new Date()): number {
    return yearsSince(CODING_START, now)
}

const monthFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

/** "Jun 2024 – present" */
export function formatPeriod(start: Date, end?: Date): string {
    return `${monthFormat.format(start)} – ${end ? monthFormat.format(end) : 'present'}`
}

/** "2024-06", for data attributes read by the browser. Avoids ISO strings, which shift with the timezone. */
export function monthKey(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export function fromMonthKey(key: string): Date {
    return new Date(Number(key.slice(0, 4)), Number(key.slice(5, 7)) - 1, 1)
}

/** Counts both the first and the last month, as LinkedIn does: "2 years 8 months" */
export function formatDuration(start: Date, end = new Date()): string {
    const months =
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1
    const years = Math.floor(months / 12)
    const rest = months % 12
    const parts = [
        years ? `${years} year${years === 1 ? '' : 's'}` : '',
        rest ? `${rest} month${rest === 1 ? '' : 's'}` : '',
    ]
    return parts.filter(Boolean).join(' ')
}

export type WorkMode = 'remote' | 'hybrid' | 'on-site'

export interface WorkItem {
    role: string
    company: string
    url: string
    location: string
    mode: WorkMode
    start: Date
    end?: Date
    bullets: string[]
}

export interface EducationItem {
    period: string
    degree: string
    institution: string
    note?: string
}

export const work: WorkItem[] = [
    {
        role: 'Software Engineer',
        company: 'Giunti Psy',
        url: 'https://giuntipsy.com',
        location: 'Madrid, Spain',
        mode: 'remote',
        start: new Date(2024, 5, 1),
        bullets: [
            'Working across a microservice architecture (20+ repositories), from backend services to Angular applications covering internal tooling, client portals, and patient-facing assessment',
            'Driving codebase modernization to TypeScript and composable Angular standalone components, improving both code health and UI/UX consistency across the product',
        ],
    },
    {
        role: 'Backend Engineer',
        company: 'BizAway',
        url: 'https://bizaway.com',
        location: 'Vigo, Spain',
        mode: 'remote',
        start: new Date(2021, 10, 1),
        end: new Date(2024, 5, 1),
        bullets: [
            'Progressive refactor of a legacy Express.js monolith, introducing modern TypeScript practices and Jest end-to-end tests for the booking flows',
            'Worked on live flight booking integrations at a B2B travel platform, handling fare reservations, seat selection, and more',
        ],
    },
    {
        role: 'Junior Frontend Developer',
        company: 'DosEspacios',
        url: 'https://dosespacios.com',
        location: 'Vilagarcía de Arousa, Spain',
        mode: 'hybrid',
        start: new Date(2020, 11, 1),
        end: new Date(2021, 10, 1),
        bullets: [
            'Delivered ~30 e-commerce stores (PrestaShop / WooCommerce) and 4 React Native apps for iOS and Android',
            'Built B2B tools with Next.js + NestJS: inventory dashboards, CRM systems, and client sites with custom WordPress plugins, including interactive maps',
        ],
    },
    {
        role: 'Sysadmin Internship',
        company: 'Nubodata',
        url: 'https://nubodata.com',
        location: 'Pontevedra, Spain',
        mode: 'on-site',
        start: new Date(2020, 8, 1),
        end: new Date(2020, 11, 1),
        bullets: [
            'Configured Zabbix to monitor company infrastructure (servers, DBs, routers) displayed live on an office TV',
            "Built a client WordPress e-commerce store and prototyped Nubodata's new public site in React",
        ],
    },
]

export const education: EducationItem[] = [
    {
        period: 'Sep 2021 – Jun 2022',
        degree: 'Software Engineering',
        institution: 'Universitat Oberta de Catalunya',
        note: 'Degree (incomplete)',
    },
    {
        period: '2017 – 2020',
        degree: 'Computer Systems Administration',
        institution: 'IES Armando Cotarelo Valledor',
        note: 'Technician',
    },
]
