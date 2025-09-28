import bgCirlceSmall from 'public/assets/shared/desktop/bg-pattern-small-circle.svg';
import bgPatternImageLarge from 'public/assets/home/desktop/bg-pattern-hero-home.svg';
import { AboutStorySection } from '@/features/aboutPage/AboutStorySection';
import { aboutData, ourLocations } from '@/data/global';
import { AboutHero } from '@/features/aboutPage/AboutHero';
import { LocationItem } from '@/features/locationsPage/LocationItem';
import { Section } from '@/components/layout';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';
  const messages = (await import(`../../../../messages/${locale}.json`)).default as any;

  return generateSEOMetadata({
    title: messages?.About?.Hero?.Heading || 'About Us',
    description:
      messages?.About?.Hero?.Description ||
      'Founded in 2010, we are a creative agency that produces lasting results for our clients. We craft designs that make real impact.',
    keywords: [
      'about designo',
      'creative agency',
      'design team',
      'company history',
      'our story',
      'design professionals',
    ],
    locale,
    url: `${baseUrl}/${locale}/about`,
    alternateLocales: [
      { locale: 'en', url: `${baseUrl}/en/about` },
      { locale: 'ar', url: `${baseUrl}/ar/about` },
    ],
  });
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default as any;

  const heroDataLoc = {
    ...aboutData.heroData,
    heading: messages?.About?.Hero?.Heading ?? aboutData.heroData.heading,
    description: messages?.About?.Hero?.Description ?? aboutData.heroData.description,
  };

  // Translate talent section
  const translatedOurTalent = {
    ...aboutData.ourTalent,
    heading: messages?.About?.WorldClassTalent?.Title ?? aboutData.ourTalent.heading,
    description1:
      messages?.About?.WorldClassTalent?.Description ?? aboutData.ourTalent.description1,
  };

  // Translate deal section
  const translatedOurDeal = {
    ...aboutData.ourDeal,
    heading: messages?.About?.RealDeal?.Title ?? aboutData.ourDeal.heading,
    description1: messages?.About?.RealDeal?.Description ?? aboutData.ourDeal.description1,
  };

  // Translate locations data
  const translatedLocations = ourLocations.map((location) => ({
    ...location,
    country: messages?.Locations?.[location.country]?.Title ?? location.country,
  }));

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';
  const breadcrumbs = [
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: messages?.About?.Hero?.Heading || 'About Us', url: `${baseUrl}/${locale}/about` },
  ];

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
            className="col-start-0 col-span-12 w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:h-full xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            <AboutHero {...heroDataLoc} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row xl:col-start-0 xl:col-span-12"
          >
            <AboutStorySection
              data={translatedOurTalent}
              bgCirlceSmall={bgCirlceSmall}
              bgPatternImageLarge={bgPatternImageLarge}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div
            className="col-start-2 col-span-10 flex flex-col gap-8
            xl:col-start-0 xl:col-span-12 xl:flex-row xl:gap-36 xl:justify-center"
          >
            {translatedLocations.map((location) => (
              <LocationItem
                key={location.country}
                location={location}
                seeLocationText={messages?.Locations?.SeeLocation ?? 'SEE LOCATION'}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section dataSection={`talent`} className="w-full">
        <div className="container">
          <div
            className="col-start-0 col-span-12 
            w-full h-full overflow-hidden flex flex-col
            md:col-start-2 md:col-span-10 md:rounded-2xl
            xl:flex-row-reverse xl:col-start-0 xl:col-span-12"
          >
            <AboutStorySection
              data={translatedOurDeal}
              bgCirlceSmall={bgCirlceSmall}
              bgPatternImageLarge={bgPatternImageLarge}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
