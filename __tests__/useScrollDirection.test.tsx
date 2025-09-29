import { renderHook, act } from '@testing-library/react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

function setScrollY(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, writable: true });
  window.dispatchEvent(new Event('scroll'));
}

describe('useScrollDirection', () => {
  test('defaults to up and at top', () => {
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current.direction).toBe('up');
    expect(result.current.isAtTop).toBe(true);
  });

  test('scrolling down beyond threshold sets direction to down', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useScrollDirection({ threshold: 12, throttleMs: 0 }));
    act(() => setScrollY(30)); // 30 > 2 * threshold (24), so not "at top" anymore
    jest.advanceTimersByTime(0);
    expect(result.current.direction).toBe('down');
    jest.useRealTimers();
  });

  test('near top forces up state', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useScrollDirection({ threshold: 12, throttleMs: 0 }));
    act(() => setScrollY(5));
    jest.advanceTimersByTime(0);
    expect(result.current.isAtTop).toBe(true);
    expect(result.current.direction).toBe('up');
    jest.useRealTimers();
  });
});