import { cn } from '@/lib/utils'
import type { ReactNode, ElementType } from 'react'

type Variant = 'default' | 'narrow' | 'wide'
type Background = 'canvas' | 'surface' | 'dark'

const variantWidth: Record<Variant, string> = {
  wide: 'max-w-content',
  default: 'max-w-content',
  narrow: 'max-w-narrow',
}

const backgroundStyles: Record<Background, string> = {
  canvas: 'bg-canvas',
  surface: 'bg-surface',
  dark: 'bg-ink-primary text-ink-inverse',
}

interface SectionWrapperProps {
  children: ReactNode
  variant?: Variant
  background?: Background
  className?: string
  innerClassName?: string
  id?: string
  as?: ElementType
  noPadding?: boolean
}

/**
 * Shared structural wrapper for all page sections.
 * Handles background, max-width, padding, and centering consistently.
 */
export default function SectionWrapper({
  children,
  variant = 'default',
  background = 'canvas',
  className,
  innerClassName,
  id,
  as: Tag = 'section',
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        backgroundStyles[background],
        !noPadding && 'py-section-sm md:py-section',
        className
      )}
    >
      <div
        className={cn(
          'container-content',
          variantWidth[variant],
          innerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  )
}
