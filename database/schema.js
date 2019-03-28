var mongoose = require('mongoose');
const fetch = require("node-fetch");
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
  name: String,
  bio:  String,
  image: String,
  relatedartists:[]
});

var Artist = mongoose.model('Artist', artistSchema);

var fetchImage=function(){
  const imagewidth=400;
  const imageheight=480;
  const collectionid=1163637;
  return fetch(`http://source.unsplash.com/collection/${collectionid}/${imagewidth}x${imageheight}`)
  .then((response)=>{
    return response.url;
  })
}

var seeddata=()=>{
  mongoose.connect('mongodb://localhost/artists');
  Artist.collection.drop();
  var imageurls=[];
  var count=0;
  var entries=100;
  while( count<entries){
    imageurls.push(fetchImage());
    count=count+1;
  }
  Promise.all(imageurls).then((imageurls)=>{
    for(var index in imageurls){
      index=parseInt(index);
      var image=imageurls[index]
      console.log(image);
      Artist.create({name:`${index}`,bio:`bio of ${index}`,image:image,relatedartists:[(index+1%100),(index+20)%100]})
    }
  })
}

//seeddata();
