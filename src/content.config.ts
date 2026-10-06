import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A post only needs a title and a date. Everything else is the Markdown body.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
