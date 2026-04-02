import type { Metadata } from 'next'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = {
  title: 'estrategia.cafe — Consultoria estratégica digital',
  description:
    'Ajudamos empresas a melhorar posicionamento, site, aquisição, conversão e atendimento comercial com uma abordagem integrada de estratégia, UX, CRO, SEO e automação por WhatsApp.',
  alternates: {
    canonical: 'https://estrategia.cafe',
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
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-7 max-w-[680px]">
          <span className="eyebrow">Consultoria estratégica digital</span>
          <h1 className="text-display font-serif text-ink-primary">
            Mais tráfego não resolve{' '}
            <span className="text-ink-secondary">uma estrutura comercial fraca.</span>
          </h1>
          <div className="flex flex-col gap-4 max-w-[58ch]">
            <p className="text-lg text-ink-secondary leading-relaxed">
              Tráfego chega, mas não converte. O site existe, mas não persuade. Os leads chegam, mas
              chegam errados. O WhatsApp acumula conversas sem estrutura para fechá-las.
            </p>
            <p className="text-base text-ink-secondary leading-relaxed">
              Esses não são problemas de marketing. São problemas de sistema comercial.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button href="/contato" variant="primary" size="lg">
              Iniciar uma conversa estratégica
            </Button>
            <Button href="/diagnostico-estrategico" variant="secondary" size="lg">
              Ver o Diagnóstico Estratégico
            </Button>
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
            <Button href="/servicos" variant="secondary">
              Ver todas as frentes em detalhe
            </Button>
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
            <Button href="/metodo" variant="secondary">
              Entender o método completo
            </Button>
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
            <Button href="/diagnostico-estrategico" variant="primary">
              Solicitar o Diagnóstico Estratégico
            </Button>
          </div>
        </div>
      </SectionWrapper>

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
