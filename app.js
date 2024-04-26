const express = require('express');
const bodyParser = require('body-parser');
const pedidoRoutes = require('./routes/PedidoRoutes'); 

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de gerenciamento de pedidos!');
});

app.use('/', pedidoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${4000}`);
});


