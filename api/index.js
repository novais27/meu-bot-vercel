const express = require('express');
const app = express();

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.status(200).send('Seu bot está online!');
});

// Rota do webhook (usa POST para receber dados)
app.post('/webhook', (req, res) => {
  console.log('Webhook recebido!');
  res.status(200).send('OK');
});

module.exports = app;
