const mongoose = require('mongoose');
const fetch = require('node-fetch');

const { Schema } = mongoose;
mongoose.Promise = require('bluebird');

const artistSchema = new Schema({
  _id: String,
  name: String,
  bio: String,
  image: String,
  relatedartists: [],
});

const Artist = mongoose.model('Artist', artistSchema);

const fetchImage = () => {
  const imagewidth = 400;
  const imageheight = 480;
  const collectionid = 1163637;
  return fetch(`http://source.unsplash.com/collection/${collectionid}/${imagewidth}x${imageheight}`).then((response) => response.url);
};

/* istanbul ignore next */
const seeddata = () => {
  mongoose.connect('mongodb://localhost/artists');
  try {
    Artist.collection.drop();
  } catch (err) {
    if (err.message !== 'ns not found') {
      throw err;
    }
  }
  const imageurls = [];
  let count = 0;
  const entries = 100;
  while (count < entries) {
    imageurls.push(fetchImage());
    count += 1;
  }
  Promise.all(imageurls).then((images) => {
    images.forEach((image, index) => {
      Artist.create({
        _id: `${index}`, name: `${index}`, bio: `bio of ${index}`, image, relatedartists: [(index + 1) % 100, (index + 20) % 100],
      });
    });
  }).then(() => {
    console.log('done seeding');
  });
};

const getdata = () => {
  mongoose.connect('mongodb://localhost/artists');
  return new Promise((resolve, reject) => {
    Artist.find({}, (err, data) => {
      mongoose.connection.close();
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getArtist = (id) => {
  mongoose.connect('mongodb://localhost/artists');
  return new Promise((resolve, reject) => {
    const query = Artist.where({ _id: id });
    query.findOne((err, data) => {
      mongoose.connection.close();
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// seeddata();
module.exports = {
  seeddata, fetchImage, getdata, getArtist,
};
