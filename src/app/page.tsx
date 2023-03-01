import { projectsData, heroData, valuesData } from '@/data/global';

import { Section } from '@/components/layout';
import Projects from '@/features/Projects';
import Hero from "@/features/Hero";
import Values from "@/features/Values";

export default function Home() {

  return (
    <>
      <Section>
        <div className='container'>
          <div
            className="h-[880px] bg-primary-default col-start-0 col-span-12 w-full
            relative overflow-hidden flex flex-col-reverse
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row-reverse xl:h-[640px] xl:col-start-0 xl:col-span-12"
          >

            <Hero data={heroData} />

          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div
            className="col-start-2 col-span-10 xl:col-start-0 flex flex-col gap-5
            xl:col-span-12 xl:flex-row"
          >

            <Projects data={projectsData} />

          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div
            className="col-start-2 col-span-10 xl:col-start-0 flex flex-col gap-5
            xl:col-span-12 xl:flex-row"
          >
            <div className="relative flex flex-col items-center w-full h-auto gap-10
            xl:flex-row">

              {valuesData.map((value) => (
                <Values value={value} key={value.heading} />
              ))}

            </div>
          </div>
        </div>
      </Section>
    </>
  );
}





