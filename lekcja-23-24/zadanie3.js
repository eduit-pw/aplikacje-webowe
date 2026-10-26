// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

const express = require('express');

const cookieParser = require('cookie-parser');

const session = require('express-session');

const app = express();

const produkty = [
  { id: 1, nazwa: 'Długopis', cena: 3 },
  { id: 2, nazwa: 'Zeszyt', cena: 8 }
];

function stan(req) {
  // TODO: uzupełnij funkcję.
  throw new Error('TODO');
}

app.listen(3042, '127.0.0.1', () => {
  console.log('Serwer: http://127.0.0.1:3042');
});

// Uzupełnij wykonanie programu zgodnie z README.
