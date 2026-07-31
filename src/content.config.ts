import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const serviziCollection = defineCollection({
 
  loader: glob({ pattern: "**/*.md", base: "./src/content/servizi" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'servizi': serviziCollection,
};