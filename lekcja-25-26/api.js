const express = require('express');
const session = require('express-session');
const app = express();
app.use(express.json());
app.use(session({ secret: 'lokalne-cwiczenie-powtorkowe', resave: false,
  saveUninitialized: false, cookie: { maxAge: 15 * 60 * 1000, httpOnly: true, sameSite: 'lax' } }));
// TODO: dodaj GET /api/dlugosc/:metry, POST /api/dodaj oraz ustawienia sesji.
app.use((req, res) => res.status(404).json({ error: 'Nie znaleziono' }));
app.listen(3113, '127.0.0.1', () => console.log('API treningowe: 3113'));
