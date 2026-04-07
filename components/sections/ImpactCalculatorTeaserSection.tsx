import TrackedButton from '@/components/analytics/TrackedButton'
import SectionWrapper from '@/components/sections/SectionWrapper'
import { cn } from '@/lib/utils'

type Background = 'canvas' | 'surface'

interface ImpactCalculatorTeaserSectionProps {
  eyebrow?: string
  title: string
  subtitle: string
  background?: Background
  className?: string
  trackingLocation?: string
}

export default function ImpactCalculatorTeaserSection({
  eyebrow = 'Simulador de impacto comercial',
  title,
  subtitle,
  background = 'surface',
  className,
  trackingLocation,
}: ImpactCalculatorTeaserSectionProps) {
  return (
    <SectionWrapper background={background} className={className}>
      <div className="editorial-panel surface-grid px-6 py-6 md:px-8 md:py-8">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-10">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="text-h2 font-serif text-ink-primary">{title}</h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-ink-secondary">
              {subtitle}
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-border bg-canvas/85 px-5 py-5">
            <p className="text-sm leading-relaxed text-ink-secondary">
              Uma leitura rápida para estimar receita incremental, lucro potencial, ROI mensal e
              payback aproximado antes de decidir o próximo passo.
            </p>

            <TrackedButton
              href="/simulador-de-impacto-comercial"
              variant="secondary"
              size="lg"
              className={cn('mt-5 w-full justify-center', 'lg:w-auto')}
              trackingLocation={trackingLocation}
              trackingLabel="Abrir o Simulador de Impacto Comercial"
            >
              Abrir o Simulador de Impacto Comercial
            </TrackedButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
