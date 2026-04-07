import { cn } from '@/lib/utils'
import {
  formatPercentage,
} from '@/lib/roi/calculations'
import {
  calculateProjectedRateFromScenario,
  getScenarioSummary,
  scenarioDefinitions,
} from '@/lib/roi/scenarios'
import type { ProjectionMode, ScenarioPreset } from '@/lib/roi/types'

interface ScenarioSelectorProps {
  currentConversionRate: number
  selectedScenario: ScenarioPreset
  projectionMode: ProjectionMode
  onSelect: (preset: ScenarioPreset) => void
}

export default function ScenarioSelector({
  currentConversionRate,
  selectedScenario,
  projectionMode,
  onSelect,
}: ScenarioSelectorProps) {
  return (
    <div className="rounded-[1.35rem] border border-border bg-surface/70 px-5 py-5">
      <div className="mb-5 flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Faixas de evolução
        </span>
        <p className="text-sm leading-relaxed text-ink-secondary">
          Em vez de abrir uma projeção totalmente livre, começamos com cenários plausíveis de
          evolução comercial e digital. Isso ajuda a preservar credibilidade antes de testar uma
          hipótese manual.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
        {scenarioDefinitions.map((scenario) => {
          const projectedRate = calculateProjectedRateFromScenario(
            currentConversionRate,
            scenario.preset
          )
          const isSelected = selectedScenario === scenario.preset
          const isApplied = isSelected && projectionMode === 'scenario'

          return (
            <button
              key={scenario.preset}
              type="button"
              onClick={() => onSelect(scenario.preset)}
              className={cn(
                'rounded-[1.2rem] border px-4 py-4 text-left transition-all duration-200',
                isApplied
                  ? 'border-ink-primary bg-white shadow-[0_18px_40px_rgba(25,24,26,0.08)]'
                  : isSelected
                    ? 'border-border-strong bg-canvas/90'
                    : 'border-border bg-canvas/70 hover:border-border-strong hover:bg-canvas'
              )}
              aria-pressed={isSelected}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink-primary">{scenario.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-muted">
                    Taxa estimada {formatPercentage(projectedRate)}
                  </p>
                </div>

                {isApplied && (
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Em uso
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {getScenarioSummary(scenario.preset)}
              </p>
            </button>
          )
        })}
      </div>

      {projectionMode === 'manual' && (
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
          O cenário selecionado continua como referência consultiva, mas a leitura abaixo está
          usando a projeção manual.
        </p>
      )}
    </div>
  )
}
