// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: image(),
      alt: z.string()
    }),
    projectLink: z.object({
      href: z.string(),
      text: z.string(),
    }),
    githubLink: z.object({
      href: z.string(),
      text: z.string(),
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'projects': projectsCollection,
};