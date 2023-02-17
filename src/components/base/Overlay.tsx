import React from 'react';

export function Overlay({ overlayRef }: { overlayRef: any }) {
  return (
    <div
      ref={overlayRef}
      className="lg:hidden w-screen fixed left-0 top-0 [&.active]:h-screen transition-all duration-500 [&.active]:bg-black/40 z-10"
    />
  );
}
