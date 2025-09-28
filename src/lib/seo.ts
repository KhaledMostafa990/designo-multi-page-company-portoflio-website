import { Metadata } from 'next';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  siteName?: string;
}

const DEFAULT_METADATA = {
  siteName: 'Designo - Creative Agency',
  description:
    'Award-winning creative agency specializing in web design, app design, and graphic design. We create memorable brand experiences that drive results.',
  keywords: ['web design', 'app design', 'graphic design', 'creative agency', 'branding', 'UI/UX'],
  image: '/assets/shared/desktop/logo-dark.png',
  type: 'website' as const,
  author: 'Designo Creative Team',
};

const DEFAULT_METADATA_AR = {
  siteName: 'ديزاينو - وكالة إبداعية',
  description:
    'وكالة إبداعية حائزة على جوائز متخصصة في تصميم المواقع وتصميم التطبيقات والتصميم الجرافيكي. نحن نخلق تجارب علامة تجارية لا تُنسى تحقق النتائج.',
  keywords: [
    'تصميم المواقع',
    'تصميم التطبيقات',
    'التصميم الجرافيكي',
    'وكالة إبداعية',
    'الهوية التجارية',
    'تجربة المستخدم',
  ],
  image: '/assets/shared/desktop/logo-dark.png',
  type: 'website' as const,
  author: 'فريق ديزاينو الإبداعي',
};

export function generateMetadata(data: SEOData): Metadata {
  const isArabic = data.locale === 'ar';
  const defaults = isArabic ? DEFAULT_METADATA_AR : DEFAULT_METADATA;

  const title = data.title ? `${data.title} | ${defaults.siteName}` : defaults.siteName;

  const description = data.description || defaults.description;
  const keywords = data.keywords || defaults.keywords;
  const image = data.image || defaults.image;
  const url = data.url || '';
  const type = data.type || defaults.type;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: defaults.author }],
    creator: defaults.author,
    publisher: defaults.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: defaults.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: data.locale || 'en',
      type,
      ...(data.publishedTime && { publishedTime: data.publishedTime }),
      ...(data.modifiedTime && { modifiedTime: data.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@designo_agency',
      site: '@designo_agency',
    },
    alternates: {
      canonical: url,
      ...(data.alternateLocales && {
        languages: data.alternateLocales.reduce(
          (acc, alt) => {
            acc[alt.locale] = alt.url;
            return acc;
          },
          {} as Record<string, string>,
        ),
      }),
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };

  return metadata;
}

export function generateBreadcrumbJsonLd(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Designo Creative Agency',
    alternateName: 'Designo',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com'}/assets/shared/desktop/logo-dark.png`,
    description: DEFAULT_METADATA.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-253-863-8967',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3886 Wellington Street',
      addressLocality: 'Toronto',
      addressRegion: 'Ontario',
      postalCode: 'M9C 3J5',
      addressCountry: 'CA',
    },
    sameAs: [
      'https://www.facebook.com/designo',
      'https://twitter.com/designo_agency',
      'https://www.instagram.com/designo_creative',
      'https://www.pinterest.com/designo',
      'https://www.youtube.com/designo',
    ],
  };
}

export function generateWebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Designo Creative Agency',
    url: baseUrl,
    description: DEFAULT_METADATA.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'ar'],
  };
}

export function generateArticleJsonLd(data: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image,
    url: data.url,
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      '@type': 'Organization',
      name: data.author || 'Designo Creative Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Designo Creative Agency',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/shared/desktop/logo-dark.png`,
      },
    },
  };
}
