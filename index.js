const express = require('express');
const app = express();
const todos = require ('./todos.json');
  
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});
  
app.listen(3000);
