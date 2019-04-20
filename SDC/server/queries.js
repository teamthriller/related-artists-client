const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'J-radical',
  host: 'localhost',
  database: 'artists',
  port: 5432
});

const getArtists = (request, response) => {
  pool.query('SELECT * FROM artists ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = getArtists;
