const client = require('./db.js');

const getArtists = (req, res) => {
  const queryString = 'SELECT * FROM artists LIMIT 12';
  client.query(queryString, (err, results) => {
    if (err) console.log(err);
    res.json(results.rows);
  });
};

const getOneArtist = (req, res) => {
  const artistName = req.params.artist;
  console.log(artistName);
  const queryString = `SELECT * FROM artists WHERE artist_name = '${artistName}' LIMIT 1`;
  client.query(queryString, (err, results) => {
    if (err) console.log(err);
    res.json(results.rows[0]);
  });
};

const getRelatedArtists = (req, res) => {
  const artistName = req.params.artist;
  console.log(artistName);
  const queryString1 = `SELECT * FROM artists WHERE artist_name = '${artistName}' LIMIT 1`;
  client.query(queryString1, (err, results) => {
    if (err) console.log(err);
    const genre = results.rows[0].genre_id;
    const queryString2 = `SELECT * FROM artists WHERE genre_id = '${genre}' LIMIT 24`;
    client.query(queryString2, (err, results) => {
      if (err) console.log(err);
      res.json(results.rows);
    });
  });
};

module.exports = {
  getArtists,
  getOneArtist,
  getRelatedArtists
};
