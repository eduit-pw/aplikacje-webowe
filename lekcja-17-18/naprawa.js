const express = require('express');
const app = express();
app.post('/echo', (req, res) => {
  if (typeof req.body?.nazwa !== 'string' || !req.body.nazwa.trim()) {
    return res.status(400).json({ blad: 'Podaj nazwę' });
  }
  res.status(201).json({ nazwa: req.body.nazwa.trim() });
});
app.use(express.json());
app.listen(3090);
