# India Web Designs — Redesign PRD

**Stack:** Next.js (App Router) · **Status:** Draft v1 · **Owner:** Codemuji Digital Services

---

## 1\. Overview & Goals

Rebuild indiawebdesigns.in with a conversion-first hero: a chat/search-style input replaces the traditional "our services" hero, routes the visitor into a short branching questionnaire based on what they typed, and captures a qualified lead with an AI-generated client profile attached — instead of a generic contact form.

**Primary goal:** increase qualified-lead conversion rate from the homepage. **Secondary goal:** every lead arrives at the team pre-profiled (industry, need, budget signal, urgency) so follow-up is faster and better-targeted.

---

## 2\. Design Direction

Light, unique theme. Explicitly must **not** read as "AI-generated" — this rules out the current default aesthetics that AI tools cluster around: warm cream \+ terracotta serif, near-black \+ acid-green, or hairline-rule broadsheet layouts. None of those unless deliberately chosen for a reason specific to this brand.

Instead:

- **Palette:** a light, custom 4–6 color system worked out at design time — not the cream/terracotta default. Should feel considered and specific to IWD, not a template.  
- **Typography:** a deliberate display \+ body pairing, not the default sans-serif combo every SaaS site uses. Type should carry personality on its own.  
- **Signature element:** one memorable visual/interaction motif the page is remembered by (decide in design phase — could draw from the craft of building/weaving software, or something else specific to the brand; avoid generic gradients/blobs).  
- **Micro-interactions everywhere, but restrained:** hover states, button feedback, scroll-triggered reveals, card tilt/lift, cursor-aware effects — every interactive element should feel touched by a human hand, but the motion should serve the content, not decorate it. Over-animating is itself a tell of AI-generated design, so each micro-interaction needs a reason.  
- **Accessibility floor:** responsive to mobile, visible keyboard focus states, `prefers-reduced-motion` respected throughout.

This section is a brief for the design phase, not the final palette/type spec — that gets worked out (and critiqued against these constraints) in Phase 0 below.

---

## 3\. System Architecture (high level — Ponytail Mode)

[Hero Input / Card Click] → [Client-Side Matcher (0ms)] → category & target
                                         ↓
                       [Onboarding Modal: `<dialog>` 4 Qs]
                                         ↓
                     [POST /api/leads] → save raw answers to DB
                                         ↓
                       [Next.js `after()` background job] → Claude call & DB update
                                         ↓
                   [Thank You page with `wa.me` deep link]

- **Frontend:** Next.js App Router. Native CSS (`@starting-style`, transitions) and native `<dialog>` for modal flow. No Framer Motion bundle.
- **Classification & Routing:** 100% client-side. Card clicks give 100% confidence instantly (`0ms`). Typed inputs use an instant regex/keyword matcher across the 5 categories (`<1ms`). Zero API calls, zero latency, offline-capable, $0 cost.
- **AI Profile Generation:** Server-side via Next.js 15 `after()` inside the lead creation route (`POST /api/leads` / Server Action). Haiku-tier model enriches the lead without blocking the user response, then updates `leads.ai_profile` and fires team notifications with the full profile attached.
- **DB:** Relational Postgres (Supabase or Neon) via Drizzle ORM or raw SQL.
- **Notifications:** On lead submit, fire a webhook to Slack/Discord/Telegram and/or email to the team containing the enriched AI profile.

---

## Phase 0 — Design System Foundation & Setup

*Before any component code.*

- Initialize Next.js App Router (`create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`).
- Define the palette, type pairing, spacing scale, and the signature visual motif using CSS variables in `globals.css` per Section 2.
- Set up DB schema (`leads` table) and environment variables.
- Deliverable: Running Next.js app with core styling tokens (`globals.css`), typography, and DB connection ready.

## Phase 1 — Hero & AI Intake UI

- Central input, styled as a modern chat/search bar, with rotating placeholder examples.
- 5 Suggestion cards below (*Website, App, Custom Software, Digital Marketing, AI Automation*). Click → fills input with typewriter effect → auto-opens modal for that category (`0ms`).
- Manual typing + Enter immediately matches query to category via client-side regex/keyword engine and opens the modal (`<1ms`).
- **Acceptance:** Typing or clicking transitions smoothly into the onboarding modal in one interaction, no dead clicks, keyboard-navigable (`Tab` / `Enter`).

## Phase 2 — Client-Side Intent Engine

- Implement `classifyIntent(query: string): { category: Category, confidence: number }` purely on the client.
- Matches keywords for Website, App, Custom Software, Digital Marketing, and AI Automation.
- If ambiguous, default to a general category or prompt inside Q1.
- **Acceptance:** Zero network calls on input submission; instant routing across 10+ test queries.

## Phase 3 — Branching Onboarding Modal (`<dialog>`)

- Native HTML `<dialog>` element with smooth CSS `@starting-style` and backdrop fade. Focus trapped, keyboard (`ESC`) navigable out of the box.
- Category-specific question sets (3 content questions + 1 contact-capture question = 4 total):

| Category | Q1 | Q2 | Q3 | Q4 |
| :--- | :--- | :--- | :--- | :--- |
| **Website** | Business name & industry | Existing site? (y/n) | Timeline & budget range | Name + phone/WhatsApp/email |
| **App** | What's the app for & target user | Platform (iOS/Android/both) | Timeline & budget | Contact info |
| **Custom Software** | Process to solve/automate | Who uses it & rough user count | Timeline & budget | Contact info |
| **Digital Marketing** | Current marketing channels (if any) | Main goal (leads/sales/awareness) | Monthly budget range | Contact info |
| **AI Automation** | Task/process to automate | Tools currently in use (if any) | Timeline & budget | Contact info |

- **Acceptance:** Each category displays its 4 questions; back button retains answers; submitting on Q4 calls `POST /api/leads`.

## Phase 4 — Data Layer & AI Client Profile (`after()`)

- `leads` table schema: `id, created_at, initial_query, category, contact_name, contact_phone, contact_email, answers (jsonb), ai_profile (jsonb), status`.
- On submit to `POST /api/leads`:
  1. `INSERT` raw lead and return `{ success: true, id }` immediately (`~50ms`) so frontend redirects to Thank You page right away.
  2. Inside Next.js `after()`, call Claude Haiku (`~400ms`) to generate structured JSON profile (`industry, project_type, budget_signal, urgency, key_requirements, internal_notes`).
  3. `UPDATE leads SET ai_profile = ... WHERE id = ...`.
  4. Fire team notification webhook/email *with* the enriched AI notes.
- **Acceptance:** Lead saved immediately; `ai_profile` populated async; team alerted with full context.

## Phase 5 — Thank You Page & WhatsApp Deep Link

- Clean confirmation screen showing expected response window.
- Direct `https://wa.me/91XXXXXXXXXX?text=...` deep link button (`"Message us directly on WhatsApp"`). 1 line of HTML, highest conversion.
- Light case-study/portfolio cards to engage visitors while waiting.

## Phase 6 — Sticky / Floating Input Bar (`IntersectionObserver`)

- A single native `IntersectionObserver` tracks `#hero`.
- When `#hero` scrolls out of view, toggle a CSS class (`translate-y-0 opacity-100` vs `translate-y-20 opacity-0 pointer-events-none`) on a fixed bottom bar.
- Hidden while modal `<dialog>` is open. Tapping re-opens the intake modal directly.
- **Acceptance:** Zero scroll-listener lag, zero layout shift, smooth CSS transition across desktop/mobile.

## Phase 7 — Below-the-Fold Sections

- About, Services, Portfolio/Case Studies, Process, Testimonials, Footer.
- Built with crisp CSS grid, real content copy written from the client's perspective (`what they get, not how we work`).

## Phase 8 — Micro-interactions & Polish

- Audit all interactive elements (`cards, buttons, inputs`) for clear `:hover`, `:focus-visible`, and `:active` CSS states.
- Ensure accessible contrast and `prefers-reduced-motion` compliance across all CSS animations.

## Phase 9 — QA, Analytics & Launch

- Simple event tracking per funnel step (`hero_click → modal_q1 → modal_q4 → thank_you`).
- Cross-browser/mobile responsive verification.

---

## Open Assumptions (Ponytail Updated)

1. **Intent Routing:** 100% client-side keyword/regex matching replaces server-side `/api/classify` to eliminate latency, timeouts, and costs.
2. **Database:** Postgres (Supabase or Neon) via Drizzle ORM or `postgres` JS driver.
3. **AI Profile Generation:** Runs via Next.js `after()` inside the lead creation action; enriches data and triggers team webhooks automatically.
4. **WhatsApp:** Deep link (`wa.me`) on Thank You page for visitors; standard webhook/email for team alerts. No Meta Graph API needed.

