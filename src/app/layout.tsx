import './globals.scss';
import { Jost } from '@next/font/google';

import { footerData, navListItems, logoSrc } from '@/data/global';
import Header from '@/features/Header';
import Footer from '@/features/Footer';

const jostFont = Jost({ subsets: ["latin"], variable: '--font-family-jost' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head />
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
