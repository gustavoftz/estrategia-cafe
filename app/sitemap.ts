import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'

export const dynamic = 'force-static'

const base = 'https://estrategia.cafe'
const sitelaunch = new Date('2026-03-04')

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = blogPosts.reduce((a, b) =>
    new Date(a.datePublished) > new Date(b.datePublished) ? a : b
  )

  return [
    {
      url: `${base}/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/servicos/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/diagnostico-estrategico/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/simulador-de-impacto-comercial/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/metodo/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/contato/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/estudos-de-caso/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/sobre/`,
      lastModified: sitelaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/`,
      lastModified: new Date(latestPost.datePublished),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${base}${post.path}/`,
      lastModified: new Date(post.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${base}/politica-de-privacidade/`,
      lastModified: sitelaunch,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/termos/`,
      lastModified: sitelaunch,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
