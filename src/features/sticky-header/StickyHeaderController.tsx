'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

/**
 * Wraps TopBar and Header, measuring TopBar height and translating both on scroll.
 * - On scroll down: TopBar hides (translateY(-topbar-h)), Header translates up by -topbar-h.
 * - On scroll up or near top: both return to original position.
 */
export default function StickyHeaderController({
  topBar,
  header,
}: {
  topBar: React.ReactNode;
  header: React.ReactNode;
}) {
  const topBarRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const { direction, isAtTop } = useScrollDirection({ threshold: 12, throttleMs: 80 });
  const hideTopBar = useMemo(() => direction === 'down' && !isAtTop, [direction, isAtTop]);

  // Measure TopBar height and expose as CSS variable
  useEffect(() => {
    const el = topBarRef.current;
    if (!el) return undefined;

    const updateVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--topbar-h', `${Math.round(h)}px`);
    };

    updateVar();

    const ro = new ResizeObserver(() => updateVar());
    ro.observe(el);

    // Resize orientation changes can affect layout
    window.addEventListener('resize', updateVar);

    return () => {
      try {
        ro.disconnect();
      } catch (e) {
        // noop
      }
      window.removeEventListener('resize', updateVar);
    };
  }, []);

  const translateHidden = 'translate-y-[calc(-1*var(--topbar-h))]';
  const translateShown = 'translate-y-0';
  const transition = 'transition-transform duration-300 ease-in-out will-change-transform';

  return (
    <div className="sticky top-0 z-30">
      <div
        ref={topBarRef}
        className={`${transition} ${hideTopBar ? translateHidden : translateShown}`}
      >
        {topBar}
      </div>
      <div
        ref={headerRef}
        className={`${transition} ${hideTopBar ? translateHidden : translateShown}`}
      >
        {header}
      </div>
    </div>
  );
}
