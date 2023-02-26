"use client";
import { projectsData, ProjectsDataProps } from "@/data/global";
import { Section } from "@/components/layout";
import { ProjectsPageHero } from '@/components/ProjectsPageHero';
import { ProjectCard } from '@/components/ProjectCard';

import bgCirlceSmall from '/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from '/public/assets/shared/desktop/bg-pattern-call-to-action.svg';

export default function Page({ params }: { params: { project: string } }) {
  const { project: projectId } = params;
  const data: ProjectsDataProps = projectsData.filter((project: ProjectsDataProps) => project.id === projectId)[0];
  console.log(projectId, data)

  return (
    <>
      <Section dataSection={`${projectId}}`} className='w-full'>
        <div className='container'>
          <div
            className="h-[320px] bg-primary-default col-start-0 col-span-12 
            w-full relative overflow-hidden
            md:py-8 md:col-start-2 md:col-span-10 md:rounded-2xl xl:col-start-0 xl:col-span-12"
          >
            <ProjectsPageHero
              heading={data.heading}
              introDescription={data.introDescription}
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
            xl:justify-center xl:col-start-0 xl:col-span-12 xl:flex-row xl:flex-wrap xl:gap-5"
          >
            {data.projects.map((projectInfo: any) => (
              <ProjectCard key={projectInfo.title} project={projectInfo} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
