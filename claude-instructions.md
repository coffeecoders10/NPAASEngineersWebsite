# Claude Instructions

Reference file for project conventions, architecture decisions, and ongoing context.

---

## Project Overview

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5, strict mode
- **UI:** Material UI (MUI) v7 + Emotion
- **Animation:** Framer Motion
- **Styling:** CSS Modules (no SCSS)

---

## Directory Structure

```
src/
  app/           # Next.js App Router pages and layouts
  components/    # React components
    sections/    # Page section components
  theme/         # MUI theme configuration
public/
  img/           # Static images
```

---

## Path Aliases

Configured in `tsconfig.json`. Next.js maps these automatically to webpack.

| Alias | Resolves to |
|-------|-------------|
| `@/*` | `src/*` |
| `@/components/*` | `src/components/*` |
| `@theme/*` | `src/theme/*` |

**Usage examples:**
```ts
import Navbar from '@/components/Navbar';
import SectionFadeIn from '@/components/SectionFadeIn';
import { theme } from '@theme/theme';
```

---

## Conventions

- Use path aliases over relative imports for all non-local imports
- Components go in `src/components/`, page sections in `src/components/sections/`
- Theme customization lives in `src/theme/theme.ts`

---

## Current Goal: Rebuild HighTechIT-1.0.0 in Next.js

Source template: `HighTechIT-1.0.0/` in project root.

### Sections (top to bottom)
| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Topbar | `Topbar.tsx` | not started |
| 2 | Navbar | `Navbar.tsx` | exists (needs rework) |
| 3 | Hero/Carousel | `Hero.tsx` | exists (needs carousel) |
| 4 | Facts/Stats | `sections/ProductNumbers.tsx` | exists (needs counter animation) |
| 5 | About | `sections/AboutUs.tsx` | exists (needs overlapping images) |
| 6 | Services | `sections/ServicesOffered.tsx` | exists (needs hover overlay) |
| 7 | Projects | `sections/Projects.tsx` | not started |
| 8 | Team | `sections/Team.tsx` | not started |
| 9 | Testimonials | `sections/Testimonials.tsx` | not started |
| 10 | Contact | `sections/Contact.tsx` | not started |
| 11 | Footer | `Footer.tsx` | not started |
| 12 | Back to Top | `BackToTop.tsx` | not started |

### Key library decisions
- **Scroll animations:** Framer Motion `whileInView` (replaces WOW.js)
- **Carousels:** Swiper.js or Embla (replaces Owl Carousel) — TBD
- **Counters:** Framer Motion `animate()` (replaces jQuery countTo)
- **Icons:** MUI Icons or react-icons (replaces Font Awesome)

### Teaching mode
User is learning Next.js. Guide with component needs and concepts. Only provide code if they're stuck.
