'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/metodo', label: 'Método' },
  { href: '/estudos-de-caso', label: 'Estudos de Caso' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Subtle background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled || menuOpen
            ? 'bg-canvas/96 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="container-content max-w-content">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-[1.2rem] text-ink-primary hover:text-ink-secondary transition-colors shrink-0"
              onClick={closeMenu}
            >
              estrategia<span className="text-accent">.</span>cafe
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-150 relative',
                    'after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200',
                    isActive(href)
                      ? 'text-ink-primary after:scale-x-100'
                      : 'text-ink-secondary hover:text-ink-primary hover:after:scale-x-100'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button href="/contato" variant="primary" size="sm">
                Agendar conversa
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-primary rounded"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span
                className={cn(
                  'block w-5 h-px bg-ink-primary transition-all duration-200 origin-center',
                  menuOpen && 'translate-y-[6px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-px bg-ink-primary transition-all duration-200',
                  menuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-px bg-ink-primary transition-all duration-200 origin-center',
                  menuOpen && '-translate-y-[6px] -rotate-45'
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-canvas flex flex-col transition-all duration-300 lg:hidden',
          menuOpen
            ? 'visible opacity-100 pointer-events-auto'
            : 'invisible opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        {/* Spacer for header height */}
        <div className="h-[68px] shrink-0" />

        <nav
          className="flex flex-col container-content py-8 gap-0"
          aria-label="Menu de navegação"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={cn(
                'text-2xl font-serif py-4 border-b border-border transition-colors duration-150',
                isActive(href)
                  ? 'text-ink-primary'
                  : 'text-ink-secondary hover:text-ink-primary'
              )}
            >
              {label}
            </Link>
          ))}

          <div className="pt-8 flex flex-col gap-3">
            <Button href="/contato" variant="primary" size="lg" className="w-full justify-center">
              Agendar conversa
            </Button>
            <Button href="/diagnostico-estrategico" variant="secondary" size="lg" className="w-full justify-center">
              Diagnóstico Estratégico
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
