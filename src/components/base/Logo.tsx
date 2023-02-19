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
          className={`object-cover ${className}`}
          src={logoSrc}
          alt={'logo img'}
          width={139}
          height={20}
        />
      </figure>
    </>
  );
}
