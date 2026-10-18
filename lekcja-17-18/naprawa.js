const express = require('express');
const app = express();
app.post('/echo', (req, res) => {
  console.log('req.body:', req.body);
  res.json({ odebrano: req.body ?? null });
});
app.use(express.json());
app.listen(3090, () => console.log('http://localhost:3090'));
