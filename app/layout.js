import HeaderClient from '@/components/shared/Header/HeaderClient';
import Footer from '@/components/shared/Footer/Footer';
import Cursor from '@/components/shared/Cursor/Cursor';
import './globals.scss';

export const metadata = {
  title: 'Tejas Machhi - Frontend Developer & UI UX Developer',
  description: 'I\'m a passionate self-taught frontend developer who loves creating beautiful, responsive, and user-friendly websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <HeaderClient />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
