# AP Devotion

Company portfolio website for **AP Devotion** — custom systems and web development for Malaysian SMEs.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP + ScrollTrigger, Lenis smooth scroll, Motion (framer-motion successor)
- **Icons:** Lucide React
- **Fonts:** Inter (body), Sora (headings)
- **Deploy target:** Cloudflare Pages

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main site — hero, services, process, projects, about, CTA |
| `/contact` | Contact form + WhatsApp link |
| `/showcase` | Interactive showcase — parallax, build sequence, horizontal scroll gallery |
| `/test` | Development playground for testing components |

## Key Features

- **Dark glassmorphism theme** — `#060b18` background, `#00d4ff` cyan accent, glass cards with `backdrop-filter`
- **Ambient gradient orbs** — fixed-position colored blobs that give `backdrop-filter` something to blur through
- **TiltCard component** — 3D mouse-tracking tilt, cursor spotlight, glowing glass border, underglow (zero React re-renders, uses refs + rAF + lerp)
- **Split hero** — left-aligned text + floating dashboard mockup with mouse parallax
- **Showcase build sequence** — scroll-pinned GSAP timeline that assembles a dashboard piece by piece
- **Horizontal scroll gallery** — mockup-dominant cards with real UI wireframes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

```bash
npm run build
# Upload the .next/standalone or use Cloudflare's Next.js integration
```

## Project Structure

```
src/
  app/
    (main)/           # Pages with navbar + footer
      page.tsx        # Home
      contact/        # Contact page
    showcase/         # Immersive showcase (no navbar/footer)
    test/             # Dev playground
    globals.css       # Theme, glass utilities, keyframes
    layout.tsx        # Root layout with fonts + ambient orbs
  components/
    Navbar.tsx        # Pill-style centered nav
    Footer.tsx        # Site footer
    TiltCard.tsx      # 3D tilt + spotlight + glass border
    GlassCard.tsx     # Simple glass card with intersection observer
    SectionHeading.tsx
    AmbientOrbs.tsx   # Fixed gradient orbs for glass effect
    sections/
      Hero.tsx        # Split layout hero with dashboard mockup
      Services.tsx    # Service cards with TiltCard
      Process.tsx     # Process steps with TiltCard
      Projects.tsx    # Featured + secondary project cards
      About.tsx       # Value proposition cards
      CTA.tsx         # Call to action section
```
