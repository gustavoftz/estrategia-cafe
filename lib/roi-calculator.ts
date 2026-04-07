export interface RoiCalculatorInputs {
  monthlyQuoteRequests: number
  currentConversionRate: number
  averageContractValue: number
  netMarginRate: number
  projectedConversionRate: number
  monthlyInvestment: number
}

export type RoiCalculatorFieldName = keyof RoiCalculatorInputs
export type RoiCalculatorFormValues = Record<RoiCalculatorFieldName, string>
export type RoiCalculatorFieldErrors = Partial<Record<RoiCalculatorFieldName, string>>

export interface RoiCalculatorResults {
  currentContracts: number
  currentRevenue: number
  projectedContracts: number
  potentialRevenue: number
  incrementalRevenue: number
  incrementalProfit: number
  monthlyRoi: number | null
  paybackMonths: number | null
}

const percentageFields: RoiCalculatorFieldName[] = [
  'currentConversionRate',
  'netMarginRate',
  'projectedConversionRate',
]

const percentageFieldSet = new Set<RoiCalculatorFieldName>(percentageFields)

export const roiCalculatorExampleValues: RoiCalculatorFormValues = {
  monthlyQuoteRequests: '80',
  currentConversionRate: '14',
  averageContractValue: '8500',
  netMarginRate: '28',
  projectedConversionRate: '19',
  monthlyInvestment: '9000',
}

function parseLocaleNumber(value: string): number {
  const sanitized = value.replace(/[^\d,.-]/g, '').trim()

  if (!sanitized) {
    return 0
  }

  const hasComma = sanitized.includes(',')
  const hasDot = sanitized.includes('.')

  const commaParts = sanitized.split(',')
  const dotParts = sanitized.split('.')

  const hasGroupedCommas =
    commaParts.length > 1 && commaParts.slice(1).every(part => part.length === 3)
  const hasGroupedDots = dotParts.length > 1 && dotParts.slice(1).every(part => part.length === 3)

  if (hasComma && hasDot) {
    return sanitized.lastIndexOf(',') > sanitized.lastIndexOf('.')
      ? Number(sanitized.replace(/\./g, '').replace(',', '.'))
      : Number(sanitized.replace(/,/g, ''))
  }

  if (hasComma) {
    if (hasGroupedCommas) {
      return Number(sanitized.replace(/,/g, ''))
    }

    return Number(sanitized.replace(',', '.'))
  }

  if (hasGroupedDots) {
    return Number(sanitized.replace(/\./g, ''))
  }

  return Number(sanitized)
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function sanitizePositiveNumber(value: number): number {
  if (!Number.isFinite(value)) {
    return 0
  }

  return Math.max(value, 0)
}

export function getRoiCalculatorFieldErrors(
  values: RoiCalculatorFormValues
): RoiCalculatorFieldErrors {
  const errors: RoiCalculatorFieldErrors = {}

  for (const field of Object.keys(values) as RoiCalculatorFieldName[]) {
    const rawValue = values[field].trim()

    if (!rawValue) {
      continue
    }

    const parsedValue = parseLocaleNumber(rawValue)

    if (!Number.isFinite(parsedValue)) {
      errors[field] = 'Use apenas números.'
      continue
    }

    if (parsedValue < 0) {
      errors[field] = 'Use um valor igual ou maior que zero.'
      continue
    }

    if (percentageFieldSet.has(field) && parsedValue > 100) {
      errors[field] = 'Percentuais devem ficar entre 0% e 100%.'
    }
  }

  return errors
}

export function hasRoiCalculatorFieldErrors(errors: RoiCalculatorFieldErrors): boolean {
  return Object.keys(errors).length > 0
}

export function parseRoiCalculatorFormValues(values: RoiCalculatorFormValues): RoiCalculatorInputs {
  return {
    monthlyQuoteRequests: sanitizePositiveNumber(parseLocaleNumber(values.monthlyQuoteRequests)),
    currentConversionRate: clamp(
      sanitizePositiveNumber(parseLocaleNumber(values.currentConversionRate)),
      0,
      100
    ),
    averageContractValue: sanitizePositiveNumber(parseLocaleNumber(values.averageContractValue)),
    netMarginRate: clamp(sanitizePositiveNumber(parseLocaleNumber(values.netMarginRate)), 0, 100),
    projectedConversionRate: clamp(
      sanitizePositiveNumber(parseLocaleNumber(values.projectedConversionRate)),
      0,
      100
    ),
    monthlyInvestment: sanitizePositiveNumber(parseLocaleNumber(values.monthlyInvestment)),
  }
}

export function calculateRoiCalculatorResults(
  inputs: RoiCalculatorInputs
): RoiCalculatorResults {
  const currentContracts =
    (inputs.monthlyQuoteRequests * inputs.currentConversionRate) / 100
  const currentRevenue = currentContracts * inputs.averageContractValue

  const projectedContracts =
    (inputs.monthlyQuoteRequests * inputs.projectedConversionRate) / 100
  const potentialRevenue = projectedContracts * inputs.averageContractValue

  const incrementalRevenue = potentialRevenue - currentRevenue
  const incrementalProfit = (incrementalRevenue * inputs.netMarginRate) / 100

  const monthlyRoi =
    inputs.monthlyInvestment > 0
      ? ((incrementalProfit - inputs.monthlyInvestment) / inputs.monthlyInvestment) * 100
      : null

  const paybackMonths =
    incrementalProfit > 0 ? inputs.monthlyInvestment / incrementalProfit : null

  return {
    currentContracts,
    currentRevenue,
    projectedContracts,
    potentialRevenue,
    incrementalRevenue,
    incrementalProfit,
    monthlyRoi,
    paybackMonths,
  }
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
})

export function formatCurrencyBRL(value: number): string {
  return currencyFormatter.format(value)
}

export function formatPercentage(value: number): string {
  return `${numberFormatter.format(value)}%`
}

export function formatSignedPercentage(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return 'N/A'
  }

  const signal = value > 0 ? '+' : value < 0 ? '-' : ''

  return `${signal}${numberFormatter.format(Math.abs(value))}%`
}

export function formatDecimal(value: number): string {
  return numberFormatter.format(value)
}

export function formatPaybackMonths(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return 'N/A'
  }

  const unit = value >= 2 ? 'meses' : 'mes'

  return `${numberFormatter.format(value)} ${unit === 'mes' ? 'mês' : unit}`
}
