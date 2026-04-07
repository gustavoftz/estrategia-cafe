'use client'

import { useState, type ChangeEvent } from 'react'
import Button from '@/components/ui/Button'
import FormField from '@/components/ui/FormField'
import { inputClass } from '@/components/ui/formStyles'
import { cn } from '@/lib/utils'
import {
  calculateRoiCalculatorResults,
  formatCurrencyBRL,
  formatDecimal,
  formatPaybackMonths,
  formatPercentage,
  formatSignedPercentage,
  getRoiCalculatorFieldErrors,
  hasRoiCalculatorFieldErrors,
  parseRoiCalculatorFormValues,
  roiCalculatorExampleValues,
  type RoiCalculatorFieldName,
  type RoiCalculatorFormValues,
} from '@/lib/roi-calculator'

interface MetricCardProps {
  label: string
  value: string
  detail: string
  tone?: 'default' | 'highlight'
}

const fieldConfig: Array<{
  name: RoiCalculatorFieldName
  label: string
  hint: string
  placeholder: string
  inputMode: 'decimal' | 'numeric'
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
  },
  {
    name: 'averageContractValue',
    label: 'Valor médio por contrato (R$)',
    hint: 'Ticket médio de cada novo contrato fechado.',
    placeholder: '8500',
    inputMode: 'decimal',
  },
  {
    name: 'netMarginRate',
    label: 'Margem líquida aproximada (%)',
    hint: 'Margem estimada depois de custos, impostos e operação.',
    placeholder: '28',
    inputMode: 'decimal',
  },
  {
    name: 'projectedConversionRate',
    label: 'Taxa projetada após melhoria (%)',
    hint: 'Conversão esperada com ajustes de processo, mensagem e jornada.',
    placeholder: '19',
    inputMode: 'decimal',
  },
  {
    name: 'monthlyInvestment',
    label: 'Investimento mensal (R$)',
    hint: 'Quanto você pretende investir por mês para capturar essa melhora.',
    placeholder: '9000',
    inputMode: 'decimal',
  },
]

function MetricCard({ label, value, detail, tone = 'default' }: MetricCardProps) {
  return (
    <div
      className={cn(
        'rounded-[1.35rem] border px-5 py-5',
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

export default function RoiCalculator() {
  const [formValues, setFormValues] = useState<RoiCalculatorFormValues>(roiCalculatorExampleValues)

  const fieldErrors = getRoiCalculatorFieldErrors(formValues)
  const hasFieldErrors = hasRoiCalculatorFieldErrors(fieldErrors)
  const parsedInputs = parseRoiCalculatorFormValues(formValues)
  const results = calculateRoiCalculatorResults(parsedInputs)

  const contractsDelta = results.projectedContracts - results.currentContracts
  const projectedImprovement =
    parsedInputs.projectedConversionRate > parsedInputs.currentConversionRate
  const hasPositiveIncrementalProfit = results.incrementalProfit > 0

  const notices: string[] = []

  if (hasFieldErrors) {
    notices.push(
      'Revise os campos destacados. A simulação continua visível, mas considera apenas valores válidos.'
    )
  }

  if (parsedInputs.projectedConversionRate < parsedInputs.currentConversionRate) {
    notices.push(
      'A taxa projetada ficou abaixo da taxa atual. Neste caso, a simulação indica perda de eficiência, não ganho.'
    )
  }

  if (parsedInputs.monthlyInvestment <= 0) {
    notices.push('Informe um investimento acima de zero para calcular ROI mensal e payback.')
  }

  if (!hasPositiveIncrementalProfit) {
    notices.push(
      'Com as premissas atuais, o lucro incremental não fica positivo. O payback deixa de ser estimável.'
    )
  }

  const handleChange =
    (fieldName: RoiCalculatorFieldName) => (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value

      setFormValues(prev => ({
        ...prev,
        [fieldName]: nextValue,
      }))
    }

  return (
    <div className="editorial-panel surface-grid overflow-hidden">
      <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <div className="bg-canvas/90 px-6 py-6 md:px-8 md:py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-[52ch]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Cenário mensal
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  Começamos com um exemplo plausível para empresas que recebem demanda recorrente e
                  querem estimar o impacto de reduzir fricção comercial.
                </p>
              </div>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="self-start"
                onClick={() => setFormValues(roiCalculatorExampleValues)}
              >
                Restaurar exemplo
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fieldConfig.map(field => (
                <FormField
                  key={field.name}
                  label={field.label}
                  hint={field.hint}
                  error={fieldErrors[field.name]}
                >
                  <input
                    type="text"
                    inputMode={field.inputMode}
                    value={formValues[field.name]}
                    onChange={handleChange(field.name)}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(fieldErrors[field.name])}
                    className={cn(
                      inputClass,
                      fieldErrors[field.name] && 'border-ink-primary bg-white'
                    )}
                  />
                </FormField>
              ))}
            </div>

            <div className="rounded-[1.35rem] border border-border bg-surface/70 px-5 py-5">
              <p className="text-sm leading-relaxed text-ink-secondary">
                Esta simulação trabalha com médias mensais. Ela ajuda a dimensionar ordem de
                grandeza antes de um diagnóstico mais preciso sobre qualidade de lead, jornada e
                capacidade comercial.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface/85 px-6 py-6 md:px-8 md:py-8" aria-live="polite">
          <div className="flex flex-col gap-5">
            <div className="rounded-[1.5rem] border border-accent/15 bg-accent/5 px-5 py-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Leitura do cenário
              </span>
              <h3 className="mt-3 text-h3 font-serif text-ink-primary">
                {formatCurrencyBRL(results.incrementalRevenue)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {projectedImprovement
                  ? `Receita incremental mensal estimada se a conversão subir de ${formatPercentage(parsedInputs.currentConversionRate)} para ${formatPercentage(parsedInputs.projectedConversionRate)}.`
                  : 'Receita incremental mensal estimada com base nas premissas informadas.'}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {contractsDelta >= 0 ? '+' : '-'}
                {formatDecimal(Math.abs(contractsDelta))} contratos por mês em potencial
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-border bg-canvas/80 px-5 py-5">
              <p className="text-sm leading-relaxed text-ink-secondary">
                Hoje, este cenário sugere cerca de {formatDecimal(results.currentContracts)}{' '}
                contratos por mês. Com a melhora projetada, o volume pode chegar a{' '}
                {formatDecimal(results.projectedContracts)} contratos por mês.
              </p>
            </div>

            {notices.length > 0 && (
              <div className="rounded-[1.35rem] border border-border bg-white/70 px-5 py-5">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Ajustes na leitura
                </div>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-secondary">
                  {notices.map(notice => (
                    <li key={notice}>{notice}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <MetricCard
                label="Faturamento atual estimado"
                value={formatCurrencyBRL(results.currentRevenue)}
                detail="Receita média mensal considerando a taxa atual de fechamento."
              />
              <MetricCard
                label="Faturamento potencial estimado"
                value={formatCurrencyBRL(results.potentialRevenue)}
                detail="Receita mensal projetada com a taxa de conversão desejada."
              />
              <MetricCard
                label="Ganho incremental de receita"
                value={formatCurrencyBRL(results.incrementalRevenue)}
                detail="Diferença direta entre o cenário atual e o cenário projetado."
                tone="highlight"
              />
              <MetricCard
                label="Lucro incremental estimado"
                value={formatCurrencyBRL(results.incrementalProfit)}
                detail="Ganho de lucro depois de aplicar a margem líquida informada."
                tone="highlight"
              />
              <MetricCard
                label="ROI mensal estimado"
                value={formatSignedPercentage(results.monthlyRoi)}
                detail="Retorno mensal estimado após descontar o investimento informado."
              />
              <MetricCard
                label="Payback aproximado"
                value={formatPaybackMonths(results.paybackMonths)}
                detail="Tempo estimado para recuperar o investimento a partir do lucro incremental."
              />
            </div>

            <p className="text-xs leading-relaxed text-ink-muted">
              Estimativa ilustrativa. Os resultados variam conforme mix de ticket, qualidade dos
              leads, capacidade operacional e ritmo real de implementação.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
