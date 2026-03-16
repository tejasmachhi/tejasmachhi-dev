import Fun from '@/features/fun/Fun';

export default function FunPage() {
  return <Fun />;
}

export const metadata = {
  title: 'AI Astrology & Future Predictions | Tejas Machhi',
  description: 'Discover your destiny with advanced AI-powered astrology and future predictions. Get personalized insights about your career, love life, health, and fortune.',
  keywords: ['AI Astrology', 'Future Predictor', 'Fortune Telling', 'AI Predictions', 'Astrology AI', 'Future Insights'],
  authors: [{ name: 'Tejas Machhi' }],
  openGraph: {
    title: 'AI Astrology & Future Predictions | Tejas Machhi',
    description: 'Discover your destiny with advanced AI-powered astrology and future predictions. Get personalized insights about your career, love life, health, and fortune.',
    url: 'https://tejasmachhi.com/fun',
    siteName: 'Tejas Machhi - AI Astrology',
    images: [
      {
        url: '/assets/img/ai-astrology-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Astrology & Future Predictions by Tejas Machhi'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Astrology & Future Predictions | Tejas Machhi',
    description: 'Discover your destiny with advanced AI-powered astrology and future predictions. Get personalized insights about your career, love life, health, and fortune.',
    images: ['/assets/img/ai-astrology-preview.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
