import { Section } from "@/components/layout";
import { ProjectHero } from "@/features/ProjectsPage/ProjectHero";
import { projectsData } from "@/data/global";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { project: string };
}) {
  const { project: projectId } = params;
  const filteredProjectData = projectsData.filter(project => project.id !== projectId);
  return (
    <>
      {children}

      <Section>
        <div className='container' >
          <div
            className="col-start-2 col-span-10
            xl:justify-center xl:col-start-0 xl:col-span-12">

            <div className={`flex flex-col gap-5 xl:flex-row`}>
              {filteredProjectData.map((item, index) => (
                <div key={index} className={`relative h-auto`}>
                  <ProjectHero item={item} projectPage />
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}
