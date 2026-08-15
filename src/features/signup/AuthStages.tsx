import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, RotateCcw, ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Field';
import { useSignup } from './SignupContext';
import { emailSchema, otpSchema } from './validation';

const DEMO_OTP = '123456';
const wait = (ms = 650) => new Promise((resolve) => window.setTimeout(resolve, ms));

export function EmailStage() {
  const { data, update, setStage } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: zodResolver(emailSchema), mode: 'onChange', defaultValues: { email: data.email } });

  return (
    <main className="shell narrow auth-shell">
      <section className="card auth-card" aria-labelledby="email-title">
        <div className="stage-icon"><Mail aria-hidden="true" /></div>
        <p className="eyebrow">Login / Signup</p>
        <h1 id="email-title">Start with your email</h1>
        <p className="muted">We’ll simulate a verification code before opening the profile wizard. Nothing is sent to a server.</p>
        <form
          noValidate
          onSubmit={handleSubmit(async (values) => {
            await wait(700);
            update({ email: values.email.trim() });
            toast.success('Demo verification code ready: 123456');
            setStage('otp');
          })}
        >
          <TextInput
            id="email"
            label="Email address"
            type="email"
            autoComplete="email"
            maxLength={120}
            placeholder="you@campus.edu"
            error={errors.email?.message}
            {...register('email')}
          />
          <div className="actions actions--split">
            <Button loading={isSubmitting} disabled={!isValid}>Send code</Button>
            <Button type="button" variant="ghost" disabled={isSubmitting} onClick={() => setStage('terms')}>Back</Button>
          </div>
        </form>
      </section>
    </main>
  );
}

export function OtpStage() {
  const { data, setStage } = useSignup();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: zodResolver(otpSchema), mode: 'onChange', defaultValues: { otp: '' } });

  return (
    <main className="shell narrow auth-shell">
      <section className="card auth-card" aria-labelledby="otp-title">
        <div className="stage-icon"><ShieldCheck aria-hidden="true" /></div>
        <p className="eyebrow">Verification</p>
        <h1 id="otp-title">Enter your 6-digit code</h1>
        <p className="muted">Use demo OTP <strong>{DEMO_OTP}</strong>{data.email ? ` for ${data.email}` : ''}. The input accepts numbers only.</p>
        <form
          noValidate
          onSubmit={handleSubmit(async ({ otp }) => {
            await wait();
            if (otp !== DEMO_OTP) {
              setError('otp', { message: 'That code does not match the demo OTP.' });
              toast.error('Invalid verification code. Try 123456.');
              return;
            }
            toast.success('Email verified. Build your profile.');
            setStage('wizard');
          })}
        >
          <TextInput
            id="otp"
            label="Verification code"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            placeholder="123456"
            className="otp-input"
            error={errors.otp?.message}
            {...register('otp', {
              onChange: (event) => {
                event.target.value = event.target.value.replace(/\D/g, '').slice(0, 6);
                clearErrors('otp');
              },
            })}
          />
          <div className="otp-tools">
            <button type="button" className="link-button" disabled={isSubmitting} onClick={() => toast.success('Demo code resent: 123456')}>
              <RotateCcw size={16} aria-hidden="true" /> Resend demo code
            </button>
          </div>
          <div className="actions actions--split">
            <Button loading={isSubmitting} disabled={!isValid}>Verify email</Button>
            <Button type="button" variant="ghost" disabled={isSubmitting} onClick={() => setStage('email')}>Back</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
