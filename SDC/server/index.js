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

app.get('/artists', (req, res) => {
  return getArtists(req, res);
});

app.get('/artists/:artist', getOneArtist);

app.get('/artists/:artist/related', getRelatedArtists);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
