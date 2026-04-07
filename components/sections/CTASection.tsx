import SectionWrapper from '@/components/sections/SectionWrapper'
import TrackedButton from '@/components/analytics/TrackedButton'
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
    <SectionWrapper background="dark" className={cn('relative overflow-hidden border-t border-white/10', className)}>
      <div className="relative mx-auto max-w-[54rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[0_32px_90px_rgba(0,0,0,0.28)] md:px-12 md:py-14">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-light/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-[-4rem] h-56 w-56 rounded-full bg-white/8 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />

        <div className="relative flex flex-col items-center gap-6 text-center">
          {eyebrow && (
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-accent-light">
              {eyebrow}
            </span>
          )}

          <h2 className="text-h2 font-serif text-ink-inverse">{title}</h2>

          {subtitle && (
            <p className="max-w-[50ch] text-base leading-relaxed text-ink-inverse/68 md:text-lg">
              {subtitle}
            </p>
          )}

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-inverse/40">
            Sem proposta genérica. Sem pressão para contratar.
          </p>

          <div className="mt-2 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TrackedButton
              href={primaryCta.href}
              variant="inverse"
              size="lg"
              className="w-full sm:w-auto"
              trackingLocation="cta_section_primary"
              trackingLabel={primaryCta.label}
            >
              {primaryCta.label}
            </TrackedButton>

            {secondaryCta && (
              <TrackedButton
                href={secondaryCta.href}
                variant="ghost"
                size="lg"
                className="w-full border-transparent text-ink-inverse/70 hover:text-ink-inverse sm:w-auto"
                trackingLocation="cta_section_secondary"
                trackingLabel={secondaryCta.label}
              >
                {secondaryCta.label}
              </TrackedButton>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
