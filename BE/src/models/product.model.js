const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  condition: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  isLimited: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema, 'Items'); // Explicitly specify collection name
module.exports = Item;
