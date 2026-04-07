import {
  calculateProjectedRateFromScenario,
  defaultScenarioPreset,
} from '@/lib/roi/scenarios'
import type {
  RoiFieldErrors,
  RoiFieldName,
  RoiFormValues,
  RoiInputs,
  RoiResults,
  ScenarioPreset,
} from '@/lib/roi/types'

const percentageFields: RoiFieldName[] = [
  'currentConversionRate',
  'netMarginRate',
  'projectedConversionRate',
]

const percentageFieldSet = new Set<RoiFieldName>(percentageFields)

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const numberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
})

const inputNumberFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
  useGrouping: false,
})

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function sanitizePositiveNumber(value: number): number {
  if (!Number.isFinite(value)) {
    return 0
  }

  return Math.max(value, 0)
}

export function parseRoiNumberInput(value: string): number {
  const sanitized = value.replace(/[^\d,.-]/g, '').trim()

  if (!sanitized) {
    return 0
  }

  const hasComma = sanitized.includes(',')
  const hasDot = sanitized.includes('.')

  const commaParts = sanitized.split(',')
  const dotParts = sanitized.split('.')

  const hasGroupedCommas =
    commaParts.length > 1 && commaParts.slice(1).every((part) => part.length === 3)
  const hasGroupedDots =
    dotParts.length > 1 && dotParts.slice(1).every((part) => part.length === 3)

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

export function formatInputNumber(value: number): string {
  return inputNumberFormatter.format(value)
}

export const roiExampleFormValues: RoiFormValues = {
  monthlyQuoteRequests: '80',
  currentConversionRate: '14',
  averageContractValue: '8500',
  netMarginRate: '28',
  projectedConversionRate: formatInputNumber(
    calculateProjectedRateFromScenario(14, defaultScenarioPreset)
  ),
  monthlyInvestment: '9000',
}

export function getRoiFieldErrors(values: RoiFormValues): RoiFieldErrors {
  const errors: RoiFieldErrors = {}

  for (const field of Object.keys(values) as RoiFieldName[]) {
    const rawValue = values[field].trim()

    if (!rawValue) {
      continue
    }

    const parsedValue = parseRoiNumberInput(rawValue)

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

export function hasRoiFieldErrors(errors: RoiFieldErrors): boolean {
  return Object.keys(errors).length > 0
}

export function parseRoiFormValues(values: RoiFormValues): RoiInputs {
  return {
    monthlyQuoteRequests: sanitizePositiveNumber(parseRoiNumberInput(values.monthlyQuoteRequests)),
    currentConversionRate: clamp(
      sanitizePositiveNumber(parseRoiNumberInput(values.currentConversionRate)),
      0,
      100
    ),
    averageContractValue: sanitizePositiveNumber(parseRoiNumberInput(values.averageContractValue)),
    netMarginRate: clamp(sanitizePositiveNumber(parseRoiNumberInput(values.netMarginRate)), 0, 100),
    projectedConversionRate: clamp(
      sanitizePositiveNumber(parseRoiNumberInput(values.projectedConversionRate)),
      0,
      100
    ),
    monthlyInvestment: sanitizePositiveNumber(parseRoiNumberInput(values.monthlyInvestment)),
  }
}

export function calculateRoiResults(inputs: RoiInputs): RoiResults {
  const currentContracts = (inputs.monthlyQuoteRequests * inputs.currentConversionRate) / 100
  const currentRevenue = currentContracts * inputs.averageContractValue

  const projectedContracts = (inputs.monthlyQuoteRequests * inputs.projectedConversionRate) / 100
  const potentialRevenue = projectedContracts * inputs.averageContractValue

  const incrementalRevenue = potentialRevenue - currentRevenue
  const incrementalProfit = (incrementalRevenue * inputs.netMarginRate) / 100

  const monthlyRoi =
    inputs.monthlyInvestment > 0
      ? ((incrementalProfit - inputs.monthlyInvestment) / inputs.monthlyInvestment) * 100
      : null

  const paybackMonths = incrementalProfit > 0 ? inputs.monthlyInvestment / incrementalProfit : null

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

  const unit = value >= 2 ? 'meses' : 'mês'

  return `${numberFormatter.format(value)} ${unit}`
}

export function getHeadlineNarrative(inputs: RoiInputs, results: RoiResults): string {
  if (results.incrementalRevenue <= 0) {
    return 'Com as premissas atuais, a projeção ainda não abre espaço para ganho incremental consistente.'
  }

  if (results.monthlyRoi !== null && results.monthlyRoi < 0) {
    return 'Existe oportunidade de crescimento de receita, mas o investimento estimado ainda supera o retorno líquido esperado.'
  }

  if (results.monthlyRoi !== null && results.monthlyRoi >= 100) {
    return 'O cenário indica uma oportunidade relevante: a melhora de conversão mais do que cobre o investimento mensal estimado.'
  }

  return 'Há espaço real para capturar mais receita com o mesmo volume de oportunidades, desde que a execução comercial sustente a melhora projetada.'
}

export function getOpportunitySignalSummary(inputs: RoiInputs, results: RoiResults): string {
  if (results.incrementalRevenue <= 0) {
    return 'Pelo desenho atual, a leitura aponta mais para revisão de premissas e gargalos do que para uma oportunidade financeira já madura.'
  }

  if (results.incrementalProfit <= 0) {
    return 'Existe potencial de receita, mas ele ainda não se converte em retorno líquido consistente. A oportunidade parece mais de eficiência do que de escala.'
  }

  if (results.monthlyRoi !== null && results.monthlyRoi >= 100) {
    return `Com o mesmo volume de oportunidades, uma melhora plausível de conversão pode abrir uma janela relevante de captura comercial, sem depender primeiro de mais demanda.`
  }

  if (results.incrementalRevenue >= inputs.averageContractValue) {
    return 'O diagnóstico sugere que já existe dinheiro suficiente em jogo para justificar uma conversa séria sobre processo, proposta e conversão.'
  }

  return 'A leitura indica uma oportunidade comercial concreta, mas sensível à disciplina operacional e à consistência da execução.'
}

const scenarioInterpretationThresholds: Record<
  ScenarioPreset,
  { promisingRoi: number; promisingPayback: number }
> = {
  conservador: { promisingRoi: 40, promisingPayback: 8 },
  moderado: { promisingRoi: 60, promisingPayback: 7 },
  otimista: { promisingRoi: 80, promisingPayback: 6 },
}

function getScenarioLeadIn(scenarioPreset: ScenarioPreset): string {
  if (scenarioPreset === 'conservador') {
    return 'No cenário conservador'
  }

  if (scenarioPreset === 'moderado') {
    return 'No cenário moderado'
  }

  return 'No cenário otimista'
}

export function getInterpretationSummary(
  scenarioPreset: ScenarioPreset,
  monthlyRoi: number | null,
  incrementalProfit: number,
  paybackMonths: number | null
): string {
  const scenarioLeadIn = getScenarioLeadIn(scenarioPreset)
  const thresholds = scenarioInterpretationThresholds[scenarioPreset]

  if (
    incrementalProfit <= 0 ||
    monthlyRoi === null ||
    monthlyRoi < 0 ||
    paybackMonths === null ||
    paybackMonths > 18
  ) {
    return `${scenarioLeadIn}, a leitura ainda é fraca ou inconclusiva. A hipótese não sustenta retorno líquido com segurança suficiente, então faz mais sentido revisar premissas, margem e conversão antes de tratar isso como prioridade de investimento.`
  }

  if (
    monthlyRoi >= thresholds.promisingRoi &&
    paybackMonths <= thresholds.promisingPayback
  ) {
    return `${scenarioLeadIn}, a hipótese parece promissora dentro de uma leitura sóbria. O retorno estimado cobre o investimento em uma faixa administrável e o payback permanece compatível com um cenário comercial plausível, desde que a execução acompanhe a projeção.`
  }

  return `${scenarioLeadIn}, a hipótese parece viável, mas sensível à margem. O retorno existe, porém pequenas variações de margem líquida, ticket médio ou ritmo de fechamento podem alterar a atratividade financeira deste desenho.`
}

export function getMarginSensitivitySummary(inputs: RoiInputs, results: RoiResults): string {
  if (results.incrementalRevenue <= 0) {
    return 'Como a receita incremental ainda não ficou positiva, a margem deixa de ser a variável mais sensível neste desenho. O foco principal continua sendo melhorar a conversão ou revisar a projeção.'
  }

  const lowerMargin = Math.max(inputs.netMarginRate - 5, 0)
  const higherMargin = Math.min(inputs.netMarginRate + 5, 100)
  const lowerProfit = (results.incrementalRevenue * lowerMargin) / 100
  const higherProfit = (results.incrementalRevenue * higherMargin) / 100

  return `Se a margem líquida real operar em ${formatPercentage(lowerMargin)}, o lucro incremental cairia para ${formatCurrencyBRL(lowerProfit)}. Se operar em ${formatPercentage(higherMargin)}, ele subiria para ${formatCurrencyBRL(higherProfit)}.`
}

export function getResultSuggestionSummary(inputs: RoiInputs, results: RoiResults): string {
  if (results.incrementalRevenue <= 0) {
    return 'Neste desenho, ainda faz mais sentido diagnosticar gargalos do que decidir investimento.'
  }

  if (results.monthlyRoi !== null && results.monthlyRoi >= 50) {
    return 'A projeção sugere que existe espaço para investir em melhoria comercial com boa margem de segurança.'
  }

  if (inputs.currentConversionRate < 10) {
    return 'A prioridade provavelmente está em proposta, jornada e qualificação antes de ampliar aquisição.'
  }

  return 'O cenário sugere uma oportunidade concreta, mas dependente de disciplina operacional para transformar intenção em fechamento.'
}

export function getRecommendedNextSteps(inputs: RoiInputs, results: RoiResults): string[] {
  const recommendations: string[] = []

  if (inputs.currentConversionRate < 10) {
    recommendations.push(
      'Revisar proposta de valor, argumentos e pontos de conversão antes de pensar em mais tráfego.'
    )
  } else {
    recommendations.push(
      'Mapear em qual etapa do processo comercial hoje ocorre a maior perda entre oportunidade e fechamento.'
    )
  }

  if (inputs.netMarginRate < 20) {
    recommendations.push(
      'Validar a margem líquida real por contrato para evitar decisões guiadas por receita e não por lucro.'
    )
  } else {
    recommendations.push(
      'Cruzar a projeção com capacidade operacional para garantir que o ganho seja absorvido sem queda na experiência comercial.'
    )
  }

  if (results.incrementalProfit > inputs.monthlyInvestment) {
    recommendations.push(
      'Estruturar um plano de 60 a 90 dias com metas claras de conversão, tempo de resposta e qualificação comercial.'
    )
  } else {
    recommendations.push(
      'Refinar ticket, margem e velocidade de resposta para melhorar o retorno antes de ampliar o investimento mensal.'
    )
  }

  recommendations.push(
    'Usar um diagnóstico para identificar a principal fricção entre mensagem, site, processo comercial e operação.'
  )

  return recommendations
}
