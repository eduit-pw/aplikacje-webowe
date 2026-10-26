const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
async function main() {
  const klient = new MongoClient(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017', { serverSelectionTimeoutMS: 5000 });
  try {
    await klient.connect();
    const notatki = klient.db(process.env.MONGO_DB || 'inf04_t15').collection('notatki');
    const app = express(); app.use(express.json());
    // TODO: własne trasy i walidacja danych oraz ID; użyj notatki.
    // TODO: obsługa nieznanej trasy i błędów.
    app.listen(3015, () => console.log('API http://localhost:3015'));
  } catch (blad) {
    console.error('Nie uruchomiono API:', blad.message);
    await klient.close(); process.exitCode = 1;
  }
}
main();
