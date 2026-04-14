<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$smtpConfigPaths = [
  __DIR__ . '/contact.config.php',
  dirname(__DIR__, 2) . '/contact.config.php',
];

$smtpConfig = [];

foreach ($smtpConfigPaths as $smtpConfigPath) {
  if (is_file($smtpConfigPath)) {
    $smtpConfig = require $smtpConfigPath;
    break;
  }
}

if (!is_array($smtpConfig)) {
  $smtpConfig = [];
}

function smtp_config_value(array $config, string $key, string $fallbackEnv = ''): string {
  $value = isset($config[$key]) ? trim((string) $config[$key]) : '';

  if ($value !== '') {
    return $value;
  }

  if ($fallbackEnv !== '') {
    $envValue = getenv($fallbackEnv);
    if (is_string($envValue)) {
      return trim($envValue);
    }
  }

  return '';
}

function smtp_expect($socket, array $codes, string $context): string {
  $response = '';

  while (($line = fgets($socket, 515)) !== false) {
    $response .= $line;
    if (strlen($line) < 4 || $line[3] !== '-') {
      break;
    }
  }

  $code = (int) substr($response, 0, 3);

  if (!in_array($code, $codes, true)) {
    throw new RuntimeException($context . ' Resposta SMTP: ' . trim($response));
  }

  return $response;
}

function smtp_command($socket, string $command, array $codes, string $context): string {
  fwrite($socket, $command . "\r\n");
  return smtp_expect($socket, $codes, $context);
}

function smtp_extract_domain(string $email): string {
  $parts = explode('@', $email);
  $domain = trim((string) end($parts));

  return $domain !== '' ? $domain : 'estrategia.cafe';
}

function smtp_format_address(string $email, string $name = ''): string {
  $safeEmail = trim($email);
  $safeName = trim($name);

  if ($safeName === '') {
    return $safeEmail;
  }

  return sprintf('"%s" <%s>', addcslashes($safeName, '"\\'), $safeEmail);
}

function smtp_message_id(string $fromEmail): string {
  $domain = smtp_extract_domain($fromEmail);

  try {
    $token = bin2hex(random_bytes(12));
  } catch (Throwable $error) {
    $token = str_replace('.', '', uniqid('', true));
  }

  return sprintf('<%s@%s>', $token, $domain);
}

function smtp_encode_body(string $message): string {
  $normalized = preg_replace("/\r\n|\r|\n/", "\r\n", $message) ?? $message;

  if (function_exists('quoted_printable_encode')) {
    return quoted_printable_encode($normalized);
  }

  return $normalized;
}

function smtp_send_mail(array $config, string $to, string $subject, string $message, string $replyTo): void {
  $host = smtp_config_value($config, 'host', 'SMTP_HOST') ?: 'smtp.hostinger.com';
  $port = (int) (smtp_config_value($config, 'port', 'SMTP_PORT') ?: '587');
  $username = smtp_config_value($config, 'username', 'SMTP_USERNAME');
  $password = smtp_config_value($config, 'password', 'SMTP_PASSWORD');
  $fromEmail = smtp_config_value($config, 'from_email', 'SMTP_FROM_EMAIL') ?: $username;
  $fromName = smtp_config_value($config, 'from_name', 'SMTP_FROM_NAME') ?: 'estrategia.cafe';
  $encryption = strtolower(smtp_config_value($config, 'encryption', 'SMTP_ENCRYPTION') ?: 'tls');

  if ($username === '' || $password === '' || $fromEmail === '') {
    throw new RuntimeException('Credenciais SMTP não configuradas.');
  }

  $remote = ($encryption === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
  $socket = stream_socket_client($remote, $errno, $errstr, 30, STREAM_CLIENT_CONNECT);

  if (!$socket) {
    throw new RuntimeException("Falha ao conectar no SMTP ({$errno}): {$errstr}");
  }

  stream_set_timeout($socket, 30);

  try {
    smtp_expect($socket, [220], 'Falha na saudação do servidor.');
    smtp_command($socket, 'EHLO estrategia.cafe', [250], 'Falha no EHLO.');

    if ($encryption === 'tls') {
      smtp_command($socket, 'STARTTLS', [220], 'Falha ao iniciar TLS.');

      if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        throw new RuntimeException('Não foi possível ativar TLS no socket SMTP.');
      }

      smtp_command($socket, 'EHLO estrategia.cafe', [250], 'Falha no EHLO após TLS.');
    }

    smtp_command($socket, 'AUTH LOGIN', [334], 'Falha ao iniciar autenticação SMTP.');
    smtp_command($socket, base64_encode($username), [334], 'Falha ao enviar usuário SMTP.');
    smtp_command($socket, base64_encode($password), [235], 'Falha ao autenticar no SMTP.');
    smtp_command($socket, "MAIL FROM:<{$fromEmail}>", [250], 'Falha no MAIL FROM.');
    smtp_command($socket, "RCPT TO:<{$to}>", [250, 251], 'Falha no RCPT TO.');
    smtp_command($socket, 'DATA', [354], 'Falha ao iniciar DATA.');

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $safeMessage = smtp_encode_body($message);
    $safeMessage = preg_replace('/^\./m', '..', $safeMessage) ?? $safeMessage;
    $fromAddress = smtp_format_address($fromEmail, $fromName);
    $toAddress = smtp_format_address($to, 'Contato estrategia.cafe');
    $replyToAddress = filter_var($replyTo, FILTER_VALIDATE_EMAIL) !== false
      ? smtp_format_address($replyTo)
      : smtp_format_address($fromEmail, $fromName);

    $headers = [
      'From: ' . $fromAddress,
      'Sender: ' . $fromEmail,
      'To: ' . $toAddress,
      'Reply-To: ' . $replyToAddress,
      'Subject: ' . $encodedSubject,
      'Message-ID: ' . smtp_message_id($fromEmail),
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8; format=flowed',
      'Content-Transfer-Encoding: quoted-printable',
      'Date: ' . date(DATE_RFC2822),
      'Auto-Submitted: auto-generated',
      'X-Auto-Response-Suppress: All',
      'X-Mailer: estrategia.cafe contact form',
    ];

    fwrite($socket, implode("\r\n", $headers) . "\r\n\r\n" . $safeMessage . "\r\n.\r\n");
    smtp_expect($socket, [250], 'Falha ao finalizar envio da mensagem.');
    smtp_command($socket, 'QUIT', [221], 'Falha ao encerrar sessão SMTP.');
  } finally {
    fclose($socket);
  }
}

function log_contact_error(Throwable $error): void {
  $entry = sprintf(
    "[%s] %s\n",
    date(DATE_RFC3339),
    $error->getMessage()
  );

  error_log($entry, 3, __DIR__ . '/contact-error.log');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Método não permitido.']);
  exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Payload inválido.']);
  exit;
}

function field_value(array $payload, string $key, int $maxLength = 4000): string {
  $value = isset($payload[$key]) ? trim((string) $payload[$key]) : '';
  $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
  return mb_substr($value, 0, $maxLength, 'UTF-8');
}

function normalize_site_url(string $site): string {
  if ($site === '') {
    return '';
  }

  if (preg_match('#^https?://#i', $site)) {
    return $site;
  }

  return 'https://' . $site;
}

$nome = field_value($payload, 'nome', 120);
$empresa = field_value($payload, 'empresa', 180);
$retorno = field_value($payload, 'retorno', 180);
$site = normalize_site_url(field_value($payload, 'site', 240));
$segmento = field_value($payload, 'segmento', 180);
$desafio = field_value($payload, 'desafio', 4000);
$tentativas = field_value($payload, 'tentativas', 4000);
$frente = field_value($payload, 'frente', 80);
$contato = field_value($payload, 'contato', 80);
$website = field_value($payload, 'website', 240);

if ($website !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

if ($nome === '' || $empresa === '' || $retorno === '' || $segmento === '' || $desafio === '' || $frente === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Preencha todos os campos obrigatórios.']);
  exit;
}

if ($site !== '' && filter_var($site, FILTER_VALIDATE_URL) === false) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Informe uma URL de site válida.']);
  exit;
}

$to = 'contato@estrategia.cafe';
$subject = sprintf('Contato estrategia.cafe - %s (%s)', $nome, $empresa);

$message = implode("\n\n", [
  "Novo lead recebido pelo site estrategia.cafe",
  "Nome: {$nome}",
  "Empresa: {$empresa}",
  "Contato para retorno: {$retorno}",
  'Forma preferida de contato: ' . ($contato !== '' ? $contato : 'Não informado'),
  'Site: ' . ($site !== '' ? $site : 'Não informado'),
  "Segmento: {$segmento}",
  "Frente mais urgente: {$frente}",
  "Principal desafio:\n{$desafio}",
  'O que já foi tentado:' . "\n" . ($tentativas !== '' ? $tentativas : 'Não informado'),
]);

$replyTo = filter_var($retorno, FILTER_VALIDATE_EMAIL) !== false ? $retorno : $to;

try {
  smtp_send_mail($smtpConfig, $to, $subject, $message, $replyTo);
} catch (Throwable $error) {
  log_contact_error($error);
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Não foi possível enviar sua mensagem agora. Se preferir, escreva para contato@estrategia.cafe.']);
  exit;
}

echo json_encode(['ok' => true]);
