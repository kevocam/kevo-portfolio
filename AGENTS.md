# Agent Guidelines for Kevo Portfolio

## Project Overview

This is a personal portfolio website built with:
- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with CSS custom properties
- **Animations:** Framer Motion
- **UI Components:** Custom components (no component library)

## Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint with Next.js config
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Main page (SPA)
│   └── globals.css         # Global styles & CSS variables
├── components/             # React components
│   ├── ui/                # Reusable primitives (ScrollReveal, etc.)
│   ├── Header/             # Fixed header with scroll progress
│   ├── Hero/               # Landing section with animated intro
│   ├── About/              # Bio section with certifications
│   ├── Skills/             # Skills categories overview
│   ├── TechStack/          # Interactive skill bars with levels
│   ├── Projects/           # Project cards with metrics
│   ├── Experience/         # Work history timeline
│   ├── Contact/            # Contact form
│   └── Footer/             # Footer with particles animation
├── pages/                  # Pages Router (legacy, avoid)
└── public/                 # Static assets
    └── images/             # Project screenshots, PageSpeed images
```

## Code Style Guidelines

### TypeScript

- Use strict TypeScript; all components must be properly typed
- Define explicit interfaces for component props:

```typescript
interface ComponentProps {
  children: ReactNode
  className?: string
  delay?: number
}
```

- Use `ReactNode` for children, not `JSX.Element` or `React.ReactNode`
- Avoid `any` type; use `unknown` and type guard when necessary

### Components

- **Client Components:** All interactive components must include `'use client'` at the top
- **Naming:** PascalCase for component names (e.g., `HeroSection`, `ProjectCard`)
- **File naming:** Match component name (e.g., `Hero.tsx` → `Hero.module.css`)

### Imports

- Use `@/` path alias for imports from `src/`:
```typescript
import Header from '@/components/Header'      // Good
import Header from '../components/Header'      // Avoid
```

- Order imports:
1. React / Next.js built-ins
2. Third-party libraries
3. Internal imports (@/...)
4. CSS modules

### CSS & Styling

- **CSS Modules:** Use `.module.css` files co-located with components
- **Class naming:** Use camelCase in CSS, kebab-case in JSX:
```css
/* Header.module.css */
.headerContainer { }
.cardTitle { }
```

- **CSS Variables:** Define design tokens in `globals.css`:
```css
:root {
  --bg-primary: #0a0a0f;
  --accent: #6366f1;
  --border: rgba(255, 255, 255, 0.08);
}
```

- **Theme variables:** Define both dark and light themes:
```css
:root { /* Dark theme (default) */ }
.light-theme { /* Light theme overrides */ }
```

### Framer Motion

- Use `useInView` for scroll-triggered animations:
```typescript
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })
```

- Standard easing curve: `[0.25, 0.46, 0.45, 0.94]`
- Prefer `whileInView` for viewport-based animations over continuous animations

### Responsive Design

- Breakpoints: `768px` (tablet), `480px` (mobile)
- Use CSS media queries; prefer mobile-first approach
- Section padding: `6rem 2rem` desktop, `4rem 1.5rem` mobile

### Error Handling

- Use optional chaining (`?.`) for nested property access
- Provide fallback values for potentially undefined data
- Handle async operations gracefully with loading states

## Design System

### Color Palette

| Variable | Dark Mode | Light Mode |
|----------|-----------|------------|
| `--bg-primary` | `#0a0a0f` | `#f8fafc` |
| `--bg-secondary` | `#12121a` | `#ffffff` |
| `--bg-card` | `#1a1a24` | `#f1f5f9` |
| `--text-primary` | `#ffffff` | `#0f172a` |
| `--text-secondary` | `#a0a0b0` | `#64748b` |
| `--accent` | `#6366f1` | `#6366f1` |

### Typography

- Font: **Space Grotesk** (Google Fonts)
- Headings: `color: var(--text-primary)`, `font-weight: 600`
- Body: `color: var(--text-secondary)`, `line-height: 1.6`

### Animation Durations

- Micro-interactions: `0.2s`
- Element reveals: `0.7s`
- Page transitions: `0.3s`

## Best Practices

1. **SEO:** Use Next.js metadata API in `layout.tsx`
2. **Accessibility:** Always add `aria-label` to buttons and icon links
3. **Performance:** Use `next/image` for images (not plain `<img>`)
4. **Form handling:** Show loading and success/error states
5. **Cleanup:** Always remove event listeners in `useEffect` return functions
