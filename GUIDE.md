# Astro Site — Learning Guide

A walkthrough of every file in this project so you can understand the patterns and replicate them.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [How Astro Works (Mental Model)](#2-how-astro-works-mental-model)
3. [Configuration — `astro.config.mjs`](#3-configuration--astroconfigmjs)
4. [Global Styles — `src/styles/global.css`](#4-global-styles--srcstylesglobalcss)
5. [Layouts — `src/layouts/BaseLayout.astro`](#5-layouts--srclayoutsbaselayoutastro)
6. [Components — `src/components/`](#6-components--srccomponents)
7. [Pages & Routing — `src/pages/`](#7-pages--routing--srcpages)
8. [Content Collections — Blog](#8-content-collections--blog)
9. [Static Assets — `public/`](#9-static-assets--public)
10. [Deployment — GitHub Actions](#10-deployment--github-actions)
11. [Common Tasks (Cheat Sheet)](#11-common-tasks-cheat-sheet)

---

## 1. Project Structure

```
gitoso-astro/
├── astro.config.mjs          # Astro configuration
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies & scripts
│
├── public/                    # Static assets (copied as-is to output)
│   ├── favicon.ico
│   ├── CNAME                  # Custom domain for GitHub Pages
│   ├── jaketz/                # Standalone sub-project (untouched)
│   ├── sue/                   # Standalone sub-project (untouched)
│   └── tazz/                  # Standalone sub-project (untouched)
│
├── src/
│   ├── styles/
│   │   └── global.css         # Design tokens & base reset
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell (wraps every page)
│   │
│   ├── components/
│   │   ├── Header.astro       # Navigation bar
│   │   ├── Footer.astro       # Site footer
│   │   └── SocialLinks.astro  # GitHub/LinkedIn icons
│   │
│   ├── pages/                 # File-based routing (each file = a URL)
│   │   ├── index.astro        # → /
│   │   ├── resume.astro       # → /resume/
│   │   ├── misc.astro         # → /misc/
│   │   └── blog/
│   │       ├── index.astro    # → /blog/
│   │       └── [slug].astro   # → /blog/:slug/ (dynamic route)
│   │
│   ├── content/
│   │   └── blog/
│   │       └── hello-astro.md # Blog post (Markdown)
│   │
│   └── content.config.ts      # Content collection schemas
│
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions deployment
│
└── dist/                      # Build output (gitignored)
```

---

## 2. How Astro Works (Mental Model)

### Build-time vs. Runtime

Astro is a **static site generator**. Everything happens at **build time**:

```
Source files (.astro, .md)  →  astro build  →  Plain HTML/CSS files
```

There is **no server** and **no JavaScript** sent to the browser (unless you explicitly add it). Your site is just HTML files served from a CDN.

### The Anatomy of an `.astro` File

Every `.astro` file has two parts:

```astro
---
// 1. FRONTMATTER (runs at build time)
//    - Import components
//    - Fetch data
//    - Define variables
//    - This is TypeScript/JavaScript

import MyComponent from '../components/MyComponent.astro';
const name = "Luigi";
---

<!-- 2. TEMPLATE (rendered to HTML) -->
<!-- Use {expressions} to embed build-time values -->
<h1>Hello, {name}!</h1>
<MyComponent />

<style>
  /* 3. SCOPED STYLES (optional) */
  /* Only applies to THIS component */
  h1 { color: blue; }
</style>
```

**Key insight**: The frontmatter runs on YOUR machine during `npm run build`. The browser never sees it. It only sees the resulting HTML.

---

## 3. Configuration — `astro.config.mjs`

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gitoso.zip",       // Your domain (used for sitemaps, canonical URLs)
  trailingSlash: "always",          // /blog/ instead of /blog
  output: "static",                 // Generate static HTML (the default)
});
```

This is intentionally minimal. You add integrations here when needed (e.g., `@astrojs/react` for React components, `@astrojs/tailwind` for Tailwind CSS).

---

## 4. Global Styles — `src/styles/global.css`

This file defines **CSS custom properties** (design tokens) and a minimal reset. It's imported once in `BaseLayout.astro` and applies everywhere.

**Why custom properties?** Changing `--color-accent: #2563eb` in one place updates the accent color across every component. No need for Sass, CSS-in-JS, or Tailwind — plain CSS is powerful enough for a minimalist site.

Key token groups:
- `--font-sans` / `--font-mono` — Typography
- `--text-*` — Font sizes (modular scale)
- `--space-*` — Spacing (consistent rhythm)
- `--color-*` — Colors (neutral palette + one accent)
- `--max-width` — Content width (680px for readability)

---

## 5. Layouts — `src/layouts/BaseLayout.astro`

A layout is just a component that wraps page content using `<slot />`:

```astro
---
import "../styles/global.css";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<html>
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <Header />
    <main>
      <slot />   <!-- Page content goes here -->
    </main>
    <Footer />
  </body>
</html>
```

**How `<slot />` works**: When a page does this:
```astro
<BaseLayout title="Home">
  <h1>Hello!</h1>
</BaseLayout>
```
The `<h1>Hello!</h1>` replaces the `<slot />` in the layout.

---

## 6. Components — `src/components/`

### Header.astro
- Renders the navigation bar
- Uses `Astro.url.pathname` to highlight the active link
- Uses `class:list` for conditional CSS classes

### Footer.astro
- Simple footer with copyright year and social links
- `new Date().getFullYear()` runs at build time — no JS in the browser

### SocialLinks.astro
- Renders SVG icons for GitHub and LinkedIn
- Uses `set:html` directive to embed raw SVG strings
- Icons are inline (no external icon library = faster loading)

### Creating a New Component

```astro
---
// src/components/MyThing.astro

// Props this component accepts
interface Props {
  label: string;
  count?: number;
}

const { label, count = 0 } = Astro.props;
---

<div class="thing">
  <span>{label}</span>
  <span>{count}</span>
</div>

<style>
  /* Scoped to this component only */
  .thing { display: flex; gap: 1rem; }
</style>
```

Use it:
```astro
<MyThing label="Hello" count={42} />
```

---

## 7. Pages & Routing — `src/pages/`

### Static Routes

| File                        | URL         |
|-----------------------------|-------------|
| `src/pages/index.astro`     | `/`         |
| `src/pages/resume.astro`    | `/resume/`  |
| `src/pages/misc.astro`      | `/misc/`    |
| `src/pages/blog/index.astro`| `/blog/`    |

The rule: **file path = URL path**. Nested folders create nested URLs.

### Dynamic Routes — `[slug].astro`

For pages where the URL depends on data (like blog posts), use square brackets:

```
src/pages/blog/[slug].astro  →  /blog/hello-astro/
                                 /blog/my-second-post/
                                 /blog/whatever-the-slug-is/
```

Since Astro generates static HTML, it needs to know ALL slugs at build time. That's what `getStaticPaths()` does:

```astro
---
export async function getStaticPaths() {
  const posts = await getCollection("blog");

  // Return one entry per page to generate
  return posts.map((post) => ({
    params: { slug: post.id },    // The [slug] value
    props: { post },              // Data passed to the page
  }));
}

const { post } = Astro.props;
---
```

---

## 8. Content Collections — Blog

This is Astro's most powerful feature for content sites. It gives you **type-safe Markdown**.

### Step 1: Define the schema (`src/content.config.ts`)

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

### Step 2: Write a post (`src/content/blog/my-post.md`)

```markdown
---
title: "My Post Title"
description: "A brief summary"
date: 2026-03-17
tags: ["security", "go"]
---

Your Markdown content here. **Bold**, *italic*, [links](https://...), etc.

## Subheading

- List item 1
- List item 2
```

The filename becomes the slug: `my-post.md` → `/blog/my-post/`

### Step 3: Query posts in pages

```astro
---
import { getCollection } from "astro:content";

const posts = (await getCollection("blog"))
  .filter((post) => !post.data.draft)    // Exclude drafts
  .sort((a, b) => b.data.date - a.data.date);  // Newest first
---
```

### Step 4: Render Markdown to HTML

```astro
---
import { render } from "astro:content";

const { Content } = await render(post);
---

<Content />  <!-- Renders the Markdown as HTML -->
```

### Adding a New Blog Post

Just create a new `.md` file in `src/content/blog/`. That's it. No config, no registration. Astro picks it up automatically.

---

## 9. Static Assets — `public/`

Files in `public/` are copied **as-is** to the build output. No processing.

- `public/favicon.ico` → `https://gitoso.zip/favicon.ico`
- `public/CNAME` → `https://gitoso.zip/CNAME`
- `public/sue/index.html` → `https://gitoso.zip/sue/index.html`

Use `public/` for:
- Favicons
- Files that shouldn't be processed (standalone sub-sites like jaketz, sue, tazz)
- robots.txt, CNAME, etc.

For images used in components, you can also put them in `src/assets/` to get Astro's image optimization, but `public/` is simpler for now.

---

## 10. Deployment — GitHub Actions

The workflow (`.github/workflows/deploy.yml`) runs on every push to `master`:

1. **Checkout** the code
2. **Install** Node.js and dependencies
3. **Build** with `npm run build` (generates `dist/`)
4. **Upload** the `dist/` folder as a GitHub Pages artifact
5. **Deploy** to GitHub Pages

### Setup (one-time)

In your GitHub repo settings:
1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `master` — the workflow handles the rest

---

## 11. Common Tasks (Cheat Sheet)

### Development

```bash
npm run dev        # Start dev server with hot reload (http://localhost:4321)
npm run build      # Build the site to dist/
npm run preview    # Preview the built site locally
```

### Add a new page

Create `src/pages/projects.astro`:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="Projects">
  <h1>Projects</h1>
  <p>Coming soon...</p>
</BaseLayout>
```
It's now live at `/projects/`. Don't forget to add it to the `navLinks` array in `Header.astro`.

### Add a new blog post

Create `src/content/blog/my-new-post.md`:
```markdown
---
title: "My New Post"
description: "What this post is about"
date: 2026-04-01
tags: ["topic"]
---

Content here...
```
It automatically shows up on `/blog/` and is accessible at `/blog/my-new-post/`.

### Add a new component

Create `src/components/Alert.astro`:
```astro
---
interface Props {
  type?: "info" | "warning" | "error";
}
const { type = "info" } = Astro.props;
---
<div class={`alert alert-${type}`}>
  <slot />
</div>

<style>
  .alert { padding: 1rem; border-radius: 6px; margin: 1rem 0; }
  .alert-info { background: #eff6ff; border: 1px solid #bfdbfe; }
  .alert-warning { background: #fffbeb; border: 1px solid #fde68a; }
  .alert-error { background: #fef2f2; border: 1px solid #fecaca; }
</style>
```

Use it in any page:
```astro
import Alert from "../components/Alert.astro";

<Alert type="warning">This is a warning!</Alert>
```

### Change the accent color

Edit one line in `src/styles/global.css`:
```css
--color-accent: #2563eb;  /* Change this to any color */
```

### Add a navigation link

Edit the `navLinks` array in `src/components/Header.astro`:
```ts
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  { href: "/resume/", label: "Resume" },
  { href: "/projects/", label: "Projects" },  // ← add this
  { href: "/misc/", label: "Misc" },
];
```

---

## Next Steps

- **Read the [Astro docs](https://docs.astro.build/)** — they're excellent
- **Try `npm run dev`** and edit files — hot reload is instant
- **Add a new blog post** to see the content collection in action
- **Explore integrations**: `npx astro add react` adds React support, `npx astro add tailwind` adds Tailwind CSS
