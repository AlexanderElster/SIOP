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
  const geaenderterEintrag = req.body;
  let eintragid = req.params.id;

  let eintragObj = eintrag[eintragId];
  if (eintragObj === undefined || eintragObj === null) {
    res.status(404).json({"error": "Eintrag not found!"});
  } else {

    eintragObj.bezeichnung = geanderterEintrag.bezeichnung;
    eintragObj.beschreibung = geanderterEintrag.beschreibung;
    eintragObj.ort = geanderterEintrag.ort;
    eintragObj.benutzer = geandeterEintrag.benutzer;
    eintragObj.kategorie = geandeterEintrag.kategorie;

    tickets.splice(eintragid, 1, eintragObj);

    console.log(eintrag);
    res.status(200).json(eintrag);
  }
});

app.get('/eintrag/:id', (req, res) => {
  let data = eintrag[req.params.id];
  res.json({data});
});


app.listen(3000);
