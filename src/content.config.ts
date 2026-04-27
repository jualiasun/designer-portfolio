import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: ({ image }) =>
    z.object({
      preview: z.object({
        order: z.number(),
        image: image(),
        category: z.string(),
        client: z.string(),
        title: z.string(),
        align: z.enum(['left', 'right', 'indented-left', 'indented-right']),
        mt: z.string(),
        speed: z.number(),
      }),
    }),
})

export const collections = { projects }
