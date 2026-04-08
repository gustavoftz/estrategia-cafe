'use client'

import { useId, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import FormField from '@/components/ui/FormField'
import { inputClass, selectClass, textareaClass } from '@/components/ui/formStyles'
import { trackEvent } from '@/lib/analytics'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const initialData = {
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
}

type ContactFormData = typeof initialData

const requiredFields: Array<keyof ContactFormData> = [
  'nome',
  'empresa',
  'retorno',
  'segmento',
  'desafio',
  'frente',
]

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

function getMissingRequiredFields(data: ContactFormData) {
  return requiredFields.filter((fieldName) => !data[fieldName].trim())
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  const liveStatusId = useId()
  const errorId = `${liveStatusId}-error`
  const [data, setData] = useState<ContactFormData>(initialData)
  const hasTrackedStartRef = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)

  const trackFormStart = () => {
    if (hasTrackedStartRef.current) {
      return
    }

    hasTrackedStartRef.current = true
    trackEvent('form_start', {
      form_name: 'contact_form',
      form_destination: 'contato',
    })
  }

  const set = (field: keyof typeof data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData(prev => ({ ...prev, [field]: e.target.value }))

  const isSubmitting = state === 'submitting'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    trackFormStart()

    const missingRequiredFields = getMissingRequiredFields(data)

    if (missingRequiredFields.length > 0) {
      trackEvent('form_validation_error', {
        error_type: 'missing_required_fields',
        form_destination: 'contato',
        form_name: 'contact_form',
        missing_field_count: missingRequiredFields.length,
        missing_required_fields: missingRequiredFields.join('|'),
      })
      setError('Preencha os campos obrigatórios para enviar a mensagem.')
      setState('error')
      const firstMissing = missingRequiredFields[0]
      const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstMissing}"]`)
      el?.focus()
      return
    }

    setState('submitting')
    setError('')
    trackEvent('form_submit_attempt', {
      form_destination: 'contato',
      form_name: 'contact_form',
      frente: data.frente,
      has_site: Boolean(data.site.trim()),
      preferred_contact: data.contato || 'nao_informado',
    })

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

      setData(initialData)
      trackEvent('generate_lead', {
        form_name: 'contact_form',
        form_destination: 'contato',
        frente: data.frente,
        has_site: Boolean(data.site.trim()),
        preferred_contact: data.contato || 'nao_informado',
      })
      setState('success')
    } catch (submitError) {
      trackEvent('form_submit_error', {
        error_type: 'request_failed',
        form_destination: 'contato',
        form_name: 'contact_form',
        frente: data.frente || 'nao_informado',
        preferred_contact: data.contato || 'nao_informado',
      })
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
      <div className="editorial-panel px-8 py-12" role="status" aria-live="polite">
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={trackFormStart}
      className="flex flex-col gap-6"
      noValidate
      aria-busy={isSubmitting}
      aria-describedby={state === 'error' ? errorId : undefined}
    >
      <p className="sr-only">Campos marcados com * são obrigatórios</p>
      <p id={liveStatusId} className="sr-only" aria-live="polite">
        {isSubmitting ? 'Enviando sua mensagem.' : state === 'error' ? error : ''}
      </p>

      {/* Row: Nome + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Nome" required>
          <input
            type="text"
            name="nome"
            required
            value={data.nome}
            onChange={set('nome')}
            placeholder="Seu nome"
            className={inputClass}
            autoComplete="name"
            disabled={isSubmitting}
          />
        </FormField>
        <FormField label="Empresa" required>
          <input
            type="text"
            name="empresa"
            required
            value={data.empresa}
            onChange={set('empresa')}
            placeholder="Nome da empresa"
            className={inputClass}
            autoComplete="organization"
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="E-mail ou WhatsApp para retorno" required>
          <input
            type="text"
            name="retorno"
            required
            value={data.retorno}
            onChange={set('retorno')}
            placeholder="seu@email.com ou +55 11 99999-9999"
            className={inputClass}
            autoComplete="email"
            disabled={isSubmitting}
          />
        </FormField>
        <FormField label="Forma preferida de contato">
          <select
            name="contato"
            value={data.contato}
            onChange={set('contato')}
            className={selectClass}
            disabled={isSubmitting}
          >
            {contatoOptions.map(o => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      {/* Row: Site + Segmento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Site" hint="URL do site atual, se houver">
          <input
            type="url"
            name="site"
            value={data.site}
            onChange={set('site')}
            placeholder="seusite.com.br ou https://seusite.com.br"
            className={inputClass}
            autoComplete="url"
            autoCapitalize="off"
            inputMode="url"
            spellCheck={false}
            disabled={isSubmitting}
          />
        </FormField>
        <FormField label="Segmento" required>
          <input
            type="text"
            name="segmento"
            required
            value={data.segmento}
            onChange={set('segmento')}
            placeholder="Ex: e-commerce, serviços B2B, SaaS..."
            className={inputClass}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Principal desafio */}
      <FormField
        label="Principal desafio hoje"
        hint="Descreva com clareza o que não está funcionando como deveria."
        required
      >
        <textarea
          name="desafio"
          required
          value={data.desafio}
          onChange={set('desafio')}
          placeholder="Qual é o problema central que você quer resolver?"
          className={textareaClass}
          disabled={isSubmitting}
        />
      </FormField>

      {/* O que já foi tentado */}
      <FormField
        label="O que já foi tentado"
        hint="Soluções anteriores, agências, ferramentas, abordagens — e o resultado."
      >
        <textarea
          name="tentativas"
          value={data.tentativas}
          onChange={set('tentativas')}
          placeholder="O que você já tentou? O que funcionou, o que não funcionou?"
          className={textareaClass}
          disabled={isSubmitting}
        />
      </FormField>

      {/* Frente mais urgente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="Frente mais urgente" required>
          <select
            name="frente"
            required
            value={data.frente}
            onChange={set('frente')}
            className={selectClass}
            disabled={isSubmitting}
          >
            {frenteOptions.map(o => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="hidden" aria-hidden="true">
        <FormField label="Website">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={set('website')}
            className={inputClass}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <div className="rounded-[1.5rem] border border-border bg-surface/70 px-5 py-5">
        <div className="mb-4 flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
            O que acontece depois
          </span>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Cada mensagem é lida manualmente. Se houver encaixe, a resposta chega com uma proposta
            de próximo passo em até 48 horas úteis.
          </p>
        </div>

        {state === 'error' && (
          <p id={errorId} className="mb-4 text-sm text-accent" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
      </div>
    </form>
  )
}
