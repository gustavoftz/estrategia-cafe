import Link from 'next/link'
import { featuredReadingSlugs, getBlogPost } from '@/lib/blog'
import TrackedButton from '@/components/analytics/TrackedButton'

const navLinks = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/metodo', label: 'Método' },
  { href: '/estudos-de-caso', label: 'Estudos de Caso' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/simulador-de-impacto-comercial', label: 'Simulador de Impacto Comercial' },
  { href: '/contato', label: 'Contato' },
  { href: '/diagnostico-estrategico', label: 'Diagnóstico Estratégico' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const featuredReading = featuredReadingSlugs.map((slug) => getBlogPost(slug))

  return (
    <footer className="bg-ink-primary text-ink-inverse" aria-label="Rodapé">
      {/* Main footer content */}
      <div className="container-content max-w-content py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand + summary */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-[1.2rem] text-ink-inverse hover:text-ink-inverse/80 transition-colors self-start"
            >
              estrategia<span className="text-accent-light">.</span>cafe
            </Link>
            <p className="text-sm text-ink-inverse/65 leading-relaxed max-w-[38ch]">
              Consultoria estratégica focada em reduzir fricção comercial no digital. Posicionamento, site, aquisição, conversão e operação por WhatsApp como um sistema integrado.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-inverse/40">
              Páginas
            </span>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-ink-inverse/65 hover:text-ink-inverse transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-inverse/40">
              Leituras
            </span>
            <nav aria-label="Leituras recomendadas">
              <ul className="flex flex-col gap-3">
                {featuredReading.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`${post.path}/`}
                      className="text-sm leading-relaxed text-ink-inverse/65 transition-colors duration-150 hover:text-ink-inverse"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact + CTA */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-inverse/40">
                Contato
              </span>
              <a
                href="mailto:contato@estrategia.cafe"
                className="text-sm text-ink-inverse/65 hover:text-ink-inverse transition-colors duration-150"
              >
                contato@estrategia.cafe
              </a>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <p className="text-sm text-ink-inverse/50 leading-relaxed max-w-[32ch]">
                Prefere começar com um diagnóstico antes de contratar?
              </p>
              <TrackedButton
                href="/diagnostico-estrategico"
                variant="inverse"
                size="sm"
                className="self-start"
                trackingLocation="footer_button"
                trackingLabel="Ver o Diagnóstico Estratégico"
              >
                Ver o Diagnóstico Estratégico
              </TrackedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-inverse/10">
        <div className="container-content max-w-content py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-inverse/35">
            © {year} estrategia.cafe. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-ink-inverse/35 hover:text-ink-inverse/60 transition-colors duration-150"
            >
              Política de Privacidade
            </Link>
            <span className="text-ink-inverse/20 text-xs">·</span>
            <Link
              href="/termos"
              className="text-xs text-ink-inverse/35 hover:text-ink-inverse/60 transition-colors duration-150"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
