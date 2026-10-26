const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'cwiczenie-lokalne', resave: false,
  saveUninitialized: false, cookie: { httpOnly: true } }));
app.get('/licznik', (req, res) => {
  const poprzednio = req.session.wizyty ?? '0';
  req.session.wizyty = poprzednio + 2;
  res.json({ wizyty: poprzednio });
});
app.listen(3102);
