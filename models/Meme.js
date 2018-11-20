const mongoose = require('mongoose');

// Meme model
var Meme = new mongoose.Schema({
  imagePath: { type: String },
  author: { type: String },
  upvotes: { type: Number, min: 0 },
  downvotes: { type: Number, min: 0 },
  created: { type: Date, default: Date.now }
});

// Compile model from schema
module.exports = mongoose.model('Meme', Meme);