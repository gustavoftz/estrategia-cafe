import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  hint?: string
  required?: boolean
  error?: string
  className?: string
  children: ReactNode
}

export default function FormField({
  label,
  hint,
  required,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <label
      className={cn(
        'flex cursor-default flex-col gap-2 text-sm font-medium text-ink-primary',
        className
      )}
    >
      <span>
        {label}
        {required && (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        )}
      </span>

      {hint && <span className="text-xs font-normal leading-snug text-ink-muted">{hint}</span>}

      {children}

      {error && (
        <span className="text-xs leading-snug text-ink-primary" role="alert">
          {error}
        </span>
      )}
    </label>
  )
}
