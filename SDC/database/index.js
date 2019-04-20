/* eslint-disable comma-dangle */
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'artists'
  }
});

module.exports = knex;
