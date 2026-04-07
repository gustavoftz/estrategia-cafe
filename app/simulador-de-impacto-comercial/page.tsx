import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import TrackedButton from '@/components/analytics/TrackedButton'
import CTASection from '@/components/sections/CTASection'
import RoiCalculatorSection from '@/components/sections/RoiCalculatorSection'
import SectionWrapper from '@/components/sections/SectionWrapper'

export const metadata: Metadata = createMetadata({
  title: 'Simulador de Impacto Comercial',
  description:
    'Estime o impacto financeiro de melhorar conversão, processo comercial e eficiência da operação com uma simulação consultiva em tempo real.',
  path: '/simulador-de-impacto-comercial',
})

const readingGuides = [
  'Use médias mensais recentes, não o melhor mês do ano.',
  'A taxa projetada deve refletir uma melhora plausível, não um cenário idealizado.',
  'O resultado ajuda a priorizar decisões comerciais antes de detalhar um diagnóstico completo.',
]

export default function SimuladorDeImpactoComercialPage() {
  return (
    <>
      <SectionWrapper background="canvas" className="overflow-hidden border-b border-border">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[46rem] flex-col gap-4">
            <span className="eyebrow">Simulador de impacto comercial</span>
            <h1 className="text-h1 font-serif text-ink-primary">
              Estime o impacto financeiro de reduzir a fricção comercial.
            </h1>
            <p className="max-w-[56ch] text-base leading-relaxed text-ink-secondary md:text-lg">
              Uma leitura rápida para transformar volume, conversão, ticket e margem em uma ordem
              de grandeza mais concreta antes de decidir o próximo passo.
            </p>
          </div>

          <RoiCalculatorSection noWrapper showHeader={false} />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="rounded-[1.5rem] border border-border bg-surface/75 px-6 py-6">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Como usar esta página
                </span>
                <div className="flex flex-col divide-y divide-border">
                  {readingGuides.map((guide) => (
                    <div key={guide} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <span
                        className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-relaxed text-ink-secondary">{guide}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  Se o cenário parecer relevante, o diagnóstico ajuda a entender qual fricção deve
                  ser tratada primeiro para capturar esse potencial.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-canvas/90 px-6 py-6">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Próximo passo
                </span>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  Quer cruzar essa estimativa com o seu contexto real de aquisição, site e operação
                  comercial?
                </p>
                <TrackedButton
                  href="/contato"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  trackingLocation="impact_calculator_hero"
                  trackingLabel="Falar sobre meu cenário"
                >
                  Falar sobre meu cenário
                </TrackedButton>
                <TrackedButton
                  href="/diagnostico-estrategico"
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                  trackingLocation="impact_calculator_hero"
                  trackingLabel="Ver o Diagnóstico Estratégico"
                >
                  Ver o Diagnóstico Estratégico
                </TrackedButton>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Próximo passo"
        title="Se a oportunidade parece relevante, o próximo passo é entender onde agir primeiro."
        subtitle="A simulação mostra ordem de grandeza. O diagnóstico mostra a fricção dominante, as prioridades reais e o que faz sentido executar no seu contexto."
        primaryCta={{ label: 'Iniciar uma conversa estratégica', href: '/contato' }}
        secondaryCta={{ label: 'Entender o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
      />
    </>
  )
}
