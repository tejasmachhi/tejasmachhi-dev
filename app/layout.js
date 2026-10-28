import HeaderClient from '@/components/shared/Header/HeaderClient';
import Footer from '@/components/shared/Footer/Footer';
import Cursor from '@/components/shared/Cursor/Cursor';
import ResumeModalClient from '@/components/shared/ResumeModalClient';
import { Analytics } from "@vercel/analytics/next"
import './globals.scss';

export const metadata = {
  title: 'Tejas Machhi - Frontend Developer & UI UX Developer',
  description: 'I\'m a passionate self-taught frontend developer who loves creating beautiful, responsive, and user-friendly websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Cursor />
        <ResumeModalClient />
        <HeaderClient />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
