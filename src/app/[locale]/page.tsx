import { projectsData, heroData as baseHeroData, valuesData } from '@/data/global';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { Section } from '@/components/layout';
import Projects from '@/features/Projects';
import Hero from '@/features/Hero';
import Values from '@/features/Values';
import { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';
  const messages = (await import(`../../../messages/${locale}.json`)).default as any;

  return generateSEOMetadata({
    title:
      messages?.Home?.Hero?.Heading ||
      'Award-winning custom designs and digital branding solutions',
    description:
      messages?.Home?.Hero?.Description ||
      'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.',
    keywords: [
      'web design',
      'app design',
      'graphic design',
      'creative agency',
      'branding',
      'UI/UX',
      'digital marketing',
    ],
    locale,
    url: `${baseUrl}/${locale}`,
    alternateLocales: [
      { locale: 'en', url: `${baseUrl}/en` },
      { locale: 'ar', url: `${baseUrl}/ar` },
    ],
  });
}

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
  const translatedProjectsData = projectsData.map((project) => ({
    ...project,
    heading:
      messages?.Home?.Services?.[
        project.id === 'web-design'
          ? 'WebDesign'
          : project.id === 'app-design'
            ? 'AppDesign'
            : 'GraphicDesign'
      ] ?? project.heading,
  }));

  // Translate values data
  const translatedValuesData = valuesData.map((value) => {
    const valueKey = value.heading; // 'Passionate', 'Resourceful', 'Friendly'
    return {
      ...value,
      heading: messages?.Home?.Values?.[valueKey]?.Title ?? value.heading,
      description: messages?.Home?.Values?.[valueKey]?.Description ?? value.description,
    };
  });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';
  const breadcrumbs = [{ name: 'Home', url: `${baseUrl}/${locale}` }];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbJsonLd(breadcrumbs)),
        }}
      />
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
