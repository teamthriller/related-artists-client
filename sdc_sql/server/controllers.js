/* eslint-disable no-console */
const redis = require('redis');
const client = require('./db.js');

const redisClient = redis.createClient();

redisClient.on('error', err => {
  console.log('Error ' + err);
});

const getArtists = (req, res) => {
  const queryString = 'SELECT * FROM artists LIMIT 12';
  client.query(queryString, (err, results) => {
    if (err) console.log(err);
    res.json(results.rows);
  });
};

const getOneArtist = (req, res) => {
  const id = req.params.artistId;
  const queryString = `SELECT * FROM artists WHERE artist_id = '${id}' LIMIT 1`;
  client.query(queryString, (err, results) => {
    if (err) console.log(err);
    res.json(results.rows[0]);
  });
};

const getRelatedArtists = (req, res) => {
  const id = req.params.artistId;
  const queryString1 = `SELECT * FROM artists WHERE artist_id = '${id}' LIMIT 1`;
  client.query(queryString1, (err, results) => {
    if (err) console.log(err);
    const genre = results.rows[0].genre_id;
    const queryString2 = `SELECT * FROM artists WHERE genre_id = '${genre}' LIMIT 12`;
    client.query(queryString2, (error, result) => {
      if (error) console.log(error);
      redisClient.set(id, JSON.stringify(result.rows), 'EX', 3600);
      res.json(result.rows);
    });
  });
};

const checkRedisCache = (req, res, next) => {
  console.log(req.params);
  const id = req.params.artistId;
  redisClient.get(`${id}`, (err, results) => {
    console.log(results);
    if (err) {
      console.log(err);
    } else if (results !== null) {
      console.log('method called');
      // redisClient.del(id);
      res.status(200).json(JSON.parse(results));
    } else {
      next();
    }
  });
};

module.exports = {
  getArtists,
  getOneArtist,
  getRelatedArtists,
  checkRedisCache
};
