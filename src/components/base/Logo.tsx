import Image from 'next/image';
import React from 'react';

export function Logo({
  className,
  wrapperClasses,
  logoSrc,
}: {
  className?: string;
  wrapperClasses?: string;
  logoSrc: string;
}) {
  return (
    <>
      <figure className={`flex items-center ${wrapperClasses}`}>
        <Image
          className={`object-cover max-w-[202px] max-h-[27px] ${className}`}
          src={logoSrc}
          alt={'logo img'}
          priority
        />
      </figure>
    </>
  );
}
