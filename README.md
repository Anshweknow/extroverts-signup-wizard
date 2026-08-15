# Extroverts Signup Wizard

A polished frontend-only replication of the Extroverts signup experience for the Frontend Engineering Assessment. The app uses the supplied Extroverts visual language: dark premium UI, white typography, rounded bordered cards, and pink/purple/orange event-social accents.

## Features

- Landing page mechanism with Extroverts-style brand presentation.
- Terms and Conditions page before signup.
- Email entry and deterministic OTP verification simulation.
- Required four-step profile wizard:
  1. Identity: name, age, pronouns, bio.
  2. Campus: state, city, college, graduation year.
  3. Vibe: interests, event preference, visibility.
  4. Review: summary and community pledge.
- React Hook Form + Zod validation with contextual field errors.
- Numeric-only handling for OTP, age, and graduation year.
- Whitespace-only rejection and character limits.
- Loading states and duplicate-submit prevention.
- Global Sonner toast feedback for verification and completion events.
- Dependent state → city/college filtering with stale child values reset.
- Back navigation that preserves previously entered data.
- LocalStorage persistence for non-sensitive demo progress with safe fallback parsing.
- Responsive, mobile-first dark UI ready for Vercel.

## Tech Stack

React, TypeScript, Vite, Poppins, React Hook Form, Zod, Sonner, Lucide React, ESLint, and plain CSS. This project intentionally has no backend.

## Setup

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev          # Start Vite development server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript without emitting files
npm run build        # Type-check and create production build in dist/
npm run preview      # Preview the production build locally
```

## Demo OTP

Use `123456` on the verification screen. Incorrect codes show field-level and toast errors; the correct code simulates verification and opens the four-step profile wizard.

## Testing Instructions

Manually verify the flow:

1. Landing → Terms → Email.
2. Enter a valid email and continue.
3. Try an invalid OTP, then use `123456`.
4. Confirm every wizard step rejects invalid required values.
5. Confirm under-18 age cannot proceed.
6. Confirm changing state resets incompatible city/college values.
7. Navigate back and verify entered values are preserved.
8. Complete the profile and confirm the success state.
9. Check mobile and desktop widths for no horizontal overflow.

## Vercel Deployment

Import the repository into Vercel using the Vite framework preset.

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

No backend, API server, database, Prisma setup, or authentication service is needed.
