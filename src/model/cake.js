const mongoose = require("mongoose");

const CakeDetails = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String,
  flavour: String,
  caketype: String,
  shape: String,
  size: String,
  weight: String,
});

const cakeSchema = mongoose.model("data", CakeDetails);

module.exports = cakeSchema;
