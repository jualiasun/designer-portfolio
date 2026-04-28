import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const breakpoints = z.array(z.enum(['sm', 'md'])).default(['sm', 'md'])

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/data/projects' }),
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
      blocks: z
        .array(
          z.discriminatedUnion('type', [
            z.object({
              type: z.literal('media'),
              breakpoints,
              files: z.array(z.union([image(), z.string()])).min(1),
              padding: z
                .union([
                  z.enum(['none', 'default']),
                  z.object({
                    inline: z.string().optional(),
                    block: z.string().optional(),
                  }),
                ])
                .default('none'),
              aspect: z.string().optional(),
              overlayImage: image().optional(),
              playWithSound: z.boolean().default(false),
            }),
            z.object({
              type: z.literal('text'),
              breakpoints,
              title: z.string(),
              text: z.string(),
              variant: z.enum(['light', 'dark']).default('light'),
              padding: z.enum(['default', 'compact']).default('default'),
            }),
            z.object({
              type: z.literal('nbd-banner'),
              breakpoints,
              projectName: z.string(),
              team: z.array(z.string()),
            }),
          ]),
        )
        .optional(),
    }),
})

export const collections = { projects }
