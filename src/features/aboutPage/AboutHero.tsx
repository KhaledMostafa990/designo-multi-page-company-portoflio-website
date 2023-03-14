import React from 'react';
import Image from 'next/image';

export function AboutHero({
  imageDesk,
  bgSmall,
  bgLarge,
  heading,
  description,
}: {
  imageMob: any;
  imageTab: any;
  imageDesk: any;
  bgSmall: any;
  bgLarge: any;
  heading: string;
  description: string;
}) {
  return (
    <>
      {/* Hero Image */}
      <picture className="relative z-10 w-full h-auto xl:w-fit">
        <Image
          className="w-full h-auto
          md:rounded-t-xl xl:rounded-t-none xl:rounded-r-xl xl:w-[476px]"
          src={imageDesk}
          priority
          width={350}
          height={350}
          alt="A beautiful background circle"
        />
      </picture>

      <div
        className="h-[385px] bg-primary-default relative md:rounded-b-xl overflow-hidden
        xl:rounded-b-none xl:h-full xl:min-h-full xl:rounded-l-xl xl:flex-1"
      >
        {/* background image */}
        <picture className="absolute top-[-40%] right-[0%] w-fit h-auto">
          <source media="(max-width: 767px)" srcSet={bgSmall} />
          <source media="(min-width: 768px)" srcSet={bgLarge} />

          <Image
            className="min-w-[292px] min-h-[292px] max-w-full max-h-full"
            src={bgSmall}
            priority
            alt="A beautiful background circle"
          />
        </picture>

        {/* Hero Content */}
        <div className="text-white h-full flex flex-col justify-center items-center gap-8 px-2 text-center xl:text-start xl:items-start xl:pl-20">
          <h1 className="text-3xl md:text-5xl">{heading}</h1>

          <p className="max-w-[355px] xl:max-w-md">{description}</p>
        </div>
      </div>
    </>
  );
}
