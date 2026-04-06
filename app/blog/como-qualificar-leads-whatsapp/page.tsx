import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = createMetadata({
  title: 'Como qualificar leads no WhatsApp antes do contato humano',
  description:
    'Qualificação de leads no WhatsApp não é sobre filtrar pessoas — é sobre ter contexto antes da primeira conversa. Como estruturar o fluxo para que o atendente entre preparado e o lead certo chegue mais rápido.',
  path: '/blog/como-qualificar-leads-whatsapp',
})

export default function ArticlePage() {
  return (
    <>
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-6 max-w-[700px]">
          <div className="flex items-center gap-3">
            <Tag variant="accent">Operação Comercial</Tag>
            <span className="text-xs text-ink-muted">Abr 2026</span>
            <span className="text-xs text-ink-muted">·</span>
            <span className="text-xs text-ink-muted">7 min de leitura</span>
          </div>
          <h1 className="text-display font-serif text-ink-primary leading-tight">
            Como qualificar leads no WhatsApp{' '}
            <span className="text-ink-secondary">antes do contato humano</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[56ch]">
            Qualificação não é sobre filtrar pessoas ou criar barreiras de entrada. É sobre ter contexto antes da primeira conversa — para que o atendente entre preparado e o lead não precise repetir as mesmas informações três vezes.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            O cenário sem qualificação é bem conhecido: o WhatsApp abre com &ldquo;Olá, boa tarde&rdquo; ou &ldquo;Olá, gostaria de saber mais sobre os serviços&rdquo;. O atendente responde e começa uma conversa de troca de perguntas básicas — tipo de empresa, tamanho, o que está buscando, qual o orçamento — que poderia ter sido respondida automaticamente antes.
          </p>
          <p>
            Esse processo desperdiça tempo de ambos os lados, atrasa a chegada ao ponto relevante da conversa e com frequência resulta em leads que chegam ao atendente sem contexto suficiente para uma conversa produtiva.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O objetivo real da qualificação
            </h2>
            <p>
              Qualificação tem dois objetivos que precisam ser entendidos separadamente:
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">Identificar o perfil</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">O lead tem o perfil que a empresa atende? Porte, segmento, momento, problema — entender isso antes do contato humano evita que o time passe tempo com leads que nunca vão converter.</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">Coletar contexto</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">Mesmo que o lead tenha o perfil certo, o atendente precisa de contexto para conduzir uma conversa de valor. Qual é o problema atual? O que já foi tentado? Qual é a urgência? Com essas informações em mãos antes de responder, a primeira mensagem humana já é cirúrgica — não genérica.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              As perguntas certas no momento certo
            </h2>
            <p>
              A estrutura de qualificação no WhatsApp precisa equilibrar duas forças opostas: coletar informação suficiente para ser útil, sem criar atrito a ponto de o lead desistir antes de responder.
            </p>
            <p>
              A regra geral: três a cinco perguntas objetivas, feitas em sequência após a mensagem de boas-vindas. Não em um formulário pesado — em mensagens curtas que parecem uma conversa, não um interrogatório.
            </p>
            <div className="flex flex-col gap-4 p-6 border border-border bg-surface">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Exemplo de fluxo de qualificação</span>
              <div className="flex flex-col gap-3">
                {[
                  { step: '→', msg: 'Olá! Obrigado pelo contato. Para entender melhor como posso ajudar, me conta: qual é o principal desafio que está buscando resolver?' },
                  { step: '→', msg: 'Entendido. E qual é o tipo/porte do seu negócio? (Ex: e-commerce, B2B de serviços, varejo físico...)' },
                  { step: '→', msg: 'Você já tentou alguma abordagem para resolver isso? O que funcionou ou não funcionou?' },
                  { step: '→', msg: 'Perfeito. Estou analisando o contexto e retorno em breve com as próximas informações.' },
                ].map(({ step, msg }) => (
                  <div key={msg} className="flex gap-3">
                    <span className="text-accent font-semibold shrink-0 text-sm mt-0.5">{step}</span>
                    <p className="text-sm text-ink-secondary leading-relaxed italic">{msg}</p>
                  </div>
                ))}
              </div>
            </div>
            <p>
              Esse fluxo coleta: problema principal, perfil do negócio e histórico de tentativas anteriores. São três informações que transformam a primeira conversa humana de apresentação genérica em diagnóstico cirúrgico.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que fazer com leads fora do perfil
            </h2>
            <p>
              Todo fluxo de qualificação vai identificar leads que não têm o perfil da empresa. A forma como isso é tratado tem impacto direto na reputação e na experiência do lead — mesmo que ele nunca se torne cliente.
            </p>
            <p>
              A pior abordagem é simplesmente parar de responder ou dar uma resposta vaga que não ajuda. A melhor abordagem é ser claro, direto e, se possível, útil: &ldquo;O nosso trabalho foca em empresas com esse perfil específico, que não parece ser o seu momento atual. Posso indicar [alternativa relevante] que pode fazer mais sentido para você.&rdquo;
            </p>
            <p>
              Isso preserva a reputação, encerra a conversa de forma profissional e frequentemente resulta em indicações futuras — porque a pessoa saiu da interação com uma experiência positiva, mesmo sem comprar.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Quando escalar para humano — e com qual contexto
            </h2>
            <p>
              O fluxo automatizado tem um limite natural: quando o lead demonstra intenção clara de avançar ou tem uma dúvida que a automação não consegue resolver, o humano precisa entrar. O gatilho de escalação pode ser definido de diferentes formas:
            </p>
            <div className="flex flex-col gap-3">
              {[
                { trigger: 'Intenção explícita de compra', detail: 'O lead usa palavras como &ldquo;quero contratar&rdquo;, &ldquo;qual o valor&rdquo;, &ldquo;quando podemos começar&rdquo; — sinais de decisão que exigem resposta humana imediata.' },
                { trigger: 'Perfil de alto valor', detail: 'Baseado no porte ou contexto informado, o lead tem perfil que justifica atenção prioritária. A escalação acontece automaticamente com tag de prioridade.' },
                { trigger: 'Término do fluxo', detail: 'Após as perguntas de qualificação, se o lead completou o fluxo e tem perfil adequado, ele é escalado com todo o contexto coletado disponível para o atendente.' },
                { trigger: 'Solicitação direta', detail: 'O lead pede explicitamente falar com uma pessoa. Nesse caso, a escalação é imediata — sem tentar manter o lead no fluxo automatizado contra a vontade dele.' },
              ].map(({ trigger, detail }) => (
                <div key={trigger} className="flex flex-col gap-2 p-5 border border-border">
                  <span className="text-sm font-semibold text-ink-primary">{trigger}</span>
                  <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: detail }} />
                </div>
              ))}
            </div>
            <p>
              O ponto crítico da escalação é o handoff de contexto. O atendente humano precisa ver, antes de responder, tudo que o lead informou no fluxo. Isso evita que o lead repita informações — uma das maiores fontes de atrito e percepção de desorganização.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Qualificação não substitui posicionamento
            </h2>
            <p>
              Um detalhe importante: se muitos leads chegam fora do perfil, o problema raramente é do fluxo de qualificação — é do posicionamento. A qualificação filtra o que já chegou. O posicionamento determina o que chega.
            </p>
            <p>
              Se a mensagem nos canais de aquisição é genérica demais, ela vai atrair qualquer perfil — e o fluxo de qualificação vai precisar descartar uma proporção alta do que recebe. Isso é ineficiente. O ideal é que posicionamento e qualificação trabalhem juntos: o posicionamento atrai o perfil certo, a qualificação confirma e coleta contexto.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              O resultado de qualificar bem
            </h2>
            <p>
              Um fluxo de qualificação bem estruturado tem impacto em três métricas que raramente aparecem nos relatórios mas determinam a saúde comercial da operação: taxa de conversão de lead para cliente (porque o atendente entra mais preparado), tempo médio de ciclo de venda (porque o contexto elimina rodadas de perguntas básicas) e satisfação do lead com a experiência (porque a conversa parece personalizada desde o primeiro contato humano).
            </p>
            <p>
              Nenhum desses resultados exige uma plataforma cara ou um fluxo complexo. Exige clareza sobre o que precisa ser coletado, uma sequência de perguntas bem calibrada e um processo de handoff que garanta que o contexto chegue ao atendente antes da primeira resposta.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <CTASection
        eyebrow="Operação comercial por WhatsApp"
        title="Se seus leads chegam sem contexto e o time perde tempo qualificando manualmente, existe um processo melhor."
        subtitle="O Diagnóstico Estratégico avalia o fluxo de qualificação, o tempo de resposta e a consistência da operação — e entrega um plano de estruturação concreto."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver automação e operação comercial', href: '/servicos' }}
      />
    </>
  )
}
