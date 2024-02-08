const mongoose = require("mongoose");

const ChocolateDetails = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String,
  flavour: String,
  weight: String,
});

const ChocolateSchema = mongoose.model("ChocolateDetails", ChocolateDetails);

module.exports = ChocolateSchema;
