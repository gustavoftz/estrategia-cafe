'use client'

import Link from 'next/link'
import { trackCtaClick } from '@/lib/analytics'
import type { ReactNode } from 'react'

interface TrackedLinkProps {
  href: string
  children: ReactNode
  className?: string
  trackingLocation?: string
  trackingLabel?: string
}

function getTrackedDestination(href: string) {
  if (href === '/contato') {
    return 'contato'
  }

  if (href === '/diagnostico-estrategico') {
    return 'diagnostico_estrategico'
  }

  return null
}

export default function TrackedLink({
  href,
  children,
  className,
  trackingLocation,
  trackingLabel,
}: TrackedLinkProps) {
  const destination = getTrackedDestination(href)

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (destination) {
          trackCtaClick({
            destination,
            href,
            location: trackingLocation,
            label: trackingLabel,
          })
        }
      }}
    >
      {children}
    </Link>
  )
}
