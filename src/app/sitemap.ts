import { MetadataRoute } from 'next';
import { projectsData } from '@/data/global';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';
  const locales = ['en', 'ar'];

  // Static pages for each locale
  const staticPages = [
    '', // home
    '/about', // about
    '/contact', // contact
    '/locations', // locations
  ];

  // Generate sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : ('weekly' as const),
      priority: page === '' ? 1 : 0.8,
      alternates: {
        languages: locales.reduce(
          (acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${page}`;
            return acc;
          },
          {} as Record<string, string>,
        ),
      },
    })),
  );

  // Generate sitemap entries for project pages
  const projectEntries: MetadataRoute.Sitemap = projectsData.flatMap((project) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: locales.reduce(
          (acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}/projects/${project.id}`;
            return acc;
          },
          {} as Record<string, string>,
        ),
      },
    })),
  );

  return [
    // Root redirect (highest priority)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...staticEntries,
    ...projectEntries,
  ];
}
