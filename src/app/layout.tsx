import './globals.scss';
import { Jost } from 'next/font/google';

import { footerData, navListItems, logoSrc } from '@/data/global';
import Header from '@/features/Header';
import Footer from '@/features/Footer';

const jostFont = Jost({ subsets: ["latin"], variable: '--font-family-jost' });

export const metadata = {
  title: {
    default: "Designo Company Portfolio",
    template: "Designo | %s"
  },

  description: "Designo is over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.",
  creator: "Khaled Farghly",

  icons: {
    icon: '/assets/favicon-32x32.png',
    shortcut: '/assets/favicon-32x32.png',
    apple: '/assets/favicon-32x32.png',
    other: {
      rel: '/assets/favicon-32x32.png',
      url: '/assets/favicon-32x32.png',
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://designo-company-portoflio.netlify.app/",
    siteName: "Designo Company Portfolio",
    title: "Designo Company Portfolio",
    description: "Designo is over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.",
    images: [
      {
        url: "/assets/about/desktop/image-about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Designo Company",
      },
      {
        url: "/assets/about/desktop/image-about-hero.jpg",
        width: 600,
        height: 315,
        alt: "Designo Company",
      },
    ],
  },

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className='scroll-smooth'>
        <div className={`${jostFont.variable} font-primary`}>
          <Header data={{ navListItems, logoSrc }} />

          <main className='relative overflow-hidden translate-y-24 xl:translate-y-40 pb-10 xl:pb-16 flex flex-col gap-20 xl:gap-40 '>
            {children}
          </main>

          <Footer
            classes='relative overflow-hidden translate-y-24
            xl:translate-y-40 pt-64 xl:pt-72'
            data={footerData} />
        </div>
      </body>
    </html>
  );
}
