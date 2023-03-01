import React from 'react'
import Image from 'next/image';
import { Section } from '@/components/layout';
import { PrimaryButton } from '@/components/base';

interface HeroProps {
  data: {
    heroHeading: string,
    heroDescription: string,
    heroBtnText: string,
    heroBgImageDisk: any,
    heroImage: any
  }
}

export default function Hero(data: HeroProps) {
  const { heroHeading, heroDescription, heroBtnText, heroBgImageDisk, heroImage } = data.data;

  return (
    <>
      {/* background image */}
      <figure
        className="absolute top-[9%] left-[0%]
        md:top-[12%] md:left-[22%] xl:top-0 xl:left-[44%]"
      >
        <Image
          className="w-[640px] h-[640px] min-w-[640px] min-h-[640px] max-w-[640px] max-h-[640px]"
          src={heroBgImageDisk}
          priority
          alt="A beautiful background circle"
        />
      </figure>

      {/*hero image*/}
      <figure
        className='overflow-hidden relative w-full min-h-[450px]
            xl:flex-1'
      >
        <Image
          className='min-w-[550px] max-w-[550px] min-h-fit max-h-[913px]
          absolute top-[-15%] left-[50%] translate-y-[0%] translate-x-[-50%]
          md:max-w-full md:top-[-20%] xl:top-0'
          src={heroImage}
          loading='lazy'
          alt="A Phone-like Hero Image"
        />

      </figure>

      {/* Hero Content */}
      <div
        className='text-white flex flex-col justify-center px-4 pt-14 items-center gap-8 text-center z-10
        xl:pl-[72px] xl:pt-36 xl:text-start xl:items-start xl:justify-start'
      >
        <h1 className='text-3xl max-w-sm md:max-w-xl md:text-5xl'>
          {heroHeading}
        </h1>

        <p
          className='max-w-md'>
          {heroDescription}
        </p>

        <PrimaryButton onLight={false}>
          {heroBtnText}
        </PrimaryButton>
      </div>
    </>
  )
}

