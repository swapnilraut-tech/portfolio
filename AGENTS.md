<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Swapnil Raut Portfolio — Agent Rules & Engineering Standards

All AI coding assistants working in this project must strictly comply with the following rules:

---

## 1. Identity & Profile Information
- **Name:** Swapnil Raut
- **Specialization:** Full Stack & Cross-Platform Mobile Engineer
- **Core Stacks:**
  - Frontend: React.js, Next.js 16 (App Router, Turbopack, SSR, SSG), TypeScript, Tailwind CSS v4, Redux Toolkit, TanStack Query.
  - Mobile: React Native, Expo, NativeWind.
  - Backend & Databases: Node.js, Express.js, Frappe Framework, Python, REST APIs, MongoDB, MySQL, MariaDB.
  - Practices: Clean Architecture, Performance Optimization, Git/GitHub.
- **Location:** Solapur, Maharashtra, India.
- **Experience Highlights:** Hybrowlabs Technologies & skillians.
- **LinkedIn:** https://www.linkedin.com/in/swapnil12/
- **Email:** swapnilraut.dev@gmail.com

---

## 2. Brand Identity & Design System
- **Colors:**
  - Background: Obsidian / Midnight Dark (`#07090e`, `#0a0e17`) with blueprint dot-grid pattern.
  - Brand Accent: Electric Amber & Gold (`#f59e0b`, `#fbbf24`), matching Swapnil's LinkedIn identity.
  - Tech Highlights: Sky Blue (`#38bdf8`) & Emerald Green (`#10b981`).
- **Layout Rule (STRICT):**
  - **Single Unified Layout:** The site must follow a unified single-page layout:
    `Navbar` ➔ `Hero` ➔ `About` ➔ `Skills` ➔ `Experience` ➔ `Projects` ➔ `Contact` ➔ `Footer`.
  - Do NOT create fragmented sub-pages without explicit user confirmation.
- **Visual Effects:**
  - Glassmorphic panels (`.glass-panel`) with subtle amber border glows on hover (`.glass-panel-hover`).
  - Shimmer text animations (`.shimmer-text`) and pulsing live status badges (`#OpenToWork`).

---

## 3. Data Management (Single Source of Truth)
- **Central Data File:** `profile/data/portfolio-data.ts`
- **Rule:** Do NOT hardcode personal details, projects, skills, or work history inside individual TSX components.
- **Updating Projects:** When Swapnil shares project details, update `PORTFOLIO_DATA.projects` inside `portfolio-data.ts`. The UI cards, category filters, and preview links will update automatically.

---

## 4. Next.js 16 & React 19 Best Practices
- **Hydration Safety (Extension Attribute Mismatch):**
  - Always keep `suppressHydrationWarning` on `<html>`, `<body>`, `<button>`, and `<input>` elements. Password managers (Bitwarden, LastPass, etc.) inject `fdprocessedid` which triggers React hydration errors if this attribute is missing.
- **Prerendering Rules:**
  - Do not evaluate dynamic dates (e.g., `new Date().getFullYear()`) directly in Client Components during prerender.
- **Styling Standards:**
  - Use Tailwind CSS v4 via `@import "tailwindcss";` in `app/globals.css`.

---

## 5. Development & Environment Commands
- **Working Directory:** `e:\portfolio-site\profile`
- **Package Manager:** `pnpm`
- **Dev Server:** `pnpm dev` on `http://localhost:3000`. Do not start multiple parallel instances if already running.
- **Build Validation:** Run `pnpm run build` to verify compilation and TypeScript types before finishing tasks.
