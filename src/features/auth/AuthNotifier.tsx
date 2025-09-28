'use client';

import { useEffect } from 'react';
import { useAlertContext } from '@/data/AlertContext';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function AuthNotifier() {
  const { onOpen } = useAlertContext();
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const confirmed = params.get('confirmed');
    const err = params.get('auth_error');
    const signup = params.get('signup_success');
    const deleted = params.get('account_deleted');

    if (confirmed) {
      // Check if Arabic locale based on pathname
      const isArabic = pathname.startsWith('/ar');
      const message = isArabic
        ? 'مرحباً! تم تأكيد بريدك الإلكتروني بنجاح.'
        : 'Welcome! Your email has been confirmed successfully.';
      onOpen('success', message);

      const n = new URL(window.location.href);
      n.searchParams.delete('confirmed');
      router.replace(n.pathname + n.search);
    } else if (signup) {
      // Welcome message for immediate signup (no email confirmation required)
      const isArabic = pathname.startsWith('/ar');
      const message = isArabic
        ? 'مرحباً! تم إنشاء حسابك بنجاح.'
        : 'Welcome! Your account has been created successfully.';
      onOpen('success', message);

      const n = new URL(window.location.href);
      n.searchParams.delete('signup_success');
      router.replace(n.pathname + n.search);
    } else if (deleted) {
      // Account deleted notification
      const message = decodeURIComponent(deleted);
      onOpen('success', message);

      const n = new URL(window.location.href);
      n.searchParams.delete('account_deleted');
      router.replace(n.pathname + n.search);
    } else if (err) {
      onOpen('error', decodeURIComponent(err));
      const n = new URL(window.location.href);
      n.searchParams.delete('auth_error');
      router.replace(n.pathname + n.search);
    }
  }, [params, onOpen, router, pathname]);

  return null;
}
