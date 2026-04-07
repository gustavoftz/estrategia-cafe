import type { Metadata } from 'next'
import BlogArticleHeader from '@/components/blog/BlogArticleHeader'
import BlogArticleSchema from '@/components/blog/BlogArticleSchema'
import RelatedArticles from '@/components/blog/RelatedArticles'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import { getBlogPost } from '@/lib/blog'
import { createArticleMetadata } from '@/lib/metadata'

const post = getBlogPost('sistema-comercial-digital')

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
            Sistema comercial digital:{' '}
            <span className="text-ink-secondary">o que é e por que pensar em sistema</span>
          </>
        }
        description="Tráfego, site, conversão, atendimento — a maioria das empresas trata cada um como canal separado, com fornecedor separado e métrica separada. O problema é que eles não funcionam separados."
      />

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            Quando uma empresa sente que o digital não está funcionando, a resposta habitual é olhar para cada parte isoladamente. O tráfego está baixo? Contrata mídia. O site está feio? Faz redesign. Os leads chegam mas não convertem? Treina o time de vendas. O WhatsApp está sobrecarregado? Compra uma ferramenta de automação.
          </p>
          <p>
            Cada intervenção tem lógica própria. O problema é que o resultado raramente aparece — porque o problema raramente está em uma parte isolada. Está na relação entre as partes.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que é um sistema comercial digital
            </h2>
            <p>
              Um sistema comercial digital é o conjunto de peças que transforma desconhecido em cliente: posicionamento, site, aquisição, conversão e operação comercial. Não são cinco departamentos ou cinco fornecedores — são cinco funções interdependentes que, quando alinhadas, criam um fluxo contínuo de geração e fechamento de oportunidades.
            </p>
            <p>
              A palavra-chave é interdependência. Cada função produz um resultado que é insumo da próxima. O posicionamento define quem você quer atrair — e isso determina o que o site precisa comunicar. O site converte ou não o tráfego — e isso determina o custo real da aquisição. A qualidade do lead que chega determina a eficiência da operação comercial.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                Quando as partes estão desalinhadas, cada uma opera abaixo do potencial — mesmo que cada uma, avaliada isoladamente, pareça razoável. É por isso que muitas empresas trocam de agência de mídia sem mudar o resultado: o problema não estava na mídia.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              As cinco funções e como elas se conectam
            </h2>

            <div className="flex flex-col gap-0 divide-y divide-border">
              {[
                {
                  num: '01',
                  title: 'Posicionamento',
                  text: 'Define quem é o público, qual problema a empresa resolve e por que deveria ser escolhida em vez da alternativa. É a função mais estrutural do sistema — e a mais frequentemente negligenciada. Quando está difuso, todos os outros elementos operam com atrito: o site não sabe o que dizer, a mídia não sabe quem segmentar, o comercial não sabe como argumentar.',
                },
                {
                  num: '02',
                  title: 'Site',
                  text: 'É o ponto de contato central onde tráfego se transforma em lead ou cliente. Não é apenas presença digital — é infraestrutura de conversão. Um site que não persuade drena o investimento em aquisição. Um site que converte bem multiplica o retorno de qualquer canal que o alimenta.',
                },
                {
                  num: '03',
                  title: 'Aquisição',
                  text: 'SEO, mídia paga, conteúdo, parceiros — os canais que trazem público novo. A eficiência da aquisição depende diretamente de quanto o posicionamento é claro (define quem atrair) e de quanto o site converte (define o retorno do tráfego gerado). Investir em aquisição com posicionamento difuso ou site que não converte é encher um balde furado.',
                },
                {
                  num: '04',
                  title: 'Conversão',
                  text: 'O processo de transformar visitante em lead e lead em oportunidade comercial real. Inclui a jornada no site, o CTA, o formulário, a qualificação inicial — tudo que acontece antes do contato humano. Uma boa taxa de conversão reduz o custo de aquisição e aumenta o retorno de qualquer canal.',
                },
                {
                  num: '05',
                  title: 'Operação comercial',
                  text: 'O que acontece depois que o lead chega — velocidade de resposta, qualidade do atendimento, processo de follow-up, consistência. No Brasil, isso frequentemente passa pelo WhatsApp. Uma operação mal estruturada pode desperdiçar leads qualificados que custaram caro para ser gerados.',
                },
              ].map(({ num, title, text }) => (
                <div key={num} className="flex gap-6 py-7">
                  <span className="font-serif text-2xl text-border-strong leading-none shrink-0 mt-0.5 w-8">{num}</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-ink-primary">{title}</span>
                    <p className="text-sm text-ink-secondary leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Por que a maioria das empresas não pensa em sistema
            </h2>
            <p>
              A resposta mais simples é que o mercado de serviços de marketing foi estruturado por especialidade, não por sistema. Existem agências de SEO, agências de mídia paga, agências de design, consultores de CRO, especialistas em WhatsApp. Cada um otimiza sua parte — sem responsabilidade pelo resultado do conjunto.
            </p>
            <p>
              O cliente, nesse modelo, vira o integrador involuntário de vários fornecedores com incentivos diferentes e métricas diferentes. A agência de mídia mede CPL. O designer mede aprovação visual. O consultor de CRO mede taxa de conversão de uma página específica. Ninguém mede o sistema como um todo.
            </p>
            <p>
              O resultado é o que acontece em qualquer sistema sem responsável pelo todo: as partes funcionam razoavelmente, mas a interseção entre elas acumula atrito. O lead qualificado que a mídia gerou chega em um site que não converte. O lead que o site capturou não recebe resposta rápida o suficiente. O atendimento comercial não tem o contexto do que o lead viu antes de chegar.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O diagnóstico como ponto de partida sistêmico
            </h2>
            <p>
              Quando o problema está no sistema — não em uma parte isolada — a solução não é otimizar uma parte. É diagnosticar onde está o maior ponto de atrito e intervir nele primeiro.
            </p>
            <p>
              Em alguns casos, o maior problema é o posicionamento: a mensagem não é clara, o público alvo não está bem definido, a proposta de valor não se diferencia. Qualquer investimento em aquisição sobre esse problema vai gerar tráfego desalinhado — independente de quanto se gaste.
            </p>
            <p>
              Em outros casos, o posicionamento está razoável mas o site não converte: a jornada do visitante não sustenta a decisão de compra, os CTAs são fracos, a prova social está ausente. Nesse caso, mais tráfego não resolve — só amplifica a perda.
            </p>
            <p>
              Em outros ainda, o site converte mas a operação comercial perde as oportunidades que chegam: resposta lenta, falta de qualificação, follow-up inconsistente. Nesse caso, investir em mais aquisição é desperdiçar o que já está chegando.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                O diagnóstico sistêmico identifica qual dessas situações — ou qual combinação delas — está em jogo. Sem esse mapa, a tendência é sempre intervir na parte mais visível, não na parte mais impactante.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              A implicação prática: integração antes de otimização
            </h2>
            <p>
              Pensar em sistema não significa fazer tudo ao mesmo tempo. Significa entender as dependências antes de priorizar. Significa saber que otimizar conversão de um site com posicionamento difuso tem impacto limitado. Que investir em SEO antes de corrigir o site que vai receber o tráfego é queimar autoridade editorial em uma estrutura que não converte. Que automatizar a operação no WhatsApp antes de qualificar o processo manual é escalar o caos.
            </p>
            <p>
              A integração não é simultânea — é sequencial com consciência das dependências. Você corrige o que bloqueia o próximo passo. Você estrutura antes de escalar. Você entende o sistema antes de otimizar as partes.
            </p>
            <p>
              Empresas que operam com essa lógica consistentemente obtêm resultados melhores — não porque têm mais orçamento ou mais talento, mas porque investem no lugar certo, na ordem certa.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <RelatedArticles currentSlug={post.slug} />

      <CTASection
        eyebrow="Diagnóstico sistêmico"
        title="Antes de otimizar partes, vale entender como o sistema todo está funcionando."
        subtitle="O Diagnóstico Estratégico mapeia posicionamento, site, aquisição, conversão e operação — e identifica onde está o maior ponto de atrito no seu sistema comercial."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Entender as frentes de trabalho', href: '/servicos' }}
      />
    </>
  )
}
