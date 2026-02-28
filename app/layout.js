import HeaderClient from '@/components/shared/Header/HeaderClient';
import Footer from '@/components/shared/Footer/Footer';
import './globals.scss';

export const metadata = {
  title: 'Tejas Machhi - Frontend Developer & UI UX Developer',
  description: 'I\'m a passionate self-taught frontend developer who loves creating beautiful, responsive, and user-friendly websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderClient />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
