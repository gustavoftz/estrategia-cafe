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
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          <div className="flex max-w-[720px] flex-col gap-7">
            <span className="eyebrow">Simulador de impacto comercial</span>
            <h1 className="text-display font-serif text-ink-primary">
              Antes de investir mais,{' '}
              <span className="text-ink-secondary">estime o tamanho da oportunidade.</span>
            </h1>
            <div className="flex max-w-[58ch] flex-col gap-4">
              <p className="text-lg leading-relaxed text-ink-secondary">
                Esta simulação ajuda a traduzir melhoria de conversão e processo comercial em ordem
                de grandeza financeira. O objetivo não é prever o futuro com precisão absoluta, mas
                dar clareza para uma decisão comercial melhor.
              </p>
              <p className="text-base leading-relaxed text-ink-secondary">
                Use como ferramenta de leitura: quanto sua operação já gera hoje, quanto poderia
                gerar com menos fricção e qual seria o retorno potencial sobre um investimento
                mensal para capturar essa melhora.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackedButton
                href="/contato"
                variant="primary"
                size="lg"
                trackingLocation="impact_calculator_hero"
                trackingLabel="Falar sobre meu cenário"
              >
                Falar sobre meu cenário
              </TrackedButton>
              <TrackedButton
                href="/diagnostico-estrategico"
                variant="secondary"
                size="lg"
                trackingLocation="impact_calculator_hero"
                trackingLabel="Ver o Diagnóstico Estratégico"
              >
                Ver o Diagnóstico Estratégico
              </TrackedButton>
            </div>
          </div>

          <div className="editorial-panel px-6 py-6 md:px-7 md:py-7 lg:mt-8">
            <div className="relative flex flex-col gap-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Como ler esta simulação
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
            </div>
          </div>
        </div>
      </SectionWrapper>

      <RoiCalculatorSection />

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
