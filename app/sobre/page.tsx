import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = createMetadata({
  title: 'Sobre',
  description:
    'A estrategia.cafe nasceu da observação de que os problemas de digital raramente são de canal ou ferramenta — são de clareza, estrutura e coerência comercial.',
  path: '/sobre',
})

const systemItems = [
  { label: 'Posicionamento', text: 'Define o que a empresa diz e para quem. Quando está claro, tudo fica mais fácil: site, mídia, vendas.' },
  { label: 'Site e conversão', text: 'O site é o ponto de contato mais importante. Precisa persuadir, não apenas informar.' },
  { label: 'Aquisição', text: 'SEO e mídia trazem o público certo — quando há clareza sobre quem é esse público e o que ele precisa ouvir.' },
  { label: 'Qualificação de leads', text: 'Leads chegando errados indicam falha de mensagem ou de segmentação — não de volume.' },
  { label: 'Operação comercial', text: 'WhatsApp, velocidade de resposta e consistência são parte da conversão — não pós-venda.' },
  { label: 'Diagnóstico contínuo', text: 'Um sistema funciona quando é monitorado. Medir, aprender e ajustar é parte permanente do trabalho.' },
]

const principles = [
  { title: 'Diagnóstico antes de execução', description: 'Propor soluções sem entender o problema é a causa mais comum de investimento desperdiçado. O ponto de partida é sempre mapear o que está falhando e por quê.' },
  { title: 'Integração antes de otimização isolada', description: 'Otimizar uma frente sem considerar as outras é pouco eficiente. Site, aquisição, conversão e operação precisam funcionar em coerência — não em paralelo sem conexão.' },
  { title: 'Clareza antes de criatividade', description: 'A mensagem precisa ser clara antes de ser elaborada. Uma proposta de valor confusa não melhora com mais design ou mais tráfego.' },
  { title: 'Estrutura antes de escala', description: 'Escalar uma estrutura que não funciona só amplifica o problema. O trabalho de estruturação vem antes — e só então faz sentido acelerar.' },
  { title: 'Método antes de velocidade', description: 'Rapidez sem direção gera atividade sem resultado. O ritmo certo é o que permite agir com precisão — não necessariamente o mais rápido.' },
]

export default function SobrePage() {
  return (
    <>
      {/* 1. Abertura — worldview primeiro, não biografia */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[720px]">
          <span className="eyebrow">Sobre a estrategia.cafe</span>
          <h1 className="text-display font-serif text-ink-primary">
            A maioria dos problemas de digital não é de canal.{' '}
            <span className="text-ink-secondary">É de clareza, estrutura e coerência.</span>
          </h1>
          <Prose size="lg" maxWidth={false} className="max-w-[58ch]">
            <p>
              Quando uma empresa sente que o digital não está entregando, a resposta mais comum é investir mais em tráfego, trocar de agência ou testar um canal novo. Raramente é isso.
            </p>
            <p>
              Com frequência, o que está falhando é mais estrutural: a mensagem não é clara, o site não persuade, a jornada do lead é confusa, o atendimento comercial é inconsistente. São fricções que mais tráfego não resolve — porque tráfego só amplifica o que já existe.
            </p>
            <p>
              A estrategia.cafe nasceu dessa observação. E existe para trabalhar exatamente nesses pontos.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 2. Sistema — como as partes se conectam */}
      <SectionWrapper background="surface">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Como pensamos"
            title="O sistema comercial como um todo, não as partes em separado"
            subtitle="Posicionamento, site, aquisição, conversão e operação por WhatsApp são partes de um mesmo sistema. Quando uma parte falha, as outras são afetadas. Quando funcionam juntas, o resultado muda de patamar."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {systemItems.map(({ label, text }) => (
              <div key={label} className="flex flex-col gap-3 p-7 bg-canvas">
                <h3 className="text-sm font-sans font-semibold text-ink-primary">{label}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Trajetória */}
      <SectionWrapper background="canvas">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="De onde vem essa leitura"
            title="O padrão se repetiu em segmentos, portes e investimentos diferentes"
          />
          <Prose size="base" maxWidth={false}>
            <p>
              A estrategia.cafe foi construída a partir de uma observação recorrente: as empresas que obtinham resultados mais consistentes no digital não eram as que investiam mais. Eram as que tinham maior clareza sobre sua proposta, maior coerência entre canais e maior estrutura para converter e atender o que chegava.
            </p>
            <p>
              Esse padrão se repetiu em e-commerces com tráfego alto e conversão baixa, em empresas B2B com WhatsApp sobrecarregado, em negócios que trocavam de agência a cada ano sem mudar o resultado. O problema quase nunca era falta de execução — era falta de diagnóstico. Executava-se sem entender. Escalava-se sem estruturar.
            </p>
            <p>
              A forma de trabalho da estrategia.cafe nasceu dessa leitura: diagnóstico antes de proposta, priorização antes de escopo, método antes de velocidade.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 4. Princípios de trabalho */}
      <SectionWrapper background="surface">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Princípios de trabalho"
            title="O que orienta cada projeto"
            subtitle="Não são valores de parede. São critérios práticos que determinam como o trabalho é feito e quais decisões são tomadas ao longo do processo."
          />
          <div className="flex flex-col divide-y divide-border">
            {principles.map(({ title, description }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-3 sm:gap-16 py-7">
                <h3 className="text-sm font-sans font-semibold text-ink-primary shrink-0 sm:w-56">
                  {title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-[55ch]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Conversa antes de proposta"
        title="Uma conversa estratégica começa por entender o problema — não por apresentar uma proposta."
        subtitle="Se você sente que algo no seu sistema comercial não está funcionando, faz sentido começar por ali."
        primaryCta={{ label: 'Iniciar uma conversa', href: '/contato' }}
        secondaryCta={{ label: 'Ver o método', href: '/metodo' }}
      />
    </>
  )
}
