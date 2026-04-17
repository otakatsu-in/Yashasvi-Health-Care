# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Yashasvi Health Care Website (`artifacts/yashasvi-health`)
- **Type**: react-vite (frontend-only, no backend)
- **Preview Path**: `/` (root)
- **Stack**: React, Wouter routing, Framer Motion, Tailwind CSS, shadcn/ui, react-hook-form + zod
- **Pages**:
  - `/` — Homepage (hero with doctors' images, trust signals, quick links)
  - `/about` — About the Clinic & Doctors
  - `/dr-yeshavanth` — Dr. Yeshavanth G profile (SEO: diabetologist in Davanagere)
  - `/dr-shilpa` — Dr. Shilpa Nabapure profile (SEO: gynaecologist in Davanagere)
  - `/treatments` — Treatments & Laboratory Services
  - `/education` — Patient Education Hub (7 articles + video placeholders)
  - `/contact` — Contact & Appointment Booking Form
- **Design**: Deep teal primary palette, soft plum accent for Dr. Shilpa's section, Playfair Display serif + Plus Jakarta Sans sans-serif, ivory/cream background
- **Assets**: Real doctor photos from attached_assets/ (referenced via @assets alias)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
