import { cn } from '@/lib/utils'

type Align = 'left' | 'center'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: Align
  className?: string
  /** When true, title renders in serif font (default). Set false for sans-serif headings. */
  serif?: boolean
  /** Constrains subtitle width for readability. Disable for full-width layouts. */
  constrainSubtitle?: boolean
}

/**
 * Reusable section header: eyebrow label + heading + optional subtitle.
 * Used in ~80% of all page sections.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  serif = true,
  constrainSubtitle = true,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={cn('flex flex-col gap-4', isCenter && 'items-center text-center', className)}>
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}

      <h2
        className={cn(
          'text-h2 text-ink-primary',
          serif ? 'font-serif' : 'font-sans font-semibold'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg text-ink-secondary leading-relaxed',
            constrainSubtitle && (isCenter ? 'max-w-[52ch]' : 'max-w-[58ch]')
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
