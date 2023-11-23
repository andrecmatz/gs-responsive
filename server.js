const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const faq = [];

app.post('/api/messages', (req, res) => {
  const { firstname, lastname, email, phone, address, message } = req.body;
  const newMessage = { firstname, lastname, email, phone, address, message };
  faq.push(newMessage);
  res.status(201).json({ success: true, message: 'Mensagem enviada com sucesso!' });
});

app.get('/api/faq', (req, res) => {
  res.json(faq);
});

app.listen(port, () => {
  console.log(`O server esta sendo executado na porta ${port}`);
});