import { Metadata } from 'next';
import { projectsData, bgPatternOneCircleSmall, bgPatternCircleProjectLarge } from '@/data/global';
import { Section } from '@/components/layout';
import { ProjectsPageHero } from '@/features/ProjectsPage/ProjectsPageHero';
import { ProjectCard } from '@/features/ProjectsPage/ProjectCard';
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbJsonLd,
  generateArticleJsonLd,
} from '@/lib/seo';
import Script from 'next/script';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; project: string }>;
}): Promise<Metadata> {
  const { project: projectId, locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';
  const messages = (await import(`../../../../../messages/${locale}.json`)).default as any;

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) {
    return generateSEOMetadata({ locale });
  }

  const projectKey =
    project.id === 'web-design'
      ? 'WebDesign'
      : project.id === 'app-design'
        ? 'AppDesign'
        : 'GraphicDesign';
  const title = messages?.Projects?.[projectKey]?.Title ?? project.heading;
  const description = messages?.Projects?.[projectKey]?.Description ?? project.introDescription;

  const keywords =
    {
      'web-design': [
        'web design',
        'responsive websites',
        'e-commerce',
        'web development',
        'UI design',
      ],
      'app-design': [
        'app design',
        'mobile apps',
        'iOS design',
        'Android design',
        'user experience',
      ],
      'graphic-design': [
        'graphic design',
        'branding',
        'print design',
        'logo design',
        'visual identity',
      ],
    }[project.id] || [];

  return generateSEOMetadata({
    title,
    description,
    keywords: [...keywords, 'designo', 'creative agency', 'portfolio'],
    locale,
    url: `${baseUrl}/${locale}/projects/${project.id}`,
    type: 'article',
    alternateLocales: [
      { locale: 'en', url: `${baseUrl}/en/projects/${project.id}` },
      { locale: 'ar', url: `${baseUrl}/ar/projects/${project.id}` },
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; project: string }>;
}) {
  const { project: projectId, locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`)).default as any;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }

  const projectKey =
    project.id === 'web-design'
      ? 'WebDesign'
      : project.id === 'app-design'
        ? 'AppDesign'
        : 'GraphicDesign';
  const title = messages?.Projects?.[projectKey]?.Title ?? project.heading;
  const description = messages?.Projects?.[projectKey]?.Description ?? project.introDescription;

  const breadcrumbs = [
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: title, url: `${baseUrl}/${locale}/projects/${project.id}` },
  ];

  const articleData = {
    title,
    description,
    url: `${baseUrl}/${locale}/projects/${project.id}`,
    image: `${baseUrl}${project.imageDesk}`,
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbJsonLd(breadcrumbs)),
        }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleJsonLd(articleData)),
        }}
      />
      {(() => {
        // Translate individual projects with proper key mapping
        const translatedProjects = project.projects.map((proj) => {
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
            description: messages?.Projects?.[projectKey]?.[translationKey] ?? proj.description,
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
                    heading={title}
                    introDescription={description}
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
      })()}
    </>
  );
}
