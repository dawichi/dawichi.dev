import { getCollection, type CollectionEntry } from 'astro:content'

export type Project = CollectionEntry<'projects'>
export type ProjectStatus = Project['data']['status']
export type ProjectTier = Project['data']['tier']

const tierOrder: ProjectTier[] = ['flagship', 'side', 'experiment']

export const tierLabels: Record<ProjectTier, string> = {
    flagship: 'Flagship',
    side: 'Side projects',
    experiment: 'Small experiments',
}

export const tierDescriptions: Record<ProjectTier, string> = {
    flagship: 'My largest and longest-running projects, each with a case study.',
    side: 'Smaller products built over weeks or months, some still in development.',
    experiment: 'Quick games and tools, built to try out an idea or a technology.',
}

export async function getProjects(): Promise<Project[]> {
    const projects = await getCollection('projects')
    return projects.sort(
        (a, b) =>
            tierOrder.indexOf(a.data.tier) - tierOrder.indexOf(b.data.tier) ||
            a.data.order - b.data.order
    )
}

export async function getProjectsByTier(): Promise<{ tier: ProjectTier; projects: Project[] }[]> {
    const projects = await getProjects()
    return tierOrder.map((tier) => ({
        tier,
        projects: projects.filter((p) => p.data.tier === tier),
    }))
}

export function projectUrl(project: Project): string | undefined {
    return project.data.caseStudy ? `/projects/${project.id}` : undefined
}
