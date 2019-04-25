const express = require('express');
const path = require('path');
const Artist = require('../database/models');

// const db = require('./queries.js');
const db = require('../database/index');
const port = 3200;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../../public')));

app.get('/artists', (req, res) => {
  Artist.find((err, results) => {
    if (err) console.log(err);
    res.json(results);
  });
});

app.get('/artists/:artist', (req, res) => {
  Artist.find({}(err, results) => {

  })
});

app.get('/artists/:artist/related', () => {
  
});

app.post('/artists', (req, res) => {
  const artist = new Artist({
    artist_id: req.body.artist_id,
    artist_name: req.body.arist_name,
    artist_genre: req.body.artist_genre,
    artist_photo: req.body.artist_photo
  });
  artist
    .save()
    .then(data => res.json(data))
    .catch(console.error);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
