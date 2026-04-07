import type { Metadata } from 'next'
import BlogArticleHeader from '@/components/blog/BlogArticleHeader'
import BlogArticleSchema from '@/components/blog/BlogArticleSchema'
import RelatedArticles from '@/components/blog/RelatedArticles'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import { getBlogPost } from '@/lib/blog'
import { createArticleMetadata } from '@/lib/metadata'

const post = getBlogPost('como-estruturar-operacao-whatsapp')

export const metadata: Metadata = createArticleMetadata({
  title: post.title,
  description: post.description,
  path: post.path,
  category: post.category,
  keywords: post.keywords,
})

export default function ArticlePage() {
  return (
    <>
      <BlogArticleSchema post={post} />
      <BlogArticleHeader
        post={post}
        title={
          <>
            Como estruturar a operação comercial no WhatsApp{' '}
            <span className="text-ink-secondary">— sem perder oportunidades</span>
          </>
        }
        description="O WhatsApp é onde a maioria das conversas comerciais acontece no Brasil. Mas sem estrutura, ele vira uma caixa de entrada sobrecarregada que perde leads por demora, esgota o time com triagem manual e cria inconsistência no atendimento."
      />

      {/* Body */}
      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            O cenário mais comum é esse: o WhatsApp da empresa recebe dezenas de mensagens por dia. Parte delas são leads reais. Parte são dúvidas que poderiam ser respondidas automaticamente. Parte são contatos que não têm o perfil da empresa. O time não sabe distinguir em tempo real, então responde tudo da mesma forma — lentamente, inconsistentemente, sem processo.
          </p>
          <p>
            O resultado é previsível: tempo de resposta alto, leads qualificados perdidos para concorrentes mais rápidos, equipe esgotada com triagem que não gera valor. A solução não é contratar mais atendentes — é estruturar o processo antes de escalar a operação.
          </p>

          {/* Problema */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Os três problemas mais comuns sem estrutura
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">Triagem manual sobrecarrega o time</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">Sem qualificação automática, cada mensagem exige atenção humana para avaliar se é um lead real, uma dúvida simples ou um contato fora do perfil. Isso consome tempo de quem deveria estar focado em vendas.</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">Velocidade de resposta baixa perde oportunidades</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">Estudos consistentemente mostram que o tempo de resposta é um dos maiores fatores de conversão comercial. Um lead que não recebe resposta em poucos minutos tem probabilidade muito menor de converter — independente da qualidade da proposta.</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 border border-border">
                <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">Falta de processo cria inconsistência</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">Quando o atendimento depende da disponibilidade e do humor de cada atendente, a qualidade varia. Leads semelhantes recebem tratamentos diferentes. A experiência do cliente é imprevisível — e imprevisível nunca é percebido como premium.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estrutura */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Como estruturar: da triagem ao fechamento
            </h2>
            <p>
              Estruturar a operação no WhatsApp não significa substituir o atendimento humano por robôs. Significa usar automação inteligente para os momentos onde ela agrega velocidade e consistência, e reservar o contato humano para os momentos onde ele é insubstituível.
            </p>
          </div>

          {/* Etapa 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-sans font-semibold text-ink-primary uppercase tracking-wide">
              Etapa 01 — Qualificação antes do contato humano
            </h3>
            <p>
              O primeiro passo é entender quem está do outro lado antes de qualquer interação humana. Uma mensagem de boas-vindas estruturada pode coletar informações básicas — tipo de negócio, tamanho, problema que está buscando resolver — e direcionar o contato para o fluxo adequado.
            </p>
            <p>
              Isso tem dois efeitos: reduz o tempo de triagem manual e melhora a qualidade da primeira conversa humana, porque o atendente já sabe o contexto antes de iniciar.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                <strong className="text-ink-primary not-italic">Na prática:</strong> Um fluxo simples de 3-4 perguntas no início da conversa — tipo de empresa, número de funcionários, principal desafio atual — já é suficiente para separar leads qualificados de contatos fora do perfil, e para fazer a primeira triagem por tipo de necessidade.
              </p>
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-sans font-semibold text-ink-primary uppercase tracking-wide">
              Etapa 02 — Roteamento por intenção
            </h3>
            <p>
              Nem todo contato tem a mesma necessidade. Leads em fase de pesquisa precisam de conteúdo e educação. Leads prontos para comprar precisam de velocidade e acesso ao vendedor certo. Clientes com dúvida operacional precisam de suporte. Misturar esses fluxos em um único atendimento cria confusão e ineficiência.
            </p>
            <p>
              Com roteamento por intenção, cada tipo de contato segue um caminho específico: o lead de pesquisa recebe material relevante e um acompanhamento programado; o lead quente é escalado imediatamente para um atendente; a dúvida operacional vai para a base de conhecimento ou para o suporte.
            </p>
          </div>

          {/* Etapa 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-sans font-semibold text-ink-primary uppercase tracking-wide">
              Etapa 03 — SLAs de tempo de resposta
            </h3>
            <p>
              Velocidade de resposta não deveria depender da disponibilidade individual do atendente. SLAs (Service Level Agreements) internos definem o tempo máximo aceitável para cada tipo de contato — e o fluxo automatizado garante que o lead receba uma resposta imediata enquanto o humano ainda não está disponível.
            </p>
            <p>
              Uma resposta automática que reconhece o contato, informa o tempo esperado de retorno e pede informações adicionais é infinitamente melhor do que silêncio. Reduz a ansiedade do lead e compra tempo para o atendente sem prejudicar a experiência.
            </p>
          </div>

          {/* Etapa 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-sans font-semibold text-ink-primary uppercase tracking-wide">
              Etapa 04 — Escalação para humano no momento certo
            </h3>
            <p>
              A automação tem limites. Quando o lead indica intenção de compra, quando tem uma dúvida complexa ou quando demonstra insatisfação, o contato humano precisa entrar — rapidamente e com contexto.
            </p>
            <p>
              Um bom fluxo define gatilhos claros para escalação: palavras-chave que indicam urgência, perguntas sobre preço, reclamações explícitas, ou simplesmente o término do fluxo automatizado sem resolução. O atendente que entra deve ter acesso ao histórico da conversa para não fazer o lead repetir informações — isso por si só já é um diferencial na experiência.
            </p>
          </div>

          {/* Ferramentas */}
          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Sobre ferramentas: não comece por elas
            </h2>
            <p>
              A pergunta mais comum quando o assunto é automação de WhatsApp é &ldquo;qual ferramenta usar&rdquo;. É a pergunta errada para começar. A ferramenta é consequência do processo — não o contrário.
            </p>
            <p>
              Empresas que compram a ferramenta primeiro e tentam encaixar o processo depois geralmente acabam com uma automação que não reflete como o negócio realmente funciona. O resultado é um fluxo que confunde o lead em vez de qualificá-lo.
            </p>
            <p>
              O ponto de partida correto é documentar o processo manual que existe hoje, identificar onde estão as maiores ineficiências (geralmente triagem e tempo de resposta), projetar o fluxo ideal e só então escolher a ferramenta que melhor implementa esse fluxo. WhatsApp Business, WABA API, plataformas de conversação como Blip ou Zendesk — a escolha depende do volume, do grau de automação necessário e do orçamento disponível.
            </p>
          </div>

          {/* Conclusão */}
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              Estrutura antes de escala
            </h2>
            <p>
              O WhatsApp não vai a lugar nenhum. No Brasil, é o canal de comunicação mais usado — e isso inclui conversas comerciais. A questão não é se usar, mas como usar de forma que gere resultado consistente sem sobrecarregar o time.
            </p>
            <p>
              A boa notícia é que uma operação bem estruturada não exige investimento massivo. Exige diagnóstico, clareza de processo e automação cirúrgica nos pontos certos. Na maioria dos casos, um fluxo bem desenhado de qualificação e roteamento já resolve os problemas mais críticos.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <RelatedArticles currentSlug={post.slug} />

      <CTASection
        eyebrow="Operação comercial por WhatsApp"
        title="Se a sua operação comercial no WhatsApp está acumulando atrito, vale mapear onde está o maior problema."
        subtitle="O Diagnóstico Estratégico avalia processo, velocidade de resposta, qualificação de leads e consistência de atendimento — e entrega um plano de ação concreto."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver automação e operação comercial', href: '/servicos' }}
      />
    </>
  )
}
