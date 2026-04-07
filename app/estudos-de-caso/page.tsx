import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = createMetadata({
  title: 'Estudos de Caso',
  description:
    'Casos reais de diagnóstico e intervenção estratégica em aquisição, conversão e operação comercial. Estrutura de raciocínio, não apenas resultados.',
  path: '/estudos-de-caso',
})

const cases = [
  {
    id: 'ecommerce-conversao',
    tag: 'E-commerce — Conversão',
    title: 'Tráfego crescente, conversão estagnada',
    context:
      'E-commerce de nicho com investimento mensal consistente em mídia paga. O tráfego crescia, mas a taxa de conversão permanecia abaixo de 1% há mais de seis meses, tornando o custo de aquisição progressivamente inviável.',
    problem:
      'A leitura inicial da empresa era que o problema estava na segmentação dos anúncios. A análise mais cuidadosa revelou outra coisa: os usuários chegavam ao site, mas a página de produto não persuadia. A proposta de valor era genérica, a hierarquia visual confusa e o processo de decisão do usuário não estava sendo apoiado pela estrutura do conteúdo.',
    hypothesis:
      'O problema não era de volume de tráfego nem de segmentação de mídia. Era de jornada pós-clique. Melhorar a conversão do tráfego existente seria mais eficiente — e mais rápido — do que aumentar o investimento em aquisição.',
    intervention:
      'Reestruturação da página de produto: hierarquia de informação, argumentação de valor, copy orientado a objeções reais, elementos de prova social posicionados estrategicamente. A mídia não foi tocada nesta fase.',
    result:
      'Melhora expressiva na taxa de conversão nos primeiros 60 dias após a implementação. O custo de aquisição caiu proporcionalmente, sem aumento no investimento em mídia. A empresa voltou a ter margem para crescer o tráfego com sustentabilidade.',
  },
  {
    id: 'b2b-whatsapp',
    tag: 'Serviços B2B — Operação comercial',
    title: 'WhatsApp sobrecarregado, oportunidades perdidas',
    context:
      'Empresa de serviços B2B que recebia alto volume de contatos via WhatsApp semanalmente. O time comercial estava sobrecarregado com triagem manual, respostas atrasadas e falta de padronização no atendimento. A taxa de conversão de contatos em propostas era baixa.',
    problem:
      'A empresa entendia o problema como falta de pessoas no time. A análise revelou algo diferente: a maioria dos contatos chegava sem qualificação prévia, exigindo muito tempo para entender o que cada pessoa precisava. Além disso, a inconsistência nas respostas — dependendo de quem atendia — gerava percepções diferentes da empresa para prospects diferentes.',
    hypothesis:
      'O gargalo não era de capacidade humana — era de processo. Com qualificação automatizada antes do contato humano e um fluxo de atendimento padronizado, a mesma equipe conseguiria atender mais contatos com mais qualidade e menos esforço.',
    intervention:
      'Estruturação de fluxo de qualificação automatizado via WhatsApp Business API: triagem de intenção, coleta de informações relevantes antes do contato humano e roteamento inteligente por tipo de demanda. Criação de biblioteca de respostas padronizadas para as situações mais comuns.',
    result:
      'Redução significativa no tempo de triagem manual. A equipe passou a atender leads já qualificados, com contexto prévio sobre a demanda. A taxa de conversão de contatos em propostas aumentou de forma consistente, e a percepção de qualidade do atendimento — medida por feedback informal dos clientes — melhorou.',
  },
]

export default function EstudosDeCasoPage() {
  return (
    <>
      {/* 1. Introdução */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[680px]">
          <span className="eyebrow">Estudos de caso</span>
          <h1 className="text-display font-serif text-ink-primary">
            Prova por raciocínio,{' '}
            <span className="text-ink-secondary">não por métricas vazias.</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[54ch]">
            Cada caso abaixo descreve o contexto real, o problema identificado, a hipótese estratégica que orientou a intervenção e o impacto percebido. O objetivo não é impressionar com números — é mostrar como o raciocínio funciona na prática.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Casos */}
      {cases.map((c, i) => (
        <SectionWrapper
          key={c.id}
          background={i % 2 === 0 ? 'surface' : 'canvas'}
          id={c.id}
        >
          <article className="flex flex-col gap-10">
            {/* Cabeçalho do caso */}
            <div className="flex flex-col gap-4 pb-8 border-b border-border">
              <span className="eyebrow">{c.tag}</span>
              <h2 className="text-h2 font-serif text-ink-primary">{c.title}</h2>
            </div>

            {/* Estrutura do caso */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-muted">
                    Contexto
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.context}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-muted">
                    Problema identificado
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.problem}</p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-muted">
                    Hipótese estratégica
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.hypothesis}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-muted">
                    Intervenção
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.intervention}</p>
                </div>
                <div className="flex flex-col gap-3 p-5 border border-border">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink-muted">
                    Impacto percebido
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.result}</p>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Os resultados descritos são específicos ao contexto deste cliente e não constituem
                  garantia de desempenho para outros projetos.
                </p>
              </div>
            </div>
          </article>
        </SectionWrapper>
      ))}

      <CTASection
        eyebrow="Cada contexto é diferente"
        title="O raciocínio é o mesmo. O diagnóstico é o seu."
        subtitle="Cada contexto é diferente. Uma conversa de diagnóstico ajuda a identificar onde está a sua maior fricção e qual intervenção faz sentido."
        primaryCta={{ label: 'Iniciar uma conversa', href: '/contato' }}
        secondaryCta={{ label: 'Ver o método', href: '/metodo' }}
      />
    </>
  )
}
