const express = require('express');
const app = express();
const seans = { id: 7, cena: 20 };
app.get('/seanse/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(id) || id < 1) return res.sendStatus(400);
  if (id !== seans.id) return res.sendStatus(404);
  const osoby = req.query.osoby === undefined ? 1 : Number(req.query.osoby);
  if (typeof req.query.osoby === 'object' || !Number.isInteger(osoby) || osoby < 1 || osoby >= 5) {
    return res.sendStatus(400);
  }
  res.json({ kwota: seans.cena + osoby });
});
app.listen(3100);
