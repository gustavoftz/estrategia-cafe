'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container-content flex min-h-[calc(100vh-68px)] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow mb-4">Algo deu errado</p>
      <h1 className="font-serif text-h1 text-ink-primary mb-4">
        Erro inesperado
      </h1>
      <p className="text-ink-secondary text-lg mb-10 max-w-prose mx-auto">
        Ocorreu um problema ao carregar esta página. Tente novamente ou volte ao início.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button onClick={reset} variant="primary" size="lg">
          Tentar novamente
        </Button>
        <Button href="/" variant="ghost" size="lg">
          Voltar ao início
        </Button>
      </div>
    </div>
  )
}
