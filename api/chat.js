import { getMockChatResponse } from '../src/data/portfolioChatMock.js';

function extractMessage(body) {
  if (!body) {
    return '';
  }

  if (typeof body === 'string') {
    try {
      const parsedBody = JSON.parse(body);
      return parsedBody?.message?.trim?.() ?? '';
    } catch {
      return '';
    }
  }

  return body?.message?.trim?.() ?? '';
}

function extractLanguage(body) {
  if (!body) {
    return 'PT';
  }

  if (typeof body === 'string') {
    try {
      const parsedBody = JSON.parse(body);
      return parsedBody?.languageCode === 'EN' ? 'EN' : 'PT';
    } catch {
      return 'PT';
    }
  }

  return body?.languageCode === 'EN' ? 'EN' : 'PT';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo nao permitido.' });
  }

  try {
    const message = extractMessage(req.body);
    const languageCode = extractLanguage(req.body);

    if (!message) {
      return res.status(400).json({ error: 'Mensagem vazia.' });
    }

    return res.status(200).json({
      text: getMockChatResponse(message, languageCode),
      source: 'mock'
    });
  } catch {
    return res.status(500).json({
      error: 'Erro interno no servidor.'
    });
  }
}

/*
Integracao original com Flowise, desativada ate a hospedagem ficar pronta.

const flowiseUrl = normalizeEnv(process.env.FLOWISE_URL);
const chatflowId = normalizeEnv(process.env.FLOWISE_CHATFLOW_ID);
const apiKey = normalizeEnv(process.env.FLOWISE_API_KEY);

if (!flowiseUrl || !chatflowId) {
  return res.status(500).json({ error: 'Variaveis do Flowise nao configuradas.' });
}

const response = await fetch(`${flowiseUrl}/prediction/${chatflowId}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
  },
  body: JSON.stringify({
    question: message,
    overrideConfig: {
      sessionId: Date.now().toString()
    }
  })
});

const data = await response.json();

if (!response.ok) {
  return res.status(response.status).json({
    error: 'Erro ao consultar o Flowise.',
    details: data
  });
}
*/
