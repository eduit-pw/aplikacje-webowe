const express = require('express');
const app = express();
app.use((req, res, next) => { console.log(req.method, req.path); });
app.get('/ping', (req, res) => res.json({ ok: true }));
app.use((req, res) => res.status(404).json({ blad: 'Brak trasy' }));
app.listen(3091);
