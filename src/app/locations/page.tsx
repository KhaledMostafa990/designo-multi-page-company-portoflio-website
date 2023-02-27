import { LocationInfo } from "@/components/base";
import { Section } from "@/components/layout";
import { ourLocations } from "@/data/global";
import Image from "next/image";
import bgCirlceSmall from '/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from '/public/assets/home/desktop/bg-pattern-hero-home.svg';

interface LocationData {
  country: string;
  officeName: string;
  fullAddress: string;
  phone: string;
  email: string;
  mapImageTab: any;
  mapImageDesk: any;
  image: any;
}


export default function Locations() {
  return (
    <>
      {ourLocations.map((location: LocationData, index) => (

        <Section key={location.country} dataSection={`hero`} className='w-full'>
          <div className='container'>
            <div
              className={`col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:col-start-0 xl:col-span-12 xl:gap-10 ${index === 1 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}
            >

              {/* Map Image */}
              <picture className="relative z-10 w-full h-fit xl:w-fit">
                <source media="(min-width: 768px)" srcSet={location.mapImageTab} />
                <source media="(min-width: 1440px)" srcSet={location.mapImageDesk} />

                <Image
                  className=" min-w-full min-h-[320px] max-w-full max-h-full
                  md:rounded-t-xl xl:rounded-xl xl:w-[350px] "
                  src={location.mapImageTab}
                  priority
                  width={320}
                  height={320}
                  alt="A beautiful background circle"
                />
              </picture>

              {/* Location Details */}
              <div className="h-[385px] bg-primary-default/10 relative md:rounded-b-xl overflow-hidden xl:rounded-xl xl:flex-1 xl:h-auto">
                {/* background image */}
                <picture className="absolute top-[-20%] left-[0%] w-fit h-auto">
                  <source media="(max-width: 767px)" srcSet={bgCirlceSmall} />
                  <source media="(min-width: 768px)" srcSet={bgPatternImageLarge} />

                  <Image
                    className="min-w-[292px] min-h-[292px] max-w-full max-h-full" src={bgCirlceSmall}
                    priority
                    alt="A beautiful background circle"
                  />
                </picture>

                <div className='text-black h-full flex flex-col justify-center items-center gap-8 px-4 text-center
                md:text-start md:items-start md:w-fit md:mx-auto xl:text-start'>

                  <h2 className='text-primary-default text-3xl md:text-4xl md:text-start'>
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
      ))}
    </>
  );
}
