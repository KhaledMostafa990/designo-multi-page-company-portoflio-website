/* eslint-disable @next/next/no-img-element */
import './globals.css';
import { Jost } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import Alert from '@/components/base/Alert';
import { AlertProvider } from '@/data/AlertContext';
import { footerData, logoSrc } from '@/data/global';
import { AuthProvider } from '@/features/auth/AuthProvider';
import { TopBar } from '@/features/topbar';
import AuthNotifier from '@/features/auth/AuthNotifier';
import {
  generateMetadata as generateSEOMetadata,
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
} from '@/lib/seo';
import { Suspense } from 'react';
import { Metadata } from 'next';

const jostFont = Jost({
  subsets: ['latin'],
  variable: '--font-family-jost',
  display: 'swap',
  preload: true,
});

const locales = ['en', 'ar'] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designo.com';

  return generateSEOMetadata({
    locale,
    url: `${baseUrl}/${locale}`,
    alternateLocales: locales.map((loc) => ({
      locale: loc,
      url: `${baseUrl}/${loc}`,
    })),
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  // Translate footer data
  const translatedFooterData = {
    ...footerData,
    orderProject: {
      ...footerData.orderProject,
      heading: messages?.Footer?.CTA?.Heading ?? footerData.orderProject.heading,
      description: messages?.Footer?.CTA?.Description ?? footerData.orderProject.description,
      buttonLabel: messages?.Footer?.CTA?.Button ?? footerData.orderProject.buttonLabel,
    },
    navListItems: [
      messages?.Header?.Nav?.OurCompany ?? 'Our Company',
      messages?.Header?.Nav?.Locations ?? 'Locations',
      messages?.Header?.Nav?.Contact ?? 'Contact',
    ],
    mainLocation: {
      ...footerData.mainLocation,
      officeName: messages?.Footer?.Address1 ?? footerData.mainLocation.officeName,
      fullAddress:
        [messages?.Footer?.Address2 ?? '', messages?.Footer?.Address3 ?? '']
          .filter(Boolean)
          .join(' ') || footerData.mainLocation.fullAddress,
      phone: messages?.Footer?.Phone ?? footerData.mainLocation.phone,
      email: messages?.Footer?.Email ?? footerData.mainLocation.email,
    },
  };

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteJsonLd()),
          }}
        />
      </head>
      <body className="scroll-smooth">
        <AuthProvider>
          <AlertProvider>
            <div className={`${jostFont.variable} font-primary`}>
              <TopBar
                labels={{
                  signIn: messages?.TopBar?.SignIn ?? messages?.Header?.CTA?.SignIn ?? 'Sign in',
                  signUp: messages?.TopBar?.SignUp ?? messages?.Header?.CTA?.SignUp ?? 'Sign up',
                  signOut:
                    messages?.TopBar?.SignOut ?? messages?.Header?.CTA?.SignOut ?? 'Sign out',
                  account: messages?.TopBar?.Account ?? messages?.Header?.CTA?.Account ?? 'Account',
                }}
                authLabels={{
                  email: messages?.Auth?.Email ?? 'Email',
                  password: messages?.Auth?.Password ?? 'Password',
                  confirmPassword: messages?.Auth?.ConfirmPassword ?? 'Confirm Password',
                  cancel: messages?.Auth?.Cancel ?? 'Cancel',
                  waiting: messages?.Auth?.PleaseWait ?? 'Please wait…',
                  signingIn: messages?.Auth?.SigningIn ?? 'Signing in…',
                  creatingAccount: messages?.Auth?.CreatingAccount ?? 'Creating account…',
                }}
              />
              <Header
                data={{
                  navListItems: [
                    { label: messages?.Header?.Nav?.OurCompany ?? 'Our Company', href: '/about' },
                    { label: messages?.Header?.Nav?.Locations ?? 'Locations', href: '/locations' },
                    { label: messages?.Header?.Nav?.Contact ?? 'Contact', href: '/contact' },
                  ],
                  logoSrc,
                }}
              />

              <main className="relative overflow-hidden translate-y-24 xl:translate-y-32 pb-10 flex flex-col gap-20 ">
                {children}
              </main>
              {/* auth notifier */}
              <div className="sr-only" aria-hidden>
                {/* mounted client to surface auth success/errors via AlertProvider */}
              </div>

              <Footer
                classes="relative overflow-hidden translate-y-24 xl:translate-y-32 pt-64 xl:pt-72"
                data={translatedFooterData}
              />
              <Alert />
              <Suspense>
                <AuthNotifier />
              </Suspense>
            </div>
          </AlertProvider>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
