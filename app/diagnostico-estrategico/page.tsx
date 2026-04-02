import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = createMetadata({
  title: 'Diagnóstico Estratégico',
  description:
    'Uma análise estruturada do seu sistema comercial digital antes de qualquer execução. Identifica onde está a maior fricção e quais são as prioridades reais.',
  path: '/diagnostico-estrategico',
})

const canBeEvaluated = [
  { label: 'Posicionamento e clareza de mensagem', description: 'A proposta de valor está clara? A mensagem diferencia ou se perde entre os concorrentes?' },
  { label: 'Site como ativo de venda', description: 'O site persuade? A jornada do usuário é clara? Existe alinhamento entre o que o visitante espera e o que encontra?' },
  { label: 'Estrutura de aquisição', description: 'Os canais de aquisição estão bem direcionados? O tráfego que chega tem potencial real de conversão?' },
  { label: 'Conversão e qualidade de leads', description: 'A taxa de conversão é compatível com o tráfego? Os leads chegam qualificados ou exigem muito esforço de triagem?' },
  { label: 'Operação comercial por WhatsApp', description: 'O atendimento é rápido, consistente e estruturado? Existem oportunidades sendo perdidas por falta de processo?' },
]

const howItWorks = [
  { step: '01', title: 'Formulário de contexto', description: 'Antes da conversa, você preenche um formulário com informações sobre o momento atual da empresa, os desafios e o que já foi tentado. Isso garante que a sessão seja produtiva desde o primeiro minuto.' },
  { step: '02', title: 'Sessão de diagnóstico', description: 'Uma conversa de 90 minutos por videochamada. O foco é entender o sistema comercial em profundidade — não apresentar soluções prematuramente.' },
  { step: '03', title: 'Documento de análise', description: 'Após a sessão, você recebe um documento estruturado com o diagnóstico das frentes avaliadas, as principais fricções identificadas e as prioridades recomendadas.' },
  { step: '04', title: 'Recomendação de próximos passos', description: 'O documento inclui uma recomendação clara sobre por onde começar — seja para trabalhar junto ou para executar internamente.' },
]

export default function DiagnosticoPage() {
  return (
    <>
      {/* 1. Headline */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[720px]">
          <span className="eyebrow">Diagnóstico Estratégico</span>
          <h1 className="text-display font-serif text-ink-primary">
            Antes de contratar,{' '}
            <span className="text-ink-secondary">antes de executar — entenda o problema.</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[54ch]">
            O Diagnóstico Estratégico é uma análise estruturada do seu sistema comercial digital. O objetivo é identificar onde está a maior fricção, o que está funcionando e o que precisa mudar — com clareza e sem achismo.
          </p>
          <div className="pt-2">
            <Button href="/contato" variant="primary" size="lg">
              Solicitar o Diagnóstico Estratégico
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. O que é — enquadramento */}
      <SectionWrapper background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="O que é este diagnóstico"
            title="Uma análise — não uma proposta comercial disfarçada"
          />
          <Prose size="base" maxWidth={false}>
            <p>
              O Diagnóstico Estratégico não é uma reunião de apresentação. Não existe pitch, não existe proposta genérica e não existe pressão para contratar.
            </p>
            <p>
              É uma sessão de trabalho com foco em entender o momento atual da sua empresa: o que está funcionando, o que está gerando fricção e qual é a prioridade real dado o contexto — recursos, urgência e potencial de impacto.
            </p>
            <p>
              O resultado é um diagnóstico documentado que você pode usar independentemente de qualquer decisão de contratação.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 3. Quando faz sentido */}
      <SectionWrapper background="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Quando faz sentido"
            title="Este diagnóstico é útil em situações específicas"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Você investe em digital mas sente que o retorno não condiz com o esforço',
              'Você sente que algo não está funcionando, mas não sabe exatamente o quê',
              'Você está prestes a iniciar um novo projeto e quer garantir a direção certa',
              'Você já tentou outras abordagens e quer um olhar externo mais estruturado',
              'Você quer escalar investimento, mas precisa de clareza sobre onde focar',
              'Você recebe leads, mas eles chegam mal qualificados ou mal atendidos',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. O que pode ser avaliado */}
      <SectionWrapper background="surface">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="O que pode ser avaliado"
            title="Frentes do sistema comercial analisadas no diagnóstico"
            subtitle="Nem todas as frentes precisam ser avaliadas em todos os casos. O escopo é definido com base no contexto e nas prioridades identificadas antes da sessão."
          />
          <div className="flex flex-col divide-y divide-border">
            {canBeEvaluated.map(({ label, description }) => (
              <div key={label} className="flex flex-col sm:flex-row gap-3 sm:gap-16 py-7">
                <h3 className="text-sm font-sans font-semibold text-ink-primary shrink-0 sm:w-56">
                  {label}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[55ch]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Como funciona */}
      <SectionWrapper background="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Como funciona"
            title="Quatro etapas, do contexto ao diagnóstico documentado"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {howItWorks.map(({ step, title, description }) => (
              <div key={step} className="flex flex-col gap-4 p-7 border border-border">
                <span className="font-serif text-[2rem] leading-none text-border-strong">{step}</span>
                <h3 className="text-sm font-sans font-semibold text-ink-primary">{title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Próximo passo"
        title="O diagnóstico começa por uma conversa. Sem compromisso de contratação."
        subtitle="Preencha o formulário de contato com o contexto do seu momento atual. Se fizer sentido avançar para o diagnóstico, retorno em até 48 horas úteis."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/contato' }}
        secondaryCta={{ label: 'Entender o método', href: '/metodo' }}
      />
    </>
  )
}
