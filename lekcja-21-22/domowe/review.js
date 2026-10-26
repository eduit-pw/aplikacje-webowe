const express = require('express');
const path = require('node:path');
const app = express();
app.use((req, res, next) => {
  console.log(req.method, req.path);
  // Dalsze sterowanie pominięto.
});
const katalog = 'public';
app.use((req, res) => res.status(404).send('Brak strony'));
app.use('/static', express.static(katalog));
app.listen(3101);
