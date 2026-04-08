import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/cookies/CookieBanner'
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
    default: 'estratégia. — Consultoria estratégica digital',
    template: '%s | estratégia.',
  },
  description:
    'Consultoria estratégica especializada em reduzir fricção comercial no digital: posicionamento, site, aquisição, conversão e operação por WhatsApp como um sistema integrado.',
  metadataBase: new URL('https://estrategia.cafe'),
  openGraph: {
    siteName: 'estratégia.',
    locale: 'pt_BR',
    type: 'website',
  },
  verification: {
    google: 'fKo22fvmAVUEbDOTag38TKtschky34sVry55GbWrMV8',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'estratégia.',
  url: 'https://estrategia.cafe',
  description:
    'Consultoria estratégica especializada em reduzir fricção comercial no digital: posicionamento, site, aquisição, conversão e operação por WhatsApp como um sistema integrado.',
  email: 'contato@estrategia.cafe',
  areaServed: 'BR',
  serviceType: 'Consultoria Estratégica Digital',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contato@estrategia.cafe',
    url: 'https://estrategia.cafe/contato/',
    availableLanguage: 'Portuguese',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
        <CookieBanner />
      </body>
    </html>
  )
}
