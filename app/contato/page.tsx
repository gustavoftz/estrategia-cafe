import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = createMetadata({
  title: 'Contato',
  description:
    'Inicie uma conversa estratégica. Não é uma página de orçamento — é o começo de um diagnóstico para entender onde está a principal fricção no seu sistema comercial.',
  path: '/contato',
})

const forWhom = [
  { label: 'Empresas que investem em digital mas não estão satisfeitas com o retorno' },
  { label: 'Líderes que sentem que algo não está funcionando mas não sabem exatamente o quê' },
  { label: 'Negócios que querem estruturar melhor antes de escalar investimento' },
  { label: 'Quem já tentou outras soluções e quer uma abordagem mais estratégica e integrada' },
]

export default function ContatoPage() {
  return (
    <>
      {/* 1. Abertura — enquadrar como conversa, não orçamento */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-8 max-w-[680px]">
          <span className="eyebrow">Contato</span>
          <h1 className="text-display font-serif text-ink-primary">
            Esta não é uma página de orçamento.{' '}
            <span className="text-ink-secondary">É o início de uma conversa estratégica.</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[54ch]">
            O objetivo da primeira conversa não é apresentar uma proposta. É entender o momento da sua empresa, o que já foi tentado e onde está a principal fricção. A partir disso, o próximo passo fica claro.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Para quem faz sentido */}
      <SectionWrapper background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="Para quem faz sentido"
            title="Esta conversa é útil se você se reconhece em algum destes cenários"
          />
          <ul className="flex flex-col divide-y divide-border">
            {forWhom.map(({ label }) => (
              <li key={label} className="flex items-start gap-4 py-5">
                <span className="mt-[9px] shrink-0 w-[5px] h-[5px] rounded-full bg-accent" aria-hidden="true" />
                <span className="text-base text-ink-secondary leading-relaxed">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* 3. Formulário estratégico */}
      <SectionWrapper background="canvas">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Formulário de contato"
              title="Quanto mais contexto, melhor a conversa"
            />
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[42ch]">
              As perguntas abaixo ajudam a entender o seu contexto antes da conversa. Não são obrigatórias — mas quanto mais você responder, mais produtivo será o primeiro contato.
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>

      {/* 4. O que acontece depois */}
      <SectionWrapper background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeader
            eyebrow="O que acontece depois"
            title="Sem pitch. Sem proposta genérica."
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {[
                { step: '01', text: 'Vou ler sua mensagem com atenção antes de responder. Não é triagem automática.' },
                { step: '02', text: 'Se fizer sentido conversar, você receberá uma proposta de horário em até 48 horas úteis.' },
                { step: '03', text: 'A primeira conversa dura cerca de 45 minutos. O foco é diagnóstico — não apresentação de serviços.' },
                { step: '04', text: 'Após a conversa, se houver encaixe, apresento uma proposta específica para o seu contexto.' },
              ].map(({ step, text }) => (
                <div key={step} className="flex gap-6 items-start">
                  <span className="font-serif text-2xl text-border-strong leading-none shrink-0 mt-0.5">{step}</span>
                  <p className="text-sm text-ink-secondary leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Canal alternativo */}
      <SectionWrapper background="canvas" noPadding className="py-10 md:py-14 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <p className="text-sm text-ink-muted">Canal alternativo</p>
          <a
            href="mailto:contato@estrategia.cafe"
            className="text-sm font-medium text-ink-primary hover:text-accent transition-colors duration-150"
          >
            contato@estrategia.cafe
          </a>
        </div>
      </SectionWrapper>
    </>
  )
}
