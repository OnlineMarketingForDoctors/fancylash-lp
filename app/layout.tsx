import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Open_Sans, Great_Vibes } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Korean Lash Lift & Keratin Lash Lift and Tint | Bondi Junction & Chatswood',
  description:
    'Korean lash lift and keratin lash lift at Fancy Lash, Bondi Junction and Chatswood. Lash lift and tint from $125, lift only from $105. Curled lashes for 6 to 8 weeks, no extensions, no damage. Book online.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://lp.fancylash.net/korean-keratin-lash-lift',
  },
  icons: {
    icon: 'https://fancylash.net/wp-content/uploads/2020/09/loader.png',
    shortcut: 'https://fancylash.net/wp-content/uploads/2020/09/loader.png',
    apple: 'https://fancylash.net/wp-content/uploads/2020/09/loader.png',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BeautySalon',
      name: 'Fancy Lash',
      url: 'https://fancylash.net/',
      telephone: '+61414844666',
      email: 'info@fancylash.net',
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '446',
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Shop 3, 4-12 Waverley Street',
          addressLocality: 'Bondi Junction',
          addressRegion: 'NSW',
          postalCode: '2022',
          addressCountry: 'AU',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Shop T49a, 436 Victoria Ave',
          addressLocality: 'Chatswood',
          addressRegion: 'NSW',
          postalCode: '2067',
          addressCountry: 'AU',
        },
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Korean Lash Lift' },
          price: '110',
          priceCurrency: 'AUD',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Keratin Lash Lift' },
          price: '105',
          priceCurrency: 'AUD',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does a lash lift last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Six to eight weeks for both the Korean and Keratin lift. It grows out with your natural lash cycle, so there are no infills to book.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which lash lift should I choose?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose the Korean lash lift for thick, long, straight or stubborn lashes that struggle to hold a curl. Choose the Keratin lash lift for thin, brittle or damaged lashes, or for the softest and most nourishing result. Your technician will assess your lashes and advise on the day.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will a lash lift damage my natural lashes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Korean lift uses a hydrating cysteamine formula rather than a harsh perm solution, and the Keratin lift uses a keratin infused formula that strengthens the lash as it curls. Both finish with a conditioning serum.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a lash lift hurt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Your eyes stay closed and the products never touch the eye itself. The appointment takes 45 to 60 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I wear mascara after a lash lift?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, after the first 24 to 48 hours. Use a water based mascara and avoid oil based removers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I have a lash lift with extensions on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A lash lift works on your natural lashes, so extensions must be removed first.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${openSans.variable} ${greatVibes.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDTHC9K');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDTHC9K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
