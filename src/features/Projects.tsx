import React from "react";
import { Section } from "@/components/layout";
import { ProjectHero } from "@/components/ProjectHero";
interface ProjectHeroProps {
  heading: string;
  imageMob?: string;
  imageTab?: string;
  imageDesk?: string;
  imageDeskSmall?: string;
  imageAlt: string;
}

export function Projects({ data }: { data: ProjectHeroProps[] }) {

  return (
    <Section className="w-full">
      <div className="container">
        <div className="col-start-2 col-span-10 xl:col-start-0 flex flex-col gap-5 xl:col-span-12 xl:flex-row">

          <div className={`relative h-full xl:min-h-[640px] `}>
            <ProjectHero item={data[0]} />
          </div>

          <div className={`flex flex-col gap-5`}>
            {data.slice(1).map((item, index) => (
              <div key={index} className={`relative h-full xl:min-h-[308px]`}>
                <ProjectHero item={item} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
