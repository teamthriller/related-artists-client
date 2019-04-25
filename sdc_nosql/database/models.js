const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artist_id: String,
  artist_name: String,
  artist_genre: String,
  artist_photo: String
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
