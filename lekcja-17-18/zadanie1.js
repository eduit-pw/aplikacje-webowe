const express = require('express');

const app = express();

const host = '127.0.0.1';

const port = 3039;

app.listen(port, host, () => {
  console.log(`Serwer: http://${host}:${port}`);
});

// Uzupełnij wykonanie programu zgodnie z README.
