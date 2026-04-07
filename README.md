# estrategia.cafe

Site institucional em Next.js com exportação estática para hospedagem compartilhada e endpoint PHP para envio do formulário de contato.

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Build de produção

```bash
npm run build
```

O build gera os arquivos estáticos em `out/`.

## Analytics

O site usa Google Analytics 4 somente após consentimento no banner de cookies.

1. Copie `.env.example` para `.env.local`.
2. Ajuste `NEXT_PUBLIC_GA_MEASUREMENT_ID` se quiser trocar a propriedade GA4.

Eventos principais já instrumentados:

- `cta_click`: cliques em CTAs para `Contato` e `Diagnóstico Estratégico`
- `generate_lead`: envio bem-sucedido do formulário de contato

## Formulário de contato

O frontend envia para `public/api/contact.php`.

Para configurar o SMTP:

1. Copie `public/api/contact.config.example.php` para `public/api/contact.config.php`.
2. Preencha as credenciais SMTP da conta usada para envio.

O arquivo `public/api/contact.config.php` não deve ser versionado.

## Deploy na hospedagem

Fluxo recomendado para hospedagem compartilhada:

1. Execute `npm run build`.
2. Envie o conteúdo de `out/` para a pasta pública do domínio.
3. Envie também a pasta `public/api/` com `contact.php` e o `contact.config.php` configurado.
4. Verifique se o servidor PHP consegue abrir conexões SMTP de saída.

## Verificação

```bash
npm run lint
npm run build
```
