/* eslint-disable comma-dangle */
// const { Client } = require('pg');
// const login = require('../archive/login');

// const conString = `postgres://${login}@localhost:5432/related_artists`;
// const client = new Client(conString);

// client.connect();

// module.exports = client;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'J-radical',
  host: 'localhost',
  database: 'related_artists',
  max: 100
});

module.exports = pool;
