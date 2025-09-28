'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function LanguageSwitcher() {
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

  const current = pathname.startsWith('/ar') ? 'ar' : 'en';

  return (
    <div className="inline-flex rounded-md border border-light-grey overflow-hidden">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-xs uppercase tracking-[2px] ${
          current === 'en' ? 'bg-primary-default text-white' : 'text-dark-grey hover:bg-light-grey'
        }`}
        aria-pressed={current === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ar')}
        className={`px-3 py-1 text-xs uppercase tracking-[2px] ${
          current === 'ar' ? 'bg-primary-default text-white' : 'text-dark-grey hover:bg-light-grey'
        }`}
        aria-pressed={current === 'ar'}
      >
        AR
      </button>
    </div>
  );
}
