'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/AuthProvider';
import { PrimaryButton } from '@/components/base';
import { AuthDialog } from '@/features/auth/AuthDialog';
import AccountSettingsModal from '@/features/auth/AccountSettingsModal';
import type { AuthDialogLabels } from '@/features/Header';

type TopBarLabels = { signIn: string; signUp: string; signOut: string; account: string };

export default function TopBar({
  labels,
  authLabels,
}: {
  labels: TopBarLabels;
  authLabels?: {
    email?: string;
    password?: string;
    confirmPassword?: string;
    cancel?: string;
    waiting?: string;
    signingIn?: string;
    creatingAccount?: string;
  };
}) {
  const { user, signOut } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Language switcher functionality
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: 'en' | 'ar') {
    const parts = pathname.split('/');
    if (parts[1] === 'en' || parts[1] === 'ar') {
      parts[1] = nextLocale;
    } else {
      parts.splice(1, 0, nextLocale);
    }
    const nextPath = parts.join('/') || '/';
    router.push(nextPath);
  }

  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="px-2 xl:px-10 py-2 xl:py-2.5 shadow-md shadow-current/5">
        <div className="flex items-center col-span-12 col-start-0">
          <div>
            {!user ? (
              <PrimaryButton
                onLight={true}
                classes="py-[7px!important] px-[15px!important] text-xs w-max min-w-max"
                onClick={() => setAuthOpen(true)}
              >
                {labels.signIn}
              </PrimaryButton>
            ) : (
              <>
                <PrimaryButton
                  onLight={true}
                  classes="py-[7px!important] px-[15px!important] text-xs w-max min-w-max"
                  onClick={() => signOut()}
                >
                  {labels.signOut}
                </PrimaryButton>

                <button
                  className="mx-3 py-[12px!important] text-xs uppercase tracking-[2px] text-dark-grey hover:text-primary-default transition-colors"
                  onClick={() => setSettingsOpen(true)}
                >
                  {labels.account}
                </button>
              </>
            )}
          </div>

          <div className="mx-3">
            {/* Language Switcher */}
            <div className="inline-flex rounded-md border border-light-grey overflow-hidden">
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs uppercase tracking-[2px] transition-colors ${
                  currentLocale === 'en'
                    ? 'bg-primary-default text-white'
                    : 'text-dark-grey hover:bg-light-grey'
                }`}
                aria-pressed={currentLocale === 'en'}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('ar')}
                className={`px-3 py-1 text-xs uppercase tracking-[2px] transition-colors ${
                  currentLocale === 'ar'
                    ? 'bg-primary-default text-white'
                    : 'text-dark-grey hover:bg-light-grey'
                }`}
                aria-pressed={currentLocale === 'ar'}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </div>
      <AuthDialog
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        labels={
          {
            signIn: labels.signIn,
            signUp: labels.signUp,
            email: authLabels?.email ?? 'Email',
            password: authLabels?.password ?? 'Password',
            confirmPassword: authLabels?.confirmPassword ?? 'Confirm Password',
            cancel: authLabels?.cancel ?? 'Cancel',
            waiting: authLabels?.waiting ?? 'Please wait…',
            signingIn: authLabels?.signingIn ?? 'Signing in…',
            creatingAccount: authLabels?.creatingAccount ?? 'Creating account…',
          } as AuthDialogLabels
        }
      />
      <AccountSettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </header>
  );
}
