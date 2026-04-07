'use client'

import Button from '@/components/ui/Button'
import { trackCtaClick } from '@/lib/analytics'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type TrackingButtonProps =
  | {
      href: string
      children: ReactNode
      variant?: 'primary' | 'secondary' | 'ghost' | 'inverse'
      size?: 'sm' | 'md' | 'lg'
      className?: string
      external?: boolean
      onClick?: () => void
      trackingLocation?: string
      trackingLabel?: string
    }
  | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
      href?: never
      children: ReactNode
      variant?: 'primary' | 'secondary' | 'ghost' | 'inverse'
      size?: 'sm' | 'md' | 'lg'
      className?: string
      trackingLocation?: string
      trackingLabel?: string
    })

function getTrackedDestination(href?: string) {
  if (!href) {
    return null
  }

  if (href === '/contato') {
    return 'contato'
  }

  if (href === '/diagnostico-estrategico') {
    return 'diagnostico_estrategico'
  }

  return null
}

export default function TrackedButton(props: TrackingButtonProps) {
  if ('href' in props && props.href) {
    const destination = getTrackedDestination(props.href)
    const { href, onClick, trackingLabel, trackingLocation, ...buttonProps } = props

    return (
      <Button
        href={href}
        onClick={() => {
          if (destination) {
            trackCtaClick({
              destination,
              href,
              location: trackingLocation,
              label: trackingLabel,
            })
          }

          onClick?.()
        }}
        {...buttonProps}
      />
    )
  }

  const { trackingLabel: _trackingLabel, trackingLocation: _trackingLocation, ...buttonProps } =
    props

  return <Button {...buttonProps} />
}
