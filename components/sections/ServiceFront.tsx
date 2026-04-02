import { cn } from '@/lib/utils'

interface ServiceFrontProps {
  eyebrow: string
  title: string
  description: string
  outcomes: string[]
  className?: string
}

/**
 * Service front block. Used in the Serviços page.
 * Eyebrow + title + description + outcomes list.
 */
export default function ServiceFront({
  eyebrow,
  title,
  description,
  outcomes,
  className,
}: ServiceFrontProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <span className="eyebrow">{eyebrow}</span>

      <h2 className="text-h2 font-serif text-ink-primary max-w-[22ch]">
        {title}
      </h2>

      <p className="text-base md:text-lg text-ink-secondary leading-relaxed max-w-[58ch]">
        {description}
      </p>

      <ul className="flex flex-col gap-3 mt-2" aria-label="Resultados esperados">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-[9px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-sm text-ink-secondary leading-relaxed">
              {outcome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
