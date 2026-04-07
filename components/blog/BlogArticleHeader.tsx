import Link from 'next/link'
import type { ReactNode } from 'react'
import type { BlogPostEntry } from '@/lib/blog'
import SectionWrapper from '@/components/sections/SectionWrapper'
import Tag from '@/components/ui/Tag'

interface BlogArticleHeaderProps {
  post: BlogPostEntry
  title: ReactNode
  description: string
}

export default function BlogArticleHeader({
  post,
  title,
  description,
}: BlogArticleHeaderProps) {
  return (
    <SectionWrapper background="canvas" className="border-b border-border">
      <div className="flex max-w-[720px] flex-col gap-5">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <ol className="flex max-w-full flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink-primary">
                Início
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-ink-primary">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="min-w-0 truncate text-ink-secondary" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="accent">{post.category}</Tag>
          <span className="text-xs text-ink-muted">{post.dateLabel}</span>
          <span className="text-xs text-ink-muted">·</span>
          <span className="text-xs text-ink-muted">{post.readTime} de leitura</span>
        </div>

        <h1 className="text-display font-serif leading-tight text-ink-primary">{title}</h1>

        <p className="max-w-[56ch] text-lg leading-relaxed text-ink-secondary">{description}</p>
      </div>
    </SectionWrapper>
  )
}
