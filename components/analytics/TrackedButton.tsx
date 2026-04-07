'use client'

import Button from '@/components/ui/Button'
import { getHrefTrackingParams, trackCtaClick } from '@/lib/analytics'
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

export default function TrackedButton(props: TrackingButtonProps) {
  if ('href' in props && props.href) {
    const { href, onClick, trackingLabel, trackingLocation, ...buttonProps } = props
    const trackingParams = getHrefTrackingParams(href)

    return (
      <Button
        href={href}
        onClick={() => {
          trackCtaClick({
            ...trackingParams,
            element_type: 'button',
            label: trackingLabel,
            location: trackingLocation,
          })

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
