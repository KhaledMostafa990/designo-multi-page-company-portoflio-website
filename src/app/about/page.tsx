import { AboutStorySection } from './../../features/aboutPage/AboutStorySection';

import { aboutData, ourLocations } from '@/data/global';

import { AboutHero } from '@/features/aboutPage/AboutHero';
import { LocationItem } from '@/features/locationsPage/LocationItem';
import { Section } from '@/components/layout';

import bgCirlceSmall from '/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from '/public/assets/home/desktop/bg-pattern-hero-home.svg';

export const metadata = {
  title: 'About'
}

export default function About() {
  const { heroData, ourTalent, ourDeal } = aboutData;

  return (
    <>
      <Section>
        <div className='container'>
          <div
            className="col-start-0 col-span-12 w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:h-full xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            <AboutHero {...heroData} />
          </div>
        </div>
      </Section>

      <Section>
        <div className='container'>
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row xl:col-start-0 xl:col-span-12"
          >
            <AboutStorySection
              data={ourTalent}
              bgCirlceSmall={bgCirlceSmall}
              bgPatternImageLarge={bgPatternImageLarge}
            />
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

      <Section dataSection={`talent`} className='w-full'>
        <div className='container'>
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            <AboutStorySection
              data={ourDeal}
              bgCirlceSmall={bgCirlceSmall}
              bgPatternImageLarge={bgPatternImageLarge}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
