const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Author", authorSchema);
// mongoose will pluralise and store data in collection Authors
