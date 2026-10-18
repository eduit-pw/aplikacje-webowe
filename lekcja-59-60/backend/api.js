const express=require('express');
const app=express();app.use(express.json());
const rezerwacje=[];let nastepneId=1;
app.get('/api/rezerwacje',(req,res)=>res.json(rezerwacje));
app.post('/api/rezerwacje',(req,res)=>{
 const b=req.body;
 if(typeof b?.imie!=='string'||!b.imie.trim()||!Number.isInteger(b.miejsca)||b.miejsca<1||b.miejsca>4)
  return res.status(400).json({blad:'Błędne dane rezerwacji'});
 const rekord={id:nastepneId++,imie:b.imie.trim(),miejsca:b.miejsca};rezerwacje.push(rekord);res.status(201).json(rekord);
});
app.use((req,res)=>res.status(404).json({blad:'Brak trasy'}));
app.use((e,req,res,next)=>{if(res.headersSent)return next(e);res.status(e.type==='entity.parse.failed'?400:500).json({blad:'Błąd żądania'});});
app.listen(3000,()=>console.log('API http://localhost:3000'));
