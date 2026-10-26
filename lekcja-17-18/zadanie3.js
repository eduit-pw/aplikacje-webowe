// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

const express = require('express');

const app = express();

const host = '127.0.0.1';

const port = 3039;

const warsztaty = [
  { nazwa: 'Python', miejsca: 2 },
  { nazwa: 'JavaScript', miejsca: 1 }
];

const zapisy = [];

const nastepneId = 1;

app.listen(port, host, () => {
  console.log(`Serwer: http://${host}:${port}`);
});

// Uzupełnij wykonanie programu zgodnie z README.
