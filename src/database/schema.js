const mongoose = require('mongoose');
const fetch = require('node-fetch');

const { Schema } = mongoose;

const artistSchema = new Schema({
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

const seeddata = () => {
  mongoose.connect('mongodb://localhost/artists');
  Artist.collection.drop();
  const imageurls = [];
  let count = 0;
  const entries = 100;
  while (count < entries) {
    imageurls.push(fetchImage());
    count += 1;
  }
  Promise.all(imageurls).then((images) => {
    const imagesarray = Object.values(images);
    imagesarray.forEach((image, index) => {
      Artist.create({
        name: `${index}`, bio: `bio of ${index}`, image, relatedartists: [(index + 1) % 100, (index + 20) % 100],
      });
    });
  });
};

// seeddata();
module.exports = { seeddata, fetchImage };
