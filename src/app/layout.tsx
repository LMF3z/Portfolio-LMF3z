import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import MobileDrawer from '@/components/MobileDrawer';
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: 'Lennon Sánchez',
  description: 'Portfolio LMF3z, web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <MobileDrawer />
          <SocialLinks />
          <main className='px-3 md:px-10'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
