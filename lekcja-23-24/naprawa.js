const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'tylko-lokalne-cwiczenie-12', resave: false,
  saveUninitialized: false, cookie: { httpOnly: true, sameSite: 'lax' } }));
let wizyty=0;
app.get('/wizyty', (req, res) => {
  wizyty = (wizyty ?? 0) + 1;
  res.json({ wizyty: wizyty });
});
app.listen(3092);
