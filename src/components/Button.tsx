import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ children, loading = false, variant = 'primary', type = 'submit', ...props }: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}`}
      disabled={props.disabled || loading}
      aria-busy={loading || undefined}
      type={type}
      {...props}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
