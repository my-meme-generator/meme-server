const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var Meme = require('./models/Meme.js');

// Database setup
var dbUrl = 'mongodb://127.0.0.1:27017/memeDb';
mongoose.connect(dbUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error'));

// Server setup
const server = express();
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors(corsOptions));

// Get all the memes
server.route('/api/memes').get((req, res) => {
  Meme.find(function(err, result) {
    if(err) throw err;
    console.log(result);
    res.status(200).json(result);
  }) 
});

// Add a new meme
server.route('/api/meme').post((req, res) => {
  memeModel.create(req.body, function(err, newMeme) {
    if(err) throw err;

    console.log(typeof(newMeme));
    res.status(200).send(newMeme);
  })
});

server.route('/api/votes/:id').put((req, res) => {
  /*memeModel.findById({ "_id": ObjectId(req.params.id) }, function(err, updatedMeme) {
    if(err) throw err;

    res.status(200).send(updatedMeme);
  });*/
})

server.listen(8000, () => {
  console.log('Server started!');
});