import type { Metadata } from 'next'
import SectionWrapper from '@/components/sections/SectionWrapper'

export const metadata: Metadata = {
  title: 'Termos de Serviço | estrategia.cafe',
  description:
    'Termos de uso do site estrategia.cafe — condições de acesso, propriedade intelectual e limites de responsabilidade.',
  alternates: {
    canonical: 'https://estrategia.cafe/termos',
  },
}

export default function TermosPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-4 max-w-[640px]">
          <span className="eyebrow">Legal</span>
          <h1 className="text-h1 font-serif text-ink-primary">Termos de Serviço</h1>
          <p className="text-base text-ink-secondary leading-relaxed">
            Última atualização: 7 de abril de 2026
          </p>
        </div>
      </SectionWrapper>

      {/* Content */}
      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-sm text-ink-secondary leading-relaxed max-w-prose">

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site <strong className="font-semibold text-ink-primary">estrategia.cafe</strong>,
              você concorda com as condições descritas neste documento. Caso não concorde com
              qualquer parte destes termos, recomendamos que não utilize o site.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">2. Natureza do site</h2>
            <p>
              Este site tem caráter institucional e informativo. Seu objetivo é apresentar a
              consultoria estrategia.cafe, descrever as frentes de trabalho e possibilitar o início
              de uma conversa comercial.
            </p>
            <p>
              O conteúdo publicado — textos, metodologias, estudos de caso e estruturas de análise —
              reflete uma perspectiva profissional e não constitui aconselhamento jurídico,
              financeiro ou contábil. Resultados descritos em estudos de caso são referências
              contextuais, não garantias de desempenho para outros projetos.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">3. Formulário de contato</h2>
            <p>
              O preenchimento e envio do formulário de contato não configura contrato, proposta
              formal ou qualquer obrigação entre as partes. Representa apenas uma manifestação de
              interesse em iniciar uma conversa.
            </p>
            <p>
              A estrategia.cafe responderá os contatos recebidos a seu critério e sem prazo
              garantido, priorizando os que demonstrem compatibilidade com o perfil de clientes
              atendidos.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">4. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site — incluindo textos, estruturas, metodologias, nomenclaturas
              e elementos visuais — é de propriedade da estrategia.cafe, salvo indicação contrária.
            </p>
            <p>
              É permitida a reprodução parcial para fins pessoais ou educacionais, desde que com
              atribuição explícita à estrategia.cafe e sem fins comerciais. A reprodução integral ou
              comercial sem autorização prévia por escrito é proibida.
            </p>
            <p>
              É expressamente vedado o uso automatizado do conteúdo deste site para treinamento,
              ajuste fino ou alimentação de modelos de inteligência artificial, sistemas de
              aprendizado de máquina ou bases de dados similares, independentemente da finalidade
              comercial ou não comercial, sem autorização prévia e por escrito da estrategia.cafe.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">5. Links externos</h2>
            <p>
              Este site pode conter links para recursos externos. A estrategia.cafe não se
              responsabiliza pelo conteúdo, disponibilidade ou políticas de privacidade de sites de
              terceiros. O acesso a esses links é de responsabilidade do usuário.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">6. Limitação de responsabilidade</h2>
            <p>
              A estrategia.cafe não garante que o site estará disponível de forma ininterrupta ou
              livre de erros. O conteúdo pode ser alterado, suspenso ou descontinuado a qualquer
              momento sem aviso prévio.
            </p>
            <p>
              Na máxima extensão permitida pela legislação aplicável, a estrategia.cafe não se
              responsabiliza por danos diretos, indiretos ou consequentes decorrentes do acesso ou
              uso das informações disponíveis neste site.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">7. Privacidade</h2>
            <p>
              O tratamento de dados pessoais coletados neste site é descrito em nossa{' '}
              <a
                href="/politica-de-privacidade"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                Política de Privacidade
              </a>
              , que integra estes Termos de Serviço.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">8. Legislação aplicável</h2>
            <p>
              Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de
              São Paulo/SP para dirimir quaisquer controvérsias decorrentes deste documento, com
              renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">9. Alterações</h2>
            <p>
              Estes termos podem ser atualizados a qualquer momento. A versão vigente será sempre
              identificada pela data de atualização no topo desta página. O uso continuado do site
              após alterações implica a aceitação das novas condições.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">10. Contato</h2>
            <p>
              Dúvidas sobre estes termos podem ser enviadas para{' '}
              <a
                href="mailto:contato@estrategia.cafe"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                contato@estrategia.cafe
              </a>
              .
            </p>
          </section>

        </article>
      </SectionWrapper>
    </>
  )
}
