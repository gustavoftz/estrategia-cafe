'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false })

export default function CookieBannerLoader() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 4000 })
      return () => cancelIdleCallback(id)
    } else {
      const id = setTimeout(() => setReady(true), 1000)
      return () => clearTimeout(id)
    }
  }, [])

  if (!ready) return null
  return <CookieBanner />
}
