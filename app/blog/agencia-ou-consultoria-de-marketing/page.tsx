import type { Metadata } from 'next'
import BlogArticleHeader from '@/components/blog/BlogArticleHeader'
import BlogArticleSchema from '@/components/blog/BlogArticleSchema'
import RelatedArticles from '@/components/blog/RelatedArticles'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import { getBlogPost } from '@/lib/blog'
import { createArticleMetadata } from '@/lib/metadata'

const post = getBlogPost('agencia-ou-consultoria-de-marketing')

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
            Agência ou consultoria de marketing:{' '}
            <span className="text-ink-secondary">
              qual a diferença e quando contratar cada uma
            </span>
          </>
        }
        description="A diferença parece óbvia mas raramente é. Agências executam. Consultorias diagnosticam, priorizam e estruturam. O problema é quando você contrata execução para resolver um problema que é de estratégia."
      />

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            A maioria das empresas que não está satisfeita com os resultados de marketing já passou por pelo menos uma troca de agência. Algumas por duas ou três. O padrão é sempre parecido: novos fornecedores, nova energia, expectativa renovada — e, alguns meses depois, o mesmo resultado de antes.
          </p>
          <p>
            Isso raramente é problema de qualidade da agência. É um problema de diagnóstico. A empresa estava com um problema de estratégia e contratou execução para resolvê-lo. Trocar quem executa não muda o que está sendo executado.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que uma agência faz — e o que ela não faz
            </h2>
            <p>
              Uma agência de marketing é estruturada para executar: produzir conteúdo, gerenciar campanhas, criar peças, otimizar anúncios, publicar. A maioria das agências é boa nisso. O modelo de negócio delas, porém, incentiva execução contínua — mais horas faturáveis, mais tarefas entregues, mais relatórios de atividade.
            </p>
            <p>
              O que uma agência não costuma fazer é questionar o briefing. Se você chegar com o pedido de &ldquo;precisamos de mais conteúdo para redes sociais&rdquo;, a agência vai produzir conteúdo para redes sociais. Se você chegar com &ldquo;precisamos de mais tráfego&rdquo;, ela vai gerar tráfego. Ela raramente vai perguntar se redes sociais ou tráfego é realmente o que vai resolver o seu problema.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                Isso não é crítica às agências — é como o modelo funciona. O cliente chega com uma solução definida, a agência implementa. O problema começa quando o cliente não sabe qual é o problema e chega com a solução errada.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que uma consultoria faz de diferente
            </h2>
            <p>
              Uma consultoria de marketing começa pelo problema, não pela solução. Antes de propor qualquer execução, ela diagnóstica: qual é o ponto de maior fricção no sistema comercial atual? O que já foi tentado? Por que não funcionou? Qual intervenção teria maior impacto dado o contexto específico da empresa?
            </p>
            <p>
              Esse processo resulta em priorização. Uma consultoria bem conduzida frequentemente diz coisas como: o problema não é falta de tráfego — é que o site não converte o que já chega. Ou: o problema não é a copy dos anúncios — é que a proposta de valor da empresa não está clara. Ou: o problema não é o volume de leads — é que a operação comercial não está qualificando e respondendo rápido o suficiente.
            </p>
            <p>
              Esse tipo de diagnóstico é incômodo porque frequentemente implica parar de fazer algo que a empresa já estava fazendo — e que gerava atividade visível, mesmo que não gerasse resultado. Mas é exatamente o que separa trabalho estratégico de trabalho operacional.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              A confusão que o mercado criou
            </h2>
            <p>
              Boa parte das empresas que se apresentam como consultorias de marketing na prática são agências com um briefing mais elaborado. O modelo é o mesmo — execução contínua, retainer mensal, entrega de tarefas — mas o nome é diferente.
            </p>
            <p>
              O sinal mais claro de que você está diante de uma agência-com-outro-nome é quando o &ldquo;diagnóstico&rdquo; resulta inevitavelmente nos mesmos serviços que a empresa oferece. Se toda consultoria de SEO diagnostica que você precisa de SEO, e toda consultoria de redes sociais diagnostica que você precisa de redes sociais, o diagnóstico não é imparcial — é venda.
            </p>
            <p>
              Uma consultoria real pode diagnosticar que o maior problema não está na frente onde ela atua — e recomendar que você invista em outra área primeiro. Isso é raro, mas é o critério que distingue diagnóstico genuíno de apresentação comercial com outro nome.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Quando faz sentido contratar uma agência
            </h2>
            <p>
              Uma agência faz sentido quando você já tem clareza estratégica e precisa de capacidade de execução. Você sabe o que precisa ser feito, tem critério para avaliar qualidade, e o problema é principalmente de volume ou especialidade técnica.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Você tem posicionamento claro e precisa de produção de conteúdo consistente',
                'Você tem estratégia de mídia definida e precisa de quem execute e otimize campanhas',
                'Você sabe que precisa de SEO técnico e quer uma equipe especializada nisso',
                'Você tem capacidade interna de estratégia e precisa de execução adicional',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 px-5 py-4 border border-border">
                  <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Quando faz sentido contratar uma consultoria
            </h2>
            <p>
              Uma consultoria faz sentido quando você sente que algo não está funcionando mas não sabe exatamente o quê — ou quando as soluções que você já tentou não resolveram o problema de forma consistente.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Você já trocou de agência mais de uma vez sem mudar o resultado',
                'Você investe em digital mas não consegue identificar onde está o retorno',
                'Você sente que o problema é mais estrutural do que operacional',
                'Você está prestes a escalar investimento e quer garantir que está escalando a coisa certa',
                'Você precisa de alguém que questione o que está sendo feito, não apenas que execute',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 px-5 py-4 border border-border">
                  <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              É possível ter os dois?
            </h2>
            <p>
              Sim — e muitas vezes é o modelo ideal. Uma consultoria diagnostica e estrutura. Uma agência executa. A consultoria monitora se a execução está alinhada com a estratégia e faz ajustes de rota quando necessário.
            </p>
            <p>
              O problema é quando os papéis se confundem — quando a agência começa a tomar decisões estratégicas sem o contexto necessário, ou quando a consultoria se transforma em mais um fornecedor de execução.
            </p>
            <p>
              A clareza de papel é o que mantém o sistema funcionando: quem pensa e quem executa, com comunicação clara entre as partes e responsabilidade pelo resultado do conjunto.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              O critério prático para decidir
            </h2>
            <p>
              A pergunta mais simples para orientar a decisão: você sabe o que precisa ser feito, ou precisa descobrir?
            </p>
            <p>
              Se você sabe — posicionamento claro, estratégia definida, problema bem mapeado — uma agência de execução é o próximo passo. Se você não sabe — ou se sente que o que está sendo feito não está funcionando mas não consegue identificar por quê — o primeiro passo é diagnóstico, não execução.
            </p>
            <p>
              Contratar mais execução para um problema que não foi diagnosticado é o caminho mais caro para continuar no mesmo lugar.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <RelatedArticles currentSlug={post.slug} />

      <CTASection
        eyebrow="Diagnóstico antes de proposta"
        title="Se você não tem certeza do que precisa, o ponto de partida é entender o problema — não escolher o fornecedor."
        subtitle="O Diagnóstico Estratégico mapeia onde está a maior fricção no seu sistema comercial e recomenda qual intervenção faz mais sentido dado o seu contexto."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver como trabalhamos', href: '/metodo' }}
      />
    </>
  )
}
