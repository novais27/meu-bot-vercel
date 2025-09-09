const express = require('express');
const app = express();

app.use(express.json());

// Rota padrão para verificação (resolve o erro 404)
app.get('/', (req, res) => {
  res.status(200).send('Seu bot está online!');
});

// A rota do seu webhook (para receber as mensagens do bot)
app.post('/webhook', (req, res) => {
  console.log('Webhook recebido!');
  // Sua lógica para processar a mensagem do bot aqui
  res.status(200).send('OK');
});

module.exports = app;
