var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
    bio:  String,
    image: String,
    body:   String,
    albums: String,
    albumsCategory: String,
    songAlbums: String,
    compilations: String,
    appearsOn: String,
    relatedartists:[],
    collabAlbumId: []
  });

  var songSchema = new Schema({
      name: String,
      albumid: String,
      artistid: String,
      plays: Number
    })

  var albumSchema=new Schema({
      name:String,
      artistid: String,
      image: String,
      collaborators: [],
      albumType: String,
      Date: Date
  })