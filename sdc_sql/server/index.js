require('newrelic');
const express = require('express');
const path = require('path');
const {
  getArtists,
  getOneArtist,
  getRelatedArtists
} = require('./controllers.js');

// const db = require('./queries.js');
const port = 3100;

const app = express();

app.use(express.static(path.join(__dirname, '/../../public')));

app.get('/artists', getArtists);

app.get('/artists/:artist', getOneArtist);

app.get('/artists/:artist/related', getRelatedArtists);

app.get('/icon', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/playicon.png'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
