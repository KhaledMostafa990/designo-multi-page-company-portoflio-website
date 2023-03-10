import Image from 'next/image';

import { contactData, ourLocations } from '@/data/global';

import { Section } from '@/components/layout';
import { ContactForm } from '@/components/ContactForm';
import { LocationItem } from '@/features/locationsPage/LocationItem';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  const { heading, description, formInputs, bgSmall } = contactData;

  return (
    <>
      <Section dataSection={`hero`} className="w-full">
        <div className="container">
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            <div
              className="py-20 bg-primary-default relative md:rounded-b-xl overflow-hidden flex flex-col gap-16
              md:px-14 xl:flex-row xl:rounded-b-none xl:rounded-l-xl xl:gap-10"
            >
              <ContactIntro heading={heading} description={description} bgSmall={bgSmall} />

              <ContactForm formInputs={formInputs} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div
            className="col-start-2 col-span-10 flex flex-col gap-8
              xl:col-start-0 xl:col-span-12 xl:flex-row xl:gap-36 xl:justify-center"
          >
            {ourLocations.map((location) => (
              <LocationItem key={location.country} location={location} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactIntro({
  heading,
  description,
  bgSmall,
}: {
  heading: string;
  description: string;
  bgSmall: any;
}) {
  return (
    <>
      <picture className="flex absolute top-[10%] left-[-15%] md:top-[-5%] md:left-[-5%] w-fit h-auto">
        <Image
          className="min-w-[292px] min-h-[292px]
          md:min-w-[640px] md:min-h-[640px]"
          src={bgSmall}
          priority
          alt="A beautiful background circle"
        />
        <Image
          className="min-w-[292px] min-h-[292px]
          md:min-w-[640px] md:min-h-[640px] md:hidden"
          src={bgSmall}
          priority
          alt="A beautiful background circle"
        />
      </picture>

      {/* Hero Content */}
      <div
        className="text-white h-full flex flex-col justify-center items-center gap-8 px-2 text-center md:text-start
      md:items-start xl:flex-1 xl:justify-start xl:py-16"
      >
        <h1 className="text-3xl md:text-5xl">{heading}</h1>

        <p className="max-w-[355px] md:max-w-2xl">{description}</p>
      </div>
    </>
  );
}
