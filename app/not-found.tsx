import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[calc(100vh-68px)] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow mb-4">Erro 404</p>
      <h1 className="font-serif text-h1 text-ink-primary mb-4">
        Página não encontrada
      </h1>
      <p className="text-ink-secondary text-lg mb-10 max-w-prose mx-auto">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary" size="lg">
          Voltar ao início
        </Button>
        <Button href="/servicos" variant="ghost" size="lg">
          Ver serviços
        </Button>
      </div>
    </div>
  )
}
