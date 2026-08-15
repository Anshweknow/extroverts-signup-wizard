<div align="center">

# ✨ Extroverts Signup Wizard

### A polished, responsive frontend recreation of the Extroverts signup experience

<p>
  <a href="https://extroverts-signup-wizard-p7fe1vs24-anshs-projects-5698cdb4.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="https://github.com/Anshweknow/extroverts-signup-wizard">
    <img src="https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Zod-Validation-3E67B1?style=flat-square" alt="Zod" />
  <img src="https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-FF4F81?style=flat-square" alt="Responsive" />
</p>

<p><strong>Frontend Engineering Assessment · Extroverts</strong></p>

</div>

---

## 🌈 About the Project

This project is a **frontend-only React + TypeScript implementation** of the Extroverts Frontend Engineering Assessment.

The goal was to recreate the feel of a modern social/event application while building a complete, polished signup journey — from the first landing screen through verification, profile setup, review, and completion.

The interface is designed **mobile-first**, but it also adapts intentionally for tablets, laptops, and large desktop screens instead of simply stretching a mobile layout across a wider viewport.

> **Design direction:** bold Poppins typography · dark surfaces · vibrant purple/pink/orange accents · rounded cards · social/event-focused UI · responsive layouts

---

## 🚀 Live Demo

<div align="center">

### 👉 [Open the Live Application](https://extroverts-signup-wizard-p7fe1vs24-anshs-projects-5698cdb4.vercel.app/)

**Demo OTP:** `123456`

</div>

---

## ✨ Highlights

| Area | Implementation |
|---|---|
| 🎨 **UI/UX** | Extroverts-inspired dark social/event experience with premium visual polish |
| 📱 **Responsive** | Mobile-first layouts adapted for mobile, tablet, laptop and desktop |
| 🔐 **Verification** | Frontend-only email + deterministic OTP verification flow |
| 🧭 **Wizard** | Progressive 4-step signup experience with back navigation |
| ✅ **Validation** | Centralized Zod validation with contextual field errors |
| 🔄 **State** | Centralized signup state with safe localStorage persistence |
| ⚡ **UX States** | Loading, disabled, error, focus, selected and success states |
| ♿ **Accessibility** | Semantic controls, labels, focus states and validation messaging |
| ☁️ **Deployment** | Production-ready Vite frontend deployed on Vercel |

---

## 🧩 Complete User Journey

```text
Landing
   ↓
Terms & Conditions
   ↓
Email Verification
   ↓
OTP Verification
   ↓
┌─────────────────────────────┐
│ Step 1 · Identity           │
│ Step 2 · Campus             │
│ Step 3 · Vibe               │
│ Step 4 · Review             │
└─────────────────────────────┘
   ↓
Success
```

### 🔐 Authentication / Entry

- Explicit Terms & Conditions acceptance gate
- Trimmed and validated email input
- Deterministic demo OTP: `123456`
- Numeric-only six-digit OTP input
- Invalid OTP field + toast feedback
- Loading states and duplicate-submit prevention
- Resend feedback

### 🧑‍💻 Four-Step Signup Wizard

**01 · Identity**
- First name
- Last name
- Age
- Pronouns
- Short bio

**02 · Campus**
- State
- Dependent city
- Dependent college
- Graduation year

**03 · Vibe**
- Interest chips
- Preferred event vibe
- Profile visibility

**04 · Review**
- Profile summary
- Edit/back navigation
- Community pledge
- Final validation

---

## 🧠 Validation & Edge Cases

The project uses centralized **Zod schemas** together with React Hook Form to keep validation predictable and maintainable.

- ✉️ Invalid/empty email handling
- 🔢 Numeric-only OTP, age and graduation year fields
- 🚫 Whitespace-only input prevention
- 📏 Character limits
- 🔞 Minimum age eligibility
- 🎓 Graduation year range validation
- 📍 State → city → college dependency validation
- 🎯 Interest count validation
- 📝 Required final community pledge
- 🔁 Safe handling of corrupted localStorage state
- 🛑 Duplicate submission prevention
- ⚠️ Field-level errors + global toast feedback

---

## 📱 Responsive Experience

The UI is intentionally designed to feel good at different viewport sizes rather than behaving like a stretched mobile screen.

### Mobile
- Single-column layouts
- Touch-friendly controls
- Full-width actions where appropriate
- Compact progress UI
- Overflow protection around narrow widths

### Tablet
- Balanced spacing
- Flexible grids
- Comfortable form widths
- Adaptive card layouts

### Laptop / Desktop
- Controlled max-width site containers
- Balanced hero composition
- Readable typography and form widths
- Proper whitespace and visual hierarchy
- Responsive two-column layouts where useful
- Event preview cards constrained to avoid dominating the screen

Tested design targets include approximately:

`320px` · `375px` · `390px` · `430px` · `768px` · `1024px` · `1280px` · `1366px` · `1440px` · `1600px` · `1920px`

---

## 🎨 Visual System

The design intentionally follows an Extroverts-inspired visual language:

- **Typography:** Poppins with bold display hierarchy
- **Base:** Deep dark backgrounds and high-contrast surfaces
- **Accents:** Purple, pink and orange gradients
- **Components:** Rounded bordered cards with subtle depth
- **Interactions:** Clear hover, focus, selected, disabled and error states
- **Motion:** Lightweight transitions without distracting animation

The result aims to feel like a **social/event product**, not a generic SaaS dashboard.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI and component architecture |
| **TypeScript** | Type-safe application development |
| **Vite** | Development server and production bundling |
| **React Hook Form** | Form state and submission handling |
| **Zod** | Centralized schema validation |
| **Sonner** | Toast notifications |
| **Lucide React** | UI icons |
| **ESLint** | Code quality and linting |
| **CSS** | Responsive styling and visual system |

### Architecture

This project is intentionally **frontend-only** for the assessment.

```text
React + TypeScript + Vite
        │
        ├── Pages
        ├── Signup Flow
        ├── Reusable Components
        ├── Centralized Signup Context
        ├── Zod Validation
        └── Responsive CSS
```

No backend, database, Prisma, API server, authentication service, or required environment variables are needed.

---

## 💻 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Anshweknow/extroverts-signup-wizard.git
cd extroverts-signup-wizard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

---

## 📜 Available Scripts

```bash
npm run dev          # Start Vite development server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript project checks
npx tsc --noEmit     # Run TypeScript without emitting files
npm run build        # Type-check and create production build
npm run preview      # Preview the production build locally
```

---

## 🧪 Manual Verification Checklist

- [x] Landing → Terms → Email flow
- [x] Terms cannot be bypassed
- [x] Invalid email validation
- [x] OTP validation with `123456`
- [x] Invalid OTP feedback
- [x] Four-step progressive wizard
- [x] Required-field validation
- [x] Under-18 validation
- [x] Back navigation with preserved data
- [x] State → city → college dependency behavior
- [x] Interest selection validation
- [x] Review and edit flow
- [x] Required community pledge
- [x] Success/completion state
- [x] Restart/reset behavior
- [x] Responsive mobile layouts
- [x] Responsive tablet layouts
- [x] Responsive laptop/desktop layouts
- [x] No intentional horizontal overflow

---

## ☁️ Vercel Deployment

The application is deployed as a standard Vite frontend.

| Setting | Value |
|---|---|
| Framework Preset | **Vite** |
| Root Directory | **`./`** |
| Build Command | **`npm run build`** |
| Output Directory | **`dist`** |
| Environment Variables | **None required** |

No `vercel.json` is required for the current single-page frontend implementation.

---

## 📂 Project Structure

```text
extroverts-signup-wizard/
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/                # Campus/location data
│   ├── features/
│   │   └── signup/          # Signup state, wizard and validation
│   ├── pages/               # Landing, Terms and Success screens
│   ├── styles/              # Global responsive styling
│   ├── App.tsx
│   └── main.tsx
├── AGENTS.md                # Project guidance for AI-assisted development
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Assessment Focus

This implementation was built around the key frontend engineering goals of the assessment:

- High-fidelity product recreation
- Functional signup flow
- Progressive disclosure
- Strong form validation
- Clear error and loading feedback
- Cross-field validation logic
- Responsive mobile/tablet/desktop behavior
- Accessible interaction states
- Thoughtful UX improvements
- Clean, maintainable frontend architecture

---

## 👨‍💻 Author

**Ansh**

Frontend Engineering Assessment — Extroverts

<div align="center">

### Built with React, TypeScript, Vite & a lot of attention to detail. ✨

[**View Live Demo →**](https://extroverts-signup-wizard-p7fe1vs24-anshs-projects-5698cdb4.vercel.app/)

</div>
