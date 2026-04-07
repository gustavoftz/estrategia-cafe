import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'Omgilibot',
          'FacebookBot',
          'Amazonbot',
          'PerplexityBot',
          'YouBot',
          'Diffbot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://estrategia.cafe/sitemap.xml',
  }
}
