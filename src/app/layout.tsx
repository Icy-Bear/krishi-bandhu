import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://terralogic-forge.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'TerraLogic AI', url: BASE_URL, logo: `${BASE_URL}/favicon.svg`, sameAs: [] },
    { '@type': 'SoftwareApplication', name: 'TerraLogic Forge', description: 'AI-powered precision agriculture platform', url: BASE_URL, applicationCategory: 'BusinessApplication', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '245' } },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'How accurate are the crop yield predictions?', acceptedAnswer: { '@type': 'Answer', text: 'Our models currently achieve a 98.4% accuracy rate across major grain and vegetable categories, based on over 5 years of historical data and real-time sensor feedback.' } },
      { '@type': 'Question', name: 'Can I integrate my own sensors?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! TerraLogic Forge supports a wide range of industry-standard protocols. Our Universal API makes it easy to connect custom hardware via MQTT or HTTP.' } },
      { '@type': 'Question', name: 'Is my data secure and private?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We use enterprise-grade encryption for all data at rest and in transit. You retain full ownership of your agricultural data.' } },
      { '@type': 'Question', name: 'Do you offer on-site setup assistance?', acceptedAnswer: { '@type': 'Answer', text: 'For Enterprise customers, we provide full on-site deployment and training services. Professional users have access to detailed remote onboarding.' } }
    ] }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: 'TerraLogic Forge | AI-Powered Precision Agriculture', template: '%s | TerraLogic Forge' },
  description: 'Transform your agricultural operations with AI-driven crop yield forecasting, real-time market intelligence, and field analysis.',
  keywords: ['agricultural AI', 'crop yield prediction', 'precision farming'],
  authors: [{ name: 'TerraLogic AI' }],
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'en_US', url: BASE_URL, siteName: 'TerraLogic Forge', title: 'TerraLogic Forge | AI-Powered Precision Agriculture', description: 'Transform your agricultural operations with AI-driven crop yield forecasting.', images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'TerraLogic Forge' }] },
  twitter: { card: 'summary_large_image', title: 'TerraLogic Forge | AI-Powered Precision Agriculture', images: ['/og-image.svg'] },
  alternates: { canonical: BASE_URL },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = { themeColor: '#003527', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon-192.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
