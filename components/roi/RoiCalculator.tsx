'use client'

import { useEffect, useState, type ChangeEvent } from 'react'
import DetailedAnalysisGate from '@/components/roi/DetailedAnalysisGate'
import ScenarioSelector from '@/components/roi/ScenarioSelector'
import Button from '@/components/ui/Button'
import FormField from '@/components/ui/FormField'
import { inputClass } from '@/components/ui/formStyles'
import { trackEvent } from '@/lib/analytics'
import {
  calculateRoiResults,
  formatCurrencyBRL,
  formatDecimal,
  formatInputNumber,
  formatPaybackMonths,
  formatPercentage,
  formatSignedPercentage,
  getHeadlineNarrative,
  getInterpretationSummary,
  getMarginSensitivitySummary,
  getOpportunitySignalSummary,
  getRecommendedNextSteps,
  getResultSuggestionSummary,
  getRoiFieldErrors,
  hasRoiFieldErrors,
  parseRoiFormValues,
  parseRoiNumberInput,
  roiExampleFormValues,
} from '@/lib/roi/calculations'
import {
  calculateProjectedRateFromScenario,
  defaultScenarioPreset,
  getPlausibleProjectedRateCap,
  getScenarioDefinition,
  limitProjectedConversionRate,
} from '@/lib/roi/scenarios'
import type {
  DetailedAnalysisState,
  ProjectionMode,
  RoiBaseFieldName,
  RoiFormValues,
  ScenarioPreset,
} from '@/lib/roi/types'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  label: string
  value: string
  detail: string
  tone?: 'default' | 'highlight'
}

interface AnalysisCardProps {
  title: string
  children: string
}

const baseFieldConfig: Array<{
  name: RoiBaseFieldName
  label: string
  hint: string
  placeholder: string
  inputMode: 'decimal' | 'numeric'
  prefix?: string
  suffix?: string
}> = [
  {
    name: 'monthlyQuoteRequests',
    label: 'Pedidos de orçamento por mês',
    hint: 'Quantas oportunidades comerciais entram, em média, em um mês.',
    placeholder: '80',
    inputMode: 'numeric',
  },
  {
    name: 'currentConversionRate',
    label: 'Taxa atual de conversão (%)',
    hint: 'Percentual médio de pedidos que hoje viram contrato.',
    placeholder: '14',
    inputMode: 'decimal',
    suffix: '%',
  },
  {
    name: 'averageContractValue',
    label: 'Valor médio por contrato (R$)',
    hint: 'Ticket médio de cada novo contrato fechado.',
    placeholder: '8500',
    inputMode: 'decimal',
    prefix: 'R$',
  },
  {
    name: 'netMarginRate',
    label: 'Margem líquida aproximada (%)',
    hint: 'Margem estimada depois de custos, impostos e operação.',
    placeholder: '28',
    inputMode: 'decimal',
    suffix: '%',
  },
  {
    name: 'monthlyInvestment',
    label: 'Investimento mensal (R$)',
    hint: 'Quanto você pretende investir por mês para capturar essa melhora.',
    placeholder: '9000',
    inputMode: 'decimal',
    prefix: 'R$',
  },
]

function MetricCard({ label, value, detail, tone = 'default' }: MetricCardProps) {
  return (
    <div
      className={cn(
        'h-full rounded-[1.35rem] border px-5 py-5',
        tone === 'highlight'
          ? 'border-accent/15 bg-accent/5'
          : 'border-border bg-canvas/80'
      )}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </span>
      <p className="mt-3 text-2xl font-serif text-ink-primary">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{detail}</p>
    </div>
  )
}

function AnalysisCard({ title, children }: AnalysisCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-border bg-surface/70 px-5 py-5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {title}
      </span>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{children}</p>
    </div>
  )
}

export default function RoiCalculator() {
  const [formValues, setFormValues] = useState<RoiFormValues>(roiExampleFormValues)
  const [selectedScenario, setSelectedScenario] = useState<ScenarioPreset>(defaultScenarioPreset)
  const [projectionMode, setProjectionMode] = useState<ProjectionMode>('scenario')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [detailedAnalysisState, setDetailedAnalysisState] =
    useState<DetailedAnalysisState>('locked')

  const fieldErrors = getRoiFieldErrors(formValues)
  const hasFieldErrors = hasRoiFieldErrors(fieldErrors)
  const parsedFormValues = parseRoiFormValues(formValues)
  const scenarioProjectedRate = calculateProjectedRateFromScenario(
    parsedFormValues.currentConversionRate,
    selectedScenario
  )

  useEffect(() => {
    if (projectionMode !== 'scenario') {
      return
    }

    const nextProjectedRate = formatInputNumber(scenarioProjectedRate)

    setFormValues((previousValues) =>
      previousValues.projectedConversionRate === nextProjectedRate
        ? previousValues
        : {
            ...previousValues,
            projectedConversionRate: nextProjectedRate,
          }
    )
  }, [projectionMode, scenarioProjectedRate])

  const rawManualProjectedRate = parseRoiNumberInput(formValues.projectedConversionRate)
  const manualProjectedRate = limitProjectedConversionRate(
    parsedFormValues.projectedConversionRate,
    parsedFormValues.currentConversionRate
  )
  const effectiveProjectedRate =
    projectionMode === 'manual' ? manualProjectedRate : scenarioProjectedRate
  const inputs = {
    ...parsedFormValues,
    projectedConversionRate: effectiveProjectedRate,
  }
  const results = calculateRoiResults(inputs)
  const selectedScenarioDefinition = getScenarioDefinition(selectedScenario)
  const scenarioProjectedImprovement =
    inputs.projectedConversionRate > inputs.currentConversionRate
  const hasPositiveIncrementalProfit = results.incrementalProfit > 0
  const manualProjectionAdjusted =
    projectionMode === 'manual' &&
    rawManualProjectedRate > 0 &&
    Math.abs(rawManualProjectedRate - manualProjectedRate) > 0.05
  const contractsDelta = results.projectedContracts - results.currentContracts

  const notices: string[] = []

  if (hasFieldErrors) {
    notices.push(
      'Revise os campos destacados. A simulação continua visível, mas considera apenas valores válidos.'
    )
  }

  if (inputs.projectedConversionRate < inputs.currentConversionRate) {
    notices.push(
      'A taxa projetada ficou abaixo da taxa atual. Neste caso, a simulação passa a indicar perda de eficiência, não ganho.'
    )
  }

  if (manualProjectionAdjusted) {
    notices.push(
      `Para manter a estimativa em uma faixa plausível, a projeção manual foi limitada a ${formatPercentage(getPlausibleProjectedRateCap(inputs.currentConversionRate))}.`
    )
  }

  if (inputs.monthlyInvestment <= 0) {
    notices.push('Informe um investimento acima de zero para calcular ROI mensal e payback.')
  }

  if (!hasPositiveIncrementalProfit) {
    notices.push(
      'Com as premissas atuais, o lucro incremental não fica positivo. O payback deixa de ser estimável.'
    )
  }

  const handleChange =
    (fieldName: RoiBaseFieldName) => (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value

      setFormValues((previousValues) => ({
        ...previousValues,
        [fieldName]: nextValue,
      }))
    }

  const handleManualProjectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value

    setProjectionMode('manual')
    setFormValues((previousValues) => ({
      ...previousValues,
      projectedConversionRate: nextValue,
    }))
  }

  const handleScenarioSelect = (scenario: ScenarioPreset) => {
    const nextProjectedRate = calculateProjectedRateFromScenario(
      inputs.currentConversionRate,
      scenario
    )

    setSelectedScenario(scenario)
    setProjectionMode('scenario')
    setFormValues((previousValues) => ({
      ...previousValues,
      projectedConversionRate: formatInputNumber(nextProjectedRate),
    }))
  }

  const handleRestoreExample = () => {
    setFormValues(roiExampleFormValues)
    setSelectedScenario(defaultScenarioPreset)
    setProjectionMode('scenario')
    setIsAdvancedOpen(false)
    setDetailedAnalysisState('locked')
  }

  const handleUseScenarioAgain = () => {
    setProjectionMode('scenario')
    setFormValues((previousValues) => ({
      ...previousValues,
      projectedConversionRate: formatInputNumber(scenarioProjectedRate),
    }))
  }

  const handleUnlockDetailedAnalysis = () => {
    setDetailedAnalysisState('unlocked')
    trackEvent('roi_detailed_analysis_unlock', {
      scenario_preset: selectedScenario,
      projection_mode: projectionMode,
      projected_rate: Number(formatDecimal(inputs.projectedConversionRate).replace(',', '.')),
    })
  }

  const detailedPreviewItems = [
    'Tempo aproximado de retorno do investimento',
    'Leitura estratégica da oportunidade',
    'Sensibilidade da margem e do cenário',
    'Próximo passo recomendado',
  ]

  const highlightedScenarioText =
    projectionMode === 'scenario'
      ? `${selectedScenarioDefinition.label} · taxa estimada ${formatPercentage(inputs.projectedConversionRate)}`
      : `Projeção manual · taxa em uso ${formatPercentage(inputs.projectedConversionRate)}`

  return (
    <div className="editorial-panel surface-grid overflow-hidden">
      <div className="flex flex-col gap-px bg-border">
        <div className="bg-canvas/90 px-6 py-6 md:px-8 md:py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-[52ch]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Premissas do diagnóstico
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  Informe o desenho atual da operação. A leitura abaixo transforma volume,
                  conversão, ticket e margem em uma percepção mais clara da oportunidade comercial.
                </p>
              </div>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="self-start"
                onClick={handleRestoreExample}
              >
                Restaurar exemplo
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {baseFieldConfig.map((field) => (
                <FormField
                  key={field.name}
                  label={field.label}
                  hint={field.hint}
                  error={fieldErrors[field.name]}
                >
                  <div className="relative">
                    {field.prefix && (
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none text-sm text-ink-muted">
                        {field.prefix}
                      </span>
                    )}
                    <input
                      type="text"
                      inputMode={field.inputMode}
                      value={formValues[field.name]}
                      onChange={handleChange(field.name)}
                      placeholder={field.placeholder}
                      aria-invalid={Boolean(fieldErrors[field.name])}
                      className={cn(
                        inputClass,
                        field.prefix && 'pl-9',
                        field.suffix && 'pr-9',
                        fieldErrors[field.name] && 'border-ink-primary bg-white'
                      )}
                    />
                    {field.suffix && (
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-sm text-ink-muted">
                        {field.suffix}
                      </span>
                    )}
                  </div>
                </FormField>
              ))}
            </div>

            <ScenarioSelector
              currentConversionRate={inputs.currentConversionRate}
              selectedScenario={selectedScenario}
              projectionMode={projectionMode}
              onSelect={handleScenarioSelect}
            />

            <div className="rounded-[1.35rem] border border-border bg-white/65">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setIsAdvancedOpen((previousValue) => !previousValue)}
                aria-expanded={isAdvancedOpen}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink-primary">
                    Quero testar uma hipótese própria
                  </span>
                  <span className="text-xs leading-relaxed text-ink-muted">
                    Abra este modo só se quiser sair da faixa guiada e usar uma projeção manual.
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    'shrink-0 text-ink-muted transition-transform duration-200',
                    isAdvancedOpen && 'rotate-180'
                  )}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isAdvancedOpen && (
                <div className="border-t border-border px-5 py-5">
                  <div className="flex flex-col gap-4">
                    <FormField
                      label="Taxa projetada de conversão (%)"
                      hint="Use esta opção apenas se quiser testar uma hipótese manual fora dos cenários guiados."
                      error={fieldErrors.projectedConversionRate}
                    >
                      <input
                        type="text"
                        inputMode="decimal"
                        value={formValues.projectedConversionRate}
                        onChange={handleManualProjectionChange}
                        placeholder={formatInputNumber(scenarioProjectedRate)}
                        aria-invalid={Boolean(fieldErrors.projectedConversionRate)}
                        className={cn(
                          inputClass,
                          fieldErrors.projectedConversionRate && 'border-ink-primary bg-white'
                        )}
                      />
                    </FormField>

                    <div className="rounded-[1.1rem] border border-border bg-surface/70 px-4 py-4">
                      <p className="text-sm leading-relaxed text-ink-secondary">
                        Projeções agressivas podem distorcer a estimativa. Sempre que necessário, a
                        taxa manual é limitada a uma faixa plausível para preservar a credibilidade
                        da análise.
                      </p>
                    </div>

                    {projectionMode === 'manual' && (
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm leading-relaxed text-ink-secondary">
                          A leitura estratégica está usando sua hipótese manual.
                        </p>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="self-start sm:self-auto"
                          onClick={handleUseScenarioAgain}
                        >
                          Voltar ao cenário {selectedScenarioDefinition.label.toLowerCase()}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-[1.35rem] border border-border bg-surface/70 px-5 py-5">
              <p className="text-sm leading-relaxed text-ink-secondary">
                Trabalhamos com médias mensais e cenários plausíveis. O objetivo aqui não é prometer
                precisão absoluta, mas revelar se existe uma oportunidade comercial material
                escondida no processo atual.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-surface/85 px-6 py-6 md:px-8 md:py-8"
          aria-live="polite"
          aria-label="Resultados do diagnóstico"
        >
          <div className="flex flex-col gap-5">
            <div className="rounded-[1.35rem] border border-border bg-canvas/88 px-5 py-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Resultado do diagnóstico
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                Com base nas premissas acima, esta é a leitura inicial da oportunidade comercial e
                do retorno potencial do cenário escolhido.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-accent/15 bg-accent/5 px-5 py-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Sinal de oportunidade
              </span>
              <h3 className="mt-3 text-h3 font-serif text-ink-primary">
                {formatCurrencyBRL(results.incrementalRevenue)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {getOpportunitySignalSummary(inputs, results)}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {highlightedScenarioText}
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-border bg-canvas/80 px-5 py-5">
              <p className="text-sm leading-relaxed text-ink-secondary">
                {scenarioProjectedImprovement
                  ? `${selectedScenarioDefinition.description} Neste desenho, a conversão sairia de ${formatPercentage(inputs.currentConversionRate)} para ${formatPercentage(inputs.projectedConversionRate)}, adicionando ${formatDecimal(Math.abs(contractsDelta))} contratos por mês em potencial.`
                  : 'Neste desenho, a taxa projetada não supera a taxa atual, então a leitura passa a sugerir uma retração de performance.'}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {getHeadlineNarrative(inputs, results)}
              </p>
            </div>

            {notices.length > 0 && (
              <div className="rounded-[1.35rem] border border-border bg-white/70 px-5 py-5">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Ajustes na leitura
                </div>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-secondary">
                  {notices.map((notice) => (
                    <li key={notice}>{notice}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
              <MetricCard
                label="Base atual de faturamento"
                value={formatCurrencyBRL(results.currentRevenue)}
                detail="Quanto a operação atual tende a capturar por mês no desenho de hoje."
              />
              <MetricCard
                label="Potencial no cenário"
                value={formatCurrencyBRL(results.potentialRevenue)}
                detail="Quanto o mesmo volume de oportunidades poderia render no cenário escolhido."
              />
              <MetricCard
                label="Receita adicional em jogo"
                value={formatCurrencyBRL(results.incrementalRevenue)}
                detail="A diferença de receita que o cenário indica como oportunidade comercial."
                tone="highlight"
              />
              <MetricCard
                label="ROI mensal da hipótese"
                value={formatSignedPercentage(results.monthlyRoi)}
                detail="Quanto o cenário devolve em retorno mensal depois do investimento estimado."
                tone="highlight"
              />
            </div>

            <DetailedAnalysisGate
              state={detailedAnalysisState}
              onUnlock={handleUnlockDetailedAnalysis}
              previewItems={detailedPreviewItems}
            >
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
                  <MetricCard
                    label="Payback aproximado"
                    value={formatPaybackMonths(results.paybackMonths)}
                    detail="Tempo estimado para o retorno compensar o investimento desta hipótese."
                  />
                  <MetricCard
                    label="Lucro incremental estimado"
                    value={formatCurrencyBRL(results.incrementalProfit)}
                    detail="Quanto da oportunidade adicional tende a permanecer como ganho líquido."
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <AnalysisCard title="O que este cenário indica">
                    {getInterpretationSummary(
                      selectedScenario,
                      results.monthlyRoi,
                      results.incrementalProfit,
                      results.paybackMonths
                    )}
                  </AnalysisCard>
                  <AnalysisCard title="Onde a margem muda a leitura">
                    {getMarginSensitivitySummary(inputs, results)}
                  </AnalysisCard>
                  <AnalysisCard title="Qual prioridade aparece daqui">
                    {getResultSuggestionSummary(inputs, results)}
                  </AnalysisCard>
                  <div className="rounded-[1.35rem] border border-border bg-surface/70 px-5 py-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                      Próximo passo recomendado
                    </span>
                    <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-secondary">
                      {getRecommendedNextSteps(inputs, results).map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DetailedAnalysisGate>

            <p className="text-xs leading-relaxed text-ink-muted">
              Leitura orientativa, não promessa de resultado. Os números variam conforme qualidade
              do tráfego, clareza da proposta, operação comercial, margem real e ritmo de execução.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
