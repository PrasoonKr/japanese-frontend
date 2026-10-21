# Japanese Language Jobs & Recruitment Services Platform

A modern, production-grade web application connecting JLPT-certified bilingual talent with Japanese multinational corporations (MNCs) and cross-border enterprises across India and Japan.

---

## 🛠 Technology Stack

- **Framework:** React 19 + TypeScript (Strict Type Safety)
- **Bundler:** Vite 6
- **UI & Design System:** [Mantine UI v7](https://mantine.dev/) (`@mantine/core`, `@mantine/hooks`, `@mantine/notifications`)
- **Icons:** [Tabler Icons](https://tabler.io/icons) via `@tabler/icons-react`
- **Routing:** [TanStack Router](https://tanstack.com/router) with automatic file-based route tree generation (`src/routeTree.gen.ts`)
- **Server State & Caching:** [TanStack Query v5](https://tanstack.com/query) with dedicated query keys, stale times, and mutation handlers
- **Forms & Validation:** React Hook Form + Zod Schema Validation
- **Styling Direction:** Japanese corporate aesthetic with Crimson Red (`#B74736`), Deep Navy (`#202C38`), and Warm Ivory (`#F8F2EB`) background

---

## 🧭 Routes & Pages

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | **Homepage** | Editorial hero, value propositions, featured jobs preview, candidate & employer pathways, trust stats |
| `/jobs` | **Job Listings & Directory** | Multi-facet filtering (JLPT N1–N5, location, mode, type), search query, TanStack Router search params sync, pagination |
| `/jobs/$jobId` | **Job Details** | Detailed requirements, JLPT badge, compensation indicators, visa status, apply CTA, similar jobs |
| `/apply/$jobId` | **Candidate Application** | RHF + Zod form, JLPT level verification, resume upload validation, interactive success tracking state |
| `/employers` | **For Employers** | Recruitment solutions, talent verticals, employer hiring enquiry form with corporate validation |
| `/services` | **Services** | Bilingual recruitment, technical translation & interpretation, corporate language training, visa support |
| `/career-support` | **Career Hub** | JLPT competence roadmap, Rirekisho vs. Western CV formatting, Japanese business etiquette guide |
| `/about` | **About Us** | Mission, Indo-Japan economic bridge, ethical hiring standards |
| `/contact` | **Contact & Consultation** | General enquiry form, Delhi NCR & Tokyo partner locations |
| `404` | **Not Found** | Japanese-styled Not Found page |

---

## 🎨 Brand & Content Customization

You can personalize the brand name, contact emails, phone numbers, and office locations anytime in:
📁 `src/config/site.ts`

```typescript
export const SITE_CONFIG = {
  name: "Your Brand Name",
  tagline: "Your Custom Tagline",
  contactEmail: "contact@yourdomain.com",
  contactPhone: "+91 ...",
  ...
};
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The Vite dev server will start (typically at `http://localhost:5173`) with instant HMR and automatic route tree generation.

### 3. Type Checking & Production Build
```bash
npm run build
```
This runs `tsc -b` for TypeScript strict type checking, followed by `vite build` to generate production assets in `dist/`.

---

## 🔌 Backend Integration

All server communication is abstracted in `src/services/`:
- `src/services/jobs.service.ts`
- `src/services/applications.service.ts`
- `src/services/employers.service.ts`

Currently, these services use a typed asynchronous adapter with simulated latency. When connecting to an Express + PostgreSQL backend, swap the internal mock calls with `fetch` or `axios` calls to your `/api` endpoints without modifying component code.
