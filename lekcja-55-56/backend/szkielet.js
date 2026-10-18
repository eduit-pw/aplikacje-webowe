const express = require('express');
const app = express();
app.use(express.json());
// Zadanie 3: dodaj własny endpoint /api/kursy i wymagane dane.
app.listen(3000, () => console.log('API http://localhost:3000'));
