import HeaderClient from '@/components/shared/Header/HeaderClient';
import Footer from '@/components/shared/Footer/Footer';
import Cursor from '@/components/shared/Cursor/Cursor';
import AOSProvider from '@/components/shared/AOSProvider/AOSProvider';
import { Analytics } from "@vercel/analytics/next"
import './globals.scss';

export const metadata = {
  title: 'Tejas Machhi - Frontend Developer & UI UX Developer',
  description: 'I\'m a passionate self-taught frontend developer who loves creating beautiful, responsive, and user-friendly websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          <Cursor />
          <HeaderClient />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </AOSProvider>
      </body>
    </html>
  );
}
