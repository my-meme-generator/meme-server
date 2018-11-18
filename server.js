const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var Meme = require('./models/Meme.js');

// Database setup
mongoose.connect('mongodb://127.0.0.1:27017/memeDb', { useNewUrlParser: true });
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
    
    res.status(200).json(result);
  }) 
});

// Add a new meme
server.route('/api/meme').post((req, res) => {
  console.log('Inside create meme: ');
  console.log(req.body);
  Meme.create(req.body, (err, newMeme) => {
    if(err) throw err;

    console.log("newMeme: ");
    console.log(newMeme);

    res.status(200).send(newMeme);
  })
});

server.route('/api/votes/:id').put((req, res) => {
  var meme = req.body;
  
  // Update code taken from https://codingthesmartway.com/angular-6-mean-stack-crash-course-part-2-implementing-the-back-end/
  Meme.findById(req.params.id, (err, toUpdate) => {
    if(!toUpdate) {
      return next(newError('Could not load Document'))
    } else {
      toUpdate.upvotes === meme.upvotes ? toUpdate.downvotes = meme.downvotes : toUpdate.upvotes = meme.upvotes;
      
      toUpdate.save().then(meme => {
        res.status(200).json('Update successful');
      }).catch(err => {
        res.status(400).json('Update failed');
      })
    }
  });
})

server.listen(8000, () => {
  console.log('Server started!');
});