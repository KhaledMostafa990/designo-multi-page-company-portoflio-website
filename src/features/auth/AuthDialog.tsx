'use client';

import React, { useMemo, useState } from 'react';
import { useAuth } from '@/features/auth/AuthProvider';
import { PrimaryButton } from '@/components/base';

function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function mapAuthError(message: string) {
  const m = message.toLowerCase();
  if (m.includes('invalid login credentials')) return 'Email or password is incorrect.';
  if (m.includes('email not confirmed') || m.includes('email confirmation required'))
    return 'Please confirm your email to continue.';
  if (m.includes('security purposes') && m.includes('after')) return message; // keep Supabase rate-limit message as-is
  if (m.includes('user already registered')) return 'This email is already registered.';
  if (m.includes('password should be at least')) return message;
  return message;
}

export function AuthDialog({
  open,
  onClose,
  labels,
}: {
  open: boolean;
  onClose: () => void;
  labels: {
    signIn: string;
    signUp: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    cancel?: string;
    waiting?: string;
    signingIn?: string;
    creatingAccount?: string;
  };
}) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { signIn, signUp } = useAuth();

  const emailError = useMemo(() => {
    if (!email) return null;
    return validateEmail(email) ? null : 'Enter a valid email address.';
  }, [email]);

  const passwordError = useMemo(() => {
    if (mode === 'signup' && password && password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    return null;
  }, [mode, password]);

  const confirmPasswordError = useMemo(() => {
    if (mode === 'signup' && confirmPassword && password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    return null;
  }, [mode, password, confirmPassword]);

  const passwordHint = useMemo(() => {
    if (mode === 'signup') return 'Use at least 6 characters.';
    return null;
  }, [mode]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (emailError) {
      setError(emailError);
      return;
    }

    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (mode === 'signup' && confirmPasswordError) {
      setError(confirmPasswordError);
      return;
    }

    setSubmitting(true);
    try {
      const action = mode === 'login' ? signIn : signUp;
      const { error } = await action(email, password);
      if (error) {
        setError(mapAuthError(error));
        return;
      }

      // Show success notification for signup
      if (mode === 'signup') {
        const url = new URL(window.location.href);
        url.searchParams.set('signup_success', 'true');
        window.history.replaceState({}, '', url);
      }

      onClose();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[92%] max-w-lg rounded-2xl bg-background-default shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="text-xl font-semibold">
            {mode === 'login' ? labels.signIn : labels.signUp}
          </div>
          <button onClick={onClose} aria-label="Close" className="text-dark-grey hover:text-black">
            ×
          </button>
        </div>

        <div className="px-6 pt-4">
          <div className="inline-flex rounded-lg bg-light-grey overflow-hidden">
            <button
              onClick={() => setMode('login')}
              className={`px-4 py-2 text-sm font-medium transition ${
                mode === 'login' ? 'bg-primary-default text-white' : 'text-dark-grey hover:bg-white'
              }`}
            >
              {labels.signIn}
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`px-4 py-2 text-sm font-medium transition ${
                mode === 'signup'
                  ? 'bg-primary-default text-white'
                  : 'text-dark-grey hover:bg-white'
              }`}
            >
              {labels.signUp}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-6 flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-dark-grey">{labels.email ?? 'Email'}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`rounded-lg border px-4 py-3 outline-none transition bg-white/90 ${
                emailError
                  ? 'border-red-400 focus:ring-4 focus:ring-red-300'
                  : 'border-light-grey focus:border-dark-grey focus:ring-4 focus:ring-secondary-default/40'
              }`}
              placeholder="e.g. alex@example.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-dark-grey">{labels.password ?? 'Password'}</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`rounded-lg border px-4 py-3 outline-none transition bg-white/90 ${
                passwordError
                  ? 'border-red-400 focus:ring-4 focus:ring-red-300'
                  : 'border-light-grey focus:border-dark-grey focus:ring-4 focus:ring-secondary-default/40'
              }`}
              placeholder="Enter your password"
            />
            {passwordHint && <span className="text-xs text-dark-grey/70">{passwordHint}</span>}
          </label>

          {mode === 'signup' && (
            <label className="flex flex-col gap-2">
              <span className="text-sm text-dark-grey">
                {labels.confirmPassword ?? 'Confirm Password'}
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`rounded-lg border px-4 py-3 outline-none transition bg-white/90 ${
                  confirmPasswordError
                    ? 'border-red-400 focus:ring-4 focus:ring-red-300'
                    : 'border-light-grey focus:border-dark-grey focus:ring-4 focus:ring-secondary-default/40'
                }`}
                placeholder="Confirm your password"
              />
            </label>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="mt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 text-sm rounded-lg border border-light-grey text-dark-grey hover:bg-light-grey/60 transition"
            >
              {labels.cancel ?? 'Cancel'}
            </button>
            <PrimaryButton type="submit" onLight={true} disabled={submitting} classes="px-8">
              {submitting
                ? mode === 'login'
                  ? (labels.signingIn ?? labels.waiting ?? 'Signing in…')
                  : (labels.creatingAccount ?? labels.waiting ?? 'Creating account…')
                : mode === 'login'
                  ? labels.signIn
                  : labels.signUp}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
