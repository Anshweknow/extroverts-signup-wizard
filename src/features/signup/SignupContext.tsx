import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultSignupData, type SignupData, type Stage, type WizardStep } from './types';
const STORAGE = 'extroverts-signup-demo-v1';
type Ctx = { data: SignupData; stage: Stage; step: WizardStep; setStage: (s: Stage) => void; setStep: (s: WizardStep) => void; update: (patch: Partial<SignupData>) => void; reset: () => void };
const SignupContext = createContext<Ctx | null>(null);
function load(): SignupData { try { const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE) ?? '{}'); return { ...defaultSignupData, ...(parsed && typeof parsed === 'object' ? parsed : {}) }; } catch { return defaultSignupData; } }
export function SignupProvider({ children }: { children: ReactNode }) { const [data, setData] = useState<SignupData>(load); const [stage, setStage] = useState<Stage>('landing'); const [step, setStep] = useState<WizardStep>(0); useEffect(() => localStorage.setItem(STORAGE, JSON.stringify(data)), [data]); const value = useMemo<Ctx>(() => ({ data, stage, step, setStage, setStep, update: (p) => setData((d) => ({ ...d, ...p })), reset: () => { setData(defaultSignupData); setStage('landing'); setStep(0); localStorage.removeItem(STORAGE); } }), [data, stage, step]); return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>; }
export function useSignup() { const ctx = useContext(SignupContext); if (!ctx) throw new Error('useSignup must be used inside SignupProvider'); return ctx; }
