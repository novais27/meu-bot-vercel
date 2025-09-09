// api/index.js

// Esta função será executada para qualquer requisição POST ou GET
// em https://meu-bot-vercel.vercel.app/api
module.exports = (req, res) => {
  // Sua lógica de bot aqui
  // O Vercel passa a requisição (req) e a resposta (res) diretamente

  if (req.method === 'POST') {
    // Lógica para processar o webhook
    console.log('Webhook recebido!');
    res.status(200).send('OK');
  } else {
    // Lógica para responder a requisições GET (como ao abrir no navegador)
    res.status(200).send('Seu bot está online!');
  }
};
