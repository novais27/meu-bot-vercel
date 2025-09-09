const express = require('express');
const app = express();

app.use(express.json());

// Rota para o seu bot
app.all('/api', (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send('Seu bot está online!');
  } else if (req.method === 'POST') {
    // Sua lógica do bot
    console.log('Webhook recebido!');
    res.status(200).send('OK');
  } else {
    res.status(405).send('Método não permitido');
  }
});

module.exports = app;
