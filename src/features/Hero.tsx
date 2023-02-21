import React from 'react'
import Image from 'next/image';
import { Section } from '@/components/layout';
import { PrimaryButton } from '@/components/base';

interface HeroProps {
  data: {
    heroHeading: string,
    heroDescription: string,
    heroBtnText: string,
    heroBgImageDisk: string,
    heroImage: string
  }
}

export default function Hero(data: HeroProps) {
  const { heroHeading, heroDescription, heroBtnText, heroBgImageDisk, heroImage } = data.data;

  return (
    <Section
      dataSection='home'
      className='w-full'
    >
      <div className='container'>
        <div className=" bg-primary-default col-start-0 col-span-12 w-full
            relative overflow-hidden flex flex-col-reverse
            md:col-start-2 md:col-span-10 md:rounded-2xl  xl:flex-row-reverse xl:h-[640px] xl:col-start-0 xl:col-span-12">

          {/* background image */}
          <figure
            className="absolute top-[9%] left-[0%]
          md:top-[12%] md:left-[22%] xl:top-0 xl:left-[44%]"
          >
            <Image
              className=" min-w-[640px] min-h-[640px]"
              src={heroBgImageDisk}
              width={640}
              height={639}
              priority
              alt="A beautiful background circle" />
          </figure>

          {/*hero image*/}
          <figure
            className='overflow-hidden relative w-full min-h-[45vh] md:min-h-[50vh]
            xl:flex-1'
          >
            <Image
              className='min-w-[550px] max-w-[550px] min-h-fit max-h-[913px]
              absolute top-[-15%] left-[50%] translate-y-[0%] translate-x-[-50%]
              md:max-w-full md:top-[-20%] xl:top-[5%]'
              src={heroImage}
              width={624}
              height={913}
              priority
              alt="A Phone-like Hero Image"
            />

          </figure>

          {/* Hero Content */}
          <div className='text-white flex flex-col justify-center px-4 pt-14 items-center gap-6 text-center z-10 xl:pl-24 xl:text-start xl:items-start'
          >
            <h1 className='text-3xl max-w-sm md:max-w-xl xl:text-5xl'>
              {heroHeading}
            </h1>

            <p
              className='max-w-sm'>
              {heroDescription}
            </p>

            <PrimaryButton onLight={false} classes=''>
              {heroBtnText}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section >
  )
}

