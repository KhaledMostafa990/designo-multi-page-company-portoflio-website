import React from 'react';
import Image from 'next/image';

export function ProjectsPageHero({
  heading,
  introDescription,
  bgPatternSmall,
  bgPatternLarge,
}: {
  bgPatternSmall: any;
  bgPatternLarge: any;
  heading: string;
  introDescription: string;
}) {
  return (
    <>
      {/* background image */}
      <picture
        className="absolute top-[0%] right-[0%] w-fit h-fit md:top-[-30%]"
        style={{ transform: 'rotate3d(1,0,0,180deg)' }}
      >
        <Image
          className="md:hidden min-w-[292px] min-h-[292px]"
          src={bgPatternSmall}
          priority
          alt="A beautiful background circle"
        />

        <Image
          className="hidden md:block md:min-w-[876px] md:min-h-[584px] md:rotate-[rotateY(180deg)]"
          src={bgPatternLarge}
          priority
          alt="A beautiful background circle"
        />
      </picture>

      {/* Hero Content */}
      <div className="text-white h-full flex flex-col justify-center  items-center gap-8 px-2 text-center">
        <h1 className="text-3xl md:text-5xl">{heading}</h1>

        <p className="max-w-[355px]">{introDescription}</p>
      </div>
    </>
  );
}
