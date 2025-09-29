'use client';

import { useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

export interface UseScrollDirectionOptions {
  threshold?: number; // minimum delta before toggling direction
  throttleMs?: number; // minimum time between handler invocations
}

export interface UseScrollDirectionResult {
  direction: ScrollDirection;
  isAtTop: boolean;
  lastY: number;
}

/**
 * Detects scroll direction with threshold and throttle, and flags when near top.
 * - Treats scrollY <= 2 * threshold as "at top" and forces direction to 'up'.
 * - Uses passive listeners and cleans up on unmount.
 */
export function useScrollDirection(
  options: UseScrollDirectionOptions = {},
): UseScrollDirectionResult {
  const { threshold = 12, throttleMs = 80 } = options;
  const [direction, setDirection] = useState<ScrollDirection>('up');
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const lastYRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);

  useEffect(() => {
    // Initialize position on mount
    lastYRef.current = typeof window !== 'undefined' ? window.scrollY : 0;
    const onScroll = () => {
      const now = performance.now();
      if (now - lastTickRef.current < throttleMs) return;
      lastTickRef.current = now;

      const y = window.scrollY || 0;
      const atTop = y <= 2 * threshold;
      setIsAtTop(atTop);

      const delta = Math.abs(y - lastYRef.current);
      if (atTop) {
        // Force upward state near the top
        if (direction !== 'up') setDirection('up');
        lastYRef.current = y;
        return;
      }

      if (delta > threshold) {
        setDirection(y > lastYRef.current ? 'down' : 'up');
        lastYRef.current = y;
      }
    };

    // Passive scroll listener for smoothness
    window.addEventListener('scroll', onScroll, { passive: true });
    // Also update on resize (e.g., mobile address bar show/hide)
    window.addEventListener('resize', onScroll, { passive: true });

    // Prime initial state
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll as EventListenerOrEventListenerObject);
      window.removeEventListener('resize', onScroll as EventListenerOrEventListenerObject);
    };
  }, [threshold, throttleMs, direction]);

  return {
    direction,
    isAtTop,
    lastY: lastYRef.current,
  };
}
