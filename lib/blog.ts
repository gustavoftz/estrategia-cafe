export type BlogCategory =
  | 'Estratégia'
  | 'Conversão'
  | 'SEO'
  | 'Operação Comercial'

export interface BlogPostEntry {
  slug: string
  title: string
  description: string
  excerpt: string
  category: BlogCategory
  dateLabel: string
  readTime: string
  path: string
  keywords: string[]
  relatedSlugs: string[]
}

export const blogCategoryOrder: BlogCategory[] = [
  'Estratégia',
  'Conversão',
  'SEO',
  'Operação Comercial',
]

export const blogCategoryDescriptions: Record<BlogCategory, string> = {
  Estratégia:
    'Leituras sobre diagnóstico, posicionamento e decisões estruturais que orientam o resto do sistema comercial.',
  Conversão:
    'Conteúdo sobre site, UX, prova, persuasão e os ajustes que aumentam o retorno do tráfego que já existe.',
  SEO:
    'Aquisição orgânica com intenção de busca certa, arquitetura de conteúdo e autoridade construída ao longo do tempo.',
  'Operação Comercial':
    'Fluxos, qualificação e atendimento comercial por WhatsApp para reduzir atrito entre interesse e avanço real.',
}

export const blogPosts: BlogPostEntry[] = [
  {
    slug: 'site-que-vende-vs-site-que-existe',
    title: 'Site que vende vs site que existe: 12 diferenças práticas',
    description:
      'A maioria dos sites existe. Poucos vendem. A diferença não está no design — está em clareza, estrutura e persuasão. 12 critérios para avaliar em qual dos dois lados o seu site está.',
    excerpt:
      'A maioria dos sites existe. Poucos vendem. A diferença não está no design — está em clareza, estrutura e persuasão. 12 critérios para avaliar em qual dos dois lados o seu site está.',
    category: 'Conversão',
    dateLabel: 'Abr 2026',
    readTime: '6 min',
    path: '/blog/site-que-vende-vs-site-que-existe',
    keywords: ['site que vende', 'site que converte', 'cro', 'ux', 'copy para site'],
    relatedSlugs: ['por-que-meu-site-nao-converte', 'cro-para-ecommerce'],
  },
  {
    slug: 'seo-organico-para-empresas-b2b',
    title: 'SEO orgânico para empresas B2B: o que muda em relação ao B2C',
    description:
      'SEO para B2B não é SEO para B2C com outro produto. O ciclo de venda é mais longo, a decisão envolve mais pessoas e o conteúdo precisa trabalhar de forma diferente.',
    excerpt:
      'SEO para B2B não é SEO para B2C com outro produto. O ciclo de venda é mais longo, a decisão envolve mais pessoas e o conteúdo precisa trabalhar de forma diferente.',
    category: 'SEO',
    dateLabel: 'Abr 2026',
    readTime: '8 min',
    path: '/blog/seo-organico-para-empresas-b2b',
    keywords: ['seo b2b', 'seo orgânico', 'aquisição orgânica', 'conteúdo b2b'],
    relatedSlugs: ['sistema-comercial-digital', 'o-que-e-diagnostico-de-marketing-digital'],
  },
  {
    slug: 'como-qualificar-leads-whatsapp',
    title: 'Como qualificar leads no WhatsApp antes do contato humano',
    description:
      'Qualificação não é sobre filtrar pessoas. É sobre ter contexto antes da primeira conversa — para que o atendente entre preparado e o lead não precise repetir as mesmas informações três vezes.',
    excerpt:
      'Qualificação não é sobre filtrar pessoas. É sobre ter contexto antes da primeira conversa — para que o atendente entre preparado e o lead não precise repetir as mesmas informações três vezes.',
    category: 'Operação Comercial',
    dateLabel: 'Abr 2026',
    readTime: '7 min',
    path: '/blog/como-qualificar-leads-whatsapp',
    keywords: ['whatsapp', 'qualificação de leads', 'pré-atendimento', 'operação comercial'],
    relatedSlugs: ['como-estruturar-operacao-whatsapp', 'sistema-comercial-digital'],
  },
  {
    slug: 'posicionamento-de-marca',
    title: 'Posicionamento de marca: o que é e por que determina o resultado de tudo',
    description:
      'Posicionamento não é slogan nem identidade visual. É a clareza sobre quem você atende, qual problema resolve e por que alguém deveria escolher você.',
    excerpt:
      'Posicionamento não é slogan nem identidade visual. É a clareza sobre quem você atende, qual problema resolve e por que alguém deveria escolher você. Sem isso, site, mídia e comercial operam no escuro.',
    category: 'Estratégia',
    dateLabel: 'Abr 2026',
    readTime: '8 min',
    path: '/blog/posicionamento-de-marca',
    keywords: ['posicionamento de marca', 'proposta de valor', 'mensagem', 'estratégia'],
    relatedSlugs: ['agencia-ou-consultoria-de-marketing', 'sistema-comercial-digital'],
  },
  {
    slug: 'sistema-comercial-digital',
    title: 'Sistema comercial digital: o que é e por que pensar em sistema',
    description:
      'Tráfego, site, conversão, WhatsApp — a maioria das empresas trata cada um como canal separado. O problema é que eles não funcionam separados.',
    excerpt:
      'Tráfego, site, conversão, WhatsApp — a maioria das empresas trata cada um como canal separado. O problema é que eles não funcionam separados. O que muda quando você pensa em sistema.',
    category: 'Estratégia',
    dateLabel: 'Abr 2026',
    readTime: '8 min',
    path: '/blog/sistema-comercial-digital',
    keywords: ['sistema comercial digital', 'estratégia digital', 'funil', 'operação comercial'],
    relatedSlugs: ['o-que-e-diagnostico-de-marketing-digital', 'como-qualificar-leads-whatsapp'],
  },
  {
    slug: 'agencia-ou-consultoria-de-marketing',
    title: 'Agência ou consultoria de marketing: qual a diferença e quando contratar cada uma',
    description:
      'Agência executa. Consultoria diagnostica, prioriza e estrutura antes de executar. A diferença parece simples, mas tem impacto direto no resultado.',
    excerpt:
      'Agência executa. Consultoria diagnostica, prioriza e estrutura antes de executar. A diferença parece simples, mas tem impacto direto no resultado. Quando cada modelo faz sentido.',
    category: 'Estratégia',
    dateLabel: 'Abr 2026',
    readTime: '7 min',
    path: '/blog/agencia-ou-consultoria-de-marketing',
    keywords: ['consultoria de marketing', 'agência de marketing', 'diagnóstico', 'estratégia'],
    relatedSlugs: ['o-que-e-diagnostico-de-marketing-digital', 'posicionamento-de-marca'],
  },
  {
    slug: 'cro-para-ecommerce',
    title: 'CRO para e-commerce: como aumentar a conversão sem aumentar o tráfego',
    description:
      'A taxa média de conversão de e-commerces brasileiros é de 1 a 2%. Passar de 1% para 2% dobra a receita sem investir mais em aquisição.',
    excerpt:
      'A taxa média de conversão de e-commerces brasileiros é de 1 a 2%. Passar de 1% para 2% dobra a receita sem investir mais em aquisição. O que é CRO e onde estão os maiores pontos de melhoria.',
    category: 'Conversão',
    dateLabel: 'Abr 2026',
    readTime: '9 min',
    path: '/blog/cro-para-ecommerce',
    keywords: ['cro para ecommerce', 'conversão ecommerce', 'taxa de conversão', 'ux ecommerce'],
    relatedSlugs: ['site-que-vende-vs-site-que-existe', 'por-que-meu-site-nao-converte'],
  },
  {
    slug: 'por-que-meu-site-nao-converte',
    title: 'Por que meu site não converte — e não é problema de tráfego',
    description:
      'A causa mais comum de conversão baixa não é falta de tráfego. É falta de clareza, estrutura e persuasão. Os cinco problemas mais frequentes e como identificá-los.',
    excerpt:
      'A causa mais comum de conversão baixa não é falta de tráfego. É falta de clareza, estrutura e persuasão. Os cinco problemas mais frequentes e como identificá-los antes de investir em mais mídia.',
    category: 'Conversão',
    dateLabel: 'Abr 2026',
    readTime: '8 min',
    path: '/blog/por-que-meu-site-nao-converte',
    keywords: ['site não converte', 'conversão de site', 'mensagem', 'ux', 'cro'],
    relatedSlugs: ['site-que-vende-vs-site-que-existe', 'cro-para-ecommerce'],
  },
  {
    slug: 'como-estruturar-operacao-whatsapp',
    title: 'Como estruturar a operação comercial no WhatsApp — sem perder oportunidades',
    description:
      'O WhatsApp é onde a maioria das conversas comerciais acontece no Brasil. Mas sem estrutura, acumula atrito, perde oportunidades e sobrecarrega o time.',
    excerpt:
      'O WhatsApp é onde a maioria das conversas comerciais acontece no Brasil. Mas sem estrutura, acumula atrito, perde oportunidades e sobrecarrega o time. Como sair do caos operacional.',
    category: 'Operação Comercial',
    dateLabel: 'Abr 2026',
    readTime: '7 min',
    path: '/blog/como-estruturar-operacao-whatsapp',
    keywords: ['operação comercial whatsapp', 'whatsapp business', 'atendimento comercial', 'qualificação'],
    relatedSlugs: ['como-qualificar-leads-whatsapp', 'sistema-comercial-digital'],
  },
  {
    slug: 'o-que-e-diagnostico-de-marketing-digital',
    title: 'O que é diagnóstico de marketing digital — e quando sua empresa precisa de um',
    description:
      'Diagnóstico não é auditoria e não é proposta comercial. É a fase que determina se o que vem depois vai funcionar. O que inclui, quando faz sentido e o que esperar do processo.',
    excerpt:
      'Diagnóstico não é auditoria e não é proposta comercial. É a fase que determina se o que vem depois vai funcionar. O que inclui, quando faz sentido e o que esperar do processo.',
    category: 'Estratégia',
    dateLabel: 'Abr 2026',
    readTime: '6 min',
    path: '/blog/o-que-e-diagnostico-de-marketing-digital',
    keywords: ['diagnóstico de marketing digital', 'diagnóstico estratégico', 'consultoria', 'estratégia'],
    relatedSlugs: ['agencia-ou-consultoria-de-marketing', 'sistema-comercial-digital'],
  },
]

export const featuredReadingSlugs = [
  'o-que-e-diagnostico-de-marketing-digital',
  'site-que-vende-vs-site-que-existe',
  'seo-organico-para-empresas-b2b',
]

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
) as Record<string, BlogPostEntry>

export function getBlogPost(slug: string): BlogPostEntry {
  const post = blogPostsBySlug[slug]

  if (!post) {
    throw new Error(`Blog post not found: ${slug}`)
  }

  return post
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPostEntry[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPostEntry[] {
  const currentPost = getBlogPost(slug)
  const seen = new Set<string>([currentPost.slug])
  const related: BlogPostEntry[] = []

  for (const relatedSlug of currentPost.relatedSlugs) {
    const post = blogPostsBySlug[relatedSlug]

    if (!post || seen.has(post.slug)) {
      continue
    }

    seen.add(post.slug)
    related.push(post)
  }

  for (const post of blogPosts) {
    if (post.category !== currentPost.category || seen.has(post.slug)) {
      continue
    }

    seen.add(post.slug)
    related.push(post)
  }

  return related.slice(0, limit)
}
