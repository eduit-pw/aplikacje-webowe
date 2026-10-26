const express = require('express');

const app = express();

const uczniowie = [
  { id: 1, imie: 'Ala' },
  { id: 2, imie: 'Bartek' },
  { id: 3, imie: 'Celina' }
];

app.listen(3040, '127.0.0.1', () => {
  console.log('Serwer: http://127.0.0.1:3040');
});

// Uzupełnij wykonanie programu zgodnie z README.
