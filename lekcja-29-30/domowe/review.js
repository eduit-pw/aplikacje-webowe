app.patch('/api/notatki/:id', async (req, res) => {
  if (!/^[a-fA-F0-9]{24}$/.test(req.params.id)) return res.sendStatus(400);
  const id = req.params.id;
  const ukonczona = req.body?.ukonczona;
  if (typeof ukonczona !== 'string') return res.sendStatus(400);
  const wynik = await notatki.updateOne({ _id: id }, { $set: { ukonczona } });
  if (wynik.modifiedCount === 0) return res.sendStatus(404);
  res.json(await notatki.findOne({ _id: id }));
});
