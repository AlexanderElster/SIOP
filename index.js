const express = require('express');
const app = express();

const eintrag = require ('./eintrag.json');
const benutzer = require('./benutzer.json');
  
app.use(express.static('public'));
app.use(express.json());

app.get('/eintrag',(req, res) => {
  res.json(eintrag);
});

app.get('/benutzer',(req,res) => {
  res.json(benutzer);
});

app.post('/eintrag')

app.listen(3000);
