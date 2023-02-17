import './globals.scss';
import { Jost } from '@next/font/google';

import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';

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

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
