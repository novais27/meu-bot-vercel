const express = require('express');
const app = express();

app.use(express.json());

// Esta rota responde a requisições GET em https://meu-bot-vercel.vercel.app/api
app.get('/', (req, res) => {
  res.status(200).send('Seu bot está online!');
});

// Esta rota agora responde a requisições GET e POST em https://meu-bot-vercel.vercel.app/api/webhook
app.all('/webhook', (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send('Webhook está configurado e esperando requisições POST.');
  } else if (req.method === 'POST') {
    // Sua lógica para o webhook aqui
    console.log('Webhook recebido!');
    res.status(200).send('OK');
  } else {
    res.status(405).send('Método não permitido');
  }
});

module.exports = app;
