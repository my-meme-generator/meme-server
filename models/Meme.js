const mongoose = require('mongoose');

// Meme model
var memeSchema = new mongoose.Schema({
  imagePath: String,
  text: String,
  author: String,
  upvotes: { type: Number, min: 0 },
  downvotes: { type: Number, min: 0 },
  created: { type: Date, default: Date.now }
});

// Compile model from schema
module.exports = mongoose.model('memes', memeSchema);