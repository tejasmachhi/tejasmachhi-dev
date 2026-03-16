import Fun from '@/features/fun/Fun';

export default function FunPage() {
  return <Fun />;
}

export const metadata = {
  title: 'AI Astrology | Tejas Machhi',
  description: 'Get your personalized AI astrology reading. Discover insights about your career, love, health, and fortune.',
  keywords: ['AI Astrology', 'Astrology Reading', 'Fortune Telling', 'AI Predictions'],
  authors: [{ name: 'Tejas Machhi' }],
  openGraph: {
    title: 'AI Astrology | Tejas Machhi',
    description: 'Get your personalized AI astrology reading. Discover insights about your career, love, health, and fortune.',
    url: 'https://tejasmachhi.com/fun',
    siteName: 'Tejas Machhi - AI Astrology',
    images: [
      {
        url: '/assets/img/ai-astrology-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Astrology by Tejas Machhi'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Astrology | Tejas Machhi',
    description: 'Get your personalized AI astrology reading. Discover insights about your career, love, health, and fortune.',
    images: ['/assets/img/ai-astrology-preview.jpg']
  }
};
