# Extroverts Signup Wizard

A polished frontend-only React/Vite implementation of the Extroverts Frontend Engineering Assessment. The app delivers a complete landing → terms → email verification → OTP → four-step signup wizard → success journey with a dark, mobile-first Extroverts visual style.

## Features

- Branded landing page mechanism with event-social hierarchy, stats, and CTA flow.
- Terms & Conditions gate with explicit acceptance before signup can continue.
- Email entry using React Hook Form + Zod validation, trimmed values, contextual field errors, loading state, and duplicate-submit prevention.
- Deterministic frontend-only OTP verification using demo code `123456`, numeric-only input, max length enforcement, resend feedback, and invalid-code handling.
- Four-step progressive signup wizard:
  1. Identity: first name, last name, age, pronouns, and short bio.
  2. Campus: dependent state → city/college selections and graduation year.
  3. Vibe: 2–5 interest chips, preferred event vibe, and profile visibility.
  4. Review: summary, edit path, and required community pledge.
- Centralized Zod schemas for whitespace prevention, character limits, numeric-only fields, age eligibility, dependent location validation, and final profile validation.
- Backward navigation that preserves valid entered data through centralized context state.
- Non-sensitive localStorage persistence with safe fallback parsing for corrupted saved progress.
- Sonner toasts for broader success/failure feedback plus field-level errors for specific issues.
- Responsive mobile/tablet/desktop layout with accessible labels, focus states, semantic buttons, and touch-friendly controls.

## Tech Stack

React, TypeScript, Vite, React Hook Form, Zod, Sonner, Lucide React, ESLint, Poppins, and plain CSS. This is intentionally frontend-only: no backend, API server, database, Prisma, authentication service, or required environment variables.

## Demo OTP

Use `123456` on the verification screen. Incorrect codes show field-level and toast errors; the correct code simulates verification and opens the profile wizard.

## Local Setup

```bash
npm install
npm run dev
```

Vite serves the app locally and prints the available URL in the terminal.

## Scripts

```bash
npm run dev          # Start Vite development server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript project checks
npx tsc --noEmit     # Run TypeScript without emitting files
npm run build        # Type-check and create production build in dist/
npm run preview      # Preview the production build locally
```

## Manual Verification Checklist

1. Landing → Terms → Email transitions are clear and gated.
2. Terms cannot continue until the acceptance checkbox is selected.
3. Invalid or empty email shows a field error; valid email transitions to OTP.
4. OTP accepts numbers only; invalid OTP fails; `123456` succeeds.
5. Wizard steps reject missing/invalid data and preserve data when going back.
6. Under-18 age cannot proceed.
7. Changing state clears incompatible city/college selections.
8. Review shows a clear summary and requires the community pledge.
9. Completion screen appears after final submission and restart clears demo state.
10. Mobile widths around 320–430px do not horizontally overflow.

## Vercel Deployment

Deploy as a standard Vite frontend.

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

No `vercel.json` is required for the current stage-based single-page implementation.
