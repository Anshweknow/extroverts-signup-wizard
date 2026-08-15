import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Check, PencilLine } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '../../components/Button';
import { Select, TextArea, TextInput } from '../../components/Field';
import { locationData, states } from '../../data/locations';
import { useSignup } from './SignupContext';
import { campusSchema, completeProfileSchema, identitySchema, reviewSchema, vibeSchema, type ReviewFormValues, type ReviewSubmitValues } from './validation';

const interests = ['House parties', 'Live music', 'Brunch', 'Study breaks', 'Sports', 'Art nights', 'Networking', 'Dancing'];
const vibes = ['High-energy parties', 'Small-group hangs', 'Creative events', 'Wellness socials'];
const visibilities = ['Campus only', 'Friends of friends', 'Public event hosts'];
const delay = (ms = 550) => new Promise((resolve) => window.setTimeout(resolve, ms));
const hasOption = (options: readonly string[], value: string) => options.includes(value);

export function Wizard() {
  const { step } = useSignup();
  return (
    <main className="shell">
      <section className="wizard" aria-label="Four-step signup wizard">
        <Progress />
        {step === 0 && <Identity />}
        {step === 1 && <Campus />}
        {step === 2 && <Vibe />}
        {step === 3 && <Review />}
      </section>
    </main>
  );
}

function Progress() {
  const { step } = useSignup();
  return (
    <div className="progress" aria-label="Signup progress">
      {['Identity', 'Campus', 'Vibe', 'Review'].map((label, index) => (
        <div key={label} className={index <= step ? 'active' : ''} aria-current={index === step ? 'step' : undefined}>
          <span>{index < step ? <Check size={14} aria-hidden="true" /> : index + 1}</span>
          {label}
        </div>
      ))}
    </div>
  );
}

function Identity() {
  const { data, update, setStep, setStage } = useSignup();
  const form = useForm({ resolver: zodResolver(identitySchema), mode: 'onChange', defaultValues: data });

  return (
    <Card title="Build your profile" eyebrow="Step 1 of 4" copy="Tell people enough to recognize your vibe before they meet you.">
      <form noValidate onSubmit={form.handleSubmit(async (values) => { update(values); await delay(); setStep(1); })}>
        <div className="grid two">
          <TextInput id="firstName" label="First name" autoComplete="given-name" maxLength={40} error={form.formState.errors.firstName?.message} {...form.register('firstName')} />
          <TextInput id="lastName" label="Last name" autoComplete="family-name" maxLength={40} error={form.formState.errors.lastName?.message} {...form.register('lastName')} />
        </div>
        <div className="grid two">
          <TextInput id="age" label="Age" inputMode="numeric" maxLength={2} hint="Members must be 18–99." error={form.formState.errors.age?.message} {...form.register('age', { onChange: (event) => { event.target.value = event.target.value.replace(/\D/g, '').slice(0, 2); } })} />
          <TextInput id="pronouns" label="Pronouns" placeholder="she/her, he/him, they/them" maxLength={30} error={form.formState.errors.pronouns?.message} {...form.register('pronouns')} />
        </div>
        <TextArea id="bio" label="Short bio" maxLength={160} hint="160 characters max. Whitespace-only bios are not accepted." error={form.formState.errors.bio?.message} {...form.register('bio')} />
        <Actions loading={form.formState.isSubmitting} back={() => setStage('otp')} disabled={!form.formState.isValid} />
      </form>
    </Card>
  );
}

function Campus() {
  const { data, update, setStep } = useSignup();
  const form = useForm({ resolver: zodResolver(campusSchema), mode: 'onChange', defaultValues: data });
  const selectedState = form.watch('state');
  const available = selectedState && selectedState in locationData ? locationData[selectedState as keyof typeof locationData] : undefined;

  useEffect(() => {
    const currentCity = form.getValues('city');
    const currentCollege = form.getValues('college');
    if (!available) {
      if (currentCity) form.setValue('city', '', { shouldDirty: true, shouldValidate: true });
      if (currentCollege) form.setValue('college', '', { shouldDirty: true, shouldValidate: true });
      return;
    }
    if (currentCity && !hasOption(available.cities, currentCity)) form.setValue('city', '', { shouldDirty: true, shouldValidate: true });
    if (currentCollege && !hasOption(available.colleges, currentCollege)) form.setValue('college', '', { shouldDirty: true, shouldValidate: true });
  }, [available, form]);

  return (
    <Card title="Where do you go out?" eyebrow="Step 2 of 4" copy="State unlocks compatible cities and campuses, so stale selections cannot sneak through.">
      <form noValidate onSubmit={form.handleSubmit(async (values) => { update(values); await delay(); setStep(2); })}>
        <Select id="state" label="State" options={states} error={form.formState.errors.state?.message} {...form.register('state')} />
        <div className="grid two">
          <Select id="city" label="City" options={available?.cities ?? []} disabled={!available} hint={!available ? 'Choose a state first.' : undefined} error={form.formState.errors.city?.message} {...form.register('city')} />
          <Select id="college" label="College" options={available?.colleges ?? []} disabled={!available} hint={!available ? 'Choose a state first.' : undefined} error={form.formState.errors.college?.message} {...form.register('college')} />
        </div>
        <TextInput id="graduationYear" label="Graduation year" inputMode="numeric" maxLength={4} hint="Use a year from 2026–2035." error={form.formState.errors.graduationYear?.message} {...form.register('graduationYear', { onChange: (event) => { event.target.value = event.target.value.replace(/\D/g, '').slice(0, 4); } })} />
        <Actions loading={form.formState.isSubmitting} back={() => setStep(0)} disabled={!form.formState.isValid} />
      </form>
    </Card>
  );
}

function Vibe() {
  const { data, update, setStep } = useSignup();
  const form = useForm({ resolver: zodResolver(vibeSchema), mode: 'onChange', defaultValues: data });

  return (
    <Card title="Tune your social signal" eyebrow="Step 3 of 4" copy="Pick what you actually want to be invited to. Choose 2–5 interests.">
      <form noValidate onSubmit={form.handleSubmit(async (values) => { update(values); await delay(); setStep(3); })}>
        <Controller
          control={form.control}
          name="interests"
          render={({ field }) => (
            <div className="field">
              <span className="field-label" id="interests-label">Pick 2–5 interests</span>
              <div className="chips" role="group" aria-labelledby="interests-label">
                {interests.map((interest) => {
                  const selected = field.value.includes(interest);
                  const atLimit = field.value.length >= 5 && !selected;
                  return (
                    <button
                      type="button"
                      key={interest}
                      className={selected ? 'chip selected' : 'chip'}
                      aria-pressed={selected}
                      disabled={atLimit}
                      onClick={() => field.onChange(selected ? field.value.filter((item: string) => item !== interest) : [...field.value, interest])}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
              {form.formState.errors.interests && <p className="error" role="alert">{form.formState.errors.interests.message}</p>}
            </div>
          )}
        />
        <Select id="eventVibe" label="Preferred event vibe" options={vibes} error={form.formState.errors.eventVibe?.message} {...form.register('eventVibe')} />
        <Select id="visibility" label="Profile visibility" options={visibilities} error={form.formState.errors.visibility?.message} {...form.register('visibility')} />
        <Actions loading={form.formState.isSubmitting} back={() => setStep(1)} disabled={!form.formState.isValid} />
      </form>
    </Card>
  );
}

function Review() {
  const { data, update, setStep, setStage } = useSignup();
  const form = useForm<ReviewFormValues, unknown, ReviewSubmitValues>({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
    defaultValues: { agreements: data.agreements },
  });

  return (
    <Card title="Confirm and enter" eyebrow="Step 4 of 4" copy="Review your details before completing the frontend-only signup demo.">
      <div className="review" aria-label="Signup summary">
        <SummaryRow label="Profile" value={`${data.firstName} ${data.lastName}, ${data.age}, ${data.pronouns}`} />
        <SummaryRow label="Campus" value={`${data.college} · ${data.city}, ${data.state} · Class of ${data.graduationYear}`} />
        <SummaryRow label="Vibe" value={`${data.interests.join(' · ')} · ${data.eventVibe} · ${data.visibility}`} />
        <button type="button" className="link-button" onClick={() => setStep(0)}><PencilLine size={16} aria-hidden="true" /> Edit details</button>
      </div>
      <form
        noValidate
        onSubmit={form.handleSubmit(async (values) => {
          const fullProfile = { ...data, ...values };
          const result = completeProfileSchema.safeParse(fullProfile);
          if (!result.success) {
            toast.error('Some profile details need attention. Please review earlier steps.');
            return;
          }
          update(values);
          await delay(900);
          toast.success('Profile completed.');
          setStage('success');
        })}
      >
        <label className="check">
          <input type="checkbox" {...form.register('agreements')} />
          <span>I agree to be respectful, inclusive, and event-safe as part of the Extroverts community pledge.</span>
        </label>
        {form.formState.errors.agreements && <p className="error" role="alert">{form.formState.errors.agreements.message}</p>}
        <Actions loading={form.formState.isSubmitting} back={() => setStep(2)} label="Complete profile" disabled={!form.formState.isValid} />
      </form>
    </Card>
  );
}

function Card({ children, title, eyebrow, copy }: { children: ReactNode; title: string; eyebrow: string; copy: string }) {
  return (
    <div className="card step-card">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="muted">{copy}</p>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <b>{label}</b>
      <span>{value}</span>
    </p>
  );
}

function Actions({ loading, back, label = 'Continue', disabled = false }: { loading: boolean; back: () => void; label?: string; disabled?: boolean }) {
  return (
    <div className="actions actions--split">
      <Button loading={loading} disabled={disabled}>{label}</Button>
      <Button type="button" variant="ghost" disabled={loading} onClick={back}>
        <ArrowLeft size={16} aria-hidden="true" /> Back
      </Button>
    </div>
  );
}
