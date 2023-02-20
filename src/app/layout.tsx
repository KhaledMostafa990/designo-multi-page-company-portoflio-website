import './globals.scss';
import { Jost } from '@next/font/google';

import Header from '@/features/Header';
import Footer from '@/features/Footer';

const jostFont = Jost({ subsets: ["latin"], variable: '--font-family-jost' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navListItems = ['Our Company', 'locations', 'Contact'];
  const logoSrc = '/next.svg';
  return (
    <html lang="en">
      <head />
      <body>
        <div className={`${jostFont.variable} font-primary`}>
          <Header data={{ navListItems, logoSrc }} />

          <main className='relative translate-y-32 overflow-hidden flex flex-col gap-20 xl:gap-32'>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
