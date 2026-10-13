import type { IconName } from '../components/Icon.astro'

export interface SkillCategory {
    label: string
    icon: IconName
    description: string
    tags: string[]
}

export const skills: SkillCategory[] = [
    {
        label: 'Languages',
        icon: 'code',
        description:
            'TypeScript is my daily driver. I reach for Python when data work calls for it, and Go or Rust when performance or concurrency matters.',
        tags: ['TypeScript', 'Python', 'Go', 'Rust'],
    },
    {
        label: 'Backend',
        icon: 'server',
        description:
            'TypeScript backends built with NestJS: REST and GraphQL APIs, relational and document databases, Redis for caching.',
        tags: ['NestJS', 'Node.js', 'Redis', 'MySQL', 'SQLite', 'MongoDB'],
    },
    {
        label: 'Frontend',
        icon: 'monitor',
        description:
            'Shipped in Angular, React, and Svelte across real products. Comfortable with complex state management and how data flows from server to client.',
        tags: ['Angular', 'React', 'Svelte', 'Vue', 'Next.js', 'Astro', 'React Native'],
    },
    {
        label: 'UI & Design',
        icon: 'palette',
        description:
            'I care about how software feels to use, from shipping component libraries to reworking full product flows. Have shipped UIs for multi-role products where no two user types work alike.',
        tags: ['CSS', 'Sass', 'Tailwind CSS', 'Responsive', 'Accessibility'],
    },
    {
        label: 'DevOps & Tools',
        icon: 'git-branch',
        description:
            'Automated pipelines with end-to-end test suites, containerized deployments, and cloud infrastructure on AWS and Azure. VPS setup and server configuration.',
        tags: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'Linux', 'AWS', 'Azure'],
    },
    {
        label: 'Team & Process',
        icon: 'users',
        description:
            'Fully remote since 2021, working async across timezones in teams from 3 to 30+ engineers.',
        tags: ['Remote-first', 'Async', 'Agile', 'Code review', 'Pair programming'],
    },
]
