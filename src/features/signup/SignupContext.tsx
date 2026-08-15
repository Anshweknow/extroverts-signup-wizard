import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultSignupData, type SignupData, type Stage, type WizardStep } from './types';

const STORAGE = 'extroverts-signup-demo-v2';

type SignupContextValue = {
  data: SignupData;
  stage: Stage;
  step: WizardStep;
  setStage: (stage: Stage) => void;
  setStep: (step: WizardStep) => void;
  update: (patch: Partial<SignupData>) => void;
  reset: () => void;
};

const SignupContext = createContext<SignupContextValue | null>(null);

function isSignupPatch(value: unknown): value is Partial<SignupData> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function load(): SignupData {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE) ?? '{}');
    if (!isSignupPatch(parsed)) return defaultSignupData;

    return {
      ...defaultSignupData,
      ...parsed,
      email: typeof parsed.email === 'string' ? parsed.email : '',
      interests: Array.isArray(parsed.interests) ? parsed.interests.filter((item): item is string => typeof item === 'string') : [],
      agreements: typeof parsed.agreements === 'boolean' ? parsed.agreements : false,
    };
  } catch {
    localStorage.removeItem(STORAGE);
    return defaultSignupData;
  }
}

export function SignupProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SignupData>(load);
  const [stage, setStage] = useState<Stage>('landing');
  const [step, setStep] = useState<WizardStep>(0);

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(data));
  }, [data]);

  const value = useMemo<SignupContextValue>(
    () => ({
      data,
      stage,
      step,
      setStage,
      setStep,
      update: (patch) => setData((current) => ({ ...current, ...patch })),
      reset: () => {
        setData(defaultSignupData);
        setStage('landing');
        setStep(0);
        localStorage.removeItem(STORAGE);
      },
    }),
    [data, stage, step],
  );

  return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>;
}

export function useSignup() {
  const context = useContext(SignupContext);
  if (!context) throw new Error('useSignup must be used inside SignupProvider');
  return context;
}
