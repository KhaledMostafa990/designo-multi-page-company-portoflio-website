/* eslint-disable @next/next/no-img-element */
import '../globals.scss';
import { Jost } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/features/Header';
import Footer from '@/features/Footer';
import Alert from '@/components/base/Alert';
import { AlertProvider } from '@/data/AlertContext';
import { footerData, navListItems, logoSrc } from '@/data/global';

const jostFont = Jost({ subsets: ['latin'], variable: '--font-family-jost' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="scroll-smooth">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AlertProvider>
            <div className={`${jostFont.variable} font-primary`}>
              <Header data={{ navListItems, logoSrc }} />

              <main className="relative overflow-hidden translate-y-24 xl:translate-y-40 pb-10 xl:pb-16 flex flex-col gap-20 xl:gap-40 ">
                {children}
              </main>

              <Footer
                classes="relative overflow-hidden translate-y-24 xl:translate-y-40 pt-64 xl:pt-72"
                data={footerData}
              />
              <Alert />
            </div>
          </AlertProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
