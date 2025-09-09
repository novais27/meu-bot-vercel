const express = require('express');
const app = express();

app.use(express.json());

// Rota de teste. Acessível em https://meu-bot-vercel.vercel.app/api
app.get('/', (req, res) => {
  res.status(200).send('Seu bot está online!');
});

// Rota do seu webhook. Acessível em https://meu-bot-vercel.vercel.app/api/webhook
app.post('/webhook', (req, res) => {
  // Sua lógica para o webhook aqui
  console.log('Webhook recebido!');
  res.status(200).send('OK');
});

module.exports = app;
