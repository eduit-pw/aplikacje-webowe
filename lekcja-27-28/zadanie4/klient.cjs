const express=require('express');
const path=require('node:path');
const app=express();app.use(express.static(path.join(__dirname,'public')));
app.listen(8080,()=>console.log('Klient http://localhost:8080'));
