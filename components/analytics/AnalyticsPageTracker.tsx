'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useRef } from 'react'
import { trackEvent, trackPageView } from '@/lib/analytics'

const scrollDepthThresholds = [25, 50, 75, 90] as const

function getPageType(pathname: string) {
  if (pathname === '/') {
    return 'home'
  }

  if (pathname === '/contato') {
    return 'contact'
  }

  if (pathname === '/diagnostico-estrategico') {
    return 'diagnostico_estrategico'
  }

  if (pathname === '/simulador-de-impacto-comercial') {
    return 'roi_calculator'
  }

  if (pathname === '/blog') {
    return 'blog_index'
  }

  if (pathname.startsWith('/blog/')) {
    return 'blog_article'
  }

  return 'content_page'
}

export default function AnalyticsPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousPagePathRef = useRef<string | null>(null)

  const pagePath = useMemo(() => {
    const query = searchParams.toString()
    return query ? `${pathname}?${query}` : pathname
  }, [pathname, searchParams])

  useEffect(() => {
    const pageReferrer = previousPagePathRef.current
      ? new URL(previousPagePathRef.current, window.location.origin).toString()
      : document.referrer || undefined

    trackPageView({
      page_location: window.location.href,
      page_path: pagePath,
      page_referrer: pageReferrer,
      page_title: document.title,
      page_type: getPageType(pathname),
    })

    previousPagePathRef.current = pagePath
  }, [pagePath, pathname])

  useEffect(() => {
    if (document.documentElement.scrollHeight <= window.innerHeight * 1.15) {
      return
    }

    const remainingThresholds = new Set<number>(scrollDepthThresholds)
    let frame = 0

    const checkScrollDepth = () => {
      frame = 0

      const pageHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight)
      const currentDepth = ((window.scrollY + window.innerHeight) / pageHeight) * 100

      scrollDepthThresholds.forEach((threshold) => {
        if (!remainingThresholds.has(threshold) || currentDepth < threshold) {
          return
        }

        remainingThresholds.delete(threshold)
        trackEvent('scroll_depth', {
          page_path: pagePath,
          page_type: getPageType(pathname),
          percent_scrolled: threshold,
        })
      })
    }

    const scheduleCheck = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(checkScrollDepth)
    }

    checkScrollDepth()
    window.addEventListener('scroll', scheduleCheck, { passive: true })
    window.addEventListener('resize', scheduleCheck)

    return () => {
      window.removeEventListener('scroll', scheduleCheck)
      window.removeEventListener('resize', scheduleCheck)

      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [pagePath, pathname])

  return null
}
