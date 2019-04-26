require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');

const {
  getArtists,
  getOneArtist,
  getRelatedArtists,
  checkRedisCache
} = require('./controllers.js');

// const db = require('./queries.js');
const port = process.env.PORT || 3100;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../../public')));

app.get('/artists', getArtists);

app.get('/artists/:artistId', getOneArtist);

app.get('/artists/:artistId/related', checkRedisCache, getRelatedArtists);

app.get('/icon', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/playicon.png'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
