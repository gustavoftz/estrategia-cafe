import { cn } from '@/lib/utils'
import RoiCalculator from '@/components/roi/RoiCalculator'
import SectionHeader from '@/components/sections/SectionHeader'
import SectionWrapper from '@/components/sections/SectionWrapper'

type Background = 'canvas' | 'surface' | 'dark'

interface RoiCalculatorSectionProps {
  showHeader?: boolean
  noWrapper?: boolean
  background?: Background
  className?: string
}

export default function RoiCalculatorSection({
  showHeader = true,
  noWrapper = false,
  background = 'surface',
  className,
}: RoiCalculatorSectionProps) {
  const content = (
    <div className={cn('flex flex-col', showHeader ? 'gap-10' : 'gap-0', className)}>
      {showHeader && (
        <SectionHeader
          eyebrow="Simulação de impacto"
          title="Quanto a fricção comercial pode estar custando por mês"
          subtitle="Uma leitura consultiva para estimar o impacto de melhorar conversão, processo comercial e qualidade da decisão antes de investir com mais intensidade."
        />
      )}
      <RoiCalculator />
    </div>
  )

  if (noWrapper) {
    return content
  }

  return <SectionWrapper background={background}>{content}</SectionWrapper>
}
