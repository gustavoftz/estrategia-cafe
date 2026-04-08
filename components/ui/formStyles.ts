import { cn } from '@/lib/utils'

export const inputClass =
  'w-full rounded-[1rem] border border-border bg-canvas px-4 py-3 text-sm text-ink-primary shadow-[0_14px_40px_rgba(25,24,26,0.04)] transition-colors duration-150 placeholder:text-ink-subtle focus:border-ink-primary focus:outline-none'

export const selectClass = cn(inputClass, 'cursor-pointer')

export const textareaClass = cn(inputClass, 'min-h-[120px] resize-none')
