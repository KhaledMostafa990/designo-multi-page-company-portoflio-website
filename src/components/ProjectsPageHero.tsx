import React from "react";
import Image from "next/image";

export function ProjectsPageHero({
  heading,
  introDescription,
  bgCirlceSmall,
  bgPatternImageLarge,
}: {

  bgCirlceSmall: any;
  bgPatternImageLarge: any;
  heading: string;
  introDescription: string;
}) {
  return (
    <>
      {/* background image */}
      <picture className="absolute top-[0%] right-[0%] w-fit h-auto">
        <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
        <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />

        <Image className="min-w-[292px] min-h-[292px] max-w-full max-h-full" src={bgCirlceSmall} priority alt="A beautiful background circle" />
      </picture>


      {/* Hero Content */}
      <div className='text-white h-full flex flex-col justify-center  items-center gap-8 px-2 text-center'>
        <h1 className='text-3xl md:text-5xl'>
          {heading}
        </h1>

        <p className='max-w-[355px]'>
          {introDescription}
        </p>

      </div>
    </>
  );
}
