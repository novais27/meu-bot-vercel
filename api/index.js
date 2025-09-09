module.exports = (req, res) => {
  if (req.url === '/api') {
    if (req.method === 'GET') {
      res.status(200).send('Seu bot está online!');
    }
  }

  if (req.url === '/api/webhook') {
    if (req.method === 'POST') {
      // Sua lógica para o webhook aqui
      console.log('Webhook recebido!');
      res.status(200).send('OK');
    }
  }

  res.status(404).send('Not Found');
};
