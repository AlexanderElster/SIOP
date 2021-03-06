const express = require('express');
const app = express();

const eintrag = require('./eintrag.json');
const benutzer = require('./benutzer.json');

app.use(express.static('public'));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/eintrag', (req, res) => {
  res.json(eintrag);
});

app.get('/eintrag/:id', (req, res) => {
  const eintragid = req.params.id;
  let e1 = eintrag[eintragid];

  res.json({ e1 });

});

app.get('/benutzer/:email', (req,res) => {
  const email = req.params.email;
  let b1;
benutzer.forEach(ben => {
  if (ben.email === email) {
    b1 = ben;
  }
});

  if (b1 === undefined) {
    res.status(404);
  }

  res.json(b1);
});

app.get('/benutzer', (req, res) => {
  res.json(benutzer);
});

app.post('/eintrag', (req, res) => {
  const neuerEintrag = req.body;

  eintrag.push(neuerEintrag);

  res.status(201).json(eintrag);
});

app.post('/benutzer', (req, res) => {
  const neuerBenutzer = req.body;

  benutzer.push(neuerBenutzer);

  res.status(201).json(benutzer)
})

app.delete('/eintrag/:id', (req, res) => {
  const eintragid = req.params.id;

  eintrag.splice(eintragid, 1);

  console.log(eintrag);
  res.status(201).json(eintrag);
});

app.put('/eintrag/:id', (req, res) => {

  const geanderterEintrag = req.body;
  console.log(geanderterEintrag);
  let eintragId = req.params.id;

  let e1 = eintrag[eintragId];

  if (e1 === undefined || e1 === null) {
    res.status(404).json({ "error": "Eintrag nicht gefunden!" });
  }
  else {
    e1.bezeichnung = geanderterEintrag.bezeichnung;
    e1.beschreibung = geanderterEintrag.beschreibung;
    e1.ort = geanderterEintrag.ort;
    e1.benutzer = geanderterEintrag.benutzer;
    e1.kategorie = geanderterEintrag.kategorie;

    eintrag.splice(eintragId, 1, e1);

    console.log(e1);
    console.log(eintrag);
    res.status(200).json(eintrag);
  }
});

app.get('/benutzer1/:id', (req,res) => {
  const id = req.params.id;
  console.log(id);
  let b1 = benutzer[id - 1];

if (b1 === undefined) {
  res.status(404);
}
else {
  res.json(b1);
}
});

app.listen(3000);
