# PieCAD — public website

Marketing site for **PieCAD**, an autonomous AI engineering agent for mechanical engineering.

Live thesis: _Software has agents. Mechanical engineering still doesn't._

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (`@theme` design tokens in [`src/index.css`](src/index.css))
- No backend — fully static, deploys to Vercel

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint     # oxlint
npm run preview  # preview the production build
```

## Structure

```
src/
  components/    Layout, Nav, Reveal (scroll animation), DemoFrame, Icons
  content/       site.ts — single source of truth for links + founder info
  hooks/         useInView — IntersectionObserver scroll reveal
  sections/      One file per narrative section
  App.tsx        Assembled page
```

Page order is deliberately product-first:

Hero (+ demo) → What it does → The difference → Where it started → Where it goes → Founder → Footer.

## Adding a real demo

The product demo is a restrained, empty media frame — no fake CAD UI.
To embed a real recording, screenshot, or video, pass children to
[`DemoFrame`](src/components/DemoFrame.tsx):

```tsx
<DemoFrame>
  <video
    src="/demo.mp4"
    controls
    playsInline
    className="h-full w-full object-cover"
  />
</DemoFrame>
```

Both the hero and the "What it does" section render a `DemoFrame`, so a real
asset can be added in one place per section without layout changes.

## Content rules

Short, factual, product-first. This site deliberately contains **no fabricated**
customers, metrics, funding, pricing, logos, testimonials or capabilities.
Status is stated plainly as: working prototype · pre-revenue · seeking design
partners. Keep it that way.
