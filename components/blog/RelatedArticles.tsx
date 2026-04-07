import Link from 'next/link'
import { getBlogPost, getRelatedBlogPosts } from '@/lib/blog'
import SectionWrapper from '@/components/sections/SectionWrapper'
import Tag from '@/components/ui/Tag'

interface RelatedArticlesProps {
  currentSlug: string
}

export default function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const currentPost = getBlogPost(currentSlug)
  const relatedPosts = getRelatedBlogPosts(currentSlug)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <SectionWrapper background="surface" className="border-t border-border">
      <div className="flex flex-col gap-10">
        <div className="flex max-w-[680px] flex-col gap-3">
          <span className="eyebrow">Leituras relacionadas</span>
          <h2 className="text-h2 font-serif text-ink-primary">
            Continue a leitura a partir deste tema
          </h2>
          <p className="text-base leading-relaxed text-ink-secondary">
            Se este artigo fez sentido, estas leituras aprofundam frentes adjacentes do mesmo
            sistema comercial. A ideia é sair do post com um próximo passo editorial claro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`${post.path}/`}
              className="group flex h-full flex-col gap-4 rounded-[1.5rem] border border-border bg-canvas/90 p-6 transition-colors duration-150 hover:border-border-strong"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Tag variant="accent">{post.category}</Tag>
                <span className="text-xs text-ink-muted">{post.readTime} de leitura</span>
              </div>
              <h3 className="text-h3 font-serif leading-snug text-ink-primary transition-colors duration-150 group-hover:text-accent">
                {post.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-secondary">{post.excerpt}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Ler a seguir
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-border bg-canvas/75 px-5 py-4 text-sm leading-relaxed text-ink-secondary">
          Este artigo está classificado em <strong className="text-ink-primary">{currentPost.category}</strong>,
          mas conversa com outras frentes. O objetivo do blog é justamente conectar os sintomas
          entre posicionamento, aquisição, conversão e operação.
        </div>
      </div>
    </SectionWrapper>
  )
}
