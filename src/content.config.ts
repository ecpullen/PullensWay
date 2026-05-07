import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string()
  })
});

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    region: z.string(),
    bestFor: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    mapLabel: z.string(),
    mapUrl: z.string().url()
  })
});

export const collections = { pages, guides };
