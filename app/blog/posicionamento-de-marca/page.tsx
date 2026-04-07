import type { Metadata } from 'next'
import BlogArticleHeader from '@/components/blog/BlogArticleHeader'
import BlogArticleSchema from '@/components/blog/BlogArticleSchema'
import RelatedArticles from '@/components/blog/RelatedArticles'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import { getBlogPost } from '@/lib/blog'
import { createArticleMetadata } from '@/lib/metadata'

const post = getBlogPost('posicionamento-de-marca')

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
            Posicionamento de marca:{' '}
            <span className="text-ink-secondary">
              o que é e por que determina o resultado de tudo
            </span>
          </>
        }
        description='Posicionamento não é slogan, não é identidade visual e não é o parágrafo de "quem somos" no site. É a clareza sobre quem você atende, qual problema específico resolve e por que alguém deveria escolher você em vez da alternativa.'
      />

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            Quando o posicionamento está difuso, todos os elementos do sistema comercial operam com atrito. O site não sabe o que dizer. A mídia não sabe quem segmentar. O comercial não sabe como argumentar. Os leads chegam desalinhados. O time de vendas trabalha mais para converter menos.
          </p>
          <p>
            Quando o posicionamento está claro, o efeito oposto acontece: cada peça do sistema sabe para onde apontar. O site se escreve mais fácil. Os anúncios acertam o público certo. A conversa comercial flui porque o lead já chegou com a expectativa correta.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O que posicionamento realmente é
            </h2>
            <p>
              Posicionamento é a resposta a três perguntas que parecem simples mas raramente têm resposta clara:
            </p>
            <div className="flex flex-col gap-3">
              {[
                { q: 'Para quem?', a: 'Qual é o perfil específico do cliente que você atende melhor — não &ldquo;qualquer empresa&rdquo;, mas qual segmento, porte, momento ou problema você resolve com mais consistência.' },
                { q: 'Qual problema?', a: 'Qual é a dor específica que você resolve — não &ldquo;ajudamos empresas a crescer&rdquo;, mas qual é a fricção concreta que existia antes de trabalhar com você e que deixou de existir depois.' },
                { q: 'Por que você?', a: 'O que torna sua abordagem diferente das alternativas disponíveis — não apenas &ldquo;qualidade&rdquo; e &ldquo;experiência&rdquo;, mas algo específico sobre como você trabalha, o que você prioriza ou o resultado que você entrega.' },
              ].map(({ q, a }) => (
                <div key={q} className="flex flex-col gap-2 p-5 border border-border">
                  <span className="text-sm font-semibold text-ink-primary">{q}</span>
                  <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
                </div>
              ))}
            </div>
            <p>
              A maioria das empresas tem respostas vagas para as três. &ldquo;Atendemos empresas de todos os portes.&rdquo; &ldquo;Ajudamos a melhorar os resultados digitais.&rdquo; &ldquo;Nosso diferencial é o atendimento personalizado.&rdquo; São respostas que qualquer concorrente também daria — o que significa que não diferenciam nada.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Por que posicionamento genérico custa caro
            </h2>
            <p>
              Posicionamento genérico parece seguro. Ao não se comprometer com um nicho específico, a empresa imagina que está mantendo as opções abertas — qualquer cliente em potencial pode se sentir atendido.
            </p>
            <p>
              Na prática, o efeito é o oposto. Quando a mensagem é genérica, ela não ressoa com ninguém em particular. O visitante que chega ao site não se reconhece como o cliente ideal. O lead que preenche o formulário pode ser qualquer coisa — e frequentemente é o perfil errado. O time comercial perde tempo qualificando leads que nunca deveriam ter chegado.
            </p>
            <div className="border-l-2 border-accent pl-6 py-1">
              <p className="text-sm text-ink-secondary italic">
                Posicionamento específico assusta menos clientes do que parece — e atrai muito mais os certos. Uma empresa que diz claramente &ldquo;trabalhamos com empresas B2B de serviços com ticket acima de R$5.000&rdquo; vai repelir quem não se encaixa. Mas vai atrair com muito mais força quem se encaixa — porque essa pessoa vai sentir que a mensagem foi escrita para ela.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Posicionamento não é branding
            </h2>
            <p>
              Existe uma confusão frequente entre posicionamento e branding — e ela custa projetos inteiros. Branding é como a marca se expressa: nome, logo, cores, tipografia, tom de voz. Posicionamento é o que a marca representa: para quem existe, qual problema resolve, por que é diferente.
            </p>
            <p>
              Você pode ter um branding impecável com posicionamento difuso — e o resultado é uma marca bonita que não converte. Você pode ter um branding simples com posicionamento claro — e o resultado é uma marca que cresce por indicação porque os clientes certos entendem exatamente o valor que ela entrega.
            </p>
            <p>
              O branding comunica. O posicionamento define o que comunicar. Investir em branding antes de ter clareza de posicionamento é como contratar um arquiteto antes de saber quantas pessoas vão morar na casa.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Como o posicionamento fraco se manifesta no dia a dia
            </h2>
            <p>
              Posicionamento difuso raramente aparece nos relatórios como &ldquo;problema de posicionamento&rdquo;. Ele se disfarça de outros problemas.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { symptom: 'Taxa de conversão baixa', cause: 'O visitante não se identifica como o cliente ideal porque a mensagem é genérica demais.' },
                { symptom: 'Leads desqualificados', cause: 'A proposta de valor atrai qualquer perfil — inclusive os errados.' },
                { symptom: 'Ciclo de vendas longo', cause: 'O lead não chegou com a expectativa correta e precisa ser educado durante a venda.' },
                { symptom: 'Dificuldade de precificar', cause: 'Quando o diferencial não é claro, qualquer preço parece alto em comparação com alternativas genéricas mais baratas.' },
                { symptom: 'Copy de site que não sai', cause: 'Ninguém consegue escrever o headline porque não há clareza sobre o que precisa ser dito e para quem.' },
              ].map(({ symptom, cause }) => (
                <div key={symptom} className="flex flex-col sm:flex-row gap-3 sm:gap-10 py-5 border-b border-border last:border-0">
                  <span className="text-sm font-semibold text-ink-primary shrink-0 sm:w-48">{symptom}</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">{cause}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O processo de clarear o posicionamento
            </h2>
            <p>
              Posicionamento não se define em uma reunião de brainstorming. Ele emerge de um processo de análise que combina quatro fontes de informação:
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-border-strong leading-none shrink-0 mt-0.5 w-8">01</span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">Seus melhores clientes atuais</span>
                  <p className="text-sm text-ink-secondary leading-relaxed">Quem são os clientes que mais recomendam, que menos dão trabalho, que obtêm resultados mais consistentes? O que eles têm em comum? Qual era o problema deles antes de chegar até você?</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-border-strong leading-none shrink-0 mt-0.5 w-8">02</span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">O que você faz diferente — de fato</span>
                  <p className="text-sm text-ink-secondary leading-relaxed">Não o que você diz que faz diferente, mas o que os clientes percebem como diferente. Frequentemente são coisas que a própria empresa não valoriza porque parecem óbvias — mas que os concorrentes não fazem.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-border-strong leading-none shrink-0 mt-0.5 w-8">03</span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">O que o mercado já percebe sobre você</span>
                  <p className="text-sm text-ink-secondary leading-relaxed">Como os clientes descrevem o que você faz quando recomendam para outros? Essa linguagem é ouro — é o posicionamento que o mercado já atribuiu a você, muitas vezes melhor articulado do que você mesmo faria.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-border-strong leading-none shrink-0 mt-0.5 w-8">04</span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">O espaço que os concorrentes deixam</span>
                  <p className="text-sm text-ink-secondary leading-relaxed">Onde os concorrentes são fracos, genéricos ou inconsistentes? Posicionamento diferenciado é aquele que ocupa um espaço que os outros deixaram vago — seja por segmento, por abordagem ou por tipo de resultado.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              Posicionamento é a base — não um projeto paralelo
            </h2>
            <p>
              A tentação é tratar posicionamento como um projeto que acontece em paralelo com a operação — algo para &ldquo;fazer quando der&rdquo;. Mas posicionamento difuso tem custo operacional contínuo: em cada venda que demora mais, em cada lead desqualificado que consome tempo do comercial, em cada campanha que não acerta o público certo.
            </p>
            <p>
              O investimento em clareza de posicionamento se amortiza em cada interação comercial subsequente. E é o que determina se tudo que vem depois — site, mídia, SEO, WhatsApp — vai funcionar em direção ao mesmo objetivo ou vai operar em paralelo sem coerência.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <RelatedArticles currentSlug={post.slug} />

      <CTASection
        eyebrow="Posicionamento e estratégia"
        title="Se a sua mensagem não é clara o suficiente para o cliente certo se reconhecer, o problema começa antes do site."
        subtitle="O Diagnóstico Estratégico avalia posicionamento, mensagem e clareza de proposta de valor — e identifica onde está o atrito antes de qualquer execução."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver estratégia e posicionamento', href: '/servicos' }}
      />
    </>
  )
}
