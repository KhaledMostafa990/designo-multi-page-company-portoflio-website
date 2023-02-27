import React from 'react';
import { aboutData, ourLocations } from '@/data/global';
import { Section } from '@/components/layout';
import Image from 'next/image';
import bgCirlceSmall from '/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from '/public/assets/home/desktop/bg-pattern-hero-home.svg';
import { PrimaryButton } from '@/components/base';
import Link from 'next/link';

export default function About() {
  const { heading, description, imageMob, imageTab, imageDesk, ourTalent, ourDeal } = aboutData;
  return (
    <>
      <Section dataSection={`hero`} className='w-full'>
        <div className='container'>
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            {/* Hero Image */}
            <picture className="relative z-10 w-full h-auto xl:w-fit">
              <source media="(max-width: 767px)" srcSet={imageMob} />
              <source media="(min-width: 768px)" srcSet={imageTab} />
              <source media="(min-width: 1440px)" srcSet={imageDesk} />

              <Image
                className=" min-w-full min-h-full max-w-full max-h-full
                md:rounded-t-xl xl:rounded-t-none xl:rounded-r-xl xl:w-[476px] "
                src={imageMob}
                priority
                width={320}
                height={320}
                alt="A beautiful background circle"
              />
            </picture>

            <div className="h-[385px] bg-primary-default relative md:rounded-b-xl overflow-hidden xl:rounded-b-none xl:rounded-l-xl xl:flex-1">
              {/* background image */}
              <picture className="absolute top-[-40%] right-[0%] w-fit h-auto">
                <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
                <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />

                <Image
                  className="min-w-[292px] min-h-[292px] max-w-full max-h-full" src={bgCirlceSmall}
                  priority
                  alt="A beautiful background circle"
                />
              </picture>


              {/* Hero Content */}
              <div className='text-white h-full flex flex-col justify-center items-center gap-8 px-2 text-center xl:text-start xl:items-start xl:pl-20'>
                <h1 className='text-3xl md:text-5xl'>
                  {heading}
                </h1>

                <p className='max-w-[355px] xl:max-w-md'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dataSection={`talent`} className='w-full'>
        <div className='container'>
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row xl:col-start-0 xl:col-span-12"
          >
            {/* Hero Image */}
            <picture className="relative z-10 w-full h-auto xl:w-fit">
              <source media="(max-width: 767px)" srcSet={ourTalent.imageMob} />
              <source media="(min-width: 768px)" srcSet={ourTalent.imageTab} />
              <source media="(min-width: 1440px)" srcSet={ourTalent.imageDesk} />

              <Image
                className=" min-w-full min-h-full max-w-full max-h-full
                md:rounded-t-xl xl:rounded-t-none xl:rounded-l-xl xl:w-[476px] xl:min-h-[680px]"
                src={ourTalent.imageMob}
                priority
                width={320}
                height={320}
                alt="A beautiful background circle"
              />
            </picture>

            <div className="h-[545px] bg-primary-default/10 relative overflow-hidden md:h-fit md:py-16 md:rounded-b-xl xl:rounded-b-none xl:rounded-r-xl xl:h-full xl:flex-1">
              {/* background image */}
              <picture className="absolute top-[-40%] right-[0%] w-fit h-auto">
                <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
                <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />

                <Image
                  className="min-w-[292px] min-h-[292px] max-w-full max-h-full" src={bgCirlceSmall}
                  priority
                  alt="A beautiful background circle"
                />
              </picture>


              {/* Hero Content */}
              <div className='text-black h-full flex flex-col justify-center items-center gap-8 px-4 text-center xl:text-start xl:items-start xl:pl-20'>
                <h2 className='text-primary-default text-2xl md:text-4xl'>
                  {ourTalent.heading}
                </h2>

                <p className='max-w-[355px] md:max-w-xl  xl:max-w-lg'>
                  {ourTalent.description1}
                </p>

                <p className='max-w-[355px] md:max-w-xl  xl:max-w-lg'>
                  {ourTalent.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className='container'>
          <div
            className="col-start-2 col-span-10 flex flex-col gap-8
            xl:col-start-0 xl:col-span-12 xl:flex-row xl:gap-36 xl:justify-center"
          >
            {ourLocations.map((location, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-10"
              >
                <figure className="relative rounded-full bg-gradient-to-tr from-light-grey to-white">
                  <Image
                    className="min-w-[202px] min-h-[202px]"
                    src={location.image}
                    width={202}
                    height={202}
                    alt={location.country}
                    priority
                  />
                </figure>

                <div
                  className="flex flex-col items-center gap-6
                  xl:gap-10"
                >
                  <h3 className='text-black text-lg uppercase'>
                    {location.country}
                  </h3>

                  <Link href={`/locations`}>
                    <PrimaryButton onLight> see Location</PrimaryButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dataSection={`talent`} className='w-full'>
        <div className='container'>
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            {/* Hero Image */}
            <picture className="relative z-10 w-full h-auto xl:w-fit">
              <source media="(max-width: 767px)" srcSet={ourDeal.imageMob} />
              <source media="(min-width: 768px)" srcSet={ourDeal.imageTab} />
              <source media="(min-width: 1440px)" srcSet={ourDeal.imageDesk} />

              <Image
                className="min-w-full min-h-full max-w-full max-h-full
                md:rounded-t-xl xl:rounded-t-none xl:rounded-r-xl xl:w-[476px] xl:min-h-[680px]"
                src={ourDeal.imageMob}
                priority
                width={320}
                height={320}
                alt="A beautiful background circle"
              />
            </picture>

            <div className="h-[545px] bg-primary-default/10 relative overflow-hidden md:h-fit md:py-16 md:rounded-b-xl xl:rounded-b-none xl:rounded-l-xl xl:h-full xl:flex-1">
              {/* background image */}
              <picture className="absolute top-[-40%] right-[0%] w-fit h-auto">
                <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
                <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />

                <Image
                  className="min-w-[292px] min-h-[292px] max-w-full max-h-full" src={bgCirlceSmall}
                  priority
                  alt="A beautiful background circle"
                />
              </picture>


              {/* Hero Content */}
              <div className='text-black h-full flex flex-col justify-center items-center gap-8 px-4 text-center xl:text-start xl:items-start xl:pl-20'>
                <h2 className='text-primary-default text-2xl md:text-4xl'>
                  {ourDeal.heading}
                </h2>

                <p className='max-w-[355px] md:max-w-xl  xl:max-w-lg'>
                  {ourDeal.description1}
                </p>

                <p className='max-w-[355px] md:max-w-xl  xl:max-w-lg'>
                  {ourDeal.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
