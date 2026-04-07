export type AnalyticsValue = string | number | boolean

export type AnalyticsParams = Record<string, AnalyticsValue | null | undefined>

interface QueuedAnalyticsEvent {
  eventName: string
  params: Record<string, AnalyticsValue>
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __analyticsEnabled?: boolean
    __analyticsQueue?: QueuedAnalyticsEvent[]
  }
}

function sanitizeParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  )
}

function dispatchEvent(eventName: string, params: Record<string, AnalyticsValue>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
    return true
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params })
    return true
  }

  return false
}

function toSnakeCase(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function getInternalDestination(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'

  if (normalizedPath === '/') {
    return 'home'
  }

  return toSnakeCase(normalizedPath.replace(/^\/+/, '')) || 'internal_page'
}

export function getHrefTrackingParams(href: string): AnalyticsParams {
  if (!href) {
    return {}
  }

  if (href.startsWith('mailto:')) {
    return {
      destination: 'email',
      href,
      link_type: 'mailto',
    }
  }

  if (href.startsWith('tel:')) {
    return {
      destination: 'phone',
      href,
      link_type: 'tel',
    }
  }

  if (href.startsWith('#')) {
    return {
      destination: toSnakeCase(href.slice(1)) || 'page_anchor',
      href,
      link_type: 'anchor',
    }
  }

  const url = new URL(href, 'https://estrategia.cafe')
  const hostname = url.hostname.replace(/^www\./, '')
  const isInternal = hostname === 'estrategia.cafe'

  if (isInternal) {
    return {
      destination: getInternalDestination(url.pathname),
      href,
      link_type: 'internal',
    }
  }

  return {
    destination: toSnakeCase(hostname) || 'external_link',
    href,
    link_domain: hostname,
    link_type: 'external',
  }
}

export function setAnalyticsEnabled(enabled: boolean) {
  if (typeof window === 'undefined') {
    return
  }

  window.__analyticsEnabled = enabled

  if (!enabled) {
    window.__analyticsQueue = []
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined' || !window.__analyticsEnabled) {
    return
  }

  const payload = sanitizeParams(params) as Record<string, AnalyticsValue>

  if (dispatchEvent(eventName, payload)) {
    return
  }

  window.__analyticsQueue = window.__analyticsQueue || []
  window.__analyticsQueue.push({ eventName, params: payload })
}

export function trackPageView(params: AnalyticsParams = {}) {
  trackEvent('page_view', params)
}

export function trackCtaClick(params: AnalyticsParams = {}) {
  trackEvent('cta_click', params)
}
