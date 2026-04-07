import type { Metadata } from 'next'
import BlogArticleHeader from '@/components/blog/BlogArticleHeader'
import BlogArticleSchema from '@/components/blog/BlogArticleSchema'
import RelatedArticles from '@/components/blog/RelatedArticles'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import { getBlogPost } from '@/lib/blog'
import { createArticleMetadata } from '@/lib/metadata'

const post = getBlogPost('seo-organico-para-empresas-b2b')

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
            SEO orgânico para empresas B2B:{' '}
            <span className="text-ink-secondary">o que muda em relação ao B2C</span>
          </>
        }
        description="SEO para B2B não é a mesma coisa que SEO para B2C com outro produto. O ciclo de decisão é mais longo, as pessoas que pesquisam não são necessariamente quem vai comprar e o conteúdo precisa trabalhar de forma completamente diferente."
      />

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            A maioria dos guias de SEO foi escrita com e-commerce ou B2C em mente. Volume de busca alto, jornada de compra curta, decisão individual. No B2B, a realidade é diferente: volumes de busca menores, múltiplos decisores, ciclo de venda que pode durar semanas ou meses e um papel do conteúdo que vai muito além de gerar tráfego.
          </p>
          <p>
            Aplicar as mesmas métricas e estratégias do B2C em um contexto B2B produz frustração. Artigos que geram muito tráfego mas nenhum lead qualificado. Rankings altos em palavras que nunca convertem. Relatórios bonitos sem impacto comercial.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              As diferenças fundamentais
            </h2>

            <div className="flex flex-col divide-y divide-border">
              {[
                {
                  dimension: 'Volume de busca',
                  b2c: 'Alto. Termos como &ldquo;tênis masculino&rdquo; ou &ldquo;notebook barato&rdquo; têm milhares de buscas mensais.',
                  b2b: 'Baixo a médio. &ldquo;Software de gestão de projetos para construtoras&rdquo; pode ter 50 buscas mensais — e ser extremamente valioso.',
                },
                {
                  dimension: 'Intenção de busca',
                  b2c: 'Frequentemente transacional: a pessoa quer comprar ou está próxima da decisão.',
                  b2b: 'Frequentemente informacional ou de pesquisa: a pessoa está mapeando o problema, comparando abordagens ou construindo argumento interno para justificar a compra.',
                },
                {
                  dimension: 'Quem pesquisa',
                  b2c: 'Geralmente quem vai usar e comprar é a mesma pessoa.',
                  b2b: 'Quem pesquisa pode ser um analista que vai apresentar para um gerente que vai aprovar com um diretor financeiro. O conteúdo precisa servir múltiplos perfis.',
                },
                {
                  dimension: 'Ciclo de conversão',
                  b2c: 'Horas a dias. A sessão que gerou o clique frequentemente resulta em compra ou abandono definitivo.',
                  b2b: 'Semanas a meses. O lead pode consumir conteúdo por 3 meses antes de entrar em contato. O SEO precisa estar presente em múltiplos pontos dessa jornada.',
                },
                {
                  dimension: 'Métrica de sucesso',
                  b2c: 'Tráfego, taxa de conversão, ROAS.',
                  b2b: 'Leads qualificados gerados, custo por lead qualificado, influência do canal orgânico no pipeline de vendas.',
                },
              ].map(({ dimension, b2c, b2b }) => (
                <div key={dimension} className="py-6">
                  <span className="text-sm font-semibold text-ink-primary block mb-3">{dimension}</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1 p-4 bg-surface">
                      <span className="text-xs font-semibold text-ink-muted uppercase tracking-wide">B2C</span>
                      <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: b2c }} />
                    </div>
                    <div className="flex flex-col gap-1 p-4 border border-accent/20 bg-accent/5">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">B2B</span>
                      <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: b2b }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O erro de focar em volume de busca no B2B
            </h2>
            <p>
              A lógica de SEO B2C prioriza palavras-chave com alto volume de busca — mais tráfego, mais oportunidades de venda. No B2B, essa lógica produz resultados enganosos.
            </p>
            <p>
              Uma empresa de software B2B que rankeia bem para &ldquo;o que é CRM&rdquo; pode ter muito tráfego — e quase nenhum lead qualificado. Porque quem busca &ldquo;o que é CRM&rdquo; está no começo absoluto da jornada de aprendizado, não no processo de decisão de compra.
            </p>
            <p>
              Uma mesma empresa que rankeia para &ldquo;CRM para distribuidoras de médio porte&rdquo; pode ter 30 buscas mensais — e gerar 5 leads qualificados por mês. O volume é irrelevante se a intenção está alinhada.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                No B2B, a métrica que importa não é visitas — é visitas do perfil certo, no momento certo da jornada. Um artigo com 100 visitas mensais de diretores de operações vale mais do que um artigo com 10.000 visitas de estudantes curiosos.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Arquitetura de conteúdo para B2B
            </h2>
            <p>
              SEO B2B eficiente requer uma arquitetura de conteúdo que acompanha a jornada de compra — não uma coleção aleatória de artigos sobre temas relacionados ao produto.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  stage: 'Topo: consciência do problema',
                  content: 'Conteúdo que ajuda o leitor a entender e nomear o problema que está vivendo. Artigos como &ldquo;por que minha taxa de conversão não melhora&rdquo; ou &ldquo;sinais de que seu processo comercial está com gargalo&rdquo;. O objetivo não é vender — é ser encontrado no momento em que o problema começa a ser articulado.',
                  goal: 'Gerar consciência e capturar atenção',
                },
                {
                  stage: 'Meio: avaliação de soluções',
                  content: 'Conteúdo que ajuda o leitor a entender as abordagens disponíveis e a fazer uma escolha informada. Comparativos, guias de implementação, estudos de caso. O leitor já sabe que tem um problema — agora está mapeando como resolver.',
                  goal: 'Construir autoridade e qualificar',
                },
                {
                  stage: 'Fundo: decisão de compra',
                  content: 'Conteúdo que responde as últimas dúvidas antes da decisão: como funciona o processo, o que esperar, qual o ROI esperado, como outros resolveram o mesmo problema. Cases específicos com resultados mensuráveis são o formato mais eficiente aqui.',
                  goal: 'Remover objeções e converter',
                },
              ].map(({ stage, content, goal }) => (
                <div key={stage} className="flex flex-col gap-3 p-6 border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-sm font-semibold text-ink-primary">{stage}</span>
                    <span className="text-xs text-accent font-medium">{goal}</span>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              SEO técnico: o que muda e o que permanece igual
            </h2>
            <p>
              Os fundamentos técnicos de SEO são os mesmos independente do modelo de negócio: velocidade de página, mobile-friendliness, estrutura de headings, links internos, schema markup, canonical tags. Esses elementos afetam como o Google indexa e rankeia qualquer site.
            </p>
            <p>
              O que muda no B2B é a prioridade relativa de cada elemento. Velocidade de página tem menos impacto em conversão no B2B porque o leitor está pesquisando ativamente — ele vai esperar alguns segundos por conteúdo relevante de uma forma que um comprador impulsivo no B2C não vai. Mas autoridade de domínio e qualidade de backlinks têm peso maior, porque mercados B2B são frequentemente mais nichados e o volume de conteúdo concorrente é menor.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O papel do SEO no ciclo de venda longo
            </h2>
            <p>
              Em vendas B2B com ciclo longo, o SEO raramente é o último ponto de contato antes da decisão. Mas frequentemente é o primeiro. O prospect descobriu a empresa por um artigo que apareceu em uma busca específica, voltou ao site algumas vezes nos meses seguintes consumindo mais conteúdo, e só então entrou em contato.
            </p>
            <p>
              Isso tem implicações importantes para como o resultado do SEO é medido. Em atribuição de último clique — o modelo padrão da maioria das ferramentas de analytics — o SEO recebe pouco crédito porque a conversão final aconteceu por outro canal (direct, email, indicação). Em atribuição multi-touch, o papel do orgânico no ciclo de compra aparece muito mais claramente.
            </p>
            <p>
              Para empresas B2B que querem entender o real impacto do SEO, a métrica mais honesta é: quantos leads qualificados consumiram conteúdo orgânico em algum ponto da sua jornada antes de converter?
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              SEO B2B é investimento de médio prazo — com retorno crescente
            </h2>
            <p>
              SEO orgânico não é canal de resultado imediato — especialmente em B2B, onde domínios novos precisam de 6 a 12 meses para começar a ver resultados consistentes. Essa característica é frequentemente citada como desvantagem. É na verdade uma vantagem estrutural.
            </p>
            <p>
              Uma vez que o conteúdo está rankeado e o domínio tem autoridade estabelecida, o custo de aquisição por lead orgânico cai progressivamente. Ao contrário de mídia paga — onde o custo por lead aumenta com a concorrência e os resultados param quando o investimento para — o SEO bem executado produz um ativo que se valoriza com o tempo.
            </p>
            <p>
              Para empresas B2B que pensam no médio prazo, é o canal com melhor relação custo-resultado ao longo do tempo. Para quem precisa de resultado em 30 dias, não é a ferramenta certa.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <RelatedArticles currentSlug={post.slug} />

      <CTASection
        eyebrow="SEO e aquisição orgânica"
        title="SEO B2B bem estruturado gera demanda qualificada com custo decrescente — mas exige arquitetura antes de execução."
        subtitle="O Diagnóstico Estratégico avalia sua estrutura atual de aquisição orgânica e identifica onde estão as maiores oportunidades dado o seu mercado e perfil de cliente."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver SEO e aquisição orgânica', href: '/servicos' }}
      />
    </>
  )
}
