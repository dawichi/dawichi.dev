export interface Language {
    name: string
    level: string
    /** Rough self-assessment, shown as a bar. */
    progress: number
}

export const languages: Language[] = [
    { name: 'Spanish', level: 'Native', progress: 100 },
    { name: 'Galician', level: 'Native', progress: 100 },
    { name: 'English', level: 'Professional', progress: 90 },
    { name: 'German', level: 'Intermediate', progress: 45 },
]
