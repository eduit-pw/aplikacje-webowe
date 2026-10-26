const express = require('express');

const app = express();

const host = '127.0.0.1';

const port = 3039;

const kursy = [
  { id: 1, nazwa: 'Python' },
  { id: 2, nazwa: 'JavaScript' }
];

const nastepneId = 3;

app.listen(port, host, () => {
  console.log(`Serwer: http://${host}:${port}`);
});

// Uzupełnij wykonanie programu zgodnie z README.
