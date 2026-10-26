// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

const express = require('express');

const app = express();

const produkty = [
  { id: 1, nazwa: 'Długopis', cena: 3 },
  { id: 2, nazwa: 'Zeszyt', cena: 8.5 },
  { id: 3, nazwa: 'Teczka', cena: 12 }
];

app.listen(3040, '127.0.0.1', () => {
  console.log('Serwer: http://127.0.0.1:3040');
});

// Uzupełnij wykonanie programu zgodnie z README.
