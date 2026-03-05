import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pizza d\'Issy - Restaurant Italien Authentique',
  description:
    'Découvrez la véritable saveur de l\'Italie. Cuisine authentique, ingrédients frais, ambiance chaleureuse. Réservez votre table dès maintenant.',
  keywords:
    'restaurant italien, pizza, pâtes, cuisine italienne, Issy-les-Moulineaux, réservation',
  metadataBase: new URL('https://pizzadissy.fr'),
  canonical: 'https://pizzadissy.fr',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pizzadissy.fr',
    title: 'Pizza d\'Issy - Restaurant Italien Authentique',
    description:
      'Découvrez la véritable saveur de l\'Italie. Cuisine authentique, ingrédients frais, ambiance chaleureuse.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza d\'Issy Restaurant Italien',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza d\'Issy - Restaurant Italien Authentique',
    description: 'Découvrez la véritable saveur de l\'Italie',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#c87d42" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-body bg-cream-50 text-slate-900 antialiased`}
      >
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
