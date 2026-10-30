import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Al-Sadiq Education House | 58 GB Jaranwala',
    template: '%s | Al-Sadiq Education House',
  },
  description:
    'Al-Sadiq Education House — Quality education from Pre-Year to Class 8 in 58 GB Jaranwala, Faisalabad. Admissions open.',
  keywords: ['Al-Sadiq Education House', 'school Jaranwala', 'Faisalabad school', 'admissions 2025'],
  openGraph: {
    title: 'Al-Sadiq Education House',
    description: 'Quality education from Pre-Year to Class 8 in 58 GB Jaranwala',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dir = lang === 'ur' ? 'rtl' : 'ltr'

  return (
    <html lang={lang} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

