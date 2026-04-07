export type AnalyticsValue = string | number | boolean

export type AnalyticsParams = Record<string, AnalyticsValue | null | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function sanitizeParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  )
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const payload = sanitizeParams(params)

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
    return
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...payload })
  }
}

export function trackCtaClick(params: AnalyticsParams = {}) {
  trackEvent('cta_click', params)
}
