// Importe as dependências necessárias, como o Express
const express = require('express');

// Crie uma instância do Express
const app = express();

// A Vercel vai expor este endpoint.
// Por padrão, a URL será algo como: https://seu-projeto.vercel.app/api
// A rota que você definir aqui (/) será a base do seu endpoint.
// Por exemplo, uma requisição para https://seu-projeto.vercel.app/api/hello
// vai acionar a rota app.get('/hello', ...).

app.get('/', (req, res) => {
  // A Vercel espera uma resposta da sua função
  res.status(200).send('Olá! Meu bot está funcionando no Vercel.');
});

// A Vercel espera que sua aplicação seja exportada no arquivo.
// Isso permite que ela inicie sua aplicação na hora do deploy.
module.exports = app;
