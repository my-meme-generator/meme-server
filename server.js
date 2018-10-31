const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Database setup
var dbUrl = 'mongodb://127.0.0.1:27017/memeDb';
mongoose.connect(dbUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error'));
var memes = db.collection('memes');

// Meme model
var memeSchema = new mongoose.Schema({
  id: { type: Number, unique: true, index: true, required: true },
  imagePath: String,
  text: String,
  author: String,
  upvotes: { type: Number, min: 0 },
  downvotes: { type: Number, min: 0 },
  created: { type: Date, default: Date.now }
});

// Compile model from schema
//var memeModel = mongoose.model('memes', memeSchema);

// Server setup
const server = express();
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
server.listen(8000, () => {
  console.log('Server started!');
});
server.use(bodyParser.json());
server.use(cors(corsOptions));

// Get all the memes
server.route('/api/memes').get((req, res) => {
  memes.find().toArray(function(err, result) {
    if(err) throw err;
    
    res.send({
      result
    })
  }) 
});

// Get all meme images
server.route('/api/images').get((req, res) => {
  memes.find().toArray(function(err, result) {
    if(err) throw err;

    var images = [];
    for(var r in result) {
      images.push(result[r].image);
    }
    res.send({
      images
    })
  }) 
});

// Get a specific meme image
server.route('/api/images/:id').get((req, res) => {
  memes.findOne({ "id": req.params.id }, function(err, result) {
    if(err) throw err;

    var image = result.image;
    res.send({
      image
    })
  });
  
});

// Add a new meme
server.route('/api/meme').post((req, res) => {
  memes.insertOne(req.body);
  memes.findOne({ "imagePath": req.body.imagePath }, function(err, result) {
    if(err) throw err;

    res.status(200).send(result);
  })
  
});

