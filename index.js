const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/teste', (req, res) => {
  res.send('teste rota 3');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});