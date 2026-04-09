'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import AnalyticsPageTracker from '@/components/analytics/AnalyticsPageTracker'
import { setAnalyticsEnabled, trackEvent } from '@/lib/analytics'

const CONSENT_KEY = 'ec_consent'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-TKHRQ4LYRM'
type Consent = 'accepted' | 'declined' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null)
  const [visible, setVisible] = useState(false)
  const acceptButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as Consent

    if (stored === 'accepted' || stored === 'declined') {
      setAnalyticsEnabled(stored === 'accepted')
      setConsent(stored)
    } else {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    acceptButtonRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') decline()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [visible])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setAnalyticsEnabled(true)
    trackEvent('cookie_consent_update', {
      consent_status: 'accepted',
    })
    setConsent('accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setAnalyticsEnabled(false)
    setConsent('declined')
    setVisible(false)
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true,
                send_page_view: false
              });
              if (Array.isArray(window.__analyticsQueue) && window.__analyticsQueue.length > 0) {
                var queuedEvents = window.__analyticsQueue.slice();
                window.__analyticsQueue = [];
                queuedEvents.forEach(function(item) {
                  gtag('event', item.eventName, item.params);
                });
              }
            `}
          </Script>
          <Script id="apollo-tracker" strategy="afterInteractive">
            {`
              function initApollo() {
                var n = Math.random().toString(36).substring(7);
                var o = document.createElement('script');
                o.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + n;
                o.async = true;
                o.defer = true;
                o.onload = function() {
                  window.trackingFunctions.onLoad({ appId: '69d66eb4e05b860019b8b9b0' });
                };
                document.head.appendChild(o);
              }

              initApollo();
            `}
          </Script>
          <Suspense fallback={null}>
            <AnalyticsPageTracker />
          </Suspense>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preferências de cookies"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-canvas shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="container-content max-w-content py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[64ch]">
              Utilizamos cookies analíticos para entender como o site é acessado e melhorar a
              experiência. Esses dados podem ser processados por ferramentas como Google Analytics
              e Apollo. Nenhum dado pessoal é vendido ou compartilhado para fins de revenda.{' '}
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
                ref={acceptButtonRef}
                onClick={accept}
                className="px-5 py-2.5 text-sm font-medium bg-ink-primary text-ink-inverse border border-ink-primary hover:bg-ink-primary/90 active:scale-[0.98] transition-[transform,background-color,border-color,color] duration-150"
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
