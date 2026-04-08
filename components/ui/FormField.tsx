'use client'

import React, { useId, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

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
  const id = useId()
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  const enhancedChildren = describedBy
    ? React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
              'aria-describedby': describedBy,
            })
          : child
      )
    : children

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

      {hint && (
        <span id={hintId} className="text-xs font-normal leading-snug text-ink-secondary">
          {hint}
        </span>
      )}

      {enhancedChildren}

      {error && (
        <span id={errorId} className="text-xs leading-snug text-ink-primary" role="alert">
          {error}
        </span>
      )}
    </label>
  )
}
