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
  'Use médias mensais recentes da operação, não o melhor mês do ano.',
  'Os cenários guiados existem para manter a leitura dentro de uma faixa comercial plausível.',
  'O objetivo não é acertar o futuro com exatidão, mas revelar se existe oportunidade suficiente para aprofundar a conversa.',
]

export default function SimuladorDeImpactoComercialPage() {
  return (
    <>
      <SectionWrapper background="canvas" className="overflow-hidden border-b border-border">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[48rem] flex-col gap-4">
            <span className="eyebrow">Diagnóstico consultivo</span>
            <h1 className="text-h1 font-serif text-ink-primary">
              Quanto da oportunidade comercial pode estar ficando na mesa hoje.
            </h1>
            <p className="max-w-[56ch] text-base leading-relaxed text-ink-secondary md:text-lg">
              Você informa o cenário atual. A ferramenta organiza uma projeção plausível e devolve
              uma leitura mais objetiva de receita, retorno e prioridade comercial.
            </p>
          </div>

          <RoiCalculatorSection noWrapper showHeader={false} />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="rounded-[1.5rem] border border-border bg-surface/75 px-6 py-6">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Como ler este diagnóstico
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
                  Se a oportunidade fizer sentido, o próximo passo é descobrir onde a fricção está:
                  proposta, página, processo, abordagem comercial ou operação.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-canvas/90 px-6 py-6">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Se a leitura fizer sentido
                </span>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  O diagnóstico estratégico cruza esta estimativa com aquisição, site, proposta e
                  operação comercial para mostrar onde agir primeiro.
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
