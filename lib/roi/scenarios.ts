import type { ScenarioDefinition, ScenarioPreset } from '@/lib/roi/types'

const ABSOLUTE_PLAUSIBLE_CONVERSION_CAP = 45
const PLAUSIBLE_INCREMENTAL_GAIN_CAP = 18

export const defaultScenarioPreset: ScenarioPreset = 'moderado'

export const scenarioDefinitions: ScenarioDefinition[] = [
  {
    preset: 'conservador',
    label: 'Conservador',
    multiplier: 1.1,
    description: 'Melhoria pontual de clareza, resposta e organização comercial.',
  },
  {
    preset: 'moderado',
    label: 'Moderado',
    multiplier: 1.2,
    description: 'Melhoria combinada de posicionamento, processo e conversão.',
  },
  {
    preset: 'otimista',
    label: 'Otimista',
    multiplier: 1.35,
    description:
      'Evolução mais forte da performance comercial, ainda dentro de uma faixa plausível.',
  },
]

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function getScenarioDefinition(preset: ScenarioPreset): ScenarioDefinition {
  return scenarioDefinitions.find((scenario) => scenario.preset === preset) ?? scenarioDefinitions[1]
}

export function getPlausibleProjectedRateCap(currentRate: number): number {
  const normalizedRate = clamp(currentRate, 0, 100)
  const boundedAbsoluteCap = clamp(ABSOLUTE_PLAUSIBLE_CONVERSION_CAP, 0, 100)
  const boundedIncrementalCap = normalizedRate + PLAUSIBLE_INCREMENTAL_GAIN_CAP

  return Math.max(normalizedRate, Math.min(100, boundedAbsoluteCap, boundedIncrementalCap))
}

export function limitProjectedConversionRate(rate: number, currentRate: number): number {
  return clamp(rate, 0, getPlausibleProjectedRateCap(currentRate))
}

export function calculateProjectedRateFromScenario(
  currentRate: number,
  preset: ScenarioPreset
): number {
  const normalizedCurrentRate = clamp(currentRate, 0, 100)
  const projectedRate = normalizedCurrentRate * getScenarioDefinition(preset).multiplier

  return limitProjectedConversionRate(projectedRate, normalizedCurrentRate)
}

export function getScenarioSummary(preset: ScenarioPreset): string {
  return getScenarioDefinition(preset).description
}
