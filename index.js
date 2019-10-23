const express = require('express');
const app = express();

const eintrag = require ('./eintrag.json');
const benutzer = require('./benutzer.json');
  
app.use(express.static('public'));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/eintrag',(req, res) => {
  res.json(eintrag);
});

app.get('/eintrag1/:id', (req, res) => {
  const eintragid = req.params.id;
  let e1 = eintrag[eintragid]; 

  res.json({e1});

});

app.get('/benutzer',(req,res) => {
  res.json(benutzer);
});

app.post('/eintrag', (req, res) => {
  const neuerEintrag = req.body;

  eintrag.push(neuerEintrag);

  res.status(201).json(eintrag);
});

app.delete('/eintrag/:id', (req, res) => {
  const eintragid = req.params.id;

  eintrag.splice(eintragid , 1);

  console.log(eintrag);
  res.status(201).json(eintrag);
});

app.put('/eintrag/:id', (req, res) => {
  let eintragid = req.params.id;

  
});


app.listen(3000);
