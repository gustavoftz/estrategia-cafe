import type { Metadata } from 'next'

const siteUrl = 'https://estrategia.cafe'
const siteName = 'estrategia.cafe'
const defaultDescription =
  'Consultoria estratégica especializada em reduzir fricção comercial no digital: posicionamento, site, aquisição, conversão e operação por WhatsApp como um sistema integrado.'

export function createMetadata({
  title,
  description = defaultDescription,
  path = '',
}: {
  title: string
  description?: string
  path?: string
}): Metadata {
  const url = `${siteUrl}${path}`

  const fullTitle = `${title} | ${siteName}`

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: 'website',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}
