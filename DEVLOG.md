# Overnight Polish Sprint — DEVLOG

**Sprint window:** 2026-04-21 ~22:30 → 2026-04-22 ~06:00 ET
**Pitch:** 2026-04-22 11:00 AM Miami time
**Operator:** Claude Code (autonomous)
**Branch:** main (auto-deploys to https://istueta-pitch-kivo-ai.vercel.app)

---

## Baseline (start of sprint)

- Stack confirmed: Vite + React 18 + TS + Tailwind v3.4.17 + shadcn/ui. **Not Next.js.**
- `npm run build` passes (1.19s, 367kb gzip 114kb js bundle).
- `framer-motion` is **not** installed.
- Existing infrastructure already implements several of the planned tasks:
  - **Ken Burns zoom** already present as `.ken-burns` utility in `src/index.css:181-195`, wired into `HeroSection` at line 11. → Task 3 marked **N/A (already done)**.
  - **Scroll fade-in** already present as `Reveal` component at `src/components/site/Reveal.tsx`, wired into 18 sections via intersection-observer + `.reveal` CSS class. Duration 0.9s, ease `cubic-bezier(0.22,1,0.36,1)`. → Task 4 marked **N/A (already done with CSS, framer-motion not installed to reduce risk)**.
  - **Voice orb pulse + ring layers** already present via `.orb-pulse` + `.orb-ring` CSS, three layered rings with `animationDelay` staggering. → Task 5 reduced to caption-only tweak.
  - **Proposal SubNav** already exists at `src/components/proposal/SubNav.tsx` with scroll-spy. → Task 7 reduced to English-label tweaks.

### Files surveyed

- Entrypoint: `src/pages/Index.tsx` — tab switcher between Landing and Proposal.
- Navigation: `src/components/site/TopNav.tsx` — has EN/ES toggle + Spanish "Propuesta" tab label to fix.
- Footers: `src/components/landing/FooterLanding.tsx` (has address/license basics, needs completion), `src/components/proposal/FooterProposal.tsx` (has Spanish "Propuesta confidencial").
- Proposal sections have significant Spanish to translate: ProposalHero, PanoramaSection, EstadoActualSection, PlanSection, CapabilitiesSection (partial), InversionSection, FAQSection, ProximosSection, CasosSection, QuoteBlock callsite in Index.tsx.
- Landing is mostly English already — only minor fixes in Hero/VoiceOrb.

### Plan adjustments

- **Dropped framer-motion install** (Tasks 4, 9 adjusted) — existing CSS `Reveal` + fade-up keyframes suffice. Avoids new deps, bundle impact, and edge cases tonight.
- Task 9 (tab transition) will use CSS-only approach via `animate-fade-up` keyed to the tab state.

---

## Commit log (populated as sprint progresses)
