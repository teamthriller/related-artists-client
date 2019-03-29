const mongoose = require('mongoose');
const fetch = require('node-fetch');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

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
  return fetch(`http://source.unsplash.com/collection/${collectionid}/${imagewidth}x${imageheight}`).then((response) => { return response.url; });
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
  Promise.all(imageurls).then((imageurls)=>{
    for (var index in imageurls) {
      index = parseInt(index);
      var image = imageurls[index];
      Artist.create({name: `${index}`, bio: `bio of ${index}`, image: image, relatedartists: [(index + 1) % 100, (index + 20) % 100]});
    }
  });
};

// seeddata();
module.exports = { seeddata, fetchImage };
