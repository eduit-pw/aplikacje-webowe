const express=require('express');
const cors=require('cors');
const app=express();
// TODO: dodaj middleware CORS zgodnie z poleceniem.
app.use(express.json());
const produkty=[{id:1,nazwa:'Notes',cena:12}];
app.get('/produkty',(req,res)=>res.json(produkty));
app.post('/produkty',(req,res)=>{
 if(typeof req.body?.nazwa!=='string'||!req.body.nazwa.trim()) return res.status(400).json({blad:'Podaj nazwę'});
 const p={id:produkty.length+1,nazwa:req.body.nazwa.trim(),cena:0};produkty.push(p);res.status(201).json(p);
});
app.listen(3094,()=>console.log('API http://localhost:3094'));
