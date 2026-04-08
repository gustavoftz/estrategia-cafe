import type { ReactNode } from 'react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { DetailedAnalysisState } from '@/lib/roi/types'

interface DetailedAnalysisGateProps {
  state: DetailedAnalysisState
  title?: string
  subtitle?: string
  previewItems: string[]
  unlockLabel?: string
  unlockMode?: 'local-preview' | 'whatsapp' | 'form'
  onUnlock: () => void
  children: ReactNode
  className?: string
}

export default function DetailedAnalysisGate({
  state,
  title = 'Leitura estratégica do cenário',
  subtitle = 'Você já recebeu a estimativa central. A continuação traduz o que esse número sugere em termos de retorno, sensibilidade e prioridade comercial.',
  previewItems,
  unlockLabel = 'Liberar leitura estratégica',
  unlockMode = 'local-preview',
  onUnlock,
  children,
  className,
}: DetailedAnalysisGateProps) {
  if (state === 'unlocked') {
    return (
      <div
        className={cn(
          'rounded-[1.5rem] border border-border bg-canvas/88 px-5 py-5',
          className
        )}
      >
        <div className="mb-5 flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Leitura estratégica liberada
          </span>
          <h3 className="text-h3 font-serif text-ink-primary">{title}</h3>
        </div>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'rounded-[1.5rem] border border-border bg-gradient-to-b from-white/70 to-surface/70 px-5 py-5',
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
            Continuação do diagnóstico
          </span>
          <h3 className="text-h3 font-serif text-ink-primary">{title}</h3>
          <p className="text-sm leading-relaxed text-ink-secondary">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {previewItems.map((item) => (
            <div
              key={item}
              className="rounded-[1.1rem] border border-border bg-canvas/70 px-4 py-4 text-sm leading-relaxed text-ink-secondary"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[34rem] text-xs leading-relaxed text-ink-subtle">
            {unlockMode === 'local-preview'
              ? 'Nesta versão, a leitura abre aqui mesmo, sem sair da página.'
              : 'Este CTA está pronto para futura integração com WhatsApp ou mini formulário.'}
          </div>

          <Button type="button" variant="primary" size="lg" className="w-full sm:w-auto" onClick={onUnlock}>
            {unlockLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
