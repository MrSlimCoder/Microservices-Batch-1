const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const User = new Schema({
  name: String,
  email: String,
  detail: ObjectId,
  delete: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', User);