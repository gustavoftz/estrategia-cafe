'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const frenteOptions = [
  { value: '', label: 'Selecione a frente mais urgente' },
  { value: 'posicionamento', label: 'Posicionamento e mensagem' },
  { value: 'site', label: 'Site e conversão' },
  { value: 'aquisicao', label: 'Aquisição orgânica (SEO)' },
  { value: 'midia', label: 'Mídia paga' },
  { value: 'whatsapp', label: 'Automação e operação por WhatsApp' },
  { value: 'outro', label: 'Outro / não sei ainda' },
]

const contatoOptions = [
  { value: '', label: 'Selecione a forma preferida' },
  { value: 'email', label: 'E-mail' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'video', label: 'Videochamada' },
]

interface FieldProps {
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}

function Field({ label, hint, required, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink-primary cursor-default">
      <span>
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </span>
      {hint && (
        <span className="text-xs font-normal text-ink-muted leading-snug">{hint}</span>
      )}
      {children}
    </label>
  )
}

const inputClass =
  'w-full rounded-[1rem] border border-border bg-canvas px-4 py-3 text-sm text-ink-primary shadow-[0_14px_40px_rgba(25,24,26,0.04)] transition-colors duration-150 placeholder:text-ink-muted focus:border-ink-primary focus:outline-none'

const textareaClass = cn(inputClass, 'resize-none min-h-[120px]')

function normalizeSiteUrl(value: string) {
  const site = value.trim()

  if (!site) {
    return ''
  }

  if (/^https?:\/\//i.test(site)) {
    return site
  }

  return `https://${site}`
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  const [data, setData] = useState({
    nome: '',
    empresa: '',
    retorno: '',
    site: '',
    segmento: '',
    desafio: '',
    tentativas: '',
    frente: '',
    contato: '',
    website: '',
  })

  const set = (field: keyof typeof data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !data.nome.trim() ||
      !data.empresa.trim() ||
      !data.retorno.trim() ||
      !data.segmento.trim() ||
      !data.desafio.trim() ||
      !data.frente
    ) {
      setError('Preencha os campos obrigatórios para enviar a mensagem.')
      setState('error')
      return
    }

    setState('submitting')
    setError('')

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          site: normalizeSiteUrl(data.site),
        }),
      })

      const result = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Não foi possível enviar sua mensagem agora.')
      }

      setData({
        nome: '',
        empresa: '',
        retorno: '',
        site: '',
        segmento: '',
        desafio: '',
        tentativas: '',
        frente: '',
        contato: '',
        website: '',
      })
      trackEvent('generate_lead', {
        form_name: 'contact_form',
        form_destination: 'contato',
        frente: data.frente,
        preferred_contact: data.contato || 'nao_informado',
      })
      setState('success')
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Não foi possível enviar sua mensagem agora.'
      )
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="editorial-panel px-8 py-12">
        <div className="relative flex flex-col gap-4">
          <span className="eyebrow text-accent">Mensagem enviada</span>
          <h3 className="text-h3 font-serif text-ink-primary">
            Vou ler com atenção antes de responder.
          </h3>
          <p className="max-w-[52ch] text-base text-ink-secondary leading-relaxed">
            Se fizer sentido conversar, você receberá uma proposta de horário em até 48 horas úteis.
            Obrigado pela confiança.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {/* Row: Nome + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Nome" required>
          <input
            type="text"
            required
            value={data.nome}
            onChange={set('nome')}
            placeholder="Seu nome"
            className={inputClass}
          />
        </Field>
        <Field label="Empresa" required>
          <input
            type="text"
            required
            value={data.empresa}
            onChange={set('empresa')}
            placeholder="Nome da empresa"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="E-mail ou WhatsApp para retorno" required>
          <input
            type="text"
            required
            value={data.retorno}
            onChange={set('retorno')}
            placeholder="seu@email.com ou +55 11 99999-9999"
            className={inputClass}
          />
        </Field>
        <Field label="Forma preferida de contato">
          <select
            value={data.contato}
            onChange={set('contato')}
            className={cn(inputClass, 'cursor-pointer')}
          >
            {contatoOptions.map(o => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Row: Site + Segmento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Site" hint="URL do site atual, se houver">
          <input
            type="text"
            value={data.site}
            onChange={set('site')}
            placeholder="seusite.com.br ou https://seusite.com.br"
            className={inputClass}
          />
        </Field>
        <Field label="Segmento" required>
          <input
            type="text"
            required
            value={data.segmento}
            onChange={set('segmento')}
            placeholder="Ex: e-commerce, serviços B2B, SaaS..."
            className={inputClass}
          />
        </Field>
      </div>

      {/* Principal desafio */}
      <Field
        label="Principal desafio hoje"
        hint="Descreva com clareza o que não está funcionando como deveria."
        required
      >
        <textarea
          required
          value={data.desafio}
          onChange={set('desafio')}
          placeholder="Qual é o problema central que você quer resolver?"
          className={textareaClass}
        />
      </Field>

      {/* O que já foi tentado */}
      <Field
        label="O que já foi tentado"
        hint="Soluções anteriores, agências, ferramentas, abordagens — e o resultado."
      >
        <textarea
          value={data.tentativas}
          onChange={set('tentativas')}
          placeholder="O que você já tentou? O que funcionou, o que não funcionou?"
          className={textareaClass}
        />
      </Field>

      {/* Frente mais urgente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Frente mais urgente" required>
          <select
            required
            value={data.frente}
            onChange={set('frente')}
            className={cn(inputClass, 'cursor-pointer')}
          >
            {frenteOptions.map(o => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="hidden" aria-hidden="true">
        <Field label="Website">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={set('website')}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="rounded-[1.5rem] border border-border bg-surface/70 px-5 py-5">
        <div className="mb-4 flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            O que acontece depois
          </span>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Cada mensagem é lida manualmente. Se houver encaixe, a resposta chega com uma proposta
            de próximo passo em até 48 horas úteis.
          </p>
        </div>

        {state === 'error' && (
          <p className="mb-4 text-sm text-accent" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={state === 'submitting'}
          className="w-full sm:w-auto"
        >
          {state === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
      </div>
    </form>
  )
}
