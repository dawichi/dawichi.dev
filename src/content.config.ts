import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: ({ image }) =>
        z
            .object({
                title: z.string(),
                summary: z.string(),
                image: image().optional(),
                imageAlt: z.string().optional(),
                tags: z.array(z.string()).min(1),
                period: z.string(),
                status: z.enum(['beta', 'in-development', 'released', 'archived']),
                statusNote: z.string().optional(),
                tier: z.enum(['flagship', 'side', 'experiment']),
                /** Position within the tier, lowest first */
                order: z.number().int(),
                role: z.string().optional(),
                org: z.object({ name: z.string(), url: z.string().url() }).optional(),
                links: z
                    .array(
                        z.object({
                            label: z.string(),
                            url: z.string().url(),
                            kind: z.enum(['repo', 'site']),
                        })
                    )
                    .min(1),
                /** Renders the Markdown body at /projects/[id] */
                caseStudy: z.boolean().default(false),
            })
            .refine((p) => !p.image || p.imageAlt, {
                message: 'imageAlt is required when image is set',
                path: ['imageAlt'],
            }),
})

export const collections = { projects }
