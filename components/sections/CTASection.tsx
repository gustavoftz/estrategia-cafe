import SectionWrapper from '@/components/sections/SectionWrapper'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  className?: string
}

/**
 * Full-width CTA block used at the end of every page.
 * Dark background, centered, consultative framing.
 */
export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <SectionWrapper
      background="dark"
      className={cn('border-t border-white/10', className)}
    >
      <div className="flex flex-col items-center text-center gap-6 max-w-narrow mx-auto">
        {eyebrow && (
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-accent-light">
            {eyebrow}
          </span>
        )}

        <h2 className="text-h2 font-serif text-ink-inverse">
          {title}
        </h2>

        {subtitle && (
          <p className="text-base md:text-lg text-ink-inverse/65 leading-relaxed max-w-[50ch]">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Button
            href={primaryCta.href}
            variant="inverse"
            size="lg"
            className="w-full sm:w-auto"
          >
            {primaryCta.label}
          </Button>

          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="ghost"
              size="lg"
              className="text-ink-inverse/60 hover:text-ink-inverse border-transparent w-full sm:w-auto"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
