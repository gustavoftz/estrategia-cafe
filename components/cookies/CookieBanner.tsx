'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'

const CONSENT_KEY = 'ec_consent'
type Consent = 'accepted' | 'declined' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as Consent
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored)
    } else {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setConsent('declined')
    setVisible(false)
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TKHRQ4LYRM"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TKHRQ4LYRM');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Preferências de cookies"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-canvas shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="container-content max-w-content py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[64ch]">
              Utilizamos cookies analíticos para entender como o site é acessado e melhorar a
              experiência. Nenhum dado pessoal é vendido ou compartilhado com terceiros além do
              Google Analytics.{' '}
              <Link
                href="/politica-de-privacidade"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                Política de Privacidade
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors duration-150 underline underline-offset-2"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 text-sm font-medium bg-ink-primary text-ink-inverse border border-ink-primary hover:bg-ink-primary/90 active:scale-[0.98] transition-all duration-150"
              >
                Aceitar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
