/*
  src/content.config.ts — Content Collections configuration.

  LEARNING NOTES:
  ─────────────────────────────────────────────────────────────
  Content Collections are Astro's way of managing structured
  content (like blog posts). You define a SCHEMA for your
  frontmatter, and Astro validates it at build time with Zod.

  Benefits:
  - Type-safe frontmatter (TypeScript knows your fields)
  - Build-time validation (typos in dates get caught early)
  - Auto-generated types for imports
  - Markdown/MDX rendering built-in

  How it works:
  1. Define a collection here with a Zod schema
  2. Put your .md files in src/content/<collection-name>/
  3. Query them with getCollection() in your pages
  ─────────────────────────────────────────────────────────────
*/

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define the "blog" collection
const blog = defineCollection({
  // Tell Astro to load .md files from this directory
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),

  // Define the expected frontmatter shape using Zod
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(), // coerce converts strings like "2024-01-15" to Date objects
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// Export all collections
// You can add more collections later (e.g., "projects", "talks")
export const collections = { blog };
