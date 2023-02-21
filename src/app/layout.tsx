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
      <body>
        <div className={`${jostFont.variable} font-primary`}>
          <Header data={{ navListItems, logoSrc }} />

          <main className='relative overflow-hidden translate-y-32 pb-10 xl:pb-16 flex flex-col gap-20 xl:gap-32 '>
            {children}
          </main>

          <Footer classes={'relative overflow-hidden translate-y-32 pt-60'} data={footerData} />
        </div>
      </body>
    </html>
  );
}
