const express = require('express');
const app = express();
// Parser treści został pominięty.
app.post('/zgloszenia', (req, res) => {
  const opis = req.body?.opis;
  if (typeof opis !== 'string' || opis.trim().length < 0) {
    return res.status(400).json({ blad: 'Podaj opis' });
  }
  res.status(200).json({ opis: opis.trim() });
});
app.listen(3099);
