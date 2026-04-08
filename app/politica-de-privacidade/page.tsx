import type { Metadata } from 'next'
import SectionWrapper from '@/components/sections/SectionWrapper'

export const metadata: Metadata = {
  title: 'Política de Privacidade | estrategia.cafe',
  description:
    'Como a estrategia.cafe coleta, usa e protege dados pessoais — em conformidade com a LGPD.',
  alternates: {
    canonical: 'https://estrategia.cafe/politica-de-privacidade',
  },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-4 max-w-[640px]">
          <span className="eyebrow">Legal</span>
          <h1 className="text-h1 font-serif text-ink-primary">Política de Privacidade</h1>
          <p className="text-base text-ink-secondary leading-relaxed">
            Última atualização: 7 de abril de 2026
          </p>
        </div>
      </SectionWrapper>

      {/* Content */}
      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-sm text-ink-secondary leading-relaxed max-w-prose">

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">1. Quem somos</h2>
            <p>
              A <strong className="font-semibold text-ink-primary">estrategia.cafe</strong> é uma
              consultoria estratégica digital com foco em posicionamento, conversão, aquisição e
              operação comercial por WhatsApp. Este site serve como canal institucional e de contato.
            </p>
            <p>
              O encarregado pelo tratamento de dados pessoais (art. 41 da LGPD) é{' '}
              <strong className="font-semibold text-ink-primary">Gustavo Caetano</strong>, que pode
              ser contactado pelo e-mail{' '}
              <a
                href="mailto:gustavo@estrategia.cafe"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                gustavo@estrategia.cafe
              </a>{' '}
              ou pelo WhatsApp{' '}
              <a
                href="https://wa.me/5561999885276"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                +55 61 99988-5276
                <span className="sr-only">(abre em nova aba)</span>
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">2. Dados coletados</h2>
            <p>Coletamos dados de duas formas:</p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 pl-4 border-l border-border">
                <p className="font-semibold text-ink-primary text-sm">Formulário de contato</p>
                <p>
                  Ao preencher o formulário, você nos fornece: nome, empresa, site, segmento,
                  descrição do desafio, histórico de tentativas, frente mais urgente e forma
                  preferida de contato. Esses dados são utilizados exclusivamente para responder ao
                  seu contato e avaliar se há compatibilidade para uma colaboração.
                </p>
              </div>
              <div className="flex flex-col gap-2 pl-4 border-l border-border">
                <p className="font-semibold text-ink-primary text-sm">
                  Cookies analíticos (Google Analytics 4)
                </p>
                <p>
                  Com o seu consentimento, utilizamos o Google Analytics 4 para coletar dados
                  agregados de navegação — como páginas visitadas, tempo de permanência e origem do
                  tráfego. Esses dados não identificam você individualmente. Nenhum dado é
                  compartilhado com terceiros para fins publicitários ou de revenda.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">3. Base legal</h2>
            <p>
              O tratamento de dados neste site está fundamentado na{' '}
              <strong className="font-semibold text-ink-primary">
                Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)
              </strong>
              , nas seguintes bases:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              <li className="flex gap-3">
                <span className="shrink-0 mt-[6px] w-[4px] h-[4px] rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-ink-primary">Consentimento</strong> —
                  para a ativação de cookies analíticos.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 mt-[6px] w-[4px] h-[4px] rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-ink-primary">Legítimo interesse</strong>{' '}
                  — para responder a contatos e avaliações de compatibilidade comercial iniciados
                  pelo próprio usuário.
                </span>
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">4. Cookies</h2>
            <p>
              Utilizamos um único cookie próprio (<code className="font-mono text-xs bg-surface px-1 py-0.5">ec_consent</code>) para
              registrar a sua preferência de consentimento. Ele não rastreia navegação nem coleta
              dados pessoais.
            </p>
            <p>
              Caso você aceite os cookies analíticos, o Google Analytics 4 instalará seus próprios
              cookies para mensuração de uso. Você pode revogar esse consentimento a qualquer
              momento limpando os dados do site nas configurações do seu navegador.
            </p>
            <p>
              O Google atua como operador de dados nos termos da LGPD, com base em{' '}
              <strong className="font-semibold text-ink-primary">
                Acordo de Processamento de Dados (DPA)
              </strong>{' '}
              celebrado com a estrategia.cafe. Para mais informações sobre como o Google trata esses
              dados, consulte a{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                Política de Privacidade do Google
                <span className="sr-only">(abre em nova aba)</span>
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">5. Retenção de dados</h2>
            <p>
              Dados enviados pelo formulário de contato são retidos pelo tempo necessário para
              conduzir o processo de avaliação e eventual engajamento comercial. Caso não haja
              continuidade, os dados são excluídos após 12 meses.
            </p>
            <p>
              Você pode solicitar a exclusão antecipada a qualquer momento pelo e-mail{' '}
              <a
                href="mailto:contato@estrategia.cafe"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                contato@estrategia.cafe
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">6. Seus direitos (LGPD)</h2>
            <p>
              Como titular de dados, você tem direito a:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                'Confirmar a existência de tratamento dos seus dados',
                'Acessar os dados que possuímos sobre você',
                'Corrigir dados incompletos, inexatos ou desatualizados',
                'Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários',
                'Solicitar a portabilidade dos seus dados',
                'Revogar o consentimento dado para cookies analíticos',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="shrink-0 mt-[6px] w-[4px] h-[4px] rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
              <a
                href="mailto:contato@estrategia.cafe"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                contato@estrategia.cafe
              </a>
              . Responderemos em até 15 dias úteis.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">7. Segurança</h2>
            <p>
              Adotamos medidas técnicas adequadas para proteger os dados coletados contra acesso não
              autorizado, perda ou divulgação indevida. O site é servido exclusivamente por HTTPS.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">8. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Alterações relevantes serão
              comunicadas com destaque na data de atualização no topo desta página. Recomendamos a
              leitura periódica.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-base font-serif text-ink-primary">9. Contato</h2>
            <p>
              Dúvidas sobre esta política ou sobre o tratamento de dados pessoais podem ser enviadas
              ao encarregado pelo e-mail{' '}
              <a
                href="mailto:gustavo@estrategia.cafe"
                className="underline underline-offset-2 hover:text-ink-primary"
              >
                gustavo@estrategia.cafe
              </a>
              . Responderemos em até 15 dias úteis.
            </p>
          </section>

        </article>
      </SectionWrapper>
    </>
  )
}
