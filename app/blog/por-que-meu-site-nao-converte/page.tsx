import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = createMetadata({
  title: 'Por que meu site não converte — e não é problema de tráfego',
  description:
    'A causa mais comum de conversão baixa não é falta de tráfego. É falta de clareza, estrutura e persuasão. Os cinco problemas mais frequentes e como identificá-los.',
  path: '/blog/por-que-meu-site-nao-converte',
})

export default function ArticlePage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-6 max-w-[700px]">
          <div className="flex items-center gap-3">
            <Tag variant="accent">Conversão</Tag>
            <span className="text-xs text-ink-muted">Abr 2026</span>
            <span className="text-xs text-ink-muted">·</span>
            <span className="text-xs text-ink-muted">8 min de leitura</span>
          </div>
          <h1 className="text-display font-serif text-ink-primary leading-tight">
            Por que meu site não converte{' '}
            <span className="text-ink-secondary">— e não é problema de tráfego</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[56ch]">
            O diagnóstico mais comum quando a conversão é baixa é &ldquo;preciso de mais tráfego&rdquo;. A solução mais comum é contratar mais mídia. O resultado mais comum é gastar mais para converter a mesma porcentagem — ou menos.
          </p>
        </div>
      </SectionWrapper>

      {/* Body */}
      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            Mais tráfego sobre um site que não converte só amplifica o problema. Antes de escalar investimento em aquisição, vale entender por que o tráfego que já existe não está convertendo.
          </p>
          <p>
            Esses são os cinco problemas mais comuns — e como identificar se algum deles está acontecendo com você.
          </p>

          {/* Problema 1 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              1. A proposta de valor não é clara em 3 segundos
            </h2>
            <p>
              Quem chega ao seu site pela primeira vez tem uma pergunta imediata: &ldquo;Isso é para mim?&rdquo;. Se essa pergunta não for respondida nos primeiros três segundos, o visitante vai embora — não porque não tem interesse, mas porque exige esforço demais entender o que você oferece.
            </p>
            <p>
              O problema quase sempre está no título da homepage. &ldquo;Agência de marketing digital full service&rdquo; ou &ldquo;Soluções digitais completas para o seu negócio&rdquo; descrevem o que você é, não o problema que você resolve. O visitante não está procurando uma agência full service — está procurando alguém que resolva um problema específico que ele tem.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                <strong className="text-ink-primary not-italic">Sinal de alerta:</strong> Peça para alguém que não conhece seu negócio abrir o site e explicar, em uma frase, o que você faz. Se a resposta for vaga ou errada, a proposta de valor não está clara.
              </p>
            </div>
            <p>
              Propostas de valor eficientes combinam três elementos: quem é o público, qual problema você resolve e qual é o resultado esperado. &ldquo;Ajudamos empresas B2B a gerar leads qualificados pelo SEO — sem depender de tráfego pago&rdquo; é mais específico e mais persuasivo do que qualquer variação de &ldquo;soluções completas&rdquo;.
            </p>
          </div>

          {/* Problema 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              2. A hierarquia de informação está errada
            </h2>
            <p>
              Quando tudo parece igualmente importante, nada é importante. Sites com múltiplos banners, CTAs em toda seção, menus extensos e conteúdo denso criam paralisia de decisão. O visitante não sabe por onde começar e, na dúvida, não começa.
            </p>
            <p>
              Hierarquia é sobre ordem e peso visual. Qual é a ação mais importante que você quer que o visitante tome? Essa ação precisa ser visualmente dominante, contextualmente clara e fácil de executar. Tudo o mais deve existir para apoiar essa ação — não competir com ela.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                <strong className="text-ink-primary not-italic">Sinal de alerta:</strong> Você tem mais de três CTAs diferentes visíveis antes da dobra. Ou seu CTA principal diz &ldquo;Saiba mais&rdquo; sem especificar o que exatamente o visitante vai encontrar.
              </p>
            </div>
            <p>
              CTAs específicos convertem mais do que CTAs genéricos. &ldquo;Solicitar diagnóstico gratuito&rdquo; é mais eficiente do que &ldquo;Entrar em contato&rdquo;. &ldquo;Ver preços e planos&rdquo; converte mais do que &ldquo;Saiba mais&rdquo;. A especificidade reduz a incerteza — e incerteza é atrito.
            </p>
          </div>

          {/* Problema 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              3. Faltam sinais de confiança
            </h2>
            <p>
              Decisões de compra online são atos de fé. O visitante não te conhece, não sabe se você entrega o que promete e não tem como verificar isso antes de tomar uma ação. Sinais de confiança — cases, depoimentos, logos de clientes, garantias — existem para reduzir esse atrito.
            </p>
            <p>
              A ausência de prova social não é neutra. Em muitos mercados, a falta de sinais de confiança é lida como evidência negativa. O visitante não pensa &ldquo;eles devem ser bons mas não mostram&rdquo;. Ele pensa &ldquo;se fossem bons, mostrariam&rdquo;.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                <strong className="text-ink-primary not-italic">Sinal de alerta:</strong> Seu site não tem nenhum case de resultado, nenhum depoimento de cliente, nenhuma menção de quem já trabalhou com você. Ou tem depoimentos tão genéricos que poderiam ter sido escritos por qualquer pessoa.
              </p>
            </div>
            <p>
              Um case bem documentado — com problema, contexto, solução e resultado mensurável — é mais persuasivo do que dez depoimentos vagos. O nível de detalhe sinaliza credibilidade e permite que o visitante se identifique com a situação descrita.
            </p>
          </div>

          {/* Problema 4 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              4. O próximo passo exige decisão demais
            </h2>
            <p>
              O atrito de conversão não é só de design — é de decisão. Se o próximo passo exige muito comprometimento, muitos visitantes desistem antes de clicar. Não porque não querem, mas porque a decisão parece grande demais para o momento em que estão.
            </p>
            <p>
              &ldquo;Comprar agora&rdquo; é um salto enorme para quem ainda está avaliando. &ldquo;Falar com consultor&rdquo; pode ser intimidador se o visitante não sabe o que vai acontecer depois da conversa. &ldquo;Solicitar proposta&rdquo; gera ansiedade se ele não sabe o que vai receber nem a que preço.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                <strong className="text-ink-primary not-italic">Sinal de alerta:</strong> O único CTA do seu site vai direto para compra ou para reunião de vendas, sem nenhum passo intermediário para quem ainda está no estágio de avaliação.
              </p>
            </div>
            <p>
              Uma escada de comprometimento resolve isso. Ofereça CTAs de baixo atrito — diagnóstico, demonstração, conteúdo, ferramenta gratuita — como alternativa ao CTA principal, para capturar visitantes que ainda não estão prontos para decidir mas têm interesse genuíno.
            </p>
          </div>

          {/* Problema 5 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              5. A experiência mobile está incompleta
            </h2>
            <p>
              Mais de 60% das visitas a sites brasileiros — incluindo B2B — vêm de dispositivos móveis. Sites que foram projetados para desktop e depois &ldquo;adaptados&rdquo; para mobile criam fricção invisível: textos pequenos, botões difíceis de clicar, formulários longos com teclado virtual ocupando metade da tela, carregamento lento em 4G.
            </p>
            <p>
              O problema é que essa fricção raramente aparece em testes internos — quem testa o site geralmente usa desktop. E raramente aparece em reclamações — os usuários simplesmente abandonam.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                <strong className="text-ink-primary not-italic">Sinal de alerta:</strong> A taxa de conversão em mobile é consistentemente abaixo da metade da taxa em desktop. Ou a taxa de rejeição em mobile é significativamente maior.
              </p>
            </div>
            <p>
              A correção não é só técnica. Projetar para mobile primeiro muda hierarquia, tamanho de elementos interativos, comprimento de formulários e lógica de CTAs. É uma decisão de design e de priorização — não apenas de responsividade.
            </p>
          </div>

          {/* Conclusão */}
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              Antes de investir em mais tráfego
            </h2>
            <p>
              Se você identificou um ou mais desses problemas, o próximo passo não é mais mídia — é diagnóstico. Entender qual é o maior bloqueio na jornada do visitante, corrigir esse bloqueio e medir o impacto antes de escalar aquisição.
            </p>
            <p>
              A ordem importa: corrigir conversão antes de escalar tráfego. Corrigir mensagem antes de testar mais canais. Estruturar antes de acelerar. Mais investimento sobre uma estrutura que não funciona só amplifica o problema existente.
            </p>
            <p>
              Uma auditoria de conversão começa por entender onde o visitante abandona a jornada e por quê — não por redesign completo do site. Muitas vezes, mudanças pontuais e cirúrgicas têm impacto maior do que reformas completas.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <CTASection
        eyebrow="Próximo passo"
        title="Se o seu site não está convertendo como deveria, vale entender por quê antes de investir mais."
        subtitle="O Diagnóstico Estratégico avalia site, mensagem, jornada e conversão — e entrega uma análise documentada com prioridades claras."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver os serviços de conversão', href: '/servicos' }}
      />
    </>
  )
}
