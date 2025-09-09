const express = require('express');
const app = express();

app.use(express.json()); // Importante para processar o corpo da requisição

// Altere esta linha para a rota do seu webhook
// A rota agora será "/webhook"
app.post('/webhook', (req, res) => {
  // Lógica do seu bot para processar a mensagem
  console.log('Mensagem recebida do webhook!');
  res.status(200).send('Webhook recebido com sucesso!');
});

module.exports = app;
