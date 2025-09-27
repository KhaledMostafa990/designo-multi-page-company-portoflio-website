'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import bgCirlceSmall from 'public/assets/shared/desktop/bg-pattern-small-circle.svg';
import { LocationInfo } from '@/components/base';
import { Section } from '@/components/layout';
import type { LocationData } from '@/types/locations';
import { scrollIntoView } from '@/utils/scrollIntoView';

export default function Location({ location, index }: { location: LocationData; index: number }) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleSetLocation = (loc: string) => {
    const section = document.querySelector(`[data-section="${loc}"]`);
    if (section) scrollIntoView(section, 'center');
  };

  useEffect(() => {
    setSelectedLocation(window.location.hash.slice(1));

    if (selectedLocation) {
      handleSetLocation(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <Section
      dataSection={location.country.toLowerCase().replace(' ', '-')}
      id={location.country.toLowerCase().replace(' ', '-')}
    >
      <div className="container">
        <div
          className={`col-start-0 col-span-12 
              w-full h-full overflow-hidden flex flex-col
              md:col-start-2 md:col-span-10 md:rounded-2xl
              xl:col-start-0 xl:col-span-12 xl:gap-8
              ${index === 1 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}
        >
          {/* Map Image */}
          <picture className="relative z-10 w-full h-auto xl:max-w-fit">
            <Image
              className="w-full h-[326px] max-h-auto
                  md:rounded-t-xl xl:rounded-xl xl:w-fit xl:max-w-[350px]"
              src={location.mapImageTab}
              priority
              alt="A beautiful background circle"
            />
          </picture>

          {/* Location Details */}
          <div
            className="relative h-[385px] bg-primary-default/10
                md:rounded-b-xl overflow-hidden xl:rounded-xl xl:flex-1 xl:h-auto"
          >
            {/* background image */}
            <picture
              className="absolute top-[-20%] left-[0%] w-fit h-auto
                  md:top-[10%] md:flex md:h-fit"
            >
              <Image
                className="min-w-[292px] min-h-[292px]"
                src={bgCirlceSmall}
                priority
                alt="A beautiful background circle"
              />
              <Image
                className="hidden md:block min-w-[292px] min-h-[292px]"
                src={bgCirlceSmall}
                priority
                alt="A beautiful background circle"
              />
            </picture>

            <div
              className="text-black h-full flex flex-col justify-center items-center gap-8 px-4 text-center
                md:text-start md:items-start md:w-fit md:mx-auto xl:text-start"
            >
              <h2 className="text-primary-default text-3xl md:text-4xl md:text-start">
                {location.country}
              </h2>

              <div
                className="flex flex-col items-center gap-8 
                    md:gap-12 md:flex-row"
              >
                <LocationInfo onFooter={false} location={location} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
