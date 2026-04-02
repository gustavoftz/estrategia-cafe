import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import ServiceFront from '@/components/sections/ServiceFront'
import CTASection from '@/components/sections/CTASection'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = createMetadata({
  title: 'Serviços',
  description:
    'Estratégia e posicionamento, sites e conversão, SEO e aquisição orgânica, automação por WhatsApp. Frentes integradas de um sistema comercial, não serviços isolados.',
  path: '/servicos',
})

export default function ServicosPage() {
  return (
    <>
      {/* 1. Introdução — framing antes de listar */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[720px]">
          <span className="eyebrow">Serviços</span>
          <h1 className="text-display font-serif text-ink-primary">
            Frentes estratégicas,{' '}
            <span className="text-ink-secondary">não serviços isolados.</span>
          </h1>
          <Prose size="lg" maxWidth={false} className="max-w-[58ch]">
            <p>
              Cada frente abaixo pode ser trabalhada de forma independente — mas os resultados mais consistentes acontecem quando todas funcionam como sistema. Posicionamento informa o site. O site informa a aquisição. A aquisição informa a operação comercial.
            </p>
            <p>
              A lógica de trabalho sempre começa pelo diagnóstico: entender onde está a maior fricção e qual intervenção traz o maior retorno antes de decidir o escopo.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 2. Estratégia e posicionamento */}
      <SectionWrapper background="surface">
        <ServiceFront
          eyebrow="Frente 01"
          title="Estratégia e posicionamento"
          description="A base de qualquer presença digital eficiente é clareza sobre o que a empresa vende, para quem, e por que alguém deveria escolhê-la em vez da alternativa. Sem isso, site, mídia e operação comercial operam com atrito desnecessário."
          outcomes={[
            'Proposta de valor clara e diferenciada, não genérica',
            'Mensagem central definida e hierarquia de comunicação estruturada',
            'Alinhamento entre o que a empresa diz e o que o cliente precisa ouvir',
            'Base sólida para site, mídia e materiais comerciais',
          ]}
        />
      </SectionWrapper>

      {/* 3. Sites, UX e conversão */}
      <SectionWrapper background="canvas">
        <ServiceFront
          eyebrow="Frente 02"
          title="Sites, UX e conversão"
          description="Um site que existe mas não persuade é infraestrutura desperdiçada. O trabalho aqui é transformar o site em um ativo comercial real: que comunica com clareza, constrói confiança e converte o tráfego que já existe — antes de investir em mais aquisição."
          outcomes={[
            'Diagnóstico do site atual como ativo de venda',
            'Reestruturação de jornada, hierarquia de informação e copy',
            'CRO: melhor aproveitamento do tráfego existente sem aumentar custo',
            'Menor dependência de volume para gerar resultado',
          ]}
        />
      </SectionWrapper>

      {/* 4. SEO e aquisição */}
      <SectionWrapper background="surface">
        <ServiceFront
          eyebrow="Frente 03"
          title="SEO e aquisição orgânica"
          description="SEO não é apenas tráfego — é demanda qualificada chegando de forma consistente e com custo decrescente ao longo do tempo. O trabalho envolve estrutura técnica, arquitetura de conteúdo alinhada à intenção de compra e autoridade editorial construída com critério."
          outcomes={[
            'Público que já está buscando o que a empresa oferece chegando organicamente',
            'Redução progressiva do custo de aquisição ao longo do tempo',
            'Autoridade técnica e editorial que reforça credibilidade',
            'Estrutura de conteúdo que apoia todo o funil — não apenas o topo',
          ]}
        />
      </SectionWrapper>

      {/* 5. WhatsApp e operação comercial */}
      <SectionWrapper background="canvas">
        <ServiceFront
          eyebrow="Frente 04"
          title="Automação e operação comercial por WhatsApp"
          description="O WhatsApp é onde a maioria das conversas comerciais acontece no Brasil. Mas sem estrutura, acumula contatos sem processo, perde oportunidades por demora e sobrecarrega o time com triagem manual. O trabalho aqui é estruturar a operação para ser rápida, consistente e escalável."
          outcomes={[
            'Qualificação automatizada de leads antes do contato humano',
            'Fluxos de atendimento com velocidade e consistência',
            'Menos oportunidades perdidas por demora ou falta de processo',
            'Operação que escala sem depender só de volume de pessoas',
          ]}
        />
      </SectionWrapper>

      {/* 6. Por que a interseção importa */}
      <SectionWrapper background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="Por que a interseção importa"
            title="Cada frente isolada tem limite. A interseção não."
          />
          <Prose size="base" maxWidth={false}>
            <p>
              Tráfego sem conversão é custo. Site sem aquisição é desperdício. Automação sem qualificação é ruído. Posicionamento sem execução é teoria.
            </p>
            <p>
              Quando as frentes funcionam em conjunto, os resultados se multiplicam: o posicionamento claro torna o site mais persuasivo. O site mais persuasivo melhora a conversão da mídia. A mídia bem direcionada melhora a qualidade dos leads. Os leads qualificados tornam a operação por WhatsApp mais eficiente.
            </p>
            <p>
              É por isso que a abordagem começa sempre por diagnóstico — para identificar onde está a maior alavanca antes de decidir por onde começar.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 7. Como os projetos começam */}
      <SectionWrapper background="canvas">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="Como os projetos começam"
            title="Sempre por diagnóstico — nunca por proposta genérica"
          />
          <Prose size="base" maxWidth={false}>
            <p>
              Antes de qualquer proposta, o primeiro passo é uma conversa estratégica. O objetivo é entender o momento atual, o que já foi tentado, onde está a principal fricção e qual intervenção faz mais sentido dado o contexto.
            </p>
            <p>
              A partir disso, o escopo é definido com clareza: o que vai ser feito, em qual ordem e com qual objetivo. Sem pacotes fechados e sem vender o que não é necessário.
            </p>
            <p>
              Se você ainda não tem clareza sobre qual frente priorizar, o Diagnóstico Estratégico foi feito para isso.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Próximo passo"
        title="Antes de contratar qualquer frente, faz sentido entender qual é a prioridade."
        subtitle="Uma conversa de 45 minutos para mapear onde está a maior fricção e qual intervenção traz mais resultado no seu contexto."
        primaryCta={{ label: 'Iniciar uma conversa', href: '/contato' }}
        secondaryCta={{ label: 'Ver o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
      />
    </>
  )
}
