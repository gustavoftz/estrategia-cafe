'use client'

import { useEffect } from 'react'
import { DM_Serif_Display, Inter } from 'next/font/google'

const serif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'optional',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'optional',
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#FAFAF8] font-sans antialiased">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '6rem 1.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans, system-ui)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1C5C3A',
              marginBottom: '1rem',
            }}
          >
            Algo deu errado
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.12,
              color: '#19181A',
              marginBottom: '1rem',
            }}
          >
            Erro crítico
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans, system-ui)',
              fontSize: '1.125rem',
              color: '#65605A',
              maxWidth: '48rem',
              marginBottom: '2.5rem',
            }}
          >
            Ocorreu um problema grave ao carregar o site. Tente novamente ou volte mais tarde.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                border: '1px solid #19181A',
                backgroundColor: '#19181A',
                color: '#FAFAF8',
                fontFamily: 'var(--font-sans, system-ui)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.025em',
              }}
            >
              Tentar novamente
            </button>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'transparent',
                color: '#19181A',
                fontFamily: 'var(--font-sans, system-ui)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.025em',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              Voltar ao início
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
