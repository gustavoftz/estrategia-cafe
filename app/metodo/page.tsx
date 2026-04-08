import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import MethodStep from '@/components/sections/MethodStep'
import CTASection from '@/components/sections/CTASection'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = createMetadata({
  title: 'Método de Diagnóstico Estratégico',
  description:
    'Diagnóstico, priorização, estruturação, implementação e otimização. Um processo baseado em entender antes de propor — e estruturar antes de executar.',
  path: '/metodo',
})

const steps = [
  {
    title: 'Diagnóstico',
    description:
      'O ponto de partida é sempre entender antes de propor. Isso significa analisar o momento atual da empresa — posicionamento, site, tráfego, conversão, operação — identificar onde está a maior fricção e mapear o que já foi tentado e por que não funcionou como esperado.',
    detail:
      'O diagnóstico não é superficial. É a fase que determina a qualidade de tudo que vem depois.',
  },
  {
    title: 'Priorização',
    description:
      'Nem tudo tem o mesmo impacto. Após o diagnóstico, o próximo passo é identificar qual intervenção traz o maior retorno dado o contexto: momento da empresa, recursos disponíveis, urgência e potencial de alavanca. Dispersão de esforço em múltiplas frentes ao mesmo tempo é um dos erros mais comuns — e mais custosos.',
    detail:
      'A priorização define o que NÃO vai ser feito — e isso é tão importante quanto o que vai.',
  },
  {
    title: 'Estruturação',
    description:
      'Antes de executar, o plano precisa estar claro: o que vai ser feito, como, em que ordem e com qual critério de sucesso. Essa fase alinha expectativas, define responsabilidades e garante que a execução tenha direção — não apenas atividade.',
    detail:
      'Estrutura não é burocracia. É o que garante que a execução corrija o problema real, não apenas o sintoma.',
  },
  {
    title: 'Implementação',
    description:
      'A execução acontece com qualidade técnica e argumentativa, mantendo alinhamento estratégico ao longo do processo. Não é entrega de tarefa — é construção de solução. O progresso é comunicado continuamente, e ajustes de rota são tratados como parte do processo, não como exceção.',
    detail: 'A urgência de agir não justifica agir sem direção. Velocidade sem alinhamento cria retrabalho.',
  },
  {
    title: 'Otimização',
    description:
      'Nenhuma intervenção é definitiva. Após a implementação, o ciclo de melhoria começa: medir o resultado das intervenções, identificar o que pode ser refinado e documentar os aprendizados para os próximos ciclos. É aqui que o trabalho se consolida e escala com mais segurança.',
    detail: 'Sem medição, a próxima rodada começa do zero. Com medição, cada ciclo é mais preciso que o anterior.',
  },
]

const avoids = [
  'Execução sem diagnóstico — agir antes de entender o problema',
  'Dispersão de esforço em múltiplas frentes simultaneamente',
  'Priorizar canal antes de estruturar mensagem e jornada',
  'Escalar tráfego sobre uma estrutura que não converte',
  'Propor soluções padrão sem considerar o contexto específico',
  'Otimizar partes sem considerar o impacto no sistema como um todo',
]

export default function MetodoPage() {
  return (
    <>
      {/* 1. Introdução */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[720px]">
          <span className="eyebrow">Método</span>
          <h1 className="text-display font-serif text-ink-primary">
            Executar sem entender o problema{' '}
            <span className="text-ink-secondary">é a causa mais comum de investimento desperdiçado.</span>
          </h1>
          <Prose size="lg" maxWidth={false} className="max-w-[58ch]">
            <p>
              Método não é burocracia. É o que garante que o trabalho correto seja feito na ordem correta — e que o esforço resolva o problema real, não apenas o sintoma mais visível.
            </p>
            <p>
              O processo da estratégia. tem cinco fases. Cada uma informa a seguinte. Nenhuma é pulada.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 2. As cinco fases */}
      <SectionWrapper background="canvas" noPadding className="border-b border-border">
        <div className="container-content max-w-content py-4">
          {steps.map((step, i) => (
            <MethodStep
              key={step.title}
              index={i + 1}
              title={step.title}
              description={step.description}
              detail={step.detail}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Por que o método importa */}
      <SectionWrapper background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="Por que o método importa"
            title="Ordem e critério determinam o resultado — não apenas volume de esforço"
          />
          <Prose size="base" maxWidth={false}>
            <p>
              A maioria dos projetos de digital não falha por falta de execução. Falha por falta de diagnóstico. Investe-se em tráfego antes de corrigir a conversão. Troca-se de canal antes de entender por que o atual não funciona. Contrata-se criatividade antes de resolver a clareza.
            </p>
            <p>
              Um método baseado em entender antes de propor e estruturar antes de executar não é mais lento — é mais preciso. E precisão, em projetos de digital, tem impacto direto no retorno do investimento.
            </p>
          </Prose>
        </div>
      </SectionWrapper>

      {/* 4. O que este método evita */}
      <SectionWrapper background="canvas">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="O que este método evita"
            title="Erros comuns que custam tempo, dinheiro e oportunidade"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {avoids.map((item) => (
              <li key={item} className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-ink-muted" aria-hidden="true" />
                <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="O diagnóstico é o primeiro passo"
        title="Antes de qualquer escopo, faz sentido entender onde está o problema."
        subtitle="Antes de qualquer proposta, uma conversa para entender o momento atual, o que já foi tentado e onde está a maior oportunidade."
        primaryCta={{ label: 'Iniciar uma conversa', href: '/contato' }}
        secondaryCta={{ label: 'Ver os serviços', href: '/servicos' }}
      />
    </>
  )
}
