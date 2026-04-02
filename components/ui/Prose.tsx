import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Size = 'sm' | 'base' | 'lg'

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm text-ink-secondary leading-relaxed',
  base: 'text-base text-ink-secondary leading-relaxed',
  lg: 'text-lg text-ink-secondary leading-relaxed',
}

interface ProseProps {
  children: ReactNode
  size?: Size
  className?: string
  maxWidth?: boolean
}

/**
 * Typographic container for body copy.
 * Enforces consistent leading, color, and max-width for readability.
 */
export default function Prose({
  children,
  size = 'base',
  className,
  maxWidth = true,
}: ProseProps) {
  return (
    <div
      className={cn(
        sizeStyles[size],
        maxWidth && 'max-w-prose',
        '[&>p+p]:mt-4 [&>p:first-child]:mt-0',
        className
      )}
    >
      {children}
    </div>
  )
}
