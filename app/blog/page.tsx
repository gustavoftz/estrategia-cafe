import type { Metadata } from 'next'
import Link from 'next/link'
import { blogCategoryDescriptions, blogCategoryOrder, blogPosts, featuredReadingSlugs, getBlogPost, getBlogPostsByCategory } from '@/lib/blog'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = createMetadata({
  title: 'Blog — Estratégia e Marketing Digital',
  description:
    'Artigos sobre estratégia digital, conversão, SEO e operação comercial por WhatsApp. Diagnóstico antes de execução — para empresas que querem resultado, não apenas atividade.',
  path: '/blog',
  keywords: [
    'estratégia digital',
    'seo',
    'cro',
    'operação comercial',
    'whatsapp',
    'diagnóstico estratégico',
  ],
})

const featuredReading = featuredReadingSlugs.map((slug) => getBlogPost(slug))

const categoryAnchors = Object.fromEntries(
  blogCategoryOrder.map((category) => [
    category,
    category
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase(),
  ])
) as Record<(typeof blogCategoryOrder)[number], string>

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog estrategia.cafe',
  description:
    'Artigos sobre estratégia digital, SEO, conversão e operação comercial por WhatsApp.',
  hasPart: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `https://estrategia.cafe${post.path}`,
    articleSection: post.category,
  })),
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />

      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[680px]">
          <span className="eyebrow">Blog</span>
          <h1 className="text-display font-serif text-ink-primary">
            Estratégia digital{' '}
            <span className="text-ink-secondary">sem achismo e sem atividade por atividade.</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[54ch]">
            Artigos sobre posicionamento, conversão, SEO, operação por WhatsApp e tudo que compõe um sistema comercial digital que funciona de verdade.
          </p>
          <div className="flex flex-wrap gap-3">
            {blogCategoryOrder.map((category) => (
              <Link
                key={category}
                href={`#${categoryAnchors[category]}`}
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-secondary hover:border-border-strong hover:text-ink-primary"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Comece por aqui"
            title="Três leituras para entrar no raciocínio do site"
            subtitle="Se esta é sua primeira visita ao blog, estes artigos dão o contexto mais rápido sobre diagnóstico, conversão e aquisição."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredReading.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col gap-5 rounded-[1.5rem] border border-border bg-canvas/90 p-7 transition-colors duration-150 hover:border-border-strong"
              >
                <div className="flex items-center gap-3">
                  <Tag variant="accent">{post.category}</Tag>
                  <span className="text-xs text-ink-muted">{post.readTime} de leitura</span>
                </div>
                <h2 className="text-h3 font-serif text-ink-primary leading-snug group-hover:text-accent transition-colors duration-150">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Ler artigo
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="canvas">
        <div className="flex flex-col gap-16">
          <SectionHeader
            eyebrow="Arquitetura editorial"
            title="Conteúdo organizado por frente estratégica"
            subtitle="Cada trilha abaixo aprofunda uma parte do sistema comercial, mas as páginas foram conectadas para facilitar a navegação entre sintomas, causas e próximos passos."
          />

          {blogCategoryOrder.map((category) => {
            const posts = getBlogPostsByCategory(category)

            return (
              <section
                key={category}
                id={categoryAnchors[category]}
                className="grid grid-cols-1 gap-8 border-t border-border pt-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12"
              >
                <div className="flex flex-col gap-3">
                  <h2 className="text-h2 font-serif text-ink-primary">{category}</h2>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {blogCategoryDescriptions[category]}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`${post.path}/`}
                      className="group flex h-full flex-col gap-4 rounded-[1.5rem] border border-border p-6 transition-colors duration-150 hover:border-border-strong"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <Tag variant="accent">{post.category}</Tag>
                        <span className="text-xs text-ink-muted">{post.dateLabel}</span>
                        <span className="text-xs text-ink-muted">·</span>
                        <span className="text-xs text-ink-muted">{post.readTime} de leitura</span>
                      </div>
                      <h3 className="text-h3 font-serif leading-snug text-ink-primary transition-colors duration-150 group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-ink-secondary">
                        {post.excerpt}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        Abrir leitura
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Diagnóstico antes de execução"
        title="Leitura informa. Diagnóstico transforma."
        subtitle="Se você se reconheceu em algum dos problemas descritos aqui, o próximo passo é mapear onde está a maior fricção no seu sistema comercial."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Iniciar uma conversa', href: '/contato' }}
      />
    </>
  )
}
