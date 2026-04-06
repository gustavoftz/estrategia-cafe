import type { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = createMetadata({
  title: 'Blog — Estratégia e Marketing Digital',
  description:
    'Artigos sobre estratégia digital, conversão, SEO e operação comercial por WhatsApp. Diagnóstico antes de execução — para empresas que querem resultado, não apenas atividade.',
  path: '/blog',
})

const posts = [
  {
    slug: 'site-que-vende-vs-site-que-existe',
    title: 'Site que vende vs site que existe: 12 diferenças práticas',
    excerpt:
      'A maioria dos sites existe. Poucos vendem. A diferença não está no design — está em clareza, estrutura e persuasão. 12 critérios para avaliar em qual dos dois lados o seu site está.',
    category: 'Conversão',
    date: 'Abr 2026',
    readTime: '6 min',
  },
  {
    slug: 'seo-organico-para-empresas-b2b',
    title: 'SEO orgânico para empresas B2B: o que muda em relação ao B2C',
    excerpt:
      'SEO para B2B não é SEO para B2C com outro produto. O ciclo de venda é mais longo, a decisão envolve mais pessoas e o conteúdo precisa trabalhar de forma diferente.',
    category: 'SEO',
    date: 'Abr 2026',
    readTime: '8 min',
  },
  {
    slug: 'como-qualificar-leads-whatsapp',
    title: 'Como qualificar leads no WhatsApp antes do contato humano',
    excerpt:
      'Qualificação não é sobre filtrar pessoas. É sobre ter contexto antes da primeira conversa — para que o atendente entre preparado e o lead não precise repetir as mesmas informações três vezes.',
    category: 'Operação Comercial',
    date: 'Abr 2026',
    readTime: '7 min',
  },
  {
    slug: 'posicionamento-de-marca',
    title: 'Posicionamento de marca: o que é e por que determina o resultado de tudo',
    excerpt:
      'Posicionamento não é slogan nem identidade visual. É a clareza sobre quem você atende, qual problema resolve e por que alguém deveria escolher você. Sem isso, site, mídia e comercial operam no escuro.',
    category: 'Estratégia',
    date: 'Abr 2026',
    readTime: '8 min',
  },
  {
    slug: 'sistema-comercial-digital',
    title: 'Sistema comercial digital: o que é e por que pensar em sistema',
    excerpt:
      'Tráfego, site, conversão, WhatsApp — a maioria das empresas trata cada um como canal separado. O problema é que eles não funcionam separados. O que muda quando você pensa em sistema.',
    category: 'Estratégia',
    date: 'Abr 2026',
    readTime: '8 min',
  },
  {
    slug: 'agencia-ou-consultoria-de-marketing',
    title: 'Agência ou consultoria de marketing: qual a diferença e quando contratar cada uma',
    excerpt:
      'Agência executa. Consultoria diagnostica, prioriza e estrutura antes de executar. A diferença parece simples, mas tem impacto direto no resultado. Quando cada modelo faz sentido.',
    category: 'Estratégia',
    date: 'Abr 2026',
    readTime: '7 min',
  },
  {
    slug: 'cro-para-ecommerce',
    title: 'CRO para e-commerce: como aumentar a conversão sem aumentar o tráfego',
    excerpt:
      'A taxa média de conversão de e-commerces brasileiros é de 1 a 2%. Passar de 1% para 2% dobra a receita sem investir mais em aquisição. O que é CRO e onde estão os maiores pontos de melhoria.',
    category: 'Conversão',
    date: 'Abr 2026',
    readTime: '9 min',
  },
  {
    slug: 'por-que-meu-site-nao-converte',
    title: 'Por que meu site não converte — e não é problema de tráfego',
    excerpt:
      'A causa mais comum de conversão baixa não é falta de tráfego. É falta de clareza, estrutura e persuasão. Os cinco problemas mais frequentes e como identificá-los antes de investir em mais mídia.',
    category: 'Conversão',
    date: 'Abr 2026',
    readTime: '8 min',
  },
  {
    slug: 'como-estruturar-operacao-whatsapp',
    title: 'Como estruturar a operação comercial no WhatsApp — sem perder oportunidades',
    excerpt:
      'O WhatsApp é onde a maioria das conversas comerciais acontece no Brasil. Mas sem estrutura, acumula atrito, perde oportunidades e sobrecarrega o time. Como sair do caos operacional.',
    category: 'Operação Comercial',
    date: 'Abr 2026',
    readTime: '7 min',
  },
  {
    slug: 'o-que-e-diagnostico-de-marketing-digital',
    title: 'O que é diagnóstico de marketing digital — e quando sua empresa precisa de um',
    excerpt:
      'Diagnóstico não é auditoria e não é proposta comercial. É a fase que determina se o que vem depois vai funcionar. O que inclui, quando faz sentido e o que esperar do processo.',
    category: 'Estratégia',
    date: 'Abr 2026',
    readTime: '6 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[680px]">
          <span className="eyebrow">Blog</span>
          <h1 className="text-display font-serif text-ink-primary">
            Estratégia digital{' '}
            <span className="text-ink-secondary">sem achismo e sem atividade por atividade.</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[54ch]">
            Artigos sobre posicionamento, conversão, SEO, operação por WhatsApp e tudo que compõe um sistema comercial digital que funciona de verdade.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="canvas">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Artigos"
            title="Leitura que informa decisão"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col gap-5 p-7 border border-border hover:border-border-strong transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  <Tag variant="accent">{post.category}</Tag>
                </div>
                <h2 className="text-h3 font-serif text-ink-primary leading-snug group-hover:text-accent transition-colors duration-150">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-ink-muted">{post.date}</span>
                  <span className="text-xs text-ink-muted">·</span>
                  <span className="text-xs text-ink-muted">{post.readTime} de leitura</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Diagnóstico antes de execução"
        title="Leitura informa. Diagnóstico transforma."
        subtitle="Se você se reconheceu em algum dos problemas descritos aqui, o próximo passo é mapear onde está a maior fricção no seu sistema comercial."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Iniciar uma conversa', href: '/contato' }}
      />
    </>
  )
}
