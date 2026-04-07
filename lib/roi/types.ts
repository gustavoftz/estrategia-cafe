export interface RoiInputs {
  monthlyQuoteRequests: number
  currentConversionRate: number
  averageContractValue: number
  netMarginRate: number
  projectedConversionRate: number
  monthlyInvestment: number
}

export interface RoiResults {
  currentContracts: number
  currentRevenue: number
  projectedContracts: number
  potentialRevenue: number
  incrementalRevenue: number
  incrementalProfit: number
  monthlyRoi: number | null
  paybackMonths: number | null
}

export type RoiFieldName = keyof RoiInputs
export type RoiBaseFieldName = Exclude<RoiFieldName, 'projectedConversionRate'>
export type RoiFormValues = Record<RoiFieldName, string>
export type RoiFieldErrors = Partial<Record<RoiFieldName, string>>

export type ScenarioPreset = 'conservador' | 'moderado' | 'otimista'
export type ProjectionMode = 'scenario' | 'manual'
export type DetailedAnalysisState = 'locked' | 'unlocked'

export interface ScenarioDefinition {
  preset: ScenarioPreset
  label: string
  multiplier: number
  description: string
}
