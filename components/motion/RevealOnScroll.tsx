'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const revealCallbacks = new WeakMap<Element, () => void>()
let sharedObserver: IntersectionObserver | null = null

function getSharedObserver() {
  if (typeof IntersectionObserver === 'undefined') {
    return null
  }

  if (sharedObserver) {
    return sharedObserver
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue
        }

        const callback = revealCallbacks.get(entry.target)

        if (!callback) {
          sharedObserver?.unobserve(entry.target)
          continue
        }

        callback()
        revealCallbacks.delete(entry.target)
        sharedObserver?.unobserve(entry.target)
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
  )

  return sharedObserver
}

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export default function RevealOnScroll({
  children,
  className,
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    if (node.getBoundingClientRect().top <= window.innerHeight * 0.92) {
      setIsVisible(true)
      return
    }

    const observer = getSharedObserver()

    if (!observer) {
      setIsVisible(true)
      return
    }

    revealCallbacks.set(node, () => setIsVisible(true))
    observer.observe(node)

    return () => {
      revealCallbacks.delete(node)
      observer.unobserve(node)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn('reveal-on-scroll', isVisible && 'is-visible', className)}
    >
      {children}
    </div>
  )
}
