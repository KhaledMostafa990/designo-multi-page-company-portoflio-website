'use client';

import React, { useMemo, useState } from 'react';
import { PrimaryButton } from '@/components/base';
import { supabase } from '@/lib/supabase';

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 text-sm border-b-2 ${active ? 'border-primary-default text-primary-default' : 'border-transparent text-dark-grey/70 hover:text-dark-grey'}`}
    >
      {children}
    </button>
  );
}

function ProfileTab() {
  const [email, setEmail] = useState<string>('');
  const [info, setInfo] = useState<{ verified: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  React.useEffect(() => {
    async function load() {
      if (!supabase) return;
      const { data } = await supabase.auth.getUser();
      setEmail(data.user?.email ?? '');
      setInfo({ verified: !!(data.user as any)?.email_confirmed_at });
      setLoading(false);
    }
    load();
  }, []);

  async function resend() {
    setMessage(null);
    try {
      // @ts-ignore best-effort API
      const { error } = await supabase.auth.resend({ type: 'signup', email });
      setMessage(error ? error.message : 'Confirmation email sent. Please check your inbox.');
    } catch (e: any) {
      setMessage(e?.message || 'Unable to send confirmation');
    }
  }

  async function save() {
    if (!email) return;
    setSaving(true);
    setMessage(null);
    try {
      const { error } = await supabase!.auth.updateUser({ email });
      setMessage(error ? error.message : 'Profile updated');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="text-sm text-dark-grey/70">Loading…</div>;

  return (
    <div className="flex flex-col gap-4">
      <div className={`text-sm ${info?.verified ? 'text-green-700' : 'text-red-600'}`}>
        {info?.verified ? 'Email verified' : 'Email not verified – Please check your inbox'}
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm">Email Address</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-light-grey px-4 py-3 outline-none transition bg-white/90 focus:border-dark-grey focus:ring-4 focus:ring-secondary-default/40"
        />
      </label>
      <div className="flex items-center gap-3">
        <button
          onClick={resend}
          className="px-4 py-3 text-sm rounded-lg border border-light-grey text-dark-grey hover:bg-light-grey/60 transition"
        >
          Resend Confirmation
        </button>
        <PrimaryButton onLight={true} disabled={saving} classes="px-6" onClick={save}>
          {saving ? 'Saving…' : 'Update Profile'}
        </PrimaryButton>
      </div>
      {message && <div className="text-sm text-dark-grey/80">{message}</div>}
    </div>
  );
}

function SecurityTab() {
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [sending, setSending] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function sendResetEmail() {
    setSending(true);
    setMessage(null);
    try {
      const { data } = await supabase!.auth.getUser();
      const email = data.user?.email;
      if (!email) {
        setMessage('No email on file');
      } else {
        await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        setMessage('Password reset email sent.');
      }
    } catch (e: any) {
      setMessage(e?.message || 'Failed to send reset email');
    } finally {
      setSending(false);
    }
  }

  async function updatePassword() {
    if (!newPass || newPass !== confirm) {
      setMessage('Passwords do not match.');
      return;
    }
    setUpdating(true);
    setMessage(null);
    try {
      const { error } = await supabase!.auth.updateUser({ password: newPass });
      setMessage(error ? error.message : 'Password updated successfully');
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="text-sm">New Password</span>
        <input
          type="password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          className="rounded-lg border border-light-grey px-4 py-3 outline-none transition bg-white/90 focus:border-dark-grey focus:ring-4 focus:ring-secondary-default/40"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm">Confirm New Password</span>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="rounded-lg border border-light-grey px-4 py-3 outline-none transition bg-white/90 focus:border-dark-grey focus:ring-4 focus:ring-secondary-default/40"
        />
      </label>

      <div className="flex items-center gap-3">
        <button
          onClick={sendResetEmail}
          className="px-4 py-3 text-sm rounded-lg border border-light-grey text-dark-grey hover:bg-light-grey/60 transition"
          disabled={sending}
        >
          {sending ? 'Sending…' : 'Send Reset Email'}
        </button>
        <PrimaryButton onLight={true} classes="px-6" onClick={updatePassword} disabled={updating}>
          {updating ? 'Updating…' : 'Update Password'}
        </PrimaryButton>
      </div>
      {message && <div className="text-sm text-dark-grey/80">{message}</div>}
    </div>
  );
}

export default function AccountSettingsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<'profile' | 'security' | 'danger'>('profile');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmWord, setConfirmWord] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canDelete = useMemo(
    () => confirmPassword.length > 0 && confirmWord === 'DELETE',
    [confirmPassword, confirmWord],
  );

  if (!open) return null;

  async function handleDelete() {
    setError(null);
    if (!supabase) {
      setError('Auth service not available.');
      return;
    }
    if (!canDelete) {
      setError('Please confirm your password and type DELETE.');
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token;
    if (!accessToken) {
      setError('You must be signed in.');
      return;
    }

    setDeleting(true);
    try {
      const res = await fetch('/api/auth/account', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ confirmPassword }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        // More specific error messages
        if (res.status === 400) {
          setError(body?.error ?? 'Invalid password confirmation.');
        } else if (res.status === 401) {
          setError('Please sign in again before deleting your account.');
        } else {
          setError(body?.error ?? 'Failed to delete account. Please try again.');
        }
        return;
      }

      // Account deleted successfully
      await supabase.auth.signOut();
      onClose();

      // Show success message
      const currentPath = window.location.pathname;
      const url = new URL(window.location.href);
      const isArabic = currentPath.startsWith('/ar');
      const successMessage = isArabic
        ? 'تم حذف حسابك بنجاح.'
        : 'Your account has been deleted successfully.';
      url.searchParams.set('account_deleted', encodeURIComponent(successMessage));
      window.history.replaceState({}, '', url);
    } catch (err) {
      console.error('Delete account error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[95%] max-w-2xl rounded-2xl bg-background-default shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="text-lg font-semibold">Account Settings</div>
          <button onClick={onClose} aria-label="Close" className="text-dark-grey hover:text-black">
            ×
          </button>
        </div>

        <div className="px-6 mt-3 border-b border-light-grey flex gap-6">
          <TabButton active={tab === 'profile'} onClick={() => setTab('profile')}>
            Profile
          </TabButton>
          <TabButton active={tab === 'security'} onClick={() => setTab('security')}>
            Security
          </TabButton>
          <TabButton active={tab === 'danger'} onClick={() => setTab('danger')}>
            Danger
          </TabButton>
        </div>

        {tab === 'danger' && (
          <div className="p-6">
            <div className="rounded-xl border border-red-300/50 bg-red-50 text-red-800 p-5 mb-6">
              <div className="font-medium mb-1">Delete Account</div>
              <p className="text-sm opacity-90">
                This action cannot be undone. All your data will be permanently deleted from our
                servers.
              </p>
            </div>

            <div className="rounded-xl border border-red-300/40 bg-red-100/20 p-5 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-sm">Confirm your password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-lg border border-light-grey px-4 py-3 outline-none transition bg-white/90 focus:border-red-400 focus:ring-4 focus:ring-red-300"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm">Type &quot;DELETE&quot; to confirm</span>
                <input
                  type="text"
                  value={confirmWord}
                  onChange={(e) => setConfirmWord(e.target.value.toUpperCase())}
                  className="rounded-lg border border-light-grey px-4 py-3 outline-none transition bg-white/90 focus:border-red-400 focus:ring-4 focus:ring-red-300"
                />
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-3 text-sm rounded-lg border border-light-grey text-dark-grey hover:bg-light-grey/60 transition"
                >
                  Cancel
                </button>
                <PrimaryButton
                  onLight={true}
                  disabled={!canDelete || deleting}
                  classes="bg-red-600 hover:bg-red-500 px-6"
                  onClick={handleDelete}
                >
                  {deleting ? 'Deleting…' : 'Delete Permanently'}
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}

        {tab === 'profile' && (
          <div className="p-6">
            <div className="mb-4 text-sm text-dark-grey/80">Profile Information</div>
            <ProfileTab />
          </div>
        )}
        {tab === 'security' && (
          <div className="p-6">
            <div className="mb-4 text-sm text-dark-grey/80">Security Settings</div>
            <SecurityTab />
          </div>
        )}
      </div>
    </div>
  );
}
