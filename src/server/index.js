const express = require('express');
const path = require('path');
const db = require('../database/schema');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static(path.join(__dirname, '/../../public')));
app.use(express.json());


app.get('/artists', (req, res) => {
  db.getdata().then((data) => {
    res.json(data);
  }).catch(() => {
    res.json({ err: 'cant access database' });
  });
});
