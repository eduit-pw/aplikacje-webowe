const express=require('express');
const app=express();
app.get('/api/produkty',(req,res)=>res.json([{id:1,nazwa:'Notes',cena:12},{id:2,nazwa:'Długopis',cena:5}]));
app.use((req,res)=>res.status(404).json({blad:'Brak trasy'}));
app.listen(3000,()=>console.log('API http://localhost:3000'));
