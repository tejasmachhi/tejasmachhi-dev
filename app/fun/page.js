import Fun from '@/features/fun/Fun';

export default function FunPage() {
  return <Fun />;
}

export const metadata = {
  title: 'AI Life Coach | ',
  description: 'Get personalized life coaching advice for clarity, confidence, and direction. Practical guidance for Indian youth.',
  keywords: ['AI Life Coach', 'Life Coaching', 'Career Guidance', 'Personal Development', 'Youth Mentorship'],
  authors: [{ name: '' }],
  openGraph: {
    title: 'AI Life Coach | ',
    description: 'Get personalized life coaching advice for clarity, confidence, and direction. Practical guidance for Indian youth.',
    url: 'https://tejasmachhi.com/fun',
    siteName: ' - AI Life Coach',
    images: [
      {
        url: '/assets/img/ai-life-coach-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Life Coach by '
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Life Coach | ',
    description: 'Get personalized life coaching advice for clarity, confidence, and direction. Practical guidance for Indian youth.',
    images: ['/assets/img/ai-life-coach-preview.jpg']
  }
};
