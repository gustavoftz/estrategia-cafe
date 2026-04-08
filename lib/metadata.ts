import type { Metadata } from 'next'

export const siteUrl = 'https://estrategia.cafe'
export const siteName = 'estratégia.'
const defaultDescription =
  'Consultoria estratégica especializada em reduzir fricção comercial no digital: posicionamento, site, aquisição, conversão e operação por WhatsApp como um sistema integrado.'

export function createMetadata({
  title,
  description = defaultDescription,
  path = '',
  keywords,
  type = 'website',
}: {
  title: string
  description?: string
  path?: string
  keywords?: string[]
  type?: 'website' | 'article'
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
      type,
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    keywords,
    alternates: {
      canonical: url,
    },
  }
}

export function createArticleMetadata({
  title,
  description = defaultDescription,
  path = '',
  category,
  keywords,
}: {
  title: string
  description?: string
  path?: string
  category: string
  keywords?: string[]
}): Metadata {
  return {
    ...createMetadata({
      title,
      description,
      path,
      keywords,
      type: 'article',
    }),
    category,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
  }
}
