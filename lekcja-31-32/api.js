const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
async function main() {
  const klient = new MongoClient(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017');
  await klient.connect();
  const odczyty = klient.db('trening_odczytow').collection('odczyty');
  const app = express();
  app.use(express.json());
  // TODO: GET listy, GET po ID i POST zgodnie z README.
  app.use((req,res) => res.status(404).json({error:'Nie znaleziono'}));
  app.listen(3116, '127.0.0.1', () => console.log('Trening MongoDB: 3116'));
}
main().catch(blad => { console.error(blad.message); process.exitCode=1; });
