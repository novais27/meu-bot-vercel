const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Seu bot está online!');
});

app.post('/webhook', (req, res) => {
  // Sua lógica do bot aqui
  console.log('Webhook recebido!');
  res.status(200).send('OK');
});

// Adapta o Express para ser uma função serverless
module.exports = serverless(app);
