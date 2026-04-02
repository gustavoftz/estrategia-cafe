import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Variant = 'default' | 'muted' | 'accent'

const variantStyles: Record<Variant, string> = {
  default: 'bg-surface text-ink-secondary border border-border',
  muted: 'bg-transparent text-ink-muted border border-border',
  accent: 'bg-accent/10 text-accent border border-accent/20',
}

interface TagProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

export default function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-sans font-medium tracking-wide',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
