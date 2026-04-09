import type { Metadata } from 'next'
import BlogArticleHeader from '@/components/blog/BlogArticleHeader'
import BlogArticleSchema from '@/components/blog/BlogArticleSchema'
import RelatedArticles from '@/components/blog/RelatedArticles'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import { getBlogPost } from '@/lib/blog'
import { createArticleMetadata } from '@/lib/metadata'

const post = getBlogPost('site-que-vende-vs-site-que-existe')

export const metadata: Metadata = createArticleMetadata({
  title: post.title,
  description: post.description,
  path: post.path,
  category: post.category,
  keywords: post.keywords,
})

const criteria: { label: string; exists: string; sells: string }[] = [
  {
    label: 'Proposta de valor',
    exists: 'Descreve o que a empresa é: &ldquo;Agência de marketing digital full service&rdquo;.',
    sells: 'Responde quem atende, qual problema resolve e qual resultado entrega — em uma frase que o visitante lê em 3 segundos.',
  },
  {
    label: 'H1 da homepage',
    exists: 'Nome da empresa, slogan institucional ou frase genérica de motivação.',
    sells: 'Uma declaração sobre o problema do cliente ou o resultado que a empresa entrega.',
  },
  {
    label: 'Hierarquia visual',
    exists: 'Múltiplos elementos competindo por atenção. Banners, CTAs e destaques em toda seção.',
    sells: 'Uma ação principal por página. O restante existe para apoiar essa ação — não para competir com ela.',
  },
  {
    label: 'CTA principal',
    exists: '&ldquo;Saiba mais&rdquo;, &ldquo;Conheça nossos serviços&rdquo; ou &ldquo;Entre em contato&rdquo;.',
    sells: 'Uma ação específica com contexto claro: &ldquo;Solicitar diagnóstico&rdquo;, &ldquo;Ver preços&rdquo;, &ldquo;Falar com especialista&rdquo;.',
  },
  {
    label: 'Prova social',
    exists: 'Ausente, ou depoimentos genéricos sem nome, empresa ou resultado específico.',
    sells: 'Cases documentados com problema, contexto e resultado mensurável. Depoimentos com identificação real.',
  },
  {
    label: 'Jornada do visitante',
    exists: 'O visitante chega na homepage e precisa descobrir por onde continuar.',
    sells: 'Cada página leva naturalmente para a próxima etapa da decisão. O visitante nunca fica sem saber o que fazer depois.',
  },
  {
    label: 'Linguagem',
    exists: 'Centrada na empresa: &ldquo;Nós somos...&rdquo;, &ldquo;Nossa missão...&rdquo;, &ldquo;Oferecemos...&rdquo;.',
    sells: 'Centrada no cliente: &ldquo;Se você enfrenta...&rdquo;, &ldquo;Para quem precisa de...&rdquo;, &ldquo;O resultado é...&rdquo;.',
  },
  {
    label: 'Objeções',
    exists: 'Ignoradas. O site apresenta a oferta sem antecipar as dúvidas mais comuns.',
    sells: 'Tratadas explicitamente. Seções de FAQ, garantias, política de devolução, explicação de como funciona o processo.',
  },
  {
    label: 'Velocidade',
    exists: 'Carregamento lento, especialmente em mobile. Imagens pesadas, scripts que bloqueiam renderização.',
    sells: 'Carrega em menos de 3 segundos em 4G, em qualquer dispositivo. Performance é tratada como critério de conversão — imagens comprimidas, scripts assíncronos, sem bloqueio de renderização.',
  },
  {
    label: 'Experiência mobile',
    exists: 'Responsivo mas não projetado para mobile. Botões pequenos, texto denso, formulários difíceis de preencher.',
    sells: 'Mobile-first: hierarquia, tamanhos de toque e fluxo pensados para a tela menor como caso de uso principal.',
  },
  {
    label: 'Escada de comprometimento',
    exists: 'Um único CTA — geralmente o de maior comprometimento (comprar, contratar, agendar).',
    sells: 'CTAs de baixo atrito para quem ainda está avaliando, além do CTA principal para quem já está pronto.',
  },
  {
    label: 'Métricas de sucesso',
    exists: 'Visualizações de página, tempo de sessão, taxa de rejeição.',
    sells: 'Leads gerados, taxa de conversão por página, custo por lead — métricas que ligam o site ao resultado comercial.',
  },
]

export default function ArticlePage() {
  return (
    <>
      <BlogArticleSchema post={post} />
      <BlogArticleHeader
        post={post}
        title={
          <>
            Site que vende vs site que existe:{' '}
            <span className="text-ink-secondary">12 diferenças práticas</span>
          </>
        }
        description="A maioria dos sites existe. Está no ar, tem as páginas certas, funciona no mobile, carrega razoavelmente. Mas não vende — ou vende muito menos do que deveria dado o tráfego que recebe. A diferença não está no design."
      />

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            Um site que existe cumpre o requisito mínimo de presença digital. Um site que vende é um ativo comercial — que trabalha ativamente para converter o tráfego que recebe em leads, oportunidades e clientes.
          </p>
          <p>
            Os 12 critérios abaixo permitem avaliar em qual dos dois lados o seu site está hoje — e identificar onde estão as maiores oportunidades de melhoria.
          </p>

          <div className="flex flex-col gap-0">
            {criteria.map(({ label, exists, sells }, i) => (
              <div key={label} className="flex flex-col gap-4 py-8 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl text-border-strong leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-base font-sans font-semibold text-ink-primary">{label}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-10">
                  <div className="flex flex-col gap-2 p-4 bg-surface">
                    <span className="text-xs font-semibold text-ink-subtle uppercase tracking-wide">Site que existe</span>
                    <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: exists }} />
                  </div>
                  <div className="flex flex-col gap-2 p-4 border border-accent/20 bg-accent/5">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">Site que vende</span>
                    <p className="text-sm text-ink-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: sells }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <h2 className="text-h3 font-serif text-ink-primary">
              Como usar esse checklist
            </h2>
            <p>
              Passe por cada critério e avalie honestamente em qual coluna o seu site está. Nem todos os critérios têm o mesmo peso — priorize os que têm maior impacto no seu contexto específico.
            </p>
            <p>
              Em geral, os três critérios com maior impacto imediato são: proposta de valor (o visitante entende em 3 segundos o que você oferece?), CTA principal (é específico e tem contexto suficiente?) e prova social (existe prova documentada de que você entrega resultado?). Corrigir esses três, antes de qualquer outra mudança, tende a ter o maior retorno sobre o esforço.
            </p>
            <p>
              Um detalhe importante: um site bonito pode estar em qualquer uma das colunas. Design é a embalagem — não determina se o conteúdo dentro persuade. Empresas que fazem redesign completo sem corrigir os critérios acima continuam com um site que existe, só com visual mais recente.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <RelatedArticles currentSlug={post.slug} />

      <CTASection
        eyebrow="Site como ativo comercial"
        title="Se o seu site existe mas não vende, os critérios acima indicam onde está o problema."
        subtitle="O Diagnóstico Estratégico avalia seu site como ativo de venda — proposta de valor, jornada, conversão e prova social — e entrega prioridades claras de intervenção."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver sites, UX e conversão', href: '/servicos' }}
      />
    </>
  )
}
