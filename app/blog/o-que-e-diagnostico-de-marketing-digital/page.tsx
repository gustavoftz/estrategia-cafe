import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = createMetadata({
  title: 'O que é diagnóstico de marketing digital — e quando fazer',
  description:
    'Diagnóstico não é auditoria e não é proposta comercial disfarçada. É a fase que determina se o que vem depois vai funcionar. O que inclui, quando faz sentido e o que esperar do processo.',
  path: '/blog/o-que-e-diagnostico-de-marketing-digital',
})

export default function ArticlePage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-6 max-w-[700px]">
          <div className="flex items-center gap-3">
            <Tag variant="accent">Estratégia</Tag>
            <span className="text-xs text-ink-muted">Abr 2026</span>
            <span className="text-xs text-ink-muted">·</span>
            <span className="text-xs text-ink-muted">6 min de leitura</span>
          </div>
          <h1 className="text-display font-serif text-ink-primary leading-tight">
            O que é diagnóstico de marketing digital{' '}
            <span className="text-ink-secondary">— e quando sua empresa precisa de um</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[56ch]">
            Diagnóstico não é auditoria de métricas e não é reunião de apresentação de serviços. É o processo de entender o que está falhando no sistema comercial antes de decidir o que fazer — e é a fase que mais impacta a qualidade de tudo que vem depois.
          </p>
        </div>
      </SectionWrapper>

      {/* Body */}
      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            A maioria dos projetos de digital começa pela solução. A empresa sente que precisa de mais tráfego e contrata mídia. Sente que o site está desatualizado e contrata redesign. Sente que precisa de mais leads e contrata geração de demanda. A solução é escolhida antes do problema ser entendido.
          </p>
          <p>
            O resultado quase inevitável é que a solução não resolve o problema — porque o problema nunca foi adequadamente diagnosticado. Meses depois, a empresa testa outro canal, contrata outra agência ou tenta uma abordagem diferente, sem entender por que as anteriores não funcionaram.
          </p>
          <p>
            Um diagnóstico bem feito quebra esse ciclo. Ele não começa pela solução — começa pelo problema.
          </p>

          {/* O que é */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que é — e o que não é — um diagnóstico de marketing digital
            </h2>
            <p>
              Um diagnóstico de marketing digital é uma análise estruturada do sistema comercial de uma empresa: posicionamento, site, canais de aquisição, taxa de conversão e operação comercial. O objetivo é identificar onde está a maior fricção, o que está funcionando e qual intervenção teria maior impacto dado o contexto atual.
            </p>
            <p>
              Não é uma auditoria de métricas. Métricas são o ponto de partida, não o diagnóstico em si. Uma empresa com CTR alto pode ter problema de conversão. Uma empresa com tráfego crescente pode ter problema de qualificação de leads. Os números descrevem sintomas — o diagnóstico busca causas.
            </p>
            <p>
              Não é uma proposta comercial disfarçada. Infelizmente, muitas &ldquo;consultorias gratuitas&rdquo; na prática são reuniões de venda estruturadas como diagnóstico. Um diagnóstico real produz uma análise documentada que tem valor independente de qualquer decisão de contratação. Se o diagnóstico só faz sentido se você contratar quem o fez, não é diagnóstico — é pitch.
            </p>
          </div>

          {/* Quando faz sentido */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Quando um diagnóstico faz sentido
            </h2>
            <p>
              Há situações onde o diagnóstico é especialmente valioso — não como pré-requisito burocrático, mas como investimento que muda a qualidade de tudo que vem depois.
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  title: 'Tráfego crescendo, conversão estagnada',
                  text: 'Quando os acessos aumentam mas o número de leads ou vendas não acompanha, o problema raramente é de canal ou volume. É de jornada, mensagem ou processo de conversão. Diagnóstico antes de mais investimento em aquisição.',
                },
                {
                  title: 'Trocou de agência mas o resultado não mudou',
                  text: 'Quando a mudança de fornecedor não muda o resultado, o problema provavelmente não está na execução — está na estratégia ou na estrutura. Uma análise externa e independente consegue identificar o que está sendo mantido de uma agência para outra.',
                },
                {
                  title: 'Equipe interna em desacordo sobre prioridades',
                  text: 'Quando o time de marketing prioriza SEO, o comercial quer mais leads pagos e a diretoria quer redesign do site, o problema é falta de diagnóstico compartilhado. Um diagnóstico externo cria um mapa de prioridades baseado em evidência, não em opinião.',
                },
                {
                  title: 'Investimento aumentando, ROI diminuindo',
                  text: 'Quando gastar mais não está gerando resultado proporcional, há um problema estrutural a ser diagnosticado — seja na mensagem, na segmentação, na jornada ou na operação.',
                },
                {
                  title: 'Antes de escalar investimento',
                  text: 'Escalar uma estrutura que funciona é crescimento. Escalar uma estrutura com problemas é amplificar esses problemas. Antes de dobrar o orçamento de mídia ou contratar mais vendedores, vale entender se a estrutura atual comporta escala.',
                },
              ].map(({ title, text }) => (
                <div key={title} className="flex flex-col gap-2 p-5 border border-border">
                  <span className="text-sm font-semibold text-ink-primary">{title}</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* O que inclui */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que um bom diagnóstico inclui
            </h2>
            <p>
              A profundidade de cada frente depende do contexto — nem sempre todas precisam ser avaliadas com o mesmo nível de detalhe. Mas em geral, um diagnóstico completo do sistema comercial digital cobre:
            </p>
            <div className="flex flex-col divide-y divide-border">
              {[
                {
                  label: 'Posicionamento e clareza de mensagem',
                  text: 'A proposta de valor está clara? A mensagem é diferenciada ou genérica? O que a empresa diz está alinhado com o que o público precisa ouvir para tomar uma decisão?',
                },
                {
                  label: 'Site como ativo de venda',
                  text: 'O site persuade ou apenas informa? A jornada do visitante é clara? Existe coerência entre o que o tráfego espera encontrar e o que encontra de fato?',
                },
                {
                  label: 'Estrutura de aquisição',
                  text: 'Os canais estão alinhados com o perfil de cliente ideal? O tráfego que chega tem potencial real de conversão? Os investimentos estão concentrados onde têm maior impacto?',
                },
                {
                  label: 'Conversão e qualificação de leads',
                  text: 'A taxa de conversão é compatível com o volume de tráfego? Os leads chegam qualificados ou exigem muito esforço de triagem antes de entrar no processo comercial?',
                },
                {
                  label: 'Operação comercial',
                  text: 'A velocidade de resposta, consistência do atendimento e processo de follow-up são adequados? Existem oportunidades sendo perdidas por falha de processo, não de produto?',
                },
              ].map(({ label, text }) => (
                <div key={label} className="flex flex-col sm:flex-row gap-3 sm:gap-12 py-6">
                  <span className="text-sm font-semibold text-ink-primary shrink-0 sm:w-48">{label}</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* O que esperar */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que esperar como resultado
            </h2>
            <p>
              Um diagnóstico bem conduzido entrega três coisas: uma análise clara do estado atual, identificação das principais fricções e uma recomendação de prioridades com justificativa.
            </p>
            <p>
              O que não deve ser esperado é uma lista interminável de melhorias e oportunidades — isso não é diagnóstico, é relatório de auditoria. Um diagnóstico útil é opinionado: aponta o que é mais importante, justifica por quê e sugere por onde começar dado o contexto específico da empresa.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                Um bom diagnóstico não diz &ldquo;você deveria melhorar tudo&rdquo;. Diz &ldquo;o maior problema é este, a prioridade é aquela, e o resultado esperado ao corrigir é esse&rdquo;. Clareza e especificidade são o critério de qualidade.
              </p>
            </div>
          </div>

          {/* Conclusão */}
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              Diagnóstico é custo ou investimento?
            </h2>
            <p>
              Depende da qualidade do que vem depois. Um diagnóstico que resulta em execução mais precisa — menos tentativa e erro, menos desperdício de orçamento em intervenções erradas — se paga rapidamente. Um diagnóstico que resulta em mais do mesmo, executado com mais certeza mas na direção errada, é custo.
            </p>
            <p>
              A variável que determina isso não é o diagnóstico em si, mas a disposição de agir com base no que ele revela — mesmo que isso signifique abandonar o caminho que a empresa já estava seguindo.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <CTASection
        eyebrow="O diagnóstico como ponto de partida"
        title="Antes de qualquer proposta, antes de qualquer execução — entenda o problema."
        subtitle="O Diagnóstico Estratégico da estrategia.cafe é uma análise de 90 minutos com documento de resultado. Sem pitch, sem proposta genérica."
        primaryCta={{ label: 'Conhecer o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver o método', href: '/metodo' }}
      />
    </>
  )
}
