'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import TrackedButton from '@/components/analytics/TrackedButton'
import TrackedLink from '@/components/analytics/TrackedLink'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/metodo', label: 'Método' },
  { href: '/estudos-de-caso', label: 'Cases' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)
  const shouldRestoreFocusRef = useRef(false)

  // Subtle background on scroll
  useEffect(() => {
    let frame = 0

    const updateScrolled = () => {
      frame = 0
      const next = window.scrollY > 24
      setScrolled((prev) => (prev === next ? prev : next))
    }

    const onScroll = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(updateScrolled)
    }

    updateScrolled()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Close menu when switching back to desktop width
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu with Escape on mobile
  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Focus the first menu item when opening and restore trigger focus when closing
  useEffect(() => {
    if (menuOpen) {
      shouldRestoreFocusRef.current = true
      firstMobileLinkRef.current?.focus()
      return
    }

    if (shouldRestoreFocusRef.current) {
      menuButtonRef.current?.focus()
      shouldRestoreFocusRef.current = false
    }
  }, [menuOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="container-content max-w-content pt-3">
          <div
            className={cn(
              'flex h-[56px] items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 md:px-6',
              scrolled || menuOpen
                ? 'border border-border bg-canvas/92 shadow-[0_20px_55px_rgba(25,24,26,0.1)] backdrop-blur-xl'
                : 'border border-transparent bg-transparent'
            )}
          >
            <div className="flex min-w-0 items-center gap-4">
              <Link
                href="/"
                className="shrink-0 font-serif text-[1.2rem] text-ink-primary transition-colors hover:text-ink-secondary"
                onClick={() => setMenuOpen(false)}
              >
                estrategia<span className="text-accent">.</span>cafe
              </Link>

              <div className="hidden items-center gap-2 border-l border-border/80 pl-4 2xl:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
                  Diagnóstico primeiro
                </span>
              </div>
            </div>

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={cn(
                    'whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-200',
                    isActive(href)
                      ? 'bg-surface text-ink-primary shadow-[inset_0_0_0_1px_rgba(224,222,216,0.9)]'
                      : 'text-ink-secondary hover:bg-canvas/80 hover:text-ink-primary'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <TrackedLink
                href="/diagnostico-estrategico"
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-accent"
                trackingLocation="header_desktop_link"
                trackingLabel="Diagnóstico"
              >
                Diagnóstico
              </TrackedLink>
              <TrackedButton
                href="/contato"
                variant="primary"
                size="sm"
                trackingLocation="header_desktop_button"
                trackingLabel="Agendar conversa"
              >
                Agendar conversa
              </TrackedButton>
            </div>

            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(prev => !prev)}
              className={cn(
                'flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors xl:hidden',
                menuOpen ? 'bg-surface' : 'bg-transparent'
              )}
              aria-controls={mobileMenuId}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span
                className={cn(
                  'block h-px w-5 origin-center bg-ink-primary transition-all duration-200',
                  menuOpen && 'translate-y-[6px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-px w-5 bg-ink-primary transition-all duration-200',
                  menuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-px w-5 origin-center bg-ink-primary transition-all duration-200',
                  menuOpen && '-translate-y-[6px] -rotate-45'
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id={mobileMenuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={cn(
          'fixed inset-0 z-40 bg-canvas/88 backdrop-blur-md transition-all duration-300 xl:hidden',
          menuOpen
            ? 'visible opacity-100 pointer-events-auto'
            : 'invisible opacity-0 pointer-events-none'
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <div className="container-content pt-[84px]">
          <div
            className="editorial-panel surface-grid px-6 py-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
                Diagnóstico primeiro
              </span>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Posicionamento, site, aquisição e operação funcionando como sistema.
              </p>
            </div>

            <nav className="relative mt-6 flex flex-col" aria-label="Menu de navegação">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  ref={href === navLinks[0]?.href ? firstMobileLinkRef : undefined}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={cn(
                    'border-b border-border py-4 text-2xl font-serif transition-colors duration-150 last:border-b-0',
                    isActive(href)
                      ? 'text-ink-primary'
                      : 'text-ink-secondary hover:text-ink-primary'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="relative mt-6 flex flex-col gap-3">
              <TrackedButton
                href="/contato"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                trackingLocation="header_mobile_button"
                trackingLabel="Agendar conversa"
              >
                Agendar conversa
              </TrackedButton>
              <TrackedButton
                href="/diagnostico-estrategico"
                variant="secondary"
                size="lg"
                className="w-full justify-center"
                trackingLocation="header_mobile_button"
                trackingLabel="Diagnóstico Estratégico"
              >
                Diagnóstico Estratégico
              </TrackedButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
