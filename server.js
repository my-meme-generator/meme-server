const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
  res.send({
    memes: [{ image: 'lilly', text: 'some text', upvotes: 3892, downvotes: 288 }, { image: 'lucy', text: 'some text', upvotes: 89, downvotes: 28 }]
  });
});

// Get all meme images
server.route('/api/images').get((req, res) => {
  res.send(200, 'image sent');
});

// Get a specific meme image
server.route('/api/images/:image').get((req, res) => {

});

// Add a new meme
server.route('/api/memes').post((req, res) => {
  res.send(201, req.body);
});

