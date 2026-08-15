# Extroverts Signup Wizard Agent Guide

## Purpose
Frontend-only React/Vite implementation of the Extroverts Frontend Engineering Assessment: landing page, terms page, deterministic email/OTP verification, four-step signup wizard, and success state.

## Architecture
- `src/components`: reusable visual primitives such as buttons and accessible form fields.
- `src/pages`: landing, terms, and completion screens.
- `src/features/signup`: centralized demo signup state, validation schemas, auth stages, and wizard UI.
- `src/data`: static frontend-only dependent location data.
- `src/styles`: global Poppins-based dark Extroverts styling.

## Tech Stack
React, TypeScript, Vite, React Hook Form, Zod, Sonner, Lucide React, and plain CSS. Do not add backend infrastructure.

## Commands
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run type-check`
- `npm run build`
- `npm run preview`

## Conventions
- Keep strict TypeScript enabled; avoid `any`.
- Do not wrap imports in `try/catch`.
- Keep validation in Zod schemas and integrate with React Hook Form.
- Preserve wizard state when navigating backward.
- Use deterministic simulated delays only; no API calls for core behavior.
- Do not store passwords, secrets, or real credentials. Local storage may only contain non-sensitive demo signup progress.

## Validation Rules
- Reject empty and whitespace-only text values.
- Age must be numeric and 18–99.
- OTP is numeric-only and the demo code is `123456`.
- Dependent state/city/college selections must remain compatible.
- The review/community pledge is required before completion.

## Vercel
Deploy as a standard Vite frontend. Build command: `npm run build`; output directory: `dist`. Do not add servers, APIs, databases, Prisma, or required environment variables.
