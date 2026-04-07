import type { Metadata } from 'next'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import TrackedButton from '@/components/analytics/TrackedButton'
import CTASection from '@/components/sections/CTASection'
import ImpactCalculatorTeaserSection from '@/components/sections/ImpactCalculatorTeaserSection'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = {
  title: 'estrategia.cafe — Consultoria estratégica digital',
  description:
    'Ajudamos empresas a melhorar posicionamento, site, aquisição, conversão e atendimento comercial com uma abordagem integrada de estratégia, UX, CRO, SEO e automação por WhatsApp.',
  alternates: {
    canonical: 'https://estrategia.cafe/',
  },
  openGraph: {
    title: 'estrategia.cafe — Consultoria estratégica digital',
    description:
      'Ajudamos empresas a melhorar posicionamento, site, aquisição, conversão e atendimento comercial com uma abordagem integrada de estratégia, UX, CRO, SEO e automação por WhatsApp.',
    url: 'https://estrategia.cafe',
    siteName: 'estrategia.cafe',
    type: 'website',
    locale: 'pt_BR',
  },
}

const heroSignals = [
  {
    label: 'Diagnóstico em 90 minutos',
    detail: 'Uma sessão estruturada para localizar a fricção dominante antes de qualquer execução.',
  },
  {
    label: 'Documento com prioridades',
    detail: 'Você sai com clareza sobre o que atacar primeiro e o que pode esperar.',
  },
  {
    label: 'Visão de sistema',
    detail: 'Site, aquisição, mensagem e operação comercial avaliados em conjunto.',
  },
]

const systemPillars = [
  {
    label: 'Posicionamento',
    detail: 'A mensagem certa para o público certo, sem ruído comercial.',
  },
  {
    label: 'Site e conversão',
    detail: 'A jornada precisa persuadir e sustentar a decisão de compra.',
  },
  {
    label: 'Aquisição',
    detail: 'O tráfego precisa chegar com intenção compatível com o que você vende.',
  },
  {
    label: 'Operação comercial',
    detail: 'WhatsApp e atendimento precisam transformar interesse em avanço real.',
  },
]

const symptoms = [
  {
    symptom: 'O tráfego cresce, a conversão não',
    cause: 'O site não persuade. A jornada não sustenta a decisão de compra.',
  },
  {
    symptom: 'Os leads chegam, mas chegam errados',
    cause: 'A mensagem atrai o público errado — ou atrai o certo, mas não o qualifica.',
  },
  {
    symptom: 'A agência executa, o resultado não convence',
    cause: 'Execução correta do problema errado. Falta diagnóstico, não esforço.',
  },
  {
    symptom: 'WhatsApp cheio, poucos fechamentos',
    cause: 'Processo de atendimento inexistente. Oportunidade perdida entre conversas.',
  },
]

const fronts = [
  {
    number: '01',
    title: 'Estratégia e posicionamento',
    description: 'Clareza sobre o que a empresa vende, para quem, e por que alguém deveria escolhê-la.',
  },
  {
    number: '02',
    title: 'Sites, UX e conversão',
    description: 'Transformar o site em ativo comercial real — não apenas presença digital.',
  },
  {
    number: '03',
    title: 'SEO e aquisição orgânica',
    description: 'Demanda qualificada chegando com consistência e custo decrescente ao longo do tempo.',
  },
  {
    number: '04',
    title: 'Operação comercial por WhatsApp',
    description: 'Velocidade, consistência e estrutura para não perder o que já chegou.',
  },
]

const methodSteps = [
  { number: '01', label: 'Diagnóstico' },
  { number: '02', label: 'Priorização' },
  { number: '03', label: 'Estruturação' },
  { number: '04', label: 'Implementação' },
  { number: '05', label: 'Otimização' },
]

const caseInsights = [
  {
    tag: 'E-commerce — Conversão',
    problem: 'Tráfego crescente, conversão estagnada abaixo de 1% por mais de seis meses.',
    insight:
      'O problema não era segmentação de mídia. Era a página de produto — que não persuadia e não apoiava a decisão do usuário.',
    href: '/estudos-de-caso#ecommerce-conversao',
  },
  {
    tag: 'Serviços B2B — Operação comercial',
    problem: 'Alto volume de contatos no WhatsApp, time sobrecarregado, taxa de fechamento baixa.',
    insight:
      'O gargalo não era capacidade humana — era processo. Sem qualificação prévia, cada contato exigia triagem que não deveria existir.',
    href: '/estudos-de-caso#b2b-whatsapp',
  },
]

const forWhom = [
  'Você investe em digital, mas o retorno não condiz com o esforço',
  'Você sente que algo não está funcionando — mas não sabe exatamente o quê',
  'Você está prestes a escalar investimento e precisa garantir que a estrutura aguenta',
  'Você já tentou outras abordagens e quer uma leitura mais estratégica e integrada',
]

const diagSteps = [
  'Formulário de contexto antes da sessão',
  'Sessão de diagnóstico de 90 minutos por videochamada',
  'Documento estruturado com as principais fricções identificadas',
  'Recomendação de prioridades — independente de qualquer decisão de contratação',
]

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <SectionWrapper background="canvas" className="overflow-hidden border-b border-border">
        <div className="relative flex flex-col gap-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute left-[18%] top-16 hidden h-px w-40 bg-gradient-to-r from-accent/40 to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <div className="relative flex max-w-[680px] flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <span className="eyebrow">Consultoria estratégica digital</span>
              <h1 className="text-display font-serif text-ink-primary">
                Mais tráfego não resolve{' '}
                <span className="text-ink-secondary">uma estrutura comercial fraca.</span>
              </h1>

              <div className="flex max-w-[58ch] flex-col gap-4">
                <p className="text-lg text-ink-secondary leading-relaxed">
                  Tráfego chega, mas não converte. O site existe, mas não persuade. Os leads chegam,
                  mas chegam errados. O WhatsApp acumula conversas sem estrutura para fechá-las.
                </p>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Esses não são problemas de marketing. São problemas de sistema comercial.
                </p>
              </div>

              <div className="flex w-full max-w-[34rem] flex-col gap-5 pt-2 lg:max-w-none lg:items-start">
                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                  <TrackedButton
                    href="/contato"
                    variant="primary"
                    size="lg"
                    trackingLocation="home_hero"
                    trackingLabel="Iniciar uma conversa estratégica"
                  >
                    Iniciar uma conversa estratégica
                  </TrackedButton>
                  <TrackedButton
                    href="/diagnostico-estrategico"
                    variant="secondary"
                    size="lg"
                    trackingLocation="home_hero"
                    trackingLabel="Ver o Diagnóstico Estratégico"
                  >
                    Ver o Diagnóstico Estratégico
                  </TrackedButton>
                </div>
                <p className="mx-auto max-w-[30ch] text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted lg:mx-0 lg:max-w-none lg:text-left">
                  Sem proposta genérica. Sem pacote fechado. Sem diagnóstico apressado.
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-3 pt-3 text-left sm:grid-cols-3">
                {heroSignals.map(({ label, detail }) => (
                  <div key={label} className="editorial-panel px-5 py-5">
                    <div className="relative flex flex-col gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                        {label}
                      </span>
                      <p className="text-sm text-ink-secondary leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-8">
              <div className="editorial-panel surface-grid px-6 py-6 md:px-7 md:py-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl"
                />

                <div className="relative flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                        Leitura de sistema
                      </span>
                      <h2 className="text-h3 font-serif text-ink-primary">
                        Onde a fricção costuma aparecer
                      </h2>
                    </div>
                    <span className="rounded-full border border-border bg-white/65 px-3 py-1 text-xs font-medium text-ink-secondary">
                      4 frentes conectadas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.25rem] bg-border">
                    {systemPillars.map(({ label, detail }, index) => (
                      <div key={label} className="bg-canvas/85 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <span className="font-serif text-xl leading-none text-border-strong">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-ink-primary">{label}</p>
                            <p className="text-sm text-ink-secondary leading-relaxed">{detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.25rem] border border-accent/15 bg-accent/5 px-4 py-4">
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      Saída do diagnóstico: uma leitura clara sobre onde agir primeiro, o que pode
                      esperar e o que hoje está desperdiçando esforço.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. O padrão que se repete */}
      <SectionWrapper background="surface">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="O padrão que se repete"
            title="O problema raramente está onde parece estar"
            subtitle="A leitura mais comum é de canal — trocar agência, aumentar verba, testar um novo formato. Com frequência, a causa é mais estrutural."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {symptoms.map(({ symptom, cause }) => (
              <div key={symptom} className="flex flex-col gap-3 p-7 bg-surface">
                <p className="text-sm font-sans font-semibold text-ink-primary leading-snug">
                  {symptom}
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">{cause}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. O que fazemos */}
      <SectionWrapper background="canvas">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="O que fazemos"
            title="Trabalhamos no sistema comercial — não em ações isoladas."
          />
          <Prose size="base" maxWidth={false}>
            <p>
              Posicionamento, site, aquisição, conversão e operação são partes de um mesmo sistema.
              Quando uma parte falha, as outras sofrem o efeito. Quando funcionam em conjunto, os
              resultados mudam de patamar.
            </p>
            <p>
              A estrategia.cafe trabalha nessa interseção — não como uma agência que executa tarefas,
              mas como uma consultoria que diagnostica onde está o problema, prioriza o que traz mais
              retorno e estrutura a execução com critério.
            </p>
            <p>O ponto de partida é sempre o diagnóstico. Nunca uma proposta genérica.</p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 4. Frentes de trabalho */}
      <SectionWrapper background="surface">
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Frentes de trabalho" title="Quatro frentes. Um sistema." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {fronts.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-4 p-7 bg-surface">
                <span className="font-serif text-[2rem] leading-none text-border-strong">
                  {number}
                </span>
                <h3 className="text-sm font-sans font-semibold text-ink-primary">{title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div>
            <TrackedButton
              href="/servicos"
              variant="secondary"
              trackingLocation="home_fronts"
              trackingLabel="Ver todas as frentes em detalhe"
            >
              Ver todas as frentes em detalhe
            </TrackedButton>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Método (teaser) */}
      <SectionWrapper background="canvas">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end">
            <SectionHeader
              eyebrow="Método"
              title="Entender antes de propor. Estruturar antes de executar."
            />
            <p className="text-base text-ink-secondary leading-relaxed">
              Cada projeto segue cinco fases em sequência. Nenhuma é pulada. A ordem importa — porque
              a qualidade do diagnóstico determina a qualidade de tudo que vem depois.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-px bg-border overflow-hidden">
            {methodSteps.map(({ number, label }) => (
              <div key={number} className="flex flex-col gap-3 p-6 bg-canvas flex-1">
                <span className="font-serif text-xl leading-none text-border-strong">{number}</span>
                <span className="text-sm font-sans font-medium text-ink-primary">{label}</span>
              </div>
            ))}
          </div>
          <div>
            <TrackedButton
              href="/metodo"
              variant="secondary"
              trackingLocation="home_method"
              trackingLabel="Entender o método completo"
            >
              Entender o método completo
            </TrackedButton>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Prova por raciocínio */}
      <SectionWrapper background="surface">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Estudos de caso"
            title="Como o raciocínio funciona na prática"
            subtitle="Dois casos reais de diagnóstico e intervenção. O que importa não são os números — é a lógica que orientou cada decisão."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseInsights.map(({ tag, problem, insight, href }) => (
              <a
                key={tag}
                href={href}
                className="group flex flex-col gap-5 p-7 border border-border hover:border-ink-muted transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,17,17,0.08)]"
              >
                <span className="eyebrow text-ink-muted">{tag}</span>
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-sans font-semibold text-ink-primary leading-snug">
                    {problem}
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{insight}</p>
                </div>
                <span className="text-xs font-sans font-medium text-accent group-hover:underline">
                  Ver o caso →
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Para quem faz sentido */}
      <SectionWrapper background="canvas">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="Para quem"
            title="Esta abordagem faz sentido se você se reconhece aqui"
          />
          <ul className="flex flex-col divide-y divide-border">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-4 py-5">
                <span
                  className="mt-[9px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-base text-ink-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* 8. Diagnóstico Estratégico — oferta de entrada */}
      <SectionWrapper background="surface" className="border-t border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Oferta de entrada</span>
            <h2 className="text-h2 font-serif text-ink-primary">Diagnóstico Estratégico</h2>
            <p className="text-base text-ink-secondary leading-relaxed max-w-[50ch]">
              Uma análise estruturada do sistema comercial digital antes de qualquer execução.
              Identifica onde está a maior fricção, o que está funcionando e quais são as prioridades
              reais — com um documento que você pode usar independentemente de qualquer decisão de
              contratação.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-12">
            <div className="flex flex-col divide-y divide-border">
              {diagSteps.map((item) => (
                <div key={item} className="flex items-start gap-4 py-4">
                  <span
                    className="mt-[8px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <TrackedButton
              href="/diagnostico-estrategico"
              variant="primary"
              trackingLocation="home_offer"
              trackingLabel="Solicitar o Diagnóstico Estratégico"
            >
              Solicitar o Diagnóstico Estratégico
            </TrackedButton>
          </div>
        </div>
      </SectionWrapper>

      <ImpactCalculatorTeaserSection
        title="Quer uma estimativa rápida antes de falar comigo?"
        subtitle="O simulador transforma volume de oportunidades, conversão, ticket e margem em uma leitura mais concreta do impacto potencial de melhorar sua operação comercial."
        background="canvas"
        trackingLocation="home_teaser"
      />

      {/* 9. CTA final */}
      <CTASection
        eyebrow="Próximo passo"
        title="Antes de qualquer investimento, faz sentido entender o problema."
        subtitle="Uma conversa para mapear o momento atual, o que já foi tentado e onde está a maior oportunidade — sem proposta genérica."
        primaryCta={{ label: 'Iniciar uma conversa estratégica', href: '/contato' }}
        secondaryCta={{ label: 'Entender como trabalhamos', href: '/metodo' }}
      />
    </>
  )
}
