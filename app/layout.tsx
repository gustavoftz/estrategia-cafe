import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const serif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'estrategia.cafe — Consultoria estratégica digital',
    template: '%s | estrategia.cafe',
  },
  description:
    'Consultoria estratégica especializada em reduzir fricção comercial no digital: posicionamento, site, aquisição, conversão e operação por WhatsApp como um sistema integrado.',
  metadataBase: new URL('https://estrategia.cafe'),
  openGraph: {
    siteName: 'estrategia.cafe',
    locale: 'pt_BR',
    type: 'website',
  },
  verification: {
    google: 'fKo22fvmAVUEbDOTag38TKtschky34sVry55GbWrMV8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Skip-to-content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-canvas focus:text-ink-primary focus:border focus:border-border focus:text-sm focus:font-medium"
        >
          Ir para o conteúdo principal
        </a>
        {/* Fixed header offset — 68px matches header height */}
        <div className="h-[68px] shrink-0" aria-hidden="true" />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TKHRQ4LYRM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TKHRQ4LYRM');
          `}
        </Script>
      </body>
    </html>
  )
}
