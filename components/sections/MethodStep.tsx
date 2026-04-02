import { cn } from '@/lib/utils'

interface MethodStepProps {
  index: number
  title: string
  description: string
  detail?: string
  className?: string
}

/**
 * Numbered method step. Used in the Método page.
 * Horizontal layout: large number left, content right.
 */
export default function MethodStep({
  index,
  title,
  description,
  detail,
  className,
}: MethodStepProps) {
  const num = String(index).padStart(2, '0')

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 border-b border-border last:border-0',
        className
      )}
    >
      <div className="shrink-0 sm:w-16 sm:pt-1">
        <span
          className="font-serif text-[2.5rem] leading-none text-border-strong select-none"
          aria-hidden="true"
        >
          {num}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-h3 font-serif text-ink-primary">{title}</h3>
        <p className="text-base text-ink-secondary leading-relaxed max-w-[58ch]">
          {description}
        </p>
        {detail && (
          <p className="text-sm text-ink-muted leading-relaxed max-w-[55ch]">
            {detail}
          </p>
        )}
      </div>
    </div>
  )
}
