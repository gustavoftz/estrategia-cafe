import RoiCalculator from '@/components/roi/RoiCalculator'
import SectionHeader from '@/components/sections/SectionHeader'
import SectionWrapper from '@/components/sections/SectionWrapper'

export default function RoiCalculatorSection() {
  return (
    <SectionWrapper background="surface">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Simulação de impacto"
          title="Quanto a fricção comercial pode estar custando por mês"
          subtitle="Uma leitura consultiva para estimar o impacto de melhorar conversão, processo comercial e qualidade da decisão antes de investir com mais intensidade."
        />
        <RoiCalculator />
      </div>
    </SectionWrapper>
  )
}
