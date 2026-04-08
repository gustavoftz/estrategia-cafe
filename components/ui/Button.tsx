import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-ink-primary text-ink-inverse border border-ink-primary shadow-[0_18px_40px_rgba(25,24,26,0.12)] hover:bg-ink-primary/90 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(25,24,26,0.18)] active:translate-y-0 active:scale-[0.98]',
  secondary:
    'bg-transparent text-ink-primary border border-ink-primary/90 hover:bg-ink-primary hover:text-ink-inverse hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  ghost:
    'bg-transparent text-ink-primary border border-transparent hover:text-accent underline-offset-4 hover:underline',
  // For use on dark/ink-primary backgrounds
  inverse:
    'bg-transparent text-ink-inverse border border-ink-inverse/60 hover:bg-ink-inverse hover:text-ink-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-wide',
  md: 'px-6 py-3 text-sm tracking-wide',
  lg: 'px-8 py-4 text-sm tracking-wide',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'

type SharedProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type AsLinkProps = SharedProps & {
  href: string
  external?: boolean
  onClick?: () => void
}

type AsButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: never
  }

type ButtonProps = AsLinkProps | AsButtonProps

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className)

  if ('href' in props && props.href) {
    const { href, external, onClick } = props as AsLinkProps
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      )
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _href, ...buttonProps } =
    props as AsButtonProps & { href?: never }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
