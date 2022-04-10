const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Details = new Schema({
  name: String,
  lastName: String,
  age: Number,
  delete: {type: Boolean, default: false}
});

module.exports = mongoose.model('detail', Details);