const express = require('express');

const app = express();

const kursy = [
  { id: 1, nazwa: 'Python', poziom: 'podstawowy' },
  { id: 2, nazwa: 'HTML', poziom: 'podstawowy' },
  { id: 3, nazwa: 'JavaScript', poziom: 'zaawansowany' },
  { id: 4, nazwa: 'SQL', poziom: 'zaawansowany' }
];

app.listen(3040, '127.0.0.1', () => {
  console.log('Serwer: http://127.0.0.1:3040');
});

// Uzupełnij wykonanie programu zgodnie z README.
