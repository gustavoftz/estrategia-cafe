'use client'

import Link from 'next/link'
import { getHrefTrackingParams, trackCtaClick } from '@/lib/analytics'
import type { ReactNode } from 'react'

interface TrackedLinkProps {
  href: string
  children: ReactNode
  className?: string
  trackingLocation?: string
  trackingLabel?: string
}

export default function TrackedLink({
  href,
  children,
  className,
  trackingLocation,
  trackingLabel,
}: TrackedLinkProps) {
  const trackingParams = getHrefTrackingParams(href)

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackCtaClick({
          ...trackingParams,
          element_type: 'link',
          label: trackingLabel,
          location: trackingLocation,
        })
      }}
    >
      {children}
    </Link>
  )
}
