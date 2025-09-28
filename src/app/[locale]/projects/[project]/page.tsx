import { Metadata } from 'next';
import { projectsData, bgPatternOneCircleSmall, bgPatternCircleProjectLarge } from '@/data/global';
import { Section } from '@/components/layout';
import { ProjectsPageHero } from '@/features/ProjectsPage/ProjectsPageHero';
import { ProjectCard } from '@/features/ProjectsPage/ProjectCard';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; project: string }>;
}): Promise<Metadata> {
  const { project: projectId } = await params;

  const project = projectsData.find((p) => p.id === projectId);

  return {
    title: project?.heading,
    description: project?.introDescription,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; project: string }>;
}) {
  const { project: projectId, locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`)).default as any;

  return (
    <>
      {projectsData
        .filter((project) => project.id === projectId)
        .map((project) => {
          const projectKey = project.id === 'web-design' ? 'WebDesign' : 
                           project.id === 'app-design' ? 'AppDesign' : 'GraphicDesign';
          const heading = messages?.Projects?.[projectKey]?.Title ?? project.heading;
          const introDescription = messages?.Projects?.[projectKey]?.Description ?? project.introDescription;
          
          // Translate individual projects with proper key mapping
          const translatedProjects = project.projects.map(proj => {
            // Map project titles to translation keys
            let translationKey = proj.title;
            
            // Handle special cases where title doesn't match translation key
            if (proj.title === 'Tim Brown') {
              translationKey = 'Change';
            } else if (proj.title === 'Boxed Water') {
              translationKey = 'BoxedWater';
            } else if (proj.title === 'Science!') {
              translationKey = 'Science';
            }
            
            return {
              ...proj,
              description: messages?.Projects?.[projectKey]?.[translationKey] ?? proj.description
            };
          });
          
          return (
          <>
            <Section>
              <div className="container">
                <div
                  className="h-[320px] bg-primary-default col-start-0 col-span-12 w-full relative overflow-hidden
                  md:py-8 md:col-start-2 md:col-span-10 md:rounded-2xl xl:col-start-0 xl:col-span-12"
                >
                  <ProjectsPageHero
                    heading={heading}
                    introDescription={introDescription}
                    bgPatternSmall={bgPatternOneCircleSmall}
                    bgPatternLarge={bgPatternCircleProjectLarge}
                  />
                </div>
              </div>
            </Section>

            <Section>
              <div className="container">
                <div
                  className="col-start-2 col-span-10 flex flex-col gap-8
                  xl:col-start-0 xl:col-span-12 xl:flex-row xl:flex-wrap xl:gap-4"
                >
                  {translatedProjects.map((projectInfo: any) => (
                    <ProjectCard key={projectInfo.title} project={projectInfo} />
                  ))}
                </div>
              </div>
            </Section>
          </>
          );
        })}
    </>
  );
}
