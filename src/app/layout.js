import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

export const metadata = {
  title: 'XERON — We Build Digital Solutions That Drive Business Growth',
  description:
    'XERON is a full-service digital agency built for startups and entrepreneurs. We design, develop, and brand — websites, mobile apps, and visual identities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={ibmPlexSans.variable}>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}