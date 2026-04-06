import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = createMetadata({
  title: 'CRO para e-commerce: como aumentar a conversão sem aumentar o tráfego',
  description:
    'A maioria dos e-commerces perde mais em conversão do que ganharia em tráfego. O que é CRO, onde estão os maiores problemas de conversão em lojas online e como priorizar as intervenções.',
  path: '/blog/cro-para-ecommerce',
})

export default function ArticlePage() {
  return (
    <>
      <SectionWrapper background="canvas" className="border-b border-border">
        <div className="flex flex-col gap-6 max-w-[700px]">
          <div className="flex items-center gap-3">
            <Tag variant="accent">Conversão</Tag>
            <span className="text-xs text-ink-muted">Abr 2026</span>
            <span className="text-xs text-ink-muted">·</span>
            <span className="text-xs text-ink-muted">9 min de leitura</span>
          </div>
          <h1 className="text-display font-serif text-ink-primary leading-tight">
            CRO para e-commerce:{' '}
            <span className="text-ink-secondary">como aumentar a conversão sem aumentar o tráfego</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-[56ch]">
            A taxa média de conversão de e-commerces brasileiros gira em torno de 1 a 2%. Isso significa que 98 de cada 100 visitantes vão embora sem comprar. Aumentar esse número de 1% para 2% dobra a receita sem gastar um real a mais em aquisição.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="canvas" variant="narrow">
        <article className="flex flex-col gap-10 text-base text-ink-secondary leading-relaxed">

          <p>
            CRO — Conversion Rate Optimization, ou otimização da taxa de conversão — é o processo sistemático de aumentar a proporção de visitantes que realizam uma ação desejada: compra, cadastro, adição ao carrinho, contato. Em e-commerce, a métrica mais relevante é a conversão de sessão em compra.
          </p>
          <p>
            A maioria dos gestores de e-commerce foca em tráfego. É compreensível — mais visitantes, potencialmente mais vendas. Mas o cálculo raramente é feito até o final: dobrar o tráfego com o mesmo custo de aquisição é muito difícil. Dobrar a taxa de conversão — passando de 1% para 2% — é trabalhoso, mas está dentro do controle da operação.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Por que a maioria dos e-commerces tem conversão baixa
            </h2>
            <p>
              Conversão baixa raramente tem uma causa única. É quase sempre uma combinação de problemas em diferentes pontos da jornada. Mas há padrões que se repetem com frequência.
            </p>
          </div>

          <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-sans font-semibold text-ink-primary">
                Página de produto fraca
              </h3>
              <p>
                A página de produto é onde a decisão de compra acontece — ou não acontece. Em muitos e-commerces, ela entrega o básico: foto, nome, preço, botão de comprar. O que não entrega é persuasão: o que torna este produto único? Para quem ele é ideal? Quais são as objeções mais comuns e como respondê-las? O que outros compradores disseram?
              </p>
              <p>
                Uma página de produto que não responde às perguntas do visitante no momento em que ele tem essas perguntas está perdendo a venda. O visitante não vai buscar mais informações — vai embora.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-sans font-semibold text-ink-primary">
                Checkout com atrito desnecessário
              </h3>
              <p>
                O checkout é o ponto de maior abandono em qualquer e-commerce. Cada campo a mais, cada etapa adicional, cada momento de incerteza é uma oportunidade de perda. Obrigar o cliente a criar uma conta antes de comprar custa em média 30% das conversões. Formulários longos, opções de pagamento limitadas, frete calculado somente no final — cada um desses elementos contribui para o abandono.
              </p>
              <div className="border-l-2 border-accent pl-6 py-1">
                <p className="text-sm text-ink-secondary italic">
                  A regra geral: cada campo obrigatório a mais no checkout custa conversão. Pergunte apenas o que é absolutamente necessário para finalizar o pedido.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-sans font-semibold text-ink-primary">
                Falta de confiança na hora de comprar
              </h3>
              <p>
                Comprar online de uma marca que o visitante não conhece ainda é um ato de confiança — especialmente no Brasil, onde fraude em e-commerce é uma preocupação real. Selos de segurança, política de devolução clara, avaliações de clientes reais, formas de contato visíveis — todos esses elementos existem para reduzir a ansiedade de compra.
              </p>
              <p>
                E-commerces que não investem em prova social e sinais de confiança perdem especialmente em segmentos de ticket médio mais alto, onde a hesitação antes da compra é maior.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-sans font-semibold text-ink-primary">
                Experiência mobile quebrada
              </h3>
              <p>
                No Brasil, mais de 70% das sessões de e-commerce vêm de dispositivos móveis. Mas boa parte dos e-commerces foi projetada prioritariamente para desktop. O resultado é que a experiência mobile é funcional, mas não fluida: imagens que não carregam rápido o suficiente, botões pequenos demais para dedos, processo de checkout que é uma experiência frustrante em tela pequena.
              </p>
              <p>
                Em muitos e-commerces, a taxa de conversão mobile é menos da metade da taxa desktop. Isso não é inevitável — é um problema de priorização de design.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-sans font-semibold text-ink-primary">
                Tráfego desalinhado com o produto
              </h3>
              <p>
                Nem todo problema de conversão está no site. Às vezes o tráfego simplesmente não está alinhado com o que é vendido — a segmentação atrai o público errado, ou a promessa dos anúncios não corresponde ao que o visitante encontra na loja.
              </p>
              <p>
                Quando esse é o caso, otimizar o site tem impacto limitado. O problema está na aquisição — e a solução é realinhar a mensagem dos canais com a proposta real do produto.
              </p>
            </div>

          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              Como priorizar as intervenções de CRO
            </h2>
            <p>
              O erro mais comum em projetos de CRO é começar por hipóteses — testando mudanças baseadas em intuição ou em benchmarks genéricos de outras indústrias. O ponto de partida correto é diagnóstico: entender onde os visitantes estão abandonando a jornada e por quê.
            </p>
            <p>
              Isso requer dados. Ferramentas de analytics mostram onde o abandono acontece (qual página, qual etapa). Ferramentas de gravação de sessão mostram como os usuários navegam e onde ficam travados. Pesquisas rápidas mostram quais dúvidas e objeções impedem a compra.
            </p>
            <p>
              Com esse mapa em mãos, a priorização segue uma lógica simples: intervenha primeiro onde o impacto potencial é maior e o esforço de implementação é menor. Uma mudança no CTA da página de produto pode ser testada em horas. Uma reestruturação completa do checkout leva semanas. Ambas podem ter impacto significativo — mas a primeira valida a hipótese mais rapidamente.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              O papel dos testes A/B — e seus limites
            </h2>
            <p>
              Testes A/B são a ferramenta principal de CRO em e-commerces com volume de tráfego suficiente. A lógica é simples: você cria duas versões de uma página ou elemento, divide o tráfego entre elas e mede qual converte mais. A versão vencedora é implementada, e o ciclo recomeça.
            </p>
            <p>
              O problema é que testes A/B requerem volume estatístico para ter significância. Um e-commerce com 10.000 sessões mensais pode testar elementos de alto impacto com resultados confiáveis. Um e-commerce com 500 sessões mensais vai demorar meses para ter dados conclusivos em qualquer teste.
            </p>
            <p>
              Para operações de menor volume, a abordagem mais eficiente é combinar análise qualitativa (sessões gravadas, pesquisas, análise heurística) com implementação direta das mudanças de maior confiança — sem esperar por testes formais que nunca terão volume suficiente para ser conclusivos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-h3 font-serif text-ink-primary">
              CRO como processo, não como projeto
            </h2>
            <p>
              O erro mais caro em CRO é tratá-lo como projeto com início, meio e fim. Uma rodada de otimizações, um relatório de resultados, e pronto. O comportamento do consumidor muda. A concorrência muda. O mix de tráfego muda. O que convertia bem há um ano pode não ser mais o padrão hoje.
            </p>
            <p>
              CRO sustentável é um ciclo: medir, identificar oportunidade, propor hipótese, testar, medir resultado, documentar aprendizado, recomeçar. É um processo permanente de melhoria marginal — que, acumulado ao longo do tempo, produz saltos significativos de performance.
            </p>
            <p>
              A diferença entre e-commerces com conversão de 1% e conversão de 3% quase nunca é uma única grande intervenção. É a soma de dezenas de pequenas melhorias, cada uma identificada por diagnóstico e validada por dados.
            </p>
          </div>

        </article>
      </SectionWrapper>

      <CTASection
        eyebrow="Conversão e CRO"
        title="Se o seu e-commerce tem tráfego mas não está convertendo como deveria, o problema raramente é falta de visitantes."
        subtitle="O Diagnóstico Estratégico avalia a jornada de compra, identifica os pontos de abandono e recomenda as intervenções de maior impacto no seu contexto específico."
        primaryCta={{ label: 'Solicitar o Diagnóstico Estratégico', href: '/diagnostico-estrategico' }}
        secondaryCta={{ label: 'Ver os estudos de caso', href: '/estudos-de-caso' }}
      />
    </>
  )
}
