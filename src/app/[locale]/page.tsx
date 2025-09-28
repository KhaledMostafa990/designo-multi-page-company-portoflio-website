import { projectsData, heroData as baseHeroData, valuesData } from '@/data/global';

import { Section } from '@/components/layout';
import Projects from '@/features/Projects';
import Hero from '@/features/Hero';
import Values from '@/features/Values';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default as any;

  const heroData = {
    ...baseHeroData,
    heroHeading: messages?.Home?.Hero?.Heading ?? baseHeroData.heroHeading,
    heroDescription: messages?.Home?.Hero?.Description ?? baseHeroData.heroDescription,
    heroBtnText: messages?.Home?.Hero?.Button ?? baseHeroData.heroBtnText,
  };

  // Translate projects data
  const translatedProjectsData = projectsData.map(project => ({
    ...project,
    heading: messages?.Home?.Services?.[project.id === 'web-design' ? 'WebDesign' : project.id === 'app-design' ? 'AppDesign' : 'GraphicDesign'] ?? project.heading,
  }));

  // Translate values data
  const translatedValuesData = valuesData.map(value => {
    const valueKey = value.heading; // 'Passionate', 'Resourceful', 'Friendly'
    return {
      ...value,
      heading: messages?.Home?.Values?.[valueKey]?.Title ?? value.heading,
      description: messages?.Home?.Values?.[valueKey]?.Description ?? value.description,
    };
  });

  return (
    <>
      <Section>
        <div className="container">
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
            <Projects 
              data={translatedProjectsData} 
              viewProjectText={messages?.Projects?.ViewProject ?? 'View Project'} 
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div
            className="col-start-2 col-span-10 xl:col-start-0 flex flex-col gap-5
            xl:col-span-12 xl:flex-row"
          >
            <div
              className="relative flex flex-col items-center w-full h-auto gap-10
            xl:flex-row"
            >
              {translatedValuesData.map((value) => (
                <Values value={value} key={value.heading} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
