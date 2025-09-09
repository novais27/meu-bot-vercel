const express = require('express');
const app = express();

app.use(express.json());

// Rota de verificação
app.get('/', (req, res) => {
  res.status(200).send('Seu bot está online!');
});

// Rota do seu webhook
app.post('/webhook', (req, res) => {
  // Sua lógica para processar o webhook aqui
  console.log('Webhook recebido!');
  res.status(200).send('OK');
});

module.exports = app;
