const mongoose = require('mongoose');

mongoose.connect('localhost:27017/related_artists');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successfully connected to mongo database');
});

module.exports = db;

// csv seed command
// mongoimport --db related_artists --collection artists --type csv --headerline --file /Users/J-radical/Desktop/Immersive/related-artists-client/sdc_nosql/database/data.csv
// time <command>
