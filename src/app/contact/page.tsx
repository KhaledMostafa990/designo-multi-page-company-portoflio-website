import React from 'react';
import Image from "next/image";
import { Section } from "@/components/layout";
import { contactData, ourLocations } from '@/data/global';
import bgCirlceSmall from '/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from '/public/assets/home/desktop/bg-pattern-hero-home.svg';
import { PrimaryButton } from '@/components/base';
import { LocationItem } from '@/components/LocationItem';

export default function Contact() {
  const { heading, description, formInput } = contactData;
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

            <div className="py-20 bg-primary-default relative md:rounded-b-xl overflow-hidden flex flex-col gap-16 md:px-14 xl:flex-row xl:rounded-b-none xl:rounded-l-xl xl:gap-10">
              {/* background image */}
              <picture className="absolute top-[10%] left-[15%] md:top-[-5%] md:left-[-5%] w-fit h-auto">
                <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
                <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />

                <Image
                  className="min-w-[292px] min-h-[292px] md:min-w-[640px] md:min-h-[640px] max-w-full max-h-full" src={bgCirlceSmall}
                  priority
                  alt="A beautiful background circle"
                />
              </picture>


              {/* Hero Content */}
              <div className='text-white h-full flex flex-col justify-center items-center gap-8 px-2 text-center md:text-start md:items-start xl:flex-1 xl:justify-start py-16'>
                <h1 className='text-3xl md:text-5xl'>
                  {heading}
                </h1>

                <p className='max-w-[355px] md:max-w-2xl'>
                  {description}
                </p>
              </div>

              <form className='flex flex-col items-center justify-center gap-8 px-8 xl:items-start xl:pl-20 xl:flex-1'>

                <div className='w-full flex flex-col gap-2  border-b-2 border-white/20'>
                  <label className='bg-transparent text-white' htmlFor="name">{formInput.name}</label>
                  <input className="h-5 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white " type="text" name="name" id="name" />
                </div>

                <div className='w-full flex flex-col gap-2  border-b-2 border-white/20'>
                  <label className='bg-transparent text-white' htmlFor="email">{formInput.email}</label>
                  <input className="h-5 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white " type="email" name="email" id="email" />
                </div>

                <div className='w-full flex flex-col gap-2  border-b-2 border-white/20'>
                  <label className='bg-transparent text-white' htmlFor="phone">{formInput.phone}</label>
                  <input className="h-5 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white " type="tel" name="phone" id="phone" />
                </div>

                <div className='w-full flex flex-col gap-2  border-b-2 border-white/20'>
                  <label className='bg-transparent text-white' htmlFor="message">{formInput.message}</label>
                  <textarea className='h-24 bg-transparent text-white  focus:outline-none focus:border-b-2 focus:border-white' name="message" id="message" cols={30} rows={10} />
                </div>

                <PrimaryButton onLight={false} classes={'ml-auto px-12'} >{formInput.button}</PrimaryButton>
              </form>

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
              <LocationItem key={location.country} location={location} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
